"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { socials } from "@/data/socials";

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="border-t border-border py-10 px-6"
    >
      <div className="mx-auto max-w-5xl">
        {/* Row 1 — Social links */}
        <div className="flex gap-6 justify-center">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary hover:text-accent transition"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Row 2 — Divider */}
        <div className="mt-4 w-12 h-px bg-border mx-auto" />

        {/* Row 3 — Credit & back to top */}
        <div className="mt-4 flex justify-between items-center text-xs text-text-secondary font-mono">
          <span>Designed & built by Ricards Taukuls</span>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-accent transition cursor-pointer"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </motion.footer>
  );
}
