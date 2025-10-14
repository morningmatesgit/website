import React from 'react';
import "../ServicePageCss/Data.css";

const DataHeroSection = () => {
  return (
     <div className="Data-hero-section-container">
    {/* //   <div className="Data-breadcrumb">
    //     <a href="#" className="Data-breadcrumb-item">Timspark</a>
    //     <span className="Data-breadcrumb-separator">›</span>
    //     <a href="#" className="Data-breadcrumb-item">Services</a>
    //     <span className="Data-breadcrumb-separator">›</span>
    //     <a href="#" className="Data-breadcrumb-item Data-breadcrumb-active">Data management services</a>
    //   </div> */}

      <div className="Data-hero-content">
        <h1 className="Data-hero-title">
          Data management & <br /> analytics services
        </h1>
        <p className="Data-hero-description">
          With proficiency in data management, data processing algorithms, and data visualization, our
          teams are well-equipped to help your organization optimize its business processes, improve
          customer relationship management, and tackle market uncertainty head-on.
        </p>
        <button className="Data-cta-button">SEE OUR OFFERING</button>
      </div>
    </div>
  );
};

export default DataHeroSection;