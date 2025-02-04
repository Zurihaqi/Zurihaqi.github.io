import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set visible when user scrolls down
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`z-10 fixed bottom-5 right-5 rounded-full dark:bg-violet-700 bg-blue-500 p-3 text-gray-300 shadow-md transition-color duration-150 ease-in-out ${
        isVisible
          ? "animate__animated animate__bounceInUp"
          : "animate__animated animate__bounceOutDown"
      } dark:hover:bg-violet-800 hover:bg-blue-600 hover:shadow-lg dark:focus:bg-violet-800 focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0`}
      onClick={scrollToTop}
      style={{ width: "40px", height: "40px" }}
      aria-label="scroll-to-top-button"
    >
      <FontAwesomeIcon icon={faArrowUp} className="mb-2" />
    </button>
  );
}
