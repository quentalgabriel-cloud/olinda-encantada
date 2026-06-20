import { SECTIONS } from "@/lib/content";

/**
 * Seção 1 — Gancho / Hero.
 * Skeleton: placeholder de imagem (Olinda noturna) + pergunta-motor.
 * Será enriquecido com Framer Motion e imagem real na Phase 3.
 */
export function Gancho() {
  const s = SECTIONS.gancho;
  return (
    <section
      id="gancho"
      aria-labelledby="gancho-heading"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-enchanted-night px-4 text-center"
    >
      {/* Placeholder da imagem hero (Olinda noturna) — Phase 2 substitui */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-enchanted-radial"
      />
      <div className="relative z-10 max-w-3xl">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-magical-gold">
          {s.eyebrow}
        </p>
        <h1
          id="gancho-heading"
          className="font-display text-4xl font-extrabold leading-tight text-colonial-white sm:text-6xl"
        >
          {s.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-colonial-white/80 sm:text-lg">
          {s.subtitle}
        </p>
        <a
          href="#universo"
          className="mt-10 inline-block rounded-full bg-magical-gold px-7 py-3 font-semibold text-enchanted-night transition-transform hover:scale-105"
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
