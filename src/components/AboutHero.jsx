import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="about-hero-section">
        {/* White Background */}
        <div className="about-hero-background"></div>
        
        {/* Container for split layout */}
        <div className="about-hero-container">
          {/* Left Side - Image - HORIZONTAL RECTANGLE */}
          <div className="about-image-side">
            <div className="about-image-wrapper">
              {/* Your Actual Image */}
              <img 
                src="/images/AboutHero.png" 
                alt="About Tolero AI Automation"
                className={`about-hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => {
                  setImageLoaded(true);
                  console.log('About hero image loaded successfully');
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  // Fallback to gradient background
                  e.target.style.display = 'none';
                  const wrapper = e.target.parentElement;
                  if (wrapper) {
                    wrapper.innerHTML = `
                      <div class="about-image-fallback">
                        <div class="about-fallback-content">
                          <span class="about-fallback-text">ABOUT TOLERO</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Loading Overlay */}
              {!imageLoaded && (
                <div className="about-image-loading">
                  <div className="about-loading-spinner"></div>
                  <span className="about-loading-text">Loading about image...</span>
                </div>
              )}
              
              {/* Tech Overlay */}
              <div className="about-tech-overlay">
                <div className="about-tech-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`ah-${i}`} className="about-grid-line horizontal" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`av-${i}`} className="about-grid-line vertical" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="about-content-side">
            <div className="about-content-wrapper">
              {/* Company Badge */}
              <div className="about-company-badge">
                <span className="about-company-logo">TOLERO</span>
                <span className="about-company-tag">KI-TECHNOLOGIE</span>
              </div>

              {/* Main Headline */}
              <h1 className="about-main-headline">
                AI-gestützte Automatisierung für Unternehmen
              </h1>

              {/* Sub Headline */}
              <h2 className="about-sub-headline">
                Intelligente Prozess- & Kommunikationsautomatisierung mit KI
              </h2>

              {/* Features List */}
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-check">✔</div>
                  <div className="feature-text">
                    KI-Telefonassistent übernimmt Anrufe, Terminvereinbarungen und Anfragen automatisch – 24/7, zuverlässig und markenkonform.
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-check">✔</div>
                  <div className="feature-text">
                    Intelligente Chatbots & digitale Assistenten beantworten Kundenanfragen auf Website, Social Media und in internen Systemen.
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-check">✔</div>
                  <div className="feature-text">
                    E-Mail- & Workflow-Automatisierung reduziert manuelle Arbeit, beschleunigt Prozesse und minimiert Fehler.
                  </div>
                </div>
                
                <div className="feature-item">
                  <div className="feature-check">✔</div>
                  <div className="feature-text">
                    Flexibel einsetzbar als Cloud- oder On-Premise-Lösung – DSGVO-konform und skalierbar.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base About Hero Section - REDUCED HEIGHT */
        .about-hero-section {
          width: 100%;
          min-height: 85vh; /* REDUCED from 100vh to 85vh */
          position: relative;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin-top: 80px; /* Space for navbar */
        }

        /* White Background */
        .about-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          z-index: 1;
        }

        /* Container for split layout - SIDE PADDING 100px - REDUCED GAP */
        .about-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1700px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr; /* More space for image */
          gap: 40px; /* REDUCED from 50px to 40px */
          height: calc(85vh - 80px); /* Adjusted for reduced section height */
          padding: 0 100px; /* SIDE PADDING 100px */
          margin: 0 auto;
          align-items: center; /* Both image and content aligned center */
          box-sizing: border-box;
        }

        /* Left Side - Image - HORIZONTAL RECTANGULAR - CENTERED */
        .about-image-side {
          display: flex;
          align-items: center; /* Center vertically */
          justify-content: flex-start;
          position: relative;
          overflow: visible;
          height: 100%;
          padding: 0;
        }

        /* HORIZONTAL RECTANGULAR CONTAINER - ADJUSTED HEIGHT */
        .about-image-wrapper {
          width: 120%; /* Extra wide */
          height: 70%; /* Slightly increased height */
          max-height: 450px; /* Reduced from 500px */
          min-height: 350px; /* Reduced from 380px */
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border: 1px solid #E5E7EB;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .about-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.8s ease;
          position: relative;
          z-index: 2;
        }

        .about-hero-image.loaded {
          opacity: 1;
        }

        /* Image Loading State */
        .about-image-loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          z-index: 1;
        }

        .about-loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 102, 255, 0.2);
          border-top: 3px solid #0066FF;
          border-radius: 50%;
          animation: about-spin 1s linear infinite;
        }

        .about-loading-text {
          font-size: 14px;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* Image Fallback */
        .about-image-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          z-index: 1;
          border-radius: 12px;
        }

        .about-fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .about-fallback-text {
          font-size: 24px;
          font-weight: 700;
          color: #0066FF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0, 102, 255, 0.2);
          text-align: center;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        /* Tech Overlay */
        .about-tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .about-tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        /* Grid Lines - Single Color: #0066FF */
        .about-grid-line {
          position: absolute;
          background: #0066FF;
          animation: about-aiPulse 3s infinite;
        }

        .about-grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 12.5%;
        }

        .about-grid-line.horizontal:nth-child(2) { top: 25%; }
        .about-grid-line.horizontal:nth-child(3) { top: 37.5%; }
        .about-grid-line.horizontal:nth-child(4) { top: 50%; }
        .about-grid-line.horizontal:nth-child(5) { top: 62.5%; }
        .about-grid-line.horizontal:nth-child(6) { top: 75%; }
        .about-grid-line.horizontal:nth-child(7) { top: 87.5%; }

        .about-grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 12.5%;
        }

        .about-grid-line.vertical:nth-child(9) { left: 25%; }
        .about-grid-line.vertical:nth-child(10) { left: 37.5%; }
        .about-grid-line.vertical:nth-child(11) { left: 50%; }
        .about-grid-line.vertical:nth-child(12) { left: 62.5%; }
        .about-grid-line.vertical:nth-child(13) { left: 75%; }
        .about-grid-line.vertical:nth-child(14) { left: 87.5%; }

        /* Right Side - Content */
        .about-content-side {
          display: flex;
          align-items: center; /* Center align with image */
          justify-content: center;
          height: 100%;
        }

        .about-content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 18px; /* REDUCED from 25px to 18px */
          padding: 20px 0; /* REDUCED from 30px to 20px */
        }

        /* Company Badge */
        .about-company-badge {
          display: flex;
          flex-direction: column;
          gap: 4px; /* REDUCED from 6px to 4px */
        }

        /* Company Logo - APPLE SYSTEM FONT */
        .about-company-logo {
          font-size: 16px;
          font-weight: 700;
          color: #0066FF;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 102, 255, 0.2);
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .about-company-tag {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* Headlines - APPLE SYSTEM FONT */
        .about-main-headline {
          font-size: 46px; /* Reduced from 48px */
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        /* Sub Headline - APPLE SYSTEM FONT */
        .about-sub-headline {
          font-size: 19px; /* Reduced from 20px */
          font-weight: 400;
          line-height: 1.5;
          color: #374151;
          margin: 0;
          letter-spacing: -0.01em;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* Features List - APPLE SYSTEM FONT */
        .about-features {
          display: flex;
          flex-direction: column;
          gap: 14px; /* REDUCED from 18px to 14px */
          margin-top: 8px; /* REDUCED from 10px to 8px */
        }

        .feature-item {
          display: flex;
          gap: 10px; /* REDUCED from 12px to 10px */
          align-items: flex-start;
        }

        .feature-check {
          color: #0066FF;
          font-size: 16px; /* Reduced from 18px */
          font-weight: 700;
          min-width: 20px; /* Reduced from 24px */
          margin-top: 2px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .feature-text {
          font-size: 15px; /* Reduced from 16px */
          line-height: 1.5; /* Reduced from 1.6 */
          color: #4B5563;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes about-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes about-aiPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        /* Content Animations */
        .about-content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: about-fadeInUp 0.6s ease forwards;
        }

        .about-company-badge {
          animation-delay: 0.1s;
        }

        .about-main-headline {
          animation-delay: 0.2s;
        }

        .about-sub-headline {
          animation-delay: 0.3s;
        }

        .about-features {
          animation-delay: 0.4s;
        }

        @keyframes about-fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        
        /* Large Desktop: 1700px+ */
        @media (max-width: 1700px) {
          .about-hero-container {
            max-width: 1600px;
            padding: 0 90px;
          }
        }

        /* Large Desktop: 1600px+ */
        @media (max-width: 1600px) {
          .about-hero-container {
            max-width: 1500px;
            padding: 0 80px;
          }
          
          .about-image-wrapper {
            width: 115%;
          }
          
          .about-main-headline {
            font-size: 44px;
          }
          
          .feature-text {
            font-size: 14.5px;
          }
        }

        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .about-hero-container {
            max-width: 1300px;
            gap: 35px; /* Reduced from 45px */
            padding: 0 70px;
          }
          
          .about-image-wrapper {
            width: 110%;
            height: 68%;
          }
          
          .about-main-headline {
            font-size: 42px;
          }
          
          .about-sub-headline {
            font-size: 18px;
          }
          
          .feature-text {
            font-size: 14px;
          }
          
          .about-content-wrapper {
            gap: 16px;
          }
        }

        /* Desktop: 1366px */
        @media (max-width: 1366px) {
          .about-hero-container {
            max-width: 1200px;
            padding: 0 60px;
          }
          
          .about-image-wrapper {
            width: 108%;
          }
          
          .about-main-headline {
            font-size: 40px;
          }
          
          .feature-text {
            font-size: 13.8px;
          }
        }

        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .about-hero-container {
            padding: 0 50px;
            gap: 35px; /* Reduced from 40px */
          }
          
          .about-image-wrapper {
            width: 100%;
            height: 65%;
          }
          
          .about-main-headline {
            font-size: 38px;
          }
          
          .about-sub-headline {
            font-size: 17.5px;
          }
          
          .feature-text {
            font-size: 13.5px;
          }
          
          .about-content-wrapper {
            gap: 15px;
          }
          
          .about-features {
            gap: 12px;
          }
        }

        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .about-hero-container {
            padding: 0 40px;
            gap: 30px; /* Reduced from 35px */
          }
          
          .about-main-headline {
            font-size: 36px;
          }
          
          .about-sub-headline {
            font-size: 17px;
          }
          
          .about-image-wrapper {
            height: 62%;
            min-height: 320px; /* Reduced from 350px */
          }
          
          .about-content-wrapper {
            gap: 14px;
          }
          
          .feature-text {
            font-size: 13px;
          }
          
          .about-features {
            gap: 10px;
          }
        }

        /* Tablet Portrait: 992px - Single column layout */
        @media (max-width: 992px) {
          .about-hero-section {
            min-height: auto;
            height: auto;
            padding: 50px 0 30px; /* Reduced padding */
            margin-top: 80px;
          }
          
          .about-hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            gap: 35px; /* Reduced from 40px */
            padding: 0 40px;
          }
          
          .about-image-side {
            height: 380px; /* Reduced from 420px */
            order: 1;
            padding: 0;
            overflow: hidden;
            justify-content: center;
            align-items: center;
          }
          
          .about-content-side {
            height: auto;
            order: 2;
          }
          
          .about-content-wrapper {
            padding: 5px 0; /* Reduced from 10px */
            text-align: left;
            max-width: 800px;
            margin: 0 auto;
            gap: 20px; /* Reduced from 25px */
          }
          
          .about-image-wrapper {
            width: 100%;
            height: 100%;
            max-height: none;
            min-height: auto;
            max-height: 380px;
          }
          
          .about-company-badge {
            align-items: flex-start;
          }
          
          .about-main-headline {
            font-size: 36px; /* Reduced from 40px */
          }
          
          .about-sub-headline {
            font-size: 18px; /* Adjusted */
          }
          
          .feature-text {
            font-size: 14px;
          }
          
          .about-features {
            gap: 12px;
          }
        }

        /* Mobile Landscape: 768px */
        @media (max-width: 768px) {
          .about-hero-container {
            padding: 0 30px;
            gap: 25px; /* Reduced from 30px */
          }
          
          .about-main-headline {
            font-size: 32px;
          }
          
          .about-sub-headline {
            font-size: 16px;
            line-height: 1.4;
          }
          
          .about-image-side {
            height: 320px; /* Reduced from 360px */
          }
          
          .about-content-wrapper {
            gap: 16px; /* Reduced from 20px */
          }
          
          .feature-text {
            font-size: 13px;
          }
          
          .about-features {
            gap: 10px; /* Reduced from 16px */
          }
          
          .about-image-wrapper {
            max-height: 320px;
          }
        }

        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .about-hero-container {
            padding: 0 25px;
            gap: 20px; /* Reduced from 25px */
          }
          
          .about-image-side {
            height: 280px; /* Reduced from 320px */
          }
          
          .about-main-headline {
            font-size: 28px; /* Reduced from 32px */
          }
          
          .about-sub-headline {
            font-size: 15px; /* Reduced from 17px */
          }
          
          .feature-text {
            font-size: 12px;
          }
          
          .feature-check {
            font-size: 14px; /* Reduced from 16px */
          }
          
          .about-features {
            gap: 8px; /* Reduced from 14px */
          }
          
          .about-image-wrapper {
            max-height: 280px;
          }
        }

        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .about-hero-container {
            padding: 0 20px;
            gap: 15px; /* Reduced from 20px */
          }
          
          .about-image-side {
            height: 240px; /* Reduced from 280px */
          }
          
          .about-image-wrapper {
            border-radius: 10px;
          }
          
          .about-main-headline {
            font-size: 24px; /* Reduced from 28px */
          }
          
          .about-sub-headline {
            font-size: 14px; /* Reduced from 16px */
          }
          
          .feature-text {
            font-size: 11.5px; /* Reduced from 13.5px */
          }
          
          .about-content-wrapper {
            gap: 12px; /* Reduced from 18px */
          }
          
          .about-company-logo {
            font-size: 14px;
          }
          
          .about-company-tag {
            font-size: 11px;
          }
          
          .about-features {
            gap: 6px; /* Reduced from 12px */
          }
          
          .about-image-wrapper {
            max-height: 240px;
          }
        }

        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .about-hero-container {
            padding: 0 15px;
            gap: 10px; /* Reduced from 15px */
          }
          
          .about-image-side {
            height: 200px; /* Reduced from 240px */
          }
          
          .about-image-wrapper {
            border-radius: 8px;
          }
          
          .about-main-headline {
            font-size: 22px; /* Reduced from 26px */
          }
          
          .about-sub-headline {
            font-size: 13px; /* Reduced from 15px */
          }
          
          .feature-text {
            font-size: 11px; /* Reduced from 13px */
          }
          
          .about-features {
            gap: 5px; /* Reduced from 10px */
          }
          
          .about-image-wrapper {
            max-height: 200px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutHero;