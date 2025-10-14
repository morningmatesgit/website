import React from 'react';
import "../ServicePageCss/Ai.css";

const AiHeroSection = () => {
  return (
    <div className="ai-hero-section-container">
      {/* <div className="ai-breadcrumb">
        <a href="#" className="ai-breadcrumb-item">Timspark</a>
        <span className="ai-breadcrumb-separator">›</span>
        <a href="#" className="ai-breadcrumb-item">Services</a>
        <span className="ai-breadcrumb-separator">›</span>
        <a href="#" className="ai-breadcrumb-item ai-breadcrumb-active">Artificial intelligence software development</a>
      </div> */}

      <div className="ai-hero-content">
        <h1 className="ai-hero-title">
          AI software development <br /> services
        </h1>
        <div className="ai-clutch-rating">
          <span className="ai-reviewed-on">REVIEWED ON</span>
          <div className="ai-stars">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <span className="ai-clutch-text">Clutch</span>
          <span className="ai-reviews-count">9 REVIEWS</span>
        </div>
        <p className="ai-hero-description">
          We craft tailored AI solutions that drive innovation, automate processes, and enhance decision-making. From computer vision to predictive analytics, our expertise helps transform your business with cutting-edge AI technologies.
        </p>
        <button className="ai-cta-button">SEE OUR OFFERING</button>
      </div>
    </div>
  );
};

export default AiHeroSection;