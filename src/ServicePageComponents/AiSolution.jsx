import React from 'react';
import "../ServicePageCss/Ai.css";

const AiSolutions = () => {
  return (
    <div className="ai-solutions-container">
      <h1 className="ai-solutions-title">Artificial intelligence solutions we build</h1>

      <div className="ai-solutions-grid">
        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 className="ai-solution-name">Agentic AI</h3>
        </div>

        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-3 3a5 5 0 0 0-1.5 3.54"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l3-3a5 5 0 0 0 1.5-3.54"></path>
            </svg>
          </div>
          <h3 className="ai-solution-name">AI Reasoning and Frontier Models</h3>
        </div>

        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <h3 className="ai-solution-name">Predictive Analytics</h3>
        </div>

        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 9V6.5a2.5 2.5 0 0 0-2.5-2.5H5.5A2.5 2.5 0 0 0 3 6.5V17a2.5 2.5 0 0 0 2.5 2.5h11A2.5 2.5 0 0 0 21 17v-2.5"></path>
              <polyline points="3 8 7 8 7 21 3 21"></polyline>
              <path d="M7 11.5v4"></path>
              <path d="M12 11.5v4"></path>
              <path d="M17 11.5v4"></path>
              <path d="M3 11.5h18"></path>
            </svg>
          </div>
          <h3 className="ai-solution-name">Computer Vision</h3>
        </div>

        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="15 9 12 12 9 9"></polyline>
              <path d="M12 12v5"></path>
            </svg>
          </div>
          <h3 className="ai-solution-name">AI for Cybersecurity</h3>
        </div>

        <div className="ai-solution-card">
          <div className="ai-solution-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="23 7 16 12 23 17 23 7"></polygon>
              <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
            </svg>
          </div>
          <h3 className="ai-solution-name">Video Generation with AI</h3>
        </div>
      </div>
    </div>
  );
};

export default AiSolutions;