import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Card = ({ image, img_alt, title, description, category, onClick }) => {
  // const maxLength = 50;

  // const truncatedDescription =
  //   description.length > maxLength
  //     ? description.substring(0, maxLength) + "..."
  //     : description;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div style={{ minHeight: 250, maxHeight: 250 }}>
        <div className="group relative flex justify-center">
          <GatsbyImage
            className="rounded-lg shadow-xl w-[400px] h-[200px] object-cover group-hover:brightness-50 transition-all duration-300"
            image={getImage(image)}
            alt={img_alt}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button
              aria-label="read-more-btn"
              className="hidden group-hover:block bg-gray-800 text-white hover:bg-opacity-70 bg-opacity-30 p-2 rounded transition-opacity duration-300"
              onClick={onClick}
            >
              <FontAwesomeIcon icon={faEye} size="2xl" />
            </button>
          </div>
        </div>
        <div className="mx-5">
          <div className="flex justify-start gap-2">
            <div className="flex mx-auto">
              <h5 className="mt-2 text-lg font-bold tracking-tight">{title}</h5>
            </div>
            {/* <div>
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
          </div> */}
          </div>
          {/* <p className="mb-3 font-normal text-black dark:text-gray-300">
          {truncatedDescription}
          <button
            className="text-blue-400 inline hover:underline hover:text-blue-500"
            onClick={onClick}
          >
            Read More
          </button>
        </p> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
