import React from 'react';


const CyberComplianceAssessment = () => {
  return (
    <div className="Compliance-assessment-container">
      <div className="Compliance-header">
        <h1 className="Compliance-title">Compliance assessment</h1>
        <p className="Compliance-description">
          Our specialists review all the established benchmarks and procedures in the company to determine how they align with regulatory mandates such as third-party criteria and legal requirements. As a result, our clients get step-by-step guidance on meeting the particular criteria for obtaining particular certifications.
        </p>
      </div>
      
      <div className="Compliance-content-box">
        <div className="Compliance-grid">
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">PCI (Payment Card Industry Data Security Standard)</h3>
            <p className="Compliance-item-text">for projects that utilize payment systems</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">ISO 27001</h3>
            <p className="Compliance-item-text">for information security management systems</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">HIPAA (Health Insurance Portability and Accountability Act)</h3>
            <p className="Compliance-item-text">for healthcare projects</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">ISO 9001</h3>
            <p className="Compliance-item-text">for quality management systems</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">SOC 2 (Second revision of System and Organization Controls)</h3>
            <p className="Compliance-item-text">for businesses working with the American market</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">ISO 13485:2016</h3>
            <p className="Compliance-item-text">for quality management systems in medical hardware projects</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">GDPR (General Data Protection Regulation)</h3>
            <p className="Compliance-item-text">for businesses working with European users' data</p>
          </div>
          <div className="Compliance-item">
            <h3 className="Compliance-item-heading">NIST CSF (NIST Security Framework)</h3>
            <p className="Compliance-item-text">for risk management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberComplianceAssessment;