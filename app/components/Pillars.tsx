import Reveal from "./Reveal";

const pillars = [
  {
    num: "01",
    title: "Total Visibility. Absolute Control.",
    body: "Complete command over your processes and data with secure, intelligent systems built for clarity and confidence.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 5v7c0 5 3.5 8 8 10 4.5-2 8-5 8-10V5z" />
        <path d="M8 13l2 2 4-4" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Integrated Partnership.",
    body: "We embed with your team, align to your goals, and build long-term partnerships that drive meaningful business outcomes.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="7" cy="9" r="3" />
        <circle cx="17" cy="9" r="3" />
        <path d="M5 20c0-3 4-4 7-4s7 1 7 4" />
        <path d="M10 9c1 1 3 1 4 0" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Reusable by Design. Scalable by Nature.",
    body: "Modular solutions built to be reused, extended, and scaled — maximizing value and accelerating time to impact.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="8" height="8" rx="1.5" />
        <rect x="13" y="3" width="8" height="8" rx="1.5" />
        <rect x="8" y="13" width="8" height="8" rx="1.5" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Technology with Lasting Impact.",
    body: "We invest in people, communities, and digital education to enable a smarter, more inclusive, future-ready society.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22V14" />
        <circle cx="12" cy="8" r="4" />
        <circle cx="6" cy="11" r="2.5" />
        <circle cx="18" cy="11" r="2.5" />
        <path d="M12 8v-4" />
        <path d="M9 5l3-2 3 2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "You Own It. We Empower It.",
    body: "Solutions delivered with full rights and flexibility — you own, control, and evolve your systems without limitations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
        <path d="M14 3v6h6" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pillars">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">The Foundation</span>
          <h2>Five principles. One operating standard.</h2>
          <p>Every system we build — from a single website to enterprise-grade AI infrastructure — is grounded in the same five commitments.</p>
        </Reveal>
        <div className="pillars">
          {pillars.map((p) => (
            <Reveal key={p.num} className="pillar">
              <div className="num">{p.num}</div>
              <div className="ic">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
