// HomePage.jsx
import React from "react";

export default function HomePage() {
  return (
    <div className="home">
      {/* SECTION 1 — HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to The Future</h1>
          <p>Experience ultra-modern design and cutting-edge technology.</p>
          <button className="hero-btn">Get Started</button>
        </div>
      </section>

      {/* SECTION 2 — FEATURES */}
      <section className="features">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Speed</h3>
            <p>Lightning-fast performance built for modern users.</p>
          </div>
          <div className="feature-card">
            <h3>Security</h3>
            <p>Top-level protection for all your data and activity.</p>
          </div>
          <div className="feature-card">
            <h3>Design</h3>
            <p>Premium quality visuals and smooth UI/UX.</p>
          </div>
          <div className="feature-card">
            <h3>Support</h3>
            <p>24/7 professional assistance whenever you need.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — SHOWCASE */}
      <section className="showcase">
        <div className="showcase-content">
          <h2>Next-Level Interface</h2>
          <p>
            Enjoy a futuristic user experience with animations, gradients,
            and powerful visuals.
          </p>
          <button className="showcase-btn">Explore More</button>
        </div>
        <div className="showcase-image"></div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="cta">
        <h2>Ready to Join?</h2>
        <p>Take the first step into the new generation.</p>
        <button className="cta-btn">Create Account</button>
      </section>
    </div>
  );
}
