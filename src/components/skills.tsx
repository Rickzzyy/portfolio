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
        className="mx-auto max-w-5xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <span className="font-mono text-accent">04.</span>
          <h2 className="text-2xl font-bold">Skills & Tools</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeInUp}
              className="rounded-xl border border-border bg-bg-card p-6 card-hover-glow"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-6 rounded-full bg-accent" />
                <h3 className="font-mono text-sm text-accent uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-lg bg-bg-secondary border border-transparent px-3 py-1.5 text-sm text-text-secondary hover:border-accent/30 hover:text-text transition-all cursor-default"
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
