import React, { forwardRef } from "react";
import { dataProjects } from "../../../data/DataProjects";

import Card from "../../ui/Card";

const ProjectsSection = forwardRef(
  ({}, ref: React.ForwardedRef<HTMLElement>) => {
    return (
      <section className='max-w-6xl mx-6 lg:mx-auto mt-20' ref={ref}>
        <h1 className='font-semibold text-2xl'>PROJECTS</h1>
        <div className='flex flex-col lg:flex-row gap-4'>
          {dataProjects.map(
            ({ imageProject, nameProject, techStack, description }, i) => (
              <Card
                imageProject={imageProject}
                nameProject={nameProject}
                techStack={techStack}
                description={description}
                key={i}
                index={i}
              />
            )
          )}
        </div>
      </section>
    );
  }
);

export default ProjectsSection;
