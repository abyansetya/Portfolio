import React from "react";
import aboutpict from "../assets/about.png";
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
        className="sm:w-[350px] md:w-[400px] w-[250px] h-auto pr-5 self-center"
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
          A <span className="text-gray-500">dedicated</span> Fullstack{" "}
          <span className="text-gray-500"> Developer </span>
          based in <span className="text-gray-500">Semarang</span>, Central Java
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
            I’m a software developer focused on building reliable, scalable web
            applications that create real impact. I care about designing
            thoughtful systems, writing structured code, and turning ideas into
            digital products that genuinely solve problems and improve how
            people work.
          </p>
          <p className="md:text-base text-sm mt-5">
            I’m driven by strong fundamentals and continuous learning, always
            refining how I think, design, and build. For me, good software is
            not just about features, but about clarity, efficiency, and
            delivering solutions that are meaningful and long-lasting. I value
            problem-solving over complexity, and I aim to create systems that
            are easy to maintain and adapt over time. This mindset helps me
            approach every project with purpose and thoughtful execution.
          </p>
          <div className="mt-8 flex items-center">
            <h1 className="font-bold md:text-lg text-sm">Tech Stack</h1>
            <div className="h-[23px] border border-black ml-[10px] " />
            <div className="flex gap-5 justify-between ml-[10px] ">
              <div className="relative group flex justify-center items-center">
                <motion.img
                  whileHover={{
                    scale: 1.2,
                  }}
                  src={atom}
                  alt="React JS"
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
                  className="h-[23px] md:h-[30px]"
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
