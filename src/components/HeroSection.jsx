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
        {/* White Background */}
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

              {/* Sub Headline - UPDATED: Anthracite color and slightly larger */}
              <h2 className="sub-headline">
                {t('hero.subtitle')} – {t('hero.description')}
              </h2>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base Hero Section - WHITE BACKGROUND */
        .split-hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin-top: 80px; /* Space for navbar */
        }

        /* White Background */
        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          z-index: 1;
        }

        /* Container for split layout - NAVBAR SE ALIGN */
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1700px; /* Increased from 1400px */
          width: 100%;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr; /* More space for image */
          gap: 80px; /* Increased gap for better spacing */
          height: calc(100vh - 80px); /* Adjust for navbar */
          padding: 0 100px; /* Updated: 35px to 100px */
          margin: 0 auto;
          align-items: center;
          box-sizing: border-box;
        }

        /* Left Side - Image - HORIZONTAL RECTANGULAR */
        .image-side {
          display: flex;
          align-items: center;
          justify-content: flex-start; /* Align left */
          position: relative;
          overflow: visible; /* Changed from hidden to show full width */
          height: 100%;
          padding: 0;
        }

        /* UPDATED: HORIZONTAL RECTANGULAR CONTAINER - HEIGHT AND WIDTH INCREASED */
        .image-wrapper {
          width: 115%; /* Increased width significantly (from 100%) */
          height: 75%; /* Increased height (from 70%) */
          max-height: 550px; /* Increased (from 500px) */
          min-height: 450px; /* Increased (from 400px) */
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
          border: 3px solid rgba(0, 102, 255, 0.2);
          border-top: 3px solid #0066FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .loading-text {
          font-size: 14px;
          color: #6B7280;
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
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
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
          color: #0066FF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0, 102, 255, 0.2);
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

        /* SINGLE COLOR: #0066FF - Grid Lines */
        .grid-line {
          position: absolute;
          background: #0066FF;
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
          gap: 40px;
          padding: 40px 0;
        }

        /* Company Badge */
        .company-badge {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* SINGLE COLOR: #0066FF - Company Logo */
        .company-logo {
          font-size: 16px;
          font-weight: 700;
          color: #0066FF;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 102, 255, 0.2);
        }

        .company-tag {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        /* Headlines */
        .main-headline {
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* Sub Headline - UPDATED: Anthracite (#374151) and slightly larger (22px) */
        .sub-headline {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.6;
          color: #374151;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* ===== ANIMATIONS ===== */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* AI-specific Animations */
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

        .company-badge {
          animation-delay: 0.1s;
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

        /* Large Desktop: 1600px+ */
        @media (max-width: 1600px) {
          .hero-container {
            max-width: 1500px;
            padding: 0 80px;
          }
          
          .image-wrapper {
            width: 112%; /* Slightly less width */
          }
        }

        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .hero-container {
            max-width: 1300px;
            gap: 60px;
            padding: 0 70px;
          }
          
          .image-wrapper {
            width: 108%; /* Adjusted width */
            height: 72%; /* Adjusted height */
          }
          
          .sub-headline {
            font-size: 21px;
          }
          
          .image-wrapper {
            max-height: 520px;
            min-height: 420px;
          }
        }

        /* Desktop: 1366px */
        @media (max-width: 1366px) {
          .hero-container {
            max-width: 1200px;
            padding: 0 60px;
          }
          
          .image-wrapper {
            width: 105%; /* Less width */
          }
        }

        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .hero-container {
            padding: 0 50px;
            gap: 40px;
          }
          
          .image-wrapper {
            width: 100%; /* Reset to normal width */
          }
          
          .main-headline {
            font-size: 44px;
          }
          
          .sub-headline {
            font-size: 20px;
          }
          
          .image-wrapper {
            height: 68%; /* Adjusted height */
            max-height: 450px;
            min-height: 380px;
          }
        }

        /* Tablet Landscape: 1024px */
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
            height: 65%; /* Even more horizontal */
            max-height: 400px;
            min-height: 320px;
          }
          
          .content-wrapper {
            gap: 30px;
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
            padding: 60px 0 40px;
            margin-top: 80px;
          }
          
          .hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            gap: 40px;
            padding: 0 40px;
          }
          
          .image-side {
            height: 450px; /* Increased (from 400px) */
            order: 1;
            padding: 0;
            overflow: hidden; /* Reset for mobile */
            justify-content: center; /* Center on mobile */
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
            gap: 30px;
          }
          
          .image-wrapper {
            width: 100%; /* Reset width for mobile */
            height: 100%; /* Full height of image-side */
            max-height: none;
            min-height: auto;
          }
          
          .company-badge {
            align-items: center;
          }
          
          .sub-headline {
            font-size: 18px;
          }
          
          .fallback-text {
            font-size: 20px;
          }
        }

        /* Mobile Landscape: 768px */
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
            line-height: 1.5;
          }
          
          .image-side {
            height: 380px; /* Increased (from 350px) */
          }
          
          .content-wrapper {
            gap: 25px;
          }
          
          .fallback-text {
            font-size: 18px;
          }
        }

        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .hero-container {
            padding: 0 25px;
            gap: 25px;
          }
          
          .image-side {
            height: 320px; /* Increased (from 300px) */
          }
          
          .main-headline {
            font-size: 32px;
          }
          
          .sub-headline {
            font-size: 16px;
          }
          
          .content-wrapper {
            gap: 20px;
          }
        }

        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .hero-container {
            padding: 0 20px;
            gap: 20px;
          }
          
          .image-side {
            height: 280px; /* Increased (from 250px) */
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
            gap: 15px;
          }
          
          .company-logo {
            font-size: 14px;
          }
          
          .company-tag {
            font-size: 11px;
          }
          
          .fallback-text {
            font-size: 16px;
            text-align: center;
            padding: 0 10px;
          }
        }

        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .hero-container {
            padding: 0 15px;
            gap: 15px;
          }
          
          .image-side {
            height: 240px; /* Increased (from 220px) */
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
        }
      `}</style>
    </>
  );
};

export default HeroSection;