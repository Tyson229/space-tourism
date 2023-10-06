"use client";

import React from "react";
import data from "@/lib/data.json";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Slider = () => {
  const currentPath = usePathname();
  const path = currentPath === "/crew" ? "/crew/0" : currentPath;

  return (
    <ul className="col-start-2 flex gap-6 self-end">
      {data.crew.map((person, i) => (
        <li>
          <Link
            href={`/crew/${i}`}
            className={`${
              path === `/crew/${i}` ? "opacity-100" : "opacity-20"
            } flex h-4 w-4 rounded-full bg-white `}
          ></Link>
        </li>
      ))}
    </ul>
  );
};

export default Slider;
