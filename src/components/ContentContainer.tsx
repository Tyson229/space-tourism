import React from "react";

const ContentContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string ;
}) => {
  return (
    <div
      className={`mt-[90px] flex w-full max-w-screen-2xl flex-col place-items-center md:mt-24 md:gap-y-0 md:pt-10 lg:mt-32 lg:flex-row ${className} relative z-20 px-6`}
    >
      {children}
    </div>
  ); 
};

export default ContentContainer;
