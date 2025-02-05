import * as React from "react";
import avatar from "../../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { scrollToSection } from "../../utility/scrollToSection";
import "delicious-hamburgers/dist/hamburgers.min.css";
import "./Navigation.scss";

export default function Navigation({
  heroRef,
  aboutRef,
  projectsRef,
  contactRef,
}) {
  const [sidebarVisible, setSidebarVisibility] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null);
  const navRef = React.useRef(null);
  const hamburgerRef = React.useRef(null);

  const toggleSidebar = () => {
    setSidebarVisibility((prev) => !prev);
  };

  const handleScrollToSection = (ref, offset) => {
    scrollToSection(ref, offset);
    setSidebarVisibility(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = 250;
      const scrollPosition = window.scrollY;

      if (
        scrollPosition >= heroRef.current.offsetTop - offset &&
        scrollPosition < aboutRef.current.offsetTop - offset
      ) {
        setActiveSection("hero");
      } else if (
        scrollPosition >= aboutRef.current.offsetTop - offset &&
        scrollPosition < projectsRef.current.offsetTop - offset
      ) {
        setActiveSection("about");
      } else if (
        scrollPosition >= projectsRef.current.offsetTop - offset &&
        scrollPosition < contactRef.current.offsetTop - offset
      ) {
        setActiveSection("projects");
      } else if (scrollPosition >= contactRef.current.offsetTop - offset) {
        setActiveSection("contact");
      } else {
        setActiveSection(null);
      }
    };

    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebarVisibility(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [heroRef, aboutRef, projectsRef, contactRef]);

  React.useEffect(() => {
    document.body.style.overflowX = sidebarVisible ? "hidden" : "";
    return () => {
      document.body.style.overflowX = "";
    };
  }, [sidebarVisible]);

  return (
    <>
      {/* Sidebar */}
      <aside id="navigation" aria-label="Navigation">
        <nav
          ref={navRef}
          className={`dark:bg-zinc-800 bg-blue-400 h-screen flex flex-col overflow-y-auto sticky top-0 px-3 py-4 w-64 transition-all duration-300 text-white dark:text-gray-300 ${
            sidebarVisible ? "ml-0" : "-ml-64"
          } lg:ml-0 font-quicksand tracking-wide`}
          aria-hidden={!sidebarVisible}
        >
          <div className="text-center my-auto">
            <img
              src={avatar}
              alt="Zul Fahri Baihaqi - Web Developer"
              className="w-1/2 mx-auto rounded-full my-5 shadow-md"
            />
            <h1 className="text-2xl font-playfair font-bold tracking-tighter">
              Zul Fahri Baihaqi
            </h1>
            <p className="font-thin">Web Developer</p>

            {/* Navigation Links */}
            <nav className="my-6">
              <ul>
                {[
                  { name: "Home", ref: heroRef, section: "hero", offset: 0 },
                  {
                    name: "About",
                    ref: aboutRef,
                    section: "about",
                    offset: 30,
                  },
                  {
                    name: "Projects",
                    ref: projectsRef,
                    section: "projects",
                    offset: 30,
                  },
                  {
                    name: "Contact",
                    ref: contactRef,
                    section: "contact",
                    offset: 30,
                  },
                ].map((item) => (
                  <li key={item.name} className="my-2">
                    <button
                      onClick={() =>
                        handleScrollToSection(item.ref, item.offset)
                      }
                      className={`custom-nav-link ${
                        activeSection === item.section ? "active" : ""
                      }`}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Social Links */}
            <div>
              <p>
                <small>
                  <a
                    href="https://github.com/Zurihaqi"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                  >
                    <FontAwesomeIcon icon={faGithub} className="mx-2" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zurihaqi/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedin} className="mx-2" />
                  </a>
                </small>
              </p>
            </div>
          </div>
        </nav>
      </aside>

      {/* Hamburger Button */}
      <div className="lg:hidden z-20" ref={hamburgerRef}>
        <button
          className={`fixed top-0 hamburger hamburger--arrow ${
            sidebarVisible ? "active" : ""
          }`}
          type="button"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          aria-expanded={sidebarVisible}
        >
          <div className="inner">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </button>
      </div>
    </>
  );
}
