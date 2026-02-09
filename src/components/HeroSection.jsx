import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <section className="split-hero">
        {/* Dark Background */}
        <div className="hero-background"></div>
        
        {/* Container for split layout */}
        <div className="hero-container">
          {/* Left Side - Image */}
          <div className="image-side">
            <div className="image-wrapper">
              {/* Your Actual Image */}
              <img 
                src="/images/hero.png" 
                alt="KI-Automatisierung für Unternehmen"
                className={`hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => {
                  setImageLoaded(true);
                  console.log('Hero image loaded successfully');
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  // Fallback to gradient background
                  e.target.style.display = 'none';
                  const wrapper = e.target.parentElement;
                  if (wrapper) {
                    wrapper.innerHTML = `
                      <div class="image-fallback">
                        <div class="fallback-content">
                          <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#22D3EE"/>
                            <path d="M2 17L12 22L22 17" stroke="#22D3EE" strokeWidth="2"/>
                            <path d="M2 12L12 17L22 12" stroke="#22D3EE" strokeWidth="2"/>
                          </svg>
                          <span class="fallback-text">KI-AUTOMATISIERUNG</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Loading Overlay */}
              {!imageLoaded && (
                <div className="image-loading">
                  <div className="loading-spinner"></div>
                  <span className="loading-text">Lädt Visualisierung...</span>
                </div>
              )}
              
              {/* Tech Overlay */}
              <div className="tech-overlay">
                <div className="tech-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`h-${i}`} className="grid-line horizontal" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`v-${i}`} className="grid-line vertical" />
                  ))}
                </div>
              </div>
              
              {/* Floating AI Elements */}
              <div className="floating-elements">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="floating-element"
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${20 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <svg className="element-icon" width="32" height="32" viewBox="0 0 24 24" fill="none">
                      {i === 1 && (
                        <path d="M13 10V3L4 14H11L11 21L20 10H13Z" fill="#22D3EE"/>
                      )}
                      {i === 2 && (
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#22D3EE"/>
                      )}
                      {i === 3 && (
                        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM7 10H9V17H7V10ZM15 10H17V17H15V10ZM11 7H13V17H11V7Z" fill="#22D3EE"/>
                      )}
                      {i === 4 && (
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 9H9V15H15V9Z" fill="#22D3EE"/>
                      )}
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="content-side">
            <div className="content-wrapper">
              {/* Company Badge */}
              <div className="company-badge">
                <span className="company-logo">TOLERO</span>
                <span className="company-tag">KI-TECHNOLOGIE</span>
              </div>

              {/* Main Headline */}
              <h1 className="main-headline">
                {t('hero.title')}
              </h1>

              {/* Sub Headline */}
              <h2 className="sub-headline">
                {t('hero.subtitle')} – {t('hero.description')}
              </h2>

              {/* CTA Buttons */}
              <div className="cta-section">
                <div className="button-group">
                  <a 
                    href="https://www.tolero.com/demo" 
                    className="primary-button"
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 12px 30px rgba(239, 68, 68, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(239, 68, 68, 0.3)';
                      }
                    }}
                  >
                    <span className="button-text">{t('hero.requestDemo')}</span>
                    
                  </a>
                  
                  <a 
                    href="https://www.tolero.com/references" 
                    className="secondary-button"
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.background = 'rgba(34, 211, 238, 0.15)';
                        e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.5)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.borderColor = 'rgba(34, 211, 238, 0.3)';
                      }
                    }}
                  >
                    <span className="button-text">{t('hero.viewReferences')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-line">
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base Hero Section */
        .split-hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0;
        }

        /* Dark Background */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        /* Container for split layout */
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr; /* Image | Content */
          gap: 0;
          height: 100vh;
          padding: 0 100px;
        }

        /* Left Side - Image */
        .image-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          position: relative;
          overflow: hidden;
        }

        .image-wrapper {
          width: 100%;
          height: 80%;
          max-height: 600px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          border: 1px solid rgba(34, 211, 238, 0.2);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s ease;
          position: relative;
          z-index: 2;
        }

        .hero-image.loaded {
          opacity: 1;
        }

        /* Image Loading State */
        .image-loading {
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

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(34, 211, 238, 0.3);
          border-top: 3px solid #22D3EE;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Image Fallback */
        .image-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          z-index: 1;
        }

        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .fallback-text {
          font-size: 18px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        /* Tech Overlay */
        .tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
        }

        .grid-line {
          position: absolute;
          background: #22D3EE;
        }

        .grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 12.5%;
        }

        .grid-line.horizontal:nth-child(2) { top: 25%; }
        .grid-line.horizontal:nth-child(3) { top: 37.5%; }
        .grid-line.horizontal:nth-child(4) { top: 50%; }
        .grid-line.horizontal:nth-child(5) { top: 62.5%; }
        .grid-line.horizontal:nth-child(6) { top: 75%; }
        .grid-line.horizontal:nth-child(7) { top: 87.5%; }

        .grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 12.5%;
        }

        .grid-line.vertical:nth-child(9) { left: 25%; }
        .grid-line.vertical:nth-child(10) { left: 37.5%; }
        .grid-line.vertical:nth-child(11) { left: 50%; }
        .grid-line.vertical:nth-child(12) { left: 62.5%; }
        .grid-line.vertical:nth-child(13) { left: 75%; }
        .grid-line.vertical:nth-child(14) { left: 87.5%; }

        /* Floating Elements */
        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 4;
        }

        .floating-element {
          position: absolute;
          animation: floatElement 15s infinite ease-in-out;
          opacity: 0.3;
        }

        .element-icon {
          filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
        }

        /* Right Side - Content */
        .content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
        }

        .content-wrapper {
          max-width: 550px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        /* Company Badge */
        .company-badge {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .company-logo {
          font-size: 16px;
          font-weight: 700;
          color: #22D3EE;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .company-tag {
          font-size: 12px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Headlines */
        .main-headline {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.15;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .sub-headline {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .button-group {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        /* PRIMARY BUTTON - Changed color to red and made smaller */
        .primary-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px; /* Smaller padding */
          background: linear-gradient(135deg, #2563EB 0%, #2563EB 100%); /* Red gradient */
          color: white;
          font-size: 14px; /* Smaller font */
          font-weight: 600;
          text-decoration: none;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px #2563EB; /* Red shadow */
          height: 42px; /* Smaller height */
        }

        /* SECONDARY BUTTON - Changed color to TOLERO cyan and made smaller */
        .secondary-button {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px; /* Smaller padding */
          background: transparent;
          color: #22D3EE; /* TOLERO cyan color */
          font-size: 14px; /* Smaller font */
          font-weight: 600;
          text-decoration: none;
          border-radius: 25px;
          border: 1px solid rgba(34, 211, 238, 0.3); /* TOLERO cyan border */
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          height: 42px; /* Smaller height */
        }

        .button-arrow svg {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .primary-button:hover .button-arrow svg {
          transform: translateX(4px);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          opacity: 0;
          animation: fadeIn 1s ease 1s forwards;
        }

        .scroll-line {
          width: 1px;
          height: 50px;
          background: linear-gradient(to bottom, #22D3EE, transparent);
          position: relative;
        }

        .scroll-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 5px;
          height: 5px;
          background: #22D3EE;
          border-radius: 50%;
          animation: scrollDot 2s infinite;
        }

        /* Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatElement {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes fadeIn {
          to { opacity: 1; }
        }

        @keyframes scrollDot {
          0% { top: 0; opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }

        /* Content Animations */
        .content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .company-badge {
          animation-delay: 0.1s;
        }

        .main-headline {
          animation-delay: 0.2s;
        }

        .sub-headline {
          animation-delay: 0.3s;
        }

        .cta-section {
          animation-delay: 0.4s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .hero-container {
            padding: 0 60px;
          }
          
          .content-side {
            padding: 0 30px;
          }
          
          .image-side {
            padding: 30px;
          }
          
          .main-headline {
            font-size: 42px;
          }
          
          .sub-headline {
            font-size: 17px;
          }
          
          .content-wrapper {
            max-width: 500px;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 0 40px;
          }
          
          .main-headline {
            font-size: 38px;
          }
          
          .sub-headline {
            font-size: 16px;
          }
          
          .primary-button,
          .secondary-button {
            padding: 11px 24px; /* Even smaller on tablet */
            font-size: 13px;
            height: 40px;
          }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: 100vh;
            padding: 80px 40px 60px;
            gap: 50px;
          }
          
          .image-side {
            height: 350px;
            padding: 0;
            order: 1;
          }
          
          .content-side {
            padding: 0;
            order: 2;
          }
          
          .content-wrapper {
            max-width: 100%;
            text-align: center;
            align-items: center;
          }
          
          .image-wrapper {
            max-width: 600px;
            margin: 0 auto;
            height: 350px;
          }
          
          .button-group {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 60px 30px 40px;
            gap: 40px;
          }
          
          .main-headline {
            font-size: 32px;
          }
          
          .sub-headline {
            font-size: 16px;
          }
          
          .button-group {
            flex-direction: column;
            align-items: center;
          }
          
          .primary-button,
          .secondary-button {
            width: 100%;
            max-width: 280px;
            justify-content: center;
            padding: 10px 20px; /* Smaller on mobile */
            font-size: 13px;
            height: 38px;
          }
          
          .image-side {
            height: 300px;
          }
          
          .image-wrapper {
            height: 300px;
          }
          
          .fallback-text {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 50px 20px 30px;
            gap: 30px;
          }
          
          .main-headline {
            font-size: 28px;
          }
          
          .sub-headline {
            font-size: 15px;
          }
          
          .content-wrapper {
            gap: 24px;
          }
          
          .company-logo {
            font-size: 14px;
          }
          
          .primary-button,
          .secondary-button {
            padding: 9px 18px; /* Smallest on mobile */
            font-size: 12px;
            height: 36px;
            max-width: 250px;
          }
          
          .image-side {
            height: 250px;
          }
          
          .image-wrapper {
            height: 250px;
          }
        }

        /* Small Phones */
        @media (max-width: 350px) {
          .hero-container {
            padding: 40px 15px 20px;
          }
          
          .main-headline {
            font-size: 24px;
          }
          
          .sub-headline {
            font-size: 14px;
          }
          
          .primary-button,
          .secondary-button {
            padding: 8px 16px;
            font-size: 11px;
            height: 34px;
            max-width: 220px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;