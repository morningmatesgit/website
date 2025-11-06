import React from 'react';
import Breadcrumb from '../Breadcrumb';

const MobileGameHero = () => {
  return (
    <>
      <div className="carbon-game-container">
             <Breadcrumb
       items={[
          { label: "MorningMates", to: "/" },
          { label: "Portfolio", to: "/Portfolio" },
          { label: "Mobile Game Development" } // no `to` → this becomes active
        ]}
  
      />
        <div className="carbon-game-content">
          <div className="carbon-game-header">
            <h4 className="carbon-game-eyebrow">EFFORTLESS MOBILE GAME DEVELOPMENT</h4>
            <h1 className="carbon-game-title">Mobile Game Development<br/>Services for Unity-based<br/>Projects</h1>
            <p className="carbon-game-description">
              By providing expert developers skilled in Unity, Timspark ensured
              seamless integration with the client's existing teams, offering
              flexible support to scale development capabilities.
            </p>
            <div className="carbon-game-review">
              <span className="carbon-game-review-text">REVIEWED ON</span>
              <span className="carbon-game-review-stars">★★★★★</span>
              <span className="carbon-game-review-text">Clutch <span style={{ fontWeight: 'bold' }}>11</span> REVIEWS</span>
            </div>
          </div>
          <div className="carbon-game-stats">
            <div className="carbon-game-stat-card">
              <h3 className="carbon-game-stat-title">Client*</h3>
              <p>
                European mobile gaming studio with a vision to create games that resonate
                with players globally.
              </p>
              <p className="carbon-game-stat-disclaimer">
                *Due to non-disclosure agreement (NDA) restrictions, we cannot provide
                any information about the client or the specifics of the case study.
              </p>
            </div>
            <div className="carbon-game-stat-card">
              <h3 className="carbon-game-stat-title">Project in numbers</h3>
              <div className="carbon-game-stat-item">
                <span className="carbon-game-stat-item-label">DURATION</span>
                <span className="carbon-game-stat-item-value">Ongoing project</span>
              </div>
              <div className="carbon-game-stat-item">
                <span className="carbon-game-stat-item-label">TEAM</span>
                <span className="carbon-game-stat-item-value">8 specialists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileGameHero;
