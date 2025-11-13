import React from "react";

import Breadcrumb from "../Breadcrumb";

const PointCloudSegmentation = () => {
  return (
    <>
    <div className="breadcrumb-wrapper">
      <Breadcrumb
        items={[
          { label: "MorningMates", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Point Cloud Segmentation" },
        ]}
      />
    </div>
    <div className="pcs-hero-section-container">
      

      <div className="pcs-hero-content">
        <h1 className="pcs-hero-title">
          Point Cloud Segmentation and BIM Conversion
        </h1>

        <p className="pcs-hero-description">
          A deep learning-powered solution that performs semantic and instance
          segmentation of point cloud data, converting it into accurate Building
          Information Models (BIM).
        </p>

        <div className="pcs-details">
          <div className="pcs-detail-item">
            <p className="pcs-detail-label">Industry</p>
            <p className="pcs-detail-text">
              Architecture, Engineering, and Construction (AEC)
            </p>
          </div>

          <div className="pcs-detail-item">
            <p className="pcs-detail-label">Type</p>
            <p className="pcs-detail-text">
              AI & Deep Learning, Data Engineering, BIM Integration
            </p>
          </div>

          <div className="pcs-detail-item">
            <p className="pcs-detail-label">Country</p>
            <p className="pcs-detail-text">Netherlands</p>
          </div>
        </div>

        <button className="pcs-cta-button">DOWNLOAD</button>
      </div>
    </div>
    </>
  );
};

export default PointCloudSegmentation;

