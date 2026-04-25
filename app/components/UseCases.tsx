import Reveal from "./Reveal";

const cases = [
  {
    title: "Restaurants",
    proof: "POS, ordering, kitchen operations, and loyalty in a single owned stack.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11h18l-2 9H5z" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: "Clinics",
    proof: "Patient flow, records, reminders, and reporting — with audit-ready privacy controls.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20" />
      </svg>
    ),
  },
  {
    title: "Retail",
    proof: "Inventory, multi-store sync, e-commerce, and loyalty on one operating fabric.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
      </svg>
    ),
  },
  {
    title: "Distribution",
    proof: "Pricing, logistics, credit, and B2B portals — with live visibility from order to delivery.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="1" />
        <path d="M16 10h4l2 4v4h-6z" />
        <circle cx="6" cy="20" r="2" />
        <circle cx="18" cy="20" r="2" />
      </svg>
    ),
  },
  {
    title: "Services",
    proof: "Booking, CRM, proposals, and project ops in one connected operator surface.",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18M8 4v4M16 4v4" />
      </svg>
    ),
  },
];

export default function UseCases() {
  return (
    <section id="usecases">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Use cases</span>
          <h2>Five industries. The same operating playbook.</h2>
          <p>Different vocabulary, same patterns: capture the work, automate the routine, surface the exceptions, give the operator control.</p>
        </Reveal>
        <div className="uc-grid">
          {cases.map((c) => (
            <Reveal key={c.title} className="uc">
              <div className="ic">{c.icon}</div>
              <h3>{c.title}</h3>
              <p className="proof">{c.proof}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
