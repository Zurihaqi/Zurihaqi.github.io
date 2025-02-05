import * as React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center dark:bg-[#161616] bg-white mb-4 sm:text-sm text-xs">
      <p>© {currentYear} Zul Fahri Baihaqi.</p>
    </footer>
  );
}
