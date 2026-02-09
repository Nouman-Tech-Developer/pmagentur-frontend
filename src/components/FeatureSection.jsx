import React from 'react';
import { useTranslation } from 'react-i18next';

const FeatureSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: t('features.cooperation.title'),
      description: t('features.cooperation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: t('features.processes.title'),
      description: t('features.processes.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      )
    },
    {
      id: 3,
      title: t('features.impact.title'),
      description: t('features.impact.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="organism-feature-list">
        <div className="feature-content-wrapper">
          <div className="section-title">
            <div className="heading-container">
              <h2 className="main-heading">
                <span className="heading-line heading-line-1">{t('features.heading.line1')}</span>
                <span className="heading-line heading-line-2">{t('features.heading.line2')}</span>
                <span className="heading-line heading-line-3">{t('features.heading.line3')}</span>
              </h2>
            </div>
            
            <div className="description-container">
              <div className="description-content">
                <p>{t('features.description')}</p>
              </div>
            </div>
          </div>
          
          <div className="feature-grid-wrapper">
            <div className="feature-grid">
              {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">
                    <div className="icon-wrapper">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <div className="feature-description">
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Feature Section - TOLERO Brand Style */
        .organism-feature-list {
          width: 100%;
          padding: 35px 100px 25px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        /* Background Pattern - Subtle */
        .organism-feature-list::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(34, 211, 238, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.02) 0%, transparent 50%);
          z-index: 1;
        }
        
        .feature-content-wrapper {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Section Title Container - Reduced spacing */
        .section-title {
          margin-bottom: 50px;
          margin-top: 10px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* ✅ Heading Container */
        .heading-container {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 25px;
          position: relative;
        }
        
        /* ✅ Main Heading - Using Hero Section Font */
        .main-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          letter-spacing: -0.02em;
          text-align: center;
          width: 100%;
          max-width: 900px;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        /* ✅ Individual Heading Lines */
        .heading-line {
          display: block;
          width: 100%;
          text-align: center;
          line-height: 1.1;
          position: relative;
        }
        
        .heading-line-2 {
          color: #22D3EE;
          position: relative;
          display: inline-block;
        }
        
        .heading-line-2::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 200px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #22D3EE, transparent);
        }
        
        /* ✅ Description Container */
        .description-container {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* ✅ Description Content */
        .description-content {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #666666;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
          font-weight: 400;
        }
        
        .description-content p {
          margin: 0;
        }
        
        /* Feature Grid Wrapper */
        .feature-grid-wrapper {
          width: 100%;
          margin-bottom: 40px;
        }
        
        /* Feature Grid - 3 cards with larger width */
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        /* Feature Card - Increased Width */
        .feature-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 50px 40px;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 2px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 420px;
          width: 100%;
        }
        
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-10px);
          border-color: #22D3EE;
          box-shadow: 
            0 20px 40px rgba(34, 211, 238, 0.12),
            0 8px 16px rgba(0, 0, 0, 0.05);
        }
        
        .feature-card:hover::before {
          opacity: 1;
        }
        
        /* Feature Icon - Solid Color */
        .feature-icon {
          margin-bottom: 35px;
          display: inline-block;
          position: relative;
          z-index: 2;
        }
        
        .icon-wrapper {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 90px;
          height: 90px;
          background: transparent;
          border-radius: 50%;
          border: 2px solid #22D3EE;
          color: #22D3EE;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 4px 12px rgba(34, 211, 238, 0.15);
        }
        
        .icon-wrapper svg {
          stroke: #22D3EE;
          width: 36px;
          height: 36px;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .icon-wrapper {
          transform: scale(1.1);
          background: #22D3EE;
          border-color: #22D3EE;
          box-shadow: 0 12px 30px rgba(34, 211, 238, 0.3);
        }
        
        .feature-card:hover .icon-wrapper svg {
          stroke: #FFFFFF;
          transform: scale(1.05);
        }
        
        /* Feature Card Heading */
        .feature-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.3;
          color: #000000;
          margin-bottom: 25px;
          text-align: center;
          position: relative;
          z-index: 2;
          flex-grow: 0;
        }
        
        /* Feature Card Description */
        .feature-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #666666;
          text-align: center;
          position: relative;
          z-index: 2;
          flex-grow: 1;
          display: flex;
          align-items: center;
          width: 100%;
        }
        
        .feature-description p {
          margin: 0;
          width: 100%;
        }
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Large Tablets */
        @media (max-width: 1200px) {
          .organism-feature-list {
            padding: 30px 80px 20px 80px;
          }
          
          .main-heading {
            font-size: 44px;
          }
          
          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          
          .feature-card {
            min-height: 400px;
            padding: 40px 30px;
          }
          
          .icon-wrapper {
            width: 80px;
            height: 80px;
          }
          
          .icon-wrapper svg {
            width: 32px;
            height: 32px;
          }
          
          .feature-title {
            font-size: 24px;
          }
          
          .feature-description {
            font-size: 16px;
          }
        }
        
        /* Tablets */
        @media (max-width: 1024px) {
          .organism-feature-list {
            padding: 25px 60px 15px 60px;
          }
          
          .main-heading {
            font-size: 38px;
          }
          
          .description-content {
            max-width: 650px;
            font-size: 17px;
          }
          
          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
          
          .section-title {
            margin-bottom: 40px;
          }
          
          .feature-grid-wrapper {
            margin-bottom: 30px;
          }
          
          .feature-card {
            padding: 35px 25px;
            min-height: 380px;
          }
        }
        
        /* Medium Tablets and Large Phones */
        @media (max-width: 900px) {
          .organism-feature-list {
            padding: 20px 50px 15px 50px;
          }
          
          .main-heading {
            font-size: 34px;
          }
          
          .description-content {
            max-width: 600px;
            font-size: 16px;
          }
          
          .feature-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          
          .feature-card {
            padding: 30px 20px;
            min-height: 350px;
            border-width: 1.5px;
          }
          
          .feature-title {
            font-size: 22px;
          }
          
          .feature-description {
            font-size: 15px;
          }
          
          .icon-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }
        }
        
        /* Small Tablets and Large Phones - Switch to 2 columns */
        @media (max-width: 768px) {
          .organism-feature-list {
            padding: 20px 40px 15px 40px;
          }
          
          .main-heading {
            font-size: 32px;
          }
          
          .description-content {
            max-width: 550px;
          }
          
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
            max-width: 700px;
          }
          
          .feature-card {
            min-height: 360px;
            padding: 35px 25px;
          }
        }
        
        /* Phones - Switch to 1 column */
        @media (max-width: 650px) {
          .organism-feature-list {
            padding: 15px 30px 10px 30px;
          }
          
          .main-heading {
            font-size: 28px;
          }
          
          .feature-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            gap: 30px;
          }
          
          .feature-card {
            min-height: 320px;
            padding: 40px 30px;
          }
          
          .heading-line-2::after {
            width: 150px;
          }
        }
        
        /* Medium Phones */
        @media (max-width: 550px) {
          .organism-feature-list {
            padding: 15px 25px 10px 25px;
          }
          
          .main-heading {
            font-size: 26px;
          }
          
          .description-content {
            max-width: 480px;
            font-size: 15px;
          }
          
          .feature-grid {
            gap: 25px;
          }
          
          .feature-card {
            padding: 35px 25px;
            min-height: 300px;
          }
          
          .icon-wrapper {
            width: 70px;
            height: 70px;
          }
          
          .icon-wrapper svg {
            width: 28px;
            height: 28px;
          }
        }
        
        /* Small Phones */
        @media (max-width: 480px) {
          .organism-feature-list {
            padding: 15px 20px 10px 20px;
          }
          
          .main-heading {
            font-size: 24px;
          }
          
          .description-content {
            max-width: 100%;
            font-size: 14px;
          }
          
          .feature-title {
            font-size: 22px;
          }
          
          .feature-description {
            font-size: 15px;
          }
          
          .heading-line-2::after {
            width: 120px;
          }
          
          .icon-wrapper {
            width: 65px;
            height: 65px;
          }
          
          .icon-wrapper svg {
            width: 26px;
            height: 26px;
          }
        }
        
        /* Very Small Phones */
        @media (max-width: 400px) {
          .organism-feature-list {
            padding: 15px 15px 10px 15px;
          }
          
          .main-heading {
            font-size: 22px;
          }
          
          .feature-title {
            font-size: 20px;
          }
          
          .feature-card {
            padding: 30px 20px;
            min-height: 280px;
          }
          
          .icon-wrapper {
            width: 60px;
            height: 60px;
          }
          
          .icon-wrapper svg {
            width: 24px;
            height: 24px;
          }
        }
        
        /* Extra Small Phones */
        @media (max-width: 350px) {
          .organism-feature-list {
            padding: 12px 12px 8px 12px;
          }
          
          .main-heading {
            font-size: 20px;
          }
          
          .description-content {
            font-size: 13px;
          }
          
          .feature-card {
            padding: 25px 20px;
            min-height: 260px;
          }
        }
        
        /* For very wide screens */
        @media (min-width: 1600px) {
          .organism-feature-list {
            padding: 40px 150px 30px 150px;
          }
          
          .main-heading {
            font-size: 56px;
          }
          
          .description-content {
            max-width: 800px;
            font-size: 20px;
          }
          
          .feature-grid {
            max-width: 1600px;
            gap: 50px;
          }
          
          .feature-card {
            padding: 60px 50px;
            min-height: 480px;
          }
          
          .icon-wrapper {
            width: 100px;
            height: 100px;
          }
          
          .icon-wrapper svg {
            width: 40px;
            height: 40px;
          }
          
          .feature-title {
            font-size: 30px;
          }
          
          .feature-description {
            font-size: 19px;
          }
          
          .section-title {
            margin-bottom: 70px;
            margin-top: 20px;
          }
          
          .feature-grid-wrapper {
            margin-bottom: 50px;
          }
        }
        
        /* Extra wide screens */
        @media (min-width: 2000px) {
          .organism-feature-list {
            padding: 50px 200px 40px 200px;
          }
          
          .main-heading {
            font-size: 60px;
          }
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .feature-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .feature-card:nth-child(1) { animation-delay: 0.1s; }
        .feature-card:nth-child(2) { animation-delay: 0.2s; }
        .feature-card:nth-child(3) { animation-delay: 0.3s; }
      `}</style>
    </>
  );
};

export default FeatureSection;