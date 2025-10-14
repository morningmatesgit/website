import React from 'react';
import "../ServicePageCss/Ai.css";

const AiEthicalAi = () => {
  return (
    <div className="ai-ethical-ai-container">
      <div className="ai-ethical-ai-header">
        <h1 className="ai-ethical-ai-title">Ethical AI</h1>
        <div className="ai-ethical-ai-description-wrapper">
          <p className="ai-ethical-ai-statistic">
            Over 60% of Americans worry about AI hiring bias.
            <br />
            Source: <a href="https://www.pewresearch.org/" target="_blank" rel="noopener noreferrer" className="ai-source-link">Pew Research Center</a>
          </p>
          <p className="ai-ethical-ai-main-description">
            When tackling AI challenges, we value ethics and regulations. We address algorithm bias and research gaps to deliver ethical artificial intelligence development services. At the AI consultancy stage, you will be aware of the risks.
          </p>
        </div>
      </div>

      <div className="ai-ethical-ai-features-grid">
        <div className="ai-feature-card">
          <div className="ai-feature-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="12" y1="21" x2="12" y2="3"></line>
              <path d="M12 3a9 9 0 0 0 9 9 9 9 0 0 0-9 9 9 9 0 0 0-9-9 9 9 0 0 0 9-9z"></path>
            </svg>
          </div>
          <h3 className="ai-feature-title">Bias-free AI</h3>
          <p className="ai-feature-description">
            We're committed to eliminating bias in our AI for fair outcomes.
          </p>
        </div>

        <div className="ai-feature-card">
          <div className="ai-feature-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <h3 className="ai-feature-title">Transparency</h3>
          <p className="ai-feature-description">
            We keep our AI practices transparent, so you know how it works.
          </p>
        </div>

        <div className="ai-feature-card">
          <div className="ai-feature-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="ai-feature-title">Ongoing audits</h3>
          <p className="ai-feature-description">
            Regular reviews maintain ethical AI in line with standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiEthicalAi;