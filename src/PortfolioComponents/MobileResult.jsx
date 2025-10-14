import React from 'react';

const MobileResult = () => {
  return (
    <>
      <style>
        {`
          .mobile-result-container {
            background-color: #0f172a;
            background-image: radial-gradient(circle at 50% 50%, rgba(31, 41, 55, 0.7) 0%, rgba(15, 23, 42, 0.7) 100%);
            color: #f8fafc;
            min-height: 100vh;
            padding: 4rem 2rem;
            font-family: 'Inter', sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .mobile-result-header {
            max-width: 1000px;
            width: 100%;
            margin-bottom: 2rem;
            display: flex;
            align-items: flex-start;
            gap: 2rem;
          }

          .mobile-result-header-text {
            flex-basis: 50%;
            text-align: left;
          }

          .mobile-result-title {
            font-size: 2.5rem;
            font-weight: 700;
            line-height: 1.2;
            margin: 0;
          }

          .mobile-result-description {
            color: #94a3b8;
            font-size: 1rem;
            line-height: 1.5;
            margin: 0;
            text-align: left;
            flex-basis: 50%;
          }

          .mobile-result-cards-grid {
            display: grid;
            gap: 2rem;
            grid-template-columns: repeat(3, 1fr);
            width: 100%;
            max-width: 1000px;
          }

          .mobile-result-card {
            background-color: rgba(30, 41, 59, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 1rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            backdrop-filter: blur(8px);
          }

          .mobile-result-card-icon {
            color: #facc15;
            font-size: 2.5rem;
            margin-bottom: 1rem;
          }

          .mobile-result-card-title {
            color: #f8fafc;
            font-size: 1.125rem;
            font-weight: 600;
            margin: 0 0 0.5rem;
          }

          .mobile-result-card-description {
            color: #94a3b8;
            font-size: 0.875rem;
            line-height: 1.5;
            margin: 0;
          }
          
          @media (max-width: 1024px) {
            .mobile-result-cards-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 768px) {
            .mobile-result-header {
              flex-direction: column;
              text-align: center;
            }
            .mobile-result-description {
              text-align: center;
            }
          }

          @media (max-width: 640px) {
            .mobile-result-cards-grid {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
      <div className="mobile-result-container">
        <div className="mobile-result-header">
          <div className="mobile-result-header-text">
            <h1 className="mobile-result-title">Results and<br/>business value</h1>
          </div>
          <p className="mobile-result-description">
            Collaboration with Timspark allowed the company to scale its
            development team efficiently, ensuring high-quality output and
            achieved fast time-to-market for its mobile games. By integrating
            our mobile game developers, the company could maintain a rapid
            development pace while focusing on its creative vision.
          </p>
        </div>
        <div className="mobile-result-cards-grid">
          <div className="mobile-result-card">
            <div className="mobile-result-card-icon">⚡</div>
            <h3 className="mobile-result-card-title">Cost-effective scaling</h3>
            <p className="mobile-result-card-description">
              By outsourcing development resources, the company saved on recruitment and training costs while benefiting from expert-level skills.
            </p>
          </div>
          <div className="mobile-result-card">
            <div className="mobile-result-card-icon">⏱️</div>
            <h3 className="mobile-result-card-title">Faster time to market</h3>
            <p className="mobile-result-card-description">
              The rapid scaling of the development team accelerated the game development process, providing a competitive advantage.
            </p>
          </div>
          <div className="mobile-result-card">
            <div className="mobile-result-card-icon">🔗</div>
            <h3 className="mobile-result-card-title">Increased flexibility</h3>
            <p className="mobile-result-card-description">
              The company could adjust team size and capacity based on project needs, maintaining efficiency and adapting to changing requirements.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileResult;
