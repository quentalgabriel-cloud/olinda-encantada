import { SECTIONS, BUSINESS_PHASES } from "@/lib/content";

/** Seção 8 — Modelo de negócio (Laboratório de Universo). */
export function ModeloNegocio() {
  const s = SECTIONS.modeloNegocio;
  return (
    <section
      id="modelo-negocio"
      aria-labelledby="modelo-heading"
      className="bg-colonial-yellow/10 px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="modelo-heading"
          className="font-display text-3xl font-bold text-colonial-yellow sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ol className="mt-10 space-y-4">
          {BUSINESS_PHASES.map((p) => (
            <li
              key={p.phase}
              className="rounded-lg border-l-4 border-colonial-yellow bg-white/5 p-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-colonial-white">
                  {p.phase}
                </h3>
                <span className="text-sm text-magical-gold">{p.window}</span>
              </div>
              <p className="mt-1 text-sm text-colonial-white/85">{p.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
