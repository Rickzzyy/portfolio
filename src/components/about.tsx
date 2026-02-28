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
              Over 4+ years in production I&apos;ve built everything from
              enterprise management systems with React and Node.js to real-time
              financial dashboards with Angular and .NET — systems where
              downtime isn&apos;t an option.
            </p>
            <p>
              My stack spans both sides: React, Next.js, Angular on the frontend;
              C#/.NET and Node.js on the backend. I architect with Clean
              Architecture, DDD and CQRS — not because it&apos;s trendy, but
              because it keeps complex systems maintainable at scale.
            </p>
            <p>
              Right now I&apos;m leading frontend on a Nasdaq-related financial
              platform at SWH SETS, working across React, Angular, C# and Java
              in a high-stakes environment where every millisecond counts.
            </p>
            <p>
              What sets me apart: I use Claude Code with parallel agent teams,
              MCP servers and tmux sessions to ship at a speed most teams
              can&apos;t match solo. AI isn&apos;t a crutch — it&apos;s a
              multiplier for someone who already knows what they&apos;re doing.
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
