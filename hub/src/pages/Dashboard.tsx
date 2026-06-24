import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Badge,
  Stat,
  PageHeader,
} from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";
import { content } from "@/lib/content";

interface BentoLink {
  to: string;
  icon: string;
  title: string;
  blurb: string;
  badge?: string;
  span: string;
}

const bentoLinks: BentoLink[] = [
  {
    to: "/biblia",
    icon: "BookOpen",
    title: "Bíblia & Universo",
    blurb:
      "O mundo do Calunguinha: personagens, lugares e as memórias vivas de Olinda que dão forma à série.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    to: "/roteiros",
    icon: "Clapperboard",
    title: "Roteiros",
    blurb: "EP00 pronto e a estrutura narrativa dos próximos episódios.",
    badge: "EP00 pronto",
    span: "md:col-span-1",
  },
  {
    to: "/orcamentos",
    icon: "Wallet",
    title: "Orçamentos",
    blurb: "Comparativo entre produção tradicional e pipeline com IA.",
    span: "md:col-span-1",
  },
  {
    to: "/cronograma",
    icon: "CalendarRange",
    title: "Cronograma",
    blurb: "Piloto de 90 dias, do roteiro à entrega final.",
    span: "md:col-span-1",
  },
  {
    to: "/editais",
    icon: "Landmark",
    title: "Captação & Editais",
    blurb: "Editais, patrocínios e caminhos de financiamento para o projeto.",
    span: "md:col-span-1",
  },
  {
    to: "/equipe",
    icon: "Users",
    title: "Equipe",
    blurb: "Gabriel (direção e pipeline de IA), Thales/Clube e Flávio Ferrari.",
    span: "md:col-span-1",
  },
  {
    to: "/elenco",
    icon: "Mic",
    title: "Elenco & Vozes",
    blurb: "Vozes de celebridades e criadores locais nordestinos para dar vida aos personagens.",
    span: "md:col-span-1",
  },
];

export function Dashboard() {
  return (
    <div>
      <PageHeader
        title="Visão Geral"
        blurb="Panorama do projeto, marcos e modo apresentação."
      />

      {/* Frevo accent strip */}
      <div className="frevo-strip mb-6 h-1.5 w-full rounded-full" />

      {/* Pitch highlight */}
      <Card className="mb-6 border-primary/30 bg-primary/5">
        <CardBody className="flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 rounded-lg bg-primary/15 p-2 text-primary">
              <Icon name="Sparkles" className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl font-semibold leading-snug sm:text-2xl">
                Olinda Encantada
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Uma série infantil de aventura e fantasia onde um grupo de
                crianças protege as memórias vivas de uma cidade mágica
                inspirada no patrimônio cultural de Olinda. Estrelando o
                Calunguinha, mascote do Homem da Meia-Noite, com lançamento
                previsto para 2026 — os 10 anos do personagem.
              </p>
            </div>
          </div>
          <Badge tone="primary" className="self-start sm:self-center">
            10 anos do Calunguinha
          </Badge>
        </CardBody>
      </Card>

      {/* KPIs */}
      <Card className="mb-6">
        <CardBody className="grid grid-cols-2 gap-6 p-6 sm:grid-cols-3 lg:grid-cols-5">
          <Stat label="Documentos" value={content.total} hint="na base de produção" />
          <Stat label="Áreas" value="13" hint="frentes de trabalho" />
          <Stat label="Orçamento piloto" value="R$ 18–24 mil" hint="estimativa com IA" />
          <Stat label="Prazo" value="90 dias" hint="≈ 3 meses" />
          <Stat label="Ferramentas IA" value="R$ 1.000" hint="por mês" />
        </CardBody>
      </Card>

      {/* Bento grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {bentoLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`group ${item.span}`}
          >
            <Card className="flex h-full flex-col transition-all hover:-translate-y-0.5 hover:shadow-lift">
              <CardHeader className="flex items-start justify-between gap-2">
                <span className="rounded-lg bg-secondary/15 p-2 text-secondary">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                {item.badge && <Badge tone="accent">{item.badge}</Badge>}
              </CardHeader>
              <CardBody className="flex flex-1 flex-col justify-between">
                <div>
                  <CardTitle>{item.title}</CardTitle>
                  <p className="mt-2 text-sm text-muted-foreground">{item.blurb}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Ver área
                  <Icon
                    name="ArrowRight"
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </CardBody>
            </Card>
          </Link>
        ))}

        {/* Próximos passos */}
        <Card className="md:col-span-2">
          <CardHeader className="flex items-center gap-2">
            <span className="rounded-lg bg-accent/20 p-2 text-accent-foreground">
              <Icon name="ListChecks" className="h-5 w-5" />
            </span>
            <CardTitle>Próximos passos</CardTitle>
          </CardHeader>
          <CardBody>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="CircleDot" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Fechar <strong>fee + percentual</strong> com Gabriel e Flávio.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CircleDot" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Levar a proposta ao <strong>Thales / Clube</strong>.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CircleDot" className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  Conversa de escuta com os <strong>guardiões da tradição</strong> do
                  boi e do Homem da Meia-Noite.
                </span>
              </li>
            </ul>
          </CardBody>
        </Card>

        {/* Diferencial */}
        <Card className="md:col-span-1">
          <CardHeader className="flex items-center gap-2">
            <span className="rounded-lg bg-primary/15 p-2 text-primary">
              <Icon name="Cpu" className="h-5 w-5" />
            </span>
            <CardTitle>Diferencial</CardTitle>
          </CardHeader>
          <CardBody>
            <p className="text-sm text-muted-foreground">
              O pipeline de IA entrega o mesmo produto de um estúdio de{" "}
              <strong className="text-foreground">~12 pessoas</strong> com apenas{" "}
              <strong className="text-foreground">1–2 pessoas</strong> e cerca de{" "}
              <strong className="text-foreground">R$ 1.000/mês</strong> em
              ferramentas.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
