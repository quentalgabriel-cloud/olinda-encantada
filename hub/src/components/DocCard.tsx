import { Link } from "react-router-dom";
import type { Doc } from "@/lib/content";
import { currentBody } from "@/lib/userContent";
import { downloadMarkdown, fileBase } from "@/lib/download";
import { Card, Badge } from "@/components/ui/primitives";
import { Icon } from "@/components/Icon";

export function DocCard({ doc, featured }: { doc: Doc; featured?: boolean }) {
  return (
    <Link to={`/doc/${doc.id}`} className="group block h-full">
      <Card className="flex h-full flex-col hover:-translate-y-0.5 hover:shadow-lift">
        <div className="p-5 pb-3">
          <div className="mb-2 flex items-center gap-2">
            <Badge tone="accent">{doc.category}</Badge>
            <span className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
              <Icon name="Clock" className="h-3 w-3" /> {doc.readMin} min
            </span>
          </div>
          <h3 className="font-display text-base font-semibold leading-snug group-hover:text-primary">
            {doc.title}
          </h3>
          {doc.subtitle && (
            <p className="mt-1 text-xs font-medium text-muted-foreground">{doc.subtitle}</p>
          )}
        </div>
        {featured && doc.excerpt && (
          <div className="px-5 pb-5">
            <p className="line-clamp-3 text-sm text-foreground/75">{doc.excerpt}</p>
          </div>
        )}
        <div className="mt-auto flex items-center gap-2 border-t px-5 py-3 text-xs text-muted-foreground">
          <Icon name="FileText" className="h-3.5 w-3.5" />
          <span className="truncate">{doc.file}</span>
          <button
            type="button"
            aria-label="Baixar documento (.md)"
            title="Baixar .md"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              downloadMarkdown(fileBase(doc.file), currentBody(doc));
            }}
            className="ml-auto rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <Icon name="Download" className="h-4 w-4" />
          </button>
        </div>
      </Card>
    </Link>
  );
}
