import React from "react";

const AboutSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="about" className="h-screen">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 text-2xl">About Me</span>
        <div className="flex-grow border mt-2 border-gray-400"></div>
      </div>
      <div className="p-4">{/* Put content here later */}</div>
    </section>
  );
});

export default AboutSection;
