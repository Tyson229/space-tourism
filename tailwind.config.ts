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
        serif: ["var(--font-bellfair)"],
        mono: ["var(--font-barlow_condensed)"],
        sans: ["var(--font-barlow)"],
      },
      backgroundImage: {
        "home-desktop": "url('/assets/home/background-home-desktop.jpg')",
      },
      // backgroundImage: {
      //   "home": "url(./assets/home/background-home-desktop.jpg)",
      // },
    },
  },
  plugins: [],
};
export default config;
