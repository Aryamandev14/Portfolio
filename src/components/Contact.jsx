import { useRef } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { CONTACT } from "../constants";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  },
});

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e64gxif",   // 🔁 Replace with your Service ID
        "template_ic3ww34",  // 🔁 Replace with your Template ID
        form.current,
        "6qrAddb6heReDxiJq" // 🔁 Replace with your Public Key
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message.");
          console.error(error.text);
        }
      );
  };

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
        📍 {CONTACT.address}
      </motion.p>

      <form ref={form} onSubmit={sendEmail} className="space-y-6 text-left">
        <motion.div variants={fadeUp(0.3)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Enter name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        <motion.div variants={fadeUp(0.4)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Mail
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            placeholder="Enter email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </motion.div>

        <motion.div variants={fadeUp(0.5)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="5"
            placeholder="Write your Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </motion.div>

        <motion.div variants={fadeUp(0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <button
            type="submit"
            className="px-6 py-3 bg-orange-300 hover:bg-orange-400 text-black font-medium rounded-xl shadow transition duration-300"
          >
            Send Message
          </button>
        </motion.div>
      </form>

      <div className="flex flex-col items-center gap-5 mt-12">
        <motion.a
          variants={fadeUp(0.7)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          href={`tel:${CONTACT.phoneNo}`}
          className="text-xl font-medium text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline transition duration-300"
        >
          📞 {CONTACT.phoneNo}
        </motion.a>

        <motion.a
          variants={fadeUp(0.8)}
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
