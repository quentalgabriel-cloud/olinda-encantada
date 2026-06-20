import { SECTIONS, CHARACTERS } from "@/lib/content";

/** Seção 3 — A Turminha (protagonistas). */
export function Turminha() {
  const s = SECTIONS.turminha;
  return (
    <section
      id="turminha"
      aria-labelledby="turminha-heading"
      className="bg-enchanted-night px-4 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="turminha-heading"
          className="font-display text-3xl font-bold text-colonial-white sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CHARACTERS.map((c) => (
            <li
              key={c.id}
              className="rounded-xl border border-white/10 bg-white/5 p-6"
              style={{ borderTopColor: c.accent, borderTopWidth: 4 }}
            >
              <h3 className="font-display text-xl font-bold" style={{ color: c.accent }}>
                {c.name}
              </h3>
              <p className="text-sm uppercase tracking-wide text-colonial-white/60">
                {c.role} · {c.age}
              </p>
              <p className="mt-3 text-sm text-colonial-white/85">{c.power}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-magical-gold">
                Representa: {c.represents}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
