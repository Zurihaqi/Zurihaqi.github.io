"use client";

import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="my-30 mb-[15rem] bg-white text-black scroll-mt-24"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Let&apos;s work together.
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            I’m open to freelance, contract, and collaboration opportunities.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* Email */}
          <div className="flex items-center gap-3 text-lg md:text-xl text-gray-800">
            <MdOutlineEmail className="text-2xl text-black" />
            <a
              href="mailto:zurihaqi@gmail.com"
              className="underline hover:text-black transition"
            >
              zurihaqi@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-lg md:text-xl text-gray-800">
            <FaPhoneAlt className="text-xl text-black" />
            <a
              href="https://wa.me/6287823815619"
              className="underline hover:text-black transition"
            >
              +62 878-2381-5619
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
