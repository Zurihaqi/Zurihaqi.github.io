import * as React from "react";

import "animate.css/animate.min.css";

const Modal = ({ showModal, closeModal, children }) => {
  const outerRef = React.useRef();
  const innerRef = React.useRef();

  React.useEffect(() => {
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

    if (showModal) {
      outerRef.current.classList.remove("hidden");
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, closeModal]);

  return (
    <div
      ref={outerRef}
      className={`z-50 ${
        showModal ? "" : "hidden"
      } flex items-center justify-center fixed top-0 left-0 w-full h-full backdrop-brightness-50`}
    >
      <div ref={innerRef} className="sm:w-2/4 w-3/4">
        {children}
      </div>
    </div>
  );
};

export default Modal;
