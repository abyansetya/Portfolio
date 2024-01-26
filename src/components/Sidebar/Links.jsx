import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = (props) => {
  const items = ["About", "Projects", "Experiences", "Contact"];

  function toggle() {
    props.Open((prev) => !prev);
  }
  return (
    <motion.div
      variants={variants}
      className="absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px]"
    >
      <motion.h1 variants={itemVariants} className="text-black font-poppins">
        MENU
      </motion.h1>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="font-poppins text-[30px] font-bold hover:text-black"
          onClick={toggle}
        >
          {item}
        </motion.a>
      ))}
      <p className="bottom-0 absolute text-[13px]">© 2024 abyan setya.</p>
    </motion.div>
  );
};

export default Links;
