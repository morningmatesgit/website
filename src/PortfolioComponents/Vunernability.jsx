import React from 'react';


const Vulnerability = () => {
  return (
    <div className="Vulnerability-container">
      <div className="Vulnerability-header">
        <h2 className="Vulnerability-title">Solution & functionality</h2>
        <p className="Vulnerability-description">
          To address these challenges, the development team implemented a comprehensive **refactoring and optimization** strategy:
        </p>
      </div>

      <div className="Vulnerability-grid">
        <div className="Vulnerability-card">
          <div className="Vulnerability-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4h-2z"></path>
              <line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="7" y1="20" x2="17" y2="20"></line>
            </svg>
          </div>
          <p className="Vulnerability-card-text">
            Moved data from **MongoDB to SQL** to achieve faster query performance.
          </p>
        </div>

        <div className="Vulnerability-card">
          <div className="Vulnerability-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <p className="Vulnerability-card-text">
            Optimized service architecture using **microservices** and **microfrontend** principles.
          </p>
        </div>

        <div className="Vulnerability-card">
          <div className="Vulnerability-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <p className="Vulnerability-card-text">
            Achieved **100% unit test coverage**, ensuring reliability and reducing regression risks.
          </p>
        </div>

        <div className="Vulnerability-card">
          <div className="Vulnerability-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </div>
          <p className="Vulnerability-card-text">
            Introduced **Kafka** for asynchronous processing and **Redis** for caching.
          </p>
        </div>
      </div>

      <div className="Vulnerability-footer">
        <p className="Vulnerability-footer-text">
          The solution was tailored to the client's needs by prioritizing query **speed, data accuracy**, and **flexibility** for feature expansion.
        </p>
        <p className="Vulnerability-additional-info">
          Our team migrated the system from MongoDB to SQL, optimized queries, and refactored the backend using microservices. With 100% unit test coverage, the platform now provides faster insights, continuous validation of security controls, and integration with vulnerability intelligence sources.
        </p>
      </div>
    </div>
  );
};

export default Vulnerability;