import * as React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center mb-4 font-quicksand sm:text-sm text-xs">
      <p>© {currentYear} Zul Fahri Baihaqi.</p>
    </footer>
  );
}
