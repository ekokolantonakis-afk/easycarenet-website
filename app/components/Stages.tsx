"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Building2, Check } from "lucide-react";
import SectionTitle from "./SectionTitle";

const stages = [
  {
    tier: "Start",
    icon: Rocket,
    accent: "from-emerald-400/20 to-brand-electric/10",
    border: "border-emerald-400/30",
    badge: "text-emerald-300",
    range: "from €500",
    headline: "Get online, get organized, get moving",
    description:
      "Perfect for small businesses launching their digital presence. Modern websites, essential automations, and practical tools that work from day one.",
    features: [
      "Modern business website",
      "Simple booking & contact flows",
      "Email / WhatsApp automation",
      "Fast delivery — 7 to 14 days",
    ],
  },
  {
    tier: "Grow",
    icon: TrendingUp,
    accent: "from-brand-core/25 to-brand-electric/15",
    border: "border-brand-core/40",
    badge: "text-brand-cyan",
    range: "€1,500 – €5,000",
    headline: "Connect your operations into one system",
    description:
      "For scaling companies ready to move past fragmented tools. Dashboards, integrations, and workflows that give your team real visibility and control.",
    features: [
      "Custom dashboards & client portals",
      "Payment, CRM & data integrations",
      "Workflow & process automation",
      "Practical AI chatbots and assistants",
    ],
    featured: true,
  },
  {
    tier: "Scale",
    icon: Building2,
    accent: "from-violet-400/20 to-brand-electric/10",
    border: "border-violet-400/30",
    badge: "text-violet-300",
    range: "Custom",
    headline: "Build the infrastructure your business runs on",
    description:
      "For advanced organizations that need custom platforms and intelligent systems. Deep AI integration, bespoke architecture, long-term evolution.",
    features: [
      "Custom platforms & applications",
      "AI systems & decision engines",
      "Enterprise-grade architecture",
      "Ongoing partnership & evolution",
    ],
  },
];

export default function Stages() {
  return (
    <section id="stages" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Built for Every Stage"
          title="Start simple. Grow smart."
          description="Whether you're launching your first website or scaling operational infrastructure — we meet you where you are, and build systems that grow with you."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.tier}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative surface-card rounded-3xl p-8 flex flex-col ${
                  stage.featured ? "lg:scale-[1.03] shadow-glow" : ""
                }`}
              >
                {stage.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-brand-core to-brand-electric text-[10px] font-semibold tracking-widest uppercase text-white shadow-glow">
                    Most Popular
                  </div>
                )}

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.accent} border ${stage.border} mb-6`}
                >
                  <Icon className={`w-6 h-6 ${stage.badge}`} strokeWidth={1.7} />
                </div>

                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-3xl font-semibold font-display tracking-tight text-white">
                    {stage.tier}
                  </h3>
                  <span className="text-sm text-steel font-mono">{stage.range}</span>
                </div>

                <p className="text-base text-white/90 leading-snug mb-4 font-medium">
                  {stage.headline}
                </p>

                <p className="text-sm text-steel leading-relaxed mb-6">
                  {stage.description}
                </p>

                <ul className="space-y-3 mb-8 flex-1">
                  {stage.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <span className="mt-0.5 inline-flex w-5 h-5 items-center justify-center rounded-full bg-brand-electric/15 border border-brand-electric/30 flex-shrink-0">
                        <Check className="w-3 h-3 text-brand-cyan" strokeWidth={2.5} />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-sm font-medium transition-all ${
                    stage.featured
                      ? "btn-primary"
                      : "btn-ghost"
                  }`}
                >
                  <span>
                    {stage.featured
                      ? "Start Growing"
                      : stage.tier === "Start"
                      ? "Get Started"
                      : "Talk to Us"}
                  </span>
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xs text-steel/70 mt-10 max-w-2xl mx-auto"
        >
          Every engagement includes a Care Plan option (from €50/month) for hosting, updates,
          and ongoing support — plus Growth Plans for continuous automation and AI optimization.
        </motion.p>
      </div>
    </section>
  );
}
