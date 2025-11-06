import React from 'react';
import Breadcrumb from '../Breadcrumb';


const DedicatedTeamsHero = () => {
  return (
    <div className="DedicatedTeamsHero-section-container">
      
       <div className="di-breadcrumb-wrapper">
              <Breadcrumb 
                items={[
                  { label: "MorningMates", to: "/" },
                  { label: "EngagementModels", to: "/EngagementModels" },
                  { label: "Dedicated Team" }
                ]}
              />
            </div>
      
      <div className="DedicatedTeamsHero-content">
        <h1 className="DedicatedTeamsHero-title">Dedicated development teams</h1>
        <p className="DedicatedTeamsHero-description">
          The dedicated development team model has become a widely adopted engagement strategy in the IT industry. This approach allows you to partner with a custom software development company to create a tech team that is fully dedicated to your projects. Essentially, it functions as a remote extension of your in-house staff, precisely targeting your needs whenever they arise.
        </p>
        <button className="DedicatedTeamsHero-cta-button">CHOOSE A TEAM</button>
      </div>
    </div>
  );
};

export default DedicatedTeamsHero;