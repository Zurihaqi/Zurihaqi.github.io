import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
import Card from "./Card/Card";
import sample_img from "../../images/sample_img.png";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

import "swiper/css";

const ProjectsSection = React.forwardRef((_props, ref) => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [visibleSlides, setVisibleSlides] = React.useState(3);
  const [filteredCardData, setFilteredCardData] = React.useState([]);

  React.useEffect(() => {
    const cardData = {
      project1: {
        image: sample_img,
        img_alt: "project_1_img",
        title: "Project 1",
        description: "Lorem ipsum dolor sit amet.",
        category: "WebApp",
      },
      project2: {
        image: sample_img,
        img_alt: "project_2_img",
        title: "Project 2",
        description: "Lorem ipsum dolor sit amet.",
        category: "WebApp",
      },
      project3: {
        image: sample_img,
        img_alt: "project_3_img",
        title: "Project 3",
        description: "Lorem ipsum dolor sit amet.",
        category: "WebApp",
      },
      project4: {
        image: sample_img,
        img_alt: "project_4_img",
        title: "Project 4",
        description: "Lorem ipsum dolor sit amet.",
        category: "NLP",
      },
      project5: {
        image: sample_img,
        img_alt: "project_5_img",
        title: "Project 5",
        description: "Lorem ipsum dolor sit amet.",
        category: "Ngawur",
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
    </section>
  );
});

export default ProjectsSection;
