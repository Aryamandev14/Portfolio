import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const Contact = () => {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 text-center">
      <motion.h2
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
      >
        Get In Touch
      </motion.h2>

      <motion.p
  variants={fadeUp(0.2)}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
>
  {`📍 ${CONTACT.address}`}
</motion.p>

      <div className="flex flex-col items-center gap-5">
        <motion.a
          variants={fadeUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href={`tel:${CONTACT.phoneNo}`}
          className="text-xl font-medium text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition duration-300"
        >
          📞 {CONTACT.phoneNo}
        </motion.a>

        <motion.a
          variants={fadeUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href={`mailto:${CONTACT.email}`}
          className="text-xl font-medium text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition duration-300"
        >
          📧 {CONTACT.email}
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
