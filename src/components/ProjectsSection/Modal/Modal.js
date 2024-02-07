import * as React from "react";

import "animate.css/animate.min.css";

const Modal = ({ showModal, closeModal, children }) => {
  const outerRef = React.useRef();
  const innerRef = React.useRef();

  React.useEffect(() => {
    const handleAnimationEnd = () => {
      if (!showModal) {
        setTimeout(() => {
          outerRef.current.classList.add("hidden");
        }, 1000);
      }
    };

    const handleClickOutside = (event) => {
      if (
        outerRef.current &&
        innerRef.current &&
        outerRef.current.contains(innerRef.current) &&
        !innerRef.current.contains(event.target)
      ) {
        closeModal();
      }
    };

    const handleScroll = () => {
      closeModal();
    };

    if (showModal) {
      outerRef.current.classList.remove("hidden");
      window.addEventListener("scroll", handleScroll);
      document.addEventListener("mousedown", handleClickOutside);
    }

    handleAnimationEnd();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, closeModal]);

  return (
    <div
      ref={outerRef}
      className={`z-50 animate__animated rounded-lg ${
        showModal ? "animate__fadeIn" : "animate__fadeOut"
      } flex items-center justify-center fixed top-0 left-0 w-full h-full backdrop-blur-sm`}
    >
      <div
        ref={innerRef}
        className={`sm:w-2/4 w-3/4 animate__animated ${
          showModal ? "animate__fadeInUp" : "animate__fadeOutDown"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
