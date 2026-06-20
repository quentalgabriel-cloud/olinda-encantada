"use client";

import { useState } from "react";
import { NAV_LINKS } from "@/lib/content";

/**
 * Navbar fixa no topo com âncoras para cada seção.
 * Mobile: menu colapsável simples.
 */
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-enchanted-night/80 backdrop-blur">
      <nav
        aria-label="Navegação principal"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3"
      >
        <a
          href="#gancho"
          className="font-display text-lg font-bold tracking-wide text-magical-gold"
        >
          Olinda Encantada
        </a>

        <ul className="hidden gap-5 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-colonial-white/80 transition-colors hover:text-magical-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
          onClick={() => setIsOpen((v) => !v)}
          className="rounded border border-white/20 px-3 py-1 text-sm md:hidden"
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-colonial-white/80 transition-colors hover:text-magical-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
