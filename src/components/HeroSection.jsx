import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
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
                          <span class="fallback-icon">🤖</span>
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
                {['⚡', '🤖', '🔧', '📊'].map((icon, i) => (
                  <div 
                    key={i}
                    className="floating-element"
                    style={{
                      left: `${15 + i * 25}%`,
                      top: `${20 + (i % 2) * 40}%`,
                      animationDelay: `${i * 0.3}s`
                    }}
                  >
                    <span className="element-icon">{icon}</span>
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
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(37, 99, 235, 0.4)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 99, 235, 0.3)';
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
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      }
                    }}
                  >
                    <span className="button-text">{t('hero.viewReferences')}</span>
                  </a>
                </div>

                {/* Trust Indicators - REMOVED as requested */}
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
          padding: 0;
        }

        /* Left Side - Image */
        .image-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 0px 40px 50px;;
          position: relative;
          overflow: hidden;
        }

        .image-wrapper {
          width: 100%;
          height: 80%;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
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

        .fallback-icon {
          font-size: 80px;
          animation: floatIcon 6s ease-in-out infinite;
        }

        .fallback-text {
          font-size: 24px;
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
          font-size: 32px;
          filter: drop-shadow(0 0 10px rgba(34, 211, 238, 0.5));
        }

        /* Right Side - Content */
        .content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 60px;
        }

        .content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 40px;
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
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .sub-headline {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
        }

        /* CTA Section */
        .cta-section {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        .button-group {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
        }

        /* PRIMARY BUTTON - Only color changed to #2563EB */
        .primary-button {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 8px 24px;
          background: #2563EB; /* Changed from gradient to solid #2563EB */
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(37, 99, 235, 0.3);
        }

        .secondary-button {
          display: inline-flex;
          align-items: center;
          padding: 8px 24px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .button-arrow svg {
          width: 18px;
          height: 18px;
          transition: transform 0.3s ease;
        }

        .primary-button:hover .button-arrow svg {
          transform: translateX(5px);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
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
          height: 60px;
          background: linear-gradient(to bottom, #22D3EE, transparent);
          position: relative;
        }

        .scroll-dot {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 6px;
          height: 6px;
          background: #22D3EE;
          border-radius: 50%;
          animation: scrollDot 2s infinite;
        }

        /* Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes floatElement {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
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
            max-width: 1200px;
          }
          
          .content-side {
            padding: 0 40px;
          }
          
          .image-side {
            padding: 30px;
          }
          
          .main-headline {
            font-size: 44px;
          }
          
          .sub-headline {
            font-size: 18px;
          }
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: 100vh;
            padding: 80px 20px 60px;
            gap: 60px;
          }
          
          .image-side {
            height: 400px;
            padding: 0 20px;
          }
          
          .content-side {
            padding: 0;
            order: 2;
          }
          
          .image-side {
            order: 1;
          }
          
          .content-wrapper {
            max-width: 100%;
          }
          
          .image-wrapper {
            max-width: 800px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .main-headline {
            font-size: 36px;
          }
          
          .sub-headline {
            font-size: 17px;
          }
          
          .button-group {
            flex-direction: column;
          }
          
          .primary-button,
          .secondary-button {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          
          .image-side {
            height: 350px;
          }
          
          .hero-container {
            padding: 60px 20px 40px;
            gap: 40px;
          }
        }

        @media (max-width: 480px) {
          .main-headline {
            font-size: 28px;
          }
          
          .sub-headline {
            font-size: 16px;
          }
          
          .content-wrapper {
            gap: 30px;
          }
          
          .company-logo {
            font-size: 14px;
          }
          
          .primary-button,
          .secondary-button {
            padding: 16px 24px;
            font-size: 15px;
          }
          
          .image-side {
            height: 250px;
          }
          
          .fallback-icon {
            font-size: 60px;
          }
          
          .fallback-text {
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;