import type { Config } from "tailwindcss";

/**
 * Paleta canônica extraída de docs/05-moodboard-referencias.md (Grupo E).
 * Mantida em sincronia com lib/colors.ts.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "tile-blue": "#1a6b9f",
        "colonial-yellow": "#f4c430",
        "carnival-red": "#e63946",
        "colonial-green": "#2d8f3d",
        "colonial-white": "#f5f5f5",
        "enchanted-night": "#1a1a2e",
        "magical-gold": "#ffd700",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "enchanted-radial":
          "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.12), transparent 60%)",
      },
    },
  },
  plugins: [],
};

export default config;
