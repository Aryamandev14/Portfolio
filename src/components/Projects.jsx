import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const fadeVariant = (direction = "up", delay = 0) => {
  const base = { opacity: 0 };
  if (direction === "up") base.y = 100;
  if (direction === "down") base.y = -100;
  if (direction === "left") base.x = -100;
  if (direction === "right") base.x = 100;

  return {
    hidden: base,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-16">
      <motion.h2
        variants={fadeVariant("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 pb-2 text-center text-5xl font-bold leading-relaxed bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
      >
        Projects
      </motion.h2>

      <div>
        {PROJECTS.map((project, index) => (
          <div key={project.title + index} className="mb-16 flex flex-wrap lg:justify-center items-start gap-8">
            {/* Project Image */}
            <motion.div
              variants={fadeVariant("left", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-xl shadow-md w-[200px] h-[150px] object-cover"
              />
            </motion.div>

            {/* Project Content */}
            <motion.div
              variants={fadeVariant("right", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={tech + idx}
                    className="rounded bg-purple-950 px-3 py-1 text-sm font-medium text-purple-200 hover:bg-purple-900 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
