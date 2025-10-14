import React from 'react';


const AutomatedResults = () => {
  return (
    <div className="Automated-container">
      <div className="Automated-header">
        <h2 className="Automated-title">Results and business value</h2>
        <p className="Automated-subtitle">
          The improvements delivered tangible business outcomes:
        </p>
      </div>

      <div className="Automated-results-grid">
        <div className="Automated-card Automated-card-1">
          <span className="Automated-card-number">01</span>
          <p className="Automated-card-text">
            Queries became **multiple times faster**, dramatically improving user experience.
          </p>
        </div>

        <div className="Automated-card Automated-card-2">
          <span className="Automated-card-number">02</span>
          <p className="Automated-card-text">
            **Strong unit test coverage** allowed safe and quick rollout of new functionality.
          </p>
        </div>

        <div className="Automated-card Automated-card-3">
          <span className="Automated-card-number">03</span>
          <p className="Automated-card-text">
            **Optimized database structure**, reduced infrastructure overhead, and maintenance costs.
          </p>
        </div>

        <div className="Automated-card Automated-card-4">
          <span className="Automated-card-number">04</span>
          <p className="Automated-card-text">
            The client can now access vulnerability analytics in **real time**, strengthening their ability to proactively mitigate risks.
          </p>
        </div>
      </div>

      <div className="Automated-cta-card">
        <div className="Automated-cta-content">
          <span className="Automated-cta-quote-icon">"</span>
          <p className="Automated-cta-text">
            Ready to strengthen your cybersecurity? Discover how Timspark's expertise in vulnerability management solutions, continuous security validation, and cyber risk analytics platforms can help safeguard your business.
          </p>
        </div>
        <button className="Automated-cta-button">
          LEARN MORE <span>→</span>
        </button>
      </div>
    </div>
  );
};

export default AutomatedResults;