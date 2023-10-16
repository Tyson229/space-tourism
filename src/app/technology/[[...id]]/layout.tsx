import React from "react";
import Tabs from "../components/Tabs";
import TechnologyImage from "../components/TechnologyImage";
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mt-8 flex max-lg:h-full w-full flex-col items-center gap-y-8 lg:flex-row-reverse  ">
      <TechnologyImage />
      <div className="flex w-full flex-col items-center md:h-1/2 justify-start max-md:gap-y-8 md:justify-evenly lg:flex-row lg:h-fit lg:gap-x-20">
        <Tabs />
        {children}
      </div>
    </section>
  );
};

export default Layout;
