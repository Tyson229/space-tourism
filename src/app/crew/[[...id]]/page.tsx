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
        <div className="col-span-10 col-start-2 grid h-full  grid-cols-12 justify-center ">
          <Slider />
          <div>
            <div>{result.role}</div>
            <div>{result.name}</div>
            <div>{result.bio}</div>
          </div>
          <Image
            src={result.images.webp.slice(1)}
            style={{ objectFit: "contain", objectPosition: "left" }}
            alt={result.name}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
          />
        </div>
      ) : (
        redirect("/crew")
      )}
    </>
  );
};

export default Page;
