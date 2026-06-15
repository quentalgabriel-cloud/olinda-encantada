# OLINDA ENCANTADA — Hub de Produção

## Plano de Execução da Plataforma + Estratégia Multiagente

> **Função:** especificar a plataforma interna de planejamento/apresentação do projeto e o plano de construção com agentes paralelos, com modelo (Haiku/Sonnet/Opus) definido por etapa para gestão inteligente de tokens.
>
> Junho/2026. Documento de planejamento — executar após aprovação do escopo/stack.

-----

## 1. O QUE É A PLATAFORMA

Um **hub web interno** (não é o produto infantil — é a ferramenta de gestão do projeto) que transforma os documentos do repositório em uma interface visual, navegável e organizável. Sidebar com áreas, dashboard em **Bento Grid** (cards modulares), e um **modo apresentação** para mostrar o projeto ao Thales, ao clube e a editais.

**Princípio-chave:** os documentos markdown do repositório são a **fonte única de verdade**. A plataforma os *renderiza* (lê o frontmatter + corpo), não duplica conteúdo. Editar um `.md` atualiza a plataforma. Isso elimina divergência e economiza manutenção.

### Áreas da sidebar

| # | Área | Conteúdo / fonte |
|---|---|---|
| 1 | **Visão Geral** | Dashboard Bento: status do projeto, marcos, KPIs, atalhos. Modo apresentação/pitch. |
| 2 | **Documentação** | Todos os `.md` como cards por categoria (bíblia, pipeline, roadmap, pesquisa) com leitor embutido |
| 3 | **Bíblia / Universo** | Personagens, mentores, locais mágicos, temporada — visual (`docs/01-biblia-universo.md`) |
| 4 | **Roteiros** | EP00 + episódios; roteiro + decupagem lado a lado (`producao/episodios/`) |
| 5 | **Cronograma** | Fases e atividades dos 90 dias + visão de temporada (roadmap) — timeline |
| 6 | **Tarefas** | Kanban (a fazer / fazendo / feito) por área |
| 7 | **Orçamentos** | Ferramentas, equipe, comparativo tradicional×IA, sociedade — tabelas + gráficos |
| 8 | **Equipe & Pessoas** | Gabriel, Thales/Clube, Flávio — papéis, contribuições, % de sociedade |
| 9 | **Stack & Ferramentas** | Pipeline de IA, MCPs (Higgsfield), custos por ferramenta |
| 10 | **Captação / Editais** | Janelas, prazos, pré-requisitos (`docs/pesquisa/04-editais-financiamento.md`) |
| 11 | **Ideias & Definições** | Backlog de ideias, decisões pendentes, lacunas (ex.: Lacuna 6 da bíblia) |
| 12 | **Parcerias** | Kit de conversa, briefings (Thales, Flávio), cartas de intenção |

## 2. STACK RECOMENDADO

| Camada | Escolha | Porquê |
|---|---|---|
| Framework | **Vite + React + TypeScript** | Rápido, simples, estático, sem backend (todo o conteúdo vem dos `.md`) |
| Estilo | **Tailwind + shadcn/ui** | Suportado pela skill UI/UX Pro Max; componentes acessíveis prontos |
| Design | **Bento Grid + paleta cultural quente** | Recomendação da skill para cards modulares organizáveis |
| Conteúdo | **Markdown → JSON em build** (gray-matter + markdown-it) | Fonte única; sem CMS; sem banco |
| Gráficos | **Recharts** | Orçamentos e comparativos (tipos de gráfico vêm da skill) |
| Deploy | **Vercel** (MCP disponível) | Deploy direto; preview por commit |

Sem backend, sem banco de dados, sem autenticação na v1 (hub interno). Estado local (kanban, filtros) em `localStorage`.

## 3. ESTRATÉGIA MULTIAGENTE (paralelismo + modelo por etapa)

### Filosofia de custo
> **Modelo barato para trabalho mecânico e volumoso; modelo médio para implementação; modelo caro só onde o erro é caro e se propaga (arquitetura, contratos, integração).**

| Modelo | Usar para | Não usar para |
|---|---|---|
| **Haiku** | Parsing markdown→JSON, páginas de listagem simples, geração repetitiva de cards, povoamento de dados a partir dos `.md` | Decisões de arquitetura, lógica interativa complexa |
| **Sonnet** | Implementação de páginas/componentes React, kanban, gráficos, modo apresentação | Trabalho mecânico em massa (desperdício) |
| **Opus** | Contrato compartilhado, scaffold-base, integração final, QC contra a skill | Tarefas repetitivas (caro demais) |

### Ondas (waves) com portões de sincronização

```
WAVE 0 — FUNDAÇÃO (síncrona, Opus, sem paralelismo)
  • Consolidar docs no branch de build (trazer docs/ + producao/ do PR #1)
  • Definir o CONTRATO compartilhado (uma vez, para todos):
      - schema de conteúdo (frontmatter padrão dos .md: title, area, status, tags, order)
      - design tokens (cores/tipografia/espaçamento da skill UI/UX)
      - estrutura de pastas + contrato de componentes (props de Card, Sidebar, Layout)
  • Scaffold mínimo (Vite+React+TS+Tailwind) que compila
  → PORTÃO: contrato + scaffold prontos = pré-requisito de TODA onda seguinte
           (definir uma vez evita retrabalho — a maior economia de tokens)

WAVE 1 — INFRAESTRUTURA (3 agentes em paralelo)
  • Agente A (Sonnet): shell do app — layout, sidebar, roteamento das 12 áreas
  • Agente B (Haiku):   pipeline de conteúdo — script .md → JSON + índice de busca
  • Agente C (Sonnet):  design system — tema (Bento/paleta), componentes base
                        (Card, Badge, Tabs, Table, KanbanCol) via shadcn + skill
  → PORTÃO: shell + dados + componentes integram (todos seguem o CONTRATO da Wave 0)

WAVE 2 — ÁREAS (5–6 agentes em paralelo, 1 área-grupo por agente)
  • Sonnet: Documentação + Bíblia/Universo (render rico de markdown)
  • Sonnet: Cronograma + Tarefas (timeline + kanban interativos)
  • Sonnet: Orçamentos (tabelas + Recharts a partir dos docs de financiamento)
  • Haiku:  Equipe + Stack + Ideias & Definições (render de listas/cards simples)
  • Sonnet: Visão Geral + Modo Apresentação (dashboard Bento + pitch)
  • Haiku:  Captação/Editais + Parcerias (render de tabelas dos docs existentes)
  → PORTÃO: todas as rotas montam sem erro

WAVE 3 — INTEGRAÇÃO & ENTREGA (síncrona, Opus)
  • Costura, consistência visual, QC contra checklist da skill (acessibilidade,
    contraste, touch targets, responsivo), build de produção, deploy na Vercel
```

### Sincronização
- Os **portões** são os únicos pontos seriais; tudo dentro de uma onda roda em paralelo.
- O **CONTRATO da Wave 0** é o que mantém os agentes paralelos coerentes sem conversarem entre si — cada um lê o mesmo contrato e produz peças que encaixam.

## 4. PRÁTICAS DE ECONOMIA DE TOKENS (aplicadas)

1. **Contrato definido uma vez (Wave 0):** evita que agentes re-derivem ou divirjam — retrabalho é o maior gasto oculto de token.
2. **Prompt escopado:** cada agente recebe só os arquivos que precisa (não o repo inteiro).
3. **Modelo certo por tarefa:** Haiku no volume mecânico; Opus só em arquitetura/integração.
4. **Paralelismo real:** ondas independentes simultâneas; portões seriais só onde há dependência verdadeira (sem cadeias ociosas).
5. **Fonte única (os `.md`):** a plataforma renderiza, não recria conteúdo — menos geração.
6. **Skill UI/UX como oráculo determinístico:** consultar a base CSV (busca local, custo ~zero) em vez de "inventar" design por LLM.
7. **Resumos concisos dos agentes:** retorno é o sumário do trabalho, não despejo de arquivos.
8. **Editar > regenerar; versionar assets; chamadas de ferramenta independentes em lote.**

## 5. ENTREGÁVEL DA WAVE 0 (o que destrava tudo)

`CONTRATO.md` na raiz do app + scaffold compilável + design tokens. A partir daí, as Waves 1–3 podem ser disparadas em lote.

-----

*Documento vivo. Versão 1.0 — junho/2026. Executar mediante aprovação de escopo/stack.*
