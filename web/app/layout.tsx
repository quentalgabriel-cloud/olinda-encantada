import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { MotionProvider } from "@/components/MotionProvider";
import "@/styles/global.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olinda Encantada — Qual memória precisa ser salva hoje?",
  description:
    "Série infantil de aventura e fantasia onde crianças protegem as memórias vivas de uma cidade mágica inspirada no patrimônio cultural de Olinda.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <MotionProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t border-white/10 px-4 py-8 text-center text-sm text-colonial-white/50">
            Olinda Encantada — documento vivo · junho/2026
          </footer>
        </MotionProvider>
      </body>
    </html>
  );
}
