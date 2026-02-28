"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface InfoItem {
  label: string;
  value: string;
}

const infoItems: InfoItem[] = [
  { label: "Location", value: "Riga, Latvia" },
  { label: "Education", value: "B.Sc. Information Technology, RTU" },
  { label: "Certifications", value: ".NET 8 Microservices, C# Deep Dive" },
  { label: "Languages", value: "Latvian, English, Russian" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        <motion.div
          variants={fadeInUp}
          className="flex items-center gap-4"
        >
          <span className="font-mono text-sm text-accent">01.</span>
          <h2 className="text-2xl font-bold">About</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="mt-10 grid gap-10 sm:grid-cols-5">
          <motion.div
            variants={fadeInUp}
            className="space-y-4 leading-relaxed text-text-secondary sm:col-span-3"
          >
            <p>
              I&apos;m a senior full-stack developer with 4+ years of experience
              building web applications that handle real complexity — from
              financial data platforms to enterprise management systems.
            </p>
            <p>
              I specialize in React, Angular, and .NET ecosystems, and I care
              deeply about clean architecture, performance, and developer
              experience. Every project I take on is built to last.
            </p>
            <p>
              Currently leading frontend development on a Nasdaq-related
              financial platform, and always exploring new ways to push the web
              forward.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="rounded-xl border border-border bg-bg-card p-6 sm:col-span-2"
          >
            {infoItems.map((item, index) => (
              <div
                key={item.label}
                className={`py-3${
                  index < infoItems.length - 1
                    ? " border-b border-border"
                    : ""
                }`}
              >
                <div className="font-mono text-xs uppercase tracking-wider text-accent">
                  {item.label}
                </div>
                <div className="mt-1 text-sm text-text">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
