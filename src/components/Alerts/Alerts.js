import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faWarning,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Alerts.css";

const Alerts = ({ title, message, type, onClose }) => {
  // Close after 5 secs
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onClose]);

  return (
    <div
      className={`mt-4 fixed top-0 inset-x-0 mx-auto w-fit ${
        type === "success"
          ? "bg-teal-100 border-teal-500 text-teal-900"
          : "bg-red-100 border-red-500 text-red-900"
      } border-t-4 rounded-b px-4 py-3 shadow-md z-50 slide-in-out`}
      role="alert"
    >
      <div className="flex">
        <div className="py-1">
          {type === "success" ? (
            <FontAwesomeIcon icon={faCheckCircle} />
          ) : (
            <FontAwesomeIcon icon={faWarning} />
          )}
        </div>
        <div className="flex-grow">
          <p className="font-bold">&nbsp;{title}</p>
          <p className="text-sm">{message}</p>
        </div>
        <button onClick={onClose} className="ml-2" aria-label="close-alert">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
};

export default Alerts;
