import React from 'react';

const TeamDifferentiator = () => {
  return (
    <div className="TeamDifferentiator-container">
      <div className="TeamDifferentiator-header">
        <h1 className="TeamDifferentiator-title">What sets our dedicated teams apart</h1>
        <p className="TeamDifferentiator-description">
          At Timspark, we craft software that turns complex business challenges into competitive advantages. Here is why clients choose us:
        </p>
      </div>

      <div className="TeamDifferentiator-grid">
        <div className="TeamDifferentiator-card">
          <div className="TeamDifferentiator-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h3 className="TeamDifferentiator-card-heading">Engineering excellence</h3>
          <p className="TeamDifferentiator-card-text">
            30+ dedicated teams are driven not just to meet, but to exceed expectations with solutions that are both elegant and robust.
          </p>
        </div>
        
        <div className="TeamDifferentiator-card">
          <div className="TeamDifferentiator-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="8"></line>
            </svg>
          </div>
          <h3 className="TeamDifferentiator-card-heading">Strategic insight</h3>
          <p className="TeamDifferentiator-card-text">
            We delve deep into your business needs, aligning our tech expertise with your long-term goals.
          </p>
        </div>

        <div className="TeamDifferentiator-card">
          <div className="TeamDifferentiator-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="13 17 18 12 13 7"></polyline>
              <polyline points="6 17 11 12 6 7"></polyline>
            </svg>
          </div>
          <h3 className="TeamDifferentiator-card-heading">Swift delivery</h3>
          <p className="TeamDifferentiator-card-text">
            With Timspark, agility meets precision, ensuring faster go-to-market without compromising quality.
          </p>
        </div>

        <div className="TeamDifferentiator-card">
          <div className="TeamDifferentiator-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3h-2z"></path>
              <line x1="12" y1="20" x2="12" y2="22"></line>
              <line x1="7" y1="20" x2="17" y2="20"></line>
            </svg>
          </div>
          <h3 className="TeamDifferentiator-card-heading">Cost-effective solutions</h3>
          <p className="TeamDifferentiator-card-text">
            Fast and consistent delivery helps us avoid roadblocks and additional costs in the development process and bring the maximum value possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamDifferentiator;