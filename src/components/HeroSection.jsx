import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="hero hero--dark hero--center hero--full-height">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-heading-section">
              <h1 className="hero-main-headline">Tolero – AI Automation for Companies</h1>
              <h2 className="hero-subheadline">We automate processes, telephony and communication with AI</h2>
            </div>
            
            <div className="hero-content-section">
              <div>
                <div className="hero-description">
                  <div className="hero-text">
                    <p>So your company works more efficiently, reduces costs and grows faster.</p>
                  </div>
                  
                  <div className="hero-benefits">
                    <ul className="hero-benefits-list">
                      <li className="hero-benefit-item">24/7 availability for customers</li>
                      <li className="hero-benefit-item">Relief for your team</li>
                      <li className="hero-benefit-item">Automatic appointment scheduling</li>
                      <li className="hero-benefit-item">Pre-qualification of leads</li>
                      <li className="hero-benefit-item">Scalable with high call volume</li>
                    </ul>
                  </div>
                </div>
                
                <div className="hero-button-group">
                  <a 
                    className="hero-btn hero-btn--primary" 
                    href="https://www.tolero.com/demo" 
                    tabIndex="0" 
                    aria-disabled="false"
                  >
                    Request Demo
                  </a>
                  
                  <a 
                    className="hero-btn hero-btn--secondary" 
                    href="https://www.tolero.com/references" 
                    tabIndex="0" 
                    aria-disabled="false"
                  >
                    View References
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Hero Base Styles */
        .hero {
          width: 100%;
          min-height: 50vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 35px 60px; /* 35px top-bottom, 60px left-right */
          position: relative;
          background: #000000;
        }

        @media only screen and (max-width: 768px) {
          .hero {
            padding: 35px 24px; /* Mobile: 35px top-bottom, 24px left-right */
          }
        }

        @media only screen and (max-width: 480px) {
          .hero {
            padding: 35px 20px; /* Small mobile: 35px top-bottom, 20px left-right */
          }
        }

        /* Dark Background */
        .hero--dark {
          background: #000000;
          color: #FFFFFF;
          position: relative;
        }

        .hero--dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 60%),
                    radial-gradient(circle at 70% 30%, rgba(34, 211, 238, 0.1) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Full Height */
        .hero--full-height {
          min-height: 100vh;
        }

        /* Center Alignment */
        .hero--center .hero-container {
          align-items: center;
          justify-content: center;
        }

        .hero--center .hero-content {
          align-items: center;
          text-align: center;
          gap: 0;
        }

        /* Container */
        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* Content Layout */
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 48px;
          width: 100%;
        }

        /* Heading Section */
        .hero-heading-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          width: 100%;
          margin-bottom: 40px;
        }

        /* Main Headline - RED (48px, 600 weight) */
        .hero-main-headline {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #E10600; /* Red for headlines */
          margin: 0;
          max-width: 900px;
        }

        @media only screen and (max-width: 1024px) {
          .hero-main-headline {
            font-size: 40px;
            line-height: 48px;
          }
        }

        @media only screen and (max-width: 768px) {
          .hero-main-headline {
            font-size: 32px;
            line-height: 40px;
          }
        }

        @media only screen and (max-width: 480px) {
          .hero-main-headline {
            font-size: 28px;
            line-height: 36px;
          }
        }

        /* Subheadline - BLUE (22px, 500 weight) */
        .hero-subheadline {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 22px;
          line-height: 30px;
          font-weight: 500;
          color: #0071E3; /* Blue for subheadlines */
          margin: 0;
          max-width: 800px;
          opacity: 0.9;
        }

        @media only screen and (max-width: 768px) {
          .hero-subheadline {
            font-size: 20px;
            line-height: 28px;
          }
        }

        @media only screen and (max-width: 480px) {
          .hero-subheadline {
            font-size: 18px;
            line-height: 26px;
          }
        }

        /* Content Section */
        .hero-content-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
          max-width: 800px;
        }

        /* Description */
        .hero-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #8E8E93;
          width: 100%;
        }

        .hero-text p {
          margin: 0 0 24px 0;
          padding: 0;
          line-height: 1.6;
          font-size: inherit;
          color: inherit;
        }

        /* Benefits List */
        .hero-benefits {
          margin-top: 32px;
        }

        .hero-benefits-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          text-align: center;
        }

        @media only screen and (min-width: 640px) {
          .hero-benefits-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (min-width: 768px) {
          .hero-benefits-list {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .hero-benefit-item {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #8E8E93;
          padding-left: 24px;
          position: relative;
          text-align: left;
        }

        .hero-benefit-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #0071E3;
          font-weight: 600;
          font-size: 14px;
        }

        /* Button Group */
        .hero-button-group {
          display: flex;
          flex-direction: row;
          gap: 16px;
          justify-content: center;
          align-items: center;
          width: 100%;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        @media only screen and (max-width: 640px) {
          .hero-button-group {
            flex-direction: row;
            gap: 12px;
            justify-content: center;
          }
        }

        @media only screen and (max-width: 480px) {
          .hero-button-group {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Button Styles - INCREASED WIDTH: 180x40 with 8px 24px padding */
        .hero-btn {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 8px 24px; /* 8px vertical, 24px horizontal */
          border-radius: 25px; /* Pill shape */
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px; /* Total height 40px */
          width: 180px; /* INCREASED: Total width 180px (from 157px) */
          min-width: 180px; /* Ensure minimum width */
          outline: none;
          border: none;
          box-sizing: border-box;
          letter-spacing: 0.01em;
          flex-shrink: 0;
        }

        /* Center buttons in mobile */
        @media only screen and (max-width: 640px) {
          .hero-btn {
            width: 180px;
            height: 40px;
            margin: 0;
          }
        }

        @media only screen and (max-width: 480px) {
          .hero-btn {
            width: 180px;
            height: 40px;
          }
        }

        /* Primary Button - Solid blue */
        .hero-btn--primary {
          background-color: #2563EB;
          color: #FFFFFF;
          border: 1px solid #2563EB;
        }

        .hero-btn--primary:hover {
          background-color: #1D4ED8;
          border-color: #1D4ED8;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }

        .hero-btn--primary:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
        }

        /* Secondary Button - Outline style */
        .hero-btn--secondary {
          background-color: transparent;
          color: #FFFFFF;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .hero-btn--secondary:hover {
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(255, 255, 255, 0.1);
        }

        .hero-btn--secondary:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(255, 255, 255, 0.1);
        }

        /* Focus states for accessibility */
        .hero-btn:focus-visible {
          outline: 2px solid #0071E3;
          outline-offset: 2px;
        }

        /* Animation for content */
        .hero-main-headline {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }

        .hero-subheadline {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both;
        }

        .hero-description {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.2s both;
        }

        .hero-benefits {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.3s both;
        }

        .hero-button-group {
          animation: heroFadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.4s both;
        }

        @keyframes heroFadeInUp {
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

export default HeroSection;