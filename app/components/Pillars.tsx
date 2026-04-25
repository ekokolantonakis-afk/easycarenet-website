"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Boxes,
  Sparkles,
  KeyRound,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Total Visibility. Absolute Control.",
    body:
      "Complete transparency across your systems and data — enabling precise, confident decision-making at every level.",
  },
  {
    icon: Users,
    title: "Integrated Partnership.",
    body:
      "We embed with your team, align to your goals, and build long-term partnerships that drive measurable outcomes.",
  },
  {
    icon: Boxes,
    title: "Reusable by Design. Scalable by Nature.",
    body:
      "Solutions architected for reuse, extension, and evolution — eliminating redundancy and accelerating growth.",
  },
  {
    icon: Sparkles,
    title: "Technology with Lasting Impact.",
    body:
      "We invest in digital capability that enables organizations and communities to adapt, grow, and lead.",
  },
  {
    icon: KeyRound,
    title: "Ownership Without Limits.",
    body:
      "You retain full control of your systems — with the flexibility to adapt, expand, and operate independently.",
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Our Principles"
          title="What drives every system we build"
          description="Five commitments that define how we deliver intelligent infrastructure — from first deployment to long-term evolution."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-6 flex flex-col group"
              >
                <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-core/20 to-brand-electric/10 border border-brand-electric/20 group-hover:border-brand-electric/50 transition-colors">
                  <Icon className="w-5 h-5 text-brand-cyan" strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-semibold text-white leading-snug mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-steel leading-relaxed">{pillar.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
