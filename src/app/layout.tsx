import "./globals.css";
import type { Metadata } from "next";
import { barlow_condensed, bellefair, barlow } from "@/lib/fonts";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Front-end challenge by FrontendMentor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </head>
      <body className="relative h-screen w-screen grid grid-cols-12 place-items-center gap-8 overflow-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
