import Link from "next/link";
import React from "react";
import BreakLine from "./BreakLine";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="absolute z-20 top-8 col-span-12 grid w-full max-w-screen-2xl grid-cols-12 place-items-center gap-10 font-mono text-white">
      <Link href="/" className="col-start-1">
        <Image
          width={48}
          height={48}
          alt="Logo"
          src="/assets/shared/logo.svg"
          className={`rounded-full bg-white`}
        />
      </Link>
      <BreakLine />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
