import Link from "next/link";
import React from "react";

const ExploreButton = () => {
  return (
    <div className="group relative flex w-fit place-content-center col-start-9 col-span-2">
      <Link href={"/destination"} className="relative z-10 flex items-center aspect-square rounded-full bg-white p-20 font-serif text-xl uppercase text-[#0B0D17] ">
        Explore
      </Link>
      <div className="absolute bottom-11 z-0 flex aspect-square scale-0 opacity-0 rounded-full bg-[#979797] p-20 transition-transform duration-500 ease-linear group-hover:scale-[200%] group-hover:opacity-[10.36%] group-hover:animate-pulse"></div>
    </div>
  );
};

export default ExploreButton;
