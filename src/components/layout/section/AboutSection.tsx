import ImageAbout from "../../ImageAbout";

const AboutSection = ({ aboutRef }: { aboutRef: any }) => {
  return (
    <section
      className='flex flex-col lg:flex-row items-center gap-x-24 max-w-6xl mx-6 mt-20 lg:mx-auto p-5 lg:py-0 lg:px-10 bg-[#343a46] rounded-md'
      ref={aboutRef}
    >
      <ImageAbout />
      <div className='flex flex-col mt-10'>
        <h1 className='text-4xl font-bold text-center lg:text-start'>
          <span className='text-[#fa6743]'>I hope</span> this section, you can
          get to know me
        </h1>
        <p className='mt-10  lg:mt-16 text-center lg:text-start'>
          Hi Everyone, I am Zulfa Nurhuda from Jakarta, Indonesian. I am
          currently work a freelance{" "}
          <code>Software Developer || Frontend Web Developer</code>, I am fresh
          graduate, from Bachelor computer science, i have 2 years work
          experience frontend web developer
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
