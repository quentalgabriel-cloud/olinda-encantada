import { NavLink } from "react-router-dom";
import { AREAS } from "@/lib/areas";
import { countByArea } from "@/lib/content";
import { Icon } from "@/components/Icon";
import { cn } from "@/lib/cn";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex h-full flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex items-center gap-3 px-5 py-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sidebar-accent text-xl">
          🎩
        </div>
        <div className="leading-tight">
          <div className="font-display text-lg font-semibold">Olinda Encantada</div>
          <div className="text-xs text-sidebar-muted">Hub de Produção</div>
        </div>
      </div>
      <div className="frevo-strip h-0.5 w-full opacity-80" />
      <div className="flex-1 space-y-0.5 overflow-y-auto px-3 py-4">
        {AREAS.map((a) => {
          const count = ["dashboard", "timeline", "kanban", "team", "ideas"].includes(a.view)
            ? null
            : countByArea(a.id);
          return (
            <NavLink
              key={a.id}
              to={a.id === "visao-geral" ? "/" : `/${a.id}`}
              end={a.id === "visao-geral"}
              onClick={onNavigate}
              className={({ isActive }) =>
                cn(
                  "group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-sidebar-muted hover:bg-white/5 hover:text-sidebar-foreground"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    name={a.icon}
                    className={cn("h-4 w-4 shrink-0", isActive && "text-sidebar-accent")}
                  />
                  <span className="flex-1 truncate">{a.label}</span>
                  {count != null && count > 0 && (
                    <span className="rounded-full bg-white/10 px-1.5 text-[11px] text-sidebar-muted">
                      {count}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className="px-5 py-4 text-[11px] text-sidebar-muted">
        10 anos do Calunguinha · 2026
      </div>
    </nav>
  );
}
