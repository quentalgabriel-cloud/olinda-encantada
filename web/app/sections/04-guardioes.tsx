import { SECTIONS, GUARDIANS } from "@/lib/content";

/** Seção 4 — Os Grandes Guardiões (mentores). */
export function Guardioes() {
  const s = SECTIONS.guardioes;
  return (
    <section
      id="guardioes"
      aria-labelledby="guardioes-heading"
      className="bg-colonial-green/10 px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="guardioes-heading"
          className="font-display text-3xl font-bold text-colonial-green sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {GUARDIANS.map((g) => (
            <li
              key={g.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="font-display text-xl font-bold text-colonial-white">
                {g.name}
              </h3>
              <p className="text-sm uppercase tracking-wide text-magical-gold">
                {g.role}
              </p>
              <p className="mt-3 text-sm text-colonial-white/85">{g.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
