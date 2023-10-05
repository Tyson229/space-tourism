import React from "react";
import Image from "next/image";
import data from "@/lib/data.json";
import { redirect } from "next/navigation";
import Tabs from "../components/tabs";

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
        <div className="col-span-10 col-start-2 grid grid-cols-12  justify-center">
          <div className="relative col-span-6 w-full">
            <Image
              alt={result?.name ?? ""}
              style={{ objectFit: "contain", objectPosition: "left" }}
              src={result?.images.png.slice(1) ?? ""}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              fill
              priority
            />
          </div>
          <div className="col-span-5 col-start-8 flex flex-col gap-9">
            <Tabs />
            <div className="font-serif text-8xl uppercase">{result?.name}</div>
            <p className="h-[10vh] font-sans text-lg text-[#D0D6F9] ">
              {result?.description}
            </p>
            <div className="mt-5 h-px w-full bg-[#383B4B]"></div>
            <div className="grid grid-cols-2 content-center">
              <div className="grid gap-3">
                <div className="font-mono text-sm uppercase text-[#D0D6F9]">
                  avg. distance
                </div>
                <p className="font-serif text-3xl uppercase">
                  {result?.distance}
                </p>
              </div>
              <div className="grid gap-3">
                <div className="font-mono text-sm uppercase text-[#D0D6F9]">
                  est. travel time
                </div>
                <p className="font-serif text-3xl uppercase">
                  {result?.travel}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        redirect("/destination")
      )}
    </>
  );
};

export default Page;
