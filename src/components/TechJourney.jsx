import React from "react";
import { motion } from "framer-motion";
import atom from "../assets/atom.png"; // Placeholder for company logos
import undip from "../assets/undip.png";

const experiences = [
  {
    id: 1,
    role: "Community Developer",
    company: "Enclavium FNF",
    logo: atom, // Using placeholder for now
    date: "Jan 2026 - Present",
    description:
      "Contributing to a crypto DAO by building and improving responsive web interfaces using React and Tailwind CSS. Collaborating with cross-functional contributors to enhance usability and support community-driven development.",
  },
  {
    id: 2,
    role: "Fullstack Developer & IT Support Intern",
    company: "Direktorat Inovasi dan Kerja Sama, Universitas Diponegoro",
    logo: atom,
    date: "July 2025 - Dec 2025",
    description:
      "Contributed to the development and maintenance of a logbook application, ensuring reliability and usability for daily operations. Worked on API integrations and provided technical support to support smooth deployment and ongoing improvements.",
  },
  {
    id: 3,
    role: "Data Science & Web Development Intern",
    company: "Central General Hospital Dr. Kariadi",
    logo: atom,
    date: "Jan 2025 - April 2025",
    description:
      "Developed a machine learning model to predict patient treatment costs from medical and demographic data to support hospital decision-making. Built a web application that enables staff to input patient data and receive real-time, usable cost predictions aligned with hospital needs.",
  },
];

const TechJourney = () => {
  return (
    <div className="w-full text-black flex flex-col p-4 md:p-6 ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 tracking-tight"
      >
        My <span className="text-gray-500">Tech </span>Journey
      </motion.h2>

      <div className="flex flex-col gap-8 md:gap-10">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-2 md:gap-10 items-start"
          >
            {/* Date Column */}
            <div className="min-w-[150px] md:min-w-[200px] pt-1">
              <span className="text-sm md:text-md font-semibold text-gray-800">
                {exp.date}
              </span>
            </div>

            {/* Content Column */}
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mb-2">
                <h3 className="text-md md:text-lg font-bold">{exp.role}</h3>
                <div className="hidden md:block">
                  <span className="text-gray-800 text-sm">at</span>
                </div>
                <div className="flex items-center gap-2">
                   <span className="md:hidden text-gray-800 text-xs">at</span>
                  <span className="font-bold text-sm md:text-lg">{exp.company}</span>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Education Example (matching the reference structure) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-2 md:gap-10 items-start"
        >
          <div className="min-w-[150px] md:min-w-[200px] pt-1">
            <span className="text-sm md:text-md font-semibold text-gray-800">
              Aug 2022 - April 2026
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
              <h3 className="text-md md:text-lg font-bold">Computer Science Degree</h3>
              <div className="flex items-center gap-2">
                 <span className="text-gray-500 text-xs md:text-sm ">from</span>
                 <img src={undip} alt={undip} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                 <span className="font-bold text-sm md:text-lg">Diponegoro University</span>
              </div>
            </div>
            <p className="text-xs md:text-sm text-black font-bold leading-relaxed max-w-xl mt-1 md:mt-0">
              {" "}
              GPA : 3.80 / 4.00
            </p>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xl">
              Graduated with honors. Focused on Software Engineering and
              scalable systems.
            </p>
            <ul className="list-disc list-outside ml-4 mt-2 text-xs md:text-sm text-gray-600 space-y-1">
              <li>
                <span className="font-bold text-gray-800">
                  Laboratory Teaching Assistant:
                </span>{" "}
                Guided <span className="text-black font-bold">60+</span>{" "}
                students in{" "}
                <span className="text-black font-bold">
                  Database Systems, OOP, and Fundamentals of Systems;
                </span>{" "}
                evaluated practical assignments and provided detailed code
                feedback.
              </li>
              <li>
                <span className="font-bold text-gray-800">
                  Head of Website Division (ANFORCOM 2024):
                </span>{" "}
                Led a team to build the official event website, facilitating the
                registration and data processing for{" "}
                <span className="text-black font-bold">150+</span> participants.
              </li>
              <li>
                <span className="font-bold text-gray-800">
                  Mentor at POINTS:
                </span>{" "}
                Guided new informatics students in the Student Creativity
                Program (PKM), assisting in the formulation of accurate research
                proposals.
              </li>
              <li>
  <span className="font-bold text-gray-800">
    Presenter & First Author — International Conference on Informatics and Computational Sciences (ICICoS) 2025:
  </span>{" "}
  Presented research and published a paper in IEEE Xplore as the first author.
  {" "}
  <a
    href="https://ieeexplore.ieee.org/document/11330003/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 font-semibold underline"
  >
    View publication
  </a>
</li>

            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechJourney;
