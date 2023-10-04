import React from "react";
import Slider from "../components/slider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="font-mono text-3xl uppercase tracking-wider">
        <span className="font-bold opacity-25">02</span> Meet your crew
      </div>
      <div className="grid gap-4">
        <div>{children}</div>
        <Slider />
      </div>
    </div>
  );
};

export default Layout;
