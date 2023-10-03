import React from "react";
import Slider from "../components/slider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="font-mono">02 Pick your destination</div>
      <div className="grid gap-4">
        <div>{children}</div>
        <Slider />
      </div>
    </div>
  );
};

export default Layout;
