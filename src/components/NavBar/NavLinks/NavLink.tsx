import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  path,
  number,
  title,
}: {
  path: string;
  number: string;
  title: string;
}) => {
  const currentPath = usePathname();
  const modifiedPath = path.length > 1 ? currentPath.slice(0, path.length) : currentPath;

  return (
    <Link
      href={path}
      className={`${
        modifiedPath === path
          ? "border-white transition-all "
          : " transition-color border-transparent duration-200 ease-in hover:border-[#979797]"
      } flex h-full select-none place-items-center uppercase max-md:border-e-4 md:border-b-2 md:text-sm lg:text-base`}
    >
      <div className="flex gap-3">
        <span className="font-bold md:hidden lg:block">{number}</span> {title}
      </div>
    </Link>
  );
};

export default NavLink;
