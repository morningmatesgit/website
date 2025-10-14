import React from 'react';
import "../ServicePageCss/Cyber.css";

const CyberSecurityAssessmentGrid = () => {
  return (
    <div className="Security-assessment-container">
      <h1 className="Security-assessment-title">Security assessment</h1>
      
      <div className="Security-grid">
        <div className="Security-card">
          <p className="Security-card-text">Risk management</p>
        </div>
        <div className="Security-card">
          <p className="Security-card-text">Security assurance</p>
        </div>
        <div className="Security-card">
          <p className="Security-card-text">User cyber resilience</p>
        </div>
        <div className="Security-card">
          <p className="Security-card-text">Incident response</p>
        </div>
        <div className="Security-card">
          <p className="Security-card-text">Supply chain management</p>
        </div>
        <div className="Security-card">
          <p className="Security-card-text">Compliance management</p>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityAssessmentGrid;