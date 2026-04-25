"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Building,
} from "lucide-react";
import SectionTitle from "./SectionTitle";

const useCases = [
  {
    icon: UtensilsCrossed,
    industry: "Restaurants & Cafés",
    headline: "From manual service to automated operations",
    outcomes: [
      "QR menu & ordering (scanorderpay.ai)",
      "Table-side payments",
      "Kitchen & inventory sync",
      "Customer loyalty built in",
    ],
    result: "Faster service, fewer mistakes, higher ticket value",
  },
  {
    icon: Stethoscope,
    industry: "Clinics & Services",
    headline: "From chaos to structured client systems",
    outcomes: [
      "Online booking & reminders",
      "Client database & records",
      "AI assistant for inquiries",
      "Automated follow-up flows",
    ],
    result: "Zero missed appointments, better client experience",
  },
  {
    icon: ShoppingBag,
    industry: "Retail & E-commerce",
    headline: "From disconnected tools to one unified view",
    outcomes: [
      "Website + inventory tracking",
      "Payment integration",
      "Customer engagement (bonuscard.ai)",
      "Automated order workflows",
    ],
    result: "Full visibility, repeat customers, scalable growth",
  },
  {
    icon: Briefcase,
    industry: "Agencies & Freelancers",
    headline: "From manual admin to client systems",
    outcomes: [
      "Client portal & project tracking",
      "Automated invoicing",
      "Proposal & contract flows",
      "Unified communication hub",
    ],
    result: "Professional presence, faster closes, lower admin",
  },
  {
    icon: Building,
    industry: "Growing Companies",
    headline: "From tools to infrastructure",
    outcomes: [
      "Custom operational dashboards",
      "Deep system integrations",
      "AI-powered process automation",
      "Data pipelines & reporting",
    ],
    result: "Scalable operations, clear visibility at every level",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="section">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="How We Help"
          title="Real systems. Real businesses. Real outcomes."
          description="We don't sell generic software. We build systems tailored to how your industry actually works — and deploy them fast."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <motion.article
                key={uc.industry}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: (i % 3) * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-7 flex flex-col"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand-core/20 to-brand-electric/10 border border-brand-electric/20 flex-shrink-0">
                    <Icon
                      className="w-5 h-5 text-brand-cyan"
                      strokeWidth={1.7}
                    />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-cyan mb-1">
                      {uc.industry}
                    </div>
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {uc.headline}
                    </h3>
                  </div>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {uc.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-start gap-2 text-sm text-steel"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-electric flex-shrink-0" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-steel/60 mb-1.5">
                    Result
                  </div>
                  <p className="text-sm text-white/90 leading-snug">
                    {uc.result}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
