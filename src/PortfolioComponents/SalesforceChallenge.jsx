import React from 'react';

const SalesforceChallenge = () => {
  const cardData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      title: 'Ensuring seamless integration of new side apps within Salesforce',
      description: '',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 7a2 2 0 1 0 0 4h12v-4a2 2 0 0 0-2-2h-8zM10 17a2 2 0 1 0 0 4h12v-4a2 2 0 0 0-2-2h-8z" />
          <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0z" />
        </svg>
      ),
      title: 'Regression testing of Omnistudio package upgrades',
      description: '',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="15" y1="15" x2="15" y2="19" />
          <line x1="9" y1="15" x2="9" y2="19" />
          <path d="M12 11V3" />
        </svg>
      ),
      title: 'Testing new insurance products and document templates for multiple countries',
      description: '',
    },
  ];

  return (
    <div className="salesforce-container">
      <div className="salesforce-challenge-header">
        <h2 className="salesforce-challenge-title">Challenge</h2>
        <p className="salesforce-challenge-description">
          The project encountered several key challenges:
        </p>
      </div>
      <div className="salesforce-cards-grid">
        {cardData.map((card, index) => (
          <div key={index} className="salesforce-card">
            <div className="salesforce-card-icon">{card.icon}</div>
            <h3 className="salesforce-card-title">{card.title}</h3>
            <p className="salesforce-card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesforceChallenge;
