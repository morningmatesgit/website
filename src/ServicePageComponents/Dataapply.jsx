import React from 'react';
import "../ServicePageCss/Data.css";
const DataAppliedObservability = () => {
  return (
    <div className="Data-applied-observability-container">
      <div className="Data-observability-header">
        <h1 className="Data-header-title">Applied observability</h1>
        <div className="Data-header-content">
          <p className="Data-stats-text">
            Based on the Gartner "Top Strategic Technology Trends 2023 Report," by 2026, 70% of organizations that effectively <span className="Data-highlight">apply observability</span> will experience reduced decision-making latency, giving them a competitive edge in key business or IT processes.
          </p>
          <p className="Data-main-description">
            With Timspark's expertise, you will be able to level up your business and use active and passive metadata cases for your competitive advantage. Employ a highly coordinated and integrated approach to observable data to enable the shortest latency from action to reaction and proactive planning of business decisions.
          </p>
        </div>
      </div>

      <div className="Data-steps-grid">
        <div className="Data-step-card">
          <span className="Data-step-number">01</span>
          <p className="Data-step-text">
            Reframe the focus of the organization from monitoring and reacting to applying observability
          </p>
        </div>
        <div className="Data-step-card">
          <span className="Data-step-number">02</span>
          <p className="Data-step-text">
            Drive proactive decision making with the shortest possible latency
          </p>
        </div>
        <div className="Data-step-card">
          <span className="Data-step-number">03</span>
          <p className="Data-step-text">
            Pave the way for organizational adoption of applied observability
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAppliedObservability;