"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import projectData from "@/data/projects.json";

export default function Projects() {
  const projects = useMemo(() => Object.values(projectData), []);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const frame = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    });
  }, []);

  const handleMouseEnter = useCallback((id: number) => {
    setHoveredProject(id);
    setShowCursor(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredProject(null);
    setShowCursor(false);
  }, []);

  return (
    <section
      id="projects"
      className="bg-white min-h-[100vh] px-8 scroll-mt-24 relative"
      onMouseMove={handleMouseMove}
    >
      {/* Custom Cursor */}
      <AnimatePresence>
        {showCursor && (
          <motion.div
            className="fixed z-50 pointer-events-none"
            style={{
              left: cursorPos.x - 40,
              top: cursorPos.y - 40,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center text-sm font-medium">
              View
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={`/projects/${project.id}` || "#"} className="block">
                <div
                  className="relative aspect-[4/3] overflow-hidden bg-gray-100 cursor-none"
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <video
                    src={project.thumbnail[0]}
                    className="object-cover w-full h-full"
                    autoPlay
                    muted
                    playsInline
                    loop={false}
                  />
                </div>

                <div className="mt-4 flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-medium">{project.title}</h3>
                    <p className="text-black/60">
                      {project.category.join(", ")}
                    </p>
                  </div>
                  <motion.div
                    animate={{
                      x: hoveredProject === project.id ? 0 : -10,
                      opacity: hoveredProject === project.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowUpRightIcon className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Tech stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
