import { SECTIONS, ANTAGONISTS } from "@/lib/content";

/** Seção 5 — O Conflito (Encanto vs. Esquecimento). */
export function Conflito() {
  const s = SECTIONS.conflito;
  return (
    <section
      id="conflito"
      aria-labelledby="conflito-heading"
      className="bg-enchanted-night px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="conflito-heading"
          className="font-display text-3xl font-bold text-carnival-red sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-4 max-w-2xl text-colonial-white/80">{s.description}</p>

        <ul className="mt-10 space-y-4">
          {ANTAGONISTS.map((a) => (
            <li
              key={a.name}
              className="rounded-lg border-l-4 border-carnival-red bg-white/5 p-5"
            >
              <h3 className="font-display text-lg font-bold text-colonial-white">
                {a.name}
              </h3>
              <p className="mt-1 text-sm text-colonial-white/85">{a.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
