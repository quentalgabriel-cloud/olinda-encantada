# Deploy do Hub na Vercel

O app está em `hub/` e já tem `vercel.json` (build, output e rewrites de SPA
configurados). Build verificado: `npm run build` gera `dist/` limpo.

## Opção 1 — Integração com o GitHub (recomendada, 1 vez)
1. Vercel → **Add New… → Project** → importe `quentalgabriel-cloud/olinda-encantada`.
2. Em **Root Directory**, selecione **`hub`**.
3. Framework: **Vite** (autodetectado). Build: `npm run build`. Output: `dist`.
4. **Deploy**. A partir daí, cada push no branch dispara um novo deploy.

## Opção 2 — Vercel CLI (a partir da sua máquina, autenticada)
```bash
cd hub
npx vercel login      # primeira vez
npx vercel deploy --prod
```

## Atenção — conteúdo sensível
A plataforma expõe orçamentos, fees, percentuais de sociedade e dados de
parceiros. Se publicar em URL pública, qualquer pessoa com o link vê tudo.
Para restringir: Vercel → Project → **Settings → Deployment Protection**
(senha ou Vercel Authentication).

## Rodar local (sem publicar nada)
```bash
cd hub
npm install
npm run dev   # http://localhost:5173
```
