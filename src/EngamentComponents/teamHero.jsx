import React from 'react';
import Breadcrumb from '../Breadcrumb';

const StaffingHero = () => {
  return (
    <div className="StaffingHero-section-container">
      {/* <div className="StaffingHero-breadcrumb">
        <a href="#" className="StaffingHero-breadcrumb-item">Timspark</a>
        <span className="StaffingHero-breadcrumb-separator">›</span>
        <a href="#" className="StaffingHero-breadcrumb-item">Services</a>
        <span className="StaffingHero-breadcrumb-separator">›</span>
        <a href="#" className="StaffingHero-breadcrumb-item StaffingHero-breadcrumb-active">IT Staff Augmentation Services</a>
      </div> */}
       <div className="StaffingHero-breadcrumb">
        <Breadcrumb 
          items={[
            { label: "MorningMates", to: "/" },
            { label: "EngagementModels", to: "/EngagementModels" },
            { label: "Staff Augementation" }
          ]}
        />
      </div>
      

      <div className="StaffingHero-content">
        <h1 className="StaffingHero-title">
          IT Staff Augmentation Company
        </h1>
        <div className="StaffingHero-clutch-review">
          <p className="StaffingHero-review-text">REVIEWED ON</p>
          <div className="StaffingHero-stars">
            <span className="StaffingHero-star">★</span>
            <span className="StaffingHero-star">★</span>
            <span className="StaffingHero-star">★</span>
            <span className="StaffingHero-star">★</span>
            <span className="StaffingHero-star">★</span>
          </div>
          <p className="StaffingHero-review-text">9 REVIEWS</p>
        </div>
        <p className="StaffingHero-description">
          Enhance your expertise and technical capabilities, not just your team size. Select seasoned IT talents to build software solutions on time and cost-effectively.
        </p>
        <div className="StaffingHero-cta-buttons">
          <button className="StaffingHero-cta-button">SCALE YOUR TEAM</button>
        </div>
      </div>

    
    </div>
  );
};

export default StaffingHero;