import React from 'react';
import "../ServicePageCss/Mobile.css";

const MobileStack = () => {
  return (
    <div className="mobile-stack-container">
      <div className="mobile-stack-header">
        <h1 className="mobile-stack-title">Our technology stack</h1>
        <p className="mobile-stack-subtitle">
          Our mobile application development team is skilled in a wide range of
          technologies to build powerful, scalable, and secure applications.
        </p>
      </div>

      <div className="mobile-stack-content">
        <div className="mobile-stack-category">
          <h2 className="mobile-category-title">iOS</h2>
          <div className="mobile-tech-grid">
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">Swift</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
                  <path d="M2 12h10a2 2 0 0 1 2 2v4"></path>
                  <path d="M2 12h10a2 2 0 0 0 2-2V4"></path>
                </svg>
              </span>
              <span className="mobile-tech-name">Objective-C</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">SwiftUI</span>
            </div>
          </div>
        </div>

        <div className="mobile-stack-category">
          <h2 className="mobile-category-title">Android</h2>
          <div className="mobile-tech-grid">
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
                  <path d="M12 18h.01"></path>
                </svg>
              </span>
              <span className="mobile-tech-name">Kotlin</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">Java</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">Jetpack Compose</span>
            </div>
          </div>
        </div>
        
        <div className="mobile-stack-category">
          <h2 className="mobile-category-title">Cross-platform</h2>
          <div className="mobile-tech-grid">
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </span>
              <span className="mobile-tech-name">React Native</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"></path>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">Flutter</span>
            </div>
          </div>
        </div>

        <div className="mobile-stack-category">
          <h2 className="mobile-category-title">Backend & Database</h2>
          <div className="mobile-tech-grid">
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                  <line x1="8" y1="16" x2="8" y2="16"></line>
                </svg>
              </span>
              <span className="mobile-tech-name">Node.js</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="15 9 12 12 9 9"></polyline>
                  <path d="M12 12v5"></path>
                </svg>
              </span>
              <span className="mobile-tech-name">Python</span>
            </div>
            <div className="mobile-tech-item">
              <span className="mobile-tech-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 12h5M2 12h5M12 2v5M12 17v5M5 5l4 4M15 15l4 4M5 19l4-4M15 9l4-4"></path>
                </svg>
              </span>
              <span className="mobile-tech-name">MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileStack;