import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';

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

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-16'>
      <motion.h2
        variants={fadeVariant("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className='my-20 text-center text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text'
      >
        Experience
      </motion.h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className='mb-12 flex flex-wrap lg:justify-center'>
            <motion.div
              variants={fadeVariant("left", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='w-full lg:w-1/4'
            >
              <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>

            <motion.div
              variants={fadeVariant("right", 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className='w-full max-w-xl lg:w-3/4'
            >
              <h6 className='mb-2 font-semibold text-xl text-white'>
                {experience.role} – 
                <span className='text-2xl text-purple-100'>
                  {experience.company.includes("NIT Delhi") ? " 📍" : " 🏢"} {experience.company}
                </span>
              </h6>

              {Array.isArray(experience.description) ? (
                <ul className='mb-4 list-disc pl-5 text-neutral-400 space-y-1'>
                  {experience.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p className='mb-4 text-neutral-400'>{experience.description}</p>
              )}

              <div className="flex flex-wrap gap-2 mt-2">
                {experience.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className='rounded bg-purple-950 px-3 py-1 text-sm font-medium text-purple-200 shadow-sm'
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

export default Experience;
