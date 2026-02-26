"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { socials } from "@/data/socials";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-3xl"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>
        <motion.h1
          variants={fadeInUp}
          className="mt-4 text-5xl font-bold tracking-tight sm:text-7xl"
        >
          Ricards Taukuls
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="mt-2 text-3xl font-bold text-text-secondary sm:text-5xl"
        >
          I build production apps from scratch.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-lg text-text-secondary leading-relaxed"
        >
          Senior full-stack developer with strong frontend expertise. React,
          Next.js, Angular on the frontend; .NET and Node.js on the backend.
          Currently leading frontend development on a Nasdaq-related financial
          platform.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex items-center gap-4"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary transition-all hover:border-accent hover:text-accent"
            >
              {social.name}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
