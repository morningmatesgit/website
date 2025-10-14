import React from 'react';
import './Web.css';

const WebDevProcess = () => {
  return (
    <div className="process-container">
      <div className="process-header">
        <h1 className="process-main-title">Our web development process</h1>
        <p className="process-description">
          Bring in individual developers or scale up with as many tech specialists as needed. Our experienced engineers can provide web development services in collaboration with your in-house team on a short-term or during busy times, at any stage of the project development.
        </p>
      </div>
      <div className="process-grid">
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                <path d="M12.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                <path d="M22 13h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
                <path d="M2 13h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"></path>
                <path d="M16 13l-4 4-4-4"></path>
                <path d="M12 17l4 4-4 4"></path>
                <path d="M12 17l-4 4"></path>
              </svg>
            </div>
            <span className="process-number">01</span>
          </div>
          <h3 className="process-card-title">Ideation & discovery</h3>
          <p className="process-card-description">
            Researching the client needs, setting project goals, and brainstorming possible solutions.
          </p>
        </div>
        
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="21" x2="12" y2="3"></line>
                <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9z"></path>
              </svg>
            </div>
            <span className="process-number">02</span>
          </div>
          <h3 className="process-card-title">Planning & designing</h3>
          <p className="process-card-description">
            Designing software architecture, and outlining the development process.
          </p>
        </div>
        
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <span className="process-number">03</span>
          </div>
          <h3 className="process-card-title">Development</h3>
          <p className="process-card-description">
            Transforming the approved specifications into functioning software.
          </p>
        </div>
        
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 12h5M2 12h5M12 2v5M12 17v5M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"></path>
              </svg>
            </div>
            <span className="process-number">04</span>
          </div>
          <h3 className="process-card-title">Testing</h3>
          <p className="process-card-description">
            Assessing the product for bugs, errors, and functionality issues.
          </p>
        </div>
        
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </div>
            <span className="process-number">05</span>
          </div>
          <h3 className="process-card-title">Deployment</h3>
          <p className="process-card-description">
            Get the finalized software product to the production environment.
          </p>
        </div>
        
        <div className="process-card">
          <div className="process-card-header">
            <div className="process-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="15 9 12 12 9 9"></polyline>
                <path d="M12 12v5"></path>
              </svg>
            </div>
            <span className="process-number">06</span>
          </div>
          <h3 className="process-card-title">Maintenance & support</h3>
          <p className="process-card-description">
            Monitoring the performance, addressing arising issues and implementing updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebDevProcess;