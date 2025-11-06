import React from "react";
import Breadcrumb from "../Breadcrumb"; 

const SalesforceTesting = () => {
  return (
    <div className="salesforce-container">

      {/* ✅ Breadcrumb */}
      <div className="salesforce-breadcrumb-wrapper">
        <Breadcrumb
          items={[
            { label: "MorningMates", to: "/" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Salesforce Omnistudio Testing" }
          ]}
        />
      </div>

      {/* ✅ Main Content */}
      <div className="salesforce-card-container">

        <div className="salesforce-text-section">
          <h3 className="salesforce-subtitle">SALESFORCE OMNISTUDIO TESTING</h3>

          <h1 className="salesforce-title">
            Salesforce Omnistudio Testing for Insurance Company
          </h1>

          <p className="salesforce-description">
            Testing and quality assurance (QA) development for a Salesforce-based insurance platform,
            designed to support operations for a leading global specialty insurer.
          </p>

          <a href="#" className="salesforce-download-button">DOWNLOAD</a>
        </div>

      </div>
    </div>
  );
};

export default SalesforceTesting;

