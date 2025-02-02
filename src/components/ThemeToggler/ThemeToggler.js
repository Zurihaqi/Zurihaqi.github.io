import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import DarkThemeHook from "../../hooks/darkThemeHook";

const ThemeToggler = () => {
  const [colorTheme, setTheme] = DarkThemeHook();
  const isDarkMode = colorTheme === "dark";

  const toggleDarkMode = () => {
    setTheme(colorTheme === "light" ? "dark" : "light");
  };

  return (
    <button
      title="Toggle Theme"
      onClick={toggleDarkMode}
      className="
      z-50
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-sky-500 
        dark:bg-violet-800 
        fixed
        top-0
        right-0
        transition-colors 
        duration-500 
        ease-in
        m-2
        shadow-lg
      "
      aria-label="theme_toggler"
    >
      <div
        id="toggle"
        className="
            rounded-full 
            w-4 
            h-4 
            bg-white 
            dark:bg-gray-600 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
            shadow-xl
        "
      >
        {isDarkMode ? (
          <FontAwesomeIcon
            icon={faSun}
            className="text-amber-300 text-xs mb-1.5 mx-auto my-auto"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-gray-300 text-xs mb-1.5 mx-auto my-auto"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggler;
