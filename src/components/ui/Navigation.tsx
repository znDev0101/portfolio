import { motion } from "framer-motion";
import { MenuItem } from "../MenuItem";

const Navigation = () => {
  const items = ["About", "Skills", "Projects", "Contacts"];

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.ul variants={variants} className='absolute'>
      {items.map((i) => (
        <MenuItem i={i} key={i} />
      ))}
    </motion.ul>
  );
};

export default Navigation;
