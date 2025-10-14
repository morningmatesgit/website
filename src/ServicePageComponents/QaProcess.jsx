import React from 'react';


const QAProcess = () => {
  return (
    <div className="QAProcess-container">
      <div className="QAProcess-header">
        <h1 className="QAProcess-title">Our process for outsource software quality assurance</h1>
        <p className="QAProcess-description">
          We implement the right skills of seasoned QA engineers at every stage of the development process, to provide you with comprehensive end-to-end qa testing services.
        </p>
      </div>
      
      <div className="QAProcess-grid">
        <div className="QAProcess-card">
          <div className="QAProcess-card-icon-number">
            <div className="QAProcess-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
              </svg>
            </div>
            <span className="QAProcess-number">01</span>
          </div>
          <h3 className="QAProcess-card-heading">Planning:</h3>
          <p className="QAProcess-card-text">
            We develop a robust QA strategy and outline the software testing process to ensure all quality assurance measures are in place before development begins.
          </p>
        </div>
        
        <div className="QAProcess-card">
          <div className="QAProcess-card-icon-number">
            <div className="QAProcess-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="8" y1="16" x2="16" y2="16"></line>
                <line x1="8" y1="8" x2="16" y2="8"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <span className="QAProcess-number">02</span>
          </div>
          <h3 className="QAProcess-card-heading">Design:</h3>
          <p className="QAProcess-card-text">
            We create acceptance test cases and scenarios, implementing test automation with advanced testing tools like Selenium to enhance efficiency.
          </p>
        </div>

        <div className="QAProcess-card">
          <div className="QAProcess-card-icon-number">
            <div className="QAProcess-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <span className="QAProcess-number">03</span>
          </div>
          <h3 className="QAProcess-card-heading">Implementation:</h3>
          <p className="QAProcess-card-text">
            Our QA team conducts test runs, tracks defects, and performs regression testing and performance testing, delivering comprehensive reports on progress.
          </p>
        </div>
        
        <div className="QAProcess-card">
          <div className="QAProcess-card-icon-number">
            <div className="QAProcess-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 18l4-4-4-4"></path>
                <path d="M12 22V5"></path>
                <path d="M12 2h0"></path>
                <circle cx="9" cy="9" r="2"></circle>
                <path d="M6 14s-1.5 2-4 2"></path>
              </svg>
            </div>
            <span className="QAProcess-number">04</span>
          </div>
          <h3 className="QAProcess-card-heading">Stabilization:</h3>
          <p className="QAProcess-card-text">
            We verify fixed defects and conduct regression testing to ensure modifications maintain software quality.
          </p>
        </div>

        <div className="QAProcess-card">
          <div className="QAProcess-card-icon-number">
            <div className="QAProcess-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
            <span className="QAProcess-number">05</span>
          </div>
          <h3 className="QAProcess-card-heading">Delivery:</h3>
          <p className="QAProcess-card-text">
            In the final stage, we perform acceptance testing, verify deliverables, and provide detailed test reports to confirm your high-quality software meets all requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QAProcess;