import React from "react";

const HeroSection = React.forwardRef((_props, ref) => {
  return (
    <section
      ref={ref}
      id="hero"
      className="h-screen flex items-center justify-center"
    >
      <span className="flex-shrink text-5xl text-center">
        Hello!
        <br />
        I'm Zul
      </span>
    </section>
  );
});

export default HeroSection;
