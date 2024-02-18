import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { scrollToSection } from "../../utility/scrollToSection";
import "./HeroSection.css";

const HeroSection = React.forwardRef(({ projectsRef, contactRef }, ref) => {
  const easterEggRef = React.useRef(false);

  const handleClick = () => {
    easterEggRef.current = !easterEggRef.current;
    const buttonElement = document.getElementById("wave");

    buttonElement.classList.remove("waving-hand", easterEggRef.current);
    buttonElement.classList.add("animate__tada", easterEggRef.current);

    setTimeout(() => {
      buttonElement.classList.remove("animate__tada");
    }, 1000);
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="container h-screen flex items-center justify-center"
    >
      <div className="flex-shrink grid-cols-3 gap-2">
        <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
          <div className="text-start">
            <p className="text-xl">
              Hello
              <button
                id="wave"
                className={`waving-hand animate__animated ${
                  easterEggRef.current && "animate__tada"
                }`}
                onClick={handleClick}
              >
                👋
              </button>
            </p>
            <p className="text-5xl font-playfair">
              I'm{" "}
              <span className="font-bold dark:text-blue-500 text-blue-400">
                Zul
              </span>{" "}
              Fahri Baihaqi
            </p>
          </div>
        </AnimationOnScroll>
        <br />
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={300}
          animateOnce
          offset={20}
        >
          <div>
            <p className="text-start text-xl">
              A recent informatics graduate specializing in full-stack web
              development, particularly in back-end development. Committed to
              continuous learning and eager to contribute skills to any teams.
            </p>
          </div>
        </AnimationOnScroll>

        {/* Buttons */}
        <AnimationOnScroll
          animateIn="animate__fadeInUp"
          delay={600}
          animateOnce
          offset={20}
        >
          <div className="mt-6">
            <button
              className="bg-transparent dark:hover:bg-blue-500 hover:bg-blue-400 font-semibold hover:text-white py-2 px-4 border dark:border-gray-500 border-blue-400 dark:text-gray-300 text-blue-400 hover:border-transparent rounded mx-1 sm:mx-2 transition-color duration-300"
              onClick={() => scrollToSection(projectsRef, 30)}
            >
              <FontAwesomeIcon icon={faArrowDown} /> My Works
            </button>
            <button
              className="bg-transparent dark:hover:bg-blue-500 hover:bg-blue-400 dark:text-gray-300 text-blue-400 border-blue-400 font-semibold hover:text-white py-2 px-4 border dark:border-gray-500 hover:border-transparent rounded mx-1 sm:mx-2 transition-color duration-300"
              onClick={() => scrollToSection(contactRef, 30)}
            >
              <FontAwesomeIcon icon={faEnvelope} /> Hire Me
            </button>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
});

export default HeroSection;
