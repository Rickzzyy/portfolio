"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group rounded-xl border border-border bg-bg-card p-6 transition-colors hover:border-accent/40"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-secondary hover:text-accent transition-colors text-sm"
                    >
                      Live &rarr;
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-mono text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
