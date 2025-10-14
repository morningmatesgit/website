import React from 'react';
import './Web.css';

const WebHero = () => {
  return (
    <div className="web-hero-section">
      <div className="background-gradient"></div>
      <div className="hero-content">
        <h1>Web development services</h1>
        <p>We create web solutions that convert, engage, and grow your business. Let's bring your vision to life.</p>
        <button className="cta-button">GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default WebHero;