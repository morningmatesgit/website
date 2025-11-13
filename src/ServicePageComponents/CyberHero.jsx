import React from 'react';
import "../ServicePageCss/Cyber.css";
  import Breadcrumb from '../Breadcrumb';

const CybersecurityHeroSection = () => {
  return (
<>
    <div className='breadcrumb-wrapper'>
       <Breadcrumb
       items={[
          { label: "MorningMates", to: "/" },
          { label: "Services", to: "/services" },
          { label: "Cybersecurity Services" } // no `to` → this becomes active
        ]}
  
      />
    </div>
    <div className="Cybersecurity-hero-section-container">
    
          

      <div className="Cybersecurity-hero-content">
        <h1 className="Cybersecurity-hero-title">
          Managed cybersecurity services
        </h1>
        <p className="Cybersecurity-hero-description">
          Our expert team stands ready to safeguard your digital fortress. Shield your business from cyber threats, protect sensitive data, and ensure uninterrupted operations.
        </p>
        <div className="Cybersecurity-cta-buttons">
          <button className="Cybersecurity-cta-button">REQUEST SERVICES</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default CybersecurityHeroSection;