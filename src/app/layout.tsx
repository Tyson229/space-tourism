import "./globals.css";
import type { Metadata } from "next";
import { barlow_condensed, bellefair, barlow } from "@/lib/fonts";
import Navbar from "@/components/NavBar/Navbar";
import MenuBar from "@/components/NavBar/NavLinks/MenuBar";
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
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}  overflow-hidden`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </head>
      <body className="relative flex h-screen w-screen flex-col items-center overflow-x-hidden bg-black">
        <NavBarContextProvider>
          <Navbar />
          <MenuBar />
        </NavBarContextProvider>
        {children}
      </body>
    </html>
  );
}
