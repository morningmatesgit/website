import React from 'react';
import './Web.css';

const IndustryExpertise = () => {
  return (
    <div className="container">   
      <div className="industry-expertise-container">

        <h2 className="expertise-main-title section-title">
          Web development experts across industries
        </h2>

        <br />

        <div className="expertise-grid">
          {/* eCommerce */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-shopping-bag">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="expertise-card-title">eCommerce & retail</h3>
            <ul className="expertise-list">
              <li>Online stores</li>
              <li>Marketplaces</li>
              <li>Payment gateways</li>
              <li>Social integrations</li>
              <li>Virtual sales assistants</li>
            </ul>
          </div>

          {/* Finance */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-dollar-sign">
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <h3 className="expertise-card-title">Finance & Banking</h3>
            <ul className="expertise-list">
              <li>Online banking</li>
              <li>Financial analytics tools</li>
              <li>CRM systems</li>
              <li>Database management systems</li>
              <li>Cloud-based databases</li>
            </ul>
          </div>

          {/* Healthcare */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <h3 className="expertise-card-title">Healthcare <span className="arrow-icon">➔</span></h3>
            <ul className="expertise-list">
              <li>Telemedicine apps</li>
              <li>Hospital/patient apps</li>
              <li>ERP, EHR, and ERM systems</li>
              <li>Remote patient monitoring</li>
              <li>Hospital inventory management</li>
            </ul>
          </div>

          {/* Business */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-monitor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="expertise-card-title">Business management</h3>
            <ul className="expertise-list">
              <li>ERP systems</li>
              <li>Project management systems</li>
              <li>CRM & HRM systems</li>
              <li>Data analytics & reporting</li>
              <li>Document management</li>
            </ul>
          </div>

          {/* EdTech */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="expertise-card-title">EdTech</h3>
            <ul className="expertise-list">
              <li>Online training apps</li>
              <li>Distance learning platforms</li>
              <li>Student information systems</li>
              <li>Learning management systems</li>
              <li>Interactive educational content</li>
            </ul>
          </div>

          {/* Media */}
          <div className="expertise-card">
            <div className="expertise-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h3 className="expertise-card-title">Media and entertainment</h3>
            <ul className="expertise-list">
              <li>Websites</li>
              <li>Blogs</li>
              <li>Streaming platforms</li>
              <li>Content management systems</li>
              <li>Digital asset management</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IndustryExpertise;
