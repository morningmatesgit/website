import React from 'react';


const CorePortfolio = () => {
  return (
    <div className="Core-container">
      <div className="Core-header">
        <h1 className="Core-title">Our portfolio of Core Teams</h1>
        <p className="Core-description">
          At Timspark, we go beyond traditional outsourcing. Our Core Teams are tailored to deliver unparalleled expertise and innovation in your specific industry.
        </p>
      </div>

      {/* <div className="Core-filters">
        <div className="Core-filter-dropdown">
          <label htmlFor="team-role" className="Core-filter-label">Role</label>
          <select id="team-role" className="Core-dropdown-select">
            <option value="devops">DevOps</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
          </select>
        </div>
        <div className="Core-filter-dropdown">
          <label htmlFor="team-industry" className="Core-filter-label">Industry</label>
          <select id="team-industry" className="Core-dropdown-select">
            <option value="fintech">FinTech</option>
            <option value="healthcare">Healthcare</option>
            <option value="ecommerce">E-commerce</option>
          </select>
        </div>
      </div> */}

      <div className="Core-grid">
        
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">3 COMPLETED PROJECTS</span>
            <div className="Core-card-image Core-card-image-blue">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">AWS Migration Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">AWS, Cloud Development</span>
            <span className="Core-category">Fintech, Blockchain</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Manager, Cloud Architect, Senior DevOps</p>
          </div>
        </div>

        
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">1 COMPLETED PROJECT</span>
            <div className="Core-card-image Core-card-image-green">
          
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">Generative AI Dev Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">AI, Machine Learning</span>
            <span className="Core-category">eCommerce, Marketing, Fintech</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Manager, Team Lead AI/ML, Senior Data Engineer</p>
          </div>
        </div>

  
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">5 COMPLETED PROJECTS</span>
            <div className="Core-card-image Core-card-image-red">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 18l4-4-4-4"></path>
                <path d="M8 6l-4 4 4 4"></path>
                <line x1="14" y1="4" x2="10" y2="20"></line>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">Web JS Fullstack Dev Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">Fullstack, JS</span>
            <span className="Core-category">eCommerce, Fintech, Manufacturing</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Manager, Business Analyst, Team Lead Fullstack, Senior Developer Fullstack</p>
          </div>
        </div>

        
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">1 COMPLETED PROJECT</span>
            <div className="Core-card-image Core-card-image-purple">
             
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                <polyline points="15 9 12 12 9 9"></polyline>
                <line x1="12" y1="12" x2="12" y2="18"></line>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">Mobile iOS Security Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">iOS, Mobile Development</span>
            <span className="Core-category">Security</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Manager, iOS Lead, Security Architect, Senior Mobile Dev</p>
          </div>
        </div>

       
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">3 COMPLETED PROJECTS</span>
            <div className="Core-card-image Core-card-image-orange">
              
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">MLOps Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">DevOps, AI, ML, Python</span>
            <span className="Core-category">Healthcare, FinTech</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Lead MLOps, Data Scientist, DevOps Engineer, Python Dev</p>
          </div>
        </div>

        
        <div className="Core-card">
          <div className="Core-card-header">
            <span className="Core-tag Core-tag-new">NEW TEAM</span>
            <span className="Core-tag Core-tag-completed">8 COMPLETED PROJECTS</span>
            <div className="Core-card-image Core-card-image-pink">
           
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
          </div>
          <h3 className="Core-card-title">Tableau Data Engineering Team</h3>
          <div className="Core-card-categories">
            <span className="Core-category">DWH, ETL, Data Quality</span>
            <span className="Core-category">Manufacturing, Pharmaceutics, Dev</span>
          </div>
          <div className="Core-card-specialists">
            <p className="Core-specialists-label">SPECIALISTS</p>
            <p className="Core-specialists-names">Team Lead Data Engineer, BI Developer, Data Analyst, Tableau Specialist</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorePortfolio;