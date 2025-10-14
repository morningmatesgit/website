import React from 'react';


const DevOpsExpertise = () => {
  return (
    <div className="DevOps-expertise-container">
      <div className="DevOps-expertise-header">
        <h1 className="DevOps-header-title">DevOps expertise we offer</h1>
        <p className="DevOps-header-description">
          Rely on Timspark Teams as dedicated DevOps providers and strategic partners at every phase of your software development lifecycle — from initial design through development, testing, deployment, and software delivery.
        </p>
      </div>

      <div className="DevOps-services-grid">
        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V5l-5 5"></path>
              <path d="M12 5l5 5"></path>
              <path d="M5 22h14"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Continuous integration and delivery (CI/CD)</h3>
        </div>

        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18l4-4-4-4"></path>
              <path d="M12 22V5"></path>
              <path d="M12 2h0"></path>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="M6 14s-1.5 2-4 2"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Testing automation</h3>
        </div>

        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 12H7"></path>
              <path d="M12 17V7"></path>
              <path d="M19 12a7 7 0 1 0-7 7 7 7 0 0 0 7-7z"></path>
              <path d="M12 5V2"></path>
              <path d="M19 12h3"></path>
              <path d="M12 19v3"></path>
              <path d="M5 12H2"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Environment management</h3>
        </div>

        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
              <path d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Infrastructure monitoring</h3>
        </div>

        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
              <path d="M12 16a4 4 0 0 0 0-8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"></path>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="M22 12h-2"></path>
              <path d="M4 12H2"></path>
              <path d="M19.07 4.93l-1.42 1.42"></path>
              <path d="M6.34 17.66l-1.42 1.42"></path>
              <path d="M17.66 17.66l1.42 1.42"></path>
              <path d="M4.93 19.07l-1.42-1.42"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Configuration management</h3>
        </div>

        <div className="DevOps-service-card">
          <div className="DevOps-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18s-1-4-1.5-4.5c-1-.7-2-1.5-2.5-1.5-1.2 0-2.5.8-3.5 1.5l-2 2-3 3-1 1a2 2 0 0 0 2.8 2.8l1-1 3-3 2-2c.7-.5 1.5-1.5 1.5-2.5 0-1.2-.8-2.5-1.5-3.5s-4-1-4.5-1.5"></path>
              <path d="M22 13s-1-4-1.5-4.5c-1-.7-2-1.5-2.5-1.5-1.2 0-2.5.8-3.5 1.5l-2 2"></path>
              <path d="M2 11s1 4 1.5 4.5c1 .7 2 1.5 2.5 1.5 1.2 0 2.5-.8 3.5-1.5l2-2"></path>
            </svg>
          </div>
          <h3 className="DevOps-service-heading">Platform as a Service (PaaS)</h3>
        </div>
      </div>
    </div>
  );
};

export default DevOpsExpertise;