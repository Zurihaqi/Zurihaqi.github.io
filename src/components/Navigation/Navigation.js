import * as React from "react";
import icon from "../../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "hamburgers/dist/hamburgers.css";
import "./Navigation.css";

export default function Navigation() {
  const [isNavigationVisible, setNavigationVisibility] = React.useState(false);

  const toggleNavigation = () => {
    setNavigationVisibility(!isNavigationVisible);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className={`hamburger hamburger--squeeze ${
          isNavigationVisible ? "is-active" : ""
        }`}
        type="button"
        onClick={toggleNavigation}
        aria-label="sidebar-toggle"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {/* Sidebar */}
      <aside
        id="navigation"
        className={`fixed top-0 left-0 z-40 w-64 h-full transition-transform duration-300 ${
          isNavigationVisible ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 font-quicksand tracking-wide`}
        aria-label="navigation"
      >
        <nav className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 flex justify-center">
          <div className="text-center">
            <img
              src={icon}
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
                <li className="my-2 ">
                  <a href="#Hero" className="custom-nav-link">
                    Home
                  </a>
                </li>
                <li className="my-2 ">
                  <a href="#About" className="custom-nav-link">
                    About
                  </a>
                </li>
                <li className="my-2 ">
                  <a href="#Projects" className="custom-nav-link">
                    Projects
                  </a>
                </li>
                <li className="my-2 ">
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
    </>
  );
}
