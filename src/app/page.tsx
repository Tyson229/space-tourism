import ExploreButton from "@/components/ExploreButton";
import "../lib/data.json";

export default function Home() {
  return (
    <div className="w-full h-full bg-home-desktop bg-no-repeat bg-cover bg-center grid grid-rows-5 place-items-center">
      <div className="w-full max-w-screen-xl items-end flex justify-between row-start-3 row-span-2">
        <div className="flex flex-col w-min">
          <span className="font-mono text-3xl uppercase text-[#D0D6F9]">
            So, you want to travel to
          </span>
          <span className="font-serif text-[9.4rem] uppercase">Space</span>
          <span className="font-mono text-lg text-[#D0D6F9]">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <ExploreButton/>
      </div>
    </div>
  );
}
