import Introdaction from "../../Introdaction";
import ImageHero from "../../ImageHero";

const HeroSection = () => {
  return (
    <section className='max-w-[75rem] mx-auto flex flex-col-reverse lg:flex-row gap-y-7 items-center gap-x-36 px-7 py-5'>
      <Introdaction />
      <ImageHero />
    </section>
  );
};

export default HeroSection;
