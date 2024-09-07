import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import NavigationMenu from "../NavigationMenu";

const Navbar = ({
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  navScroll,
}: any) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);

  return (
    <header
      className={`sticky flex justify-between items-center px-7  py-5 ${
        navScroll
          ? `bg-[#343a46] max-w-7xl rounded-full mx-auto py-4 lg:px-16 top-2`
          : `bg-[#1e201e] top-0 lg:px-20`
      } duration-300`}
    >
      <nav className='text-[#fa6743] font-bold hover:cursor-pointer'>
        Zulfa Nurhuda
      </nav>
      <nav>
        <HiMenu
          className='text-3xl lg:hidden'
          onClick={() => setIsToggleMenu(!isToggleMenu)}
        />
        <NavigationMenu
          handleClick={() => setIsToggleMenu(!isToggleMenu)}
          isToggle={isToggleMenu}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <ul className='hidden lg:flex gap-x-10 text-[#fa6743] '>
          <li
            className='text-white hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300'
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            className='text-white hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300'
            onClick={() =>
              skillsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </li>
          <li
            className='text-white hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300'
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li
            className='text-white hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300'
            onClick={() =>
              contactRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
