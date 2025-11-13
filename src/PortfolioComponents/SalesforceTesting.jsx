import React from "react";

import Breadcrumb from "../Breadcrumb";

const SalesforceTesting = () => {
  return (
    <>
    <div className="breadcrumb-wrapper">
      <Breadcrumb
        items={[
          { label: "MorningMates", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Salesforce Omnistudio Testing" },
        ]}
      />
    </div>
    <div className="salesforce-hero-section-container">
   
      

      
      <div className="salesforce-hero-content">
        

        <h1 className="salesforce-hero-title">
          Salesforce Omnistudio Testing for <br /> Insurance Company
        </h1>

        <p className="salesforce-hero-description">
          Testing and quality assurance (QA) development for a Salesforce-based
          insurance platform, designed to support operations for a leading
          global specialty insurer.
        </p>

        <button className="salesforce-cta-button">DOWNLOAD</button>
      </div>
    </div>
    </>
  );
};

export default SalesforceTesting;
