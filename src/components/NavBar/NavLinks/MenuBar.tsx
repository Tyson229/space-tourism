"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import LinksList from "./LinksList";
import { NavBarContext } from "@/context/context";
import { AiOutlineClose } from "react-icons/ai";

const MenuBar = () => {
  const { isOpen, setIsOpen } = useContext(NavBarContext);
  const menuBarRef = useRef<HTMLDivElement | null>(null);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleClickedOutside = (e: MouseEvent) => {
      if (
        menuBarRef.current &&
        !menuBarRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    document.addEventListener("click", handleClickedOutside);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      document.removeEventListener("click", handleClickedOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isOpen, windowWidth, setIsOpen]);

  const menuBarClasses: string = `absolute right-0 top-0 z-50 flex h-screen w-[70%] max-w-sm flex-col items-end gap-10 bg-white/5 py-10 text-white backdrop-blur-xl transition-transform duration-200 ease-linear ${
    isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-20"
  } `;

  return windowWidth < 768 ? (
    <section ref={menuBarRef} className={menuBarClasses}>
      <button className="mx-4 text-xl" onClick={() => setIsOpen(false)}>
        <AiOutlineClose size={24} className="text-[#D0D6F9]" />
      </button>
      <ul className="grid w-full gap-y-10 ps-8 ">
        <LinksList />
      </ul>
    </section>
  ) : (
    <></>
  );
};

export default MenuBar;
