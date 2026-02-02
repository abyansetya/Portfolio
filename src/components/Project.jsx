import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import logbook from "../assets/k.png";
import anforcom from "../assets/anforcom.png";
import adminpanel from "../assets/adminpanel.png";
import anforcomlandingpage from "../assets/anforcomlandingpage.png";
import sial from "../assets/sial.png";

const projectsData = [
  {
    title: "Sistem Informasi Kerja Sama - Dirinovki Undip",
    image: logbook,
    description:
      "A web-based logbook application developed for Dirinovki Undip to record, monitor, and manage daily activity reports efficiently. The system helps streamline documentation, improve data organization, and support operational oversight.",
    techStack: [
      "Laravel API",
      "React Router v7",
      "Typescript",
      "Tailwind CSS",
      "MySQL",
    ],
    githubUrl: "https://github.com/abyansetya/Logbook_BE",
    externalUrl: "https://github.com/abyansetya/Logbook_FE",
  },
  {
    title: "Anforcom - Competition Registration",
    image: anforcom,
    description:
      "A web application built to handle competition registration with a smooth and user-friendly submission flow. Designed to simplify participant data entry and document uploads while ensuring a clean and responsive interface.",
    techStack: ["Next JS", "Tailwind CSS", "MongoDB"],
    githubUrl: "#",
    externalUrl: "#",
  },
  {
    title: "Anforcom - API Dashboard",
    image: adminpanel,
    description:
      "An admin dashboard built to manage competition data and monitor submissions through a structured interface. Developed using AdminLTE to provide a familiar, efficient layout for data management and operational control.",
    techStack: ["AdminLTE", "React JS", "Node JS", "Tailwind CSS"],
    githubUrl: "#",
    externalUrl: "#",
  },

  {
    title: "Anforcom - Landing Page",
    image: anforcomlandingpage,
    description:
      "A landing page created to present competition information clearly and attractively. Built with semantic HTML and vanilla CSS to deliver a clean, responsive layout focused on clarity and accessibility.",
    techStack: ["React JS", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/abyansetya/Anforcom2024-fe",
    externalUrl: "#",
  },
  {
    title: "SIAL - Sistem Informasi Akademik Lengkap",
    image: sial,
    description:
      "A web-based academic information system built to manage and display academic data through a dynamic interface. Focused on implementing component-based architecture, state management, and API-driven content rendering.",
    techStack: ["Laravel", "Inertia JS", "Tailwind CSS", "MySQL"],
    githubUrl:
      "https://github.com/abyansetya/Sistem-Informasi-Akademik-Lengkap",
    externalUrl: "#",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="pointer-events-none item">
      <img
        src={project.image}
        alt={project.title}
        className="sm:w-[500px] w-[350px] "
      />
      <div className="sm:w-[500px] w-[350px]">
        <h1 className="justify-center flex font-bold text-center">
          {project.title}
        </h1>
        <p className="mx-5 text-justify mt-2 sm:text-[16px] text-[15px]">
          {project.description}
        </p>
        <div className="mx-5 mt-3 flex flex-wrap gap-2 text-sm font-semibold text-gray-700">
          {project.techStack.map((tech, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-center gap-4 mt-5 cursor-pointer">
          <motion.div
            whileHover={{ y: -10 }}
            className="flex justify-center items-center w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto"
          >
            {project.githubUrl.startsWith("http") ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub size={23} />
              </a>
            ) : (
              <FiGithub size={23} />
            )}
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="flex justify-center items-center w-[50px] h-[50px] bg-gray-300 border rounded-full pointer-events-auto"
          >
            {project.externalUrl.startsWith("/") ? (
              <Link to={project.externalUrl}>
                <LuExternalLink size={23} />
              </Link>
            ) : project.externalUrl.startsWith("http") ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuExternalLink size={23} />
              </a>
            ) : (
              <LuExternalLink size={23} />
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

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
          innerCarousel.current.scrollWidth - carousel.current.offsetWidth + 50,
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
  }, [isInView, mainControls]);

  return (
    <div ref={ref}>
      <motion.div
        ref={carousel}
        className="overflow-hidden"
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
          whileTap={{ cursor: "grabbing" }}
          className="carousel font-poppins px-6 flex cursor-grab snap-x"
          drag="x"
          dragConstraints={{
            right: 0,
            left: -width,
          }}
        >
          <div className="innercarousel flex snap-x">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
