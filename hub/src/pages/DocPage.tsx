import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { docById } from "@/lib/content";
import { areaById } from "@/lib/areas";
import { useDocBody } from "@/lib/userContent";
import { downloadMarkdown, fileBase } from "@/lib/download";
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

  return <DocReader key={doc.id} doc={doc} />;
}

function DocReader({ doc }: { doc: NonNullable<ReturnType<typeof docById>> }) {
  const { body, edited, save, reset } = useDocBody(doc);
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(body);

  useEffect(() => {
    if (editing) setDraft(body);
  }, [editing, body]);

  const area = areaById(doc.area);
  const backTo = area && area.view === "docs" ? `/${area.id}` : "/documentacao";

  const btn =
    "inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors";

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
        {edited ? (
          <Badge tone="secondary">
            <Icon name="Pencil" className="h-3 w-3" /> editado localmente
          </Badge>
        ) : (
          <Badge tone="muted">{doc.status}</Badge>
        )}
        <span className="flex items-center gap-1 text-xs text-muted-foreground">
          <Icon name="Clock" className="h-3 w-3" /> {doc.readMin} min · {doc.words} palavras
        </span>

        <div className="ml-auto flex flex-wrap items-center gap-2">
          {!editing && (
            <>
              <button className={`${btn} hover:bg-muted`} onClick={() => setEditing(true)}>
                <Icon name="Pencil" className="h-4 w-4" /> Editar
              </button>
              <button
                className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}
                onClick={() => downloadMarkdown(fileBase(doc.file), body)}
              >
                <Icon name="Download" className="h-4 w-4" /> Baixar .md
              </button>
              {edited && (
                <button
                  className={`${btn} text-destructive hover:bg-destructive hover:text-destructive-foreground`}
                  onClick={() => {
                    if (confirm("Descartar as edições locais e voltar ao original?")) reset();
                  }}
                >
                  <Icon name="X" className="h-4 w-4" /> Restaurar original
                </button>
              )}
            </>
          )}
          {editing && (
            <>
              <button
                className={`${btn} bg-primary text-primary-foreground hover:opacity-90`}
                onClick={() => {
                  save(draft);
                  setEditing(false);
                }}
              >
                <Icon name="Check" className="h-4 w-4" /> Salvar
              </button>
              <button className={`${btn} hover:bg-muted`} onClick={() => setEditing(false)}>
                Cancelar
              </button>
              <button
                className={`${btn} hover:bg-muted`}
                onClick={() => downloadMarkdown(fileBase(doc.file), draft)}
              >
                <Icon name="Download" className="h-4 w-4" /> Baixar .md
              </button>
            </>
          )}
        </div>
      </div>

      {editing ? (
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="flex flex-col">
            <span className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Markdown
            </span>
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              spellCheck={false}
              className="min-h-[60vh] w-full rounded-lg border bg-card p-4 font-mono text-sm leading-relaxed outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="flex flex-col">
            <span className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Pré-visualização
            </span>
            <div className="min-h-[60vh] overflow-auto rounded-lg border bg-card p-4">
              <MarkdownView>{draft}</MarkdownView>
            </div>
          </div>
        </div>
      ) : (
        <MarkdownView>{body}</MarkdownView>
      )}

      <div className="mt-10 border-t pt-4 text-xs text-muted-foreground">
        Fonte: <code className="font-mono">{doc.file}</code>
        {edited && " · edições salvas apenas neste navegador — baixe o .md para compartilhar/versionar."}
      </div>
    </article>
  );
}
