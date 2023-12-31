import ContentContainer from "@/components/ContentContainer";
import DarkBackdrop from "@/components/DarkBackdrop";
import PageHeading from "@/components/PageHeading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-start h-full w-full justify-center bg-destination-mobile bg-cover bg-no-repeat md:bg-destination-tablet lg:bg-destination-desktop">
      <DarkBackdrop>
        <ContentContainer className="justify-start md:place-items-start lg:pl-20">
          <PageHeading prefix="01" title="pick your destination" />
          {children}
        </ContentContainer>
      </DarkBackdrop>
    </main>
  );
};

export default Layout;
