import React from 'react';


const StaffEngagementModels = () => {
  return (
    <div className="EngagementModels-container">
      <div className="EngagementModels-header">
        <h1 className="EngagementModels-title">IT staff augmentation engagement models with Timspark</h1>
        <p className="EngagementModels-description">
          Choose from three IT staff augmentation models tailored to your business needs. Each delivers top-quality solutions to help you achieve your goals.
        </p>
      </div>

      <div className="EngagementModels-card-container">
        <div className="EngagementModels-card">
          <div className="EngagementModels-card-left">
            <div className="EngagementModels-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 19.22H5C4.45 19.22 4 18.77 4 18.22V6C4 5.45 4.45 5 5 5H17C17.55 5 18 5.45 18 6V18.22C18 18.77 17.55 19.22 17 19.22Z"></path>
                <path d="M10 9H13"></path>
                <path d="M10 13H16"></path>
                <path d="M10 17H16"></path>
              </svg>
            </div>
            <h3 className="EngagementModels-card-heading">Dedicated teams</h3>
            <p className="EngagementModels-card-subtext">
              A cost-effective staff augmentation model with a long-term, fully committed team built for your project's success.
            </p>
          </div>
          <div className="EngagementModels-card-right">
            <h4 className="EngagementModels-how-it-works">How does it work?</h4>
            <p className="EngagementModels-details">
              After assessing your needs, our dedicated IT team stays engaged throughout the software development lifecycle, ensuring ownership and project success.
            </p>
            <a href="#" className="EngagementModels-learn-more">
              LEARN ABOUT <span className="EngagementModels-arrow">→</span>
            </a>
          </div>
        </div>

        <div className="EngagementModels-card">
          <div className="EngagementModels-card-left">
            <div className="EngagementModels-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="15 9 12 12 9 9"></polyline>
                <line x1="12" y1="12" x2="12" y2="18"></line>
              </svg>
            </div>
            <h3 className="EngagementModels-card-heading">Team augmentation</h3>
            <p className="EngagementModels-card-subtext">
              A scalable IT staff augmentation solution to boost your team with on-demand specialists tailored to your tech needs.
            </p>
          </div>
          <div className="EngagementModels-card-right">
            <h4 className="EngagementModels-how-it-works">How does it work?</h4>
            <p className="EngagementModels-details">
              Our seasoned IT experts join your in-house team for short-term or ongoing projects, delivering the exact skills you need to optimize resources.
            </p>
          </div>
        </div>

        <div className="EngagementModels-card">
          <div className="EngagementModels-card-left">
            <div className="EngagementModels-icon-box">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 className="EngagementModels-card-heading">IT project outsourcing</h3>
            <p className="EngagementModels-card-subtext">
              A project-based model to accelerate your business's tech transformation with end-to-end solutions.
            </p>
          </div>
          <div className="EngagementModels-card-right">
            <h4 className="EngagementModels-how-it-works">How does it work?</h4>
            <p className="EngagementModels-details">
              Our full-fledged IT team, led by a dedicated project manager, handles design, development, deployment, and testing, so you can focus on growth.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffEngagementModels;