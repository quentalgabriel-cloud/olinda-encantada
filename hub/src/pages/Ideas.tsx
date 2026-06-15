import { useState, useEffect } from "react";
import { PageHeader, Card, CardHeader, CardTitle, CardBody, Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";

type IdeaKind = "decision" | "gap" | "idea";

interface IdeaItem {
  id: string;
  title: string;
  note?: string;
  kind: IdeaKind;
}

const ideaItems: IdeaItem[] = [
  {
    id: "dec-01",
    title: "Nome do protagonista: Calunguinha real vs. 'Calu' inspirado",
    note: "Recomendado usar o personagem real, com licença do clube (que é quem financia).",
    kind: "decision",
  },
  {
    id: "dec-02",
    title: "Fee fechado de Gabriel",
    note: "Faixa R$ 9–15 mil pelo piloto.",
    kind: "decision",
  },
  {
    id: "dec-03",
    title: "Percentual de sociedade entre Clube, Gabriel e Flávio",
    kind: "decision",
  },
  {
    id: "dec-04",
    title: "Voz dos personagens: dublador real vs. voz sintética (ElevenLabs)",
    kind: "decision",
  },
  {
    id: "dec-05",
    title: "Cores do fraque do Homem da Meia-Noite (verde/branco): validar com a família",
    kind: "decision",
  },
  {
    id: "dec-06",
    title: "Ano de fundação do Homem da Meia-Noite (1931 vs 1932): confirmar na fonte",
    kind: "decision",
  },
  {
    id: "gap-01",
    title: "Lacuna 6 — símbolos emocionais da infância olindense",
    note: "Só a conversa de escuta com Thales e Luiz Adolfo destrava.",
    kind: "gap",
  },
  {
    id: "gap-02",
    title: "Origem do nome HMN no 'detetive que saía do relógio': validar antes de virar cânone",
    kind: "gap",
  },
  {
    id: "idea-01",
    title: "Música como produto autônomo no Spotify (liderada pelo Flávio)",
    kind: "idea",
  },
  {
    id: "idea-02",
    title: "Coletâneas a cada 5–6 micro-episódios (motor de watch time)",
    kind: "idea",
  },
  {
    id: "idea-03",
    title: "Cometa Olinda como MacGuffin do episódio 2",
    kind: "idea",
  },
  {
    id: "idea-04",
    title: "Miniaturas dos bonecos gigantes = linha de brinquedo/merchandising",
    kind: "idea",
  },
];

const sectionConfig: Record<IdeaKind, { label: string; badge: "accent" | "destructive" | "secondary" }> = {
  decision: { label: "Decisões pendentes", badge: "accent" },
  gap: { label: "Lacunas de pesquisa", badge: "destructive" },
  idea: { label: "Ideias", badge: "secondary" },
};

export function Ideas() {
  const [resolved, setResolved] = useState<Set<string>>(new Set());

  useEffect(() => {
    const stored = localStorage.getItem("oe-ideas");
    if (stored) {
      try {
        setResolved(new Set(JSON.parse(stored)));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("oe-ideas", JSON.stringify(Array.from(resolved)));
  }, [resolved]);

  const toggleResolved = (id: string) => {
    setResolved((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const groupedItems = ideaItems.reduce(
    (acc, item) => {
      if (!acc[item.kind]) {
        acc[item.kind] = [];
      }
      acc[item.kind].push(item);
      return acc;
    },
    {} as Record<IdeaKind, IdeaItem[]>
  );

  const sections: IdeaKind[] = ["decision", "gap", "idea"];

  return (
    <div>
      <PageHeader title="Ideias & Definições" blurb="Backlog de ideias, decisões pendentes e lacunas de pesquisa." />

      <div className="space-y-8">
        {sections.map((kind) => {
          const items = groupedItems[kind] || [];
          if (items.length === 0) return null;

          const config = sectionConfig[kind];
          return (
            <section key={kind}>
              <div className="mb-4 flex items-center gap-2">
                <h2 className="font-display text-xl font-semibold">{config.label}</h2>
                <Badge tone={config.badge}>{items.length}</Badge>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((item) => {
                  const isResolved = resolved.has(item.id);
                  return (
                    <Card
                      key={item.id}
                      className={`transition-opacity ${isResolved ? "opacity-70" : ""}`}
                    >
                      <CardHeader className="flex flex-row items-start justify-between gap-2">
                        <CardTitle
                          className={`flex-1 leading-snug ${
                            isResolved ? "line-through text-muted-foreground" : ""
                          }`}
                        >
                          {item.title}
                        </CardTitle>
                        <button
                          onClick={() => toggleResolved(item.id)}
                          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded transition-colors hover:bg-muted"
                          aria-label={isResolved ? "Marcar como aberto" : "Marcar como resolvido"}
                        >
                          <Icon
                            name={isResolved ? "CheckCircle2" : "Circle"}
                            className="h-5 w-5"
                          />
                        </button>
                      </CardHeader>
                      {item.note && (
                        <CardBody className="pt-0 text-sm text-muted-foreground">
                          {item.note}
                        </CardBody>
                      )}
                    </Card>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
