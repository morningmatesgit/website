import React from 'react';
import "../ServicePageCss/Data.css";

const DataObservabilityBenefits = () => {
  return (
    <div className="Data-observability-benefits-container">
      <h1 className="Data-observability-title">Level up your business with applied observability</h1>
      
      <div className="Data-benefits-grid">
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Improve reliability of reports</p>
        </div>
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Leverage data visualization</p>
        </div>
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Optimize data processing</p>
        </div>
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Improve system performance and data visibility</p>
        </div>
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Identify patterns and trends in data</p>
        </div>
        <div className="Data-benefit-card">
          <p className="Data-benefit-text">Realize data clustering</p>
        </div>
      </div>
    </div>
  );
};

export default DataObservabilityBenefits;