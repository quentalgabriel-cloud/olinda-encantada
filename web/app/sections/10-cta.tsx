import { SECTIONS } from "@/lib/content";

/** Seção 10 — Call to action / contato. */
export function Cta() {
  const s = SECTIONS.cta;
  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-enchanted-night px-4 text-center"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-enchanted-radial" />
      <div className="relative z-10 max-w-2xl">
        <h2
          id="cta-heading"
          className="font-display text-3xl font-extrabold text-magical-gold sm:text-5xl"
        >
          {s.title}
        </h2>
        <p className="mt-6 text-lg text-colonial-white/85">{s.description}</p>
        <a
          href="mailto:quentalgabriel@gmail.com"
          className="mt-10 inline-block rounded-full bg-magical-gold px-7 py-3 font-semibold text-enchanted-night transition-transform hover:scale-105"
        >
          {s.cta}
        </a>
      </div>
    </section>
  );
}
