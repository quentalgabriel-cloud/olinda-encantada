/**
 * Paleta canônica de Olinda Encantada.
 * Fonte de verdade: docs/05-moodboard-referencias.md (Grupo E) +
 * producao/prompts/master-style-prompt.md.
 *
 * Cada cor mapeia para um elemento cultural real e/ou a um personagem,
 * para que a cor seja usada semanticamente, nunca apenas decorativa.
 */
export const COLORS = {
  /** Azul-azulejo português — Nina, memórias do passado */
  tileBlue: "#1a6b9f",
  /** Amarelo-casario colonial — Lia, luz quente, acolhimento */
  colonialYellow: "#f4c430",
  /** Vermelho-bloco de carnaval — Beni, energia, frevo, ação */
  carnivalRed: "#e63946",
  /** Verde colonial / cores do bloco — Homem da Meia-Noite e camisa do Calu */
  colonialGreen: "#2d8f3d",
  /** Branco colonial — fachadas, superfícies claras */
  colonialWhite: "#f5f5f5",
  /** Noite encantada — background base ("hora encantada") */
  enchantedNight: "#1a1a2e",
  /** Ouro mágico — o Encanto, partículas, acentos */
  magicalGold: "#ffd700",
} as const;

export type ColorName = keyof typeof COLORS;

/** Cor de acento de cada protagonista (A Turminha). */
export const CHARACTER_ACCENT: Record<string, string> = {
  calu: COLORS.colonialGreen,
  nina: COLORS.tileBlue,
  beni: COLORS.carnivalRed,
  lia: COLORS.colonialYellow,
  tico: COLORS.colonialYellow,
  "homem-da-meia-noite": COLORS.colonialGreen,
};
