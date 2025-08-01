// tailwind.config.ts

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Mapea la variable --font-cormorant a la utilidad `font-serif`
        serif: ["var(--font-cormorant)"],
        // Mapea la variable --font-open-sans a la utilidad `font-sans`
        sans: ["var(--font-open-sans)"],
      },
    },
  },
  plugins: [],
};
export default config;
