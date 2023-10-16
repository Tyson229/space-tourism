import React from "react";
import data from "@/lib/data.json";
import { redirect } from "next/navigation";

interface CrewInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const Page = ({ params }: { params: { id: string[] } }) => {
  const memberID = params.id?.[0];
  let index: number;
  if (memberID) index = +memberID;
  else index = 0;
  const result: CrewInterface | undefined = data.crew[index];

  return (
    <>
      {result ? (
        <div className="flex w-full flex-col items-center gap-4 max-md:mb-8 lg:row-start-1 lg:items-start lg:h-full lg:justify-end">
          <div className="flex flex-col items-center gap-2 font-serif text-white lg:items-start">
            <span className="uppercase opacity-50 md:text-2xl">
              {result.role}
            </span>
            <span className="text-2xl uppercase md:text-5xl">
              {result.name}
            </span>
          </div>
          <p className="w-full max-w-2xl text-center font-sans text-[15px] text-[#D0D6F9] md:text-lg lg:text-start">
            {result.bio}
          </p>
        </div>
      ) : (
        redirect("/crew")
      )}
    </>
  );
};

export default Page;
