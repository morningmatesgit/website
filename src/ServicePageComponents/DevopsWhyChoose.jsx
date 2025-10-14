import React from 'react';
import "../ServicePageCss/Devops.css";

const DevOpsWhyChoose = () => {
  return (
    <div className="DevOps-why-choose-container">
      <h1 className="DevOps-why-choose-title">Why choose Timspark</h1>
      
      <div className="DevOps-why-choose-grid">
        <div className="DevOps-why-choose-card">
          <div className="DevOps-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <div className="DevOps-card-content">
            <h3 className="DevOps-card-heading">Quality first</h3>
            <p className="DevOps-card-text">
              Our professionals offer top-notch disruptive solutions that help businesses find their cutting-edge in the industry.
            </p>
          </div>
        </div>
        
        <div className="DevOps-why-choose-card">
          <div className="DevOps-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22V5l-5 5"></path>
              <path d="M12 5l5 5"></path>
              <path d="M5 22h14"></path>
            </svg>
          </div>
          <div className="DevOps-card-content">
            <h3 className="DevOps-card-heading">Fast time-to-market</h3>
            <p className="DevOps-card-text">
              We streamline the delivery lifecycle to achieve efficiency, speed, and customer-centricity, which helps us bring products to market quickly and efficiently.
            </p>
          </div>
        </div>

        <div className="DevOps-why-choose-card">
          <div className="DevOps-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 10H6c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"></path>
              <path d="M12 12V4"></path>
              <path d="M12 4L16 8"></path>
              <path d="M12 4L8 8"></path>
            </svg>
          </div>
          <div className="DevOps-card-content">
            <h3 className="DevOps-card-heading">Motivation and ownership</h3>
            <p className="DevOps-card-text">
              30+ dedicated Core Teams with an entrepreneurial spirit and sense of ownership are ready to start long-term cooperation and contribute.
            </p>
          </div>
        </div>

        <div className="DevOps-why-choose-card">
          <div className="DevOps-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </div>
          <div className="DevOps-card-content">
            <h3 className="DevOps-card-heading">Cost-effective solutions</h3>
            <p className="DevOps-card-text">
              Fast and consistent delivery helps us avoid roadblocks and additional costs in the development process and bring the maximum value possible.
            </p>
          </div>
        </div>

        <div className="DevOps-why-choose-card">
          <div className="DevOps-card-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="15 9 12 12 9 9"></polyline>
            </svg>
          </div>
          <div className="DevOps-card-content">
            <h3 className="DevOps-card-heading">Domain expertise</h3>
            <p className="DevOps-card-text">
              Our engineers accumulate and deepen the expertise, not build it from scratch with each new project, thus tapping into the business needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevOpsWhyChoose;