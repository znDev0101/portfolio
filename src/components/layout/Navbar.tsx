import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import NavigationMenu from "../NavigationMenu";

const Navbar = ({ aboutRef, skillsRef, projectsRef, contactRef }: any) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);

  return (
    <header className='flex justify-between items-center px-7 lg:px-20 py-5'>
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
            className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'
            onClick={() =>
              skillsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </li>
          <li
            className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li
            className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'
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
