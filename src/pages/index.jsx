import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";

export default function IndexPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div id="root">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zul Fahri Baihaqi • Personal Website</title>
      </Helmet>
      <div className="flex">
        <Navigation
          heroRef={heroRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div
          id="content"
          className="flex-1 sm:px-8 overflow-hidden mr-12 sm:mr-0 font-playfair"
        >
          <HeroSection
            ref={heroRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <AboutSection ref={aboutRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
        </div>
      </div>
    </div>
  );
}
