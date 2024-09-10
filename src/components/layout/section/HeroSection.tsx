import Introdaction from "../../Introdaction";
import ImageHero from "../../ImageHero";
import React, { forwardRef } from "react";

const HeroSection = forwardRef(({}, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <section
      ref={ref}
      className='max-w-[75rem] lg:mt-20 mx-auto flex flex-col-reverse lg:flex-row gap-y-7 items-center gap-x-36 px-7 py-5'
    >
      <Introdaction />
      <ImageHero />
    </section>
  );
});

export default HeroSection;
