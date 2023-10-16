import ContentContainer from "@/components/ContentContainer";
import DarkBackdrop from "@/components/DarkBackdrop";
import PageHeading from "@/components/PageHeading";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-start bg-technology-mobile md:bg-technology-tablet h-full w-full justify-center bg-cover bg-no-repeat lg:bg-technology-desktop">
      <DarkBackdrop>
        <ContentContainer className="justify-start max-lg:px-0 md:place-items-start lg:pl-20">
          <PageHeading prefix="03" title="space launch 101" styles="max-lg:px-6"/>
          {children}
        </ContentContainer>
      </DarkBackdrop>
    </main>
  );
};

export default Layout;
