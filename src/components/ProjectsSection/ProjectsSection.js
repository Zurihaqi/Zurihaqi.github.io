import React from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import "./ProjectSection.css";
import JsonData from "./ProjectsData.json";

import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Keyboard, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion, AnimatePresence } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-cards";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectsSection = React.forwardRef((_props, ref) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [filteredCardData, setFilteredCardData] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState({});
  const [expanded, setExpanded] = React.useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const maxLength = 100;

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          absolutePath: {
            regex: "/projects_images/(secondHand|secondHand_api|KedaiMieAyam|SentimenAnalisisIGUbhara|SPKPeminatanInformatika|YelpCamp|AplikasiPemancingan|PersonalWebsite|KerjainAja)/"
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 1000
              quality: 100
            )
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    const cardData = JsonData;

    data.allFile.nodes.forEach((node) => {
      const imagePath = node.relativePath;
      let projectData;

      switch (true) {
        case imagePath.startsWith("projects_images/secondHand/"):
          projectData = cardData.project1;
          break;
        case imagePath.startsWith("projects_images/secondHand_api/"):
          projectData = cardData.project2;
          break;
        case imagePath.startsWith("projects_images/KedaiMieAyam/"):
          projectData = cardData.project3;
          break;
        case imagePath.startsWith("projects_images/SentimenAnalisisIGUbhara/"):
          projectData = cardData.project4;
          break;
        case imagePath.startsWith("projects_images/SPKPeminatanInformatika/"):
          projectData = cardData.project5;
          break;
        case imagePath.startsWith("projects_images/YelpCamp/"):
          projectData = cardData.project6;
          break;
        case imagePath.startsWith("projects_images/AplikasiPemancingan/"):
          projectData = cardData.project7;
          break;
        case imagePath.startsWith("projects_images/PersonalWebsite/"):
          projectData = cardData.project8;
          break;
        case imagePath.startsWith("projects_images/KerjainAja/"):
          projectData = cardData.project0;
          break;
        default:
          return;
      }

      if (!projectData.images.includes(node.childImageSharp.gatsbyImageData)) {
        projectData.images.push(node.childImageSharp.gatsbyImageData);
        projectData.img_alt.push(
          `${projectData.name}_Image_${projectData.images.length}`
        );
      }

      if (imagePath.includes("thumbnail")) {
        projectData.thumbnail = node.childImageSharp.gatsbyImageData;
      }
    });

    if (selectedCategory === "All") {
      setFilteredCardData(Object.values(cardData));
    } else {
      setFilteredCardData(
        Object.values(cardData).filter((project) =>
          project.category.includes(selectedCategory)
        )
      );
    }
  }, [selectedCategory, data]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleViewDetailsClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  React.useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);

  return (
    <section ref={ref} id="projects" className="container my-24">
      <div className="relative flex items-center">
        <span className="flex-shrink sm:text-4xl text-3xl pr-2">
          Recent projects
        </span>
        <div className="mt-1 flex-grow border border-neutral-300 dark:border-zinc-700"></div>
      </div>

      {/* Category buttons */}
      <div className="my-4 flex justify-center">
        <div className="sm:flex sm:flex-row grid grid-cols-2 container-fluid sm:text-lg text-sm dark:bg-[#161616]/50 dark:shadow-violet-900 sm:gap-0 gap-2 shadow-md p-2 sm:rounded-full rounded-xl">
          {["All", "Website", "Mobile App", "Machine Learning"].map(
            (category) => (
              <button
                key={category}
                className={`font-semibold py-2 px-4 sm:rounded-full rounded-xl mx-1 sm:mx-2 transition-colors duration-300 ${
                  selectedCategory === category
                    ? "dark:bg-violet-600 bg-blue-400 text-gray-200 hover:border-transparent"
                    : "dark:hover:bg-violet-600 hover:bg-blue-400 hover:text-gray-200 bg-transparent"
                }`}
                onClick={() => handleCategoryClick(category)}
                aria-label={`btn-category-${category
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                {category === "Website" ? "Websites" : category}
              </button>
            )
          )}
        </div>
      </div>

      {/* Project Cards */}
      <div className="container my-8">
        {filteredCardData.map((project, index) => {
          const isExpanded = expanded[index];
          const description =
            project.description.length > maxLength && !isExpanded
              ? project.description.slice(0, maxLength) + "..."
              : project.description;
          return (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={index * 50}
              key={index}
            >
              <div
                className={`flex flex-col md:flex-row dark:bg-[#161616]/50 dark:shadow-violet-900 shadow-md p-2 rounded-xl ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                } items-center gap-8 mb-16`}
              >
                <div className="w-full md:w-1/2">
                  <Card
                    image={project.thumbnail}
                    img_alt={project.title + "_thumbnail"}
                    onClick={() => handleViewDetailsClick(project)}
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-justify">{description}</p>
                  {project.description.length > maxLength && (
                    <button
                      onClick={() => toggleExpand(index)}
                      className="text-blue-500 hover:underline"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tech?.map((item, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        project.repo ? "" : "hidden"
                      } dark:bg-violet-600 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300`}
                    >
                      {project.category.includes("Machine Learning") ? (
                        <span>
                          Google Colab{" "}
                          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                        </span>
                      ) : (
                        <span>
                          <FontAwesomeIcon icon={faGithub} /> Git Repo
                        </span>
                      )}
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className={`${
                        project.live &&
                        !project.category.includes("Machine Learning")
                          ? ""
                          : "hidden"
                      } dark:bg-violet-600 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-colors duration-300`}
                    >
                      Live Site{" "}
                      <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                  </div>
                </div>
              </div>
            </AnimationOnScroll>
          );
        })}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <Modal showModal={showModal} closeModal={closeModal}>
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
            >
              <div className="rounded-lg">
                {/* SlideShow */}
                <div className="mx-auto rounded-lg">
                  <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    navigation
                    keyboard={{ enabled: true }}
                    mousewheel
                    modules={[EffectCards, Navigation, Keyboard, Mousewheel]}
                  >
                    {selectedProject.images?.map((image, index) => (
                      <SwiperSlide key={index} className="text-center">
                        <GatsbyImage
                          image={getImage(image)}
                          alt={selectedProject.img_alt[index]}
                          className="rounded-lg sm:w-[800px] w-[350px]"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
});

export default ProjectsSection;
