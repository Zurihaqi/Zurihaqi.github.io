import * as React from "react";

export default function DarkThemeHook() {
  // Function to detect user's system or browser theme
  const prefersDarkMode =
    window?.matchMedia &&
    window?.matchMedia("(prefers-color-scheme: dark)").matches;

  // Set initial theme based on user's system or browser theme
  const [theme, setTheme] = React.useState(
    localStorage.theme || (prefersDarkMode ? "dark" : "light")
  );

  const colorTheme = theme === "dark" ? "light" : "dark";

  React.useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  React.useEffect(() => {
    const root = window?.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [colorTheme, toggleTheme];
}
