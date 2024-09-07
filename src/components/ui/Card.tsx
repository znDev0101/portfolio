import { RiExternalLinkLine } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

interface ProjectProps {
  imageProject?: string;
  nameProject: string;
  techStack: string[];
  description: string;
  index: number;
}

const Card = ({
  imageProject,
  nameProject,
  techStack,
  description,
  index,
}: ProjectProps) => {
  return (
    <div className='flex-1 flex-shrink w-full bg-[#343a46] rounded-md mt-8 min-h-24'>
      <div className='w-full h-56 pt-6 px-2'>
        <img
          src={imageProject}
          alt='img project'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='px-3 pt-6'>
        <h1 className='text-2xl font-bold'>{nameProject}</h1>
        <p className='mt-2'>{description}</p>
        <div className='flex flex-1 gap-3 flex-wrap mt-6 mb-5'>
          {techStack.map((data, i) => (
            <span key={i} className='bg-[#5a6272] p-2 rounded-md text-xs'>
              {data}
            </span>
          ))}
        </div>
        {index === 0 && (
          <div className='flex gap-x-7 mt-10 mb-7 lg:mb-5'>
            <a
              href='https://tokped-clone-nu.vercel.app/'
              target='_blank'
              className='flex items-center gap-x-2 bg-[#fa6743] hover:bg-white hover:text-[#fa6743] font-bold py-1 px-4 rounded-md duration-300'
            >
              Demo
              <RiExternalLinkLine className='text-xl' />
            </a>
            <a
              href='https://github.com/znDev0101/TokpedClone'
              target='_blank'
              className='flex items-center gap-x-2 bg-[#fa6743]  hover:bg-white hover:text-[#fa6743]  font-bold py-1 px-4 rounded-md'
            >
              Source
              <IoLogoGithub className='text-xl' />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
