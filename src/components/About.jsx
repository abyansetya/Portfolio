import React from "react";
import aboutpict from "../assets/about.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/java-script.png";
import atom from "../assets/atom.png";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import tailwind from "../assets/tailwindcss.png";
import { useInView } from "react-intersection-observer";

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
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
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
    <div className="flex items-center  justfity-between  md:flex-row flex-col">
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
        className="sm:w-[400px] w-[300px] h-auto pr-5 self-center"
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

      <div className="font-poppins flex flex-col max-w-[600px] pl-5">
        <motion.h1
          className="mb-5 sm:text-[32px] text-[24px] font-bold "
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
          A <span className="text-gray-500">dedicated</span> Front-end{" "}
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
          <p className="md:text-[15px]">
            As a Junior Front-End Developer, I excel in HTML, CSS, JavaScript,
            React, and Tailwind. My focus is on creating responsive websites for
            a seamless user experience. I thrive in collaborative environments,
            working effectively with cross-functional teams to deliver
            outstanding web applications. I prefer to keep challenging my self,
            keep learning and define myself by the work i wanna do.
          </p>
          <div className="mt-8 flex items-center">
            <h1 className="font-bold">Tech Stack</h1>
            <div className="h-[23px] border border-black ml-[10px] " />
            <div className="flex w-[180px] justify-between ml-[10px] ">
              <motion.img
                whileHover={{
                  scale: 1.5,
                }}
                src={html}
                alt="html"
                className="h-[23px]"
              />
              <motion.img
                whileHover={{
                  scale: 1.5,
                }}
                src={css}
                alt="css"
                className="h-[23px]"
              />
              <motion.img
                whileHover={{
                  scale: 1.5,
                }}
                src={js}
                alt="javascript"
                className="h-[23px]"
              />
              <motion.img
                whileHover={{
                  scale: 1.5,
                }}
                src={atom}
                alt="react js"
                className="h-[23px]"
              />
              <motion.img
                whileHover={{
                  scale: 1.5,
                }}
                src={tailwind}
                alt="react js"
                className="h-[23px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
