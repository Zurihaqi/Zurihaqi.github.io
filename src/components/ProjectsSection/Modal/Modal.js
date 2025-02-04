import React, { useEffect, useRef } from "react";
import "../ProjectSection.css";

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-800/30">
      <div ref={modalRef} className="rounded-lg sm:w-[800px] w-[350px]">
        {children}
      </div>
    </div>
  );
};

export default Modal;
