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
  const currentPath =
    path.length > 1 ? usePathname().slice(0, path.length) : usePathname();

  return (
    <Link
      href={path}
      className={`${
        currentPath === path
          ? "border-white transition-all "
          : " transition-color border-transparent duration-200 ease-in hover:border-[#979797]"
      } flex h-full select-none place-items-center max-md:border-e-4 uppercase md:border-b-2`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
