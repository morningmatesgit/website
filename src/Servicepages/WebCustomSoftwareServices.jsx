import React from 'react';
//import './SoftwarePage.css';

const SoftwarePage = () => {
  return (
    <div className='container'> 
    <div>
    
      <section className="custom-services-section">
        <div className="custom-services-container">
          <h2 className="custom-services-title">Our Custom Software Services</h2>
          <div className="custom-services-grid">
            <div className="custom-services-content">
              <h3 className="custom-services-subtitle">
                The perfect solution for your business
              </h3>
              <p className="custom-services-description">
                We build custom software from scratch, tailored to your specific
                requirements. Our solutions are scalable, secure, and designed to
                drive your business forward.
              </p>
              <a href="#learn-more" className="custom-learn-more-link">
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="custom-services-cards-grid">
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                  <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
                </svg>
                <h4 className="card-title">
                  Web <br /> Applications
                </h4>
              </div>
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="7" y="2" width="10" height="20" rx="2" ry="2" />
                  <path d="M12 18h.01" />
                </svg>
                <h4 className="card-title">
                  Mobile <br /> Apps
                </h4>
              </div>
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <h4 className="card-title">
                  UI/UX <br /> Design
                </h4>
              </div>
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
                <h4 className="card-title">
                  API <br /> Integration
                </h4>
              </div>
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
                <h4 className="card-title">
                  Backend <br /> Development
                </h4>
              </div>
              <div className="custom-service-card">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 12h5M2 12h5M12 2v5M12 17v5M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4" />
                </svg>
                <h4 className="card-title">
                  Cloud <br /> Solutions
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default SoftwarePage;