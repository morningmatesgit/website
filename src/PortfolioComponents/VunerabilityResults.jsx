import React from 'react';


const VulnerabilityResults = () => {
  return (
    <div className="VulnerabilityResults-container">
      <div className="VulnerabilityResults-header">
        <h2 className="VulnerabilityResults-title">Project Results</h2>
        <p className="VulnerabilityResults-description">
          The project successfully transformed the client's cybersecurity posture, enabling a proactive approach to vulnerability management and enhancing overall operational efficiency.
        </p>
      </div>

      <div className="VulnerabilityResults-grid">
        <div className="VulnerabilityResults-card">
          <div className="VulnerabilityResults-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <line x1="12" y1="12" x2="12" y2="18"></line>
              <line x1="8" y1="14" x2="16" y2="14"></line>
            </svg>
          </div>
          <h3 className="VulnerabilityResults-card-heading">15x faster query performance</h3>
          <p className="VulnerabilityResults-card-text">
            Optimized queries and migrated the database to a modern infrastructure, achieving a significant boost in speed and efficiency.
          </p>
        </div>

        <div className="VulnerabilityResults-card">
          <div className="VulnerabilityResults-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 className="VulnerabilityResults-card-heading">99.9% uptime</h3>
          <p className="VulnerabilityResults-card-text">
            Ensured continuous platform availability by implementing robust, reliable, and well-tested infrastructure solutions.
          </p>
        </div>

        <div className="VulnerabilityResults-card">
          <div className="VulnerabilityResults-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="VulnerabilityResults-card-heading">100% test coverage</h3>
          <p className="VulnerabilityResults-card-text">
            Achieved full test coverage across the system, ensuring stability, minimizing bugs, and simplifying future updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VulnerabilityResults;