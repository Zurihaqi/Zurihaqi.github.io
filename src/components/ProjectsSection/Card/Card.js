import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ image, img_alt, title, description, category }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img
          className="rounded-t-lg object-contain border"
          src={image}
          alt={img_alt}
        />
      </div>
      <div className="mx-5">
        <div className="flex justify-start">
          <div>
            <h5 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </div>
          <div>
            <p
              style={{
                width: "55px",
                height: "25px",
              }}
              className={`text-center mx-4 mt-3 p-1 rounded-full border ${
                category === "WebApp" ? "border-blue-400 text-blue-500" : ""
              } ${
                category === "NLP" ? "border-purple-400 text-purple-400" : ""
              } text-xs font-semibold`}
            >
              {category}
            </p>
          </div>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <button
          aria-label="read-more-btn"
          className="mb-4 bg-red-500 hover:bg-red-700 text-white font-semibold hover:text-white py-2 px-4 rounded transition-color duration-300"
        >
          Read more&nbsp;
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Card;
