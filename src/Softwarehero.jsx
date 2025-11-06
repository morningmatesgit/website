import React from 'react';
import './CustomSoftware.css';
import Breadcrumb from './Breadcrumb';

function SoftwareDevelopmentHero() {
  return (
    <>
      {/* ✅ Breadcrumb Section */}
            <div className='software'>
              <Breadcrumb
             items={[
                { label: "MorningMates", to: "/" },
                { label: "Services", to: "/services" },
                { label: " Software Development Services" } // no `to` → this becomes active
              ]}
        
            />
            </div>

      <section className="software-hero-section">
        <div className="software-hero-container">
          <div className="software-hero-text">
            <h1 className="software-hero-title">Software development services</h1>
            <p className="software-hero-subtitle">
              Whether you want to develop an industry-specific solution, revamp software infrastructure in your company, or launch a mobile application to excel in the marketplaces, Timspark is here to deliver. From strategic consulting or custom MVP software development to execution, we cater to your diverse business needs and technological objectives.
            </p>
            <button className="software-contact-button">CONTACT US</button>
          </div>

          <div className="software-hero-reviews">
            <div className="software-review-stars">
              <span className="mr-2">REVIEWED ON</span>
              <div className="software-stars-container">
                {'★★★★★'.split('').map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>
            </div>
            <p className="software-clutch-reviews">
              Clutch <span className="font-bold">9 REVIEWS</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SoftwareDevelopmentHero;


