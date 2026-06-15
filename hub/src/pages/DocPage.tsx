import { Link, useParams } from "react-router-dom";
import { docById } from "@/lib/content";
import { areaById } from "@/lib/areas";
import { MarkdownView } from "@/components/MarkdownView";
import { Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";

export function DocPage() {
  const { docId } = useParams();
  const doc = docId ? docById(docId) : undefined;

  if (!doc) {
    return (
      <div className="py-16 text-center">
        <p className="text-muted-foreground">Documento não encontrado.</p>
        <Link to="/documentacao" className="mt-3 inline-block text-secondary underline">
          Voltar à documentação
        </Link>
      </div>
    );
  }

  const area = areaById(doc.area);
  const backTo = area && area.view === "docs" ? `/${area.id}` : "/documentacao";

  return (
    <article className="mx-auto max-w-3xl">
      <Link
        to={backTo}
        className="mb-5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <Icon name="ArrowLeft" className="h-4 w-4" /> {area?.label ?? "Documentação"}
      </Link>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <Badge tone="accent">{doc.category}</Badge>
        <Badge tone="muted">{doc.status}</Badge>
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Icon name="Clock" className="h-3 w-3" /> {doc.readMin} min · {doc.words} palavras
        </span>
      </div>
      <MarkdownView>{doc.raw}</MarkdownView>
      <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
        Fonte: <code className="font-mono">{doc.file}</code>
      </div>
    </article>
  );
}
