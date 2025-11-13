import React from "react";

import Breadcrumb from "../Breadcrumb";

const AutomatedRisk = () => {
  return (
<>
    <div className="breadcrumb-wrapper">
       <Breadcrumb
        items={[
          { label: "MorningMates", to: "/" },
          { label: "Portfolio", to: "/portfolio" },
          { label: "Direct Material Risk Assessment" },
        ]}
      />
    </div>
    <div className="automatedrisk-hero-section-container">
     

      <div className="automatedrisk-hero-content">
        <h1 className="automatedrisk-hero-title">
          Direct Material Risk Assessment: <br /> Snowflake-Based Data Solution
        </h1>

        <p className="automatedrisk-hero-description">
          A global pharmaceutical leader partnered with us to build a direct
          material risk assessment solution using Snowflake. By combining
          advanced data integration, automation, and interactive dashboards, the
          platform provides real-time risk insights across the supply chain. Our
          data integration and analytics solutions, combined with visualization
          capabilities, enhanced the client's risk management operations by
          providing a scalable platform that supports informed strategic
          decision-making.
        </p>

        <p className="automatedrisk-hero-disclosure">
          *Due to NDA restrictions, specific client details and case study
          insights cannot be disclosed.
        </p>
      </div>
    </div>
    </>
  );
};

export default AutomatedRisk;
