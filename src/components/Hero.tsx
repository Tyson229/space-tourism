import React from "react";

const Hero = () => {
  return (
    <section className="flex max-w-lg flex-col items-center md:justify-center md:gap-y-6 lg:items-start">
      <h2 className="font-mono text-xl uppercase tracking-widest text-[#D0D6F9] lg:text-[1.75rem]">
        So, you want to travel to
      </h2>

      <h1 className="font-serif text-8xl uppercase leading-normal text-white md:text-9xl lg:text-[10.7rem]">
        Space
      </h1>

      <p className="text-center font-mono text-lg leading-[25px] text-[#D0D6F9] lg:text-justify lg:leading-8">
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
    </section>
  );
};

export default Hero;
