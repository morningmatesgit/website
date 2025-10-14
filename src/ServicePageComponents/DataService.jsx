import React from 'react';
import "../ServicePageCss/Data.css";

const DataServices = () => {
  return (
    <div className="Data-services-container">
      <div className="Data-services-header">
        <h1 className="Data-services-title">Data management services</h1>
        <p className="Data-services-subtitle">
          Our expert teams will apply effective data analysis at scale to make your company effective at decision-making and responsive to your customers at each step of your business analytics journey.
        </p>
      </div>

      <div className="Data-services-grid">
        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10"></line>
              <line x1="12" y1="20" x2="12" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
          </div>
          <h3 className="Data-service-heading">Business intelligence and analytics</h3>
        </div>

        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h3 className="Data-service-heading">Data warehousing</h3>
        </div>

        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3v18h18"></path>
              <path d="M18.7 8.3L12 15l-3.3-3.3"></path>
            </svg>
          </div>
          <h3 className="Data-service-heading">Data quality management</h3>
        </div>

        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
              <path d="M12 8l4 4-4 4"></path>
              <path d="M12 12V4"></path>
            </svg>
          </div>
          <h3 className="Data-service-heading">Data visualization</h3>
        </div>

        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22v-5"></path>
              <path d="M12 2h0"></path>
              <path d="M12 17a5 5 0 0 0-5 5H2.5L12 2 21.5 22H17a5 5 0 0 0-5-5z"></path>
            </svg>
          </div>
          <h3 className="Data-service-heading">Data integration</h3>
        </div>

        <div className="Data-service-item">
          <div className="Data-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V6.5A2.5 2.5 0 0 0 17.5 4h-11A2.5 2.5 0 0 0 4 6.5v13z"></path>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </div>
          <h3 className="Data-service-heading">Data governance</h3>
        </div>
      </div>
    </div>
  );
};

export default DataServices;