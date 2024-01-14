import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css/animate.min.css";

// Logos
import bootstrap from "../../images/logos/bootstrap.png";
import react from "../../images/logos/react.png";
import express from "../../images/logos/express.png";
import laravel from "../../images/logos/laravel.png";
import nodejs from "../../images/logos/nodejs.png";
import vue from "../../images/logos/vue.png";
import tailwind from "../../images/logos/tailwind.png";

const AboutSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="about" className="container my-24">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 sm:text-4xl text-3xl">What i do</span>
        <div className="flex-grow border border-gray-400"></div>
      </div>
      <p className="px-10 mt-4 sm:text-xl text-lg text-justify">
        I have a strong interest in web development, focusing but not limited to
        JavaScript and its frameworks for building web applications. Currently,
        I am exploring additional technologies to expand my skills and stay
        informed about industry advancements.
      </p>
      <br />
      <p className="px-10 sm:text-xl text-lg">
        Below are the main technologies I currently use:
      </p>
      <div
        className="container px-10 mt-6 grid grid-cols-1 mx-auto"
        style={{ maxWidth: "500px" }}
      >
        <div className="mb-8 bg-gray-600 bg-opacity-50 rounded-lg p-4">
          <p className="font-semibold text-center mb-4 text-lg">
            Front-end Development
          </p>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-1 flex-col justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <img src={react} alt="react_logo" />
              </AnimationOnScroll>
              <p className="text-center sm:text-md text-sm">React</p>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={100}>
                <img src={vue} alt="vue_logo" />
              </AnimationOnScroll>
              <p className="text-center sm:text-md text-sm">Vue</p>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={200}>
                <img src={tailwind} alt="tailwind_logo" />
              </AnimationOnScroll>
              <p className="text-center sm:text-md text-sm">Tailwind</p>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={300}>
                <img
                  src={bootstrap}
                  alt="bootstrap_logo"
                  className="sm:w-full w-3/4 mx-auto"
                />
              </AnimationOnScroll>
              <p className="text-center sm:text-md text-sm">Bootstrap</p>
            </div>
          </div>
        </div>
        <div className="mb-8 bg-gray-600 bg-opacity-50 rounded-lg p-4">
          <p className="font-semibold text-center mb-4 text-lg">
            Back-end Development
          </p>
          <div className="grid grid-flow-col gap-4">
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight">
                <img
                  src={express}
                  alt="express_logo"
                  className="bg-white rounded-lg"
                />
              </AnimationOnScroll>
              <p className="text-center">Express</p>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={100}>
                <img src={laravel} alt="laravel_logo" />
              </AnimationOnScroll>
              <p className="text-center">Laravel</p>
            </div>
            <div className="flex flex-col flex-1 justify-between">
              <AnimationOnScroll animateIn="animate__fadeInRight" delay={200}>
                <img src={nodejs} alt="nodejs_logo" />
              </AnimationOnScroll>
              <p className="text-center">Node</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
