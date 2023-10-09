"use client";

import React, { createContext, useState } from "react";

// Define the type for the context value
interface NavBarContextValue {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialContextValue: NavBarContextValue = {
  isOpen: false,
  setIsOpen: () => {},
};

export const NavBarContext =
  createContext<NavBarContextValue>(initialContextValue);

export const NavBarContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </NavBarContext.Provider>
  );
};
