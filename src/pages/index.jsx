import React, { useRef } from "react";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

export default function IndexPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <div className="flex">
        <Navigation
          heroRef={heroRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
        />
        <div id="content" className="flex-1 p-4 overflow-hidden">
          <HeroSection ref={heroRef} />
          <AboutSection ref={aboutRef} />
          <ProjectsSection ref={projectsRef} />
        </div>
      </div>
    </>
  );
}
