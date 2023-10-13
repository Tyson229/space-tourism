import { NavBarContext } from "@/context/context";
import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const MenuButton = () => {
  const { setIsOpen } = useContext(NavBarContext);
  function handleOnMenuClicked() {
    setIsOpen(true);
  }
  return (
    <div className="flex grow justify-end md:hidden">
      <button onClick={handleOnMenuClicked}>
        <GiHamburgerMenu size={24} className={"text-[#D0D6F9]"} />
      </button>
    </div>
  );
};

export default MenuButton;
