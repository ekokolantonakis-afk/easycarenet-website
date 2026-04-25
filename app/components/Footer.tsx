export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot">
          <div>
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
            <p className="blurb">Owned business infrastructure — systems, apps, automations, and AI agents that you control. Engineered in Athens, Greece.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li><a href="#stages">Stages</a></li>
              <li><a href="#pillars">Principles</a></li>
              <li><a href="mailto:hello@easycarenet.com">Contact</a></li>
              <li><a href="#contact">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5>Solutions</h5>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#usecases">Use Cases</a></li>
              <li><a href="#owned">Owned vs Rented</a></li>
            </ul>
          </div>
          <div>
            <h5>Ecosystem</h5>
            <ul>
              <li><a href="#ecosystem">scanorderpay.ai</a></li>
              <li><a href="#ecosystem">cashproof.app</a></li>
              <li><a href="#ecosystem">bonuscard.ai</a></li>
            </ul>
          </div>
          <div>
            <h5>Legal</h5>
            <ul>
              <li><a href="#contact">Privacy</a></li>
              <li><a href="#contact">Terms</a></li>
              <li><a href="#contact">GDPR</a></li>
              <li><a href="#contact">Imprint</a></li>
            </ul>
          </div>
        </div>
        <div className="foot-meta">
          <div>© 2026 easycare net company · Athens, Greece</div>
          <div className="social">
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22zM8 8h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v7.44h-4.56v-6.6c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V22H8z" />
              </svg>
            </a>
            <a href="#" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.16c-3.2.7-3.87-1.37-3.87-1.37-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55C20.21 21.39 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </a>
            <a href="mailto:hello@easycarenet.com" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
