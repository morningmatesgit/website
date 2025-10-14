import React from 'react';
import "../ServicePageCss/Devops.css";

const DevOpsHireReasons = () => {
  return (
    <div className="DevOps-hire-reasons-container">
      <h1 className="DevOps-reasons-title">
        You might hire DevOps engineers or <br /> DevOps consulting if you
      </h1>
      
      <div className="DevOps-reasons-grid">
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Aim to build a DevOps team from scratch</p>
        </div>
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Plan to expand your DevOps department</p>
        </div>
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Consider moving to cloud</p>
        </div>
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Need to streamline software development and delivery process</p>
        </div>
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Want to strengthen your expertise with external DevOps consulting</p>
        </div>
        <div className="DevOps-reason-card">
          <p className="DevOps-reason-text">Strive to increase system scalability</p>
        </div>
      </div>
    </div>
  );
};

export default DevOpsHireReasons;