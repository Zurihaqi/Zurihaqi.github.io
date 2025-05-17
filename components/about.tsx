"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const scrollIndicatorVariants = {
  initial: { y: 0, opacity: 0.8 },
  animate: {
    y: [0, 10, 0],
    opacity: [0.8, 1, 0.8],
    transition: {
      duration: 1.5,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "loop" as const,
      ease: "easeInOut",
    },
  },
};

export default function About() {
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="bg-white sm:my-20 mb-12 sm:mb-0 scroll-mt-24 relative"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-medium mb-8"
          >
            Hey! I'm Zul, a fullstack developer based in Indonesia.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:text-2xl text-lg text-black/70 mb-8"
          >
            I build sleek, user-friendly web and mobile experiences that turn
            complex ideas into clear, functional, and engaging designs. My focus
            is on simplicity, performance, and impact—bringing ideas to life
            through clean code and thoughtful design.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Web Development",
              "Mobile App Development",
              "API Development",
              "UI/UX Design",
            ].map((text, i) => (
              <motion.span
                key={text}
                custom={i}
                variants={badgeVariants}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 border border-black/10 rounded-full bg-white shadow-sm cursor-default"
              >
                {text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="flex flex-col items-center justify-center mt-8 mb-4 cursor-pointer"
          onClick={scrollToNextSection}
          initial="initial"
          animate="animate"
          variants={scrollIndicatorVariants}
        >
          <span className="text-sm text-black/50 mb-2">Scroll Down</span>
          <div className="bg-white rounded-full p-2 shadow-md">
            <ChevronDown className="h-5 w-5 text-black/70" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
