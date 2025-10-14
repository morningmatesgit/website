import React from 'react';

const MobileAbout = () => {
  return (
    <>
    
      <div className="mobileabout-container">
        <div className="mobileabout-header">
          <h1 className="mobileabout-title">About the project</h1>
          <div className="mobileabout-info-cards">
            <div className="mobileabout-info-card">
              <div className="mobileabout-info-item">
                <div className="mobileabout-info-item-label">INDUSTRY</div>
                <div className="mobileabout-info-item-value">Entertainment, Gaming</div>
              </div>
              <div className="mobileabout-info-item">
                <div className="mobileabout-info-item-label">SOLUTION</div>
                <div className="mobileabout-info-item-value">Game</div>
              </div>
              <div className="mobileabout-info-item">
                <div className="mobileabout-info-item-label">LOCATION</div>
                <div className="mobileabout-info-item-value">Worldwide</div>
              </div>
            </div>
            <div className="mobileabout-info-card">
              <div className="mobileabout-info-item">
                <div className="mobileabout-info-item-label">SERVICES</div>
                <div className="mobileabout-info-item-value">AI Development / Mobile development</div>
              </div>
              <div className="mobileabout-info-item">
                <div className="mobileabout-info-item-label">TECHNOLOGIES</div>
                <div className="mobileabout-info-item-value">Unity, C#, Photoshop (PS), Spine, Figma, NodeJS, AWS, OpenAI API</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobileabout-discuss-button-container">
          <button className="mobileabout-discuss-button">DISCUSS YOUR PROJECT</button>
        </div>
        <div className="mobileabout-challenge-section">
          <h2>Challenge</h2>
          <p>
            Our client faced the challenge of scaling their development team to meet the growing demands of their mobile game projects. As a newly established studio, they needed to quickly augment their team with skilled developers who could seamlessly integrate into their workflow, accelerate the development process, and deliver high-quality Unity-based mobile games on time.
          </p>
        </div>
      </div>
    </>
  );
};

export default MobileAbout;