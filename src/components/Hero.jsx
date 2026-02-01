import React from "react";
import cv from "../assets/CV_AbyanSetyaneva_Updated.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ShinyText from "@/lib/ShinyText";
// impor dari emoji-mart versi baru
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import DarkVeil from "@/lib/DarkVeil";

init({ data });

export default function Hero() {
  return (
    <div className="flex justify-center sm:gap-[5rem] gap-[1rem] py-20 h-[100vh] px-6 md:px-16 w-full md:flex-row flex-col z-1">
      <div className="self-center text-center font-poppins font-[500] flex items-center gap-2 flex-col">
        <p className="text-2xl md:text-5xl">
          Zup! <em-emoji native="👋" set="apple"></em-emoji> I'm{" "}
          <span className="bg-black text-white px-4 rounded-full">
            Abyan Setya.
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
          <ShinyText
            text="a Full-Stack Web Developer "
            speed={3}
            className="text-2xl md:text-5xl"
          />
          <p className="text-2xl md:text-5xl">
            <em-emoji native="👨‍💻" set="apple"></em-emoji>
          </p>
        </div>
        <p className="text-2xl md:text-5xl">
          Turning Ideas{" "}
          <span>
            <em-emoji native="💡" set="apple"></em-emoji>
          </span>{" "}
          Into Powerful Web Experiences.
        </p>
      </div>
    </div>
  );
}
