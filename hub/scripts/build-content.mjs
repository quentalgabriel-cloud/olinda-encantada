// Content pipeline (Wave 0 contract): scans the repository markdown docs and
// emits a single JSON the app renders. The .md files are the single source of
// truth — editing a doc updates the hub. No CMS, no database.
import { readdirSync, readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, "..", "..");
const outFile = join(__dirname, "..", "src", "content", "content.json");

const SCAN_DIRS = ["docs", "producao"];

// --- Area routing: maps a repo-relative path to its primary hub area. ---
// Keep in sync with src/lib/areas.ts (the navigation contract).
function areaFor(p) {
  const f = p.replace(/\\/g, "/");
  if (f.startsWith("producao/episodios/")) return "roteiros";
  if (f.startsWith("producao/financiamento/")) return "orcamentos";
  if (f.startsWith("producao/parcerias/") || f.startsWith("producao/pesquisa-campo/")) return "parcerias";
  if (f.startsWith("producao/prompts/") || f.startsWith("producao/testes-estilo/")) return "stack";
  if (f === "producao/checklist-qc.md") return "ideias";
  if (f === "docs/01-biblia-universo.md" || f === "docs/05-moodboard-referencias.md") return "biblia";
  if (f === "docs/pesquisa/01-mitologia-oral.md" || f === "docs/pesquisa/02-catalogo-bonecos-blocos.md" || f === "docs/pesquisa/03-patrimonio-mestres.md") return "biblia";
  if (f === "docs/pesquisa/04-editais-financiamento.md" || f === "docs/pesquisa/05-mercado-benchmark.md") return "editais";
  if (f === "docs/03-roadmap-estrategico.md" || f.startsWith("docs/plataforma/")) return "cronograma";
  if (f === "docs/00-analise-video-referencia.md" || f === "docs/02-pipeline-producao-ia.md" || f === "docs/04-setup-claude-higgsfield.md") return "stack";
  if (f === "docs/pesquisa/README.md") return "ideias";
  return "documentacao";
}

function categoryFor(p) {
  const f = p.replace(/\\/g, "/");
  if (f.startsWith("docs/pesquisa/")) return "Pesquisa";
  if (f.startsWith("docs/plataforma/")) return "Plataforma";
  if (f.startsWith("docs/")) return "Fundação";
  if (f.startsWith("producao/financiamento/")) return "Financiamento";
  if (f.startsWith("producao/episodios/")) return "Episódios";
  if (f.startsWith("producao/parcerias/")) return "Parcerias";
  if (f.startsWith("producao/prompts/")) return "Prompts";
  if (f.startsWith("producao/pesquisa-campo/")) return "Pesquisa de campo";
  if (f.startsWith("producao/testes-estilo/")) return "Testes de estilo";
  return "Produção";
}

function walk(dir, acc = []) {
  let entries = [];
  try { entries = readdirSync(dir); } catch { return acc; }
  for (const name of entries) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (name.endsWith(".md")) acc.push(full);
  }
  return acc;
}

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!m) return { data: {}, body: raw };
  const data = {};
  for (const line of m[1].split("\n")) {
    const kv = line.match(/^(\w[\w-]*):\s*(.*)$/);
    if (kv) data[kv[1]] = kv[2].replace(/^["']|["']$/g, "");
  }
  return { data, body: raw.slice(m[0].length) };
}

function deriveTitles(body, file) {
  const lines = body.split("\n");
  const h1 = (lines.find((l) => /^#\s+/.test(l)) || "").replace(/^#\s+/, "").trim();
  const h2 = (lines.find((l) => /^##\s+/.test(l)) || "").replace(/^##\s+/, "").trim();
  const generic = /olinda encantada|calunguinha/i;
  let title = h1;
  let subtitle = "";
  if (h1 && generic.test(h1) && h2) { title = h2; }
  else if (h2) { subtitle = h2; }
  if (!title) title = basename(file, ".md");
  if (subtitle === title) subtitle = "";
  return { title, subtitle };
}

function excerptOf(body) {
  for (const block of body.split("\n")) {
    const t = block.trim();
    if (!t) continue;
    if (/^[#>|`\-*=]/.test(t) || t.startsWith("---")) continue;
    return t.replace(/[*_`#]/g, "").slice(0, 220);
  }
  return "";
}

const docs = [];
for (const d of SCAN_DIRS) {
  for (const full of walk(join(repoRoot, d))) {
    const rel = relative(repoRoot, full).replace(/\\/g, "/");
    const raw = readFileSync(full, "utf8");
    const { data, body } = parseFrontmatter(raw);
    const { title, subtitle } = deriveTitles(body, full);
    const words = body.split(/\s+/).filter(Boolean).length;
    docs.push({
      id: rel.replace(/[^a-z0-9]+/gi, "-").toLowerCase(),
      file: rel,
      area: areaFor(rel),
      category: categoryFor(rel),
      title: data.title || title,
      subtitle: data.subtitle || subtitle,
      status: data.status || "ativo",
      tags: data.tags ? data.tags.split(",").map((s) => s.trim()) : [],
      excerpt: excerptOf(body),
      words,
      readMin: Math.max(1, Math.round(words / 200)),
      raw,
    });
  }
}

docs.sort((a, b) => a.file.localeCompare(b.file));

const byArea = {};
for (const doc of docs) byArea[doc.area] = (byArea[doc.area] || 0) + 1;

// Resilience: when the repo docs are not present (e.g. the Vercel build only
// uploads hub/), keep the committed content.json instead of overwriting it with
// an empty bundle. Locally, where docs/ and producao/ exist, this regenerates.
if (docs.length === 0 && existsSync(outFile)) {
  console.log(`[build-content] 0 docs found — keeping existing committed content.json`);
  process.exit(0);
}

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(
  outFile,
  JSON.stringify({ generatedAt: new Date().toISOString(), total: docs.length, byArea, docs }, null, 2)
);
console.log(`[build-content] ${docs.length} docs -> ${relative(repoRoot, outFile)}`);
