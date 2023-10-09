import Link from "next/link";
import React from "react";
import Image from "next/image";
import BreakLine from "./BreakLine";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex w-full max-w-screen-2xl items-center p-6 font-mono text-white md:absolute md:top-8 md:z-20 md:col-span-12 md:grid md:grid-cols-12 md:place-items-center md:gap-10 md:p-0">
      <Link href="/" className="md:col-start-1">
        <Image
          width={48}
          height={48}
          alt="Logo"
          src="/assets/shared/logo.svg"
          className={`rounded-full bg-white`}
          priority
        />
      </Link>
      <BreakLine />
      <NavLinks />
    </nav>
  );
};

export default Navbar;
