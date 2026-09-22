const { useState, useEffect, useMemo } = React;

// Icones SVG simples (substituem lucide-react, que precisa de bundler)
function Icon({ path, size = 16, className = "", strokeWidth = 2 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {path}
    </svg>
  );
}
const Building2 = (p) => <Icon {...p} path={<><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></>} />;
const Users = (p) => <Icon {...p} path={<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>} />;
const Clock = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>} />;
const Plus = (p) => <Icon {...p} path={<><path d="M5 12h14"/><path d="M12 5v14"/></>} />;
const X = (p) => <Icon {...p} path={<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>} />;
const ChevronRight = (p) => <Icon {...p} path={<path d="m9 18 6-6-6-6"/>} />;
const ArrowLeft = (p) => <Icon {...p} path={<><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></>} />;
const Phone = (p) => <Icon {...p} path={<path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.632 1.535l-.465.354a1 1 0 0 0-.302 1.214 14.1 14.1 0 0 0 6.231 6.231Z"/>} />;
const Mail = (p) => <Icon {...p} path={<><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-8.97 5.7a2 2 0 0 1-2.06 0L2 6"/></>} />;
const Search = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></>} />;
const Check = (p) => <Icon {...p} path={<path d="M20 6 9 17l-5-5"/>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const MessageCircle = (p) => <Icon {...p} path={<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>} />;
const Edit2 = (p) => <Icon {...p} path={<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>} />;
const MapPin = (p) => <Icon {...p} path={<><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></>} />;
const PhoneCall = (p) => <Icon {...p} path={<><path d="M13 2a9 9 0 0 1 9 9"/><path d="M13 6a5 5 0 0 1 5 5"/><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.632 1.535l-.465.354a1 1 0 0 0-.302 1.214 14.1 14.1 0 0 0 6.231 6.231Z"/></>} />;
const Calendar = (p) => <Icon {...p} path={<><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></>} />;
const Star = (p) => <Icon {...p} path={<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>} />;
const RefreshCw = (p) => <Icon {...p} path={<><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></>} />;
const Download = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></>} />;
const Upload = (p) => <Icon {...p} path={<><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></>} />;
function WhatsappIcon({ size = 16, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.31-1.64-.6-2.88-1.24-4.75-4.13-4.9-4.32-.14-.2-1.17-1.56-1.17-2.98s.75-2.11 1.02-2.4c.26-.28.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.6.82 2.06.89 2.21.07.15.12.32.02.51-.1.19-.15.3-.29.47-.15.16-.31.36-.45.49-.15.14-.3.3-.13.6.18.29.79 1.31 1.7 2.12 1.17 1.04 2.16 1.37 2.45 1.52.3.15.47.13.64-.08.18-.2.75-.87.95-1.17.2-.3.4-.24.66-.14.27.1 1.7.8 1.99.95.29.14.48.21.55.33.07.13.07.72-.16 1.4Z"/>
    </svg>
  );
}

const UFS = ["AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
             "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO"];

const PAPEL = {
  prefeitura: { label: "Pessoa da Prefeitura",       color: "bg-blue-50 text-blue-700" },
  comercial:  { label: "Ponte Comercial / Parceiro",  color: "bg-purple-50 text-purple-700" },
  outros:     { label: "Outros",                      color: "bg-slate-100 text-slate-600" },
};

const FREQ = {
  principal:  { label: "Principal",  sub: "Diario",       days: 1 },
  regular:    { label: "Regular",    sub: "A cada 3 dias", days: 3 },
  esporadico: { label: "Esporadico", sub: "Semanal",       days: 7 },
};

const GRAU = {
  alta:  { label: "Alta",  dot: "bg-red-500",   chip: "bg-red-50 text-red-700 border-red-200" },
  media: { label: "Media", dot: "bg-amber-500", chip: "bg-amber-50 text-amber-700 border-amber-200" },
  baixa: { label: "Baixa", dot: "bg-slate-400", chip: "bg-slate-50 text-slate-600 border-slate-200" },
};

const STORAGE_KEY = "crm-v3-data";
const uid = () => Math.random().toString(36).slice(2, 10);

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function diasDesde(iso) {
  if (!iso) return 999;
  return Math.round((new Date(todayISO() + "T00:00:00") - new Date(iso + "T00:00:00")) / 86400000);
}

function fmtDate(iso) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return d + "/" + m + "/" + y;
}

// Monta o link wa.me a partir de um telefone em qualquer formato.
// Se o numero nao comecar com codigo de pais, assume Brasil (55).
function linkWhatsapp(telefone) {
  if (!telefone) return null;
  let digitos = telefone.replace(/\D/g, "");
  if (!digitos) return null;
  if (digitos.length <= 11) {
    digitos = "55" + digitos;
  }
  return "https://wa.me/" + digitos;
}

function precisaContato(pessoa, interacoes) {
  if (!pessoa.naFila) return false;
  const max = FREQ[pessoa.frequencia] ? FREQ[pessoa.frequencia].days : 1;
  const lista = interacoes.filter(i => i.pessoaId === pessoa.id).sort((a, b) => b.data.localeCompare(a.data));
  if (!lista.length) return true;
  return diasDesde(lista[0].data) >= max;
}

function statusBadge(pessoa, interacoes) {
  const lista = interacoes.filter(i => i.pessoaId === pessoa.id).sort((a, b) => b.data.localeCompare(a.data));
  if (!lista.length) return { label: "Nunca contatado", cls: "bg-slate-100 text-slate-500" };
  const d = diasDesde(lista[0].data);
  const max = FREQ[pessoa.frequencia] ? FREQ[pessoa.frequencia].days : 1;
  if (d === 0) return { label: "Falei hoje", cls: "bg-emerald-100 text-emerald-700" };
  if (d < max) return { label: "Falei ha " + d + "d", cls: "bg-emerald-50 text-emerald-600" };
  if (d < max * 2) return { label: "Atrasado " + d + "d", cls: "bg-amber-100 text-amber-700" };
  return { label: "Sem contato ha " + d + "d", cls: "bg-red-100 text-red-700" };
}

function App() {
  const [loading, setLoading]       = useState(true);
  const [municipios, setMunicipios] = useState([]);
  const [pessoas, setPessoas]       = useState([]);
  const [interacoes, setInteracoes] = useState([]);
  const [tab, setTab]               = useState("fila");
  const [view, setView]             = useState({ name: "list" });
  const [search, setSearch]         = useState("");
  const [modal, setModal]           = useState(null);
  const [toast, setToast]           = useState("");

  async function carregarTudo() {
    const [m, p, i] = await Promise.all([
      fetch("/api/municipios").then(r => r.json()),
      fetch("/api/pessoas").then(r => r.json()),
      fetch("/api/interacoes").then(r => r.json()),
    ]);
    setMunicipios(m);
    setPessoas(p);
    setInteracoes(i);
  }

  useEffect(() => {
    (async () => {
      try {
        await carregarTudo();
      } catch (e) { console.error(e); }
      finally { setLoading(false); }
    })();
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(""), 2000);
    return () => clearTimeout(t);
  }, [toast]);

  async function salvarNaApi(tipo, obj) {
    await fetch("/api/" + tipo, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    });
  }
  async function excluirNaApi(tipo, id) {
    await fetch("/api/" + tipo + "/" + id, { method: "DELETE" });
  }

  async function salvarPessoa(form, editId) {
    const obj = editId ? Object.assign({}, pessoas.find(p => p.id === editId), form) : Object.assign({ id: uid() }, form);
    await salvarNaApi("pessoas", obj);
    if (editId) setPessoas(pessoas.map(p => p.id === editId ? obj : p));
    else setPessoas(pessoas.concat([obj]));
    setModal(null);
  }

  async function excluirPessoa(id) {
    await excluirNaApi("pessoas", id);
    setPessoas(pessoas.filter(p => p.id !== id));
    setInteracoes(interacoes.filter(i => i.pessoaId !== id));
    setView({ name: "list" });
  }

  async function toggleFila(id) {
    const p = pessoas.find(x => x.id === id);
    const obj = Object.assign({}, p, { naFila: !p.naFila });
    await salvarNaApi("pessoas", obj);
    setPessoas(pessoas.map(x => x.id === id ? obj : x));
  }

  async function toggleFreq(id) {
    const order = ["principal", "regular", "esporadico"];
    const p = pessoas.find(x => x.id === id);
    const next = order[(order.indexOf(p.frequencia) + 1) % order.length];
    const obj = Object.assign({}, p, { frequencia: next });
    await salvarNaApi("pessoas", obj);
    setPessoas(pessoas.map(x => x.id === id ? obj : x));
  }

  async function salvarMunicipio(form, editId) {
    const obj = editId ? Object.assign({}, municipios.find(m => m.id === editId), form) : Object.assign({ id: uid() }, form);
    await salvarNaApi("municipios", obj);
    if (editId) setMunicipios(municipios.map(m => m.id === editId ? obj : m));
    else setMunicipios(municipios.concat([obj]));
    setModal(null);
  }

  async function excluirMunicipio(id) {
    await excluirNaApi("municipios", id);
    setMunicipios(municipios.filter(m => m.id !== id));
    const novasPessoas = pessoas.map(p => Object.assign({}, p, { municipioIds: (p.municipioIds || []).filter(mid => mid !== id) }));
    setPessoas(novasPessoas);
    for (const p of novasPessoas) { await salvarNaApi("pessoas", p); }
    setView({ name: "list" });
  }

  async function registrar(pessoaId, nota) {
    const nova = { id: uid(), pessoaId: pessoaId, data: todayISO(), nota: nota };
    await salvarNaApi("interacoes", nova);
    setInteracoes(interacoes.concat([nova]));
    const p = pessoas.find(x => x.id === pessoaId);
    setToast("Registrado: " + (p ? p.nome : ""));
    setModal(null);
  }

  async function excluirInteracao(id) {
    await excluirNaApi("interacoes", id);
    setInteracoes(interacoes.filter(i => i.id !== id));
  }

  const fila = useMemo(() => {
    return pessoas
      .filter(p => precisaContato(p, interacoes))
      .sort((a, b) => {
        const fo = ["principal", "regular", "esporadico"];
        return fo.indexOf(a.frequencia) - fo.indexOf(b.frequencia);
      });
  }, [pessoas, interacoes]);

  const pessoasFiltradas = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return pessoas;
    return pessoas.filter(p =>
      p.nome.toLowerCase().includes(q) ||
      (p.cargo || "").toLowerCase().includes(q) ||
      (p.municipioIds || []).some(mid => {
        const m = municipios.find(x => x.id === mid);
        return m && m.nome.toLowerCase().includes(q);
      })
    );
  }, [pessoas, search, municipios]);

  const municipiosFiltrados = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return municipios;
    return municipios.filter(m => m.nome.toLowerCase().includes(q) || m.uf.toLowerCase().includes(q));
  }, [municipios, search]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96 text-slate-400 text-sm">
        Carregando...
      </div>
    );
  }

  const goBack = () => setView({ name: "list" });

  return (
    <div className="max-w-md mx-auto bg-slate-50 min-h-screen flex flex-col">

      {toast && (
        <div className="fixed top-3 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-4 py-2 rounded-full z-50 shadow-lg">
          {toast}
        </div>
      )}

      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="px-4 pt-4 pb-2 flex items-center gap-2">
          {view.name !== "list" && (
            <button onClick={goBack} className="p-1 -ml-1 text-slate-500">
              <ArrowLeft size={20} />
            </button>
          )}
          <h1 className="text-lg font-semibold text-slate-800">
            {view.name !== "list" ? "Detalhes" :
             tab === "fila" ? "Fila do dia" :
             tab === "pessoas" ? "Pessoas" : "Prefeituras"}
          </h1>
          {view.name === "list" && tab === "fila" && (
            <span className="ml-auto text-xs text-slate-400">{fila.length} pendentes</span>
          )}
          {view.name === "list" && (
            <button
              onClick={() => setModal({ type: "backup" })}
              className={"p-1.5 rounded-lg text-slate-400 " + (tab === "fila" ? "" : "ml-auto")}
              title="Backup"
            >
              <Download size={18} />
            </button>
          )}
        </div>
        {view.name === "list" && (tab === "pessoas" || tab === "municipios") && (
          <div className="px-4 pb-3">
            <div className="relative">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder={tab === "pessoas" ? "Buscar pessoa..." : "Buscar prefeitura..."}
                className="w-full bg-slate-100 rounded-lg pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>
          </div>
        )}
      </div>

      <main className="flex-1 overflow-y-auto pb-24 px-4 pt-3">

        {tab === "fila" && view.name === "list" && (
          <FilaView
            fila={fila}
            municipios={municipios}
            onCheck={p => setModal({ type: "registrar", pessoaId: p.id, pessoaNome: p.nome })}
            onOpen={id => setView({ name: "pessoa", id: id })}
          />
        )}

        {tab === "pessoas" && view.name === "list" && (
          <PessoasList
            pessoas={pessoasFiltradas}
            municipios={municipios}
            interacoes={interacoes}
            onOpen={id => setView({ name: "pessoa", id: id })}
            onAdd={() => setModal({ type: "pessoa" })}
            onToggleFila={toggleFila}
            onToggleFreq={toggleFreq}
          />
        )}

        {tab === "municipios" && view.name === "list" && (
          <MunicipiosList
            municipios={municipiosFiltrados}
            pessoas={pessoas}
            interacoes={interacoes}
            onOpen={id => setView({ name: "municipio", id: id })}
            onAdd={() => setModal({ type: "municipio" })}
          />
        )}

        {view.name === "pessoa" && (function() {
          const pessoa = pessoas.find(p => p.id === view.id);
          if (!pessoa) return null;
          const hist = interacoes
            .filter(i => i.pessoaId === view.id)
            .sort((a, b) => b.data.localeCompare(a.data));
          return (
            <PessoaDetail
              pessoa={pessoa}
              municipios={municipios}
              historico={hist}
              onEdit={() => setModal({ type: "pessoa", editId: view.id })}
              onDelete={() => excluirPessoa(view.id)}
              onCheck={() => setModal({ type: "registrar", pessoaId: pessoa.id, pessoaNome: pessoa.nome })}
              onToggleFila={() => toggleFila(view.id)}
              onToggleFreq={() => toggleFreq(view.id)}
              onExcluirInteracao={excluirInteracao}
              onOpenMunicipio={id => setView({ name: "municipio", id: id })}
            />
          );
        })()}

        {view.name === "municipio" && (function() {
          const mun = municipios.find(m => m.id === view.id);
          if (!mun) return null;
          const vinculadas = pessoas.filter(p => (p.municipioIds || []).includes(view.id));
          return (
            <MunicipioDetail
              mun={mun}
              pessoas={vinculadas}
              interacoes={interacoes}
              onEdit={() => setModal({ type: "municipio", editId: view.id })}
              onDelete={() => excluirMunicipio(view.id)}
              onOpenPessoa={id => setView({ name: "pessoa", id: id })}
              onAddPessoa={() => setModal({ type: "pessoa", presetMunicipio: view.id })}
              onCheck={p => setModal({ type: "registrar", pessoaId: p.id, pessoaNome: p.nome })}
            />
          );
        })()}

      </main>

      {view.name === "list" && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 max-w-md mx-auto">
          <div className="flex">
            {[
              { key: "fila",       label: "Fila do dia", Icon: Clock,     badge: fila.length },
              { key: "pessoas",    label: "Pessoas",     Icon: Users,     badge: 0 },
              { key: "municipios", label: "Prefeituras", Icon: Building2, badge: 0 },
            ].map(function(item) {
              const Icon = item.Icon;
              const active = tab === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => { setTab(item.key); setSearch(""); }}
                  className={"flex-1 flex flex-col items-center gap-0.5 py-2.5 " + (active ? "text-indigo-600" : "text-slate-400")}
                >
                  <div className="relative">
                    <Icon size={20} />
                    {item.badge > 0 && (
                      <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] rounded-full min-w-[15px] h-[15px] flex items-center justify-center px-0.5">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-medium">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {view.name === "list" && (tab === "pessoas" || tab === "municipios") && (
        <button
          onClick={() => setModal({ type: tab === "pessoas" ? "pessoa" : "municipio" })}
          className="fixed bottom-20 right-1/2 translate-x-[9.5rem] bg-indigo-600 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg active:scale-95 transition"
        >
          <Plus size={22} />
        </button>
      )}

      {modal && modal.type === "backup" && (
        <BackupModal
          onClose={() => setModal(null)}
          onRestaurado={carregarTudo}
        />
      )}
      {modal && modal.type === "registrar" && (
        <RegistrarModal
          pessoaNome={modal.pessoaNome}
          onSave={nota => registrar(modal.pessoaId, nota)}
          onClose={() => setModal(null)}
        />
      )}
      {modal && modal.type === "pessoa" && (
        <PessoaForm
          pessoa={modal.editId ? pessoas.find(p => p.id === modal.editId) : null}
          municipios={municipios}
          presetMunicipio={modal.presetMunicipio}
          onSave={form => salvarPessoa(form, modal.editId)}
          onClose={() => setModal(null)}
        />
      )}
      {modal && modal.type === "municipio" && (
        <MunicipioForm
          municipio={modal.editId ? municipios.find(m => m.id === modal.editId) : null}
          onSave={form => salvarMunicipio(form, modal.editId)}
          onClose={() => setModal(null)}
        />
      )}

    </div>
  );
}

function FilaView({ fila, municipios, onCheck, onOpen }) {
  if (fila.length === 0) {
    return (
      <div className="text-center py-20">
        <Check size={36} className="mx-auto text-emerald-400 mb-3" />
        <p className="font-medium text-slate-700">Tudo em dia!</p>
        <p className="text-sm text-slate-400 mt-1">Nenhum contato pendente agora.</p>
      </div>
    );
  }

  const principais = fila.filter(p => p.frequencia === "principal");
  const outros     = fila.filter(p => p.frequencia !== "principal");

  return (
    <div className="space-y-4">
      <p className="text-[11px] text-slate-400 px-1">
        Toque no circulo para registrar o contato de hoje.
      </p>
      {principais.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <Star size={13} className="text-indigo-500" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Principais</span>
          </div>
          <div className="space-y-2">
            {principais.map(p => (
              <FilaCard key={p.id} pessoa={p} municipios={municipios} onCheck={onCheck} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
      {outros.length > 0 && (
        <div>
          <div className="flex items-center gap-1.5 mb-2 px-1">
            <RefreshCw size={13} className="text-slate-400" />
            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Outros</span>
          </div>
          <div className="space-y-2">
            {outros.map(p => (
              <FilaCard key={p.id} pessoa={p} municipios={municipios} onCheck={onCheck} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FilaCard({ pessoa, municipios, onCheck, onOpen }) {
  const munsNomes = (pessoa.municipioIds || [])
    .map(id => { const m = municipios.find(x => x.id === id); return m ? m.nome : null; })
    .filter(Boolean);
  const papelInfo = PAPEL[pessoa.papel] || PAPEL.outros;

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-3">
      <button
        onClick={() => onCheck(pessoa)}
        className="w-9 h-9 rounded-full border-2 border-indigo-300 flex items-center justify-center text-indigo-500 active:bg-indigo-50 shrink-0 transition"
      >
        <Check size={16} />
      </button>
      <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onOpen(pessoa.id)}>
        <p className="font-medium text-slate-800 text-sm truncate">{pessoa.nome}</p>
        <p className="text-xs text-slate-500 truncate">
          {pessoa.cargo ? pessoa.cargo + (munsNomes.length ? " - " : "") : ""}
          {munsNomes.join(", ")}
        </p>
        <span className={"inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded-full font-medium " + papelInfo.color}>
          {papelInfo.label}
        </span>
      </div>
      {pessoa.telefone && linkWhatsapp(pessoa.telefone) && (
        <a
          href={linkWhatsapp(pessoa.telefone)}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 active:bg-emerald-100 shrink-0 transition"
        >
          <WhatsappIcon size={16} />
        </a>
      )}
      <ChevronRight size={15} className="text-slate-300 shrink-0" onClick={() => onOpen(pessoa.id)} />
    </div>
  );
}

function PessoasList({ pessoas, municipios, interacoes, onOpen, onAdd, onToggleFila, onToggleFreq }) {
  if (pessoas.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-sm mb-3">Nenhuma pessoa cadastrada</p>
        <button onClick={onAdd} className="text-indigo-600 text-sm font-medium">Adicionar pessoa</button>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {pessoas.map(p => {
        const sb = statusBadge(p, interacoes);
        const munsNomes = (p.municipioIds || [])
          .map(id => { const m = municipios.find(x => x.id === id); return m ? m.nome : null; })
          .filter(Boolean);
        const freqInfo = FREQ[p.frequencia] || FREQ.regular;
        return (
          <div key={p.id} className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-2">
            <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onOpen(p.id)}>
              <div className="flex items-center gap-1.5">
                <p className="font-medium text-slate-800 text-sm truncate">{p.nome}</p>
                {p.naFila && <Star size={11} className="text-indigo-400 shrink-0" />}
              </div>
              <p className="text-xs text-slate-500 truncate">
                {p.cargo ? p.cargo + (munsNomes.length ? " - " : "") : ""}
                {munsNomes.join(", ")}
              </p>
              <span className={"inline-block mt-1 text-[10px] px-1.5 py-0.5 rounded-full font-medium " + sb.cls}>
                {sb.label}
              </span>
            </div>
            <div className="flex flex-col items-end gap-1.5 shrink-0">
              <button
                onClick={() => onToggleFila(p.id)}
                className={"text-[10px] px-2 py-1 rounded-full border font-medium " + (p.naFila ? "border-indigo-300 bg-indigo-50 text-indigo-600" : "border-slate-200 text-slate-400")}
              >
                {p.naFila ? "Na fila" : "Fora"}
              </button>
              <button
                onClick={() => onToggleFreq(p.id)}
                className="text-[10px] px-2 py-1 rounded-full border border-slate-200 text-slate-500"
              >
                {freqInfo.label}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function MunicipiosList({ municipios, pessoas, interacoes, onOpen, onAdd }) {
  if (municipios.length === 0) {
    return (
      <div className="text-center py-16 text-slate-400">
        <p className="text-sm mb-3">Nenhuma prefeitura cadastrada</p>
        <button onClick={onAdd} className="text-indigo-600 text-sm font-medium">Adicionar prefeitura</button>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {municipios.map(m => {
        const vinculadas = pessoas.filter(p => (p.municipioIds || []).includes(m.id));
        const grau = GRAU[m.grau] || GRAU.media;
        let piorUrgencia = 0;
        let piorLabel = "";
        let piorCls = "";
        vinculadas.forEach(p => {
          const sb = statusBadge(p, interacoes);
          const u = sb.cls.includes("red") ? 3 : sb.cls.includes("amber") ? 2 : 0;
          if (u > piorUrgencia) {
            piorUrgencia = u;
            piorLabel = sb.label;
            piorCls = sb.cls;
          }
        });
        return (
          <button
            key={m.id}
            onClick={() => onOpen(m.id)}
            className="w-full bg-white rounded-xl border border-slate-200 p-3 flex items-center justify-between text-left active:bg-slate-50"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className={"w-2 h-2 rounded-full shrink-0 " + grau.dot} />
              <div className="min-w-0">
                <p className="font-medium text-slate-800 text-sm truncate">{m.nome}</p>
                <p className="text-xs text-slate-500">{m.uf} - {vinculadas.length} {vinculadas.length === 1 ? "pessoa" : "pessoas"}</p>
                {m.oportunidade && (
                  <p className="text-[11px] text-indigo-500 truncate mt-0.5">{m.oportunidade}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {piorLabel && (
                <span className={"text-[10px] px-1.5 py-0.5 rounded-full font-medium " + piorCls}>
                  {piorLabel}
                </span>
              )}
              <ChevronRight size={15} className="text-slate-300" />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function PessoaDetail({ pessoa, municipios, historico, onEdit, onDelete, onCheck, onToggleFila, onToggleFreq, onExcluirInteracao, onOpenMunicipio }) {
  const sb = statusBadge(pessoa, historico);
  const vinculos = (pessoa.municipioIds || []).map(id => municipios.find(m => m.id === id)).filter(Boolean);
  const freqInfo = FREQ[pessoa.frequencia] || FREQ.regular;
  const papelInfo = PAPEL[pessoa.papel] || PAPEL.outros;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-base font-semibold text-slate-800">{pessoa.nome}</h2>
            <p className="text-sm text-slate-500">{pessoa.cargo || "Sem cargo"}</p>
          </div>
          <span className={"text-[11px] px-2 py-1 rounded-full font-medium shrink-0 " + sb.cls}>{sb.label}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          <span className={"text-[11px] px-2 py-1 rounded-full " + papelInfo.color}>{papelInfo.label}</span>
          <button
            onClick={onToggleFreq}
            className="text-[11px] px-2 py-1 rounded-full border border-slate-200 text-slate-600 active:bg-slate-50"
          >
            {freqInfo.label} - {freqInfo.sub}
          </button>
          <button
            onClick={onToggleFila}
            className={"text-[11px] px-2 py-1 rounded-full border font-medium " + (pessoa.naFila ? "border-indigo-300 bg-indigo-50 text-indigo-600" : "border-slate-200 text-slate-400")}
          >
            {pessoa.naFila ? "Na fila do dia" : "Fora da fila"}
          </button>
        </div>

        {vinculos.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {vinculos.map(m => (
              <button
                key={m.id}
                onClick={() => onOpenMunicipio(m.id)}
                className="text-[11px] bg-blue-50 text-blue-700 px-2 py-1 rounded-full flex items-center gap-1"
              >
                <Building2 size={10} /> {m.nome}/{m.uf}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-1.5">
          {pessoa.telefone && (
            <a href={"tel:" + pessoa.telefone} className="flex items-center gap-2 text-sm text-slate-600">
              <Phone size={13} className="text-slate-400" /> {pessoa.telefone}
            </a>
          )}
          {pessoa.email && (
            <a href={"mailto:" + pessoa.email} className="flex items-center gap-2 text-sm text-slate-600">
              <Mail size={13} className="text-slate-400" /> {pessoa.email}
            </a>
          )}
        </div>

        {pessoa.telefone && linkWhatsapp(pessoa.telefone) && (
          <a
            href={linkWhatsapp(pessoa.telefone)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-emerald-500 text-white rounded-lg py-2.5 flex items-center justify-center gap-2 font-medium text-sm active:scale-[0.98] transition"
          >
            <WhatsappIcon size={16} /> Abrir no WhatsApp
          </a>
        )}

        {pessoa.infoGeral && (
          <div className="border-t border-slate-100 pt-3">
            <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-1">Informacoes gerais</p>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{pessoa.infoGeral}</p>
          </div>
        )}

        <div className="flex gap-2 pt-1">
          <button
            onClick={onEdit}
            className="flex-1 text-sm border border-slate-200 rounded-lg py-2 flex items-center justify-center gap-1.5 text-slate-600"
          >
            <Edit2 size={13} /> Editar
          </button>
          <button
            onClick={onDelete}
            className="flex-1 text-sm border border-red-200 rounded-lg py-2 flex items-center justify-center gap-1.5 text-red-600"
          >
            <Trash2 size={13} /> Excluir
          </button>
        </div>
      </div>

      <button
        onClick={onCheck}
        className="w-full bg-indigo-600 text-white rounded-xl py-3.5 font-medium flex items-center justify-center gap-2 active:scale-[0.98] transition"
      >
        <PhoneCall size={17} /> Registrar contato de hoje
      </button>

      <div>
        <h3 className="text-sm font-medium text-slate-700 mb-2">Historico ({historico.length})</h3>
        {historico.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">Nenhum contato registrado ainda.</p>
        ) : (
          <div className="space-y-2">
            {historico.map(i => (
              <div key={i.id} className="bg-white rounded-xl border border-slate-200 p-3 flex items-start justify-between gap-2">
                <div className="flex items-start gap-2 min-w-0">
                  <MessageCircle size={13} className="text-indigo-400 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-500 font-medium">{fmtDate(i.data)}</p>
                    <p className="text-sm text-slate-700 break-words mt-0.5">{i.nota}</p>
                  </div>
                </div>
                <button onClick={() => onExcluirInteracao(i.id)} className="text-slate-300 shrink-0">
                  <X size={13} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function MunicipioDetail({ mun, pessoas, interacoes, onEdit, onDelete, onOpenPessoa, onAddPessoa, onCheck }) {
  const grau = GRAU[mun.grau] || GRAU.media;
  const atrasado = mun.dataProximoPasso && diasDesde(mun.dataProximoPasso) > 0;

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl border border-slate-200 p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-base font-semibold text-slate-800">{mun.nome}</h2>
            <p className="text-sm text-slate-500 flex items-center gap-1"><MapPin size={12} /> {mun.uf}</p>
          </div>
          <span className={"text-[11px] px-2 py-1 rounded-full border font-medium " + grau.chip}>
            Prioridade {grau.label}
          </span>
        </div>

        {mun.indicacao && (
          <div className="border-t border-slate-100 pt-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Como chegamos / indicacao</p>
            <p className="text-sm text-slate-700 mt-0.5">{mun.indicacao}</p>
          </div>
        )}
        {mun.oportunidade && (
          <div className="border-t border-slate-100 pt-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Oportunidade</p>
            <p className="text-sm text-slate-700 mt-0.5">{mun.oportunidade}</p>
          </div>
        )}
        {mun.situacaoAtual && (
          <div className="border-t border-slate-100 pt-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Situacao atual</p>
            <p className="text-sm text-slate-700 mt-0.5 whitespace-pre-wrap">{mun.situacaoAtual}</p>
          </div>
        )}
        {mun.proximosPassos && (
          <div className="border-t border-slate-100 pt-2">
            <p className="text-[10px] text-slate-400 uppercase tracking-wide">Proximos passos</p>
            <p className="text-sm text-slate-700 mt-0.5 whitespace-pre-wrap">{mun.proximosPassos}</p>
          </div>
        )}
        {mun.dataProximoPasso && (
          <div className={"border-t border-slate-100 pt-2 flex items-center gap-1.5 " + (atrasado ? "text-red-600" : "text-slate-600")}>
            <Calendar size={13} />
            <p className="text-sm">
              Data prevista: {fmtDate(mun.dataProximoPasso)}{atrasado ? " - atrasado" : ""}
            </p>
          </div>
        )}

        <div className="flex gap-2 pt-1">
          <button
            onClick={onEdit}
            className="flex-1 text-sm border border-slate-200 rounded-lg py-2 flex items-center justify-center gap-1.5 text-slate-600"
          >
            <Edit2 size={13} /> Editar
          </button>
          <button
            onClick={onDelete}
            className="flex-1 text-sm border border-red-200 rounded-lg py-2 flex items-center justify-center gap-1.5 text-red-600"
          >
            <Trash2 size={13} /> Excluir
          </button>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-slate-700">Pessoas ({pessoas.length})</h3>
          <button onClick={onAddPessoa} className="text-indigo-600 text-xs font-medium flex items-center gap-1">
            <Plus size={13} /> Adicionar
          </button>
        </div>
        {pessoas.length === 0 ? (
          <p className="text-sm text-slate-400 text-center py-6">Nenhuma pessoa vinculada.</p>
        ) : (
          <div className="space-y-2">
            {pessoas.map(p => {
              const sb = statusBadge(p, interacoes);
              return (
                <div key={p.id} className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-3">
                  <button
                    onClick={() => onCheck(p)}
                    className="w-8 h-8 rounded-full border-2 border-indigo-200 flex items-center justify-center text-indigo-400 active:bg-indigo-50 shrink-0"
                  >
                    <Check size={14} />
                  </button>
                  <div className="flex-1 min-w-0 cursor-pointer" onClick={() => onOpenPessoa(p.id)}>
                    <p className="font-medium text-slate-800 text-sm truncate">{p.nome}</p>
                    <p className="text-xs text-slate-500 truncate">{p.cargo || "Sem cargo"}</p>
                    <span className={"inline-block mt-0.5 text-[10px] px-1.5 py-0.5 rounded-full " + sb.cls}>{sb.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-300 shrink-0" onClick={() => onOpenPessoa(p.id)} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function BackupModal({ onClose, onRestaurado }) {
  const [restaurando, setRestaurando] = useState(false);
  const [msg, setMsg] = useState("");

  async function baixarBackup() {
    window.location.href = "/api/backup";
  }

  async function handleArquivo(e) {
    const file = e.target.files[0];
    if (!file) return;
    setRestaurando(true);
    setMsg("");
    try {
      const texto = await file.text();
      const dados = JSON.parse(texto);
      const res = await fetch("/api/restaurar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const r = await res.json();
      setMsg("Restaurado: " + r.municipios + " prefeituras, " + r.pessoas + " pessoas, " + r.interacoes + " contatos.");
      await onRestaurado();
    } catch (err) {
      setMsg("Erro ao ler o arquivo. Confira se e um backup valido gerado por este app.");
    } finally {
      setRestaurando(false);
    }
  }

  return (
    <ModalShell title="Backup dos dados" onClose={onClose}>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-slate-600 mb-2">
            Baixa um arquivo com todas as prefeituras, pessoas e historico de contatos. Guarde esse arquivo em algum lugar seguro (Google Drive, WhatsApp para voce mesmo, etc).
          </p>
          <button
            onClick={baixarBackup}
            className="w-full bg-indigo-600 text-white font-medium rounded-lg py-3 flex items-center justify-center gap-2"
          >
            <Download size={16} /> Baixar backup agora
          </button>
        </div>

        <div className="border-t border-slate-100 pt-4">
          <p className="text-sm text-slate-600 mb-2">
            Restaurar a partir de um arquivo de backup. Isso adiciona/atualiza os dados do arquivo sem apagar o que ja esta salvo.
          </p>
          <label className="w-full border border-slate-200 text-slate-600 font-medium rounded-lg py-3 flex items-center justify-center gap-2 cursor-pointer">
            <Upload size={16} /> {restaurando ? "Restaurando..." : "Escolher arquivo de backup"}
            <input type="file" accept="application/json" className="hidden" onChange={handleArquivo} disabled={restaurando} />
          </label>
          {msg && <p className="text-xs text-slate-500 mt-2">{msg}</p>}
        </div>

        <button onClick={onClose} className="w-full border border-slate-200 text-slate-600 font-medium rounded-lg py-2.5">
          Fechar
        </button>
      </div>
    </ModalShell>
  );
}

function RegistrarModal({ pessoaNome, onSave, onClose }) {
  const [nota, setNota] = useState("");
  return (
    <ModalShell title={"Contato com " + pessoaNome} onClose={onClose}>
      <div className="space-y-3">
        <p className="text-xs text-slate-500">O que foi dito / proximo passo?</p>
        <textarea
          value={nota}
          onChange={e => setNota(e.target.value)}
          autoFocus
          rows={4}
          placeholder="Ex: apresentei proposta, aguarda retorno do secretario ate sexta"
          className="w-full bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
        />
        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 border border-slate-200 text-slate-600 font-medium rounded-lg py-3"
          >
            Cancelar
          </button>
          <button
            disabled={!nota.trim()}
            onClick={() => onSave(nota.trim())}
            className="flex-1 bg-indigo-600 disabled:bg-slate-300 text-white font-medium rounded-lg py-3"
          >
            Salvar
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

function ModalShell({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-end justify-center z-20">
      <div className="bg-white w-full max-w-md rounded-t-2xl p-4 max-h-[85vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-semibold text-slate-800">{title}</h3>
          <button onClick={onClose} className="text-slate-400"><X size={20} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div>
      <label className="text-xs font-medium text-slate-500">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

const inp = "w-full bg-slate-100 rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-200";

function PessoaForm({ pessoa, municipios, presetMunicipio, onSave, onClose }) {
  const [nome,        setNome]        = useState(pessoa ? pessoa.nome       : "");
  const [cargo,       setCargo]       = useState(pessoa ? pessoa.cargo      : "");
  const [telefone,    setTelefone]    = useState(pessoa ? pessoa.telefone   : "");
  const [email,       setEmail]       = useState(pessoa ? pessoa.email      : "");
  const [infoGeral,   setInfoGeral]   = useState(pessoa ? pessoa.infoGeral  : "");
  const [papel,       setPapel]       = useState(pessoa ? pessoa.papel      : "prefeitura");
  const [frequencia,  setFrequencia]  = useState(pessoa ? pessoa.frequencia : "regular");
  const [naFila,      setNaFila]      = useState(pessoa ? pessoa.naFila     : true);
  const [municipioIds, setMunicipioIds] = useState(
    pessoa ? (pessoa.municipioIds || []) : (presetMunicipio ? [presetMunicipio] : [])
  );

  function toggle(id) {
    setMunicipioIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : prev.concat([id]));
  }

  function handleSave() {
    onSave({
      nome: nome.trim(),
      cargo: cargo.trim(),
      telefone: telefone.trim(),
      email: email.trim(),
      infoGeral: infoGeral.trim(),
      papel: papel,
      frequencia: frequencia,
      naFila: naFila,
      municipioIds: municipioIds,
    });
  }

  return (
    <ModalShell title={pessoa ? "Editar pessoa" : "Nova pessoa"} onClose={onClose}>
      <div className="space-y-3">
        <Field label="Nome">
          <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Joao" className={inp} />
        </Field>
        <Field label="Cargo / funcao">
          <input value={cargo} onChange={e => setCargo(e.target.value)} placeholder="Ex: Secretario de Financas" className={inp} />
        </Field>
        <div className="grid grid-cols-2 gap-2">
          <Field label="Papel">
            <select value={papel} onChange={e => setPapel(e.target.value)} className={inp}>
              {Object.keys(PAPEL).map(k => (
                <option key={k} value={k}>{PAPEL[k].label}</option>
              ))}
            </select>
          </Field>
          <Field label="Frequencia">
            <select value={frequencia} onChange={e => setFrequencia(e.target.value)} className={inp}>
              {Object.keys(FREQ).map(k => (
                <option key={k} value={k}>{FREQ[k].label}</option>
              ))}
            </select>
          </Field>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Field label="Telefone">
            <input value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="(85) 99999-9999" className={inp} />
          </Field>
          <Field label="E-mail">
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="nome@..." className={inp} />
          </Field>
        </div>
        <Field label="Informacoes gerais">
          <textarea
            value={infoGeral}
            onChange={e => setInfoGeral(e.target.value)}
            rows={3}
            placeholder="Ex: conheci pelo Beto, prefere contato por WhatsApp"
            className={inp}
          />
        </Field>
        <Field label="Entra na fila do dia?">
          <div className="flex gap-2 mt-1">
            <button
              onClick={() => setNaFila(true)}
              className={"flex-1 text-sm rounded-lg py-2 border " + (naFila ? "border-indigo-400 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-500")}
            >
              Sim
            </button>
            <button
              onClick={() => setNaFila(false)}
              className={"flex-1 text-sm rounded-lg py-2 border " + (!naFila ? "border-indigo-400 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-500")}
            >
              Nao
            </button>
          </div>
        </Field>
        {municipios.length > 0 && (
          <Field label="Prefeituras vinculadas">
            <div className="flex flex-wrap gap-1.5 mt-1">
              {municipios.map(m => (
                <button
                  key={m.id}
                  onClick={() => toggle(m.id)}
                  className={"text-xs px-2.5 py-1.5 rounded-full border " + (municipioIds.includes(m.id) ? "border-indigo-400 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-500")}
                >
                  {m.nome}/{m.uf}
                </button>
              ))}
            </div>
          </Field>
        )}
        <div className="flex gap-2 mt-1">
          <button onClick={onClose} className="flex-1 border border-slate-200 text-slate-600 font-medium rounded-lg py-2.5">
            Cancelar
          </button>
          <button
            disabled={!nome.trim()}
            onClick={handleSave}
            className="flex-1 bg-indigo-600 disabled:bg-slate-300 text-white font-medium rounded-lg py-2.5"
          >
            Salvar
          </button>
        </div>
      </div>
    </ModalShell>
  );
}

function MunicipioForm({ municipio, onSave, onClose }) {
  const [nome,             setNome]             = useState(municipio ? municipio.nome             : "");
  const [uf,               setUf]               = useState(municipio ? municipio.uf               : "CE");
  const [grau,             setGrau]             = useState(municipio ? municipio.grau             : "media");
  const [indicacao,        setIndicacao]        = useState(municipio ? municipio.indicacao        : "");
  const [oportunidade,     setOportunidade]     = useState(municipio ? municipio.oportunidade     : "");
  const [situacaoAtual,    setSituacaoAtual]    = useState(municipio ? municipio.situacaoAtual    : "");
  const [proximosPassos,   setProximosPassos]   = useState(municipio ? municipio.proximosPassos   : "");
  const [dataProximoPasso, setDataProximoPasso] = useState(municipio ? municipio.dataProximoPasso : "");

  function handleSave() {
    onSave({
      nome: nome.trim(),
      uf: uf,
      grau: grau,
      indicacao: indicacao.trim(),
      oportunidade: oportunidade.trim(),
      situacaoAtual: situacaoAtual.trim(),
      proximosPassos: proximosPassos.trim(),
      dataProximoPasso: dataProximoPasso,
    });
  }

  return (
    <ModalShell title={municipio ? "Editar prefeitura" : "Nova prefeitura"} onClose={onClose}>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <Field label="Municipio">
            <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Ex: Cascavel" className={inp} />
          </Field>
          <Field label="Estado">
            <select value={uf} onChange={e => setUf(e.target.value)} className={inp}>
              {UFS.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Prioridade">
          <select value={grau} onChange={e => setGrau(e.target.value)} className={inp}>
            {Object.keys(GRAU).map(k => (
              <option key={k} value={k}>{GRAU[k].label}</option>
            ))}
          </select>
        </Field>
        <Field label="Como chegamos / indicacao">
          <input value={indicacao} onChange={e => setIndicacao(e.target.value)} placeholder="Ex: Beto, pai de amigo do Lucas" className={inp} />
        </Field>
        <Field label="Oportunidade">
          <input value={oportunidade} onChange={e => setOportunidade(e.target.value)} placeholder="Ex: Adesao de ATA de Aracati" className={inp} />
        </Field>
        <Field label="Situacao atual">
          <textarea value={situacaoAtual} onChange={e => setSituacaoAtual(e.target.value)} rows={2} placeholder="Ex: ja houve reuniao inicial" className={inp} />
        </Field>
        <Field label="Proximos passos">
          <textarea value={proximosPassos} onChange={e => setProximosPassos(e.target.value)} rows={2} placeholder="Ex: reuniao com prefeito e secretaria de educacao" className={inp} />
        </Field>
        <Field label="Data prevista proximo passo">
          <input type="date" value={dataProximoPasso} onChange={e => setDataProximoPasso(e.target.value)} className={inp} />
        </Field>
        <div className="flex gap-2 mt-1">
          <button onClick={onClose} className="flex-1 border border-slate-200 text-slate-600 font-medium rounded-lg py-2.5">
            Cancelar
          </button>
          <button
            disabled={!nome.trim()}
            onClick={handleSave}
            className="flex-1 bg-indigo-600 disabled:bg-slate-300 text-white font-medium rounded-lg py-2.5"
          >
            Salvar
          </button>
        </div>
      </div>
    </ModalShell>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
