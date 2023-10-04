import ExploreButton from "@/components/ExploreButton";

export default function Home() {
  return (
    <div className="grid h-full w-full grid-rows-5 place-items-center bg-home-desktop bg-cover bg-center bg-no-repeat col-span-12">
      <div className="row-span-2 row-start-3 w-full max-w-screen-2xl items-end justify-between grid grid-cols-12 pl-14 gap-8">
        <div className="flex flex-col col-start-2 col-span-4">
          <span className="font-mono text-3xl uppercase text-[#D0D6F9]">
            So, you want to travel to
          </span>
          <span className="font-serif text-[9.4rem] uppercase text-white">
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
