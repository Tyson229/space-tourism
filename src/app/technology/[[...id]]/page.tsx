import React from "react";
import data from "@/lib/data.json";
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
  const memberID = params.id?.[0];
  let index: number;
  if (memberID) index = +memberID;
  else index = 0;
  const result: TechnologyProps | undefined = data.technology[index];
  return (
    <>
      {result ? (
        <div className="flex">
          <div>
            <div className="text-[#D0D6F9] font-mono uppercase">
              the terminology...
            </div>
            <div className="font-serif text-6xl">{result.name}</div>
            <div className="font-sans text-lg text-[#D0D6F9]">
              {result.description}
            </div>
          </div>
          <Image
            src={result.images.portrait.slice(1)}
            width={100}
            height={100}
            alt={result.name}
            priority
          />
        </div>
      ) : (
        redirect("/technology")
      )}
    </>
  );
};

export default Page;
