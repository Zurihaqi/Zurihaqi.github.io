import "./src/styles/global.css";
import React, { useState, useEffect } from "react";
import Loader from "./src/components/Loader/Loader";

const RootWrapper = ({ element }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay if needed
  }, []);

  return isLoading ? <Loader /> : element;
};

export const wrapRootElement = ({ element }) => (
  <RootWrapper element={element} />
);
