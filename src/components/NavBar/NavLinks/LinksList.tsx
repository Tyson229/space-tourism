import React from "react";
import NavLink from "./NavLink";

const LinksList = () => {
  return (
    <>
      <li>
        <NavLink path="/" number={"00"} title="Home" />
      </li>
      <li>
        <NavLink path="/destination" number={"01"} title="Navigation" />
      </li>
      <li>
        <NavLink path="/crew" number={"02"} title="Crew" />
      </li>
      <li>
        <NavLink path="/technology" number={"03"} title="Technology" />
      </li>
    </>
  );
};

export default LinksList;
