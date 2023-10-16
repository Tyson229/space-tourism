"use client";

import React from "react";
import data from "@/lib/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Slider = () => {
  const currentPath = usePathname();
  const path = currentPath === "/crew" ? "/crew/0" : currentPath;

  return (
    <ul className="flex gap-6 lg:row-start-2">
      {data.crew.map((person, i) => (
        <li key={i}>
          <Link
            href={`/crew/${i}`}
            className={`${
              path === `/crew/${i}`
                ? "opacity-100"
                : "opacity-20 hover:opacity-50"
            } flex h-3 w-3 rounded-full bg-white `}
          ></Link>
        </li>
      ))}
    </ul>
  );
};

export default Slider;
