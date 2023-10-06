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
        <div className=" col-span-10 col-start-3 grid grid-cols-12 h-full">
          <div className="col-span-5 flex flex-col">
            <div className="font-mono uppercase text-[#D0D6F9] mb-3">
              the terminology...
            </div>
            <div className="font-serif text-6xl uppercase mb-4">{result.name}</div>
            <div className="font-sans text-lg text-[#D0D6F9]">
              {result.description}
            </div>
          </div>
          <Image
            src={result.images.portrait.slice(1)}
            style={{ objectFit: "contain", objectPosition: "center" }}
            alt={result.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="col-start-8 col-span-4"
          />
        </div>
      ) : (
        redirect("/technology")
      )}
    </>
  );
};

export default Page;
