import React from "react";
import data from "@/lib/data.json";
import Image from "next/image";
import { redirect } from "next/navigation";
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
        <div>
          <div>
            <div>{result.role}</div>
            <div>{result.name}</div>
            <div>{result.bio}</div>
          </div>
          <Image
            src={result.images.webp.slice(1)}
            width={100}
            height={100}
            alt={result.name}
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
