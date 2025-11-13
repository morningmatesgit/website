import React from 'react';
import './CustomSoftware.css';
import Breadcrumb from './Breadcrumb';

function SoftwareDevelopmentHero() {
  return (
    <>
      {/* Breadcrumb kept outside for free positioning */}
      <div className="breadcrumb-wrapper">
        <Breadcrumb
          items={[
            { label: "MorningMates", to: "/" },
            { label: "Services", to: "/services" },
            { label: "Software Development " }
          ]}
        />
      </div>

      {/* Hero Section */}
      <div className="software-hero-section">
        <div className="software-hero-content">
          <h1 className="software-hero-title">
            Software development <br /> services
          </h1>

          <div className="software-clutch-rating">
            <span className="software-reviewed-on">REVIEWED ON</span>
            <div className="software-stars">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
            </div>
            <span className="software-clutch-text">Clutch</span>
            <span className="software-reviews-count">9 REVIEWS</span>
          </div>

          <p className="software-hero-description">
            Whether you want to develop an industry-specific solution, revamp
            software infrastructure in your company, or launch a mobile
            application to excel in the marketplace, Timspark is here to
            deliver. From strategic consulting or custom MVP software
            development to execution, we cater to your diverse business needs
            and technological objectives.
          </p>

          <button className="software-cta-button">CONTACT US</button>
        </div>
      </div>
    </>
  );
}

export default SoftwareDevelopmentHero;

