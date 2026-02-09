import React from 'react';

const AboutSection = () => {
  return (
    <>
      <section className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">About Tolero</h2>
              <p className="about-description">
                Tolero is your specialized partner for AI automation in companies. We develop customized solutions that make your processes more efficient, reduce costs and accelerate growth.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Availability</div>
                </div>
                <div className="about-stat">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">German AI</div>
                </div>
                <div className="about-stat">
                  <div className="stat-number">60%</div>
                  <div className="stat-label">Cost Savings</div>
                </div>
              </div>
              <a href="https://www.tolero.com/about" className="about-btn">
                More about Tolero
              </a>
            </div>
            <div className="about-visual">
              {/* Abstract geometric shape */}
              <div className="about-shape">
                <div className="shape-circle shape-circle--blue"></div>
                <div className="shape-circle shape-circle--cyan"></div>
                <div className="shape-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* About Section */
        .about-section {
          width: 100%;
          padding: 35px 100px; /* 35px top-bottom, 100px left-right */
          background: #F5F5F7;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .about-section {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .about-section {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-section {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .about-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        /* Content Layout - 2 columns */
        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media only screen and (max-width: 1024px) {
          .about-content {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        
        /* Text Content */
        .about-text {
          padding-right: 40px;
        }
        
        @media only screen and (max-width: 1024px) {
          .about-text {
            padding-right: 0;
            text-align: center;
          }
        }
        
        /* Title - RED */
        .about-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 24px 0;
        }
        
        /* Description */
        .about-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #000000;
          margin: 0 0 40px 0;
        }
        
        @media only screen and (max-width: 768px) {
          .about-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .about-description {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Stats */
        .about-stats {
          display: flex;
          gap: 48px;
          margin-bottom: 40px;
        }
        
        @media only screen and (max-width: 768px) {
          .about-stats {
            justify-content: center;
            gap: 40px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-stats {
            flex-direction: column;
            gap: 24px;
          }
        }
        
        /* Stat Item */
        .about-stat {
          display: flex;
          flex-direction: column;
        }
        
        .stat-number {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          line-height: 40px;
          font-weight: 600;
          color: #0071E3;
          margin-bottom: 4px;
        }
        
        .stat-label {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media only screen and (max-width: 768px) {
          .stat-number {
            font-size: 28px;
            line-height: 36px;
          }
        }
        
        /* Button - White outline, blue on hover */
        .about-btn {
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
          min-width: 200px;
          outline: none;
          border: 2px solid #E5E5E7; /* Light gray border */
          box-sizing: border-box;
          letter-spacing: 0.01em;
          background-color: transparent;
          color: #0071E3; /* Blue text */
        }
        
        .about-btn:hover {
          background-color: #0071E3; /* Blue background on hover */
          color: #FFFFFF; /* White text on hover */
          border-color: #0071E3; /* Blue border on hover */
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 113, 227, 0.3);
        }
        
        @media only screen and (max-width: 1024px) {
          .about-btn {
            display: flex;
            margin: 0 auto;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .about-btn {
            padding: 10px 24px;
            font-size: 15px;
            height: 44px;
            min-width: 180px;
          }
        }
        
        /* Visual - Abstract geometric shape */
        .about-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 300px;
        }
        
        .about-shape {
          position: relative;
          width: 200px;
          height: 200px;
        }
        
        .shape-circle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.8;
        }
        
        .shape-circle--blue {
          width: 120px;
          height: 120px;
          background: #0071E3;
          top: 0;
          left: 0;
          animation: floatShape 6s ease-in-out infinite;
        }
        
        .shape-circle--cyan {
          width: 80px;
          height: 80px;
          background: #22D3EE;
          bottom: 0;
          right: 0;
          animation: floatShape 6s ease-in-out infinite reverse;
        }
        
        .shape-line {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 160px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #0071E3, transparent);
        }
        
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        /* Responsive */
        @media only screen and (max-width: 768px) {
          .about-visual {
            height: 250px;
          }
          
          .about-shape {
            width: 160px;
            height: 160px;
          }
          
          .shape-circle--blue {
            width: 100px;
            height: 100px;
          }
          
          .shape-circle--cyan {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection;