import { Link } from "react-router-dom";
import {
  Bar,
  BarChart,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { Card, CardBody, CardHeader, CardTitle, PageHeader, Stat } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";
import { docsByArea } from "@/lib/content";

const COLORS = {
  primary: "#1b5e3a",
  accent: "#e8a33d",
  secondary: "#2e6e8e",
  destructive: "#c0492b",
  muted: "#6b6256",
};

const fmtBRL = (n: number) => `R$ ${n.toLocaleString("pt-BR")}`;

const totalComparisonData = [
  { name: "Tradicional", valor: 112500 },
  { name: "Com IA", valor: 21000 },
];

const pilotCashData = [
  { name: "Ferramentas", valor: 3000, color: COLORS.secondary },
  { name: "Gabriel", valor: 12000, color: COLORS.primary },
  { name: "Flávio", valor: 6000, color: COLORS.accent },
];

const toolStack = [
  { tool: "Claude", monthly: 115 },
  { tool: "Higgsfield", monthly: 280 },
  { tool: "ElevenLabs", monthly: 125 },
  { tool: "Midjourney / Nano Banana", monthly: 170 },
  { tool: "Suno", monthly: 57 },
];

const toolStackSubtotal = toolStack.reduce((acc, t) => acc + t.monthly, 0);

const comparisonRows = [
  {
    label: "Custo total do piloto",
    traditional: "R$ 90.000 – 135.000",
    ai: "R$ 18.000 – 24.000",
  },
  {
    label: "Equipe",
    traditional: "~10–15 pessoas",
    ai: "1–2 pessoas",
  },
  {
    label: "Prazo",
    traditional: "4–6 meses",
    ai: "3 meses",
  },
  {
    label: "Ferramentas / mês",
    traditional: "—",
    ai: `R$ ${toolStackSubtotal.toLocaleString("pt-BR")} (folga: R$ 800–1.000)`,
  },
];

export function Budget() {
  const docs = docsByArea("orcamentos");
  const comparativoDoc = docs.find((d) => d.id.includes("comparativo-orcamento-proposta"));
  const consolidadoDoc = docs.find((d) => d.id.includes("orcamento-consolidado"));

  return (
    <div>
      <PageHeader
        title="Orçamentos"
        blurb="Comparativo entre produção tradicional e produção com IA, e o orçamento consolidado do piloto de 90 dias."
      />

      {/* Summary cards */}
      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card>
          <CardBody>
            <Stat
              label="Caixa do piloto"
              value="~R$ 18–24 mil"
              hint="Ferramentas + equipe por 3 meses"
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat
              label="Economia vs. tradicional"
              value="~5×"
              hint="R$ 90–135 mil tradicional → R$ 18–24 mil com IA"
            />
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <Stat
              label="Equipe do piloto"
              value="1–2 pessoas"
              hint="Gabriel (R$ 9–15 mil) + Flávio (R$ 6 mil)"
            />
          </CardBody>
        </Card>
      </div>

      {/* Charts */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Custo total do piloto: Tradicional × IA</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={totalComparisonData} margin={{ top: 16, right: 16, left: 8, bottom: 8 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e1d8" vertical={false} />
                  <XAxis dataKey="name" tick={{ fill: COLORS.muted, fontSize: 12 }} />
                  <YAxis
                    tick={{ fill: COLORS.muted, fontSize: 12 }}
                    tickFormatter={(v: number) => `R$ ${(v / 1000).toLocaleString("pt-BR")}k`}
                  />
                  <Tooltip formatter={(value: number) => fmtBRL(value)} />
                  <Bar dataKey="valor" radius={[6, 6, 0, 0]}>
                    {totalComparisonData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={entry.name === "Tradicional" ? COLORS.destructive : COLORS.primary}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Médias das faixas: Tradicional R$ 90–135 mil (≈R$ 112.500); Com IA R$ 18–24 mil (≈R$ 21.000).
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Composição do caixa do piloto (IA)</CardTitle>
          </CardHeader>
          <CardBody>
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pilotCashData}
                    dataKey="valor"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={90}
                    label={(entry: { name?: string; valor?: number }) =>
                      `${entry.name ?? ""}: ${fmtBRL(entry.valor ?? 0)}`
                    }
                  >
                    {pilotCashData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => fmtBRL(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Total: {fmtBRL(pilotCashData.reduce((acc, d) => acc + d.valor, 0))} (ferramentas + equipe, 3 meses).
            </p>
          </CardBody>
        </Card>
      </div>

      {/* Comparison table */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Tradicional × IA</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Item</th>
                  <th className="py-2 pr-4 font-medium">Tradicional</th>
                  <th className="py-2 font-medium">Com IA</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b last:border-0">
                    <td className="py-2 pr-4 font-medium">{row.label}</td>
                    <td className="py-2 pr-4 text-muted-foreground">{row.traditional}</td>
                    <td className="py-2 text-muted-foreground">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Piloto ≈ 7,5 minutos finalizados. Custo tradicional de série infantil no Brasil: R$ 12.000–18.000 por
            minuto finalizado.
          </p>
        </CardBody>
      </Card>

      {/* Tool stack table */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Stack mensal de ferramentas (IA)</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[360px] text-sm">
              <thead>
                <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
                  <th className="py-2 pr-4 font-medium">Ferramenta</th>
                  <th className="py-2 font-medium">Custo / mês</th>
                </tr>
              </thead>
              <tbody>
                {toolStack.map((t) => (
                  <tr key={t.tool} className="border-b last:border-0">
                    <td className="py-2 pr-4">{t.tool}</td>
                    <td className="py-2 text-muted-foreground">{fmtBRL(t.monthly)}</td>
                  </tr>
                ))}
                <tr className="border-b last:border-0 font-semibold">
                  <td className="py-2 pr-4">Subtotal</td>
                  <td className="py-2">{fmtBRL(toolStackSubtotal)}</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-muted-foreground">Com folga de créditos</td>
                  <td className="py-2 text-muted-foreground">R$ 800 – 1.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>

      {/* Source docs */}
      <Card>
        <CardHeader>
          <CardTitle>Documentos-fonte</CardTitle>
        </CardHeader>
        <CardBody>
          <ul className="flex flex-col gap-3">
            {comparativoDoc && (
              <li>
                <Link
                  to={`/doc/${comparativoDoc.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                >
                  <Icon name="FileText" className="h-4 w-4" />
                  {comparativoDoc.title}
                </Link>
                {comparativoDoc.excerpt && (
                  <p className="mt-1 text-xs text-muted-foreground">{comparativoDoc.excerpt}</p>
                )}
              </li>
            )}
            {consolidadoDoc && (
              <li>
                <Link
                  to={`/doc/${consolidadoDoc.id}`}
                  className="flex items-center gap-2 text-sm font-medium text-secondary hover:underline"
                >
                  <Icon name="FileText" className="h-4 w-4" />
                  {consolidadoDoc.title}
                </Link>
                {consolidadoDoc.excerpt && (
                  <p className="mt-1 text-xs text-muted-foreground">{consolidadoDoc.excerpt}</p>
                )}
              </li>
            )}
          </ul>
        </CardBody>
      </Card>
    </div>
  );
}
