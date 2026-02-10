import React from 'react';

const ValuesSection = () => {
  return (
    <>
      <section className="values-section">
        <div className="values-container">
          
          {/* Section Header */}
          <div className="values-header">
            <p className="values-tagline">What drives us</p>
            <h1 className="values-heading">Our values</h1>
            <div className="values-description">
              <p>
                Our values shape the way we think and act - as a team, in cooperation with our customers and in every project.
              </p>
            </div>
          </div>
          
          {/* Values Grid */}
          <div className="values-grid">
            
            {/* Collaboration Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32 20C34.2091 20 36 18.2091 36 16C36 13.7909 34.2091 12 32 12C29.7909 12 28 13.7909 28 16C28 18.2091 29.7909 20 32 20Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 36C34.2091 36 36 34.2091 36 32C36 29.7909 34.2091 28 32 28C29.7909 28 28 29.7909 28 32C28 34.2091 29.7909 36 32 36Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 36C18.2091 36 20 34.2091 20 32C20 29.7909 18.2091 28 16 28C13.7909 28 12 29.7909 12 32C12 34.2091 13.7909 36 16 36Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M28 16H20" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 32H28" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 32H12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 20V28" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 20V28" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Collaboration</h3>
              <p className="value-text">
                We work in partnership, support each other, celebrate successes and overcome challenges together.
              </p>
            </div>
            
            {/* Innovation Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 16V12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 36V32" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 24H12" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M36 24H32" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 19L16 16" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 32L29 29" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 29L16 32" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M32 16L29 19" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Innovation</h3>
              <p className="value-text">
                We embrace change, constantly learn as a team, and actively shape the future with cutting-edge AI solutions.
              </p>
            </div>
            
            {/* Excellence Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22L20 30L36 14" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Excellence</h3>
              <p className="value-text">
                We think in terms of solutions, pragmatically and with precision, delivering exceptional quality in every project.
              </p>
            </div>
            
            {/* Responsibility Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 28V24" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M24 16H24.02" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Responsibility</h3>
              <p className="value-text">
                We act on our own responsibility, make clear decisions, and stand by our results with integrity.
              </p>
            </div>
            
            {/* Partnership Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 34C21.4183 34 25 30.4183 25 26C25 21.5817 21.4183 18 17 18C12.5817 18 9 21.5817 9 26C9 30.4183 12.5817 34 17 34Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M31 34C35.4183 34 39 30.4183 39 26C39 21.5817 35.4183 18 31 18C26.5817 18 23 21.5817 23 26C23 30.4183 26.5817 34 31 34Z" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 26H31" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Partnership</h3>
              <p className="value-text">
                We build trust through transparency and shared responsibility, within our team and with every customer.
              </p>
            </div>
            
            {/* Agility Value */}
            <div className="value-card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4V44" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 24H44" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34 14L14 34" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M34 34L14 14" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="value-title">Agility</h3>
              <p className="value-text">
                We work with modern tools and agile methods, focusing on collaboration, speed, and clear results.
              </p>
            </div>
            
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* ========== BASE STYLES ========== */
        .values-section {
          width: 100%;
          background: #FFFFFF;
        }
        
        .values-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 100px 35px;
        }
        
        @media only screen and (max-width: 1024px) {
          .values-container {
            padding: 80px 35px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .values-container {
            padding: 60px 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .values-container {
            padding: 40px 35px;
          }
        }
        
        /* ========== HEADER ========== */
        .values-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        @media only screen and (max-width: 768px) {
          .values-header {
            margin-bottom: 40px;
          }
        }
        
        /* Tagline - BLUE COLOR */
        .values-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #0066FF;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
          margin-top: 0;
        }
        
        /* Heading */
        .values-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        /* Description */
        .values-description p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;
          color: #374151;
          margin: 0;
        }
        
        /* ========== VALUES GRID ========== */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        @media only screen and (max-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .values-grid {
            grid-template-columns: 1fr;
            gap: 30px;
            max-width: 500px;
          }
        }
        
        /* ========== VALUE CARD ========== */
        .value-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 30px;
          border-radius: 12px;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
        }
        
        .value-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          border-color: #0066FF;
        }
        
        @media only screen and (max-width: 768px) {
          .value-card {
            padding: 30px 20px;
          }
        }
        
        /* Value Icon */
        .value-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 102, 255, 0.05);
          border-radius: 50%;
          padding: 12px;
        }
        
        /* Value Title */
        .value-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 12px 0;
        }
        
        /* Value Text */
        .value-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 400;
          color: #4B5563;
          margin: 0;
        }
        
        /* ========== RESPONSIVE TYPOGRAPHY ========== */
        @media (max-width: 1440px) {
          .values-heading {
            font-size: 38px;
          }
          
          .values-description p {
            font-size: 17px;
          }
          
          .value-title {
            font-size: 19px;
          }
          
          .value-text {
            font-size: 15px;
          }
        }
        
        @media (max-width: 1200px) {
          .values-heading {
            font-size: 36px;
          }
          
          .values-description p {
            font-size: 16px;
          }
        }
        
        @media (max-width: 1024px) {
          .values-heading {
            font-size: 34px;
          }
          
          .values-description p {
            font-size: 15px;
          }
        }
        
        @media (max-width: 768px) {
          .values-heading {
            font-size: 32px;
          }
          
          .values-description p {
            font-size: 15px;
            line-height: 1.4;
          }
          
          .value-title {
            font-size: 18px;
          }
          
          .value-text {
            font-size: 14px;
          }
        }
        
        @media (max-width: 576px) {
          .values-heading {
            font-size: 28px;
          }
          
          .values-tagline {
            font-size: 11px;
          }
          
          .values-description p {
            font-size: 14px;
          }
          
          .value-icon {
            width: 56px;
            height: 56px;
            margin-bottom: 20px;
          }
        }
        
        @media (max-width: 480px) {
          .values-heading {
            font-size: 24px;
          }
          
          .values-description p {
            font-size: 13px;
          }
          
          .value-title {
            font-size: 17px;
          }
          
          .value-text {
            font-size: 13px;
          }
        }
        
        @media (max-width: 360px) {
          .values-heading {
            font-size: 22px;
          }
          
          .values-description p {
            font-size: 12px;
          }
        }
        
        /* ========== ANIMATIONS ========== */
        .values-header > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .values-tagline {
          animation-delay: 0.1s;
        }
        
        .values-heading {
          animation-delay: 0.2s;
        }
        
        .values-description {
          animation-delay: 0.3s;
        }
        
        .value-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .value-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        
        .value-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .value-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        
        .value-card:nth-child(4) {
          animation-delay: 0.4s;
        }
        
        .value-card:nth-child(5) {
          animation-delay: 0.5s;
        }
        
        .value-card:nth-child(6) {
          animation-delay: 0.6s;
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

export default ValuesSection;