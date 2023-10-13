import ContentContainer from "@/components/ContentContainer";
import ExploreButton from "@/components/ExploreButton";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center bg-home-mobile bg-cover bg-center bg-no-repeat px-6 md:bg-home-tablet lg:bg-home-desktop">
      <ContentContainer className="h-full justify-around lg:flex-row">
        <Hero />
        <ExploreButton />
      </ContentContainer>
    </main>
  );
}
