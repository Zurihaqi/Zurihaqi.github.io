import * as React from "react";

const Card = ({ image, img_alt, title, description, category }) => {
  return (
    <div className="max-w-sm rounded-lg shadow-lg bg-gray-800 p-2 bg-opacity-50">
      <div className="group relative flex justify-center">
        <img
          className="rounded-lg object-contain group-hover:brightness-50 transition-all duration-300"
          src={image}
          alt={img_alt}
        />
        <button
          aria-label="read-more-btn"
          className="mb-4 absolute hidden group-hover:block top-16 bg-gray-600 text-white hover:bg-opacity-70 bg-opacity-30 p-2 rounded transition-opacity duration-300"
        >
          View details
        </button>
      </div>
      <div className="mx-5">
        <div className="flex justify-start">
          <div>
            <h5 className="mt-2 text-2xl font-bold tracking-tight ">{title}</h5>
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
        <p className="mb-3 font-normal text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;