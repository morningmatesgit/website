import React from 'react';
import Breadcrumb from '../Breadcrumb';


const StaffingHero = () => {
  return (
    <>
    <div className='breadcrumb-wrapper'>
      <Breadcrumb
        items={[
          { label: "MorningMates", to: "/" },
          { label: "Engagement Models", to: "/EngagementModels" },
          { label: "Staff Augmentation" }
        ]}
      />
    </div>
    <div className="StaffingHero-section-container">
    
      <div className="StaffingHero-content">
        <h1 className="StaffingHero-title">
          IT Staff Augmentation Company
        </h1>

        <div className="StaffingHero-clutch-review">
          <span className="StaffingHero-review-text">REVIEWED ON</span>
          <div className="StaffingHero-stars">
            {Array(5).fill().map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="none"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <span className="StaffingHero-clutch-text">Clutch</span>
          <span className="StaffingHero-review-count">9 REVIEWS</span>
        </div>

        <p className="StaffingHero-description">
          Enhance your expertise and technical capabilities, not just your team size.
          Select seasoned IT talents to build software solutions on time and cost-effectively.
        </p>

        <button className="StaffingHero-cta-button">SCALE YOUR TEAM</button>
      </div>
    </div>
    </>
  );
};

export default StaffingHero;
