import "./globals.css";
import type { Metadata } from "next";
import { barlow_condensed, bellefair, barlow } from "@/lib/fonts";
import Navbar from "@/components/Navbar";
import MenuBar from "@/components/MenuBar";
import { NavBarContextProvider } from "@/context/context";

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
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable} overflow-hidden`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </head>
      <body className="relative w-screen h-screen flex flex-col overflow-x-hidden bg-black md:grid md:grid-cols-12 md:place-items-center">
        <NavBarContextProvider>
          <Navbar />
          <MenuBar />
        </NavBarContextProvider>
        {children}
      </body>
    </html>
  );
}
