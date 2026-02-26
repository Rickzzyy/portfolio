"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-8">
          {experience.map((job) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={scaleIn}
              className="rounded-xl border border-border bg-bg-card p-6"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold">{job.role}</h3>
                <span className="font-mono text-xs text-text-secondary">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-accent">
                {job.company}{" "}
                <span className="text-text-secondary">· {job.location}</span>
              </p>
              <ul className="mt-4 space-y-2">
                {job.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
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
