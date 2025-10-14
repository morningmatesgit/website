import React from 'react';


const StaffTalentHire = () => {
  return (
    <div className="TalentHire-container">
      <div className="TalentHire-left">
        <h1 className="TalentHire-title">Talents you can hire as your augmented team</h1>
        <ul className="TalentHire-list">
          <li>1,000+ vetted engineers</li>
          <li>mid- and senior-level</li>
          <li>available for full-time, long-term projects</li>
        </ul>
      </div>

      <div className="TalentHire-right">
        <div className="TalentHire-grid">
          <div className="TalentHire-card">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <p className="TalentHire-card-text">Back-end and front-end developers</p>
          </div>
          
          <div className="TalentHire-card TalentHire-card-highlight">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="12" y1="13" x2="12" y2="13"></line>
                <line x1="10" y1="17" x2="14" y2="17"></line>
              </svg>
            </div>
            <p className="TalentHire-card-text">Business analysts</p>
          </div>

          <div className="TalentHire-card">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                <polyline points="13 2 13 9 20 9"></polyline>
                <line x1="16" y1="16" x2="8" y2="16"></line>
                <line x1="16" y1="12" x2="8" y2="12"></line>
                <line x1="12" y1="8" x2="12" y2="8"></line>
              </svg>
            </div>
            <p className="TalentHire-card-text">Project managers</p>
          </div>

          <div className="TalentHire-card TalentHire-card-highlight">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <line x1="12" y1="12" x2="12" y2="18"></line>
                <line x1="8" y1="14" x2="16" y2="14"></line>
              </svg>
            </div>
            <p className="TalentHire-card-text">UX/UI designers</p>
          </div>

          <div className="TalentHire-card">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="15 9 12 12 9 9"></polyline>
                <line x1="12" y1="12" x2="12" y2="18"></line>
              </svg>
            </div>
            <p className="TalentHire-card-text">QA engineers</p>
          </div>
          
          <div className="TalentHire-card TalentHire-card-highlight">
            <div className="TalentHire-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <p className="TalentHire-card-text">DevOps engineers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffTalentHire;