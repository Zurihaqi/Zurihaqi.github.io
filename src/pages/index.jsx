import React, { useRef } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:opsz@5..1200&family=Quicksand&display=swap"
          rel="stylesheet"
        />
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
      <ScrollToTop />
    </div>
  );
}
