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
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Seo
        title="Zul Fahri Baihaqi • Portfolio"
        description="A portfolio website showcasing my projects, skills, and experience."
        keywords="Zul Fahri Baihaqi, zul fahri baihaqi, portfolio, web developer, projects, skills, zurihaqi, web, developer, zul, fahri, baihaqi"
        canonicalUrl="https://zurihaqi.github.io/"
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
          className="relative flex-shrink-0 sm:w-3/4 w-fit px-8 mx-auto font-workSans text-black dark:text-gray-300"
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
