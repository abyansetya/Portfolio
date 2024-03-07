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
      triggerAnime={triggerAnime}
      className="container pt-12 font-poppins"
    >
      <div className="title flex justify-end">
        <h1 className="font-poppins font-bold text-[32px]">Experiences</h1>
      </div>
      <div className="innercontainer flex gap-2 mt-2 md:flex-row flex-col">
        <div className="box1 md:w-[60%] w-[100%] rounded-md border-2 border-black">
          <div className="title flex justify-center  flex-col items-center mt-2">
            <h1 className="font-bold">Other Skills</h1>
            <div className="w-[100px] border border-black h-[1px] mb-2" />
          </div>
          <div className="skills mt-4 px-4 flex items-center h-[80%]">
            <div className="innerskills flex w-full justify-between  flex-wrap p-2">
              <div className="sm:basis-4/12 flex flex-col items-center p-5">
                <h1 className={`${styles1.header}`}>HTML</h1>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>CSS</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Javascript</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12 b flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>mySQL</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12 b flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Figma</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12 b flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Express JS</p>
                <p className={`${styles1.paragraph}`}>Beginner</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>python</p>
                <p className={`${styles1.paragraph}`}>Beginner</p>
              </div>
              <div className="sm: flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>React JS</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Tailwind CSS</p>
                <p className={`${styles1.paragraph}`}>Intermediate</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Java</p>
                <p className={`${styles1.paragraph}`}>Basic</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>PostgreSQL</p>
                <p className={`${styles1.paragraph}`}>Beginner</p>
              </div>
              <div className="sm:basis-4/12   flex flex-col items-center p-5">
                <p className={`${styles1.header}`}>Node JS</p>
                <p className={`${styles1.paragraph}`}>Beginner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="box2 overflow-hidden md:w-[40%] w-[100%] rounded-md border-2 border-black   justify-center flex flex-col pb-5">
          <div className="title flex justify-center flex-col items-center mt-2   ">
            <h1 className="font-bold">Certificates</h1>
            <div className="w-[120px] border border-black h-[1px] mb-2" />
          </div>
          <div className="carousel flex h-full items-center justify-center">
            <div className="innercarousel aspect-video relative pt-5">
              <div className="img ">
                <img
                  src={images[idx]}
                  alt=""
                  className="sm:h-[300px] sm:w-[400px] w-[300px] h-[230px] flex items-center "
                />
                <button
                  onClick={prev}
                  className={`${styles.button} sm:left-[16px] left-0 absolute top-[50%] `}
                >
                  <div className="mr-1">◀</div>
                </button>
              </div>
              <button
                onClick={next}
                className={`${styles.button} sm:right-[16px] right-0 absolute top-[50%]`}
              >
                <div className="ml-1">▶</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
