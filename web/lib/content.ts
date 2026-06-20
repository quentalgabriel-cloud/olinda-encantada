/**
 * Conteúdo estruturado das 10 seções do documento interativo.
 * Fonte de verdade: docs/01-biblia-universo.md, docs/03-roadmap-estrategico.md,
 * docs/05-moodboard-referencias.md, producao/prompts/personagens/*.md.
 *
 * Nada aqui é inventado: tudo deriva das fontes acima. Será expandido na Phase 3.
 */

export interface NavLink {
  id: string;
  label: string;
}

/** Âncoras de navegação para a navbar fixa (uma por seção). */
export const NAV_LINKS: NavLink[] = [
  { id: "gancho", label: "Gancho" },
  { id: "universo", label: "Universo" },
  { id: "turminha", label: "A Turminha" },
  { id: "guardioes", label: "Guardiões" },
  { id: "conflito", label: "O Conflito" },
  { id: "temporada1", label: "Temporada 1" },
  { id: "diferencial", label: "Diferencial" },
  { id: "modelo-negocio", label: "Modelo" },
  { id: "diretrizes", label: "Diretrizes" },
  { id: "cta", label: "Contato" },
];

export interface Character {
  id: string;
  name: string;
  role: string;
  age: string;
  represents: string;
  power: string;
  accent: string;
}

/** A Turminha — protagonistas (Bíblia, seção 3). */
export const CHARACTERS: Character[] = [
  {
    id: "calu",
    name: "Calu",
    role: "O aventureiro",
    age: "10 anos",
    represents: "Aventura",
    power: "Curioso e impulsivo, é a energia do grupo — sempre se mete em problemas.",
    accent: "#2d8f3d",
  },
  {
    id: "nina",
    name: "Nina",
    role: "A guardiã do conhecimento",
    age: "10 anos",
    represents: "Conhecimento",
    power: "Ao tocar azulejos antigos, enxerga memórias do passado. A arqueóloga da turma.",
    accent: "#1a6b9f",
  },
  {
    id: "beni",
    name: "Beni",
    role: "O veloz",
    age: "11 anos",
    represents: "Imaginação / Movimento",
    power: "Sua sombrinha de frevo permite saltos, planagens e manobras impossíveis.",
    accent: "#e63946",
  },
  {
    id: "lia",
    name: "Lia",
    role: "A conectora",
    age: "9 anos",
    represents: "Conexão humana",
    power: "Quando canta ciranda, consegue unir pessoas que estão brigadas.",
    accent: "#f4c430",
  },
  {
    id: "tico",
    name: "Tico & Chico",
    role: "O engraçado",
    age: "8 anos",
    represents: "Humor",
    power: "Inventor de engenhocas com sucata de carnaval. Carrega Chico, o mamulengo que ninguém sabe se está vivo.",
    accent: "#f4c430",
  },
];

export interface Guardian {
  id: string;
  name: string;
  role: string;
  detail: string;
}

/** Os Grandes Guardiões — mentores (Bíblia, seção 4). */
export const GUARDIANS: Guardian[] = [
  {
    id: "homem-da-meia-noite",
    name: "Homem da Meia-Noite",
    role: "Guardião Supremo",
    detail:
      "Guardião das memórias perdidas. Aparece quando o relógio marca meia-noite. Nunca dá respostas completas — sempre conduz a jornada. Inspirado no boneco mais antigo de Olinda (1931).",
  },
  {
    id: "mulher-do-dia",
    name: "Mulher do Dia",
    role: "Guardiã das histórias do presente",
    detail:
      "Figura maternal. Conhece todos os moradores e todas as histórias. Casou oficialmente com o Homem da Meia-Noite em 1990 — os dois grandes guardiões são um casal.",
  },
  {
    id: "menino-da-tarde",
    name: "Menino da Tarde",
    role: "Guardião da criatividade",
    detail:
      "Inventor. Constrói mecanismos mágicos com elementos do carnaval. Na tradição, é o filho do casal de guardiões.",
  },
  {
    id: "menina-da-tarde",
    name: "Menina da Tarde",
    role: "Guardiã da arte",
    detail:
      "Artista. Pinta sonhos nas paredes da cidade; seus desenhos viram realidade temporariamente.",
  },
];

export interface Antagonist {
  name: string;
  detail: string;
}

/** Os antagonistas — ameaças simbólicas (Bíblia, seção 6). */
export const ANTAGONISTS: Antagonist[] = [
  {
    name: "O Esquecimento",
    detail:
      "Uma névoa cinza. Cresce a cada tradição abandonada. O antagonista estrutural da franquia — nunca é derrotado de vez.",
  },
  {
    name: "Senhor Silêncio",
    detail:
      "Quer acabar com música, frevo, maracatu e brincadeiras. Tenente do Esquecimento.",
  },
  {
    name: "Dona Pressa",
    detail:
      "Quer tudo rápido, não escuta histórias. Sem perceber, alimenta o Esquecimento. Não é má — é o espelho do mundo contemporâneo.",
  },
  {
    name: "Os Apagadores",
    detail:
      "Criaturas pequenas que roubam canções, fotografias e memórias. Os monstros da semana — escaláveis e colecionáveis.",
  },
];

export interface Episode {
  number: number;
  title: string;
  logline: string;
}

/** Temporada 1 — "O Relógio das Ladeiras" (Bíblia, seção 8). */
export const SEASON_ONE: Episode[] = [
  { number: 1, title: "A Meia-Noite Desperta", logline: "Calu descobre que os bonecos ganham vida; o Relógio das Ladeiras para; o Esquecimento surge." },
  { number: 2, title: "O Mistério do Alto da Sé", logline: "Uma estrela desaparece do observatório invisível." },
  { number: 3, title: "O Frevo Perdido", logline: "Uma antiga melodia some da cidade." },
  { number: 4, title: "A Procissão dos Bonecos", logline: "Todos os gigantes desaparecem." },
  { number: 5, title: "O Segredo da Oficina", logline: "A origem dos bonecos é revelada (episódio de mitologia)." },
  { number: 6, title: "A Rua que Mudava de Lugar", logline: "A Ladeira da Misericórdia prende a turminha em memórias." },
  { number: 7, title: "O Maracatu Fantasma", logline: "Tradições afro-pernambucanas; o Largo do Amparo desperta." },
  { number: 8, title: "A Chuva de Confetes", logline: "Confetes mágicos alteram a realidade." },
  { number: 9, title: "O Carnaval Fora de Época", logline: "O tempo enlouquece." },
  { number: 10, title: "O Roubo das Memórias", logline: "Os Apagadores atacam em massa." },
  { number: 11, title: "A Cidade Sem Música", logline: "Senhor Silêncio vence (episódio sombrio, ponto baixo do arco)." },
  { number: 12, title: "A Última Ladeira", logline: "Grande batalha." },
  { number: 13, title: "Quando Olinda Sonha", logline: "Final: as crianças da cidade ajudam a restaurar o Relógio." },
];

export interface MagicalPlace {
  real: string;
  enchanted: string;
}

/** Locais mágicos — a cidade como personagem (Bíblia, seção 7). */
export const MAGICAL_PLACES: MagicalPlace[] = [
  { real: "Alto da Sé", enchanted: "Ponto onde as estrelas conversam com a cidade; à noite existe um observatório invisível." },
  { real: "Mosteiro de São Bento", enchanted: "Guarda um sino encantado; quando toca, histórias esquecidas despertam." },
  { real: "Ladeira da Misericórdia", enchanted: "Muda de lugar durante a madrugada; cada curva leva a uma memória diferente." },
  { real: "Relógio das Ladeiras", enchanted: "Relógio encantado que mantém viva a cultura; quando para, as tradições desaparecem — o MacGuffin da Temporada 1." },
];

export interface BusinessPhase {
  phase: string;
  window: string;
  detail: string;
}

/** Fases do Laboratório de Universo (Roadmap, seção 2). */
export const BUSINESS_PHASES: BusinessPhase[] = [
  { phase: "Fase 0 — Fundação", window: "semanas 1–4", detail: "Moodboard, Master Style Prompt, character sheets e o MVP narrativo no ar." },
  { phase: "Fase 1 — Laboratório público", window: "meses 2–4", detail: "Canal de YouTube: Shorts e micro-episódios de 2–4 min. Testar personagens e engajamento." },
  { phase: "Fase 2 — Mini-temporada", window: "meses 5–8", detail: "5 episódios seguindo o arco do Relógio das Ladeiras. Submeter a editais." },
  { phase: "Fase 3 — Temporada piloto", window: "meses 9–18", detail: "13 episódios. Pitch para streamings com audiência comprovada." },
  { phase: "Fase 4 — Universo", window: "ano 2+", detail: "Livros, HQs, app, brinquedos, AR e turismo cultural infantil." },
];

/** Diretrizes culturais, éticas e legais (Bíblia, seção 9) — resumo operacional. */
export const GUIDELINES: string[] = [
  "Nomes e marcas: criar versões inspiradas OU obter autorização formal. A estratégia preferencial é a parceria com os guardiões da tradição.",
  "Religiosidade afro-brasileira: tratada com respeito e leveza — orixás como simbologia de cor e natureza, nunca caricaturados.",
  "Pessoas reais: não viram personagens principais. Usamos arquétipos-homenagem (Mestre Luiz, Mestre Tales).",
  "Música: composições originais no estilo de, ou licenciadas / domínio público.",
  "Diversidade: Olinda é miscigenada — a turminha reflete negros, brancos, indígenas e mestiços.",
  "Consulta comunitária: mestres de cultura, presidentes de blocos e artesãos validam o universo.",
  "Princípio editorial: a cultura deve ser descoberta, nunca explicada. Criança assiste aventura, não aula.",
];

/** Critérios de validação — gate de qualidade (Bíblia, seção 10). */
export const VALIDATION_CRITERIA: string[] = [
  "Uma criança de São Paulo entenderia?",
  "Uma criança do México entenderia?",
  "Continua parecendo Olinda?",
  "Pode gerar brinquedo?",
  "Pode gerar 100 episódios?",
];

/** Textos-chave de cada seção. Estrutura central do documento. */
export const SECTIONS = {
  gancho: {
    eyebrow: "Olinda Encantada",
    title: "Qual memória precisa ser salva hoje?",
    subtitle:
      "Uma série infantil de aventura e fantasia onde um grupo de crianças protege as memórias vivas de uma cidade mágica inspirada no patrimônio cultural de Olinda.",
    cta: "Entrar na cidade encantada",
  },
  universo: {
    title: "Toda cidade tem memórias. Em Olinda, elas são vivas.",
    description:
      "As memórias moram nos bonecos gigantes, nas músicas, nas ladeiras, nas igrejas e nos azulejos. Quando uma memória é esquecida, uma parte da cidade desaparece. A magia tem um nome: o Encanto — e ele nasce quando alguém canta, dança, conta histórias ou celebra junto.",
    goldenRule: "Regra de ouro do universo: cultura gera magia.",
  },
  turminha: {
    title: "A Turminha",
    description:
      "Os protagonistas são crianças — o público precisa se enxergar na história. Cada uma é um arquétipo universal com sabor local.",
  },
  guardioes: {
    title: "Os Grandes Guardiões",
    description:
      "Os bonecos gigantes não são protagonistas. São mentores — como mestres Jedi. Aparecem pouco; quando aparecem, algo importante está acontecendo.",
  },
  conflito: {
    title: "O Encanto contra o Esquecimento",
    description:
      "Nenhum vilão quer destruir a cidade — o verdadeiro perigo é a cidade ser esquecida. Essa luta nunca termina; ela existe em todos os episódios.",
  },
  temporada1: {
    title: "Temporada 1 — O Relógio das Ladeiras",
    description:
      "O Relógio das Ladeiras para de funcionar. O Esquecimento cresce. A turminha se forma para restaurar o Relógio antes que a cidade perca suas memórias. 13 episódios.",
  },
  diferencial: {
    title: "O diferencial inimitável",
    description:
      "Qualquer um poderá gerar personagens e animações com IA. O que IA nenhuma fabrica: vivência local, conexão emocional com Olinda e acesso às histórias que não estão na internet. Isso é o ouro.",
    points: [
      "Aventura primeiro, cultura embutida — modelo Coco / Moana / Homem-Aranha.",
      "Um universo expansível: série → livros → jogos → AR → turismo gamificado.",
      "A execução ficou barata; a visão continua rara.",
    ],
  },
  modeloNegocio: {
    title: "O produto não é uma série. É um universo (IP).",
    description:
      "A série é o primeiro formato. Construímos em camadas, como um laboratório de universo, começando por uma prova de amor do público.",
  },
  diretrizes: {
    title: "Diretrizes culturais, éticas e legais",
    description:
      "A cultura deve ser descoberta, nunca explicada. Cada personagem e episódio passa por um gate de validação.",
  },
  cta: {
    title: "Vamos salvar uma memória juntos?",
    description:
      "Olinda Encantada está aberta a editais, parceiros culturais e investidores que queiram transformar memória viva em um universo de fantasia contemporâneo.",
    cta: "Falar com o time",
  },
} as const;
