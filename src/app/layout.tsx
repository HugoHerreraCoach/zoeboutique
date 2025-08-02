// src/app/layout.tsx

import type { Metadata } from "next";
// 1. Importa las nuevas fuentes
import { Cormorant, Open_Sans } from "next/font/google";
import "./globals.css";
import Menu from "@/components/ui/Menu";

// 2. Configura Cormorant como la fuente serif (y por defecto)
const cormorant = Cormorant({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Elige los pesos que necesites
  variable: "--font-cormorant", // Variable para la fuente serif
});

// 3. Configura Open_Sans como la fuente sans-serif
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans", // Variable para la fuente sans-serif
});

export const metadata: Metadata = {
  title: "Zoe Boutique",
  description: "Joyería y accesorios de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${cormorant.variable} ${openSans.variable} antialiased`}
      >
        <Menu />
        <main>{children}</main>
      </body>
    </html>
  );
}
