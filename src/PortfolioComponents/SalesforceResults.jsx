import React from 'react';

const SalesforceResults = () => {
  return (
    <>
      
      <div className="salesforce-container">
        <div className="salesforce-section-header">
          <h2 className="salesforce-header-title">Results and<br/>business value</h2>
          <p className="salesforce-header-description">
            The efforts of the team delivered significant business value.
            The quality and reliability of the insurance management
            system were greatly improved, ensuring smoother operations.
          </p>
        </div>
        <div className="salesforce-cards-grid">
          <div className="salesforce-card">
            <div className="salesforce-card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                  <path d="M16 256C16 385.3 122.7 492 252 496V256H16zM256 16C385.3 16 492 122.7 496 252H256V16zM288 352a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM256 0c141.4 0 256 114.6 256 256s-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0z"/>
                </svg>
            </div>
            <h3 className="salesforce-card-title">Process automation</h3>
            <p className="salesforce-card-description">
              Automation of licensing processes through new Salesforce objects and
              fields enhanced efficiency and reduced manual effort.
            </p>
          </div>
          <div className="salesforce-card">
            <div className="salesforce-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
                <path d="M64 480C64 497.7 78.3 512 96 512H288c17.7 0 32-14.3 32-32V64h48c17.7 0 32-14.3 32-32s-14.3-32-32-32H320V32H288V0H96V32H64V64H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32v352zm256-352V384H64V128h256zM128 224c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V224zM208 224c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V224zM288 224c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 8.8 7.2 16 16 16s16-7.2 16-16V224z"/>
              </svg>
            </div>
            <h3 className="salesforce-card-title">Compliance management</h3>
            <p className="salesforce-card-description">
              Compliance with document templates and wordings for various countries was
              ensured, minimizing the risk of errors and inconsistencies.
            </p>
          </div>
          <div className="salesforce-card">
            <div className="salesforce-card-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                <path d="M160 320c0-88.4 71.6-160 160-160s160 71.6 160 160h-160zM400 352a80 80 0 1 0 0-160 80 80 0 1 0 0 160zM640 320c0 141.4-114.6 256-256 256S128 461.4 128 320h-128v160c0 17.7 14.3 32 32 32h576c17.7 0 32-14.3 32-32V320h-128zM320 0c141.4 0 256 114.6 256 256s-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0z"/>
              </svg>
            </div>
            <h3 className="salesforce-card-title">Bug resolution</h3>
            <p className="salesforce-card-description">
              Production bugs related to Omniscripts were resolved, restoring core
              functionality and improving user experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesforceResults;
