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
        className="mx-auto max-w-3xl text-center"
      >
        <motion.p
          variants={fadeInUp}
          className="font-mono text-sm text-accent"
        >
          What&apos;s next?
        </motion.p>
        <motion.h2 variants={fadeInUp} className="mt-4 text-4xl font-bold">
          Get In Touch
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-4 max-w-md text-text-secondary"
        >
          Always open to challenging projects where I can learn, contribute, and
          grow. Whether you have an opportunity or just want to say hi — feel
          free to reach out.
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-8">
          <a
            href="mailto:ricards.taukuls@gmail.com"
            className="inline-block rounded-lg border border-accent px-8 py-3 font-mono text-sm text-accent transition-all hover:bg-accent hover:text-white"
          >
            Say Hello
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
