const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? { rejectUnauthorized: false } : false,
});

async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS municipios (
      id TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      uf TEXT NOT NULL,
      grau TEXT NOT NULL,
      indicacao TEXT,
      oportunidade TEXT,
      "situacaoAtual" TEXT,
      "proximosPassos" TEXT,
      "dataProximoPasso" TEXT
    );
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id TEXT PRIMARY KEY,
      nome TEXT NOT NULL,
      cargo TEXT,
      telefone TEXT,
      email TEXT,
      "infoGeral" TEXT,
      papel TEXT NOT NULL,
      frequencia TEXT NOT NULL,
      "naFila" BOOLEAN NOT NULL DEFAULT true,
      "municipioIds" TEXT NOT NULL DEFAULT '[]'
    );
  `);
  await pool.query(`
    CREATE TABLE IF NOT EXISTS interacoes (
      id TEXT PRIMARY KEY,
      "pessoaId" TEXT NOT NULL,
      data TEXT NOT NULL,
      nota TEXT NOT NULL
    );
  `);
}

function rowToPessoa(r) {
  return { ...r, naFila: !!r.naFila, municipioIds: JSON.parse(r.municipioIds || "[]") };
}

// ---------- MUNICIPIOS ----------
app.get("/api/municipios", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM municipios");
  res.json(rows);
});

app.post("/api/municipios", async (req, res) => {
  const m = req.body;
  await pool.query(
    `INSERT INTO municipios (id, nome, uf, grau, indicacao, oportunidade, "situacaoAtual", "proximosPassos", "dataProximoPasso")
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
     ON CONFLICT (id) DO UPDATE SET
       nome=$2, uf=$3, grau=$4, indicacao=$5, oportunidade=$6,
       "situacaoAtual"=$7, "proximosPassos"=$8, "dataProximoPasso"=$9`,
    [m.id, m.nome, m.uf, m.grau, m.indicacao, m.oportunidade, m.situacaoAtual, m.proximosPassos, m.dataProximoPasso]
  );
  res.json({ ok: true });
});

app.delete("/api/municipios/:id", async (req, res) => {
  const id = req.params.id;
  await pool.query("DELETE FROM municipios WHERE id = $1", [id]);
  const { rows: pessoas } = await pool.query("SELECT * FROM pessoas");
  for (const p of pessoas) {
    const ids = JSON.parse(p.municipioIds || "[]").filter(x => x !== id);
    await pool.query('UPDATE pessoas SET "municipioIds" = $1 WHERE id = $2', [JSON.stringify(ids), p.id]);
  }
  res.json({ ok: true });
});

// ---------- PESSOAS ----------
app.get("/api/pessoas", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM pessoas");
  res.json(rows.map(rowToPessoa));
});

app.post("/api/pessoas", async (req, res) => {
  const p = req.body;
  await pool.query(
    `INSERT INTO pessoas (id, nome, cargo, telefone, email, "infoGeral", papel, frequencia, "naFila", "municipioIds")
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
     ON CONFLICT (id) DO UPDATE SET
       nome=$2, cargo=$3, telefone=$4, email=$5, "infoGeral"=$6,
       papel=$7, frequencia=$8, "naFila"=$9, "municipioIds"=$10`,
    [p.id, p.nome, p.cargo, p.telefone, p.email, p.infoGeral, p.papel, p.frequencia, !!p.naFila, JSON.stringify(p.municipioIds || [])]
  );
  res.json({ ok: true });
});

app.delete("/api/pessoas/:id", async (req, res) => {
  await pool.query("DELETE FROM pessoas WHERE id = $1", [req.params.id]);
  await pool.query('DELETE FROM interacoes WHERE "pessoaId" = $1', [req.params.id]);
  res.json({ ok: true });
});

// ---------- INTERACOES ----------
app.get("/api/interacoes", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM interacoes");
  res.json(rows);
});

app.post("/api/interacoes", async (req, res) => {
  const i = req.body;
  await pool.query(
    `INSERT INTO interacoes (id, "pessoaId", data, nota) VALUES ($1,$2,$3,$4)`,
    [i.id, i.pessoaId, i.data, i.nota]
  );
  res.json({ ok: true });
});

app.delete("/api/interacoes/:id", async (req, res) => {
  await pool.query("DELETE FROM interacoes WHERE id = $1", [req.params.id]);
  res.json({ ok: true });
});

// ---------- BACKUP (exportar / importar tudo) ----------
app.get("/api/backup", async (req, res) => {
  const { rows: municipios } = await pool.query("SELECT * FROM municipios");
  const { rows: pessoasRaw } = await pool.query("SELECT * FROM pessoas");
  const pessoas = pessoasRaw.map(rowToPessoa);
  const { rows: interacoes } = await pool.query("SELECT * FROM interacoes");
  const backup = { geradoEm: new Date().toISOString(), municipios, pessoas, interacoes };
  res.setHeader("Content-Disposition", "attachment; filename=backup-crm-" + new Date().toISOString().slice(0, 10) + ".json");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(backup, null, 2));
});

app.post("/api/restaurar", async (req, res) => {
  const { municipios = [], pessoas = [], interacoes = [] } = req.body;

  for (const m of municipios) {
    await pool.query(
      `INSERT INTO municipios (id, nome, uf, grau, indicacao, oportunidade, "situacaoAtual", "proximosPassos", "dataProximoPasso")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)
       ON CONFLICT (id) DO UPDATE SET
         nome=$2, uf=$3, grau=$4, indicacao=$5, oportunidade=$6,
         "situacaoAtual"=$7, "proximosPassos"=$8, "dataProximoPasso"=$9`,
      [m.id, m.nome, m.uf, m.grau, m.indicacao, m.oportunidade, m.situacaoAtual, m.proximosPassos, m.dataProximoPasso]
    );
  }
  for (const p of pessoas) {
    await pool.query(
      `INSERT INTO pessoas (id, nome, cargo, telefone, email, "infoGeral", papel, frequencia, "naFila", "municipioIds")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)
       ON CONFLICT (id) DO UPDATE SET
         nome=$2, cargo=$3, telefone=$4, email=$5, "infoGeral"=$6,
         papel=$7, frequencia=$8, "naFila"=$9, "municipioIds"=$10`,
      [p.id, p.nome, p.cargo, p.telefone, p.email, p.infoGeral, p.papel, p.frequencia, !!p.naFila, JSON.stringify(p.municipioIds || [])]
    );
  }
  for (const i of interacoes) {
    await pool.query(
      `INSERT INTO interacoes (id, "pessoaId", data, nota) VALUES ($1,$2,$3,$4) ON CONFLICT (id) DO NOTHING`,
      [i.id, i.pessoaId, i.data, i.nota]
    );
  }

  res.json({ ok: true, municipios: municipios.length, pessoas: pessoas.length, interacoes: interacoes.length });
});

const PORT = process.env.PORT || 3000;
initDb()
  .then(() => {
    app.listen(PORT, () => console.log("CRM rodando na porta " + PORT));
  })
  .catch(err => {
    console.error("Erro ao iniciar banco de dados:", err);
    process.exit(1);
  });
