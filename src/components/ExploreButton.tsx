import Link from "next/link";
import React from "react";

const ExploreButton = () => {
  return (
    <div className="group flex items-center justify-center">
      <Link
        href={"/destination"}
        className="z-20 flex aspect-square items-center justify-center rounded-full bg-white p-12 font-serif text-xl uppercase text-[#0B0D17] md:p-20 md:text-3xl lg:translate-y-10"
      >
        Explore
      </Link>
      <div className="absolute z-10 hidden aspect-square translate-y-10 scale-0 cursor-pointer rounded-full bg-[#979797] p-20 opacity-0 transition-transform duration-200 ease-linear group-hover:scale-[200%] group-hover:animate-pulse group-hover:opacity-[10.36%] lg:flex"></div>
      <div className="absolute z-0 hidden aspect-square translate-y-10 scale-0 cursor-pointer rounded-full bg-gray-400 p-20 opacity-0 transition-transform duration-200 ease-linear group-hover:scale-[250%] group-hover:animate-pulse group-hover:opacity-[10.36%] lg:flex"></div>
    </div>
  );
};

export default ExploreButton;
