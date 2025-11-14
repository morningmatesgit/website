import React from 'react';
import './Web.css';

const WebServices = () => {
  return (
    <div className='container'>
    <div className="web-services-container">
      <div className="web-services-header">
        <h1 className="header-main-title">Our web development services</h1>
        <p className="header-description">
          Whether it is complex custom web application development, testing or consulting services, we are here to help your business shine and thrive.
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
              <path d="M12.5 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
              <path d="M22 13h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
              <path d="M2 13h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"></path>
              <path d="M16 13l-4 4-4-4"></path>
              <path d="M12 17l4 4-4 4"></path>
              <path d="M12 17l-4 4"></path>
            </svg>
          </div>
          <h3 className="service-title">Frontend development</h3>
          <p className="service-description">
            We use cutting-edge frameworks like React.js, Vue.js, and Angular, combined with top-tier UI/UX practices, to build responsive, visually appealing, and user-friendly interfaces.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 13h-4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z"></path>
              <path d="M2 13h4a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2z"></path>
              <path d="M12 5h10"></path>
              <path d="M12 12h10"></path>
            </svg>
          </div>
          <h3 className="service-title">Backend development</h3>
          <p className="service-description">
            Our backend development services ensure your web application is robust and secure, whether it is hosted on-premises, in the cloud, or through serverless architecture.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 19l9 2-9-18-9 18 9-2z"></path>
              <path d="M2 12h10a2 2 0 0 1 2 2v4"></path>
              <path d="M2 12h10a2 2 0 0 0 2-2V4"></path>
            </svg>
          </div>
          <h3 className="service-title">UI/UX design</h3>
          <p className="service-description">
            From concept to final design, we provide UX/UI design services for delivering intuitive, visually stunning interfaces that elevate user experiences and boost engagement.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </div>
          <h3 className="service-title">API development and integration</h3>
          <p className="service-description">
            When you need to connect your web application with third-party systems, streamline workflows, and enhance functionality, turn to Timspark for building secure, scalable APIs.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 21.35l-1.2-1.2A7.5 7.5 0 0 1 4.5 13.5V6A4.5 4.5 0 0 1 9 1.5h6A4.5 4.5 0 0 1 19.5 6v7.5A7.5 7.5 0 0 1 13.2 20.15z"></path>
              <polyline points="9 10 12 13 15 10"></polyline>
              <path d="M12 13v-7"></path>
            </svg>
          </div>
          <h3 className="service-title">Web testing services</h3>
          <p className="service-description">
            Ensure your website or web application functions flawlessly and provides a seamless experience on all states of the user.
          </p>
        </div>
        
        <div className="service-card">
          <div className="service-icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.5 17.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M12.5 12.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M17.5 7.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M12.5 2.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M17.5 2.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M17.5 12.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M22.5 12.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M12.5 17.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M17.5 17.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M12.5 2.5a2.5 2.5 0 0 0-5 0"></path>
              <path d="M12 2v20"></path>
              <path d="M5 12h14"></path>
            </svg>
          </div>
          <h3 className="service-title">Web development consulting</h3>
          <p className="service-description">
            We will help you navigate the complexities of building and maintaining a successful online presence.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WebServices;