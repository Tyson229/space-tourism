import Link from "next/link";
import React from "react";
import BreakLine from "./BreakLine";
import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="w-full max-w-screen-2xl flex text-white font-mono items-center absolute top-8 gap-4">
      <Link href="/">
        <Image
          width={48}
          height={48}
          alt="Logo"
          src="/assets/shared/logo.svg"
          className={`bg-white rounded-full`}
        />
      </Link>
      <BreakLine />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
