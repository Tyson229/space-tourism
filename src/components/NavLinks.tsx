import React from "react";
import NavLink from "./NavLink";

const NavLinks = () => {
  return (
    <div className="col-span-6 col-start-7 grid w-full grid-cols-7 bg-white/5">
      <ul className="col-start-3 col-span-4 flex h-16 w-full justify-end gap-12 backdrop-blur-2xl">
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
    </div>
  );
};

export default NavLinks;
