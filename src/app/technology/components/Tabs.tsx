"use client";

import Link from "next/link";
import React from "react";
import data from "@/lib/data.json";
import { usePathname } from "next/navigation";
const Tabs = () => {
  const tech = data.technology;
  const currentPath = usePathname();
  const path = currentPath === "/technology" ? "/destination/0" : currentPath;

  return (
    <ul className="col-start-2 grid h-min -translate-y-20 gap-8">
      {tech.map((t, i) => (
        <li
          className={`${
            path === `/technology/${i}`
              ? "bg-white text-black"
              : "border-white/25 border text-white"
          } flex h-20 w-20 items-center justify-center rounded-full  font-serif text-[32px]`}
        >
          <Link href={`/technology/${i}`}>{i + 1}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
