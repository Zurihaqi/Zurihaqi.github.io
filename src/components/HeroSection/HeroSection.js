import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { scrollToSection } from "../../utility/scrollToSection";

const HeroSection = React.forwardRef(({ projectsRef, contactRef }, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="container h-screen flex items-center justify-center"
    >
      <div className="flex-shrink grid-cols-3 gap-2">
        <AnimationOnScroll animateIn="animate__fadeInUp">
          <div className="text-start">
            <p className="text-xl">Hello! &#128075;</p>
            <p className="text-5xl">
              I'm <span className="font-bold text-blue-500">Zul</span> Fahri
              Baihaqi
            </p>
          </div>
        </AnimationOnScroll>
        <br />
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={600}>
          <div>
            <p className="text-start text-xl">
              Recent graduate in informatics, specializing in backend
              development and possessing fundamental expertise in full-stack
              development.
            </p>
          </div>
        </AnimationOnScroll>

        {/* Buttons */}
        <AnimationOnScroll animateIn="animate__fadeInUp" delay={1200}>
          <div className="mt-6">
            <button
              className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mx-1 sm:mx-2 transition-color duration-300"
              onClick={() => scrollToSection(projectsRef, 30)}
            >
              <FontAwesomeIcon icon={faArrowDown} /> My Works
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded mx-1 sm:mx-2 transition-color duration-300"
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
