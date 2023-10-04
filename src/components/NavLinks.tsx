import React from "react";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <ul className="col-span-7 col-start-6 flex h-16 w-full justify-center gap-12 bg-white/5 ps-28 backdrop-blur-2xl">
      <li>
        <NavLink path="/">
          <div className="flex gap-3">
            <span className="font-bold">00</span> Home
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink path="/destination">
          <div className="flex gap-3">
            <span className="font-bold">01</span> Navigation
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink path="/crew">
          <div className="flex gap-3">
            <span className="font-bold">02</span> Crew
          </div>
        </NavLink>
      </li>
      <li>
        <NavLink path="/technology">
          <div className="flex gap-3">
            <span className="font-bold">03</span> Technology
          </div>
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
