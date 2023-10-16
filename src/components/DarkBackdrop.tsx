import React from "react";

const DarkBackdrop = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex w-full h-full justify-center bg-black bg-opacity-25">
      {children}
    </div>
  );
};

export default DarkBackdrop;
