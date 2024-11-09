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
        offWhite: "#f3f4f7",
        royalPurple: "#7a5af8",
        linkColor: "#4f47fb",
        tinytext:"#3C3C3C",
        navcolour: "#5925DC",
        breadCrumbColor: "#475467",
        vest:"#667085",
        tag:"#e4e4e7",
      },
    },
  },
  plugins: [],
} satisfies Config;
