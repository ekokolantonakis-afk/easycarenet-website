"use client";

import SystemNetwork from "./SystemNetwork";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <SystemNetwork />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow1" aria-hidden="true" />
      <div className="hero-glow2" aria-hidden="true" />
      <div className="hero-glow3" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="hero-bracket tl" aria-hidden="true" />
      <div className="hero-bracket tr" aria-hidden="true" />
      <div className="hero-bracket bl" aria-hidden="true" />
      <div className="hero-bracket br2" aria-hidden="true" />

      <div className="hero-wrap" style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div className="hero-logo">
          <img src="/logo.png" alt="easycarenet" />
        </div>

        <span className="eyebrow">AI Systems · Applications · Automation</span>
        <h1 style={{ marginTop: 18 }}>
          <span className="grad">Engineered for Control.</span>
          <br />
          <span className="grad">Built to Evolve.</span>
        </h1>
        <p className="lede">
          Intelligent systems, applications, and automation for businesses at every stage — from your first website to full operational infrastructure.
        </p>

        <div className="hero-cta">
          <a className="btn btn-primary" href="mailto:hello@easycarenet.com?subject=Start Your System">
            Start Your System
            <svg className="arr" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn btn-ghost" href="#services">Explore Solutions</a>
        </div>

        <div className="hero-badges">
          <span className="hbadge">AI-Native Intelligence</span>
          <span className="hbadge">Enterprise-Grade Security</span>
          <span className="hbadge">Built for Performance</span>
          <span className="hbadge">Cloud Agile</span>
          <span className="hbadge">Future Ready</span>
        </div>

        <div className="scroll-ind">
          <span />
          Scroll
        </div>
      </div>
    </header>
  );
}
