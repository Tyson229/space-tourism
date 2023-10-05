import React from "react";
import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" col-span-12 grid h-full w-full place-items-center  text-white relative">
      <Image
        fill
        alt="background-crew"
        src="/assets/crew/background-crew-desktop.jpg"
      />
      <div className="grid w-full max-w-screen-2xl grid-cols-12  gap-8 bg-[#0B0D17] bg-opacity-25 absolute top-0 h-full">
        <div className="col-span-5 col-start-2 flex gap-7 font-mono text-3xl uppercase">
          <span className="opacity-25">02</span> meet your crew
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
