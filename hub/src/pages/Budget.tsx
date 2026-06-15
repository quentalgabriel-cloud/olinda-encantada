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
import { downloadText } from "@/lib/download";

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

// Distribuição inteligente de verba — Cenário A (piloto + lançamento, 2026).
const fundDistribution = [
  { name: "Produção", pct: 45, color: COLORS.primary },
  { name: "Evento de lançamento", pct: 22, color: COLORS.accent },
  { name: "Imprensa / PR", pct: 13, color: COLORS.secondary },
  { name: "Tráfego pago", pct: 12, color: COLORS.destructive },
  { name: "Reserva", pct: 8, color: COLORS.muted },
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
  const estudoDoc = docs.find((d) => d.id.includes("estudo-veiculacao"));

  function exportCsv() {
    const rows: string[][] = [
      ["Comparativo", "Tradicional", "Com IA"],
      ...comparisonRows.map((r) => [r.label, r.traditional, r.ai]),
      [],
      ["Stack mensal de ferramentas (IA)", "R$/mês"],
      ...toolStack.map((t) => [t.tool, String(t.monthly)]),
      ["Subtotal", String(toolStackSubtotal)],
    ];
    const csv = rows.map((r) => r.map((c) => `"${(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
    downloadText("orcamento-comparativo.csv", "﻿" + csv, "text/csv;charset=utf-8");
  }

  return (
    <div>
      <PageHeader
        title="Orçamentos"
        blurb="Comparativo entre produção tradicional e produção com IA, e o orçamento consolidado do piloto de 90 dias."
      >
        <button
          type="button"
          onClick={exportCsv}
          title="Baixar comparativo (.csv)"
          className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Icon name="FileSpreadsheet" className="h-4 w-4" /> Baixar .csv
        </button>
      </PageHeader>

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

      {/* Fund distribution */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Distribuição inteligente de verba — lançamento 2026</CardTitle>
        </CardHeader>
        <CardBody>
          <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
            <div className="h-[280px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={fundDistribution} margin={{ top: 4, right: 32, left: 8, bottom: 4 }}>
                  <XAxis type="number" hide domain={[0, 50]} />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={140}
                    tick={{ fill: COLORS.muted, fontSize: 12 }}
                  />
                  <Tooltip formatter={(v: number) => `${v}%`} />
                  <Bar dataKey="pct" radius={[0, 6, 6, 0]} label={{ position: "right", formatter: (v: number) => `${v}%`, fill: COLORS.muted, fontSize: 12 }}>
                    {fundDistribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-center gap-2 text-sm text-muted-foreground">
              <p>
                A IA derruba o custo de <strong className="text-foreground">produção</strong> — não o de
                chegar ao público. Por isso a produção fica em ~45% e o restante vai para o{" "}
                <strong className="text-foreground">momento de lançamento</strong> (evento + imprensa +
                tráfego), onde a rede de imprensa do Thales multiplica cada real.
              </p>
              <p className="text-xs">
                Cenário A (clube, 2026): caixa-base ~R$ 50–65 mil. Regra: lançamento + imprensa nunca
                abaixo de ~30% no ano de estreia.
              </p>
              {estudoDoc && (
                <Link to={`/doc/${estudoDoc.id}`} className="mt-1 inline-flex items-center gap-1 text-secondary underline">
                  <Icon name="FileText" className="h-4 w-4" /> Ver o estudo completo (veiculação, imprensa, evento, tráfego)
                </Link>
              )}
            </div>
          </div>
        </CardBody>
      </Card>

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
