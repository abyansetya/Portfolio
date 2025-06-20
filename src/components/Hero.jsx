import React from "react";
import profilepict from "../assets/profilepict.svg";
import cv from "../assets/CV_AbyanSetyaneva_Updated.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  function readme() {
    window.open(cv);
  }

  const [text] = useTypewriter({
    words: ["ull Stack Developer"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 50,
  });

  return (
    <div className="flex justify-center sm:gap-[5rem] gap-[1rem] py-20 h-[100vh] px-16 w-full md:flex-row flex-col z-1">
      <motion.img
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
        }}
        src={profilepict}
        alt=""
        className="flex h-[300px] w-[300px] sm:h-[400px] sm:w-[400px]  self-center  "
        draggable="false"
      />
      <div className="self-center text-center font-poppins">
        <p className="font-[600] text-center">Hello, I'm</p>
        <h1 className="font-[600] text-[2rem] sm:text-[3rem] text-center">
          Abyan Setya
        </h1>
        <span className="font-[600] text-2xl mb-1">F{text}</span>
        <span>
          <Cursor />
        </span>
        <div className="flex items-center justify-center gap-1 text-[#7d7d7d] font-poppins mt-5">
          <button
            className="hover:text-black cursor-pointer hover:underline"
            onClick={readme}
          >
            Readme{" "}
          </button>
          <p className="text-black font-bold"> or</p>
          <button className="hover:text-black cursor-pointer hover:underline">
            <a href="#Projects">View Projects</a>
          </button>
        </div>
      </div>
    </div>
  );
}
