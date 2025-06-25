import React from 'react';
import aboutImg from '../assets/about.png';
import { ABOUT_TEXT } from '../constants';
import { motion } from 'framer-motion';

const fadeVariant = (direction = "left", delay = 0) => {
  const base = { opacity: 0 };
  if (direction === "left") base.x = -100;
  if (direction === "right") base.x = 100;
  if (direction === "up") base.y = -100;
  if (direction === "down") base.y = 100;

  return {
    hidden: base,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };
};

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-16 px-6">
      <motion.h2
        variants={fadeVariant("up")}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-wrap items-center">
        {/* Image Section */}
        <motion.div
          variants={fadeVariant("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 p-6"
        >
          <div className="flex items-center justify-center">
            <img
              src={aboutImg}
              alt="About"
              className="rounded-2xl shadow-lg max-w-[90%] lg:max-w-md"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          variants={fadeVariant("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full lg:w-1/2 p-6"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-lg leading-relaxed text-neutral-300 max-w-xl">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
