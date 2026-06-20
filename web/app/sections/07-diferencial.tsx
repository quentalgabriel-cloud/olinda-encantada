import { SECTIONS } from "@/lib/content";

/** Seção 7 — O Diferencial inimitável. */
export function Diferencial() {
  const s = SECTIONS.diferencial;
  return (
    <section
      id="diferencial"
      aria-labelledby="diferencial-heading"
      className="bg-enchanted-night px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="diferencial-heading"
          className="font-display text-3xl font-bold text-magical-gold sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-6 text-lg text-colonial-white/85">{s.description}</p>

        <ul className="mt-8 space-y-3">
          {s.points.map((point) => (
            <li
              key={point}
              className="flex gap-3 text-colonial-white/85"
            >
              <span aria-hidden className="text-magical-gold">
                ✦
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
