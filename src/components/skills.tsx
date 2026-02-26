"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={fadeInUp}>
              <h3 className="font-mono text-sm text-accent">
                {category.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent/40 hover:text-text"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
