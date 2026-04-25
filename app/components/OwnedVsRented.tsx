import Reveal from "./Reveal";

const rented = [
  "Limited customization — bend your business to fit the tool.",
  "Vendor lock-in — leaving means losing your data and workflows.",
  "Data trapped across platforms — visibility costs an integration project.",
  "Monthly costs compound — every new seat, every new feature, every year.",
];

const owned = [
  "Built around your real process — not a generic template.",
  "Source and ownership handed over — full rights, no asterisks.",
  "Data and workflows stay under your control — exportable, portable, yours.",
  "Evolves with the business — extend, replace, or rewrite any module.",
];

export default function OwnedVsRented() {
  return (
    <section id="owned">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">Owned vs Rented</span>
          <h2>The difference between a tool you pay for<br />and a system you own.</h2>
          <p>Most companies stitch their operations together with rented SaaS. We build the alternative — modular systems that fit your real process, hand over fully, and grow with you.</p>
        </Reveal>
        <div className="ovr">
          <Reveal className="ovr-card rented">
            <span className="tag">Rented Software</span>
            <h3>Convenient at first. Constraining at scale.</h3>
            <ul className="lst">
              {rented.map((line, i) => (
                <li key={i}>
                  <span className="mk">×</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="ovr-card owned">
            <span className="tag">Owned Systems</span>
            <h3>Built for your business. Handed to you to run.</h3>
            <ul className="lst">
              {owned.map((line, i) => (
                <li key={i}>
                  <span className="mk">✓</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
