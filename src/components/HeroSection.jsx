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
        {/* Black Background */}
        <div className="hero-background"></div>
        
        {/* Container for split layout */}
        <div className="hero-container">
          {/* Left Side - Image - HORIZONTAL RECTANGLE */}
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
            </div>
          </div>

          {/* Right Side - Content - ONLY HEADLINE + SUBHEADLINE */}
          <div className="content-side">
            <div className="content-wrapper">
              {/* Main Headline - White */}
              <h1 className="main-headline">
                {t('hero.title')}
              </h1>

              {/* Sub Headline - Light Gray */}
              <h2 className="sub-headline">
                {t('hero.subtitle')} – {t('hero.description')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base Hero Section - BLACK BACKGROUND */
        .split-hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin-top: 0; /* Changed from 80px to 0 for navbar overlay */
        }

        /* Black Background */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        /* Container for split layout - UPDATED PADDING */
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1700px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          height: 100vh; /* Changed from calc(100vh - 80px) to 100vh */
          padding: 0 100px; /* Updated from 0 100px to match navbar 12px 120px? Actually you want 35 left/right 100? Let me clarify */
          margin: 0 auto;
          align-items: center;
          box-sizing: border-box;
        }

        /* Left Side - Image */
        .image-side {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          overflow: visible;
          height: 100%;
          padding: 0;
        }

        /* Image Container */
        .image-wrapper {
          width: 115%;
          height: 75%;
          max-height: 550px;
          min-height: 450px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: linear-gradient(135deg, #111111 0%, #222222 100%);
          border: 1px solid #333333;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
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
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top: 3px solid #FFFFFF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          font-size: 14px;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
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
          background: linear-gradient(135deg, #111111 0%, #222222 100%);
          z-index: 1;
          border-radius: 12px;
        }

        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .fallback-text {
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
          text-align: center;
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
          opacity: 0.15;
        }

        /* Grid Lines - White */
        .grid-line {
          position: absolute;
          background: #FFFFFF;
          animation: aiPulse 3s infinite;
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

        /* Right Side - Content */
        .content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px;
          padding: 40px 0;
        }

        /* Headlines - ONLY THESE TWO ELEMENTS */
        .main-headline {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #FFFFFF; /* White */
          margin: 0;
          letter-spacing: -0.02em;
        }

        .sub-headline {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.6;
          color: #9CA3AF; /* Light Gray */
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes aiPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        /* Content Animations */
        .content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .main-headline {
          animation-delay: 0.2s;
        }

        .sub-headline {
          animation-delay: 0.3s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        
        /* Large Desktop: 1700px+ */
        @media (max-width: 1700px) {
          .hero-container {
            max-width: 1600px;
            padding: 0 90px;
          }
        }

        @media (max-width: 1600px) {
          .hero-container {
            max-width: 1500px;
            padding: 0 80px;
          }
          
          .image-wrapper {
            width: 112%;
          }
        }

        @media (max-width: 1440px) {
          .hero-container {
            max-width: 1300px;
            gap: 60px;
            padding: 0 70px;
          }
          
          .image-wrapper {
            width: 108%;
            height: 72%;
          }
          
          .sub-headline {
            font-size: 21px;
          }
          
          .image-wrapper {
            max-height: 520px;
            min-height: 420px;
          }
        }

        @media (max-width: 1366px) {
          .hero-container {
            max-width: 1200px;
            padding: 0 60px;
          }
          
          .image-wrapper {
            width: 105%;
          }
        }

        @media (max-width: 1200px) {
          .hero-container {
            padding: 0 50px;
            gap: 40px;
          }
          
          .image-wrapper {
            width: 100%;
          }
          
          .main-headline {
            font-size: 44px;
          }
          
          .sub-headline {
            font-size: 20px;
          }
          
          .image-wrapper {
            height: 68%;
            max-height: 450px;
            min-height: 380px;
          }
        }

        @media (max-width: 1024px) {
          .hero-container {
            padding: 0 40px;
            gap: 30px;
          }
          
          .main-headline {
            font-size: 40px;
          }
          
          .sub-headline {
            font-size: 19px;
          }
          
          .image-wrapper {
            height: 65%;
            max-height: 400px;
            min-height: 320px;
          }
          
          .content-wrapper {
            gap: 25px;
          }
          
          .fallback-text {
            font-size: 22px;
          }
        }

        /* Tablet Portrait: 992px - Single column layout */
        @media (max-width: 992px) {
          .split-hero {
            min-height: auto;
            height: auto;
            padding: 100px 0 60px; /* Added top padding for navbar */
            margin-top: 0;
          }
          
          .hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            gap: 40px;
            padding: 0 40px;
          }
          
          .image-side {
            height: 450px;
            order: 1;
            padding: 0;
            overflow: hidden;
            justify-content: center;
          }
          
          .content-side {
            height: auto;
            order: 2;
          }
          
          .content-wrapper {
            padding: 10px 0;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            gap: 25px;
          }
          
          .image-wrapper {
            width: 100%;
            height: 100%;
            max-height: none;
            min-height: auto;
          }
          
          .sub-headline {
            font-size: 18px;
          }
          
          .fallback-text {
            font-size: 20px;
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            padding: 0 30px;
            gap: 30px;
          }
          
          .main-headline {
            font-size: 36px;
          }
          
          .sub-headline {
            font-size: 17px;
          }
          
          .image-side {
            height: 380px;
          }
          
          .content-wrapper {
            gap: 20px;
          }
          
          .split-hero {
            padding: 80px 0 50px;
          }
          
          .fallback-text {
            font-size: 18px;
          }
        }

        @media (max-width: 576px) {
          .hero-container {
            padding: 0 25px;
            gap: 25px;
          }
          
          .image-side {
            height: 320px;
          }
          
          .main-headline {
            font-size: 32px;
          }
          
          .sub-headline {
            font-size: 16px;
          }
          
          .content-wrapper {
            gap: 15px;
          }
          
          .split-hero {
            padding: 70px 0 40px;
          }
        }

        @media (max-width: 480px) {
          .hero-container {
            padding: 0 20px;
            gap: 20px;
          }
          
          .image-side {
            height: 280px;
          }
          
          .image-wrapper {
            border-radius: 10px;
          }
          
          .main-headline {
            font-size: 28px;
          }
          
          .sub-headline {
            font-size: 15px;
          }
          
          .content-wrapper {
            gap: 12px;
          }
          
          .split-hero {
            padding: 60px 0 30px;
          }
          
          .fallback-text {
            font-size: 16px;
          }
        }

        @media (max-width: 360px) {
          .hero-container {
            padding: 0 15px;
            gap: 15px;
          }
          
          .image-side {
            height: 240px;
          }
          
          .image-wrapper {
            border-radius: 8px;
          }
          
          .main-headline {
            font-size: 24px;
          }
          
          .sub-headline {
            font-size: 14px;
          }
          
          .split-hero {
            padding: 50px 0 25px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;