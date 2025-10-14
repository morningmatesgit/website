import React from 'react';


const AutomatedTechStack = () => {
  return (
    <div className="Automated-container">
      <div className="Automated-tech-stack">
        <h2 className="Automated-tech-title">Tech stack</h2>
        <div className="Automated-stack-item">
          <p className="Automated-stack-category">Data platform & modelling</p>
          <p className="Automated-stack-technology">Snowflake (Data Vault 2.0)</p>
        </div>
        <div className="Automated-stack-item">
          <p className="Automated-stack-category">ETL / Ingestion</p>
          <p className="Automated-stack-technology">Talend</p>
        </div>
        <div className="Automated-stack-item">
          <p className="Automated-stack-category">Transformations & tests</p>
          <p className="Automated-stack-technology">dbt + internal automated testing framework (GitLab CI/CD)</p>
        </div>
        <div className="Automated-stack-item">
          <p className="Automated-stack-category">Visualization</p>
          <p className="Automated-stack-technology">Tableau</p>
        </div>
      </div>
    </div>
  );
};

export default AutomatedTechStack;