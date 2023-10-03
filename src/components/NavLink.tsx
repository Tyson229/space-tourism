"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`${
        currentPath === path
          ? "border-b-2 border-white transition-all"
          : " transition-color border-b-2 border-transparent duration-200 ease-in hover:border-[#979797]"
      } flex h-full select-none place-items-center uppercase `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
