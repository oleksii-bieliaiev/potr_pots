import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)"],
        bebas: ["var(--font-bebas)"],
      },
    },
  },
  plugins: [],
};

export default config;