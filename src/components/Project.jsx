import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import logbook from "../assets/logbook.png";
import anforcom from "../assets/anforcom.png";
import adminpanel from "../assets/adminpanel.png";
import anforcomlandingpage from "../assets/anforcomlandingpage.png";
import sial from "../assets/sial.png";
import enclavium from "../assets/Enclavium.png";
import kariadi from "../assets/kariadi.png";

const projectsData = [
  {
    title: "Sistem Informasi Kerja Sama - Dirinovki Undip",
    image: logbook,
    description:
      "A web-based logbook application developed for Dirinovki Undip to record, monitor, and manage daily activity reports efficiently. The system helps streamline documentation, improve data organization, and support operational oversight.",
    tagline: "Work log + monitoring + oversight",
    techStack: [
      "Laravel API",
      "React Router v7",
      "Typescript",
      "Tailwind CSS",
      "MySQL",
    ],
    category: "Web App",
    year: "2025",
    featured: true,
    span: 12,
    githubUrl: "https://github.com/abyansetya/Logbook_BE",
    externalUrl: "https://github.com/abyansetya/Logbook_FE",
  },
  {
    title: "Predicare AI - General Hospital Dr. Kariadi, Semarang",
    image: kariadi,
    description:
      "A clinical prediction application that estimates patient treatment costs based on ICD diagnosis codes and recommends potential medications using XGBoost and Random Forest models. Designed to support hospital decision-making through data-driven, real-time predictions.",
    tagline: "Clinical prediction + machine learning",
    techStack: [
      "Next JS",
      ".NET",
      "Tailwind CSS",
      "ShadCn UI",
      "XGBoost",
      "Random Forest",
    ],
    category: "Web App",
    year: "2025",
    featured: false,
    span: 7,
    githubUrl: "#",
    externalUrl: "#",
  },
  {
    title: "Anforcom - Competition Registration",
    image: anforcom,
    description:
      "A web application built to handle competition registration with a smooth and user-friendly submission flow. Designed to simplify participant data entry and document uploads while ensuring a clean and responsive interface.",
    tagline: "Competition registration + submission",
    techStack: ["Next JS", "Tailwind CSS", "MongoDB"],
    category: "Web App",
    year: "2024",
    featured: false,
    span: 5,
    githubUrl: "#",
    externalUrl: "#",
  },
  {
    title: "Anforcom - API Dashboard",
    image: adminpanel,
    description:
      "An admin dashboard built to manage competition data and monitor submissions through a structured interface. Developed using AdminLTE to provide a familiar, efficient layout for data management and operational control.",
    tagline: "Admin dashboard + data management",
    techStack: ["AdminLTE", "React JS", "Node JS", "Tailwind CSS"],
    category: "CMS",
    year: "2024",
    featured: false,
    span: 5,
    githubUrl: "#",
    externalUrl: "#",
  },
  {
    title: "Anforcom - Landing Page",
    image: anforcomlandingpage,
    description:
      "A landing page created to present competition information clearly and attractively. Built with semantic HTML and vanilla CSS to deliver a clean, responsive layout focused on clarity and accessibility.",
    tagline: "Event landing page",
    techStack: ["React JS", "Tailwind CSS", "Framer Motion"],
    category: "Web App",
    year: "2024",
    featured: false,
    span: 7,
    githubUrl: "https://github.com/abyansetya/Anforcom2024-fe",
    externalUrl: "#",
  },
  {
    title: "SIAL - Sistem Informasi Akademik Lengkap",
    image: sial,
    description:
      "A web-based academic information system built to manage and display academic data through a dynamic interface. Focused on implementing component-based architecture, state management, and API-driven content rendering.",
    tagline: "Academic system + API-driven",
    techStack: ["Laravel", "Inertia JS", "Tailwind CSS", "MySQL"],
    category: "Web App",
    year: "2024",
    featured: false,
    span: 5,
    githubUrl:
      "https://github.com/abyansetya/Sistem-Informasi-Akademik-Lengkap",
    externalUrl: "#",
  },
  {
    title: "Enclavium - Landing Page",
    image: enclavium,
    description:
      "A modern landing page built for a crypto DAO to communicate its vision and community values through an engaging, responsive interface. Focused on smooth animations, clear structure, and an intuitive user experience.",
    tagline: "Crypto DAO + landing page",
    techStack: ["Next JS", "Tailwind CSS", "ShadCn UI"],
    category: "Web App",
    year: "2025",
    featured: false,
    span: 7,
    githubUrl: "#",
    externalUrl: "#",
  },
];

const spanClasses = {
  12: "md:col-span-2 lg:col-span-12",
  7: "md:col-span-1 lg:col-span-7",
  5: "md:col-span-1 lg:col-span-5",
};

const ProjectImage = ({ project }) => {
  const openUrl = project.externalUrl.startsWith("http")
    ? project.externalUrl
    : project.githubUrl.startsWith("http")
    ? project.githubUrl
    : null;

  const image = (
    <img
      src={project.image}
      alt={project.title}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full ${
        project.featured ? "object-contain" : "object-cover"
      }`}
    />
  );

  return (
    <div
      className={`relative block w-full overflow-hidden rounded-2xl border border-[#E5E7EB] bg-neutral-100 aspect-[16/10] ${
        project.featured
          ? "md:col-span-7 md:aspect-auto md:min-h-[20rem] lg:min-h-[24rem]"
          : ""
      }`}
    >
      {openUrl ? (
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title}`}
          className="block h-full w-full"
        >
          {image}
        </a>
      ) : (
        image
      )}

      <span className="absolute top-3 left-3 z-10 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-semibold text-neutral-800 shadow-sm">
        {project.category}
      </span>
      <span className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-medium text-neutral-500 shadow-sm">
        {project.year}
      </span>
    </div>
  );
};

const ProjectLinks = ({ project }) => {
  return (
    <div className="flex gap-3 mt-5">
      <motion.div
        whileHover={{ y: -4 }}
        className="flex justify-center items-center w-[44px] h-[44px] bg-neutral-100 border border-[#E5E7EB] rounded-full text-neutral-700"
      >
        {project.githubUrl.startsWith("http") ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
        ) : (
          <FiGithub size={20} />
        )}
      </motion.div>

      <motion.div
        whileHover={{ y: -4 }}
        className="flex justify-center items-center w-[44px] h-[44px] bg-neutral-100 border border-[#E5E7EB] rounded-full text-neutral-700"
      >
        {project.externalUrl.startsWith("/") ? (
          <Link to={project.externalUrl} aria-label="Open">
            <LuExternalLink size={20} />
          </Link>
        ) : project.externalUrl.startsWith("http") ? (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open"
          >
            <LuExternalLink size={20} />
          </a>
        ) : (
          <LuExternalLink size={20} />
        )}
      </motion.div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const featured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`${spanClasses[project.span]} min-w-0 glass-card rounded-3xl p-4 sm:p-5 group ${
        featured
          ? "grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-12"
          : "flex flex-col"
      }`}
    >
      <ProjectImage project={project} />

      <div
        className={`flex min-w-0 flex-col flex-1 px-2 pt-5 pb-2 ${
          featured ? "md:col-span-5 md:justify-center md:px-4 md:py-8" : ""
        }`}
      >
        <h3
          className={`font-bold text-neutral-900 ${
            featured ? "text-xl sm:text-2xl md:text-3xl" : "text-xl sm:text-2xl"
          }`}
        >
          {project.title}
        </h3>

        <p
          className={`text-sm text-neutral-600 mt-2 ${
            featured ? "" : "line-clamp-3"
          }`}
        >
          {project.description}
        </p>

        <div className="mt-4 inline-flex self-start items-center gap-2 px-3.5 py-2 rounded-lg bg-neutral-50 border border-[#E5E7EB]">
          <span className="text-xs font-bold text-neutral-900">
            {project.tagline}
          </span>
        </div>

        <div className="mt-auto pt-5 flex flex-wrap gap-1.5 border-t border-[#E5E7EB]/70 mt-5">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] bg-neutral-50 px-2 py-0.5 rounded text-neutral-600 border border-[#E5E7EB]"
            >
              {tech}
            </span>
          ))}
        </div>

        <ProjectLinks project={project} />
      </div>
    </motion.div>
  );
};

const tabs = ["All", "Web App", "CMS", "Mobile"];

const PER_PAGE = 5;

export default function Project() {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);

  const filteredProjects =
    activeTab === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeTab);

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PER_PAGE,
    currentPage * PER_PAGE,
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  return (
    <div className="w-full py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <h2 className="font-poppins font-bold text-[32px] tracking-tight">
          Projects
        </h2>

        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              aria-pressed={activeTab === tab}
              onClick={() => handleTabChange(tab)}
              className={`min-h-11 px-4 py-2 rounded-full text-xs font-medium transition-colors ${
                activeTab === tab
                  ? "bg-[#18181B] text-white"
                  : "bg-white hover:bg-neutral-100 border border-[#E5E7EB] text-neutral-700"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`${activeTab}-${currentPage}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12"
          >
            {paginatedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      ) : (
        <p className="text-neutral-500 text-center py-16">
          No projects in this category yet.
        </p>
      )}

      {filteredProjects.length > 0 && totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          <button
            aria-label="Previous page"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center h-11 w-11 rounded-full border border-[#E5E7EB] text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-white"
          >
            <FiChevronLeft size={18} />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              aria-pressed={currentPage === num}
              onClick={() => setPage(num)}
              className={`h-11 w-11 rounded-full text-xs font-medium transition-colors ${
                currentPage === num
                  ? "bg-[#18181B] text-white"
                  : "border border-[#E5E7EB] text-neutral-700 hover:bg-neutral-100"
              }`}
            >
              {num}
            </button>
          ))}

          <button
            aria-label="Next page"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center h-11 w-11 rounded-full border border-[#E5E7EB] text-neutral-700 transition-colors hover:bg-neutral-100 disabled:opacity-40 disabled:hover:bg-white"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
