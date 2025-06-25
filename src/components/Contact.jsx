import { CONTACT } from "../constants"
import { motion } from "framer-motion";


const Contact = () => {
    return (
      <div className="max-w-lg mx-auto px-6 py-12 text-center">
        <motion.h2 
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:0.5}}
        className="text-5xl font-semibold mb-6">Get In Touch</motion.h2>
  
        <motion.p 
         whileInView={{opacity:1,x:0}}
         initial={{opacity:0,x:-100}}
         transition={{duration:1.5}}
        className="text-lg text-gray-700 mb-4">{CONTACT.address}</motion.p>
  
        <div className="flex flex-col items-center gap-4">
          <motion.a 
           whileInView={{opacity:1,x:0}}
           initial={{opacity:0,x:100}}
           transition={{duration:0.5}}
            href={`tel:${CONTACT.phoneNo}`} 
            className="text-lg text-blue-600 hover:text-blue-800 border-b border-neutral-500 hover:border-neutral-700 transition duration-300"
          >
            {CONTACT.phoneNo}
          </motion.a>
  
          <motion.a 
          
            href={`mailto:${CONTACT.email}`} 
            className="text-lg text-blue-600 hover:text-blue-800 border-b border-neutral-500 hover:border-neutral-700 transition duration-300"
          >
            {CONTACT.email}
          </motion.a>
        </div>
      </div>
    );
  };
  

export default Contact