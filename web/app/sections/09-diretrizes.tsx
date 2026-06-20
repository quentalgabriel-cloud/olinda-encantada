import { SECTIONS, GUIDELINES, VALIDATION_CRITERIA } from "@/lib/content";

/** Seção 9 — Diretrizes culturais, éticas e legais + gate de validação. */
export function Diretrizes() {
  const s = SECTIONS.diretrizes;
  return (
    <section
      id="diretrizes"
      aria-labelledby="diretrizes-heading"
      className="bg-enchanted-night px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="diretrizes-heading"
          className="font-display text-3xl font-bold text-colonial-green sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ul className="mt-10 space-y-3">
          {GUIDELINES.map((g) => (
            <li key={g} className="flex gap-3 text-sm text-colonial-white/85">
              <span aria-hidden className="text-colonial-green">
                ✓
              </span>
              <span>{g}</span>
            </li>
          ))}
        </ul>

        <h3 className="mt-14 font-display text-2xl font-bold text-colonial-white">
          Critérios de validação — gate de qualidade
        </h3>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {VALIDATION_CRITERIA.map((c) => (
            <li
              key={c}
              className="rounded-lg border border-magical-gold/30 bg-magical-gold/5 p-4 text-sm text-colonial-white/90"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
