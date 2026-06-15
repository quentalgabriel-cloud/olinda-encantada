import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { searchDocs } from "@/lib/content";
import { Icon } from "@/components/Icon";

export function SearchBox() {
  const [q, setQ] = useState("");
  const [focus, setFocus] = useState(false);
  const nav = useNavigate();
  const results = q ? searchDocs(q) : [];

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-md border bg-card px-3 py-2">
        <Icon name="Search" className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 150)}
          placeholder="Buscar nos documentos…"
          className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      {focus && results.length > 0 && (
        <div className="absolute right-0 z-50 mt-1 w-full overflow-hidden rounded-md border bg-card shadow-lift">
          {results.map((d) => (
            <button
              key={d.id}
              onMouseDown={() => {
                nav(`/doc/${d.id}`);
                setQ("");
              }}
              className="flex w-full flex-col items-start gap-0.5 px-3 py-2 text-left hover:bg-muted"
            >
              <span className="text-sm font-medium">{d.title}</span>
              <span className="text-xs text-muted-foreground">{d.category}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
