import React from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import { redirect } from "next/navigation";
import Slider from "../components/slider";
interface PersonInterface {
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
  const result: PersonInterface | undefined = data.crew[index];

  return (
    <>
      {result ? (
        <div className="col-span-10 col-start-2 grid grid-cols-12">
          <div className="col-span-6 flex flex-col">
            <div className="mb-4 font-serif text-[32px] uppercase opacity-50">
              {result.role}
            </div>
            <div className="mb-7 font-serif text-[56px] uppercase">
              {result.name}
            </div>
            <div className="w-5/6 font-sans text-lg text-[#D0D6F9]">
              {result.bio}
            </div>
          </div>
          <Image
            src={result.images.webp.slice(1)}
            style={{ objectFit: "contain", objectPosition: "center" }}
            alt={result.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className="col-span-5 col-start-7"
          />
        </div>
      ) : (
        redirect("/crew")
      )}
    </>
  );
};

export default Page;
