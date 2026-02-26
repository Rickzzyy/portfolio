"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-3xl"
      >
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="mt-8 space-y-4 text-text-secondary leading-relaxed"
        >
          <p>
            Full-stack developer with 4+ years of experience building modern web
            applications with React, Angular, Node.js, and .NET. I specialize in
            building web applications from the ground up — from architecture to
            deployment.
          </p>
          <p>
            I&apos;m passionate about clean, maintainable code using best
            practices like Clean Architecture, DDD, and CI/CD. I enjoy working
            on performance-critical systems, optimizing backend APIs, and
            improving developer workflows through automation.
          </p>
          <p>
            Currently exploring AI-powered development with Claude AI and MCP,
            and designing scalable systems with TypeScript, PostgreSQL, and
            Docker in cloud-based environments.
          </p>
          <p>
            Bachelor&apos;s degree in Information Technology from Riga Technical
            University. Certified in .NET 8 Microservices (DDD, CQRS,
            Vertical/Clean Architecture) and C# Deep Dive.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
