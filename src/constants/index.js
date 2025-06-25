import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Aryaman Dev Kumar from Chandigarh, currently pursuing a B.Tech in Computer Science and Engineering at the National Institute of Technology, Delhi, with a CGPA of 8.25. I have a strong foundation in computer science fundamentals, data structures and algorithms, and web/application development. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I’m a full-stack developer passionate about building scalable, high-performance web and mobile applications. With expertise in C++, C, JavaScript, TypeScript, and modern development stacks, I craft responsive frontends using React, React Native, and Tailwind CSS, while building robust backends with Node.js, Express, and WebSockets. I’m proficient with databases like MongoDB, PostgreSQL, and Redis, and deploy apps efficiently using Docker, AWS, and GCP. Currently pursuing B.Tech in CSE at NIT Delhi with 8.25 CGPA, I combine strong CS fundamentals with hands-on experience, specializing in real-time systems, optimization, and distributed architectures. My goal is to solve real-world problems with clean, efficient, and innovative code.`;

export const EXPERIENCES = [
  {
    year: "May - July 2025",
    role: "Data Engineering Intern",
    company: "Tech Mahindra",
    description: [
      "Built a real-time, serverless data pipeline on GCP to process over 2 million stock ticker data points daily.",
      "Architected a platform using Pub/Sub, Dataflow, and BigQuery, reducing data processing latency by 60%.",
      "Wrote Python-based Pub/Sub pipeline code for scalable ingestion and transformation of streaming data.",
      "Developed SQL queries on BigQuery for complex data transformations and mutual fund performance analysis."
    ],
    technologies: ["BigQuery", "Dataflow", "Pub/Sub", "GCP"],
  },
  {
    year: "June - July 2024",
    role: "Full Stack Developer Intern",
    company: "EduTechNest Pvt. Ltd.",
    description: [
      "Developed full-stack web applications using JavaScript, React.js, and Node.js.",
      "Managed MongoDB databases and implemented RESTful APIs for CRUD operations.",
      "Collaborated with product teams to design and prioritize new features and UI enhancements."
    ],
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