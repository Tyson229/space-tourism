import ContentContainer from "@/components/ContentContainer";
import DarkBackdrop from "@/components/DarkBackdrop";
import PageHeading from "@/components/PageHeading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-destination-mobile md:bg-destination-tablet bg-start relative z-10 flex w-full justify-center bg-cover bg-no-repeat lg:h-full lg:bg-destination-desktop">
      <DarkBackdrop />
      <ContentContainer className="justify-start md:place-items-start lg:pl-20">
        <PageHeading prefix="01" title="pick your destination" />
        {children}
      </ContentContainer>
    </main>
  );
};

export default Layout;
