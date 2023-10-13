"use client";

import React, { useEffect, useState } from "react";
import MenuButton from "./MenuButton";
import LinksList from "./LinksList";

const NavLinks = () => {
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
  return windowWidth < 768 ? (
    <MenuButton />
  ) : (
    <ul className="flex h-24 w-3/5 justify-evenly bg-white/5 px-12 backdrop-blur-2xl">
      <LinksList />
    </ul>
  );
};

export default NavLinks;
