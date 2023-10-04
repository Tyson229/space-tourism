import { Bellefair, Barlow_Condensed, Barlow } from "next/font/google";

export const bellefair = Bellefair({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bellfair",
  weight: ["400"],
});

export const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow_condensed",
  weight: ["400", "700"],
});

export const barlow = Barlow({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-barlow",
  weight: ["400", "700"],
});
