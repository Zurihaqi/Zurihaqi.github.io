import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
      className={`fixed bottom-5 right-5 rounded-full bg-red-600 p-3 text-white shadow-md transition duration-150 ease-in-out ${
        isVisible ? "block" : "hidden"
      } hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0`}
      onClick={scrollToTop}
      style={{ width: "40px", height: "40px" }}
      aria-label="scroll-to-top-button"
    >
      <FontAwesomeIcon icon={faArrowUp} className="mb-2" />
    </button>
  );
}
