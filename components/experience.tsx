"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-white text-black sm:py-20 py-0 overflow-hidden scroll-mt-24"
      id="experience"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-black/20" />

          {/* Animated progress line */}
          <motion.div
            className="absolute left-0 top-0 w-[2px] bg-black"
            style={{
              height: useTransform(scrollYProgress, [0, 0.9], ["60%", "105%"]),
              scaleY: useTransform(scrollYProgress, [0, 0.9], [0, 1]),
              originY: 0,
            }}
          />

          {/* Timeline items */}
          <Timeline />
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  const experiences = [
    {
      year: "Feb 2025 - Present",
      role: "Frontend Developer",
      company: "PT. Ravelware Technology Indonesia",
      description:
        "Contributed to multiple projects by designing mockups and interactive prototypes. Improved existing websites and web applications with new features and enhancements. Collaborated closely with clients to understand their goals and deliver high-quality, user-focused solutions.",
    },
    {
      year: "Jun 2024 - Oct 2024",
      role: "Fullstack Developer Trainee",
      company: "PT. Enigma Cipta Humanika",
      description:
        "Trained in Java, Spring Boot, React, and PostgreSQL. Built RESTful APIs, implemented JWT auth, and used Docker. Took on frontend, backend, and QA roles. Worked in Agile teams using Git, Jira, and Linux environments.",
    },
    {
      year: "2023 - 2024",
      role: "Freelance Developer",
      company: "Self-employed",
      description:
        "Worked with various clients to build websites and web applications tailored to their specific needs.",
    },
    {
      year: "Feb 2022 -  Jul 2022",
      role: "Backend JavaScript - Independent Study",
      company: "PT. Lentera Bangsa Benderang",
      description:
        "Developed an e-commerce app using Node.js, Express, and PostgreSQL. Handled API creation, testing with Jest, and CI/CD via Docker and GitLab. Collaborated in Agile teams and deployed projects on Heroku.",
    },
  ];

  return (
    <div className="space-y-20">
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          year={exp.year}
          role={exp.role}
          company={exp.company}
          description={exp.description}
          index={index}
        />
      ))}
    </div>
  );
}

function TimelineItem({
  year,
  role,
  company,
  description,
  index,
}: {
  year: string;
  role: string;
  company: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative pl-12 pb-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[-6.5px] top-0 w-[15px] h-[15px] bg-black rounded-full border-2 border-white"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      />

      <span className="text-sm font-medium text-black/60 mb-1 block">
        {year}
      </span>
      <h3 className="text-xl font-bold">{role}</h3>
      <h4 className="text-lg text-black/70 mb-2">{company}</h4>
      <p className="text-black/60 max-w-2xl">{description}</p>
    </motion.div>
  );
}
