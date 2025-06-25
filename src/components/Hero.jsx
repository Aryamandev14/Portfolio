import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/aryaman1profile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 px-4 md:px-8 lg:px-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              Aryaman Dev
            </motion.h1>

            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 0.95 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent mt-4"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-xl mt-6"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="w-64 sm:w-72 md:w-96 lg:w-[30rem] h-auto rounded-2xl object-cover"
            src={profilepic}
            alt="Profile picture"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
