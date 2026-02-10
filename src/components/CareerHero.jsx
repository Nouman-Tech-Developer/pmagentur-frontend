import React, { useState, useEffect } from 'react';

const CareerHero = () => {
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
      <section className="career-hero">
        {/* White Background */}
        <div className="career-hero-background"></div>
        
        {/* Container for split layout */}
        <div className="career-hero-container">
          {/* Left Side - Content */}
          <div className="career-content-side">
            <div className="career-content-wrapper">
              {/* Career Badge */}
              <div className="career-badge">
                <span className="career-tag">Karriere bei</span>
                <span className="career-company">TOLERO</span>
              </div>

              {/* Main Headline */}
              <h1 className="career-main-headline">
                Gestalte die Zukunft der KI mit uns
              </h1>

              {/* Sub Headline */}
              <h2 className="career-sub-headline">
                Werde Teil eines Teams, das innovative KI-Lösungen entwickelt 
                und Unternehmen weltweit transformiert.
              </h2>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="career-image-side">
            <div className="career-image-wrapper">
              {/* Your Actual Image */}
              <img 
                src="/images/Career.jpg" 
                alt="TOLERO Team Karriere"
                className={`career-hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => {
                  setImageLoaded(true);
                  console.log('Career hero image loaded successfully');
                }}
                onError={(e) => {
                  console.error('Image failed to load:', e);
                  // Fallback to gradient background
                  e.target.style.display = 'none';
                  const wrapper = e.target.parentElement;
                  if (wrapper) {
                    wrapper.innerHTML = `
                      <div class="career-image-fallback">
                        <div class="career-fallback-content">
                          <span class="career-fallback-text">JOIN OUR TEAM</span>
                          <span class="career-fallback-subtext">Shape the Future of AI</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              
              {/* Loading Overlay - EXACTLY LIKE ORIGINAL */}
              {!imageLoaded && (
                <div className="career-image-loading">
                  <div className="career-loading-spinner"></div>
                  <span className="career-loading-text">Lädt Bild...</span>
                </div>
              )}
              
              {/* Tech Overlay - EXACTLY LIKE ORIGINAL */}
              <div className="career-tech-overlay">
                <div className="career-tech-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`ch-${i}`} className="career-grid-line horizontal" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`cv-${i}`} className="career-grid-line vertical" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Font Family applied to entire component */
        .career-hero {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        }
        
        /* ✅ UPDATED: Career Hero Section - HALF HEIGHT (35vh) */
        .career-hero {
          width: 100%;
          min-height: 35vh; /* ✅ Changed from 70vh to 35vh */
          position: relative;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin-top: 80px;
        }

        .career-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          z-index: 1;
        }

        .career-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          height: 100%;
          padding: 0 100px;
          margin: 0 auto;
          align-items: center;
          box-sizing: border-box;
        }

        /* Left Side - Content */
        .career-content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .career-content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 30px; /* ✅ Reduced gap for smaller height */
          padding: 20px 0; /* ✅ Reduced padding */
        }

        .career-badge {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        /* EXACTLY matches original HeroSection typography */
        .career-tag {
          font-size: 12px;
          font-weight: 500;
          color: #6B7280;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-family: inherit;
        }

        .career-company {
          font-size: 16px;
          font-weight: 700;
          color: #0066FF;
          letter-spacing: 3px;
          text-transform: uppercase;
          text-shadow: 0 2px 8px rgba(0, 102, 255, 0.2);
          font-family: inherit;
        }

        /* ✅ UPDATED: Slightly smaller font sizes for half height */
        .career-main-headline {
          font-size: 42px; /* ✅ Reduced from 52px */
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: inherit;
        }

        /* ✅ UPDATED: Slightly smaller font sizes for half height */
        .career-sub-headline {
          font-size: 18px; /* ✅ Reduced from 22px */
          font-weight: 400;
          line-height: 1.5; /* ✅ Adjusted line-height */
          color: #374151;
          margin: 0;
          letter-spacing: -0.01em;
          font-family: inherit;
        }

        /* Right Side - Image */
        .career-image-side {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          height: 100%;
          padding: 0;
        }

        /* ✅ UPDATED: Smaller image container for half height */
        .career-image-wrapper {
          width: 100%;
          height: 60%; /* ✅ Reduced from 70% */
          max-height: 300px; /* ✅ Reduced from 400px */
          min-height: 250px; /* ✅ Reduced from 300px */
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

        .career-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.8s ease;
          position: relative;
          z-index: 2;
        }

        .career-hero-image.loaded {
          opacity: 1;
        }

        /* Loading State - EXACTLY LIKE ORIGINAL */
        .career-image-loading {
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

        .career-loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 102, 255, 0.2);
          border-top: 3px solid #0066FF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .career-loading-text {
          font-size: 14px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-family: inherit;
        }

        /* Image Fallback */
        .career-image-fallback {
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

        .career-fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          padding: 20px;
        }

        .career-fallback-text {
          font-size: 20px; /* ✅ Reduced from 24px */
          font-weight: 700;
          color: #0066FF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-align: center;
          font-family: inherit;
        }

        .career-fallback-subtext {
          font-size: 14px; /* ✅ Reduced from 16px */
          font-weight: 500;
          color: #6B7280;
          text-align: center;
          font-family: inherit;
        }

        /* Tech Overlay - EXACTLY LIKE ORIGINAL */
        .career-tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .career-tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        /* SINGLE COLOR: #0066FF - Grid Lines */
        .career-grid-line {
          position: absolute;
          background: #0066FF;
          animation: aiPulse 3s infinite;
        }

        .career-grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 12.5%;
        }

        .career-grid-line.horizontal:nth-child(2) { top: 25%; }
        .career-grid-line.horizontal:nth-child(3) { top: 37.5%; }
        .career-grid-line.horizontal:nth-child(4) { top: 50%; }
        .career-grid-line.horizontal:nth-child(5) { top: 62.5%; }
        .career-grid-line.horizontal:nth-child(6) { top: 75%; }
        .career-grid-line.horizontal:nth-child(7) { top: 87.5%; }

        .career-grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 12.5%;
        }

        .career-grid-line.vertical:nth-child(9) { left: 25%; }
        .career-grid-line.vertical:nth-child(10) { left: 37.5%; }
        .career-grid-line.vertical:nth-child(11) { left: 50%; }
        .career-grid-line.vertical:nth-child(12) { left: 62.5%; }
        .career-grid-line.vertical:nth-child(13) { left: 75%; }
        .career-grid-line.vertical:nth-child(14) { left: 87.5%; }

        /* ===== ANIMATIONS - EXACTLY LIKE ORIGINAL ===== */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes aiPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        /* Content Animations - EXACTLY LIKE ORIGINAL */
        .career-content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .career-badge {
          animation-delay: 0.1s;
        }

        .career-main-headline {
          animation-delay: 0.2s;
        }

        .career-sub-headline {
          animation-delay: 0.3s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE DESIGN - ADJUSTED FOR HALF HEIGHT ===== */
        
        /* Large Desktop: 1700px+ */
        @media (max-width: 1700px) {
          .career-hero-container {
            padding: 0 90px;
          }
        }

        /* Large Desktop: 1600px+ */
        @media (max-width: 1600px) {
          .career-hero-container {
            padding: 0 80px;
          }
        }

        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .career-hero-container {
            padding: 0 70px;
            gap: 60px;
          }
          
          .career-main-headline {
            font-size: 38px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 17px; /* ✅ Adjusted */
          }
          
          .career-image-wrapper {
            max-height: 280px; /* ✅ Adjusted */
            min-height: 230px; /* ✅ Adjusted */
          }
        }

        /* Desktop: 1366px */
        @media (max-width: 1366px) {
          .career-hero-container {
            padding: 0 60px;
          }
        }

        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .career-hero-container {
            padding: 0 50px;
            gap: 50px;
          }
          
          .career-main-headline {
            font-size: 36px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 16px; /* ✅ Adjusted */
          }
          
          .career-image-wrapper {
            height: 65%; /* ✅ Adjusted */
            max-height: 260px; /* ✅ Adjusted */
            min-height: 210px; /* ✅ Adjusted */
          }
        }

        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .career-hero-container {
            padding: 0 40px;
            gap: 40px;
          }
          
          .career-main-headline {
            font-size: 34px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 15px; /* ✅ Adjusted */
          }
          
          .career-content-wrapper {
            gap: 25px; /* ✅ Adjusted */
          }
          
          .career-image-wrapper {
            height: 62%; /* ✅ Adjusted */
            max-height: 240px; /* ✅ Adjusted */
            min-height: 190px; /* ✅ Adjusted */
          }
          
          .career-fallback-text {
            font-size: 18px; /* ✅ Adjusted */
          }
        }

        /* Tablet Portrait: 992px - Single column layout */
        @media (max-width: 992px) {
          .career-hero {
            min-height: auto;
            height: auto;
            padding: 40px 0 30px; /* ✅ Reduced padding */
          }
          
          .career-hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            gap: 30px; /* ✅ Reduced gap */
            padding: 0 35px; /* ✅ 35px on tablet */
          }
          
          .career-content-side {
            order: 2;
            height: auto;
          }
          
          .career-image-side {
            order: 1;
            height: 280px; /* ✅ Reduced from 350px */
          }
          
          .career-content-wrapper {
            padding: 10px 0;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            gap: 25px; /* ✅ Adjusted */
          }
          
          .career-image-wrapper {
            width: 100%;
            height: 100%;
            max-height: none;
            min-height: auto;
          }
          
          .career-badge {
            align-items: center;
          }
          
          .career-main-headline {
            font-size: 36px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 16px; /* ✅ Adjusted */
          }
          
          .career-fallback-text {
            font-size: 20px; /* ✅ Adjusted */
          }
        }

        /* Mobile Landscape: 768px */
        @media (max-width: 768px) {
          .career-hero {
            min-height: 30vh; /* ✅ Adjusted for mobile */
          }
          
          .career-hero-container {
            padding: 0 30px;
            gap: 25px; /* ✅ Reduced gap */
          }
          
          .career-main-headline {
            font-size: 32px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 15px; /* ✅ Adjusted */
            line-height: 1.4; /* ✅ Adjusted */
          }
          
          .career-image-side {
            height: 240px; /* ✅ Reduced from 300px */
          }
          
          .career-content-wrapper {
            gap: 20px; /* ✅ Adjusted */
          }
          
          .career-fallback-text {
            font-size: 18px; /* ✅ Adjusted */
          }
        }

        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .career-hero {
            min-height: 25vh; /* ✅ Adjusted for small mobile */
          }
          
          .career-hero-container {
            padding: 0 25px;
            gap: 20px; /* ✅ Reduced gap */
          }
          
          .career-image-side {
            height: 200px; /* ✅ Reduced from 280px */
          }
          
          .career-main-headline {
            font-size: 28px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 14px; /* ✅ Adjusted */
          }
          
          .career-content-wrapper {
            gap: 15px; /* ✅ Adjusted */
          }
          
          .career-company {
            font-size: 14px;
          }
          
          .career-tag {
            font-size: 11px;
          }
          
          .career-fallback-text {
            font-size: 16px;
            text-align: center;
            padding: 0 10px;
          }
          
          .career-fallback-subtext {
            font-size: 12px; /* ✅ Adjusted */
          }
          
          .career-loading-text {
            font-size: 12px;
          }
        }

        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .career-hero {
            min-height: 22vh; /* ✅ Further reduced */
          }
          
          .career-hero-container {
            padding: 0 20px;
            gap: 15px; /* ✅ Reduced gap */
          }
          
          .career-image-side {
            height: 180px; /* ✅ Reduced from 250px */
          }
          
          .career-image-wrapper {
            border-radius: 10px;
          }
          
          .career-main-headline {
            font-size: 24px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 13px; /* ✅ Adjusted */
          }
          
          .career-content-wrapper {
            gap: 12px; /* ✅ Adjusted */
          }
          
          .career-fallback-text {
            font-size: 16px;
          }
          
          .career-loading-spinner {
            width: 30px;
            height: 30px;
          }
        }

        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .career-hero {
            min-height: 20vh; /* ✅ Minimum height */
          }
          
          .career-hero-container {
            padding: 0 15px;
            gap: 12px; /* ✅ Reduced gap */
          }
          
          .career-image-side {
            height: 160px; /* ✅ Reduced from 220px */
          }
          
          .career-image-wrapper {
            border-radius: 8px;
          }
          
          .career-main-headline {
            font-size: 22px; /* ✅ Adjusted */
          }
          
          .career-sub-headline {
            font-size: 12px; /* ✅ Adjusted */
          }
        }
      `}</style>
    </>
  );
};

export default CareerHero;