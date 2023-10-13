import React from "react";
import data from "@/lib/data.json";
import { redirect } from "next/navigation";

interface resultProp {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const Page = ({ params }: { params: { planet: string[] } }) => {
  const planet = params.planet;
  const result: resultProp | undefined = data.destinations.find(
    (destination) =>
      destination.name.toLowerCase() === (planet?.[0].toLowerCase() ?? "moon"),
  );
  return (
    <>
      {result ? (
        <div className="mb-10 flex w-full max-w-xl flex-col items-center">
          <h2 className="font-serif text-6xl uppercase text-white md:mb-2 md:text-[5rem]">
            {result?.name}
          </h2>
          <p className="text-center font-sans text-sm text-[#D0D6F9] md:text-base">
            {result?.description}
          </p>
          <div className="my-8 h-px w-full bg-[#383B4B] md:mb-7 md:mt-12"></div>

          <div className="flex w-full flex-col items-center gap-8 md:flex-row md:justify-evenly">
            <p className="flex flex-col items-center gap-3">
              <span className="font-mono text-sm uppercase text-[#D0D6F9]">
                avg. distance
              </span>
              <span className="font-serif text-3xl uppercase text-white">
                {result?.distance}
              </span>
            </p>
            <p className="flex flex-col items-center gap-3">
              <span className="font-mono text-sm uppercase text-[#D0D6F9]">
                est. travel time
              </span>
              <span className="font-serif text-3xl uppercase text-white">
                {result?.travel}
              </span>
            </p>
          </div>
        </div>
      ) : (
        redirect("/destination")
      )}
    </>
  );
};

export default Page;
