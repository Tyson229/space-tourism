import data from "@/lib/data.json";
import React from "react";
import Image from "next/image";
import { redirect } from "next/navigation";

interface TechnologyProps {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const Page = ({ params }: { params: { id: string[] } }) => {
  const techID = params.id?.[0];
  let index: number;
  if (techID) index = +techID;
  else index = 0;
  const result: TechnologyProps | undefined = data.technology[index];
  return (
    <>
      {result ? (
        <div className="flex w-full flex-col items-center px-6 md:justify-center lg:items-start">
          <div className="mb-2 font-mono text-sm uppercase text-[#D0D6F9] md:mb-4 md:text-base">
            the terminology...
          </div>
          <div className="mb-4 font-serif text-2xl uppercase text-white md:text-5xl lg:text-6xl">
            {result.name}
          </div>
          <div className="max-lg:max-w-lg lg:max-w-xl text-center font-sans text-[15px] text-[#D0D6F9] md:text-base lg:text-start lg:text-lg">
            {result.description}
          </div>
        </div>
      ) : (
        redirect("/technology")
      )}
    </>
  );
};

export default Page;
