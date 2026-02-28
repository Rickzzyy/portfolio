"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const terminalLines = [
  { type: "prompt" as const, text: "~/project $ claude" },
  { type: "output" as const, text: '> Planning implementation with 5 parallel agents...' },
  { type: "agent" as const, agent: "Agent 1", text: "Rewriting hero.tsx with gradient effects" },
  { type: "agent" as const, agent: "Agent 2", text: "Building stats.tsx with animated counters" },
  { type: "agent" as const, agent: "Agent 3", text: "Redesigning experience.tsx as timeline" },
  { type: "agent" as const, agent: "Agent 4", text: "Creating projects.tsx with 2-col grid" },
  { type: "agent" as const, agent: "Agent 5", text: "Rewriting skills.tsx + contact.tsx + footer.tsx" },
  { type: "output" as const, text: "✓ All 5 agents completed. 14 files changed, 937 insertions." },
  { type: "output" as const, text: "✓ Build successful. 0 errors." },
];

const features = [
  {
    title: "Claude Code",
    description:
      "AI pair programmer that understands entire codebases. I use it for architecture decisions, complex refactoring, and shipping features at 10x speed — not just autocomplete.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
  },
  {
    title: "Agent Teams",
    description:
      "Orchestrating multiple AI agents working in parallel — each on a separate task. One agent handles frontend, another backend, another tests. Like having a dev team that works at machine speed.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "MCP Servers",
    description:
      "Connecting Claude to external tools — Figma designs, databases, documentation, browser automation. The AI doesn't just write code, it sees the design and tests the result.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  {
    title: "Tmux Sessions",
    description:
      "Running multiple Claude Code instances in parallel terminal sessions. While one agent refactors the API, another builds the UI, and a third writes tests — all simultaneously.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6a2.25 2.25 0 012.25-2.25" />
      </svg>
    ),
  },
];

function TerminalLine({
  line,
  index,
}: {
  line: (typeof terminalLines)[number];
  index: number;
}) {
  if (line.type === "prompt") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.15, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-2"
      >
        <span className="text-emerald-400 shrink-0">$</span>
        <span className="text-text">{line.text.replace("~/project $ ", "")}</span>
      </motion.div>
    );
  }

  if (line.type === "agent") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.15, duration: 0.3 }}
        viewport={{ once: true }}
        className="flex gap-2 pl-2"
      >
        <span className="text-accent shrink-0">{line.agent}</span>
        <span className="text-text-secondary">{line.text}</span>
      </motion.div>
    );
  }

  const isSuccess = line.text.startsWith("✓");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: index * 0.15, duration: 0.3 }}
      viewport={{ once: true }}
      className={`pl-2 ${isSuccess ? "text-emerald-400" : "text-text-secondary"}`}
    >
      {line.text}
    </motion.div>
  );
}

export function AiWorkflow() {
  return (
    <section id="ai-workflow" className="py-32 px-6">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mx-auto max-w-5xl"
      >
        {/* Section heading */}
        <motion.div variants={fadeInUp} className="flex items-center gap-4">
          <span className="font-mono text-accent">05.</span>
          <h2 className="text-2xl font-bold">AI-Powered Development</h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl text-text-secondary leading-relaxed"
        >
          I don&apos;t just use AI for autocomplete. I run full agent teams — multiple
          Claude Code instances working in parallel, connected to design tools and
          databases via MCP, orchestrated through tmux sessions. This is how I ship
          entire features in hours, not days.
        </motion.p>

        {/* Terminal window */}
        <motion.div
          variants={scaleIn}
          className="mt-10 rounded-xl border border-border bg-bg-card overflow-hidden"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-secondary/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="ml-2 font-mono text-xs text-text-secondary">
              tmux — claude-agents — 5 panes
            </span>
          </div>

          {/* Terminal content */}
          <div className="p-5 font-mono text-sm leading-relaxed space-y-1.5 overflow-x-auto">
            {terminalLines.map((line, i) => (
              <TerminalLine key={i} line={line} index={i} />
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: terminalLines.length * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex gap-2 mt-2"
            >
              <span className="text-emerald-400">$</span>
              <span className="text-text-secondary animate-pulse">▊</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={scaleIn}
              className="rounded-xl border border-border bg-bg-card p-6 card-hover-glow group"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-text">{feature.title}</h3>
              </div>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-center font-mono text-xs text-text-secondary"
        >
          This entire portfolio redesign was built using the workflow above —
          5 parallel agents, 14 files, one session.
        </motion.p>
      </motion.div>
    </section>
  );
}
