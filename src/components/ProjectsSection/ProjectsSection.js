import React from "react";

const ProjectsSection = React.forwardRef((_props, ref) => {
  return (
    <section ref={ref} id="projects" className="h-screen">
      <div className="relative flex items-center">
        <span className="flex-shrink mx-4 text-2xl">Recent Projects</span>
        <div className="flex-grow border mt-2 border-gray-400"></div>
      </div>
      <div className="p-4">{/* Put content here later */}</div>
    </section>
  );
});

export default ProjectsSection;
