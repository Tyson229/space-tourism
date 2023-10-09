import React from "react";
import NavLink from "./NavLink";

const LinksList = () => {
  return (
    <>
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
    </>
  );
};

export default LinksList;
