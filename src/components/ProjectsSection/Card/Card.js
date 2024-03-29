import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Card = ({ image, img_alt, title, description, category, onClick }) => {
  const maxLength = 20;

  const truncatedDescription =
    description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;

  return (
    <div
      className="max-w-sm rounded-lg shadow-lg bg-neutral-300 dark:bg-slate-600 p-2 bg-opacity-50"
      style={{ minHeight: 320 }}
    >
      <div className="group relative flex justify-center">
        <GatsbyImage
          className="rounded-lg object-contain group-hover:brightness-50 transition-all duration-300"
          image={getImage(image)}
          alt={img_alt}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button
            aria-label="read-more-btn"
            className="hidden group-hover:block bg-gray-600 text-white hover:bg-opacity-70 bg-opacity-30 p-2 rounded transition-opacity duration-300"
            onClick={onClick}
          >
            View details
          </button>
        </div>
      </div>
      <div className="mx-5">
        <div className="flex justify-start gap-2">
          <div>
            <h5 className="mt-2 text-2xl font-bold tracking-tight ">{title}</h5>
          </div>
          <div>
            <p
              style={{
                height: "25px",
              }}
              className={`w-fit text-center mt-3 p-1 rounded-full border ${
                category === "WebApp" ? "border-blue-400 text-blue-500 " : ""
              } ${
                category === "NLP" ? "border-purple-400 text-purple-400" : ""
              } text-xs font-semibold`}
            >
              {category}
            </p>
          </div>
        </div>
        <p className="mb-3 font-normal text-black dark:text-gray-300">
          {truncatedDescription}
          <button
            className="text-blue-400 inline hover:underline hover:text-blue-500"
            onClick={onClick}
          >
            Read More
          </button>
        </p>
      </div>
    </div>
  );
};

export default Card;
