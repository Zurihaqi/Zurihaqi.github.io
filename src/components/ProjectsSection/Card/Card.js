import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Card = ({ image, img_alt, title, description, category, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <div>
        <div className="group relative flex justify-center">
          <button aria-label="image-btn" onClick={onClick}>
            <GatsbyImage
              className="rounded-lg object-cover group-hover:brightness-50 transition-all duration-300"
              image={getImage(image)}
              alt={img_alt}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="hidden group-hover:block text-white p-2 rounded">
                <FontAwesomeIcon icon={faEye} size="2xl" />
              </div>
            </div>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
