# CONTRATO — Hub de Produção Olinda Encantada

Contrato compartilhado (Wave 0). Todo agente que constrói uma página segue isto
para que as peças paralelas encaixem sem conflito. **Não edite arquivos fora da
sua página.** Cada página vive em `src/pages/<Nome>.tsx` e exporta `function <Nome>()`.

## Stack
Vite + React 18 + TypeScript + Tailwind (config em `tailwind.config.js`) +
react-router-dom v6. Gráficos: `recharts`. Ícones: `lucide-react` via wrapper.
Alias `@` → `src`.

## Design tokens (use as classes Tailwind, nunca hex cru)
`bg-background text-foreground`, `bg-card text-card-foreground`, `bg-muted
text-muted-foreground`, `bg-primary text-primary-foreground` (verde Homem da
Meia-Noite), `bg-secondary` (azul-azulejo), `bg-accent text-accent-foreground`
(amarelo-casario), `bg-destructive`, `border`, `shadow-card`, `shadow-lift`.
Títulos: `font-display` (Newsreader). Corpo: `font-sans` (Inter). Raio: `rounded-lg`.
Faixa de frevo: classe `frevo-strip`.

## Primitivos disponíveis (`@/components/ui/primitives`)
`Card`, `CardHeader`, `CardTitle`, `CardBody`, `Badge` (prop `tone`:
default|primary|secondary|accent|muted|destructive), `Stat` ({label, value, hint}),
`PageHeader` ({title, blurb, children}). Use `PageHeader` no topo de toda página.

## Ícones (`@/components/Icon`)
`<Icon name="Users" className="h-4 w-4" />`. Nomes válidos: ver `src/components/Icon.tsx`
(adicione ao registry de lá se precisar de um novo — esse é o único arquivo
compartilhado que pode receber adição de ícone).

## Camada de conteúdo (`@/lib/content`)
`allDocs: Doc[]`, `docById(id)`, `docsByArea(areaId)`, `searchDocs(q)`.
`Doc` = { id, file, area, category, title, subtitle, status, tags[], excerpt,
words, readMin, raw }. `raw` é o markdown completo. Para renderizar markdown use
`<MarkdownView>{doc.raw}</MarkdownView>` (`@/components/MarkdownView`).

## Áreas (`@/lib/areas`)
12 áreas com `view`. Páginas bespoke desta wave e suas fontes de dados:
- **Dashboard** (`/`): panorama Bento. KPIs do projeto + atalhos para áreas +
  destaques. Pode ler `allDocs` para contagens e marcos.
- **Timeline** (Cronograma): fases do piloto de 90 dias. Fonte:
  `docById('docs-03-roadmap-estrategico-md')` e `docs-plataforma-00-plano-execucao-md`.
- **Kanban** (Tarefas): colunas A fazer / Fazendo / Feito. Sementes de tarefas a
  partir dos "próximos passos" dos docs; persista edições em `localStorage`.
- **Budget** (Orçamentos): tabelas + gráficos `recharts` do comparativo
  tradicional × IA e do orçamento consolidado. Fonte: docs da área `orcamentos`
  (`docsByArea('orcamentos')`), em especial `comparativo-orcamento-proposta` e
  `orcamento-consolidado`. Números-chave: ferramentas R$3.000; piloto tradicional
  R$90–135 mil; equipe Gabriel R$9–15 mil + Flávio R$6 mil.
- **Team** (Equipe): cards de pessoas. Gabriel (direção/pipeline IA), Thales/Clube
  (IP do personagem + capital + imprensa), Flávio Ferrari (áudio/trilha + artista
  MPB + networking). Inclua o modelo de sociedade. Fonte: `orcamento-consolidado`.
- **Ideas** (Ideias & Definições): backlog/decisões/lacunas. Fonte: lacunas da
  bíblia + "próximos passos" dos docs; persista em `localStorage`.

## Regras
1. Edite só o seu `src/pages/<Nome>.tsx`. Para ícone novo, adicione ao registry
   em `src/components/Icon.tsx`.
2. Responsivo mobile-first; nada de scroll horizontal; contraste ≥ 4.5:1.
3. Sem libs novas além das já instaladas (ver `package.json`).
4. Não rode `npm install`; não toque em config, Layout, Sidebar, App, lib.
5. O componente deve compilar com `tsc` estrito (sem `any` solto; tipar props).
