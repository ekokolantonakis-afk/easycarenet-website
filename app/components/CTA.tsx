"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Backlight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-core/15 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-electric/20 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="surface-card rounded-3xl p-10 md:p-16 relative"
        >
          <div className="mb-6">
            <span className="eyebrow">Let's build it</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-semibold font-display tracking-tight leading-[1.1] mb-6">
            <span className="gradient-text">Take control of your systems.</span>
          </h2>

          <p className="text-lg text-steel max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us what you're running manually today, and we'll show you how to turn it into
            a system — one that works, scales, and stays yours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a href="mailto:hello@easycarenet.com" className="btn-primary">
              <span className="inline-flex items-center gap-2">
                Start a Project
                <ArrowRight className="w-4 h-4" />
              </span>
            </a>
            <a href="#contact" className="btn-ghost inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Schedule a Call
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-steel/80">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" />
              <span>First system live in 7–14 days</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-electric animate-pulse-slow" />
              <span>Transparent pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse-slow" />
              <span>You own everything we build</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
