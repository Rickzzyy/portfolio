"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        {/* Part A — Main CTA */}
        <div className="text-center">
          <motion.p
            variants={fadeInUp}
            className="font-mono text-sm text-accent"
          >
            06. What&apos;s next?
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-4xl sm:text-5xl font-bold"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-lg text-text-secondary text-lg leading-relaxed"
          >
            I&apos;m always interested in challenging projects where I can learn,
            contribute, and build something meaningful. Whether you need a
            full-stack developer or a frontend specialist — let&apos;s talk.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-8">
            <a
              href="mailto:ricards.taukuls@gmail.com"
              className="inline-block bg-accent text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent-hover transition-all hover:shadow-lg hover:shadow-accent/20"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>

        {/* Part B — Contact methods */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex justify-center gap-8 flex-wrap"
        >
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">Email</span>
            <a
              href="mailto:ricards.taukuls@gmail.com"
              className="text-text hover:text-accent transition"
            >
              ricards.taukuls@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">GitHub</span>
            <a
              href="https://github.com/Rickzzyy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition"
            >
              @Rickzzyy
            </a>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-text-secondary">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/ricards-taukuls-592176259/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-accent transition"
            >
              Ricards Taukuls
            </a>
          </div>
        </motion.div>

        {/* Part C — Availability indicator */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center justify-center gap-2"
        >
          <span className="relative flex h-2 w-2">
            <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-xs text-text-secondary">
            Currently available for new projects
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
