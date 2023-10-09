import React from "react";
import MenuButton from "./MenuButton";
import LinksList from "./LinksList";

const NavLinks = () => {
  return (
    <>
      <MenuButton />
      <div className="col-span-6 col-start-7 hidden w-full bg-white/5 md:grid md:grid-cols-7">
        <ul className="col-span-4 col-start-3 flex h-16 w-full justify-end gap-12 backdrop-blur-2xl">
          <LinksList />
        </ul>
      </div>
    </>
  );
};

export default NavLinks;
