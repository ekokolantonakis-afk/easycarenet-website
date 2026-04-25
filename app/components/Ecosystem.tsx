"use client";

import { motion } from "framer-motion";
import { QrCode, Receipt, Gift, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const products = [
  {
    icon: QrCode,
    name: "scanorderpay.ai",
    tagline: "QR ordering & instant payments",
    description:
      "Turn any table or counter into a digital ordering and payment terminal. Built for restaurants, cafés, bars, and fast-service retail.",
    benefits: [
      "Customer scans, orders, pays from phone",
      "Live kitchen & POS sync",
      "No app downloads required",
    ],
    href: "https://scanorderpay.ai",
    accent: "from-amber-400/15 to-brand-electric/10",
    iconColor: "text-amber-300",
    badge: "Hospitality",
  },
  {
    icon: Receipt,
    name: "cashproof.app",
    tagline: "Digital receipts & expense tracking",
    description:
      "Smart receipts, automatic categorization, and real-time expense visibility. A modern replacement for paper and spreadsheets.",
    benefits: [
      "Instant digital receipt capture",
      "AI-powered categorization",
      "Seamless accounting export",
    ],
    href: "https://cashproof.app",
    accent: "from-emerald-400/15 to-brand-electric/10",
    iconColor: "text-emerald-300",
    badge: "Finance",
  },
  {
    icon: Gift,
    name: "bonuscard.ai",
    tagline: "Loyalty that actually works",
    description:
      "A smart loyalty and engagement platform that turns one-time buyers into repeat customers — without punch cards or complicated tech.",
    benefits: [
      "Digital loyalty cards & rewards",
      "Customer segmentation & targeting",
      "Automated engagement campaigns",
    ],
    href: "https://bonuscard.ai",
    accent: "from-pink-400/15 to-brand-electric/10",
    iconColor: "text-pink-300",
    badge: "Retention",
  },
];

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="section relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(10, 36, 57, 0.5) 50%, transparent 100%)",
      }}
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-core/5 blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="The easycarenet Ecosystem"
          title="Your business runs on one connected system"
          description="Our flagship products plug directly into your website, workflows, and data — so you can add capability without adding complexity."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="surface-card rounded-2xl p-7 flex flex-col group relative overflow-hidden"
              >
                {/* Top badge row */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-steel/70 px-2 py-1 rounded bg-white/5 border border-white/5">
                    {product.badge}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-steel group-hover:text-brand-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
                    strokeWidth={2}
                  />
                </div>

                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${product.accent} border border-brand-electric/20 mb-5`}
                >
                  <Icon
                    className={`w-6 h-6 ${product.iconColor}`}
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="text-xl font-semibold font-display tracking-tight mb-1.5">
                  <span className="gradient-text">{product.name}</span>
                </h3>
                <div className="text-sm text-brand-cyan font-medium mb-4">
                  {product.tagline}
                </div>

                <p className="text-sm text-steel leading-relaxed mb-5">
                  {product.description}
                </p>

                <ul className="space-y-2 mt-auto">
                  {product.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2 text-xs text-white/80"
                    >
                      <span className="mt-1 w-1 h-1 rounded-full bg-brand-electric flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-steel max-w-xl mx-auto">
            Each product works standalone — or integrates deeply into the custom systems we
            build for your business. One team, one architecture, one long-term partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
