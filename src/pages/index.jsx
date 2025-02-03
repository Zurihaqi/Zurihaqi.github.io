import React, { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import ThemeToggler from "../components/ThemeToggler/ThemeToggler";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Seo from "./SEO";

export default function IndexPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    // Scroll to top when reload
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div id="root">
      <Helmet>
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:opsz@5..1200&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Seo
        title="Zul Fahri Baihaqi - Portfolio"
        description="A portfolio website showcasing my projects, skills, and experience."
        keywords="Zul Fahri Baihaqi, portfolio, web developer, projects, skills"
      />

      {/* Main Content */}
      <div className="flex overflow-x-clip">
        <Navigation
          heroRef={heroRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <div
          id="content"
          className="flex-shrink-0 sm:w-3/4 w-full mx-0 sm:mx-auto sm:pr-0 pr-8 font-quicksand text-black dark:text-gray-300 z-10"
        >
          <ThemeToggler />
          <HeroSection
            ref={heroRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
            aboutRef={aboutRef}
          />
          <AboutSection ref={aboutRef} />
          <ProjectsSection ref={projectsRef} />
          <ContactSection ref={contactRef} />
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
}
