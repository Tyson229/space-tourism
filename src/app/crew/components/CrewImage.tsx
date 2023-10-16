"use client";
import { usePathname } from "next/navigation";
import data from "@/lib/data.json";
import Image from "next/image";

interface CrewInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const CrewImage = () => {
  let currentPath = usePathname();
  if (currentPath === "/crew") currentPath = "/crew/0";
  const currentIndex = currentPath.at(-1) ?? 0;
  const { crew } = data;

  const member: CrewInterface | undefined = crew[+currentIndex];
  return (
    <div className="flex h-[40vh] w-full justify-center max-md:mt-8 max-md:border-b-[1px] max-md:border-b-[#383B4B]  md:h-[60vh] lg:relative lg:col-start-2 lg:row-span-2 lg:h-full">
      <div className="relative h-full w-2/3 max-w-xl lg:w-full">
        <Image
          src={
            member?.images.png.slice(1) ?? member?.images.webp.slice(1) ?? ""
          }
          alt={member?.name ?? ""}
          sizes="(max-width: 768px) 30vw, (max-width: 1024px) 50vw, 100vw"
          fill
          priority
        />
      </div>
    </div>
  );
};

export default CrewImage;
