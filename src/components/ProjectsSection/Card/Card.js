import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Card = ({ image, img_alt, onClick }) => {
  return (
    <div className="group relative flex justify-center overflow-hidden rounded-lg">
      <button aria-label="image-btn" onClick={onClick} className="relative">
        {/* Image with Zoom-in Effect */}
        <motion.div
          className="rounded-lg overflow-hidden group-hover:brightness-50"
          whileHover={{ scale: 1.1 }} // Zoom effect
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
        >
          <GatsbyImage
            className="rounded-lg object-cover w-full h-full transition-all duration-300"
            image={getImage(image)}
            alt={img_alt}
          />
        </motion.div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="hidden group-hover:block text-white p-2 rounded">
            <FontAwesomeIcon icon={faEye} size="2xl" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Card;
