"use client";

import React from "react";
import data from "@/lib/data.json";

import Link from "next/link";
import { usePathname } from "next/navigation";
const Tabs = () => {
  const currentPath = usePathname();
  const path =
    currentPath === "/destination" ? "/destination/Moon" : currentPath;

  return (
    <ul className="flex gap-9 ">
      {data.destinations.map(({ name }, i) => (
        <li key={i}>
          <Link
            href={`/destination/${name}`}
            className={`${
              path === `/destination/${name}`
                ? "border-b-2 border-white text-white transition-all"
                : "transition-color border-b-2 border-transparent duration-200 ease-in hover:border-[#979797] hover:text-white"
            } pb-2 font-mono uppercase text-[#D0D6F9]`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
