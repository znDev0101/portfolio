import React, { forwardRef } from "react";
import SkillsIcons from "../../SkillsIcons";
import ToolsIcons from "../../ToolsIcons";

const SkillsSection = forwardRef(({}, ref: React.ForwardedRef<HTMLElement>) => {
  return (
    <section className='max-w-6xl mx-auto mt-20' ref={ref}>
      <div className='flex flex-col lg:flex-row gap-y-16 px-6 gap-x-5'>
        <SkillsIcons />
        <ToolsIcons />
      </div>
    </section>
  );
});

export default SkillsSection;
