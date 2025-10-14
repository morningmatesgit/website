import React from 'react';

// Main React component.
const AutomatedRiskResults = () => {
  return (
    <div className="automated-risk-container">
      <div className="automated-content-section">
        <div className="automated-content-header">
          Solution & functionality
        </div>
        <p className="automated-content-text">
          To address the challenges, the team delivered a scalable and fully automated solution for <span style={{color: '#fff', fontWeight: 'bold'}}>direct material risk assessment</span>, designed to support complex supply chain risk management needs. Data from ERP systems, spreadsheets, and internal sources was integrated using <span style={{color: '#fff', fontWeight: 'bold'}}>Talend ETL pipelines</span> and modeled in <span style={{color: '#fff', fontWeight: 'bold'}}>Snowflake</span> using a <span style={{color: '#fff', fontWeight: 'bold'}}>Data Vault 2.0 architecture</span>, ensuring data consistency, traceability, and scalability across the supply chain.
        </p>
      </div>
      <div className="automated-cards-container">
        <div className="automated-card">
          <div className="automated-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fbbf24" stroke="none">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7z"/>
            </svg>
          </div>
          <p className="automated-card-text">
            The team implemented <span style={{color: '#fff', fontWeight: 'bold'}}>automated risk scoring using dbt</span>, transforming raw data into standardized, logic-driven risk indicators tailored to vendor reliability, material quality, and availability.
          </p>
        </div>
        <div className="automated-card">
          <div className="automated-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8b5cf6" stroke="none">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
          </div>
          <p className="automated-card-text">
            An internal automated testing framework, executed via <span style={{color: '#fff', fontWeight: 'bold'}}>GitLab CI/CD</span>, ensured robust <span style={{color: '#fff', fontWeight: 'bold'}}>data quality validation</span> at every stage, minimizing errors and maintaining trust in the outputs.
          </p>
        </div>
        <div className="automated-card">
          <div className="automated-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#60a5fa" stroke="none">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
              <path d="M12 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM16 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM8 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM16 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM16 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
            </svg>
          </div>
          <p className="automated-card-text">
            For business users, <span style={{color: '#fff', fontWeight: 'bold'}}>interactive Tableau dashboards</span> were developed, offering real-time visibility into vendor performance and material-level risks through filters and drill-downs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AutomatedRiskResults;