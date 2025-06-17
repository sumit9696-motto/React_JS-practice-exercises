import React from 'react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo">MyBrand</div>
        <ul className="nav-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to MyBrand</h1>
        <p>Your solution for modern web apps.</p>
        <a href="#cta" className="cta-button">Get Started</a>
      </header>

      <section id="features" className="features-section">
        <h2>Features</h2>
        <div className="features">
          <div className="feature-card">🚀 Fast</div>
          <div className="feature-card">📱 Responsive</div>
          <div className="feature-card">🔒 Secure</div>
        </div>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We help startups build great websites with ease and speed.</p>
      </section>

      <section id="cta" className="cta-section">
        <h2>Ready to start?</h2>
        <button className="cta-button">Contact Us</button>
      </section>

      <footer className="footer">
        <p>© 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
