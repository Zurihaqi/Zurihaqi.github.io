import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaBootstrap, FaLaravel } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiSpringboot } from "react-icons/si";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faBriefcase,
  faGraduationCap,
  faLaptopCode,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import Marquee from "react-fast-marquee";

const skills = [
  { name: "React", icon: FaReact, color: "text-blue-500" },
  { name: "React Native", icon: FaReact, color: "text-blue-400" },
  { name: "Vue", icon: FaVuejs, color: "text-green-500" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-500" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600" },
  { name: "Laravel", icon: FaLaravel, color: "text-red-500" },
];

const timelineEvents = [
  {
    year: "2019",
    title: "Attended College - Universitas Bhayangkara Jakarta Raya",
    description:
      "Began my bachelor's studies, majoring in informatics and actively participated in organizations such as the Informatics Student Association (HIMA).",
    icon: faSchool,
  },
  {
    year: "2022",
    title: "Bootcamp - Binar Academy",
    description:
      'I completed a 6-month Back-End JavaScript apprenticeship at Binar Academy, where I collaborated on an E-commerce platform, "Second Hand", following Scrum methodology. My role involved API development with Node.js and Express.js, database management with PostgreSQL, integration testing using Jest, and CI/CD implementation with Docker on GitLab. I also handled server hosting on Heroku and integrated APIs with the frontend using Axios.',
    icon: faBookOpen,
  },
  {
    year: "2023",
    title: "Graduated College - Universitas Bhayangkara Jakarta Raya",
    description: "I graduated in 2023 with the GPA of 3.64.",
    icon: faGraduationCap,
  },
  {
    year: "2023 - 2024",
    title: "Freelance Web Developer",
    description:
      "As a freelancer, I've worked on a variety of web and mobile projects, helping clients build user-friendly, efficient, and scalable applications. From designing intuitive interfaces to developing robust backend systems. Whether it's API development or front-end optimization.",
    icon: faLaptopCode,
  },
  {
    year: "2024",
    title: "Fullstack Dev Trainee - Enigma Camp",
    description:
      'I led the web frontend team in developing "Kerjain Aja," a freelance job finder app built with React Native, React, and Java Spring Boot. I was responsible for making the admin dashboard and deploying the web frontend to Digital Ocean. I gained valuable experience that honed my Spring Boot, React, and React Native skills.',
    icon: faBriefcase,
  },
];

const TechStack = ({ tech }) => {
  const Icon = tech.icon;

  return (
    <motion.div
      className="flex flex-col items-center sm:mx-10 mx-5 dark:bg-[#161616]/50 dark:shadow-violet-900 dark:shadow-sm shadow-lg rounded-xl p-2 cursor-pointer"
      whileHover={{ scale: 1.2 }}
    >
      <Icon className={`sm:text-7xl text-5xl ${tech.color}`} />
      <span className="mt-1 text-sm text-foreground">{tech.name}</span>
    </motion.div>
  );
};

const TimelineEvent = ({ event, index }) => (
  <div
    className={`flex ${index % 2 === 0 ? "sm:flex-row-reverse" : "flex-row"}`}
  >
    <div className="sm:w-5/12"></div>
    <div className="w-2/12 flex justify-center">
      <div
        className={`w-1 dark:bg-violet-700 bg-blue-400 relative ${
          index === timelineEvents.length - 1 ? "h-fit" : "h-full"
        }`}
      >
        <div className="absolute w-8 h-8 rounded-full dark:bg-violet-700 bg-blue-400 top-0 -mx-3.5 flex">
          <FontAwesomeIcon
            icon={event.icon}
            className="mx-auto my-auto text-white"
          />
        </div>
      </div>
    </div>
    <motion.div
      className="sm:w-5/12 w-10/12 p-4 rounded-lg shadow-md dark:bg-[#161616]/50 dark:shadow-violet-900 mb-8"
      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }} // Slide right for even, left for odd
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
    >
      <h4 className="text-lg font-bold mb-2 text-blue-600 dark:text-violet-500">
        {event.year}
      </h4>
      <h5 className="text-md font-semibold mb-1 text-gray-800 dark:text-white">
        {event.title}
      </h5>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {event.description}
      </p>
    </motion.div>
  </div>
);

const AboutSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="about" className="my-24 bg-background">
      <div className="container mx-auto">
        <div className="relative flex items-center mb-8">
          <span className="flex-shrink sm:text-4xl text-3xl pr-2">
            About Me
          </span>
          <div className="mt-1 flex-grow border border-neutral-300 dark:border-zinc-700"></div>
        </div>
        <div className="grid gap-8 items-start">
          <div className="text-justify">
            <p className="text-lg mb-6 text-muted-foreground">
              I'm a passionate web developer with a keen interest in creating
              intuitive and dynamic user experiences. With a strong foundation
              in modern web technologies, I specialize in building responsive
              and performant web applications.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              My journey in web development started 6 years ago, and since then,
              I've had the opportunity to work on a variety of projects, from
              small static websites to large-scale applications. I'm always
              excited to learn new technologies and improve my skills.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="my-12">
            <h3 className="text-2xl font-semibold mb-8 text-center text-foreground">
              My Journey
            </h3>
            <div className="relative wrap overflow-hidden">
              <div className="absolute h-full border border-transparent left-1/2"></div>
              {timelineEvents.map((event, index) => (
                <TimelineEvent key={index} event={event} index={index} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl text-center font-semibold mb-6 text-foreground">
              My Tech Stacks
            </h3>

            <div className="w-fit">
              <Marquee autoFill gradientWidth={50} pauseOnHover>
                <div className="grid grid-cols-8 py-4">
                  {skills.map((tech) => (
                    <TechStack key={tech.name} tech={tech} />
                  ))}
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
