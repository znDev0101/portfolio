import { useState } from "react";
import { HiMenu } from "react-icons/hi";

import NavigationMenu from "../NavigationMenu";
import useDetectionScroll from "../../hooks/useDetectionSection";

const Navbar = ({
  heroRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
  navScroll,
}: any) => {
  const [isToggleMenu, setIsToggleMenu] = useState<boolean>(false);

  const { activeSection } = useDetectionScroll(
    heroRef,
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef
  );

  return (
    <header
      className={`sticky flex justify-between items-center ${
        navScroll
          ? `bg-[#343a46] lg:max-w-7xl rounded-full mx-3 lg:mx-auto py-2 lg:py-4 px-4 lg:px-16 top-3 lg:top-2`
          : `bg-[#1e201e] top-0 lg:px-20 py-4 px-7`
      } duration-300 z-50`}
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
          heroRef={heroRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <ul className='hidden lg:flex gap-x-10 text-[#fa6743] '>
          <li
            className={`${
              activeSection == "about" ? `text-[#fa6743]` : `text-white`
            }  ${
              activeSection == "hero" && `text-white`
            } hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300`}
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About
          </li>
          <li
            className={` ${
              activeSection === "skills" ? "text-[#fa6743]" : "text-white"
            } hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300`}
            onClick={() =>
              skillsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </li>
          <li
            className={` ${
              activeSection === "projects" ? "text-[#fa6743]" : "text-white"
            } hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300`}
            onClick={() =>
              projectsRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Projects
          </li>
          <li
            className={` ${
              activeSection === "contact" ? "text-[#fa6743]" : "text-white"
            } hover:text-[#fa6743] hover:cursor-pointer font-semibold duration-300`}
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
