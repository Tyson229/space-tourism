import React from "react";
import BreakLine from "./BreakLine";
import NavLinks from "./NavLinks/NavLinks";
import HomeButton from "./HomeButton";

const Navbar = () => {
  return (
    <nav className="absolute top-0 z-20 flex w-full max-w-screen-2xl items-center p-6 font-mono text-white md:justify-between md:p-0 md:pl-8 lg:top-8">
      <HomeButton />
      <BreakLine />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
