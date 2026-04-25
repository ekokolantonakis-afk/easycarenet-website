"use client";

import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import Logo from "./Logo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.1,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
    >
      <ParticleBackground />

      {/* Soft gradient accents */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-brand-core/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-40 w-96 h-96 rounded-full bg-brand-electric/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeUp}
          className="flex justify-center mb-8"
        >
          <Logo size="lg" showTagline />
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeUp}
          className="mb-6"
        >
          <span className="eyebrow">
            AI Systems &middot; Applications &middot; Automation
          </span>
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold leading-[1.05] tracking-tight font-display"
        >
          <span className="gradient-text">Engineered for Control.</span>
          <br />
          <span className="gradient-text">Built to Evolve.</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={3}
          variants={fadeUp}
          className="mt-8 text-lg md:text-xl text-steel max-w-2xl mx-auto leading-relaxed"
        >
          Intelligent systems, applications, and automation for businesses at every stage —
          from your first website to full operational infrastructure.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={4}
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#contact" className="btn-primary">
            <span className="inline-flex items-center gap-2">
              Start Your System
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <a href="#services" className="btn-ghost">
            Explore Solutions
          </a>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={5}
          variants={fadeUp}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs uppercase tracking-[0.2em] text-steel/70"
        >
          <span>AI-Native Intelligence</span>
          <span className="hidden sm:inline text-white/10">&bull;</span>
          <span>Enterprise-Grade Security</span>
          <span className="hidden sm:inline text-white/10">&bull;</span>
          <span>Built for Performance</span>
          <span className="hidden sm:inline text-white/10">&bull;</span>
          <span>Cloud Agile</span>
          <span className="hidden sm:inline text-white/10">&bull;</span>
          <span>Future Ready</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-steel/60"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-brand-electric/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
