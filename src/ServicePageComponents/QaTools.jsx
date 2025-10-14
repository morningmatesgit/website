import React from 'react';


const QATools = () => {
  return (
    <div className="QATools-container">
      <div className="QATools-header">
        <h1 className="QATools-title">QA tools & technologies for software testing</h1>
        <p className="QATools-description">
          We have a whole set of advanced testing tools and testing techniques that guarantee quality in QA outsourcing.
        </p>
      </div>

      <div className="QATools-grid">
        <div className="QATools-category">
          <h3 className="QATools-category-title">Test/Defect Tracking Tools</h3>
          <ul className="QATools-list">
            <li>Mantis</li>
            <li>Atlassian JIRA</li>
            <li>Elementool</li>
            <li>Redmine</li>
            <li>MTM</li>
            <li>Bugzilla</li>
            <li>VersionOne</li>
            <li>YouTrack</li>
            <li>Rally</li>
            <li>QATouch</li>
          </ul>
        </div>
        
        <div className="QATools-category">
          <h3 className="QATools-category-title">REST/HTTP API clients</h3>
          <ul className="QATools-list">
            <li>DHC</li>
            <li>Advanced REST client</li>
            <li>Postman</li>
            <li>Swagger</li>
            <li>Fiddler</li>
            <li>Charles</li>
          </ul>
        </div>
        
        <div className="QATools-category">
          <h3 className="QATools-category-title">Test Case Management (TCMS)</h3>
          <ul className="QATools-list">
            <li>TestLink</li>
            <li>JIRA plugins</li>
            <li>Quality Control</li>
            <li>Qase</li>
            <li>Testrail</li>
            <li>Clickup</li>
          </ul>
        </div>
        
        <div className="QATools-category">
          <h3 className="QATools-category-title">Web Testing Tools</h3>
          <ul className="QATools-list">
            <li>Selenium WebDriver</li>
            <li>Selenium IDE</li>
            <li>Selenium Builder</li>
            <li>SoapUI</li>
            <li>PhantomJS</li>
          </ul>
        </div>
        
        <div className="QATools-category">
          <h3 className="QATools-category-title">Continuous Integration (CI)</h3>
          <ul className="QATools-list">
            <li>Jenkins</li>
            <li>TeamCity</li>
            <li>Vercel</li>
            <li>Bitbucket</li>
            <li>Azure</li>
            <li>GitHub Actions</li>
            <li>GitLab CI</li>
            <li>CircleCI</li>
          </ul>
        </div>
        
        <div className="QATools-category">
          <h3 className="QATools-category-title">Test Automation Frameworks</h3>
          <ul className="QATools-list">
            <li>SpecFlow</li>
            <li>Cucumber</li>
            <li>Bellatrix</li>
            <li>Robot Framework</li>
            <li>Frameworkium</li>
            <li>Custom frameworks</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QATools;