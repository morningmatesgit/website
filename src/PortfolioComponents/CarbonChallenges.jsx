import React from 'react';

const CarbonChallenge = () => {
  return (
    <>
      
      <div className="carbon-challenge-container">
        <div className="carbon-challenge-header">
          <h2 className="carbon-challenge-title">Challenge</h2>
          <p className="carbon-challenge-description">
            The client faced challenges in implementing an industrial IoT
            solution capable of managing reliable, real-time data transfer
            while ensuring scalable cloud deployment. With limited
            experience in deploying production-level applications, they
            required a secure, lightweight communication protocol and an
            efficient cloud infrastructure to support industrial IoT and
            carbon capture utilization.
          </p>
        </div>
        <div className="carbon-objectives-section">
          <h3 className="carbon-objectives-title">Related objectives</h3>
          <div className="carbon-cards-grid">
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M64 480H448c35.3 0 64-28.7 64-64V160H320c-17.7 0-32-14.3-32-32V0H64C28.7 0 0 28.7 0 64V416c0 35.3 28.7 64 64 64zM160 384c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16h-32zM272 400c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400zM416 400c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400zM320 128V0H160c-8.8 0-16 7.2-16 16v96h176z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Manage data communication between devices</h3>
            </div>
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM320 192V144c0-70.7-57.3-128-128-128S64 73.3 64 144v48H0V480c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V192H320zm-104 96h-32c-8.8 0-16-7.2-16-16V256c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Secure data transfer</h3>
            </div>
            <div className="carbon-card">
              <div className="carbon-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 67.5L50.2 419.1c-15.3 14.8-24.8 34.6-24.8 56.4c0 24.3 19.2 45.4 44.5 48.6l108.8 13.8c7.4 1.1 14.9-1.3 20.9-6.3L224 456l42.4 42.4c6-5 13.5-7.4 20.9-6.3l108.8-13.8c25.3-3.2 44.5-24.3 44.5-48.6c0-21.8-9.5-41.6-24.8-56.4L269.7 323.5c-4.4-4.2-11.8-2.6-14.7 2.4L224 372.2l-31-46.3c-2.9-5-10.3-6.6-14.7-2.4z"/>
                </svg>
              </div>
              <h3 className="carbon-card-title">Ongoing support</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarbonChallenge;
