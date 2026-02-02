import React from "react";
import sertif1 from "../assets/sertif1.png";
import sertif2 from "../assets/sertif2.png";
import sertif3 from "../assets/sertif3.png";
import styles from "../style";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const styles1 = {
  header: "md:text-[24px] sm:text-[20px] text-[18px] font-bold",
  paragraph: "sm:text-[13px] text-[11px] text-[#7d7d7d] ",
};

const images = [sertif1, sertif2, sertif3];

const skillsData = [
  { name: "Typescript", level: "Intermediate" },
  { name: "Next JS", level: "Intermediate" },
  { name: "Javascript", level: "Intermediate" },
  { name: "mySQL", level: "Intermediate" },
  { name: "React Router v7", level: "Intermediate" },
  { name: "Express JS", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "React JS", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Intermediate" },
  { name: "Laravel", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "Inertia JS", level: "Intermediate" },
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
        <div className="box1 md:w-[60%] w-[100%] rounded-md border-2 border-black">
          <div className="title flex justify-center  flex-col items-center mt-2">
            <h1 className="font-bold">Other Skills</h1>
            <div className="w-[100px] border border-black h-[1px] mb-2" />
          </div>
          <div className="skills mt-4 px-4 flex items-center h-[80%]">
            <div className="innerskills flex w-full justify-between  flex-wrap p-2">
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className="sm:basis-4/12 flex flex-col items-center p-5"
                >
                  <h1 className={`${styles1.header}`}>{skill.name}</h1>
                  <p className={`${styles1.paragraph}`}>{skill.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="box2 overflow-hidden md:w-[40%] w-[100%] rounded-md border-2 border-black   justify-center flex flex-col pb-5">
          <div className="title flex justify-center flex-col items-center mt-2   ">
            <h1 className="font-bold">Certificates</h1>
            <div className="w-[120px] border border-black h-[1px] mb-2" />
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
