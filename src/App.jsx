import React from "react";

import Navbar from "./components/Navbar";
import styles from "./style";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <div className="w-full  ">
      <div className="z-[9999] fixed w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter} `}>
          <div className={`${styles.boxWidth} `}>
            <Navbar />
          </div>
        </div>
      </div>
      <div className="z-1">
        <section className="py-16 md:py-6  my-0 box-border min-h-fit" id="home">
          <div>
            <Hero />
          </div>
        </section>
        <section
          className={`${styles.paddingX} ${styles.flexStart} sm:py-6 h-[100%]`}
          id="About"
        >
          <div className="">
            <About />
          </div>
        </section>
        <section
          className={`${styles.paddingX} pt-16 md:pt-6 h-[100%]`}
          id="Projects"
        >
          <div>
            <Project />
          </div>
        </section>
        <section
          className={`${styles.paddingX} sm:pb-16 pb-6 h-[100%]`}
          id="Experiences"
        >
          <div>
            <Experience />
          </div>
        </section>
        <section
          className={`${styles.paddingX}  sm:pt-16 pt-6  h-full`}
          id="Contact"
        >
          <div>
            <Contact />
          </div>
        </section>
        <section className={` pt-16 sm:px-16 px-6 h-full`} id="Contact">
          <div>
            <Footer />
          </div>
        </section>
      </div>

      <ToastContainer />
    </div>
  );
}
