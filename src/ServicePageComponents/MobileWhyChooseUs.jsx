import React from 'react';
import "../ServicePageCss/Mobile.css";

const MobileWhyChooseUs = () => {
  return (
    <div className="mobile-why-choose-us-container">
      <h1 className="mobile-main-title">Why choose Timspark as your mobile development strategic partner?</h1>

      <div className="mobile-benefits-grid">
        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            Tight-knit team of fully-certified experts with 15+ years of **joint work**
          </p>
        </div>

        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            **Cost-effective** solutions compared to other custom application development consultants
          </p>
        </div>

        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4z"></path>
              <path d="M17 9H7"></path>
              <path d="M17 13H7"></path>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            **Proven track record** of timely and effective results
          </p>
        </div>

        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            **Fast and consistent delivery** in priority
          </p>
        </div>

        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="2" x2="12" y2="6"></line>
              <line x1="12" y1="18" x2="12" y2="22"></line>
              <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
              <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
              <line x1="2" y1="12" x2="6" y2="12"></line>
              <line x1="18" y1="12" x2="22" y2="12"></line>
              <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
              <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            **In-depth know-how** in specific business domains
          </p>
        </div>

        <div className="mobile-benefit-card">
          <div className="mobile-benefit-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <p className="mobile-benefit-text">
            **Transparent processes** and communications
          </p>
        </div>
      </div>

      <div className="mobile-reviews-grid">
        <div className="mobile-review-card">
          <div className="mobile-stars">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <p className="mobile-rating-text">5.0</p>
          <div className="mobile-verified">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Verified review
          </div>
          <p className="mobile-review-quote">
            The iOS developer was quickly onboarded and promptly began
            implementing the requirements in a short timeframe.
          </p>
          <div className="mobile-reviewer-info">
            <img src="https://via.placeholder.com/30" alt="Reviewer avatar" className="mobile-reviewer-avatar" />
            <span className="mobile-reviewer-name">CEO, Telecom company, Austria</span>
          </div>
          <div className="mobile-clutch-logo">Clutch</div>
        </div>

        <div className="mobile-review-card">
          <div className="mobile-stars">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <p className="mobile-rating-text">5.0</p>
          <div className="mobile-verified">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Verified review
          </div>
          <p className="mobile-review-quote">
            The ability to scale our team up with Timspark's wide
            range of professionals was invaluable.
          </p>
          <div className="mobile-reviewer-info">
            <img src="https://via.placeholder.com/30" alt="Reviewer avatar" className="mobile-reviewer-avatar" />
            <span className="mobile-reviewer-name">Executive, PassionPay</span>
          </div>
          <div className="mobile-clutch-logo">Clutch</div>
        </div>

        <div className="mobile-review-card">
          <div className="mobile-stars">
            {Array(5).fill().map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            ))}
          </div>
          <p className="mobile-rating-text">5.0</p>
          <div className="mobile-verified">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Verified review
          </div>
          <p className="mobile-review-quote">
            Exceptional collaboration with Timspark: outstanding culture fit,
            excellent value, and top-notch development quality.
          </p>
          <div className="mobile-reviewer-info">
            <img src="https://via.placeholder.com/30" alt="Reviewer avatar" className="mobile-reviewer-avatar" />
            <span className="mobile-reviewer-name">Nik Sokolov, CEO at LEPTA</span>
          </div>
          <div className="mobile-clutch-logo">Clutch</div>
        </div>
      </div>
    </div>
  );
};

export default MobileWhyChooseUs;