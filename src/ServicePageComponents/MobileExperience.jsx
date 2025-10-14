import React from 'react';
import "../ServicePageCss/Devops.css";

const MobileExperience = () => {
  return (
    <div className="mobile-experience-container">
      <h1 className="mobile-experience-title">Years of experience in mobile development and consulting</h1>
      <div className="mobile-stats-grid">
        <div className="mobile-stat-card">
          <h2 className="mobile-stat-number">15+</h2>
          <p className="mobile-stat-description">
            years experience in mobile development and consulting
          </p>
        </div>
        <div className="mobile-stat-card">
          <h2 className="mobile-stat-number">100+</h2>
          <p className="mobile-stat-description">
            projects of different complexity and scale
          </p>
        </div>
        <div className="mobile-stat-card">
          <h2 className="mobile-stat-number">10+</h2>
          <p className="mobile-stat-description">
            full-fledged teams with unique expertise
          </p>
        </div>
        <div className="mobile-stat-card">
          <h2 className="mobile-stat-number">60+</h2>
          <p className="mobile-stat-description">
            mid-senior developers with high performance and motivation
          </p>
        </div>
      </div>
      <div className="mobile-award-card">
        <div className="mobile-quote-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 20l-4-4v4H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6v4l4-4v12z"></path>
          </svg>
        </div>
        <p className="mobile-award-text">
          Timspark has been acknowledged as a **Top Mobile App Development company.**
        </p>
        <a href="#" className="mobile-learn-more-link">
          LEARN MORE
          
        </a>
        <div className="mobile-goodfirms-logo">
          
          <p>Top Mobile App Development Company</p>
        </div>
      </div>
    </div>
  );
};

export default MobileExperience;