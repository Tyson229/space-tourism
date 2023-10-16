import React from "react";
import Slider from "../components/slider";
import CrewImage from "../components/CrewImage";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex w-full flex-col items-center max-lg:gap-y-8 md:mt-10 md:flex-col-reverse md:justify-evenly lg:mt-0 lg:grid lg:h-full lg:max-h-[50rem] lg:grid-cols-2">
      <CrewImage />
      <Slider />
      {children}
    </section>
  );
};

export default Layout;
