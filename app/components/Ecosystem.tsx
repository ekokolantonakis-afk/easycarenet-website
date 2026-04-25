import Reveal from "./Reveal";

const products = [
  {
    name: "scanorderpay.ai",
    pill: "Hospitality",
    body: "Scan, order, and pay at the table. Replaces three vendors with one owned stack — without changing the kitchen flow.",
    mark: (
      <span className="eco-mark">
        scanorder<span>pay</span>
        <span className="dotai">.ai</span>
      </span>
    ),
  },
  {
    name: "cashproof.app",
    pill: "Finance",
    body: "Receipt verification and expense capture for teams that move fast — automated review, audit-ready exports.",
    mark: (
      <span className="eco-mark">
        cashproof<span>.app</span>
      </span>
    ),
  },
  {
    name: "bonuscard.ai",
    pill: "Retention",
    body: "A digital loyalty engine that learns from every transaction — built for retail, restaurants, and services.",
    mark: (
      <span className="eco-mark">
        bonus<span>card</span>
        <span className="dotai">.ai</span>
      </span>
    ),
  },
];

export default function Ecosystem() {
  return (
    <section id="ecosystem">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Our ecosystem</span>
          <h2>We productize what we build.</h2>
          <p>Three sister products born from real client engagements — each one a reusable module in the easycarenet operating fabric.</p>
        </Reveal>
        <div className="eco-grid">
          {products.map((p) => (
            <Reveal key={p.name} className="eco">
              <div className="eco-screen">{p.mark}</div>
              <div className="eco-meta">
                <h3>{p.name}</h3>
                <span className="pill">{p.pill}</span>
              </div>
              <p>{p.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
