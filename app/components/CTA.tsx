import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="cta-strip">
          <span className="eyebrow">Get in touch</span>
          <h2 style={{ marginTop: 18 }}>
            <span className="grad">Ready to engineer your system?</span>
          </h2>
          <p>Tell us where you are — first website, growing operations, or scaling infrastructure — and we&apos;ll map a build that fits your stage.</p>
          <div className="row">
            <a className="btn btn-primary" href="mailto:hello@easycarenet.com?subject=Start a Project">
              Start a Project
              <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="mailto:hello@easycarenet.com">hello@easycarenet.com</a>
          </div>
          <div className="reassure">Athens, Greece · Engineered for Control. Built to Evolve.</div>
        </Reveal>
      </div>
    </section>
  );
}
