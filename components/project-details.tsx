"use client";

import { Project } from "@/types/types";
import { motion } from "framer-motion";
import { ExternalLink, GithubIcon } from "lucide-react";

export default function ProjectDetails({ project }: { project: Project }) {
  if (!project) {
    return (
      <section className="container mx-auto px-8 py-16 mt-12 animate-pulse">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Skeleton Image */}
          <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-200 rounded-md" />

          {/* Skeleton Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <div className="h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />

            <div className="mt-6 space-y-2">
              <div className="h-6 bg-gray-200 rounded w-1/3" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="h-6 w-16 bg-gray-200 rounded-full" />
                ))}
              </div>
            </div>

            <div className="mt-6 h-6 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />

            <div className="mt-4 h-6 bg-gray-200 rounded w-1/4" />
            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="container mx-auto px-8 py-16 mt-12"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Project Image */}
        <motion.div
          className="relative w-full md:w-1/2 aspect-[4/3] overflow-hidden bg-gray-100"
          initial={{ clipPath: "inset(100% 0 0 0)", opacity: 0.5 }}
          animate={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        >
          <img
            src={
              project.thumbnail[0] || "/placeholder.svg?height=600&width=800"
            }
            alt={project.img_alt?.[0] || project.title}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Project Details */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <p className="mt-4 text-lg">{project.description}</p>

          {/* Tech Stack */}
          <div className="mt-6">
            <h3 className="text-2xl font-medium">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 border border-black/10 rounded-full text-black/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Repository Link */}
          {project.repo && (
            <div className="mt-6">
              <h3 className="text-2xl font-medium">Repository</h3>
              <div className="w-fit">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black/70 transition-colors"
                >
                  <GithubIcon className="mt-4 outline-1 rounded-full p-1 w-[2rem] h-[2rem]" />
                </a>
              </div>
            </div>
          )}

          {/* Live Link */}
          {project.live && (
            <div className="mt-6">
              <h3 className="text-2xl font-medium">Live Demo</h3>
              <div className="w-fit">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black/70 transition-colors"
                >
                  <ExternalLink className="mt-4 outline-1 rounded-full p-1 w-[2rem] h-[2rem]" />
                </a>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
