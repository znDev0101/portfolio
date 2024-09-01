import React from "react";
import ImageAbout from "../../ImageAbout";

const AboutSection = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center gap-x-24 max-w-6xl mx-6 lg:mx-auto px-2 py-5 lg:py-0 lg:px-10 bg-[#343a46] rounded-md'>
      <ImageAbout />
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold text-center lg:text-start'>
          <span className='text-[#fa6743]'>I hope</span> this section, you can
          get to know me
        </h1>
        <p className='mt-16 text-center lg:text-start'>
          Hi Everyone, I am Zulfa Nurhuda from Jakarta, Indonesian. I am
          currently work a freelance{" "}
          <code>Software Developer || Frontend Web Developer</code>, I am fresh
          graduate
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
