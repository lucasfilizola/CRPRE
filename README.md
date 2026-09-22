# CRM Prefeituras - guia de instalacao no Railway

Esta versao usa PostgreSQL de verdade (nao SQLite), hospedado em um servidor
que nao dorme e nao expira. Os dados ficam salvos permanentemente, entre
sessoes, entre deploys, sem risco de reset.

## Passo a passo

1. Acesse https://railway.com e crie uma conta (pode entrar com GitHub ou Google).
2. Clique em "New Project".
3. Escolha "Empty Project" (projeto vazio) - vamos montar na mao, sem template.
4. Dentro do projeto, clique em "+ New" (ou "Create") e escolha "Database" -> "Add PostgreSQL".
   Isso cria o banco de dados automaticamente, sem configuracao manual.
5. Ainda no projeto, clique em "+ New" novamente e escolha "GitHub Repo" OU
   "Empty Service" (se for subir os arquivos direto, sem GitHub).

   Caminho mais simples (sem GitHub): escolha "Empty Service", depois vá na
   aba do servico criado, procure a opcao de "Deploy" ou o icone de upload/
   arquivo, e suba os arquivos deste pacote (server.js, package.json, e a
   pasta public/ inteira com index.html e app.js).

6. O Railway detecta automaticamente que é um projeto Node.js pelo
   package.json e configura o build sozinho.
7. **Conectar o banco ao servico**: dentro do servico do seu app (nao do
   banco), va em "Variables" e adicione uma referencia á variavel DATABASE_URL
   do Postgres que voce criou no passo 4 - o Railway geralmente sugere isso
   automaticamente com um botao "Add variable reference" ou similar,
   apontando pro servico Postgres.
8. Clique em "Deploy" (ou aguarde o deploy automatico rodar).
9. Depois que o deploy terminar, va em "Settings" do seu servico e procure
   "Networking" -> "Generate Domain" para gerar uma URL publica fixa, tipo:
   `https://crm-prefeituras-production.up.railway.app`
10. Essa URL é fixa e permanente - funciona igual no PC e no celular.

## Sobre custos

- O plano Hobby do Railway custa US$5/mes (cerca de R$25-30), que ja inclui
  o app rodando 24h sem dormir e o banco de dados Postgres junto.
- Nao ha necessidade de cartao de credito imediatamente para comecar a
  configurar, mas sera necessario adicionar um metodo de pagamento para o
  servico continuar ativo além do periodo de teste inicial.

## Importante: nao existe mais risco de perda de dados por redeploy

Diferente do que acontecia no Replit com SQLite, aqui o banco de dados
Postgres é um servico completamente separado do codigo do app. Trocar o
codigo, fazer um novo deploy, reiniciar o servico - nada disso afeta os
dados guardados no banco. Os dados só somem se voce deletar o servico do
banco de dados manualmente dentro do Railway.

Ainda assim, o botao de backup dentro do proprio app continua disponivel
como segurança extra - recomendamos continuar usando semanalmente.

## Adicionar a tela inicial do celular

**iPhone:** abra a URL no Safari, toque no icone de compartilhar, escolha
"Adicionar a Tela de Inicio".

**Android:** abra a URL no Chrome, toque nos tres pontinhos, escolha
"Adicionar a tela inicial".
