import Reveal from "./Reveal";

const services = [
  {
    title: "AI Systems & Agents",
    body: "Autonomous agents, retrieval-augmented copilots, and internal assistants grounded in your business data.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" />
      </svg>
    ),
  },
  {
    title: "Web Platforms",
    body: "Marketing sites, e-commerce, and B2B portals engineered for speed, SEO, and conversion.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M2 9h20M6 14h4" />
      </svg>
    ),
  },
  {
    title: "Custom Applications",
    body: "Internal tools, operational dashboards, and mobile apps built around how your team actually works.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M9 18h6" />
      </svg>
    ),
  },
  {
    title: "Process Automation",
    body: "Custom workflow engines that replace duct-taped Zapier chains — with versioning, replay, and observability.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 6h6a3 3 0 0 1 3 3v6" />
      </svg>
    ),
  },
  {
    title: "Data & Intelligence",
    body: "Pipelines, BI surfaces, and predictive models that turn operational telemetry into decisions.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l6-6 4 4 8-9" />
        <path d="M21 6V3M21 6h-3" />
      </svg>
    ),
  },
  {
    title: "Integrations",
    body: "ERP, CRM, accounting, logistics — connected with typed schemas, retries, and an audit trail.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 14a5 5 0 0 0 7.5.5l3-3a5 5 0 0 0-7-7l-1.5 1.5" />
        <path d="M14 10a5 5 0 0 0-7.5-.5l-3 3a5 5 0 0 0 7 7l1.5-1.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">What we build</span>
          <h2>Six disciplines. One delivery model.</h2>
          <p>Every engagement draws on the same modular foundation, so the work compounds — your second project always builds on your first.</p>
        </Reveal>
        <div className="svc-grid">
          {services.map((s) => (
            <Reveal key={s.title} className="svc">
              <div className="ic">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
