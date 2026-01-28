import { useState, useEffect } from 'react';
import './Hero.css';

// Launch date: 30 days from the user's first visit
const LAUNCH_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

function getTimeLeft() {
  const diff = Math.max(0, LAUNCH_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Hero() {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {/* Gold ornamental frame */}
      <div className="hero-frame">
        <div className="hero-frame-corner hero-frame-tl"></div>
        <div className="hero-frame-corner hero-frame-tr"></div>
        <div className="hero-frame-corner hero-frame-bl"></div>
        <div className="hero-frame-corner hero-frame-br"></div>

        <div className="hero-content">
          <span className="hero-badge fade-in-delay-1">
            <span className="hero-badge-text">Launching Soon</span>
          </span>

          {/* Steam effect */}
          <div className="steam-container" aria-hidden="true">
            <div className="steam steam-1"></div>
            <div className="steam steam-2"></div>
            <div className="steam steam-3"></div>
          </div>

          {/* Chai cup SVG */}
          <div className="chai-cup-wrapper fade-in-delay-1" aria-hidden="true">
            <svg className="chai-cup-svg" width="80" height="72" viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20h48v6c0 20-10 36-24 36S12 46 12 26v-6z" fill="var(--brown-deep)" opacity="0.9"/>
              <path d="M12 20h48v6c0 20-10 36-24 36S12 46 12 26v-6z" stroke="var(--gold)" strokeWidth="1.5" fill="none"/>
              <ellipse cx="36" cy="20" rx="24" ry="5" fill="var(--brown)" stroke="var(--gold)" strokeWidth="1"/>
              <ellipse cx="36" cy="20" rx="18" ry="3.5" fill="var(--gold)" opacity="0.2"/>
              <path d="M60 28c6-1 12 2 12 10s-6 12-12 10" stroke="var(--gold)" strokeWidth="1.5" fill="none"/>
              <rect x="20" y="62" width="32" height="3" rx="1.5" fill="var(--gold)" opacity="0.6"/>
              <path d="M28 36c2-4 6-6 8-4s0 6-2 8" stroke="var(--gold-light)" strokeWidth="0.8" opacity="0.5" fill="none"/>
              <path d="M38 32c2-4 5-5 7-3s0 5-2 7" stroke="var(--gold-light)" strokeWidth="0.8" opacity="0.4" fill="none"/>
            </svg>
          </div>

          {/* Mandala ornament divider */}
          <div className="mandala-divider fade-in-delay-1" aria-hidden="true">
            <svg width="200" height="24" viewBox="0 0 200 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="12" x2="70" y2="12" stroke="var(--gold)" strokeWidth="0.5" opacity="0.5"/>
              <line x1="130" y1="12" x2="200" y2="12" stroke="var(--gold)" strokeWidth="0.5" opacity="0.5"/>
              <circle cx="100" cy="12" r="8" stroke="var(--gold)" strokeWidth="0.8" fill="none" opacity="0.7"/>
              <circle cx="100" cy="12" r="4" stroke="var(--gold)" strokeWidth="0.6" fill="none" opacity="0.5"/>
              <circle cx="100" cy="12" r="1.5" fill="var(--gold)" opacity="0.6"/>
              <path d="M92 12 L100 4 L108 12 L100 20 Z" stroke="var(--gold)" strokeWidth="0.6" fill="none" opacity="0.4"/>
              <circle cx="76" cy="12" r="2" fill="var(--gold)" opacity="0.3"/>
              <circle cx="124" cy="12" r="2" fill="var(--gold)" opacity="0.3"/>
            </svg>
          </div>

          <h1 className="hero-tagline fade-in-delay-1">
            Brew the Royal Tradition
          </h1>
          <p className="hero-desc fade-in-delay-2">
            Inspired by the regal kitchens of India's royal households, Chai Culture
            brings you a premium instant chai premix crafted with the finest spices
            and heritage recipes — delivering an authentic, luxurious cup every time.
          </p>
          <div className="countdown fade-in-delay-3">
            {['days', 'hours', 'minutes', 'seconds'].map((unit) => (
              <div className="countdown-item" key={unit}>
                <span className="countdown-value">
                  {String(time[unit]).padStart(2, '0')}
                </span>
                <span className="countdown-label">{unit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
