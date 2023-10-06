import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="col-span-12 grid h-full w-full place-items-center bg-destination-desktop bg-cover bg-no-repeat text-white">
      <div className="grid h-[70vh] gap-y-4 w-full max-w-screen-2xl grid-cols-12 ">
        <div className="col-span-5 col-start-2 flex gap-7 font-mono text-3xl uppercase">
          <span className="opacity-25">01</span> pick your destination
        </div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
