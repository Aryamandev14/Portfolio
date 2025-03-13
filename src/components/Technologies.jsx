import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"
import { DiPostgresql } from "react-icons/di"
import { SiTailwindcss } from "react-icons/si"
import { SiDocker } from "react-icons/si"
import { SiPrisma } from "react-icons/si"
import { motion } from "framer-motion";
const iconVariants = (speed) => ({
    initial: { y: -10 }, // Starts slightly above the original position
    animate: {
      y: [10, -10], // Moves up and down between these values
      transition: {
        duration: speed, // Controls how fast the animation happens
        ease: "linear", // Moves smoothly without sudden stops
        repeat: Infinity, // Keeps repeating forever
        repeatType: "reverse", // Moves back and forth (instead of restarting)
      },
    },
  });
  
const Technologies = () => {
  return (
    <div className='border-b border-neutral-900 pb-24'>
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}

        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div 
            variants={iconVariants(2.5)} // The animation speed is 2 seconds
            initial="initial" 
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < SiMongodb className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(5)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < SiTailwindcss className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(3.5)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < DiPostgresql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div 
             variants={iconVariants(4)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>
            
            <motion.div 
             variants={iconVariants(6)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < SiDocker className="text-7xl text-blue-500"/>
            </motion.div>
            
            <motion.div 
             variants={iconVariants(4.5)} // The animation speed is 2 seconds
             initial="initial" 
             animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                < SiPrisma className="text-7xl"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies