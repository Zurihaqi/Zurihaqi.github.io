import React from "react";
import Card from "./Card/Card";
import Modal from "./Modal/Modal";
import "./ProjectSection.css";

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
            regex: "/projects_images/(secondHand|secondHand_api|SentimenAnalisisIGUbhara|SPKPeminatanInformatika|YelpCamp|AplikasiPemancingan)/"
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
    const cardData = {
      project1: {
        images: [],
        img_alt: [],
        title: "SecondHand",
        description: `This platform is a place to buy and sell goods online, especially used goods. This platform opens and provides various types of categories of needs. 
          Users who register themselves on this application can act as sellers and buyers by using the same 1 (one) account.
          account. This platform will bring together sellers and buyers to be able to negotiate goods and make transactions directly outside the platform.
          platform.`,
        category: "WebApp",
        tech: ["React", "Bootstrap", "Axios", "jQuery"],
        repo: "https://github.com/Zurihaqi/second-hand",
      },
      project2: {
        images: [],
        img_alt: [],
        title: "SecondHand API",
        description: "The API used for SecondHand platform.",
        category: "WebApp",
        tech: ["ExpressJs", "PostgreSQL", "Sequelize", "Passport.js", "JWT"],
        repo: "https://github.com/Zurihaqi/capstone-binar-secondhand",
      },
      project3: {
        images: [],
        img_alt: [],
        title: "Sentiment Analysis @ubhara_jaya",
        description:
          "Sentiment analysis is the process of analyzing digital text to determine if the emotional tone of the message is positive, negative, or neutral. In this case, the Data was taken from comments on the Instagram account posts of Universitas Bhayangkara Jakarta using web scraping. The comment period ranges from January 2021 to December 2022.",
        category: "NLP",
        tech: ["Numpy", "Pandas", "NLTK", "Sastrawi"],
        repo: "https://colab.research.google.com/drive/16fiKZw49eoZLaWgruQ_B9_0rEc5QB7PQ?usp=sharing",
      },
      project4: {
        images: [],
        img_alt: [],
        title: "SPK Peminatan Informatika",
        description:
          "The purpose of this web-based system is to assess the suitability of the concentration selection of students of the informatics study program at Bhayangkara University with their interests and talents. This system is designed based on web with Express framework and Node.js for the backend, while the frontend uses Vue.js.",
        category: "WebApp",
        tech: [
          "VueJs",
          "Bootstrap",
          "Axios",
          "ExpressJs",
          "Sequelize",
          "PostgreSQL",
        ],
        repo: "https://github.com/Zurihaqi/spk-informatika-frontend-skripsi",
        live: "https://spk-informatika.vercel.app/",
      },
      project5: {
        images: [],
        img_alt: [],
        title: "YelpCamp",
        description:
          "YelpCamp is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. This project was part of Colt Steele's web dev course on udemy. This project was created using Node.js, Express, MongoDB, and Bootstrap. Passport.js was used to handle authentication.",
        category: "WebApp",
        tech: ["ExpressJs", "EJS", "MongoDB", "Bootstrap", "Passport.js"],
        repo: "https://github.com/Zurihaqi/yelpcamp",
        live: "https://yelpcamp-iota.vercel.app/",
      },
      project6: {
        images: [],
        img_alt: [],
        title: "Aplikasi Pemancingan",
        description:
          "This was a project made for a friend. This website was created to make it easier for anglers to find complete information about fishing in Bekasi Regency, and can also make it easier for fishing parties to disseminate information in fishing or become a fishing promotion media.",
        category: "WebApp",
        tech: ["Laravel", "Eloquent", "MySQL", "Bootstrap"],
        repo: "https://github.com/Zurihaqi/pemancingan",
        live: "https://pemancingan.vercel.app/",
      },
    };

    data.allFile.nodes.forEach((node) => {
      const imagePath = node.relativePath;
      if (imagePath.startsWith("projects_images/secondHand/")) {
        cardData.project1.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project1.img_alt.push(
          `SecondHand_Image ${cardData.project1.images.length}`
        );
      } else if (imagePath.startsWith("projects_images/secondHand_api/")) {
        cardData.project2.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project2.img_alt.push(
          `SecondHandAPI_Image ${cardData.project2.images.length}`
        );
      } else if (
        imagePath.startsWith("projects_images/SentimenAnalisisIGUbhara/")
      ) {
        cardData.project3.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project3.img_alt.push(
          `SentimentAnalysis_Image ${cardData.project3.images.length}`
        );
      } else if (
        imagePath.startsWith("projects_images/SPKPeminatanInformatika/")
      ) {
        cardData.project4.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project4.img_alt.push(
          `SPKPeminatanInformatika_Image ${cardData.project4.images.length}`
        );
      } else if (imagePath.startsWith("projects_images/YelpCamp/")) {
        cardData.project5.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project5.img_alt.push(
          `YelpCamp_Image ${cardData.project5.images.length}`
        );
      } else if (imagePath.startsWith("projects_images/AplikasiPemancingan/")) {
        cardData.project6.images.push(node.childImageSharp.gatsbyImageData);
        cardData.project6.img_alt.push(
          `AplikasiPemancingan_Image ${cardData.project6.images.length}`
        );
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
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              delay={index * 50}
              key={index}
            >
              <div key={index}>
                <Card
                  image={project.images[0]}
                  img_alt={project.img_alt[0]}
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
        <div className="relative bg-gray-700 text-white rounded-lg">
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
              // cssMode={true}
              modules={[Pagination]}
            >
              {selectedProject.images?.map((image, index) => (
                <SwiperSlide key={index} className="text-center">
                  <GatsbyImage
                    image={getImage(image)}
                    alt={selectedProject.img_alt[index]}
                    className="rounded-lg"
                    style={{ maxWidth: 300 }}
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
                    className="mx-1 bg-slate-500 rounded-xl p-2 sm:text-sm text-xs w-fit"
                  >
                    {item}
                  </p>
                );
              })}
            </div>
            <div className="grid grid-flow-col justify-items-center">
              <a href={selectedProject.repo} target="_blank" rel="noreferrer">
                <button
                  className=" disabled:bg-gray-500 bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
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
                disabled:bg-gray-500 bg-blue-600 hover:bg-blue-700 text-gray-200 font-semibold hover:text-gray-300 py-2 px-4 rounded transition-color duration-300"
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
