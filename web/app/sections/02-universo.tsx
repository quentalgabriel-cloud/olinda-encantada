import { SECTIONS } from "@/lib/content";

/** Seção 2 — O Universo (a tese central / lore fundacional). */
export function Universo() {
  const s = SECTIONS.universo;
  return (
    <section
      id="universo"
      aria-labelledby="universo-heading"
      className="bg-tile-blue/10 px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <h2
          id="universo-heading"
          className="font-display text-3xl font-bold text-tile-blue sm:text-4xl"
        >
          {s.title}
        </h2>
        <p className="mt-6 text-lg text-colonial-white/85">{s.description}</p>
        <p className="mt-8 inline-block rounded-lg border border-magical-gold/40 bg-magical-gold/10 px-5 py-3 font-display text-lg font-semibold text-magical-gold">
          {s.goldenRule}
        </p>
      </div>
    </section>
  );
}
