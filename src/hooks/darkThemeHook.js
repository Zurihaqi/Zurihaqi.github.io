import * as React from "react";

export default function DarkThemeHook() {
  const [theme, setTheme] = React.useState("dark");

  React.useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(localStorage.theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  const colorTheme = theme === "dark" ? "light" : "dark";

  React.useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return [colorTheme, toggleTheme];
}
