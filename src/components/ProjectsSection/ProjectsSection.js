import React from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import sample_img from "../../images/sample_img.png";
import "./ProjectSection.css";

import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

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

  React.useEffect(() => {
    const cardData = {
      project1: {
        image: sample_img,
        img_alt: "project_1_img",
        title: "Project 1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "WebApp",
        tech: ["Tech1", "Tech2", "Tech3"],
      },
      project2: {
        image: sample_img,
        img_alt: "project_2_img",
        title: "Project 2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "WebApp",
        tech: ["Tech1", "Tech2", "Tech3"],
      },
      project3: {
        image: sample_img,
        img_alt: "project_3_img",
        title: "Project 3",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "WebApp",
        tech: ["Tech1", "Tech2", "Tech3"],
      },
      project4: {
        image: sample_img,
        img_alt: "project_4_img",
        title: "Project 4",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "NLP",
        tech: ["Tech1", "Tech2", "Tech3"],
      },
      project5: {
        image: sample_img,
        img_alt: "project_5_img",
        title: "Project 5",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        category: "Uncategorized",
        tech: ["Tech1", "Tech2", "Tech3"],
      },
    };

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
  }, [selectedCategory, filteredCardData.length]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleLoadMoreClick = () => {
    setVisibleSlides((prevVisibleSlides) => prevVisibleSlides + 3);
  };

  const handleLoadLessClick = () => {
    setVisibleSlides(3);
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
        <div className="flex-grow border border-gray-400"></div>
      </div>
      <div className="my-4 flex justify-center">
        <div className="container-fluid bg-slate-600 bg-opacity-50 p-2 rounded-full">
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "All"
                ? "bg-blue-600 text-gray-200 hover:border-transparent"
                : "hover:bg-blue-600 hover:text-gray-200 bg-transparent"
            }`}
            onClick={() => handleCategoryClick("All")}
            aria-label="btn-category-all"
          >
            All
          </button>
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "WebApp"
                ? "bg-blue-600 text-gray-200 hover:border-transparent"
                : "hover:bg-blue-600 hover:text-gray-200 bg-transparent"
            }`}
            onClick={() => handleCategoryClick("WebApp")}
            aria-label="btn-category-webapps"
          >
            Web Apps
          </button>
          <button
            className={`font-semibold py-2 px-4 rounded-full mx-1 sm:mx-2 transition-color duration-300 ${
              selectedCategory === "NLP"
                ? "bg-blue-600 text-gray-200 hover:border-transparent"
                : "hover:bg-blue-600 hover:text-gray-200 bg-transparent"
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
            <AnimationOnScroll animateIn="animate__fadeIn" delay={index * 50}>
              <div key={index}>
                <Card
                  image={project.image}
                  img_alt={project.img_alt}
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
          {visibleSlides < filteredCardData.length ? (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
              onClick={handleLoadMoreClick}
            >
              Load More
            </button>
          ) : visibleSlides !== filteredCardData.length ? (
            <button
              className="bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
              onClick={handleLoadLessClick}
            >
              Load Less
            </button>
          ) : null}
        </div>
      </div>

      {/* Modal */}
      <Modal showModal={showModal} closeModal={closeModal}>
        <div className="relative bg-slate-600 text-white rounded-lg shadow">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
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
              modules={[Pagination]}
            >
              <SwiperSlide>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.img_alt}
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.img_alt}
                  className="rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.img_alt}
                  className="rounded-lg"
                />
              </SwiperSlide>
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
            <p>
              Tech Used:{" "}
              {selectedProject.tech?.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="mx-1 bg-slate-500 rounded-xl p-2 sm:text-sm text-xs"
                  >
                    {item}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
});

export default ProjectsSection;
