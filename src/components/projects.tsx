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
          <span className="font-mono text-accent">03.</span>
          <h2 className="text-2xl font-bold text-text">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={scaleIn}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-xl border border-border bg-bg-card p-6 sm:p-8 card-hover-glow group transition-all duration-300${
                index === 0 ? " sm:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start">
                <span className="font-mono text-5xl font-bold text-border group-hover:text-accent/30 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-3 py-1 text-xs font-mono text-text-secondary hover:border-accent hover:text-accent transition"
                    >
                      Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-border px-3 py-1 text-xs font-mono text-text-secondary hover:border-accent hover:text-accent transition"
                    >
                      Live &rarr;
                    </a>
                  )}
                </div>
              </div>

              <h3 className="mt-4 text-xl font-semibold text-text group-hover:text-accent transition-colors">
                {project.title}
              </h3>

              <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-mono text-text-secondary hover:text-accent hover:bg-accent/10 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Rickzzyy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-text-secondary hover:text-accent transition"
          >
            View All on GitHub &rarr;
          </a>
        </div>
      </motion.div>
    </section>
  );
}
