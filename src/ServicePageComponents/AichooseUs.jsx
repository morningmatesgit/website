import React from 'react';
import "../ServicePageCss/Ai.css";

const AiWebIndustryExperts = () => {
  return (
    <div className="web-industry-experts-container">
      <h1 className="web-industry-experts-title">Web development experts across industries</h1>
      
      <div className="web-industries-grid">
        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </div>
            <h3 className="web-industry-name">eCommerce & retail</h3>
          </div>
          <ul className="web-industry-list">
            <li>Online stores</li>
            <li>Marketplaces</li>
            <li>Payment gateways</li>
            <li>Social integrations</li>
            <li>Virtual sales assistants</li>
          </ul>
        </div>

        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                <path d="M12 16a4 4 0 0 0 0-8c-2.2 0-4 1.8-4 4s1.8 4 4 4z"></path>
                <line x1="12" y1="2" x2="12" y2="4"></line>
                <line x1="12" y1="20" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="4" y2="12"></line>
                <line x1="20" y1="12" x2="22" y2="12"></line>
              </svg>
            </div>
            <h3 className="web-industry-name">Finance & Banking</h3>
          </div>
          <ul className="web-industry-list">
            <li>Online banking</li>
            <li>Financial analytics tools</li>
            <li>CRM systems</li>
            <li>Database management systems</li>
            <li>Cloud-based databases</li>
          </ul>
        </div>

        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19.5 12.57l-7.5 7.5-7.5-7.5a5 5 0 1 1 7.5-6.57 5 5 0 1 1 7.5 6.57z"></path>
              </svg>
            </div>
            <h3 className="web-industry-name">Healthcare <span className="web-arrow">→</span></h3>
          </div>
          <ul className="web-industry-list">
            <li>Telemedicine apps</li>
            <li>Hospital/patient apps</li>
            <li>ERP, EHR, and ERM systems</li>
            <li>Remote patient monitoring</li>
            <li>Hospital inventory management</li>
          </ul>
        </div>

        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <path d="M7 12h10"></path>
                <path d="M10 16h4"></path>
                <path d="M10 8h4"></path>
              </svg>
            </div>
            <h3 className="web-industry-name">Business management</h3>
          </div>
          <ul className="web-industry-list">
            <li>ERP systems</li>
            <li>Project management systems</li>
          </ul>
        </div>

        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s8-4 8-10V5l-8-3-8 3v5c0 6 8 10 8 10z"></path>
                <polyline points="15 9 12 12 9 9"></polyline>
              </svg>
            </div>
            <h3 className="web-industry-name">EdTech</h3>
          </div>
          <ul className="web-industry-list">
            <li>Online training apps</li>
            <li>Distance learning platforms</li>
          </ul>
        </div>

        <div className="web-industry-card">
          <div className="web-industry-header">
            <div className="web-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <path d="M3 15h18"></path>
                <path d="M17 12a5 5 0 1 1-10 0"></path>
              </svg>
            </div>
            <h3 className="web-industry-name">Media and entertainment</h3>
          </div>
          <ul className="web-industry-list">
            <li>Websites</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AiWebIndustryExperts;