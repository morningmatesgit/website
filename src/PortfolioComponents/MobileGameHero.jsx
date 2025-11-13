import React from "react";
import Breadcrumb from "../Breadcrumb";

const MobileGameHero = () => {
  return (
    <>
    <div className="breadcrumb-wrapper">
       <Breadcrumb
          items={[
            { label: "MorningMates", to: "/" },
            { label: "Portfolio", to: "/portfolio" },
            { label: "Mobile Game Development" },
          ]}
        />
    </div>
    <div className="MobileGameHero-container">
      {/* ✅ Breadcrumb */}
      
       
      

      {/* ✅ Content Section */}
      <div className="MobileGameHero-content">
        <div className="MobileGameHero-text">
          <h4 className="MobileGameHero-subtitle">
            EFFORTLESS MOBILE GAME DEVELOPMENT
          </h4>
          <h1 className="MobileGameHero-title">
            Mobile Game Development <br /> Services for Unity-based <br /> Projects
          </h1>
          <p className="MobileGameHero-description">
            By providing expert developers skilled in Unity, Timspark ensured seamless
            integration with the client's existing teams, offering flexible support to
            scale development capabilities.
          </p>

          <div className="MobileGameHero-review">
            <span className="MobileGameHero-review-text">REVIEWED ON</span>
            <span className="MobileGameHero-review-stars">★★★★★</span>
            <span className="MobileGameHero-review-text">
              Clutch <span style={{ fontWeight: "bold" }}>11</span> REVIEWS
            </span>
          </div>
        </div>

        {/* ✅ Stats Section */}
        <div className="MobileGameHero-stats">
          <div className="MobileGameHero-card">
            <h3 className="MobileGameHero-card-title">Client*</h3>
            <p>
              European mobile gaming studio with a vision to create games that resonate
              with players globally.
            </p>
            <p className="MobileGameHero-card-note">
              *Due to non-disclosure agreement (NDA) restrictions, we cannot provide
              any information about the client or the specifics of the case study.
            </p>
          </div>

          <div className="MobileGameHero-card">
            <h3 className="MobileGameHero-card-title">Project in numbers</h3>
            <div className="MobileGameHero-card-item">
              <span className="MobileGameHero-card-label">DURATION</span>
              <span className="MobileGameHero-card-value">Ongoing project</span>
            </div>
            <div className="MobileGameHero-card-item">
              <span className="MobileGameHero-card-label">TEAM</span>
              <span className="MobileGameHero-card-value">8 specialists</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileGameHero;
