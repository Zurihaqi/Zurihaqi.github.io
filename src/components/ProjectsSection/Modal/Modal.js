import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ showModal, closeModal, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal, closeModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-800 rounded-lg shadow-xl"
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faX} className="w-5 h-5" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
