import Link from "next/link";
import React from "react";
import Image from "next/image";

const HomeButton = () => {
  return (
    <Link href="/" className="relative h-10 w-10 md:h-12 md:w-12">
      <Image
        fill
        alt="Logo"
        src="/assets/shared/logo.svg"
        className={`rounded-full bg-white`}
        priority
      />
    </Link>
  );
};

export default HomeButton;
