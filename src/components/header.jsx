import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";

const navigation = [
  { name: "About", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Contact", href: "#" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 dark:bg-slate-100 bg-gray-600 transition ease transform duration-300`;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.body.classList.toggle("dark", newDarkMode);
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-8">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5 text-sm font-semibold">
            Zul Fahri Baihaqi
            <br /> <span className="font-light">Personal Website</span>
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={toggleMobileMenu}
          >
            <div
              className={`${genericHamburgerLine} ${
                mobileMenuOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                mobileMenuOpen
                  ? "opacity-0"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                mobileMenuOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
              }`}
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base font-semibold leading-6 hover:bg-slate-200 dark:hover:bg-gray-500"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="#" onClick={toggleDarkMode}>
            {darkMode ? (
              <SunIcon className="h-5 w-5 mr-1 text-yellow-500" />
            ) : (
              <MoonIcon className="h-5 w-5 mr-1 text-gray-900" />
            )}
          </a>
        </div>
      </nav>
      <div className="flex flex-col min-h-screen py-2">
        <div
          className={`top-0 right-0 w-[30vw] dark:bg-white bg-gray-600 p-8 pl-4 fixed h-full flex flex-col justify-center ease-in-out duration-300 ${
            mobileMenuOpen ? "translate-x-0 " : "translate-x-full"
          }`}
        >
          <div className="items-start w-full">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-lg py-2 text-base font-semibold leading-7 dark:text-gray-900 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
