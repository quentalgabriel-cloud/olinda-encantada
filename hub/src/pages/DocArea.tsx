import { useParams } from "react-router-dom";
import { AREAS, areaById } from "@/lib/areas";
import { docsByArea, categoriesOf } from "@/lib/content";
import { DocCard } from "@/components/DocCard";
import { PageHeader, Badge } from "@/components/ui/primitives";

export function DocArea({ areaId }: { areaId?: string }) {
  const params = useParams();
  const id = areaId ?? params.areaId ?? "documentacao";
  const area = areaById(id) ?? AREAS[1];
  const docs = docsByArea(area.id);
  const categories = categoriesOf(docs);

  return (
    <div>
      <PageHeader title={area.label} blurb={area.blurb}>
        <Badge tone="muted">{docs.length} documentos</Badge>
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
