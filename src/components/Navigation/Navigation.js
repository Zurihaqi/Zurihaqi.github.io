import * as React from "react";
import avatar from "../../images/avatar.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "delicious-hamburgers/dist/hamburgers.min.css";
import "./Navigation.css";

export default function Navigation({ heroRef, aboutRef, projectsRef }) {
  const [sidebarVisible, setSidebarVisibility] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(null);

  const toggleSidebar = () => {
    setSidebarVisibility(!sidebarVisible);
  };

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setSidebarVisibility(!sidebarVisible);
    }
  };

  const handleScroll = () => {
    const offset = 250; // Placeholder offset, no content yet

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
    } else if (scrollPosition >= projectsRef.current.offsetTop - offset) {
      setActiveSection("projects");
    } else {
      setActiveSection(null);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Sidebar */}
      <aside id="navigation" aria-label="navigation">
        <nav
          className={`flex flex-col sticky top-0 h-screen px-3 py-4 bg-gray-50 w-64 transition-all duration-300 ${
            sidebarVisible ? "ml-0" : "-ml-64"
          } sm:ml-0 font-quicksand tracking-wide`}
        >
          <div className="text-center my-auto">
            <img
              src={avatar}
              alt="avatar"
              className="w-1/2 mx-auto rounded-full my-5"
            />
            <span>
              <h1 className="text-2xl font-playfair font-bold tracking-tighter">
                Zul Fahri Baihaqi
              </h1>
              <p className="font-thin">Software Developer</p>
            </span>
            <nav className="my-10">
              <ul>
                <li
                  className="my-2"
                  onClick={() => scrollToSection(heroRef, "hero")}
                >
                  <a
                    href="#Hero"
                    className={`custom-nav-link ${
                      activeSection === "hero" ? "active" : ""
                    }`}
                  >
                    Home
                  </a>
                </li>
                <li
                  className="my-2"
                  onClick={() => scrollToSection(aboutRef, "about")}
                >
                  <a
                    href="#About"
                    className={`custom-nav-link ${
                      activeSection === "about" ? "active" : ""
                    }`}
                  >
                    About
                  </a>
                </li>
                <li
                  className="my-2"
                  onClick={() => scrollToSection(projectsRef, "projects")}
                >
                  <a
                    href="#Projects"
                    className={`custom-nav-link ${
                      activeSection === "projects" ? "active" : ""
                    }`}
                  >
                    Projects
                  </a>
                </li>
                <li className="my-2">
                  <a href="#Contact" className="custom-nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <p>
                <small>
                  <a
                    href="https://github.com/Zurihaqi"
                    target="_blank"
                    className="mx-2"
                    rel="noreferrer"
                    aria-label="github"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/zurihaqi/"
                    target="_blank"
                    className="mx-2"
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
      <div className="sm:hidden p-2">
        <button
          className={`sticky top-0 hamburger hamburger--arrow ${
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
