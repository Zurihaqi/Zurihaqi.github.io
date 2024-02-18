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
import {
  faX,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProjectsSection = React.forwardRef((_props, ref) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [visibleSlides, setVisibleSlides] = React.useState(3);
  const [filteredCardData, setFilteredCardData] = React.useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState({});

  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          absolutePath: {
            regex: "/projects_images/(secondHand|secondHand_api|KedaiMieAyam|SentimenAnalisisIGUbhara|SPKPeminatanInformatika|YelpCamp|AplikasiPemancingan|PersonalWebsite)/"
          }
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              layout: CONSTRAINED
              width: 500
              quality: 90
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
        default:
          return;
      }

      // Ensure the same image doesnt get imported more than once
      if (!projectData.images.includes(node.childImageSharp.gatsbyImageData)) {
        projectData.images.push(node.childImageSharp.gatsbyImageData);
        projectData.img_alt.push(
          `${projectData.name}_Image_${projectData.images.length}`
        );
      }

      // Separate thumbnail images
      if (imagePath.includes("thumbnail")) {
        projectData.thumbnail = node.childImageSharp.gatsbyImageData;
      }
    });

    if (selectedCategory === "All") {
      setFilteredCardData(Object.values(cardData));
    } else {
      setFilteredCardData(
        Object.values(cardData).filter(
          (project) => project.category === selectedCategory
        )
      );
    }
    setVisibleSlides(Math.min(3, filteredCardData.length));
  }, [selectedCategory, filteredCardData.length, data]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLoadMoreClick = () => {
    setVisibleSlides((prevVisibleSlides) => prevVisibleSlides + 3);
  };

  const handleLoadLessClick = () => {
    setVisibleSlides((prevVisibleSlides) =>
      prevVisibleSlides > 3 ? prevVisibleSlides - 3 : setVisibleSlides(3)
    );
  };

  const handleViewDetailsClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section ref={ref} id="projects" className="container my-24">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 sm:text-4xl text-3xl">
          Recent projects
        </span>
        <div className="flex-grow border border-neutral-300 dark:border-gray-400"></div>
      </div>
      <div className="my-4 flex justify-center">
        <div className="container-fluid bg-neutral-300 dark:bg-slate-600 bg-opacity-50 p-2 rounded-full">
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "All"
                ? "dark:bg-blue-600 bg-blue-400 text-gray-200 hover:border-transparent"
                : "dark:hover:bg-blue-600 hover:bg-blue-400 hover:text-gray-200 bg-transparent"
            }`}
            onClick={() => handleCategoryClick("All")}
            aria-label="btn-category-all"
          >
            All
          </button>
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "WebApp"
                ? "dark:bg-blue-600 bg-blue-400 text-gray-200 hover:border-transparent"
                : "dark:hover:bg-blue-600 hover:bg-blue-400 hover:text-gray-200 bg-transparent"
            }`}
            onClick={() => handleCategoryClick("WebApp")}
            aria-label="btn-category-webapps"
          >
            Web Apps
          </button>
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "NLP"
                ? "dark:bg-blue-600 bg-blue-400 text-gray-200 hover:border-transparent"
                : "dark:hover:bg-blue-600 hover:bg-blue-400 hover:text-gray-200 bg-transparent"
            }`}
            onClick={() => handleCategoryClick("NLP")}
            aria-label="btn-nlp"
          >
            NLP
          </button>
        </div>
      </div>
      <div className="container my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredCardData.slice(0, visibleSlides).map((project, index) => (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={index * 50}
              key={index}
            >
              <div key={index}>
                <Card
                  image={project.thumbnail}
                  img_alt={project.title + "_thumbnail"}
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  onClick={() => handleViewDetailsClick(project)}
                />
              </div>
            </AnimationOnScroll>
          ))}
        </div>
        <div className="text-center mt-4">
          {/* The logic here is a bit of work, lol */}
          {visibleSlides <= 3 && filteredCardData.length > visibleSlides ? (
            <button
              className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-400 hover:bg-blue-500 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
              onClick={handleLoadMoreClick}
            >
              Load More
            </button>
          ) : visibleSlides > 3 && visibleSlides < filteredCardData.length ? (
            <div className="space-x-2">
              <button
                className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 hover:bg-blue-600 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
                onClick={handleLoadMoreClick}
              >
                Load More
              </button>
              <button
                className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-500 hover:bg-blue-600 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
                onClick={handleLoadLessClick}
              >
                Load Less
              </button>
            </div>
          ) : visibleSlides > filteredCardData.length ? (
            <button
              className="dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-400 hover:bg-blue-500 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
              onClick={handleLoadLessClick}
            >
              Load Less
            </button>
          ) : null}
        </div>
      </div>

      {/* Modal */}
      <Modal showModal={showModal} closeModal={closeModal}>
        <div className="relative dark:bg-gray-700 dark:text-white bg-neutral-300 text-black rounded-lg">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-white border-black rounded-t">
            <h3 className="text-xl font-semibold">{selectedProject.title}</h3>
            <span
              style={{
                height: "25px",
              }}
              className={`w-fit text-center mx-2 p-1 rounded-full border ${
                selectedProject.category === "WebApp"
                  ? "border-blue-400 text-blue-500"
                  : ""
              } ${
                selectedProject.category === "NLP"
                  ? "border-purple-400 text-purple-400"
                  : ""
              } text-xs font-semibold`}
            >
              {selectedProject.category}
            </span>
            <button
              type="button"
              className="bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
              onClick={closeModal}
              aria-label="show-modal-btn"
            >
              <FontAwesomeIcon icon={faX} />
            </button>
          </div>

          {/* SlideShow */}
          <div className="p-2 sm:w-3/4 mx-auto rounded-lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={true}
              loop={true}
              // cssMode={true}
              modules={[Pagination]}
            >
              {selectedProject.images?.map((image, index) => (
                <SwiperSlide key={index} className="text-center">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={selectedProject.img_alt[index]}
                    className="rounded-lg"
                    style={{ maxWidth: 400 }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desc */}
          <div className="p-4 md:p-5 space-y-4">
            <p
              className="text-base leading-relaxed overflow-y-scroll modal-scrollbar"
              style={{ maxHeight: 100 }}
            >
              {selectedProject.description}
            </p>
            <p>Tech Used:</p>
            <div className="flex flex-row overflow-y-auto no-scrollbar">
              {selectedProject.tech?.map((item, index) => {
                return (
                  <p
                    key={index}
                    className="mx-1 dark:bg-slate-500 bg-blue-400 text-white rounded-xl p-2 sm:text-sm text-xs w-fit"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="grid grid-flow-col justify-items-center">
              <a href={selectedProject.repo} target="_blank" rel="noreferrer">
                <button
                  className=" disabled:bg-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-400 hover:bg-blue-500 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
                  disabled={selectedProject.repo ? false : true}
                >
                  {selectedProject.category === "NLP"
                    ? "Google Colab"
                    : "Git Repo"}{" "}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </a>
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className={`${
                  selectedProject.category === "NLP" ? "hidden" : "block"
                }`}
              >
                <button
                  className="
                disabled:bg-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700 bg-blue-400 hover:bg-blue-500 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
                  disabled={selectedProject.live ? false : true}
                >
                  Live Site <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </button>
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
});

export default ProjectsSection;
