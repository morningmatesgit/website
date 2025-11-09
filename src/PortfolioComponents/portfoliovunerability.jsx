import React from 'react';
import Breadcrumb from '../Breadcrumb';

const PortfolioVulnerability = () => {
  return (
    <div className="PortfolioVulnerability-container">
    
      <div className="PortfolioVulnerability-breadcrumb">
        <Breadcrumb
          items={[
            { label: "MorningMates", to: "/" },
            { label: "Portfolio", to: "/Portfolio" },
            { label: "Vulnerability Management Solution" }
          ]}
        />
      </div>

      <div className="PortfolioVulnerability-content-wrapper">
        <h1 className="PortfolioVulnerability-title">
          Enterprise Vulnerability Management Solution
        </h1>

        <p className="PortfolioVulnerability-description">
          Our team helped the client develop a cybersecurity platform designed to find and showcase detailed analytics on exposures and vulnerabilities. The system provides clients with fast, accurate insights into their security posture, enabling proactive risk management and improved cyber resilience.
        </p>

        <p className="PortfolioVulnerability-disclosure">
          *Certain details are covered by an NDA and cannot be disclosed.
        </p>

        <div className="PortfolioVulnerability-details-grid">
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">INDUSTRY:</h4>
            <p className="PortfolioVulnerability-detail-value">Cybersecurity</p>
          </div>
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">TYPE:</h4>
            <p className="PortfolioVulnerability-detail-value">
              Data Integration, Data Analytics, Automated Testing, BI Dashboard Development
            </p>
          </div>
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">REGION:</h4>
            <p className="PortfolioVulnerability-detail-value">EMEA</p>
          </div>
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">TEAM SIZE:</h4>
            <p className="PortfolioVulnerability-detail-value">10+ specialists</p>
          </div>
        </div>

        <div className="PortfolioVulnerability-details-grid PortfolioVulnerability-details-tech-services">
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">TECHNOLOGIES:</h4>
            <p className="PortfolioVulnerability-detail-value">
              Node.js, NestJS, React (TypeScript), SQL, MongoDB, Microfrontend, Microservices, Kafka, Redis, Jenkins
            </p>
          </div>
          <div className="PortfolioVulnerability-detail-item">
            <h4 className="PortfolioVulnerability-detail-label">SERVICES:</h4>
            <p className="PortfolioVulnerability-detail-value">
              Full-cycle Development, Database Migration, Backend Refactoring, Query Optimization, Unit Test Coverage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioVulnerability;
