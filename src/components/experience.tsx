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
          <span className="font-mono text-accent">02.</span>
          <h2 className="text-2xl font-bold text-text">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="relative mt-10 pl-8 sm:pl-10 space-y-8">
          <div className="timeline-line absolute left-[6px] top-0 bottom-0 w-px" />

          {experience.map((job) => (
            <motion.div
              key={`${job.company}-${job.role}`}
              variants={scaleIn}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-[-25.5px] sm:left-[-33.5px] top-6 w-3.5 h-3.5 rounded-full bg-accent border-[3px] border-bg" />

              {/* Card */}
              <div className="rounded-xl border border-border bg-bg-card p-6 card-hover-glow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-text">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-text-secondary whitespace-nowrap ml-4">
                    {job.period}
                  </span>
                </div>

                <p className="mt-1 text-sm">
                  <span className="text-accent">{job.company}</span>
                  <span className="text-text-secondary"> · {job.location}</span>
                </p>

                <ul className="mt-4 space-y-2">
                  {job.description.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-text-secondary leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-bg-secondary px-3 py-1 text-xs font-mono text-text-secondary hover:text-accent hover:bg-accent/10 transition"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
