import React from "react";
import data from "@/lib/data.json";

import Link from "next/link";
const Tabs = () => {
  return (
    <ul className="flex gap-4 font-mono">
      {data.destinations.map((destination, i) => (
        <li key={i}>
          <Link href={`/destination/${destination.name}`}>{destination.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
