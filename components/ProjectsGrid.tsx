"use client";

import Card3D from "./Card3D";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Gesture-ControlledBrightnessAdjustment-System-2024-",
    description:
      "Developed a Python-based gesture-controlled brightness adjustment system using OpenCV, leveraging real-time hand gesture recognition, contour detection, and system APIs for intuitive and touchless control.",
    img: "/assets/project-gesture.webp", // Make sure this file exists
    link: "https://github.com/princejha1729/Gesture-ControlledBrightnessAdjustment-System-2024-",
  },
  {
    title: "Prince_Portfolio",
    description: "Portfolio built in React",
    img: "/assets/portfolio.png", // Make sure this file exists
    link: "https://github.com/princejha1729/Prince_Portfolio",
  },
  {
    title: "Python-Service-Project-2023-",
    description:
      "Developed a Python script that automates email creation and delivery to authorized users. Script retrieves data from a database, formats it using HTML and CSS, and sends it to a designated admin email address.",
    img: "/assets/pythonservice.webp", // Make sure this file exists
    link: "https://github.com/princejha1729/Python-Service-Project-2023-",
  },
  {
    title: "SKYCAST-WEATHER-APP",
    description:
      "Built a weather application using HTML, CSS, JavaScript, and API integration.",
    img: "/assets/imagecard2.webp", // Make sure this file exists
    link: "https://github.com/princejha1729/SKYCAST-WEATHER-APP",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="w-full py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 px-2 xs:px-3 sm:px-6 md:px-8">
        {projectsData.map((project, idx) => (
          <Card3D key={idx} url={project.link}>
            <div className="flex flex-col h-full">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-2xl mb-4 w-full object-cover aspect-video max-h-[220px] sm:max-h-[180px] shadow-xl"
                loading="lazy"
                decoding="async"
                style={{ background: "#19191b" }}
              />
              <div>
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-yellow-300 mb-2 leading-snug truncate">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90">
                  {project.description}
                </p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-sm text-yellow-400 underline hover:text-yellow-300"
              >
                View on GitHub
              </a>
            </div>
          </Card3D>
        ))}
        <motion.a
          href="https://github.com/princejha1729?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="sm:col-span-2 xl:col-span-3 text-center text-yellow-400 underline font-medium text-base mt-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          See all projects on GitHub
        </motion.a>
      </div>
    </section>
  );
}
