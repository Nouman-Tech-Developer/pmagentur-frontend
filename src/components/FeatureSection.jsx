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
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
      )
    }
  ];

  return (
    <>
      <section className="features-minimal">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              <span className="title-line title-line-1">{t('features.heading.line1')}</span>
              <span className="title-line title-line-2">{t('features.heading.line2')}</span>
              <span className="title-line title-line-3">{t('features.heading.line3')}</span>
            </h2>
            
            <div className="features-description">
              <p>{t('features.description')}</p>
            </div>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-item">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-heading">{feature.title}</h3>
                <div className="feature-text">
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .features-minimal {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          position: relative;
        }
        
        .features-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .features-header {
          text-align: center;
          margin-bottom: 60px;
          width: 100%;
        }
        
        .features-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          letter-spacing: -0.02em;
          margin: 0 0 25px 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        
        .title-line {
          display: block;
          width: 100%;
          text-align: center;
        }
        
        .title-line-2 {
          color: #000000;
          position: relative;
        }
        
        .title-line-2::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #000000, transparent);
        }
        
        .features-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          color: #6B7280;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        .features-description p {
          margin: 0;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
          width: 100%;
        }
        
        .feature-item {
          text-align: center;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .feature-icon-wrapper {
          margin-bottom: 25px;
          color: #000000;
          transition: all 0.3s ease;
        }
        
        .feature-icon-wrapper svg {
          stroke: #000000;
          width: 48px;
          height: 48px;
          transition: all 0.3s ease;
        }
        
        .feature-item:hover .feature-icon-wrapper {
          color: #374151;
        }
        
        .feature-item:hover .feature-icon-wrapper svg {
          stroke: #374151;
          transform: translateY(-5px);
        }
        
        .feature-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 26px;
          font-weight: 700;
          line-height: 1.3;
          color: #000000;
          margin: 0 0 15px 0;
        }
        
        .feature-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #6B7280;
        }
        
        .feature-text p {
          margin: 0;
        }
        
        .feature-item {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .feature-item:nth-child(1) { animation-delay: 0.1s; }
        .feature-item:nth-child(2) { animation-delay: 0.2s; }
        .feature-item:nth-child(3) { animation-delay: 0.3s; }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 1440px) {
          .features-minimal {
            padding: 35px 80px;
          }
        }
        
        @media (max-width: 1200px) {
          .features-minimal {
            padding: 35px 60px;
          }
          
          .features-title {
            font-size: 44px;
          }
          
          .features-grid {
            gap: 40px;
          }
          
          .features-header {
            margin-bottom: 50px;
          }
          
          .features-description {
            font-size: 17px;
          }
        }
        
        @media (max-width: 1024px) {
          .features-minimal {
            padding: 35px 40px;
          }
          
          .features-title {
            font-size: 38px;
          }
          
          .features-description {
            font-size: 17px;
            max-width: 650px;
          }
          
          .features-grid {
            gap: 35px;
          }
          
          .feature-heading {
            font-size: 24px;
          }
          
          .feature-text {
            font-size: 16px;
          }
          
          .features-header {
            margin-bottom: 45px;
          }
        }
        
        @media (max-width: 900px) {
          .features-minimal {
            padding: 35px 50px;
          }
          
          .features-title {
            font-size: 34px;
          }
          
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
          }
          
          .feature-icon-wrapper svg {
            width: 42px;
            height: 42px;
          }
          
          .title-line-2::after {
            width: 150px;
          }
        }
        
        @media (max-width: 768px) {
          .features-minimal {
            padding: 35px 40px;
          }
          
          .features-title {
            font-size: 32px;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
          }
          
          .features-description {
            max-width: 550px;
          }
          
          .features-header {
            margin-bottom: 40px;
          }
        }
        
        @media (max-width: 650px) {
          .features-minimal {
            padding: 35px 30px;
          }
          
          .features-title {
            font-size: 28px;
          }
          
          .features-header {
            margin-bottom: 35px;
          }
          
          .features-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
            gap: 40px;
          }
          
          .feature-icon-wrapper svg {
            width: 48px;
            height: 48px;
          }
          
          .title-line-2::after {
            width: 120px;
          }
          
          .feature-icon-wrapper {
            margin-bottom: 20px;
          }
        }
        
        @media (max-width: 576px) {
          .features-minimal {
            padding: 35px 25px;
          }
          
          .features-title {
            font-size: 26px;
          }
          
          .features-description {
            font-size: 16px;
            max-width: 480px;
          }
          
          .feature-heading {
            font-size: 22px;
            margin-bottom: 12px;
          }
          
          .feature-text {
            font-size: 16px;
          }
          
          .features-header {
            margin-bottom: 30px;
          }
        }
        
        @media (max-width: 480px) {
          .features-minimal {
            padding: 35px 20px;
          }
          
          .features-title {
            font-size: 24px;
          }
          
          .features-description {
            font-size: 15px;
          }
          
          .feature-heading {
            font-size: 20px;
            margin-bottom: 10px;
          }
          
          .feature-text {
            font-size: 15px;
          }
          
          .feature-icon-wrapper {
            margin-bottom: 18px;
          }
          
          .feature-icon-wrapper svg {
            width: 42px;
            height: 42px;
          }
          
          .title-line-2::after {
            width: 100px;
            bottom: -4px;
          }
          
          .features-grid {
            gap: 35px;
          }
        }
        
        @media (max-width: 360px) {
          .features-minimal {
            padding: 35px 15px;
          }
          
          .features-title {
            font-size: 22px;
          }
          
          .features-description {
            font-size: 14px;
          }
          
          .feature-heading {
            font-size: 19px;
          }
          
          .feature-text {
            font-size: 14px;
          }
          
          .feature-icon-wrapper svg {
            width: 38px;
            height: 38px;
          }
          
          .features-grid {
            gap: 30px;
          }
        }
        
        @media (min-width: 1600px) {
          .features-minimal {
            padding: 35px 150px;
          }
          
          .features-title {
            font-size: 56px;
          }
          
          .features-description {
            font-size: 20px;
            max-width: 800px;
          }
          
          .features-grid {
            gap: 60px;
          }
          
          .feature-icon-wrapper svg {
            width: 56px;
            height: 56px;
          }
          
          .feature-heading {
            font-size: 30px;
          }
          
          .feature-text {
            font-size: 19px;
          }
          
          .features-header {
            margin-bottom: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default FeatureSection;