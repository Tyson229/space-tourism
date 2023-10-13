import React from "react";
import PlanetImage from "../components/PlanetImage";
import Tabs from "../components/Tabs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex w-full flex-col items-center lg:grid lg:grid-cols-2 lg:space-x-16">
      <PlanetImage />
      <Tabs />
      {children}
    </section>
  );
};

export default Layout;
