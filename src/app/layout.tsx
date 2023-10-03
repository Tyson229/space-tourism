import "./globals.css";
import type { Metadata } from "next";
import { barlow_condensed, bellefair } from "@/lib/fonts";
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
      className={`${barlow_condensed.variable} ${bellefair.variable}`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </head>
      <body className="relative w-screen h-screen bg-black flex justify-center">
        <Navbar />
        <section className="flex gap-4 bg-black w-full h-full text-white">
          {children}
        </section>
      </body>
    </html>
  );
}
