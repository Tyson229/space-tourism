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
    <div className="relative aspect-square w-1/2 mt-8 mb-6 md:mt-16 md:mb-14">
      <Image
        alt={destination?.name ?? ""}
        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 70vw, 100vw"
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
