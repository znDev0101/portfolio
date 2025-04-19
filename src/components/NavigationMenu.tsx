import { CgClose } from "react-icons/cg";
import useDetectionScroll from "../hooks/useDetectionSection";
import { useContext } from "react";
import { RefsContext } from "../context/RefContext";

interface NavigationMenuProps {
  isToggle: boolean;
  handleClick: any;
  heroRef: any;
  aboutRef: any;
  skillsRef: any;
  projectsRef: any;
  contactRef: any;
}

const NavigationMenu = ({ isToggle, handleClick }: NavigationMenuProps) => {
  const refsContext = useContext(RefsContext);

  const currentSection = useDetectionScroll(refsContext);

  return (
    <div
      className={`fixed top-0 bottom-0 ${
        isToggle ? `left-0` : `left-full`
      }  right-0 bg-[#343a46] duration-300 lg:hidden`}
    >
      <CgClose
        className={` ${
          isToggle ? `absolute` : `hidden`
        } right-7 top-5 text-3xl`}
        onClick={handleClick}
      />
      <ul
        className={`${
          isToggle ? `flex duration-700` : `hidden duration-700`
        } flex-col items-center gap-y-7 m-auto justify-center h-full duration-700`}
      >
        {/* <li
          className={`${
            activeSection == "about" ? "text-[#fa6743]" : "text-white"
          } text-2xl font-semibold`}
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          About
        </li>
        <li
          className={`${
            activeSection == "skills" ? "text-[#fa6743]" : "text-white"
          } text-2xl font-semibold`}
          onClick={() => skillsRef.current.scrollIntoView()}
        >
          Skills
        </li>
        <li
          className={`${
            activeSection == "projects" ? "text-[#fa6743]" : "text-white"
          } text-2xl font-semibold`}
          onClick={() => projectsRef.current.scrollIntoView()}
        >
          Projects
        </li>
        <li
          className={`${
            activeSection == "contact" ? "text-[#fa6743]" : "text-white"
          } text-2xl font-semibold`}
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </li> */}
      </ul>
    </div>
  );
};

export default NavigationMenu;
