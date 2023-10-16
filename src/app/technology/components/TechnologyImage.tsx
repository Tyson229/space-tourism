"use client";
import { usePathname } from "next/navigation";
import data from "@/lib/data.json";
import Image from "next/image";
import { useEffect, useState } from "react";

interface TechnologyInterface {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

const TechnologyImage = () => {
  let currentPath = usePathname();
  if (currentPath === "/technology") currentPath = "/technology/0";
  const currentIndex = currentPath.at(-1) ?? 0;
  const { technology } = data;
  const tech: TechnologyInterface | undefined = technology[+currentIndex];

  const [windowWidth, setWindowWidth] = useState(0);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowWidth]);

  return (
    <div className="relative flex h-1/4 w-full justify-center md:h-1/3 lg:aspect-square lg:h-full lg:w-1/2 ">
      <Image
        src={
          tech
            ? windowWidth < 1024
              ? tech?.images.landscape.slice(1)
              : tech?.images.portrait.slice(1)
            : ""
        }
        alt={tech?.name ?? ""}
        sizes="(max-width: 1024px) 100vw, 60vw"
        fill
        priority
        style={{ objectFit: "fill" }}
      />
    </div>
  );
};

export default TechnologyImage;
