"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Globe,
  Smartphone,
  Workflow,
  Database,
  Network,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const services = [
  {
    icon: Brain,
    title: "AI Systems",
    description:
      "Practical, embedded intelligence. Chatbots, decision engines, adaptive workflows, and internal AI assistants that deliver real business value — not buzzwords.",
    tags: ["Chatbots", "Assistants", "Automation"],
  },
  {
    icon: Globe,
    title: "Websites & Web Platforms",
    description:
      "Fast, modern, conversion-focused websites and web applications. Built for speed, accessibility, and long-term flexibility — never locked to one vendor.",
    tags: ["Next.js", "WordPress", "Shopify"],
  },
  {
    icon: Smartphone,
    title: "Mobile & Web Apps",
    description:
      "Custom applications for your team and your customers. Booking, ordering, loyalty, client portals — everything your business needs in one place.",
    tags: ["iOS", "Android", "PWA"],
  },
  {
    icon: Workflow,
    title: "Process Automation",
    description:
      "Turn repetitive work into automated flows. Connect your tools, automate bookings and messaging, remove manual errors — save real hours every week.",
    tags: ["n8n", "Zapier", "Custom"],
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description:
      "Structured, secure, actionable data. Dashboards, reporting, and pipelines that turn scattered information into clear operational visibility.",
    tags: ["Dashboards", "ETL", "BI"],
  },
  {
    icon: Network,
    title: "Integration Architecture",
    description:
      "Connect everything — payments, CRM, inventory, communication. One unified operational ecosystem that replaces fragmented tools with real system thinking.",
    tags: ["APIs", "Webhooks", "Orchestration"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="section relative"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(10, 36, 57, 0.4) 50%, transparent 100%)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="What We Build"
          title="Systems for every part of your business"
          description="Six connected disciplines — delivered as one cohesive architecture. Start with what you need today, expand into a full intelligent system over time."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-7 flex flex-col group relative overflow-hidden"
              >
                {/* Decorative gradient corner */}
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-brand-core/10 blur-2xl group-hover:bg-brand-electric/15 transition-all duration-700" />

                <div className="relative">
                  <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-core/15 to-transparent border border-brand-electric/20 group-hover:border-brand-electric/50 transition-colors">
                    <Icon
                      className="w-5 h-5 text-brand-cyan"
                      strokeWidth={1.7}
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-sm text-steel leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-steel"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
