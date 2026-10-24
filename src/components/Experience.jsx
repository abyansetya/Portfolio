import React from "react";
import sertif1 from "../assets/sertif1.png";
import sertif2 from "../assets/sertif2.png";
import sertif3 from "../assets/sertif3.png";
import styles from "../style";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const images = [sertif1, sertif2, sertif3];

const skillsData = [
  {
    category: "Frontend",
    items: "React, Next.js, TypeScript, Tailwind CSS, React Router v7, Inertia JS",
  },
  {
    category: "Backend",
    items: "Node.js, Express JS, Laravel",
  },
  {
    category: "Database & Cache",
    items: "PostgreSQL, MySQL, MongoDB, Redis, BullMQ",
  },
  {
    category: "Tools & DevOps",
    items: "Docker, GitHub Actions, Vite",
  },
  {
    category: "Also Comfortable With",
    items: "Python, Git, Chrome Extension Development",
  },
];

export default function Experience() {
  const [idx, setIdx] = React.useState(0);
  const [triggerAnime, setTriggerAnime] = React.useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  function next() {
    if (idx === images.length - 1) {
      setIdx(0);
      return;
    }
    setIdx(idx + 1);
  }

  function prev() {
    if (idx === 0) {
      setIdx(images.length - 1);
      return;
    }
    setIdx(idx - 1);
  }

  return (
    <motion.div
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
      className=" pt-12 font-poppins flex flex-col justify-center"
    >
      <div className="title flex justify-end">
        <h1 className="font-poppins font-bold text-[32px]">Experiences</h1>
      </div>
      <div className="w-full  flex gap-2 mt-2 md:flex-row flex-col">
        <div className="box1 md:w-[60%] w-[100%] rounded-md border-2 border-black flex flex-col">
          <div className="title flex justify-center flex-col items-center mt-4">
            <h1 className="font-poppins font-bold text-[20px]">
              Tools I Reach For
            </h1>
            <div className="w-[160px] border border-black h-[1px] mt-2" />
          </div>
          <div className="skills flex-1 flex items-center px-6 py-6">
            <div className="innerskills w-full border-t border-black pt-4">
              {skillsData.map((group, index) => (
                <div key={index} className="flex flex-col mb-5">
                  <h2 className="font-bold text-[15px] md:text-[17px] tracking-wide">
                    {group.category}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {group.items.split(", ").map((item, i) => (
                      <span
                        key={i}
                        className="border border-black rounded-full px-3 py-1 text-sm font-semibold bg-gray-50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box2 overflow-hidden md:w-[40%] w-[100%] rounded-md border-2 border-black justify-center flex flex-col pb-5">
          <div className="title flex justify-center flex-col items-center mt-4">
            <h1 className="font-poppins font-bold text-[20px]">Certificates</h1>
            <div className="w-[160px] border border-black h-[1px] mt-2" />
          </div>
          <div className="carousel flex h-full flex-col items-center justify-center">
            <div className="innercarousel aspect-video relative pt-5 flex flex-col items-center">
              <div className="img">
                <img
                  src={images[idx]}
                  alt="Certificate"
                  className="sm:h-[300px] sm:w-[400px] w-[300px] h-[230px] flex items-center object-contain"
                />
              </div>
              <div className="flex justify-center gap-5 mt-6 w-full">
                <button
                  onClick={prev}
                  className={`${styles.button} flex items-center justify-center`}
                >
                  <div className="mr-1">◀</div>
                </button>
                <button
                  onClick={next}
                  className={`${styles.button} flex items-center justify-center`}
                >
                  <div className="ml-1">▶</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
