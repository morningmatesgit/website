import React from 'react';
import "../ServicePageCss/Devops.css";

const DevOpsHeroSection = () => {
  return (
     <div className="DevOps-hero-section-container">
    {/* //   <div className="DevOps-breadcrumb">
    //     <a href="#" className="DevOps-breadcrumb-item">Timspark</a>
    //     <span className="DevOps-breadcrumb-separator">›</span>
    //     <a href="#" className="DevOps-breadcrumb-item">Services</a>
    //     <span className="DevOps-breadcrumb-separator">›</span>
    //     <a href="#" className="DevOps-breadcrumb-item DevOps-breadcrumb-active">DevOps management & consulting</a>
    //   </div> */}

      <div className="DevOps-hero-content">
        <h1 className="DevOps-hero-title">
          DevOps consulting services
        </h1>
        <p className="DevOps-hero-description">
          Discover high-quality, tailored DevOps consulting and management services from Timspark. Our expert teams consolidate development and operations, implementing best-in-class agile practices to establish efficient and transparent software delivery cycles.
        </p>
        <div className="DevOps-cta-buttons">
          <button className="DevOps-cta-button">SEE OUR OFFERING</button>
          <button className="DevOps-cta-button DevOps-secondary-button">REQUEST CV</button>
        </div>
      </div>
    </div>
  );
};

export default DevOpsHeroSection;