import React from "react";
import Image from "next/image";
import data from "@/lib/data.json";
import { redirect } from "next/navigation";

interface resultProp {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
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
        <div className="w-full">
          <div>{result?.name}</div>
          <Image
            alt={result?.name ?? ""}
            width={300}
            height={300}
            src={result?.images.webp.slice(1) ?? ""}
            priority
          />
          <p>{result?.description}</p>
          <p>{result?.travel}</p>
        </div>
      ) : (
        redirect('/destination')
      )}
    </>
  );
};

export default Page;
