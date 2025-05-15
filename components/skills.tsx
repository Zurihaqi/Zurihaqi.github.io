"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGo,
  SiNestjs,
  SiVuedotjs,
  SiBootstrap,
  SiPhp,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaCode, FaLayerGroup } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { CiStreamOn } from "react-icons/ci";
import { MdSensors } from "react-icons/md";

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const skillCategories = [
    {
      name: "Programming Languages",
      icon: FaCode,
      skills: [
        { name: "JavaScript", icon: SiJavascript, endorsements: 2 },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Java", icon: FaJava },
        { name: "PHP", icon: SiPhp, endorsements: 1 },
      ],
    },
    {
      name: "Frontend",
      icon: SiReact,
      skills: [
        { name: "React.js", icon: SiReact },
        { name: "Next.js", icon: SiNextdotjs },
        { name: "Vue.js", icon: SiVuedotjs },
        { name: "React Native", icon: TbBrandReactNative },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Bootstrap", icon: SiBootstrap },
        { name: "HTML5", icon: SiHtml5, endorsements: 1 },
        { name: "CSS", icon: SiCss3, endorsements: 1 },
      ],
    },
    {
      name: "Backend",
      icon: SiNodedotjs,
      skills: [
        { name: "Node.js", icon: SiNodedotjs, endorsements: 2 },
        { name: "Express.js", icon: SiExpress, endorsements: 2 },
        { name: "NestJS", icon: SiNestjs },
        { name: "Spring Boot", icon: SiSpringboot },
        { name: "REST APIs", icon: TbApi, endorsements: 2 },
        { name: "Websockets", icon: CiStreamOn },
        { name: "MQTTs", icon: MdSensors },
      ],
    },
    {
      name: "Databases",
      icon: SiPostgresql,
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, endorsements: 2 },
        { name: "MongoDB", icon: SiMongodb, endorsements: 2 },
        { name: "MySQL", icon: SiMysql, endorsements: 2 },
      ],
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-28 bg-white text-black overflow-hidden min-h-screen scroll-mt-24"
      id="skills"
    >
      {/* Background Title */}
      <motion.h2
        className="absolute inset-0 md:-top-30 text-[6.5rem] md:text-[15rem] font-extrabold text-black/15 uppercase tracking-widest text-center pointer-events-none"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [100, -100]),
        }}
      >
        Skills
      </motion.h2>

      <div className="relative z-10 container mx-auto px-4">
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-20">
          My Technical Skills
        </h3>

        {/* Skill Categories */}
        <div className="space-y-24 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.name} className="space-y-12">
              <motion.h4
                className="text-2xl font-bold flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <category.icon className="text-black" />
                {category.name}
              </motion.h4>

              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-12">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="relative flex items-center justify-center">
                      <skill.icon className="w-12 h-12 text-gray-700 group-hover:text-black transition-colors duration-300" />
                      <motion.div
                        className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-10 bg-gray-400"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="font-medium text-center text-sm mt-1">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
