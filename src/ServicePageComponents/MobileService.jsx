import React from 'react';
import "../ServicePageCss/Mobile.css";

const MobileServices = () => {
  return (
    <div className="mobile-services-container">
      <div className="mobile-services-header">
        <h1 className="mobile-services-title">Mobile App Development Services</h1>
        <p className="mobile-services-subtitle">
          We combine a user-centric approach, deep technical expertise and industry-specific know-how to deliver apps that captivate users and drive business success.
        </p>
      </div>

      <div className="mobile-services-grid">
        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h3 className="mobile-service-heading">iOS App Development</h3>
          <p className="mobile-service-description">
            We deliver stunning iOS apps, leveraging Swift and SwiftUI for superior performance and a delightful user experience.
          </p>
        </div>

        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="7" y="2" width="10" height="20" rx="2" ry="2"></rect>
              <path d="M12 18h.01"></path>
            </svg>
          </div>
          <h3 className="mobile-service-heading">Android App Development</h3>
          <p className="mobile-service-description">
            Our expert team develops high-performing Android applications using Kotlin and Jetpack Compose for a native feel and robust functionality.
          </p>
        </div>

        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.2-1.2A7.5 7.5 0 0 1 4.5 13.5V6A4.5 4.5 0 0 1 9 1.5h6A4.5 4.5 0 0 1 19.5 6v7.5A7.5 7.5 0 0 1 13.2 20.15z"></path>
              <polyline points="9 10 12 13 15 10"></polyline>
              <path d="M12 13v-7"></path>
            </svg>
          </div>
          <h3 className="mobile-service-heading">Hybrid App Development</h3>
          <p className="mobile-service-description">
            Utilize cross-platform frameworks like React Native and Flutter to build versatile apps that run on both iOS and Android.
          </p>
        </div>

        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>
          <h3 className="mobile-service-heading">Cloud & Server-Side Integration</h3>
          <p className="mobile-service-description">
            Seamlessly integrate your mobile app with cloud services and backend systems for scalable and secure data management.
          </p>
        </div>

        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
              <path d="M2 12h10a2 2 0 0 1 2 2v4"></path>
              <path d="M2 12h10a2 2 0 0 0 2-2V4"></path>
            </svg>
          </div>
          <h3 className="mobile-service-heading">UI/UX Design</h3>
          <p className="mobile-service-description">
            Our designers create intuitive and beautiful interfaces that ensure an effortless user experience, from wireframing to final mockups.
          </p>
        </div>

        <div className="mobile-service-item">
          <div className="mobile-service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              <polyline points="15 9 12 12 9 9"></polyline>
              <path d="M12 12v5"></path>
            </svg>
          </div>
          <h3 className="mobile-service-heading">Quality Assurance & Testing</h3>
          <p className="mobile-service-description">
            We perform rigorous testing, including manual and automated checks, to ensure your app is bug-free, secure, and ready for launch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileServices;