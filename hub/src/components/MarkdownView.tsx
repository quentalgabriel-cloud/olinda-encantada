import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function MarkdownView({ children }: { children: string }) {
  return (
    <div className="prose-olinda max-w-none space-y-4 leading-relaxed">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ ...p }) => <h1 className="font-display text-2xl font-bold" {...p} />,
          h2: ({ ...p }) => <h2 className="mt-8 font-display text-xl font-semibold" {...p} />,
          h3: ({ ...p }) => <h3 className="mt-6 font-display text-lg font-semibold" {...p} />,
          p: ({ ...p }) => <p className="text-sm text-foreground/90" {...p} />,
          li: ({ ...p }) => <li className="ml-5 list-disc text-sm text-foreground/90" {...p} />,
          a: ({ ...p }) => <a target="_blank" rel="noreferrer" {...p} />,
          table: ({ ...p }) => (
            <div className="my-4 overflow-x-auto">
              <table className="text-sm" {...p} />
            </div>
          ),
          code: ({ ...p }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-[0.85em]" {...p} />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
