"use client";
import { usePathname } from "next/navigation";
import data from "@/lib/data.json";
import Image from "next/image";

interface DestinationInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const PlanetImage = () => {
  let currentPath = usePathname();
  if (currentPath === "/destination") currentPath = "/destination/Moon";
  const { destinations } = data;
  const destination: DestinationInterface | undefined = destinations.find(
    (destination) => currentPath.endsWith(destination.name),
  );

  return (
    <div className="relative mb-6 mt-8 aspect-square w-1/2 md:mb-14 md:mt-16 lg:row-span-2 lg:ml-12 lg:w-4/6 ">
      <Image
        alt={destination?.name ?? ""}
        sizes="(max-width: 768px) 30vw, (max-width: 1024px) 40vw, 60vw"
        src={
          destination?.images.png.slice(1) ??
          destination?.images.webp.slice(1) ??
          ""
        }
        fill
        priority
      />
    </div>
  );
};

export default PlanetImage;
