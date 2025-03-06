import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cblue2: "#081C32",
        cblue: "#102F5C",
        cgreen: "#28C76F",
        cwhite: "#F5F5F5",
        cbrown: "#D9B08C",
        cgray: "#B2BEC3",
        cblack: "081E3D",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        kanit: ["var(--font-kanit)"],
        onset: ["var(--font-onset)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
