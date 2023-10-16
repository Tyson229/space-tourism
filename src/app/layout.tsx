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
      className={`${barlow_condensed.variable} ${bellefair.variable} ${barlow.variable}  overflow-x-hidden w-screen h-screen`}
    >
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/favicon-32x32.png"
        ></link>
      </head>
      <body className="relative grid w-full h-full place-items-center overflow-x-hidden ">
        <NavBarContextProvider>
          <Navbar />
          <MenuBar />
        </NavBarContextProvider>
        {children}
      </body>
    </html>
  );
}
