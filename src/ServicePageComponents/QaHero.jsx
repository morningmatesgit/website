import React from 'react';


const QAHeroSection = () => {
  return (
    <div className="QAHero-section-container">
      {/* <div className="QAHero-breadcrumb">
        <a href="#" className="QAHero-breadcrumb-item">Timspark</a>
        <span className="QAHero-breadcrumb-separator">›</span>
        <a href="#" className="QAHero-breadcrumb-item">Services</a>
        <span className="QAHero-breadcrumb-separator">›</span>
        <a href="#" className="QAHero-breadcrumb-item QAHero-breadcrumb-active">QA & testing</a>
      </div> */}

      <div className="QAHero-content">
        <h1 className="QAHero-title">
          QA outsourcing for software testing services
        </h1>
        <div className="QAHero-clutch-review">
          <p className="QAHero-review-text">REVIEWED ON</p>
          <div className="QAHero-stars">
            <span className="QAHero-star">★</span>
            <span className="QAHero-star">★</span>
            <span className="QAHero-star">★</span>
            <span className="QAHero-star">★</span>
            <span className="QAHero-star">★</span>
          </div>
          <p className="QAHero-review-text">9 REVIEWS</p>
        </div>
        <p className="QAHero-description">
          Delivering high-quality software requires focused software testing efforts. With Timspark's end-to-end QA outsourcing services, your development team can focus on innovation while we ensure bug-free software through comprehensive testing—including functional testing, performance testing, security testing and more.
        </p>
        <div className="QAHero-cta-buttons">
          <button className="QAHero-cta-button">SEE OUR OFFERING</button>
        </div>
      </div>
    </div>
  );
};

export default QAHeroSection;