"use client";

import Logo from "./Logo";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { label: "AI Systems", href: "#services" },
      { label: "Websites", href: "#services" },
      { label: "Apps", href: "#services" },
      { label: "Automation", href: "#services" },
      { label: "Data & Dashboards", href: "#services" },
    ],
  },
  {
    title: "Ecosystem",
    links: [
      { label: "scanorderpay.ai", href: "https://scanorderpay.ai" },
      { label: "cashproof.app", href: "https://cashproof.app" },
      { label: "bonuscard.ai", href: "https://bonuscard.ai" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#pillars" },
      { label: "Use Cases", href: "#use-cases" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo size="md" showTagline />
            <p className="mt-5 text-sm text-steel leading-relaxed max-w-xs">
              Intelligent systems, applications, and automation for businesses at every stage.
            </p>
            <p className="mt-4 text-xs text-steel/70 tracking-wide">
              Engineered for Control. Built to Evolve.
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-cyan mb-4">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-steel hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-steel/70">
          <div>
            &copy; {new Date().getFullYear()} easycarenet &mdash; IT Solutions &amp; Services Group. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a
              href="mailto:hello@easycarenet.com"
              className="hover:text-white transition-colors"
            >
              hello@easycarenet.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
