"use client";

import Link from "next/link";
import React from "react";
import data from "@/lib/data.json";
import { usePathname } from "next/navigation";
const Tabs = () => {
  const tech = data.technology;
  const currentPath = usePathname();
  const path = currentPath === "/technology" ? "/technology/0" : currentPath;

  return (
    <ul className="flex gap-4 lg:flex-col">
      {tech.map((t, i) => (
        <li key={i}>
          <Link
            href={`/technology/${i}`}
            className={`${
              path === `/technology/${i}`
                ? "bg-white text-black"
                : "border border-white/25 text-white hover:cursor-pointer hover:border-white"
            } flex h-10 w-10 items-center justify-center rounded-full font-serif text-base  md:h-[60px] md:w-[60px] md:text-2xl`}
          >
            {i + 1}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
