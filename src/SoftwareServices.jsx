import React from "react";
import "./CustomSoftware.css";

function CustomSoftwareServices() {
  const services = [
    { title: "Speech & Recognition", icon: "🗣️" },
    { title: "Human activity recognition", icon: "🏃" },
    { title: "Cybersecurity", icon: "🔒" },
    { title: "Computer vision", icon: "👁️" },
    { title: "Robotic process automation", icon: "🤖" },
    { title: "Intelligent automation and optimization", icon: "⚙️" },
  ];

  return (
    <div className="container">
    <section className="software-services-section">
      <div className="software-services-container">
        <h2 className="software-services-title">
          Custom software engineering services we provide
        </h2>

        <div className="software-services-grid">
          <div className="software-services-content">
            <h3 className="software-services-subtitle">
              AI software development
            </h3>
            <p className="software-services-description">
              Leverage cutting-edge AI technology in computer vision, natural
              language understanding, smart automation, and more with Timspark.
            </p>
            <a href="#" className="software-learn-more-link">
              LEARN MORE
            </a>
          </div>

          <div className="software-services-cards-grid">
            {services.map((service, index) => (
              <div key={index} className="software-service-card">
                <span className="software-service-icon">{service.icon}</span>
                <p>{service.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default CustomSoftwareServices;

