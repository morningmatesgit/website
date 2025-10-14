import React from 'react';


const QAFlexibleModels = () => {
  return (
    <div className="QAFlexibleModels-container">
      <div className="QAFlexibleModels-header">
        <h1 className="QAFlexibleModels-title">Flexible work models for QA outsourcing services</h1>
        <p className="QAFlexibleModels-description">
          Timspark offers flexible work models for QA outsourcing services to meet your unique needs:
        </p>
      </div>
      
      <div className="QAFlexibleModels-grid">
        <div className="QAFlexibleModels-card">
          <div className="QAFlexibleModels-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <line x1="12" y1="12" x2="12" y2="18"></line>
              <line x1="8" y1="14" x2="16" y2="14"></line>
            </svg>
          </div>
          <h3 className="QAFlexibleModels-card-heading">Software quality assurance as a service (SQAaaS)</h3>
          <p className="QAFlexibleModels-card-text">
            We gather and analyze your data, needs, and requirements to deliver high-quality software through comprehensive testing
          </p>
        </div>
        
        <div className="QAFlexibleModels-card">
          <div className="QAFlexibleModels-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </div>
          <h3 className="QAFlexibleModels-card-heading">CI/CD for software quality assurance</h3>
          <p className="QAFlexibleModels-card-text">
            We integrate QA solutions into your CI/CD pipeline for continuous integration and delivery, ensuring bug-free software and faster releases.
          </p>
        </div>
        
        <div className="QAFlexibleModels-card">
          <div className="QAFlexibleModels-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 10a2 2 0 1 0-4 0v4a2 2 0 1 0 4 0v-4z"></path>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="QAFlexibleModels-card-heading">Automated software QA</h3>
          <p className="QAFlexibleModels-card-text">
            Based on your project goals, we implement test automation with tools like Selenium and JMeter to accelerate software testing and reduce costs.
          </p>
        </div>

        <div className="QAFlexibleModels-card">
          <div className="QAFlexibleModels-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3 className="QAFlexibleModels-card-heading">QA outsourcing (manual testing & automation testing)</h3>
          <p className="QAFlexibleModels-card-text">
            Opt for a cost-effective solution with our QA outsourcing services, combining manual testing and test automation for optimal results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QAFlexibleModels;