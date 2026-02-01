import React, { useEffect, useRef, useState } from "react";
import frame1 from "../assets/Frame 1.svg";
import frame2 from "../assets/Frame 2.svg";
import frame3 from "../assets/Frame 3.svg";
import netfreak from "../assets/netfreak.svg";
import pdfwiz from "../assets/pdfwiz.svg";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  const carousel = useRef();
  const innerCarousel = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current && innerCarousel.current) {
        setWidth(
          innerCarousel.current.scrollWidth - carousel.current.offsetWidth + 50, // Added buffer
        );
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <motion.div
        ref={carousel}
        className="overflow-hidden "
        variants={{
          hidden: { opacity: 0, y: 75, scale: 0.5 },
          visible: { opacity: 1, y: 0, scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 1,
          delay: 0.25,
        }}
      >
        <div className="w-full font-poppins justify-center flex font-bold text-[32px] mb-7 pt-5">
          Projects
        </div>
        <motion.div
          ref={innerCarousel}
          whileTap={{
            cursor: "grabbing",
          }}
          className=" carousel font-poppins px-6 flex cursor-grab snap-x"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          <div className="innercarousel flex snap-x">
            <div className="pointer-events-none item">
              <img src={netfreak} alt="" className="sm:w-[500px] w-[350px] " />
              <div className="sm:w-[500px] w-[350px]">
                <h1 className="justify-center flex font-bold">
                  NETFREAK - netflix clone
                </h1>
                <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
                  The web that i created for cloning netflix website but using
                  TMBD API. web content is mostly fetched from tmdb api ex.
                  movie title, image, actress/actor,etc. this web also include
                  search tab that can search a movie.
                </p>
                <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    TMDB API
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-5 cursor-pointer">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <a href="https://github.com/abyansetya/NETFREAK">
                      <FiGithub size={23} />
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <Link to="/notfound">
                      <LuExternalLink size={23} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none item">
              <img src={pdfwiz} alt="" className="sm:w-[500px] w-[350px] " />
              <div className="sm:w-[500px] w-[350px]">
                <h1 className="justify-center flex font-bold">
                  PDF Wizard - ilovepdf clone
                </h1>
                <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
                  The web that i created for cloning ilovepdf with interactive
                  user interfaces and dragged upload file. this web stack is
                  based on react js and tailwind css.
                </p>
                <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    React JS
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-5 cursor-pointer">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <a href="https://github.com/abyansetya/PDF-WIZARD">
                      <FiGithub size={23} />
                    </a>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <Link to="/notfound">
                      <LuExternalLink size={23} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none item">
              <img src={frame1} alt="" className="sm:w-[500px] w-[350px] " />
              <div className="sm:w-[500px] w-[350px]">
                <h1 className="justify-center flex font-bold">
                  Modern Bank - Landing Page
                </h1>
                <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
                  The landing page I created while following a React.js and
                  Tailwind CSS course on YouTube. During the development of this
                  website, I learned about React components and how to organize
                  documents systematically. Additionally, I gained insights into
                  using Tailwind CSS to implement designs and create a
                  responsive website for various devices
                </p>
                <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    React JS
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-5 cursor-pointer">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <FiGithub size={23} />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <LuExternalLink size={23} />
                  </motion.div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none">
              <img src={frame2} alt=" " className="sm:w-[500px] w-[350px]" />
              <div className="sm:w-[500px] w-[350px]">
                <h1 className="justify-center flex font-bold">
                  Personal Website
                </h1>
                <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
                  This is the website I created as my final project in the
                  Dicoding basic web programming course. For this website, I
                  utilized HTML and CSS. While developing the site, I learned
                  about HTML components and how to implement designs using
                  vanilla CSS.
                </p>
                <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    HTML
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    CSS
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-5 cursor-pointer">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <FiGithub size={23} />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <LuExternalLink size={23} />
                  </motion.div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none">
              <img src={frame3} alt="" className="sm:w-[500px] w-[350px]" />
              <div className="sm:w-[500px] w-[350px]">
                <h1 className="justify-center flex font-bold">
                  Meme Generator
                </h1>
                <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
                  The website I created while taking the React.js course on
                  scrimba.com. On this website, I studied React hooks components
                  such as useState, useRef, and useEffect. I also learned how to
                  fetch data from an API and implement it into the website's
                  display. Additionally, I gained knowledge about props in
                  React.js.
                </p>
                <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    React JS
                  </span>
                  <span className="bg-gray-200 px-3 py-1 rounded-full">
                    API
                  </span>
                </div>
                <div className="flex justify-center gap-4 mt-5 cursor-pointer">
                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <FiGithub size={23} />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      y: -10,
                    }}
                    className=" flex justify-center items-center  w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto "
                  >
                    <LuExternalLink size={23} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
