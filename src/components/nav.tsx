"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { number: "01", label: "About", href: "#about" },
  { number: "02", label: "Experience", href: "#experience" },
  { number: "03", label: "Projects", href: "#projects" },
  { number: "04", label: "Skills", href: "#skills" },
];

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

// ---------------------------------------------------------------------------
// Animation variants
// ---------------------------------------------------------------------------

const mobileOverlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" as const } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const mobileNav = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.04, staggerDirection: -1 as const },
  },
};

const mobileLinkVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.25, ease: "easeIn" as const },
  },
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // ---- scroll shadow ---------------------------------------------------
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ---- intersection observer for active section ------------------------
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ---- lock body scroll when mobile menu is open -----------------------
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMobileMenu = useCallback(() => setMenuOpen(false), []);

  // ---- helpers ---------------------------------------------------------
  const handleLinkClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
      closeMobileMenu();
    },
    [closeMobileMenu],
  );

  return (
    <>
      {/* --------------------------------------------------------------- */}
      {/* Header                                                          */}
      {/* --------------------------------------------------------------- */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 bg-bg/60 backdrop-blur-lg transition-all duration-300 ${
          scrolled
            ? "bg-bg/85 border-b border-border shadow-[0_1px_12px_rgba(0,0,0,0.45)]"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => handleLinkClick(e, "#")}
            className="font-mono text-sm font-bold tracking-tight text-accent transition-opacity hover:opacity-80"
          >
            ~/ricards
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 sm:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`group text-[13px] tracking-wide transition-colors duration-200 ${
                      isActive
                        ? "text-text"
                        : "text-text-secondary hover:text-text"
                    }`}
                  >
                    <span className="mr-1 font-mono text-[11px] text-accent">
                      {link.number}.
                    </span>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="hidden rounded-full border border-accent px-5 py-1.5 text-[13px] font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] sm:inline-block"
          >
            Let&apos;s Talk
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[5px] sm:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <motion.span
              animate={
                menuOpen
                  ? { rotate: 45, y: 7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-text"
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.2 }}
              className="block h-[2px] w-5 rounded-full bg-text"
            />
            <motion.span
              animate={
                menuOpen
                  ? { rotate: -45, y: -7, width: 20 }
                  : { rotate: 0, y: 0, width: 20 }
              }
              transition={{ duration: 0.3 }}
              className="block h-[2px] rounded-full bg-text"
            />
          </button>
        </nav>
      </motion.header>

      {/* ----------------------------------------------------------------- */}
      {/* Mobile full-screen menu                                           */}
      {/* ----------------------------------------------------------------- */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            variants={mobileOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-bg/95 backdrop-blur-xl sm:hidden"
          >
            <motion.nav
              variants={mobileNav}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    variants={mobileLinkVariant}
                    className={`text-2xl font-light tracking-wide transition-colors ${
                      isActive ? "text-text" : "text-text-secondary"
                    }`}
                  >
                    <span className="mr-2 font-mono text-base text-accent">
                      {link.number}.
                    </span>
                    {link.label}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                variants={mobileLinkVariant}
                className="mt-6 rounded-full border border-accent px-8 py-2.5 text-base font-medium text-accent transition-all duration-200 hover:bg-accent hover:text-white"
              >
                Let&apos;s Talk
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
