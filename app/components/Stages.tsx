import Reveal from "./Reveal";

const stages = [
  {
    num: "01",
    label: "Start",
    title: "First systems, professionally done.",
    summary: "Your first website, your first automation, your first AI agent. Get the basics right from day one — without the agency overhead.",
    audience: "Clinics · restaurants · single-store retail · solo founders",
  },
  {
    num: "02",
    label: "Grow",
    title: "Connected operations.",
    summary: "Expand to multi-channel commerce, integrate your existing stack, and train your first AI assistant on your own data.",
    audience: "Distributors · regional chains · multi-location operators",
  },
  {
    num: "03",
    label: "Scale",
    title: "Operational AI infrastructure.",
    summary: "Agent organizations, compound learning systems, and custom internal applications running the operating fabric of your business.",
    audience: "Enterprise ops · holding companies · multi-entity groups",
  },
];

export default function Stages() {
  return (
    <section id="stages">
      <div className="container">
        <Reveal className="sec-head">
          <span className="eyebrow">For every stage</span>
          <h2>Start. Grow. Scale.<br />One partner across all three.</h2>
          <p>Whether you&apos;re shipping your first website or running a multi-entity holding company, we meet you at the right altitude — and stay with you as you climb.</p>
        </Reveal>
        <div className="stages">
          {stages.map((s) => (
            <Reveal key={s.num} className="stage">
              <div className="num-track">{s.num}</div>
              <div className="label">{s.label}</div>
              <h3>{s.title}</h3>
              <p className="summary">{s.summary}</p>
              <div className="audience">
                <b>Built for</b>
                {s.audience}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
