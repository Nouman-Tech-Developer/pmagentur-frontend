import React from 'react';
import { useTranslation } from 'react-i18next';

const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      id: 1,
      value: "500+",
      label: t('stats.projects'),
      description: t('stats.projectsDesc')
    },
    {
      id: 2,
      value: "200+",
      label: t('stats.customers'),
      description: t('stats.customersDesc')
    },
    {
      id: 3,
      value: "98%",
      label: t('stats.satisfaction'),
      description: t('stats.satisfactionDesc')
    },
    {
      id: 4,
      value: "24/7",
      label: t('stats.support'),
      description: t('stats.supportDesc')
    }
  ];

  return (
    <>
      <section className="tolero-success-section">
        <div className="success-container">
          {/* Corner Badge - LEFT SIDE */}
          <div className="success-corner-badge left-badge">
            <span className="badge-text">{t('stats.why')}</span>
          </div>
          
          {/* Row 1: Heading & Description */}
          <div className="row-1">
            <div className="row-1-content">
              <div className="heading-side">
                <h2 className="success-heading">
                  <span className="heading-line">{t('stats.headingLine1')}</span>
                  <span className="heading-line highlight">{t('stats.headingLine2')}</span>
                </h2>
              </div>
              
              <div className="description-side">
                <div className="success-description">
                  <p>{t('stats.description')}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Row 2: Stats Cards - Full width */}
          <div className="row-2">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.id} className="stat-card">
                  <div className="stat-value">{stat.value}</div>
                  <h3 className="stat-label">{stat.label}</h3>
                  <p className="stat-desc">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Success Section - 35px 100px padding */
        .tolero-success-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
        }
        
        /* Clean background, remove patterns */
        .success-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
        }
        
        /* Corner Badge - LEFT SIDE POSITION */
        .success-corner-badge {
          position: absolute;
          top: -15px;
          background: rgba(0, 102, 255, 0.1); /* Brand blue with opacity */
          padding: 10px 25px;
          z-index: 10;
        }
        
        /* LEFT BADGE STYLING */
        .left-badge {
          left: 0;
          border-radius: 0 0 25px 0;
        }
        
        .badge-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0066FF; /* Brand blue */
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        /* Row 1: Heading & Description (2 columns) */
        .row-1 {
          margin-bottom: 60px;
          margin-top: 40px;
        }
        
        .row-1-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        /* Heading Side */
        .success-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0;
          letter-spacing: -0.02em;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .heading-line {
          display: block;
        }
        
        .heading-line.highlight {
          color: #0066FF; /* Brand blue */
          position: relative;
          display: inline-block;
        }
        
        .heading-line.highlight::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 120px;
          height: 2px;
          background: #0066FF; /* Brand blue */
        }
        
        /* Description Side - Anthracite color */
        .success-description p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #374151; /* Anthracite */
          margin: 0;
        }
        
        /* Row 2: Stats Cards - 4 columns */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }
        
        /* Stat Card - NO BORDER, NO OUTLINE */
        .stat-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 40px 30px;
          text-align: center;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          overflow: hidden;
          /* NO BORDER */
        }
        
        /* Remove gradient overlay */
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 15px 30px rgba(0, 102, 255, 0.1), /* Brand blue shadow */
            0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        /* Stat Value - Brand blue */
        .stat-value {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #0066FF; /* Brand blue */
          margin-bottom: 12px;
          line-height: 1;
        }
        
        /* Stat Label - Black */
        .stat-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 8px 0;
          line-height: 1.3;
        }
        
        /* Stat Description - Anthracite */
        .stat-desc {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 400;
          color: #374151; /* Anthracite */
          margin: 0;
        }
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .tolero-success-section {
            padding: 35px 60px;
          }
          
          .success-heading {
            font-size: 44px;
          }
          
          .success-description p {
            font-size: 17px;
          }
          
          .stats-grid {
            gap: 25px;
          }
          
          .row-1-content {
            gap: 60px;
          }
          
          .row-1 {
            margin-bottom: 50px;
            margin-top: 30px;
          }
        }
        
        /* Tablet: 1024px */
        @media (max-width: 1024px) {
          .tolero-success-section {
            padding: 35px 40px;
          }
          
          .success-heading {
            font-size: 38px;
          }
          
          .success-description p {
            font-size: 16px;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .row-1-content {
            gap: 50px;
          }
          
          .row-1 {
            margin-bottom: 45px;
            margin-top: 25px;
          }
          
          .stat-card {
            padding: 35px 25px;
          }
          
          .stat-value {
            font-size: 42px;
          }
          
          .stat-label {
            font-size: 18px;
          }
          
          .stat-desc {
            font-size: 14px;
          }
        }
        
        /* Tablet Portrait: 768px */
        @media (max-width: 768px) {
          .tolero-success-section {
            padding: 35px 40px;
          }
          
          .success-heading {
            font-size: 32px;
          }
          
          .heading-line.highlight::after {
            width: 100px;
          }
          
          .success-description p {
            font-size: 15px;
            line-height: 1.7;
          }
          
          .row-1-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          
          .row-1 {
            margin-bottom: 40px;
            margin-top: 25px;
          }
          
          .stats-grid {
            gap: 20px;
          }
          
          .stat-card {
            padding: 30px 20px;
          }
          
          .stat-value {
            font-size: 36px;
            margin-bottom: 10px;
          }
          
          .stat-label {
            font-size: 17px;
          }
          
          .stat-desc {
            font-size: 13px;
          }
          
          .success-corner-badge {
            top: -10px;
            padding: 6px 16px;
          }
          
          .badge-text {
            font-size: 12px;
            letter-spacing: 1px;
          }
        }
        
        /* Mobile: 576px */
        @media (max-width: 576px) {
          .tolero-success-section {
            padding: 35px 25px;
          }
          
          .success-heading {
            font-size: 28px;
          }
          
          .success-description p {
            font-size: 14px;
            max-width: 480px;
          }
          
          .row-1 {
            margin-bottom: 35px;
            margin-top: 20px;
          }
        }
        
        /* Small Phones: 480px */
        @media (max-width: 480px) {
          .tolero-success-section {
            padding: 35px 20px;
          }
          
          .success-heading {
            font-size: 24px;
          }
          
          .success-description p {
            font-size: 13px;
          }
          
          .stats-grid {
            grid-template-columns: 1fr;
            gap: 25px;
            max-width: 300px;
            margin: 0 auto;
          }
          
          .stat-card {
            padding: 25px 20px;
          }
          
          .stat-value {
            font-size: 32px;
          }
          
          .stat-label {
            font-size: 16px;
          }
          
          .success-corner-badge {
            top: -8px;
            padding: 5px 14px;
          }
          
          .badge-text {
            font-size: 11px;
          }
        }
        
        /* Extra Small Phones: 360px */
        @media (max-width: 360px) {
          .tolero-success-section {
            padding: 35px 15px;
          }
          
          .success-heading {
            font-size: 22px;
          }
          
          .success-description p {
            font-size: 12px;
          }
          
          .stat-card {
            padding: 20px 15px;
          }
          
          .stat-value {
            font-size: 28px;
          }
          
          .stat-label {
            font-size: 15px;
          }
          
          .stat-desc {
            font-size: 12px;
          }
        }
        
        /* Wide Screens: 1600px+ */
        @media (min-width: 1600px) {
          .tolero-success-section {
            padding: 35px 150px;
          }
          
          .success-heading {
            font-size: 56px;
          }
          
          .success-description p {
            font-size: 20px;
            max-width: 800px;
          }
          
          .stats-grid {
            gap: 40px;
          }
          
          .stat-value {
            font-size: 52px;
          }
          
          .stat-label {
            font-size: 22px;
          }
          
          .stat-desc {
            font-size: 16px;
          }
          
          .row-1 {
            margin-bottom: 70px;
            margin-top: 50px;
          }
          
          .success-corner-badge {
            top: -20px;
            padding: 12px 30px;
          }
        }
        
        /* Animations */
        .heading-side {
          opacity: 0;
          transform: translateX(-30px);
          animation: fadeInLeft 0.8s ease forwards;
        }
        
        .description-side {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeInRight 0.8s ease forwards;
        }
        
        .stat-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .stat-card:nth-child(1) { animation-delay: 0.2s; }
        .stat-card:nth-child(2) { animation-delay: 0.3s; }
        .stat-card:nth-child(3) { animation-delay: 0.4s; }
        .stat-card:nth-child(4) { animation-delay: 0.5s; }
        
        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default StatsSection;