import React from "react";

import Breadcrumb from "../Breadcrumb";

const Carbon = () => {
  return (
    <>
    <div className="breadcrumb-wrapper">
      <Breadcrumb
        items={[
          { label: "MorningMates", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Carbon Capture Technology" },
        ]}
      />
    </div>
    <div className="carbon-hero-section-container">
      

      <div className="carbon-hero-content">
        <h4 className="carbon-text-eyebrow">INDUSTRIAL IOT SOLUTION</h4>
        <h1 className="carbon-hero-title">
          Carbon Capture <br /> Technology Solution
        </h1>
        <p className="carbon-hero-description">
          A cloud-based industrial IoT solution built for real-time data
          processing and communication. It uses MQTT for efficient data
          transfer, Docker for flexible deployment, and Solara with FastAPI for
          seamless integration with the IoT cloud. Designed for reliability and
          scalability on Google Cloud Platform (GCP).
        </p>
        <button className="carbon-cta-button">DOWNLOAD</button>
      </div>
    </div>
    </>
  );
};

export default Carbon;
