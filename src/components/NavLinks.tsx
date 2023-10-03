import React from 'react'
import NavLink from './NavLink';

const NavLinks = () => {
  return (
    <ul className="flex gap-8 ps-28 h-16 backdrop-blur-2xl justify-center bg-white/5 grow ">
      <li>
        <NavLink path="/">
          <span className="font-bold">00&nbsp;</span>Home
        </NavLink>
      </li>
      <li>
        <NavLink path="/destination">
          <span className="font-bold">01&nbsp;</span>Navigation
        </NavLink>
      </li>
      <li>
        <NavLink path="/crew">
          <span className="font-bold">02&nbsp;</span>Crew
        </NavLink>
      </li>
      <li>
        <NavLink path="/technology">
          <span className="font-bold">03&nbsp;</span>Technology
        </NavLink>
      </li>
    </ul>
  );
}

export default NavLinks