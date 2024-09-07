import { CgClose } from "react-icons/cg";

interface NavigationMenuProps {
  isToggle: boolean;
  handleClick: any;
  aboutRef: any;
  skillsRef: any;
  projectsRef: any;
  contactRef: any;
}

const NavigationMenu = ({
  isToggle,
  handleClick,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: NavigationMenuProps) => {
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
        } flex-col items-center gap-y-7 m-auto justify-center border border-red-300 h-full duration-700`}
      >
        <li
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <a href='' className='text-3xl font-semibold'>
            About
          </a>
        </li>
        <li onClick={() => skillsRef.current.scrollIntoView()}>
          <a href='' className='text-3xl font-semibold'>
            Skills
          </a>
        </li>
        <li onClick={() => projectsRef.current.scrollIntoView()}>
          <a href='' className='text-3xl font-semibold'>
            Projects
          </a>
        </li>
        <li
          onClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          <a href='' className='text-3xl font-semibold'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
