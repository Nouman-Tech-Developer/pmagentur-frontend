import React from 'react';
import { ChevronRight } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI Phone Assistant for Logistics Company",
      description: "Automated customer hotline with 24/7 availability reduced wait times by 80% and increased customer satisfaction.",
      category: "AI Automation",
      result: "80% faster processing"
    },
    {
      id: 2,
      title: "Chatbot Integration for E-Commerce",
      description: "Intelligent shop assistant automatically answers customer inquiries and increased conversion rate by 35%.",
      category: "AI Chatbots",
      result: "35% more conversions"
    },
    {
      id: 3,
      title: "Email Automation for SaaS Provider",
      description: "Automated onboarding and support communication reduces manual effort by 60 hours per week.",
      category: "Workflow Optimization",
      result: "60h/week saved"
    },
    {
      id: 4,
      title: "Complete AI Transformation for Mid-Sized Business",
      description: "Comprehensive automation of telephony, email and internal processes increased efficiency by 200%.",
      category: "AI Integration",
      result: "200% more efficient"
    }
  ];

  return (
    <>
      <section className="cases-section">
        <div className="cases-container">
          <div className="cases-header">
            <h2 className="cases-title">Success Stories</h2>
            <p className="cases-subtitle">How companies optimize their processes with Tolero AI automation</p>
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
                      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#0071E3"/>
                    </svg>
                    <span>{caseStudy.result}</span>
                  </div>
                  <a 
                    href="#" 
                    className="case-link"
                    aria-label={`Learn more about ${caseStudy.title}`}
                  >
                    View Case Study
                    <ChevronRight className="chevron-icon" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          
        </div>
      </section>

      <style jsx="true">{`
        /* Case Studies Section */
        .cases-section {
          width: 100%;
          padding: 35px 100px; /* 35px top-bottom, 100px left-right */
          background: #FFFFFF;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .cases-section {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-section {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .cases-section {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .cases-container {
          max-width: 1600px;
          margin: 0 auto;
        }
        
        /* Header */
        .cases-header {
          text-align: center;
          margin-bottom: 64px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Title - RED */
        .cases-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        /* Subtitle - BLUE */
        .cases-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          margin: 0;
        }
        
        @media only screen and (max-width: 768px) {
          .cases-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .cases-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Grid - 4 columns in one row */
        .cases-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 cards in one row */
          gap: 30px;
          margin-bottom: 48px;
        }
        
        @media only screen and (max-width: 1400px) {
          .cases-grid {
            grid-template-columns: repeat(3, 1fr); /* 3 cards on medium screens */
          }
        }
        
        @media only screen and (max-width: 1100px) {
          .cases-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 cards on tablets */
            gap: 24px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .cases-grid {
            grid-template-columns: 1fr; /* 1 card on mobile */
            max-width: 500px;
            margin: 0 auto 48px;
          }
        }
        
        /* Case Card */
        .case-card {
          background: #FFFFFF;
          border-radius: 20px; /* Rounded corners */
          padding: 40px 32px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); /* Soft shadow */
          border: none; /* Removed border */
        }
        
        .case-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          border-color: #0071E3;
        }
        
        @media only screen and (max-width: 768px) {
          .case-card {
            padding: 32px 24px;
          }
        }
        
        /* Case Content */
        .case-content {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        /* Category Tag */
        .case-category {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: #0071E3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          display: inline-block;
          padding: 4px 12px;
          background: rgba(0, 113, 227, 0.1);
          border-radius: 20px;
          align-self: flex-start;
        }
        
        /* Case Title - RED */
        .case-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 22px;
          line-height: 30px;
          font-weight: 500;
          color: #E10600;
          margin: 0 0 16px 0;
          flex: 1;
        }
        
        /* Case Description */
        .case-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #6B7280;
          margin: 0 0 24px 0;
          flex: 2;
        }
        
        /* Result Badge */
        .case-result {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: #000000;
          display: flex;
          align-items: center;
          margin-bottom: 24px;
          padding: 12px 16px;
          background: #F5F5F7;
          border-radius: 8px;
        }
        
        /* Case Link with Chevron Arrow */
        .case-link {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 500;
          color: #0071E3;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          transition: all 0.2s ease;
        }
        
        .chevron-icon {
          margin-left: 8px;
          transition: transform 0.2s ease;
        }
        
        .case-link:hover {
          color: #E10600;
        }
        
        .case-link:hover .chevron-icon {
          transform: translateX(4px);
          color: #E10600;
        }
        
        /* CTA Button */
        .cases-cta {
          text-align: center;
        }
        
        /* Button Styles - White outline, blue on hover */
        .cases-btn {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 32px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          min-width: 220px;
          outline: none;
          border: 2px solid #E5E5E7; /* Light gray border */
          box-sizing: border-box;
          letter-spacing: 0.01em;
          background-color: transparent;
          color: #0071E3; /* Blue text */
        }
        
        .cases-btn:hover {
          background-color: #0071E3; /* Blue background on hover */
          color: #FFFFFF; /* White text on hover */
          border-color: #0071E3; /* Blue border on hover */
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 113, 227, 0.3);
        }
        
        /* Responsive */
        @media only screen and (max-width: 1024px) {
          .case-title {
            font-size: 20px;
            line-height: 28px;
          }
          
          .case-description {
            font-size: 15px;
            line-height: 22px;
          }
          
          .cases-btn {
            padding: 10px 24px;
            font-size: 15px;
            height: 44px;
            min-width: 200px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .case-title {
            font-size: 18px;
            line-height: 26px;
          }
          
          .case-description {
            font-size: 14px;
            line-height: 20px;
          }
          
          .case-link {
            font-size: 14px;
          }
          
          .cases-btn {
            padding: 8px 20px;
            font-size: 14px;
            height: 40px;
            min-width: 180px;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudies;