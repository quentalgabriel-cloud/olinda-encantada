import { SECTIONS, SEASON_ONE, MAGICAL_PLACES } from "@/lib/content";

/** Seção 6 — Temporada 1 "O Relógio das Ladeiras". */
export function Temporada1() {
  const s = SECTIONS.temporada1;
  return (
    <section
      id="temporada1"
      aria-labelledby="temporada1-heading"
      className="bg-tile-blue/10 px-4 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="temporada1-heading"
          className="font-display text-3xl font-bold text-tile-blue sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ol className="mt-10 grid gap-3 sm:grid-cols-2">
          {SEASON_ONE.map((ep) => (
            <li
              key={ep.number}
              className="flex gap-3 rounded-lg border border-white/10 bg-white/5 p-4"
            >
              <span className="font-display text-2xl font-bold text-magical-gold">
                {String(ep.number).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-colonial-white">{ep.title}</h3>
                <p className="text-sm text-colonial-white/70">{ep.logline}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className="mt-14 font-display text-2xl font-bold text-colonial-white">
          Locais mágicos — a cidade como personagem
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {MAGICAL_PLACES.map((p) => (
            <li key={p.real} className="rounded-lg bg-white/5 p-4">
              <p className="font-semibold text-tile-blue">{p.real}</p>
              <p className="mt-1 text-sm text-colonial-white/80">{p.enchanted}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
