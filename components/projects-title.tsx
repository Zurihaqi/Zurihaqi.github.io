"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ProjectsTitle() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textScaleUp = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const textScaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section className="bg-white relative sm:my-20 my-0" ref={containerRef}>
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
          <div
            style={{
              textAlign: "center",
              display: "block",
              position: "relative",
            }}
            className="pb-10 w-[150%] right-1/4"
          >
            <motion.div
              style={{
                scale: textScaleDown,
                opacity: textScaleDown,
              }}
              className="inline-block"
            >
              <span className="text-4xl lg:text-8xl font-medium">My Works</span>
            </motion.div>
            <motion.div style={{ scale: textScaleUp }} className="inline-block">
              <span className="text-4xl lg:text-8xl font-medium lg:mx-10 mx-4">
                My Works
              </span>
            </motion.div>
            <motion.div
              style={{
                scale: textScaleDown,
                opacity: textScaleDown,
              }}
              className="inline-block"
            >
              <span className="text-4xl lg:text-8xl font-medium">My Works</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
