import React from 'react';


const SoftwareWorkWithUs = () => {
  return (
    <div className="WorkWithUs-container">
      <h1 className="WorkWithUs-title">How you can work with us</h1>
      
      <div className="WorkWithUs-grid">
        <div className="WorkWithUs-card">
          <div className="WorkWithUs-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 19.22H5C4.45 19.22 4 18.77 4 18.22V6C4 5.45 4.45 5 5 5H17C17.55 5 18 5.45 18 6V18.22C18 18.77 17.55 19.22 17 19.22Z"></path>
              <path d="M10 9H13"></path>
              <path d="M10 13H16"></path>
              <path d="M10 17H16"></path>
            </svg>
          </div>
          <h3 className="WorkWithUs-card-heading">Dedicated teams</h3>
        </div>
        
        <div className="WorkWithUs-card WorkWithUs-card-highlight">
          <div className="WorkWithUs-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="15 9 12 12 9 9"></polyline>
              <line x1="12" y1="12" x2="12" y2="18"></line>
            </svg>
          </div>
          <h3 className="WorkWithUs-card-heading">IT staff augmentation</h3>
        </div>

        <div className="WorkWithUs-card">
          <div className="WorkWithUs-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
          <h3 className="WorkWithUs-card-heading">Core teams</h3>
        </div>
      </div>

      <button className="WorkWithUs-cta-button">GET THE DETAILS</button>
    </div>
  );
};

export default SoftwareWorkWithUs;