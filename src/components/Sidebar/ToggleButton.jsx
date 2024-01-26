import React from "react";
import { motion } from "framer-motion";

export default function ToggleButton(props) {
  console.log("clicked");

  function toggle() {
    props.Open((prev) => !prev);
  }

  return (
    <div className="flex gap-[25px] items-center">
      <div
        onClick={toggle}
        className="w-full flex gap-2 align-center justify-between"
      >
        <h1 className="text-black font-poppins text-[12px] mb-1 mr-2 cursor-pointer">
          MENU
        </h1>
        <svg width="23" height="23" viewBox="0 0 23 23">
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
          />
          <motion.path
            strokeWidth="3"
            stroke="black"
            strokeLinecap="round"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </div>
    </div>
  );
}
