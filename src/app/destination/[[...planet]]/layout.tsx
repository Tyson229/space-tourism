import React from "react";
import Tabs from "../components/tabs";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="font-mono text-3xl uppercase tracking-wider">
        <span className="font-bold opacity-25">01</span> Pick your destination
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div></div>
        <Tabs />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
