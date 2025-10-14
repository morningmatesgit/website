import React from 'react';
import "../ServicePageCss/Cyber.css";

const CybersecurityServices = () => {
  return (
    <div className="Cybersecurity-services-container">
      <div className="Cybersecurity-services-header">
        <h1 className="Cybersecurity-header-title">Cybersecurity services we provide</h1>
        <p className="Cybersecurity-header-description">
          Discover tailored solutions from Timspark designed to keep your operations safe and resilient. Your security is our priority.
        </p>
      </div>

      <div className="Cybersecurity-services-grid">
        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18l4-4-4-4"></path>
              <path d="M12 22V5"></path>
              <path d="M12 2h0"></path>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="M6 14s-1.5 2-4 2"></path>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">Cybersecurity testing</h3>
        </div>

        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <path d="M12 11V8"></path>
              <path d="M12 15h0"></path>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">Security assessment</h3>
        </div>

        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <rect x="8" y="12" width="8" height="4"></rect>
              <line x1="12" y1="16" x2="12" y2="18"></line>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">Compliance assessment</h3>
        </div>

        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12" y2="18"></line>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">Mobile application security</h3>
        </div>

        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10H6c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path>
              <path d="M12 12V4"></path>
              <path d="M12 4L16 8"></path>
              <path d="M12 4L8 8"></path>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">Cloud security</h3>
        </div>

        <div className="Cybersecurity-service-card">
          <div className="Cybersecurity-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="15 9 12 12 9 9"></polyline>
              <line x1="12" y1="12" x2="12" y2="18"></line>
            </svg>
          </div>
          <h3 className="Cybersecurity-service-heading">SIEM services</h3>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityServices;