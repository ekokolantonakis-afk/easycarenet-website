"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M3 12c0-3 2-5 5-5s5 2 7 5c2 3 4 5 7 5s5-2 5-5-2-5-5-5-5 2-7 5c-2 3-4 5-7 5s-5-2-5-5z" />
            </svg>
          </span>
          <span>
            <span className="brand-name">
              easycare<b>net</b>
            </span>
            <span className="brand-tag">IT Solutions &amp; Services</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#stages">Stages</a>
          <a href="#services">Services</a>
          <a href="#usecases">Use Cases</a>
          <a href="#ecosystem">Ecosystem</a>
        </div>
        <a className="btn btn-primary" href="mailto:hello@easycarenet.com?subject=Start a Project">
          Start a Project
          <svg className="arr" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
