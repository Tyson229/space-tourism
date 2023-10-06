import React from "react";
import Image from "next/image";
import Slider from "../components/slider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative col-span-12 grid h-full w-full">
      <Image
        fill
        alt="background-crew"
        src="/assets/crew/background-crew-desktop.jpg"
        className="z-0 w-full"
      />
      <div className="z-10 grid h-full w-full place-items-center bg-[#0B0D17] bg-opacity-25 text-white ">
        <div className="relative grid h-[70vh] w-full max-w-screen-2xl grid-cols-12 gap-y-4 ">
          <div className="col-span-5 col-start-2 flex gap-7 font-mono text-3xl uppercase ">
            <span className="opacity-25">02</span> meet your crew
          </div>
          {children}
          <Slider/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
