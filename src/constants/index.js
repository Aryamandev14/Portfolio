import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications with expertise in C++, MERN Stack, and DevOps.Currently, I am pursuing my B.Tech in Computer Science and Engineering at NIT Delhi. With a strong foundation in backend development and problem-solving, I specialize in building scalable, high-performance applications. I have honed my skills in frontend technologies like React and TailwindCSS, as well as backend technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, TailwindCSS, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
 
  {
    year: "May - July 2025",
    role: "Full Stack Developer Intern",
    company: "Tech Mahindra",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["React.js", "Prisma", "Node.js", "PostgreSQL"],
  },
  {
    year: "June-July 2024",
    role: "Full Stack Developer Intern",
    company: "EduTechNest Pvt. Ltd.",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS", "MongoDB", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Guessomatic",
    image: project1,
    description:
      "Developed a replica of the classic Hangman game using C language. Implemented core game mechanics including level selection, guessing logic and win/loss conditions.",
    technologies: ["C"],
  },
  {
    title: "Pay-Wallet Application",
    image: project2,
    description:
      "An application that simulated payment processing and wallet functionalities, enabling users to perform transactions seamlessly.",
    technologies: ["Express.js", "Node.js", "React", "MongoDB","TailwindCSS"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["JavaScript", "TailwindCSS", "React"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["TS", "TailwindCSS", "Hono", "React", "PostgreSQL","Prisma"],
  },
];

export const CONTACT = {
  address: "NIT DELHI ",
  phoneNo: "+91-7986861825 ",
  email: "221210025@nitdelhi.ac.in",
};