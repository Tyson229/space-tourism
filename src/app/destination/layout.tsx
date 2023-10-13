import ContentContainer from "@/components/ContentContainer";
import DarkBackdrop from "@/components/DarkBackdrop";
import PageHeading from "@/components/PageHeading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-destination-mobile relative z-10 md:bg-destination-tablet bg-start w-full h-full bg-cover bg-no-repeat lg:bg-destination-desktop ">
      <DarkBackdrop />
      <ContentContainer className="justify-start md:place-items-start ">
        <PageHeading prefix="01" title="pick your destination" />
        {children}
      </ContentContainer>
    </main>
  );
};

export default Layout;
