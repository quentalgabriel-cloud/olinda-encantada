import { useState } from "react";
import { useParams } from "react-router-dom";
import { AREAS, areaById } from "@/lib/areas";
import { docsByArea, categoriesOf } from "@/lib/content";
import { currentBody } from "@/lib/userContent";
import { downloadBlob } from "@/lib/download";
import { DocCard } from "@/components/DocCard";
import { PageHeader, Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";

export function DocArea({ areaId }: { areaId?: string }) {
  const params = useParams();
  const id = areaId ?? params.areaId ?? "documentacao";
  const area = areaById(id) ?? AREAS[1];
  const docs = docsByArea(area.id);
  const categories = categoriesOf(docs);
  const [zipping, setZipping] = useState(false);

  async function downloadAll() {
    if (docs.length === 0) return;
    setZipping(true);
    try {
      const { default: JSZip } = await import("jszip");
      const zip = new JSZip();
      for (const d of docs) zip.file(d.file, currentBody(d));
      const blob = await zip.generateAsync({ type: "blob" });
      downloadBlob(`olinda-${area.id}.zip`, blob);
    } finally {
      setZipping(false);
    }
  }

  return (
    <div>
      <PageHeader title={area.label} blurb={area.blurb}>
        <div className="flex items-center gap-2">
          <Badge tone="muted">{docs.length} documentos</Badge>
          {docs.length > 0 && (
            <button
              onClick={downloadAll}
              disabled={zipping}
              className="inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors hover:bg-muted disabled:opacity-60"
            >
              <Icon name="FileArchive" className="h-4 w-4" />
              {zipping ? "Compactando…" : "Baixar todos (.zip)"}
            </button>
          )}
        </div>
      </PageHeader>

      {docs.length === 0 ? (
        <p className="text-sm text-muted-foreground">Nenhum documento nesta área ainda.</p>
      ) : (
        categories.map((cat) => {
          const items = docs.filter((d) => d.category === cat);
          return (
            <section key={cat} className="mb-9">
              <h2 className="mb-3 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                {cat}
                <span className="h-px flex-1 bg-border" />
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((doc, i) => (
                  <DocCard key={doc.id} doc={doc} featured={i === 0 && items.length > 1} />
                ))}
              </div>
            </section>
          );
        })
      )}
    </div>
  );
}
