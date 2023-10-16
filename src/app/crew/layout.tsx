import DarkBackdrop from "@/components/DarkBackdrop";
import ContentContainer from "@/components/ContentContainer";
import React from "react";
import PageHeading from "@/components/PageHeading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-start h-full w-full justify-center bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:h-full lg:bg-crew-desktop">
      <DarkBackdrop>
        <ContentContainer className="justify-start md:place-items-start lg:pl-20">
          <PageHeading prefix="02" title="Meet your crew" />
          {children}
        </ContentContainer>
      </DarkBackdrop>
    </main>
  );
};

export default Layout;
