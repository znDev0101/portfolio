import React from "react";
import ParallaxTextSkills from "../../parallax/ParallaxTextSkills";
import SkillsIcons from "../../SkillsIcons";
import ToolsIcons from "../../ToolsIcons";

const SkillsSection = () => {
  return (
    <section className='max-w-6xl mx-auto py-10'>
      <div className='flex flex-col lg:flex-row gap-y-16 px-6 gap-x-5'>
        <SkillsIcons />
        <ToolsIcons />
      </div>
      {/* <ParallaxTextSkills baseVelocity={-3}>
        React Js Next Js
      </ParallaxTextSkills>
      <ParallaxTextSkills baseVelocity={3}>
        MongoDB PostgreSQL MySQL
      </ParallaxTextSkills>
      <ParallaxTextSkills baseVelocity={-3}>Prisma</ParallaxTextSkills> */}
    </section>
  );
};

export default SkillsSection;
