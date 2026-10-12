import React from "react";
import aboutpict from "../assets/Entry_transparent.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/java-script.png";
import atom from "../assets/atom.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import tailwind from "../assets/tailwindcss.png";
import { useInView } from "react-intersection-observer";
import typescript from "../assets/typescript.png";
import nextjs from "../assets/Next.js.png";
import laravel from "../assets/laravel.png";
import nodejs from "../assets/nodejs.png";
import postgresql from "../assets/postgresql.png";
import cv from "../assets/CV_AbyanSetyaneva_Updated.pdf";
export default function About() {
  const [triggerAnime, setTriggerAnime] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"],
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  function triggeranime() {
    setTriggerAnime(true);
  }
  return (
    <div className="flex items-center justify-center  md:flex-row flex-col w-full gap-5">
      <motion.img
        src={aboutpict}
        alt=""
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateY,
          rotateX,
          transformStyle: "preserve-3d",
        }}
        className="sm:w-[420px] md:w-[480px] w-[300px] h-auto pr-5 self-center"
        ref={ref}
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={!triggerAnime && inView ? "whileInView" : {}}
        variants={{
          whileInView: {
            y: 0,
            opacity: 1,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 50,
        }}
        triggerAnime={triggerAnime}
      />

      <div className="font-poppins flex flex-col max-w-4xl pl-5">
        <motion.h1
          className="mb-5 sm:text-[28px] text-[20px] font-bold "
          ref={ref}
          initial={{
            y: 150,
            opacity: 0,
          }}
          animate={!triggerAnime && inView ? "whileInView" : {}}
          variants={{
            whileInView: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
          triggerAnime={triggerAnime}
        >
          A <span className="text-gray-500">dedicated</span> Product
          <span className="text-gray-500"> Engineer </span>
          based in <span className="text-gray-500">Semarang</span>, Central
          Java, Indonesia
        </motion.h1>
        <motion.div
          ref={ref}
          initial={{
            y: -100,
            opacity: 0,
          }}
          animate={!triggerAnime && inView ? "whileInView" : {}}
          variants={{
            whileInView: {
              y: 0,
              opacity: 1,
            },
          }}
          transition={{
            type: "tween",
            duration: 0.8,
          }}
          triggerAnime={triggerAnime}
        >
          <p className="md:text-base text-sm">
            I’m a Product Engineer based in Semarang, Indonesia, with experience turning real-world problems into practical digital products. I work across the development process, from understanding requirements and collaborating with stakeholders to designing systems, building features, and delivering reliable web applications. I’ve also worked with development teams to bring ideas into working solutions.
          </p>
          <p className="md:text-base text-sm mt-5">
            I’m particularly interested in backend engineering, system design, and building software that solves meaningful problems. I believe good engineering goes beyond writing code. It requires understanding why a product exists, making thoughtful technical decisions, and creating solutions that are maintainable, adaptable, and useful to the people who rely on them.
          </p>
          <div className="mt-5">
            <a
              href={cv}
              download="CV_AbyanSetyaneva.pdf"
              className="inline-block bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            >
              Read More
            </a>
          </div>
          <div className="mt-8 flex items-center">
            <h1 className="font-bold md:text-lg text-sm">Tech Stack</h1>
            <div className="h-[23px] border border-black ml-[10px] " />
            <div className="flex flex-wrap gap-5 ml-[10px]">
              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={atom}
                  alt="React JS"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  React JS
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={typescript}
                  alt="TypeScript"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  TypeScript
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={nextjs}
                  alt="Next.js"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Next.js
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={laravel}
                  alt="Laravel"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Laravel
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={nodejs}
                  alt="Node.js"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Node.js
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={postgresql}
                  alt="PostgreSQL"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  PostgreSQL
                </span>
              </div>

              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={tailwind}
                  alt="Tailwind CSS"
                  className="h-[23px] md:h-[30px] w-auto object-contain"
                />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-[10px] font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  Tailwind CSS
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
