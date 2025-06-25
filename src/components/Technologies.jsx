import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiTailwindcss, SiDocker, SiPrisma, SiTypescript, SiJavascript,  SiExpress, SiGithub ,SiRedis, SiPython} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiPostgresql, DiGithubBadge, DiVisualstudio, DiCode, DiJava, DiGit } from "react-icons/di";
import { motion } from "framer-motion";
const iconVariants = (speed) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: speed,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const techStack = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" title="React" />, speed: 2.5 },
  { icon: <SiMongodb className="text-7xl text-green-500" title="MongoDB" />, speed: 3 },
  { icon: <SiTailwindcss className="text-7xl text-cyan-400" title="TailwindCSS" />, speed: 5 },
  { icon: <DiPostgresql className="text-7xl text-sky-700" title="PostgreSQL" />, speed: 3.5 },
  { icon: <FaNodeJs className="text-7xl text-green-500" title="Node.js" />, speed: 4 },
  { icon: <SiExpress className="text-7xl text-white" title="Express.js" />, speed: 3.8 },
  { icon: <SiDocker className="text-7xl text-blue-500" title="Docker" />, speed: 6 },
  { icon: <SiPrisma className="text-7xl text-white" title="Prisma" />, speed: 4.5 },
  { icon: <SiRedis className="text-7xl text-red-600" title="Redis" />, speed: 3.8 },
{ icon: <SiPython className="text-7xl text-yellow-400" title="Python" />, speed: 4.2 },

//   { icon: <FaAws className="text-7xl text-orange-500" title="AWS" />
// , speed: 3 },
  { icon: <SiGithub className="text-7xl text-white" title="GitHub" />, speed: 4 },
  { icon: <DiGit className="text-7xl text-orange-500" title="Git" />, speed: 4.2 },
  { icon: <SiTypescript className="text-7xl text-blue-500" title="TypeScript" />, speed: 4.3 },
  { icon: <SiJavascript className="text-7xl text-yellow-400" title="JavaScript" />, speed: 4 },
  { icon: <DiCode className="text-7xl text-gray-300" title="C++" />, speed: 5 },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
      >
        Technologies
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(tech.speed)}
            initial="initial"
            animate="animate"
            className="min-w-[120px] flex justify-center items-center rounded-2xl border-4 border-neutral-800 p-6 hover:scale-105 transition-transform"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
