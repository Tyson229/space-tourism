import ExploreButton from "@/components/ExploreButton";

export default function Home() {
  return (
    <div className="bg-home-mobile md:bg-home-tablet h-full w-full bg-cover bg-center bg-no-repeat md:col-span-12 md:grid md:grid-rows-5 md:place-items-center xl:bg-home-desktop border">
      <div className="md:row-span-2 md:row-start-3 md:grid w-full max-w-screen-2xl md:grid-cols-12 md:items-end md:justify-between gap-8">
        <div className="md:col-span-4 md:col-start-2 flex flex-col">
          <span className="font-mono uppercase text-[#D0D6F9] xl:text-3xl">
            So, you want to travel to
          </span>
          <span className="font-serif text-7xl md:text-[9.4rem] uppercase text-white">
            Space
          </span>
          <span className="font-mono text-lg text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <ExploreButton />
      </div>
    </div>
  );
}
