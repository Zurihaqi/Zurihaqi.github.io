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
    setSidebarVisibility(!sidebarVisible);
  };

  const handleScrollToSection = (ref, offset) => {
    // Use the scrollToSection utility
    scrollToSection(ref, offset);

    // Set sidebarVisible to false after scrolling
    setSidebarVisibility(false);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = 250; // Top side offset
      const scrollPosition = window.scrollY;
      setSidebarVisibility(false);

      // Activate menu underline according to the section user scrolls to
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

    // Close sidebar on click outside
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setSidebarVisibility(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [heroRef, aboutRef, projectsRef, contactRef]);

  return (
    <>
      {/* Sidebar */}
      <aside id="navigation" aria-label="navigation">
        <nav
          ref={navRef}
          className={`dark:bg-zinc-800 bg-blue-400 h-screen flex flex-col overflow-y-auto sticky top-0 px-3 py-4 w-64 transition-all duration-300 text-white dark:text-gray-300 ${
            sidebarVisible ? "ml-0" : "-ml-64"
          } lg:ml-0 font-quicksand tracking-wide`}
        >
          <div className="text-center my-auto">
            <img
              src={avatar}
              alt="avatar"
              className="w-1/2 mx-auto rounded-full my-5 shadow-md"
            />
            <span>
              <h1 className="text-2xl font-playfair font-bold tracking-tighter">
                Zul Fahri Baihaqi
              </h1>
              <p className="font-thin">Web Developer</p>
            </span>
            <nav className="my-6">
              <ul>
                <li className="my-2">
                  <button
                    onClick={() => handleScrollToSection(heroRef, 0)}
                    className={`custom-nav-link ${
                      activeSection === "hero" || activeSection === null
                        ? "active"
                        : ""
                    }`}
                  >
                    Home
                  </button>
                </li>
                <li className="my-2">
                  <button
                    onClick={() => handleScrollToSection(aboutRef, 30)}
                    className={`custom-nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </button>
                </li>
                <li className="my-2">
                  <button
                    onClick={() => handleScrollToSection(projectsRef, 30)}
                    className={`custom-nav-link ${
                      activeSection === "projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </button>
                </li>
                <li className="my-2">
                  <button
                    onClick={() => handleScrollToSection(contactRef, 30)}
                    className={`custom-nav-link ${
                      activeSection === "contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
            <div>
              <p>
                <small>
                  <a
                    href="https://github.com/Zurihaqi"
                    target="_blank"
                    className="mx-2 size-fit"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zurihaqi/"
                    target="_blank"
                    className="mx-2 size-fit"
                    rel="noreferrer"
                    aria-label="linkedin"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </small>
              </p>
            </div>
          </div>
        </nav>
      </aside>

      {/* Hamburger Button */}
      <div className="lg:hidden p-2 z-20" ref={hamburgerRef}>
        <button
          className={`fixed top-0 hamburger hamburger--arrow ${
            sidebarVisible ? "active" : ""
          }`}
          type="button"
          onClick={toggleSidebar}
          aria-label="sidebar-toggle"
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
