"use client"

import { motion } from "framer-motion"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "TailwindCSS", level: 95 },
      { name: "Framer Motion", level: 75 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Prisma", level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "GraphQL", level: 65 },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 65 },
      { name: "Figma", level: 75 },
      { name: "CI/CD", level: 70 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground/80">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * index }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
