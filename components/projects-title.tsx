"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsTitle() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const isFixed = useTransform(scrollYProgress, (v) => {
    return v === 0 || v === 1 ? "absolute" : "fixed";
  });

  const textScaleUp = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textScaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section className="bg-white relative mb-20" ref={containerRef}>
      <div
        style={{
          justifyContent: "center",
          alignItems: "flex-start",
          height: "150vh",
          display: "flex",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            position: "sticky",
            top: "40vh",
            overflow: "hidden",
          }}
        >
          {/* How to center this in the middle of the viewport? */}
          <div
            style={{
              gap: "3rem",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              display: "flex",
              overflow: "hidden",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
            className="pb-10 w-[105%]"
          >
            <motion.div
              style={{
                scale: textScaleDown,
                opacity: textScaleDown,
                width: "100%",
              }}
            >
              <span className="text-6xl lg:text-8xl font-medium">My Works</span>
            </motion.div>
            <motion.div style={{ scale: textScaleUp, width: "100%" }}>
              <span className="text-6xl lg:text-8xl font-medium">My Works</span>
            </motion.div>
            <motion.div
              style={{
                scale: textScaleDown,
                opacity: textScaleDown,
                width: "100%",
              }}
            >
              <span className="text-6xl lg:text-8xl font-medium">My Works</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
