import React from 'react';
import "../ServicePageCss/Mobile.css";

const MobileHeroSection = () => {
  return (
    <div className="mobile-hero-section-container">
      {/* <div className="mobile-breadcrumb">
        <a href="#" className="mobile-breadcrumb-item">Timspark</a>
        <span className="mobile-breadcrumb-separator">›</span>
        <a href="#" className="mobile-breadcrumb-item">Services</a>
        <span className="mobile-breadcrumb-separator">›</span>
        <a href="#" className="mobile-breadcrumb-item mobile-breadcrumb-active">Mobile App Development & Consulting Services</a>
      </div> */}

      <div className="mobile-hero-content">
        <h1 className="mobile-hero-title">
          Mobile app development and <br /> consulting services
        </h1>
        <div className="mobile-clutch-rating">
          <span className="mobile-reviewed-on">REVIEWED ON</span>
          <div className="mobile-stars">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <span className="mobile-clutch-text">Clutch</span>
          <span className="mobile-reviews-count">9 REVIEWS</span>
        </div>
        <p className="mobile-hero-description">
          At Timspark, we have been creating mobile app development services since 2008. Our unique
          business model fosters full-fledged development teams that provide the highest quality work
          and help our clients overcome challenges with bespoke technology solutions.
        </p>
        <button className="mobile-cta-button">SEE OUR OFFERING</button>
      </div>
    </div>
  );
};

export default MobileHeroSection;