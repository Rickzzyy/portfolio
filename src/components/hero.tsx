"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { socials } from "@/data/socials";

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  ),
  LinkedIn: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
};

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="ml-2 transition-transform group-hover:translate-x-1"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
      {/* Background orbs */}
      <div className="hero-orb-1 -top-40 -right-40" />
      <div className="hero-orb-2 -bottom-40 -left-40" />
      <div className="hero-orb-3 bottom-20 left-1/2 -translate-x-1/2" />

      {/* Dot grid overlay */}
      <div className="dot-pattern absolute inset-0 opacity-40" />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        {/* Status badge */}
        <motion.div variants={fadeInUp} className="flex justify-center">
          <div className="flex items-center gap-2 rounded-full border border-border bg-bg-card/80 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="pulse-dot absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-text-secondary">
              Available for projects
            </span>
          </div>
        </motion.div>

        {/* Mono subtitle */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 font-mono text-sm text-accent"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl gradient-text"
        >
          Ricards Taukuls
        </motion.h1>

        {/* Value proposition */}
        <motion.h2
          variants={fadeInUp}
          className="mt-3 text-2xl font-bold text-text-secondary sm:text-4xl"
        >
          I build high-performance web applications
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-xl text-text-secondary leading-relaxed"
        >
          Senior full-stack developer turning complex ideas into
          production-ready applications. From financial platforms to enterprise
          systems — I architect, build, and ship.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View My Work
            <ArrowIcon />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center rounded-lg border border-border px-6 py-3 font-medium text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            Get In Touch
            <ArrowIcon />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeInUp}
          className="mt-10 flex items-center justify-center gap-5"
        >
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-text-secondary transition-colors hover:text-accent"
            >
              {socialIcons[social.name]}
            </a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
