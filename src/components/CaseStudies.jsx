import React from 'react';
import { useTranslation } from 'react-i18next';

const CaseStudies = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      id: 1,
      title: t('caseStudies.case1.title'),
      description: t('caseStudies.case1.description'),
      category: t('caseStudies.case1.category'),
      result: t('caseStudies.case1.result')
    },
    {
      id: 2,
      title: t('caseStudies.case2.title'),
      description: t('caseStudies.case2.description'),
      category: t('caseStudies.case2.category'),
      result: t('caseStudies.case2.result')
    },
    {
      id: 3,
      title: t('caseStudies.case3.title'),
      description: t('caseStudies.case3.description'),
      category: t('caseStudies.case3.category'),
      result: t('caseStudies.case3.result')
    },
    {
      id: 4,
      title: t('caseStudies.case4.title'),
      description: t('caseStudies.case4.description'),
      category: t('caseStudies.case4.category'),
      result: t('caseStudies.case4.result')
    }
  ];

  return (
    <>
      <section className="cases-section">
        <div className="cases-container">
          <div className="cases-header">
            <h2 className="cases-title">{t('caseStudies.heading')}</h2>
            <p className="cases-subtitle">{t('caseStudies.subheading')}</p>
          </div>
          
          <div className="cases-grid">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.id} className="case-card">
                <div className="case-content">
                  <div className="case-category">{caseStudy.category}</div>
                  <h3 className="case-title">{caseStudy.title}</h3>
                  <p className="case-description">{caseStudy.description}</p>
                  <div className="case-result">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginRight: '8px'}}>
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#22D3EE"/>
                    </svg>
                    <span>{caseStudy.result}</span>
                  </div>
                  <a 
                    href="#" 
                    className="case-link"
                    aria-label={`Learn more about ${caseStudy.title}`}
                  >
                    {t('caseStudies.viewCase')}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="chevron-icon">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          
        </div>
      </section>

      <style jsx="true">{`
        /* Case Studies Section - Reduced spacing */
        .cases-section {
          width: 100%;
          padding: 15px 100px 25px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .cases-section::before {
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
        
        @media only screen and (max-width: 1200px) {
          .cases-section {
            padding: 10px 80px 20px 80px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .cases-section {
            padding: 10px 60px 15px 60px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .cases-section {
            padding: 10px 50px 15px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-section {
            padding: 10px 40px 15px 40px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .cases-section {
            padding: 10px 30px 15px 30px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .cases-section {
            padding: 10px 25px 15px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .cases-section {
            padding: 10px 20px 15px 20px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .cases-section {
            padding: 8px 15px 12px 15px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .cases-section {
            padding: 8px 12px 12px 12px;
          }
        }
        
        /* Extra wide screens */
        @media only screen and (min-width: 1600px) {
          .cases-section {
            padding: 20px 150px 30px 150px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .cases-section {
            padding: 30px 200px 40px 200px;
          }
        }
        
        .cases-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Header - Reduced spacing */
        .cases-header {
          text-align: center;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
        }
        
        @media only screen and (max-width: 900px) {
          .cases-header {
            margin-bottom: 40px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-header {
            margin-bottom: 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .cases-header {
            margin-bottom: 30px;
          }
        }
        
        .cases-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        .cases-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          margin: 0;
        }
        
        @media only screen and (max-width: 1200px) {
          .cases-title {
            font-size: 44px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .cases-title {
            font-size: 38px;
          }
          
          .cases-subtitle {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .cases-title {
            font-size: 34px;
          }
          
          .cases-subtitle {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-title {
            font-size: 32px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .cases-title {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .cases-title {
            font-size: 26px;
          }
          
          .cases-subtitle {
            font-size: 15px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .cases-title {
            font-size: 24px;
          }
          
          .cases-subtitle {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .cases-title {
            font-size: 22px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .cases-title {
            font-size: 20px;
          }
          
          .cases-subtitle {
            font-size: 13px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .cases-title {
            font-size: 56px;
          }
          
          .cases-subtitle {
            font-size: 20px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .cases-title {
            font-size: 60px;
          }
        }
        
        /* Grid - 4 columns in one row */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          margin-bottom: 40px;
        }
        
        @media only screen and (max-width: 1400px) {
          .cases-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        
        @media only screen and (max-width: 1100px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto 30px;
            gap: 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .cases-grid {
            margin-bottom: 25px;
            gap: 18px;
          }
        }
        
        /* Case Card */
        .case-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 35px 28px;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          overflow: hidden;
        }
        
        .case-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        .case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 211, 238, 0.3);
        }
        
        .case-card:hover::before {
          opacity: 1;
        }
        
        @media only screen and (max-width: 1100px) {
          .case-card {
            padding: 30px 24px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-card {
            padding: 28px 20px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .case-card {
            padding: 24px 18px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .case-card {
            padding: 20px 16px;
          }
        }
        
        /* Case Content */
        .case-content {
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          z-index: 2;
        }
        
        /* Category Tag */
        .case-category {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          line-height: 18px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          display: inline-block;
          padding: 5px 12px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 20px;
          align-self: flex-start;
          transition: all 0.3s ease;
        }
        
        .case-card:hover .case-category {
          background: rgba(34, 211, 238, 0.15);
          transform: translateY(-2px);
        }
        
        @media only screen and (max-width: 768px) {
          .case-category {
            font-size: 12px;
            padding: 4px 10px;
            margin-bottom: 14px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .case-category {
            font-size: 11px;
            padding: 3px 8px;
            margin-bottom: 12px;
          }
        }
        
        /* Case Title */
        .case-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000;
          margin: 0 0 18px 0;
          flex: 1;
          transition: color 0.3s ease;
        }
        
        .case-card:hover .case-title {
          color: #22D3EE;
        }
        
        @media only screen and (max-width: 1200px) {
          .case-title {
            font-size: 18px;
            margin-bottom: 16px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-title {
            font-size: 17px;
            margin-bottom: 14px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .case-title {
            font-size: 16px;
            margin-bottom: 12px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .case-title {
            font-size: 15px;
            margin-bottom: 10px;
          }
        }
        
        /* Case Description */
        .case-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 400;
          color: #666666;
          margin: 0 0 22px 0;
          flex: 2;
        }
        
        @media only screen and (max-width: 1200px) {
          .case-description {
            font-size: 14px;
            margin-bottom: 18px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-description {
            font-size: 13px;
            line-height: 1.5;
            margin-bottom: 16px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .case-description {
            font-size: 12px;
            margin-bottom: 14px;
          }
        }
        
        /* Result Badge */
        .case-result {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #000000;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          padding: 12px 16px;
          background: rgba(34, 211, 238, 0.05);
          border-radius: 12px;
          border: 1px solid rgba(34, 211, 238, 0.1);
          transition: all 0.3s ease;
        }
        
        .case-card:hover .case-result {
          background: rgba(34, 211, 238, 0.1);
          border-color: rgba(34, 211, 238, 0.2);
          transform: translateY(-2px);
        }
        
        @media only screen and (max-width: 1200px) {
          .case-result {
            font-size: 14px;
            padding: 10px 14px;
            margin-bottom: 20px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-result {
            font-size: 13px;
            padding: 8px 12px;
            margin-bottom: 18px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .case-result {
            font-size: 12px;
            padding: 6px 10px;
            margin-bottom: 16px;
          }
        }
        
        /* Case Link with Chevron Arrow */
        .case-link {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #22D3EE;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          padding: 8px 0;
          position: relative;
          overflow: hidden;
        }
        
        .case-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #22D3EE;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        
        .case-link:hover {
          color: #2563EB;
          transform: translateX(4px);
        }
        
        .case-link:hover::after {
          transform: translateX(0);
        }
        
        .chevron-icon {
          margin-left: 8px;
          transition: transform 0.3s ease;
        }
        
        .case-link:hover .chevron-icon {
          transform: translateX(4px);
        }
        
        @media only screen and (max-width: 1200px) {
          .case-link {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-link {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .case-link {
            font-size: 12px;
          }
        }
        
        /* CTA Button - Match other button styles */
        .cases-cta {
          text-align: center;
          margin-bottom: 10px;
        }
        
        .cases-btn {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 157px;
          border: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
          background-color: transparent;
          color: #22D3EE;
          border: 2px solid #22D3EE;
        }
        
        .cases-btn:hover {
          background-color: #22D3EE;
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(34, 211, 238, 0.3);
        }
        
        @media only screen and (max-width: 1200px) {
          .cases-btn {
            padding: 8px 24px;
            font-size: 1rem;
            height: 40px;
            width: 157px;
          }
        }
        
        /* Animations */
        .case-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .case-card:nth-child(1) { animation-delay: 0.1s; }
        .case-card:nth-child(2) { animation-delay: 0.2s; }
        .case-card:nth-child(3) { animation-delay: 0.3s; }
        .case-card:nth-child(4) { animation-delay: 0.4s; }
        
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
      `}</style>
    </>
  );
};

export default CaseStudies;