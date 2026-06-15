import { PageHeader, Card, CardHeader, CardTitle, CardBody, Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";

interface Person {
  name: string;
  role: string;
  avatar: string;
  entrega: string[];
  diferencial: string;
  remuneracao: string;
}

const team: Person[] = [
  {
    name: "Gabriel Quental",
    role: "Direção · Produção · Pipeline IA · Roteiro",
    avatar: "G",
    entrega: [
      "Roteiro",
      "Decupagem",
      "Geração e curadoria de imagem e vídeo",
      "Montagem",
      "Publicação"
    ],
    diferencial: "Domina o pipeline de IA que substitui uma equipe de ~12 pessoas.",
    remuneracao: "Fee R$ 9.000–15.000 + co-autoria"
  },
  {
    name: "Thales Siqueira",
    role: "Idealizador · Clube do Calunguinha",
    avatar: "T",
    entrega: [
      "Visão",
      "Roteiros",
      "Validação da tradição",
      "Presidência do clube"
    ],
    diferencial: "IP do personagem (Calunguinha / Homem da Meia-Noite), capital do piloto e força de imprensa (Rede Globo, jornais, rádios).",
    remuneracao: "Propriedade do personagem + sua fatia da receita"
  },
  {
    name: "Flávio Ferrari",
    role: "Direção de Áudio · Trilha · Identidade Sonora",
    avatar: "F",
    entrega: [
      "Identidade sonora",
      "Composição original (frevo/ciranda/MPB)",
      "SFX",
      "Mixagem",
      "Masterização e voz"
    ],
    diferencial: "Artista consolidado (pop leve / nova MPB, Spotify e redes) + networking estratégico na cena musical.",
    remuneracao: "R$ 6.000 + co-autoria + lidera a vertente musical"
  }
];

const avatarColors = [
  "bg-primary",
  "bg-secondary",
  "bg-accent"
];

export function Team() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Equipe & Pessoas"
        blurb="Quem é quem, papéis e a estrutura de sociedade."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((person, idx) => (
          <Card key={person.name} className="flex flex-col">
            <CardHeader className="flex flex-col items-center pb-4">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${avatarColors[idx]} text-white font-display text-2xl font-bold`}>
                {person.avatar}
              </div>
              <CardTitle className="mt-4 text-center">{person.name}</CardTitle>
              <Badge tone="primary" className="mt-2">
                {person.role}
              </Badge>
            </CardHeader>

            <CardBody className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                  Entrega
                </p>
                <ul className="flex flex-wrap gap-2">
                  {person.entrega.map((item) => (
                    <li key={item}>
                      <Badge tone="muted" className="text-xs">
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Traz / Diferencial
                </p>
                <p className="text-sm text-foreground leading-snug">{person.diferencial}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">
                  Remuneração
                </p>
                <p className="text-sm font-medium text-foreground">{person.remuneracao}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon name="Landmark" className="h-5 w-5 text-primary" />
            Modelo de Sociedade
          </CardTitle>
        </CardHeader>
        <CardBody>
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-primary font-bold">1.</span>
              <p className="text-sm text-foreground">
                O Clube mantém a propriedade do personagem (IP).
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">2.</span>
              <p className="text-sm text-foreground">
                Gabriel e Flávio co-autoram a obra audiovisual, o canal e o pipeline.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">3.</span>
              <p className="text-sm text-foreground">
                A música é uma linha de receita própria, liderada pelo Flávio (Spotify, clipes, shows).
              </p>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
