import React, { useRef, useMemo, useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/HeroSection/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import ProgressBar from "@ramonak/react-progress-bar";

export default function IndexPage() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [initStage, setInitStage] = useState(0.01);
  const [init, setInit] = useState(false);

  useEffect(() => {
    // Hide scrollbar during initialization
    document.body.style.overflow = "hidden";

    const initializeParticles = async () => {
      setInitStage(1);
      await initParticlesEngine(async (engine) => {
        setInitStage(2);
        await loadSlim(engine);

        setInitStage(3);
      }).then(() => {
        setTimeout(() => {
          setInit(true);
          document.body.style.overflow = "";
        }, 1500);
      });
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    return null;
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#27272a",
        },
      },
      fpsLimit: 30,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            valueArea: 1500,
          },
        },
        links: {
          enable: true,
          opacity: 0.3,
          width: 1,
          distance: 150,
        },
        move: {
          enable: true,
          direction: "up",
          speed: 0.2,
        },
        size: {
          value: 1,
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <div id="root">
      <Helmet>
        <meta
          name="viewport"
          content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <title>Zul Fahri Baihaqi • Personal Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair:opsz@5..1200&family=Quicksand&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />

      {/* Loading Screen Overlay */}
      <div
        className={`h-screen w-screen flex fixed bg-zinc-800 transition-all duration-600 ${
          init
            ? "opacity-0 backdrop-blur-none pointer-events-none"
            : "opacity-100 bg-opacity-70 z-50 backdrop-blur-md pointer-events-auto"
        }`}
      >
        <p className="m-auto text-5xl text-gray-300">
          Please wait...
          <ProgressBar
            completed={initStage * 33.33}
            isLabelVisible={false}
            borderRadius="10px"
            bgColor="#3A7DEB"
            className="mt-6"
          />
        </p>
      </div>

      {/* Main Content */}
      <>
        <div className="flex overflow-x-clip bg-zinc-800">
          <Navigation
            heroRef={heroRef}
            aboutRef={aboutRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          <div
            id="content"
            className="flex-shrink-0 sm:w-3/4 w-full mx-0 sm:mx-auto sm:pr-0 pr-8 font-quicksand text-gray-300 z-10"
          >
            <HeroSection
              ref={heroRef}
              projectsRef={projectsRef}
              contactRef={contactRef}
            />
            <AboutSection ref={aboutRef} />
            <ProjectsSection ref={projectsRef} />
            <ContactSection ref={contactRef} />
            <Footer />
          </div>
        </div>
        <ScrollToTop />
      </>
    </div>
  );
}
