import React from "react";
import Header from "../components/header";
import TextScrambleComponent from "../components/textScramble";

const IndexPage = () => {
  const phrases = ["Website in progress"];

  return (
    // Background
    <div className="p-10 relative overflow-hidden min-h-screen area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <Header />

      {/* Konten */}
      <div className="grid grid-rows-2 grid-flow-col gap-4 text-center">
        <div className="row-span-3 px-6 pt-40 lg:px-8 text-5xl">
          <TextScrambleComponent phrases={phrases} />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
