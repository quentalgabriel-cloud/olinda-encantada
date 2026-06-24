import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Icon } from "@/components/Icon";
import { SearchBox } from "@/components/SearchBox";
import { cn } from "@/lib/cn";

export function Layout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-[270px_1fr]">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen lg:block">
        <Sidebar />
      </aside>

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 bg-black/40 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        />
        <aside
          className={cn(
            "absolute left-0 top-0 h-full w-[270px] transition-transform",
            open ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <Sidebar onNavigate={() => setOpen(false)} />
        </aside>
      </div>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 border-b bg-background/85 backdrop-blur">
          <div className="frevo-strip h-1 w-full" />
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6">
            <button
              className="rounded-md p-2 text-muted-foreground hover:bg-muted lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
            >
              <Icon name="Menu" className="h-5 w-5" />
            </button>
            <Link to="/" className="font-display text-base font-semibold lg:hidden">
              Olinda Encantada
            </Link>
            <div className="ml-auto w-full max-w-sm">
              <SearchBox />
            </div>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
