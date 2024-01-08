import React from "react";
// import { AnimationOnScroll } from "react-animation-on-scroll";
// import "animate.css/animate.min.css";

const ProjectsSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="projects" className="container h-screen">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 text-2xl">Recent projects</span>
        <div className="flex-grow border border-gray-400"></div>
      </div>
      <p className="p-4 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales
        malesuada felis, ut suscipit tellus lobortis at. Duis vitae arcu vel
        nisl ullamcorper eleifend eget ut dui. Cras varius efficitur ultrices.
        Nullam sed felis neque. Nam eget ligula sed augue interdum mattis et a
        nisi. Quisque ex tellus, fermentum sed blandit hendrerit, luctus in
        lectus. Pellentesque quis sodales neque, vitae fringilla ante. Nam
        tincidunt nisl vel libero porttitor pretium. Ut non magna arcu.
      </p>
    </section>
  );
});

export default ProjectsSection;
