import { motion, useCycle } from "framer-motion";
import { useRef } from "react";
import { useDimensions } from "../../hooks/useDimentions";
import MenuToggle from "../ui/MenuToggle";
import Navigation from "../ui/Navigation";

const Navbar = () => {
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <header className='flex justify-between items-center px-7 lg:px-20 py-5'>
      <nav className='text-[#fa6743] font-bold hover:cursor-pointer'>
        Zulfa Nurhuda
      </nav>
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className='absolute top-0 bottom-0 left-0 bg-white lg:hidden'
          variants={sidebar}
        />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
        <ul className='hidden lg:flex gap-x-10 text-[#fa6743] '>
          <li className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'>
            About
          </li>
          <li className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'>
            Skills
          </li>
          <li className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'>
            Projects
          </li>
          <li className='hover:text-[#fa6743] hover:cursor-pointer font-semibold'>
            Contact
          </li>
        </ul>
      </motion.nav>
    </header>
  );
};

export default Navbar;
