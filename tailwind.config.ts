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

        "home-mobile": "url('/assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('/assets/home/background-home-tablet.jpg')",

        "destination-desktop":
          "url('/assets/destination/background-destination-desktop.jpg')",

        "crew-desktop": "url('/assets/crew/background-crew-desktop.jpg')",

        "technology-desktop":
          "url('/assets/technology/background-technology-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
