import React from "react";
import { motion } from "framer-motion";

const initialLetterPositions = {
  thank: {
    T: { y: 8, x: -5 },
    h: { y: -2, x: -3 },
    a: { y: 7, x: -3 },
    n: { y: -15, x: 2 },
    k: { y: 10, x: -10 },
  },
  you: {
    y: { y: 3, x: -5 },
    o: { y: 10, x: 8 },
    u: { y: -12, x: 5 },
  },
};

const hoverVariants = {
  hover: { y: 0, x: 0 },
  initial: initialLetterPositions.thank,
};

export default function Thankyou() {
  return (
    <motion.div
      className="font-poppins flex cursor-default"
      variants={hoverVariants}
      initial="initial"
      whileHover="hover"
    >
      {Object.entries(initialLetterPositions.thank).map(
        ([letter, initialPosition]) => (
          <motion.p
            key={letter}
            variants={hoverVariants}
            initial={initialPosition}
          >
            {letter}
          </motion.p>
        )
      )}
      <motion.div style={{ marginLeft: "5px" }}></motion.div>{" "}
      {/* Add margin-left */}
      {Object.entries(initialLetterPositions.you).map(
        ([letter, initialPosition]) => (
          <motion.p
            key={letter}
            variants={hoverVariants}
            initial={initialPosition}
          >
            {letter}
          </motion.p>
        )
      )}
    </motion.div>
  );
}
