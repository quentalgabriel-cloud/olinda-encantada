import { Link } from "react-router-dom";
import { Badge, Card, CardBody, CardHeader, CardTitle, PageHeader } from "@/components/ui/primitives";
import { Icon, type IconName } from "@/components/Icon";

interface TimelineItem {
  id: string;
  title: string;
  duration: string;
  status: string;
  statusTone: "primary" | "secondary" | "accent" | "muted" | "default";
  icon: IconName;
  highlight?: boolean;
  description?: string;
  deliverables: string[];
}

const piloto: TimelineItem[] = [
  {
    id: "semana-1",
    title: "Semana 1 — Moodboard Mestre de Olinda",
    duration: "Semana 1",
    status: "a iniciar",
    statusTone: "muted",
    icon: "Camera",
    highlight: true,
    deliverables: ["Fotografar a cidade real (ruas, casario, ladeiras, luz de Olinda)"],
  },
  {
    id: "semana-2",
    title: "Semana 2 — Master Style Prompt",
    duration: "Semana 2",
    status: "a iniciar",
    statusTone: "muted",
    icon: "Palette",
    highlight: true,
    deliverables: ["Master Style Prompt + testes de estilo", "Travar o gerador de imagens/vídeo"],
  },
  {
    id: "semana-3",
    title: "Semana 3 — Character sheets",
    duration: "Semana 3",
    status: "a iniciar",
    statusTone: "muted",
    icon: "Users2",
    highlight: true,
    deliverables: [
      "Character sheet — Calunguinha",
      "Character sheet — Homem da Meia-Noite",
      "Character sheet — Tico e Chico",
      "1 cenário-base consolidado",
    ],
  },
  {
    id: "semana-4",
    title: "Semana 4 — MVP narrativo",
    duration: "Semana 4",
    status: "a iniciar",
    statusTone: "muted",
    icon: "Rocket",
    highlight: true,
    deliverables: ["EP00 (~90s) no ar"],
  },
  {
    id: "meses-2-3",
    title: "Meses 2–3 — Conteúdo do laboratório",
    duration: "Meses 2–3",
    status: "a iniciar",
    statusTone: "muted",
    icon: "Film",
    highlight: true,
    description: "Cortes enviados ao Thales/clube antes de publicar.",
    deliverables: [
      "2 micro-episódios (~3 min)",
      "~6 Shorts",
      "Trilha original (Flávio)",
      "Revisão dos cortes com Thales/clube antes da publicação",
    ],
  },
];

const fases: TimelineItem[] = [
  {
    id: "fase-0",
    title: "FASE 0 — Fundação",
    duration: "Semanas 1–4",
    status: "a iniciar",
    statusTone: "primary",
    icon: "Flag",
    deliverables: ["MVP no ar (EP00)"],
  },
  {
    id: "fase-1",
    title: "FASE 1 — Laboratório público",
    duration: "Meses 2–4",
    status: "planejado",
    statusTone: "secondary",
    icon: "Target",
    deliverables: ["Canal ativo", "Shorts + micro-episódios", "Testar engajamento do público"],
  },
  {
    id: "fase-2",
    title: "FASE 2 — Mini-temporada",
    duration: "Meses 5–8",
    status: "planejado",
    statusTone: "secondary",
    icon: "Milestone",
    deliverables: [
      "5 episódios",
      "Dubladores e música local",
      "Submissão a editais culturais",
    ],
  },
  {
    id: "fase-3",
    title: "FASE 3 — Temporada piloto",
    duration: "Meses 9–18",
    status: "planejado",
    statusTone: "accent",
    icon: "Clapperboard",
    deliverables: ["13 episódios", "Pitch para streamings e TVs"],
  },
  {
    id: "fase-4",
    title: "FASE 4 — Universo Olinda Encantada",
    duration: "Ano 2+",
    status: "visão",
    statusTone: "default",
    icon: "Sparkles",
    deliverables: ["Livros e HQs", "App", "Brinquedos", "Turismo cultural"],
  },
];

function TimelineSection({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-6 border-l-2 border-border pl-6 sm:pl-8">
      {items.map((item) => (
        <li key={item.id} className="relative">
          <span
            className={
              "absolute -left-[2.05rem] sm:-left-[2.55rem] top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 " +
              (item.highlight
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground")
            }
          >
            <Icon name={item.icon} className="h-3.5 w-3.5" />
          </span>
          <Card className={item.highlight ? "border-primary/40" : undefined}>
            <CardHeader className="flex flex-row flex-wrap items-start justify-between gap-2">
              <CardTitle>{item.title}</CardTitle>
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone={item.highlight ? "primary" : "default"}>
                  <Icon name="CalendarRange" className="h-3 w-3" />
                  {item.duration}
                </Badge>
                <Badge tone={item.statusTone}>{item.status}</Badge>
              </div>
            </CardHeader>
            <CardBody>
              {item.description && (
                <p className="mb-2 text-sm text-muted-foreground">{item.description}</p>
              )}
              <ul className="space-y-1.5 text-sm">
                {item.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <Icon name="CheckSquare" className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </CardBody>
          </Card>
        </li>
      ))}
    </ol>
  );
}

export function Timeline() {
  return (
    <div>
      <PageHeader
        title="Cronograma"
        blurb="Linha do tempo do piloto de 90 dias, semana a semana, e a visão de longo prazo do universo Olinda Encantada."
      />

      <Card className="mb-8 border-accent/50 bg-accent/10">
        <CardBody className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Icon name="Milestone" className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
            <div>
              <p className="font-display text-base font-semibold">Marco 2026 — 10 anos do Calunguinha</p>
              <p className="text-sm text-muted-foreground">
                Alvo de lançamento e gancho de imprensa para impulsionar o piloto e a temporada.
              </p>
            </div>
          </div>
          <Badge tone="accent">
            <Icon name="Star" className="h-3 w-3" />
            Aniversário
          </Badge>
        </CardBody>
      </Card>

      <section className="mb-10">
        <div className="mb-4 flex items-center gap-2">
          <Icon name="Rocket" className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-bold tracking-tight">Piloto — 90 dias</h2>
          <Badge tone="primary">janela ativa</Badge>
        </div>
        <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
          Detalhamento semana a semana do MVP narrativo e do conteúdo inicial do laboratório público.
        </p>
        <TimelineSection items={piloto} />
      </section>

      <section className="mb-8">
        <div className="mb-4 flex items-center gap-2">
          <Icon name="Target" className="h-5 w-5 text-secondary-foreground" />
          <h2 className="font-display text-xl font-bold tracking-tight">Visão de temporada — fases</h2>
          <Badge tone="default">longo prazo</Badge>
        </div>
        <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
          Do MVP ao universo expandido: a trajetória completa do projeto além do piloto.
        </p>
        <TimelineSection items={fases} />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Fontes</CardTitle>
        </CardHeader>
        <CardBody className="flex flex-col gap-2 text-sm sm:flex-row sm:flex-wrap sm:gap-4">
          <Link
            to="/doc/docs-03-roadmap-estrategico-md"
            className="inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            <Icon name="FileText" className="h-4 w-4" />
            Roadmap estratégico
            <Icon name="ChevronRight" className="h-3.5 w-3.5" />
          </Link>
          <Link
            to="/doc/docs-plataforma-00-plano-execucao-md"
            className="inline-flex items-center gap-1.5 text-primary hover:underline"
          >
            <Icon name="FileText" className="h-4 w-4" />
            Plano de execução da plataforma
            <Icon name="ChevronRight" className="h-3.5 w-3.5" />
          </Link>
        </CardBody>
      </Card>
    </div>
  );
}
