// Navigation contract (Wave 0). The 12 hub areas. `view` selects which page
// component renders the area (see App.tsx). Keep `id` in sync with the
// areaFor() mapping in scripts/build-content.mjs.
export type AreaView =
  | "dashboard"
  | "docs"
  | "timeline"
  | "kanban"
  | "budget"
  | "team"
  | "ideas";

export interface Area {
  id: string;
  label: string;
  short: string;
  icon: string; // lucide-react icon name
  view: AreaView;
  blurb: string;
}

export const AREAS: Area[] = [
  { id: "visao-geral", label: "Visão Geral", short: "Visão", icon: "LayoutDashboard", view: "dashboard", blurb: "Panorama do projeto, marcos e modo apresentação." },
  { id: "documentacao", label: "Documentação", short: "Docs", icon: "FolderOpen", view: "docs", blurb: "Todos os documentos do projeto em cards navegáveis." },
  { id: "biblia", label: "Bíblia & Universo", short: "Bíblia", icon: "BookOpen", view: "docs", blurb: "Lore, personagens, mentores e locais mágicos de Olinda." },
  { id: "roteiros", label: "Roteiros", short: "Roteiros", icon: "Clapperboard", view: "docs", blurb: "Episódios: roteiro e decupagem plano a plano." },
  { id: "cronograma", label: "Cronograma", short: "Cronograma", icon: "CalendarRange", view: "timeline", blurb: "Fases do piloto de 90 dias e visão de temporada." },
  { id: "tarefas", label: "Tarefas", short: "Tarefas", icon: "KanbanSquare", view: "kanban", blurb: "Quadro de tarefas por etapa: a fazer, fazendo, feito." },
  { id: "orcamentos", label: "Orçamentos", short: "Orçamento", icon: "Wallet", view: "budget", blurb: "Custos de ferramentas, equipe e comparativo tradicional × IA." },
  { id: "equipe", label: "Equipe & Pessoas", short: "Equipe", icon: "Users", view: "team", blurb: "Quem é quem, papéis e a estrutura de sociedade." },
  { id: "elenco", label: "Elenco & Vozes", short: "Elenco", icon: "Mic", view: "docs", blurb: "Estratégia de vozes: celebridades e criadores locais nordestinos." },
  { id: "stack", label: "Stack & Ferramentas", short: "Stack", icon: "Cpu", view: "docs", blurb: "Pipeline de IA, MCPs, prompts e testes de estilo." },
  { id: "editais", label: "Captação & Editais", short: "Editais", icon: "Landmark", view: "docs", blurb: "Janelas de financiamento, prazos e benchmark de mercado." },
  { id: "ideias", label: "Ideias & Definições", short: "Ideias", icon: "Lightbulb", view: "ideas", blurb: "Backlog de ideias, decisões pendentes e lacunas de pesquisa." },
  { id: "parcerias", label: "Parcerias", short: "Parcerias", icon: "Handshake", view: "docs", blurb: "Kits de conversa, briefings e cartas de intenção." },
];

export const areaById = (id: string): Area | undefined => AREAS.find((a) => a.id === id);
