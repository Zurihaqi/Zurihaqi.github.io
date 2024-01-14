import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Card from "./Card/Card";
import sample_img from "../../images/sample_img.png";

import "swiper/css";

const ProjectsSection = React.forwardRef((_props, ref) => {
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

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredCardData =
    selectedCategory === "All"
      ? Object.values(cardData)
      : Object.values(cardData).filter(
          (project) => project.category === selectedCategory
        );

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
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
        <Swiper
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            520: {
              slidesPerView: 2,
            },
            900: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay]}
        >
          {filteredCardData.map((project, index) => (
            <SwiperSlide key={index}>
              <Card
                image={project.image}
                img_alt={project.img_alt}
                title={project.title}
                description={project.description}
                category={project.category}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

export default ProjectsSection;
