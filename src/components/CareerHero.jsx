import React, { useState, useEffect, useRef } from 'react';

const CareerHero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  // Check for mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Parallax effect on mouse move (desktop only)
  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Scroll parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/Career.jpg';
    img.onload = () => setImageLoaded(true);
  }, []);

  // Calculate transforms based on mouse position and scroll
  const getImageTransform = () => {
    if (isMobile) return 'scale(1.05)';
    
    const moveX = mousePosition.x * 10;
    const moveY = mousePosition.y * 10;
    const scale = 1.05 + scrollProgress * 0.05;
    
    return `translate(${moveX}px, ${moveY}px) scale(${scale})`;
  };

  const getOverlayTransform = () => {
    if (isMobile) return 'none';
    
    const moveX = mousePosition.x * -5;
    const moveY = mousePosition.y * -5;
    
    return `translate(${moveX}px, ${moveY}px)`;
  };

  return (
    <>
      <section className="career-hero" ref={heroRef}>
        {/* Black Background with Gradient */}
        <div className="career-hero-background">
          <div className="career-hero-gradient" />
          <div className="career-hero-noise" />
        </div>
        
        {/* Container for split layout */}
        <div className="career-hero-container">
          {/* Left Side - Content */}
          <div className="career-content-side">
            <div className="career-content-wrapper">
              {/* Main Headline */}
              <h1 className="career-main-headline">
                <span className="headline-line">Gestalte die Zukunft</span>
                <span className="headline-gradient">der KI mit uns</span>
              </h1>

              {/* Sub Headline */}
              <div className="career-description-wrapper">
                <h2 className="career-sub-headline">
                  Werde Teil eines Teams, das innovative KI-Lösungen entwickelt 
                  und Unternehmen weltweit transformiert.
                </h2>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="career-image-side">
            <div className="career-image-wrapper" ref={imageRef}>
              <div className="career-image-frame">
                <div 
                  className="career-image-container"
                  style={{ transform: getImageTransform() }}
                >
                  <img 
                    src="/images/Career.jpg" 
                    alt="TOLERO Team Karriere"
                    className={`career-hero-image ${imageLoaded ? 'loaded' : ''}`}
                  />
                </div>
              </div>
              
              {/* Loading Overlay */}
              {!imageLoaded && (
                <div className="career-image-loading">
                  <div className="career-loading-spinner"></div>
                  <span className="career-loading-text">Lädt Bild...</span>
                </div>
              )}
              
              {/* Tech Overlay with Animation */}
              <div className="career-tech-overlay" style={{ transform: getOverlayTransform() }}>
                <div className="career-tech-grid">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`ch-${i}`} className="career-grid-line horizontal" />
                  ))}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={`cv-${i}`} className="career-grid-line vertical" />
                  ))}
                </div>
                <div className="career-tech-dots">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={`dot-${i}`} className="career-tech-dot" />
                  ))}
                </div>
              </div>

              {/* Corner Accents */}
              <div className="career-image-corners">
                <div className="corner top-left" />
                <div className="corner top-right" />
                <div className="corner bottom-left" />
                <div className="corner bottom-right" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="career-scroll-indicator">
          <span className="scroll-text">Entdecken</span>
          <div className="scroll-line">
            <div className="scroll-progress" style={{ width: `${scrollProgress * 100}%` }} />
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Font Family applied to entire component */
        .career-hero {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          width: 100%;
          min-height: 600px;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin-top: 0;
        }

        /* Background Effects */
        .career-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .career-hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.03) 0%, transparent 50%),
                      radial-gradient(circle at 70% 30%, rgba(255,255,255,0.03) 0%, transparent 50%);
        }

        .career-hero-noise {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
          opacity: 0.15;
          pointer-events: none;
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
          min-height: 600px;
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
          gap: 30px;
          padding: 20px 0;
        }

        .career-main-headline {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .headline-line {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .headline-gradient {
          background: linear-gradient(135deg, #FFFFFF 0%, #9CA3AF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease 0.1s forwards;
        }

        .career-description-wrapper {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease 0.2s forwards;
        }

        .career-sub-headline {
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
          letter-spacing: -0.01em;
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

        .career-image-wrapper {
          width: 100%;
          height: 70%;
          max-height: 400px;
          min-height: 350px;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          background: linear-gradient(135deg, #111111 0%, #222222 100%);
          border: 1px solid #333333;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
        }

        .career-image-frame {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .career-image-container {
          width: 100%;
          height: 100%;
          transition: transform 0.1s ease-out;
          will-change: transform;
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

        /* Loading State */
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
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-top: 2px solid #FFFFFF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .career-loading-text {
          font-size: 14px;
          font-weight: 500;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Tech Overlay */
        .career-tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
          transition: transform 0.1s ease-out;
          will-change: transform;
        }

        .career-tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        .career-grid-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, #FFFFFF, transparent);
          animation: scanLine 8s linear infinite;
        }

        .career-grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 8.33%;
        }

        .career-grid-line.horizontal:nth-child(2) { top: 16.66%; animation-delay: 0.6s; }
        .career-grid-line.horizontal:nth-child(3) { top: 25%; animation-delay: 1.2s; }
        .career-grid-line.horizontal:nth-child(4) { top: 33.33%; animation-delay: 1.8s; }
        .career-grid-line.horizontal:nth-child(5) { top: 41.66%; animation-delay: 2.4s; }
        .career-grid-line.horizontal:nth-child(6) { top: 50%; animation-delay: 3s; }
        .career-grid-line.horizontal:nth-child(7) { top: 58.33%; animation-delay: 3.6s; }
        .career-grid-line.horizontal:nth-child(8) { top: 66.66%; animation-delay: 4.2s; }
        .career-grid-line.horizontal:nth-child(9) { top: 75%; animation-delay: 4.8s; }
        .career-grid-line.horizontal:nth-child(10) { top: 83.33%; animation-delay: 5.4s; }
        .career-grid-line.horizontal:nth-child(11) { top: 91.66%; animation-delay: 6s; }

        .career-grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 8.33%;
          background: linear-gradient(180deg, transparent, #FFFFFF, transparent);
        }

        .career-grid-line.vertical:nth-child(13) { left: 16.66%; animation-delay: 0.6s; }
        .career-grid-line.vertical:nth-child(14) { left: 25%; animation-delay: 1.2s; }
        .career-grid-line.vertical:nth-child(15) { left: 33.33%; animation-delay: 1.8s; }
        .career-grid-line.vertical:nth-child(16) { left: 41.66%; animation-delay: 2.4s; }
        .career-grid-line.vertical:nth-child(17) { left: 50%; animation-delay: 3s; }
        .career-grid-line.vertical:nth-child(18) { left: 58.33%; animation-delay: 3.6s; }
        .career-grid-line.vertical:nth-child(19) { left: 66.66%; animation-delay: 4.2s; }
        .career-grid-line.vertical:nth-child(20) { left: 75%; animation-delay: 4.8s; }
        .career-grid-line.vertical:nth-child(21) { left: 83.33%; animation-delay: 5.4s; }
        .career-grid-line.vertical:nth-child(22) { left: 91.66%; animation-delay: 6s; }

        .career-tech-dots {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(#FFFFFF 1px, transparent 1px);
          background-size: 25px 25px;
          opacity: 0.1;
          animation: pulseDots 4s ease-in-out infinite;
        }

        @keyframes scanLine {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateX(100%); opacity: 0; }
        }

        @keyframes pulseDots {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        /* Corner Accents */
        .career-image-corners {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 4;
        }

        .corner {
          position: absolute;
          width: 25px;
          height: 25px;
          border-style: solid;
          border-color: rgba(255, 255, 255, 0.3);
        }

        .corner.top-left {
          top: 10px;
          left: 10px;
          border-width: 2px 0 0 2px;
        }

        .corner.top-right {
          top: 10px;
          right: 10px;
          border-width: 2px 2px 0 0;
        }

        .corner.bottom-left {
          bottom: 10px;
          left: 10px;
          border-width: 0 0 2px 2px;
        }

        .corner.bottom-right {
          bottom: 10px;
          right: 10px;
          border-width: 0 2px 2px 0;
        }

        /* Scroll Indicator */
        .career-scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 10;
          opacity: 0.5;
          transition: opacity 0.3s ease;
        }

        .career-scroll-indicator:hover {
          opacity: 1;
        }

        .scroll-text {
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .scroll-line {
          width: 50px;
          height: 2px;
          background: rgba(255, 255, 255, 0.2);
          overflow: hidden;
        }

        .scroll-progress {
          height: 100%;
          background: #FFFFFF;
          transition: width 0.1s ease;
        }

        /* Animations */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1700px) {
          .career-hero-container {
            padding: 0 90px;
          }
        }

        @media (max-width: 1600px) {
          .career-hero-container {
            padding: 0 80px;
          }
        }

        @media (max-width: 1440px) {
          .career-hero-container {
            padding: 0 70px;
            gap: 60px;
          }
          
          .career-main-headline {
            font-size: 44px;
          }
          
          .career-sub-headline {
            font-size: 17px;
          }
          
          .career-image-wrapper {
            max-height: 380px;
            min-height: 330px;
          }
        }

        @media (max-width: 1366px) {
          .career-hero-container {
            padding: 0 60px;
          }
          
          .career-main-headline {
            font-size: 42px;
          }
        }

        @media (max-width: 1200px) {
          .career-hero-container {
            padding: 0 50px;
            gap: 50px;
          }
          
          .career-main-headline {
            font-size: 40px;
          }
          
          .career-sub-headline {
            font-size: 16px;
          }
          
          .career-image-wrapper {
            height: 65%;
            max-height: 350px;
            min-height: 300px;
          }
        }

        @media (max-width: 1024px) {
          .career-hero-container {
            padding: 0 40px;
            gap: 40px;
          }
          
          .career-main-headline {
            font-size: 38px;
          }
          
          .career-sub-headline {
            font-size: 15px;
          }
          
          .career-content-wrapper {
            gap: 25px;
          }
          
          .career-image-wrapper {
            height: 62%;
            max-height: 320px;
            min-height: 270px;
          }
        }

        @media (max-width: 992px) {
          .career-hero {
            min-height: auto;
            height: auto;
            padding: 60px 0 40px;
          }
          
          .career-hero-container {
            grid-template-columns: 1fr;
            height: auto;
            min-height: auto;
            gap: 40px;
            padding: 0 35px;
          }
          
          .career-content-side {
            order: 2;
            height: auto;
          }
          
          .career-image-side {
            order: 1;
            height: 350px;
          }
          
          .career-content-wrapper {
            padding: 10px 0;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
            gap: 25px;
          }
          
          .career-image-wrapper {
            width: 100%;
            height: 100%;
            max-height: none;
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .career-hero {
            padding: 50px 0 30px;
          }
          
          .career-hero-container {
            padding: 0 30px;
            gap: 30px;
          }
          
          .career-main-headline {
            font-size: 36px;
          }
          
          .career-sub-headline {
            font-size: 15px;
          }
          
          .career-image-side {
            height: 300px;
          }
          
          .career-content-wrapper {
            gap: 20px;
          }
        }

        @media (max-width: 576px) {
          .career-hero {
            padding: 40px 0 25px;
          }
          
          .career-hero-container {
            padding: 0 25px;
            gap: 25px;
          }
          
          .career-image-side {
            height: 250px;
          }
          
          .career-main-headline {
            font-size: 32px;
          }
          
          .career-sub-headline {
            font-size: 14px;
          }
          
          .career-content-wrapper {
            gap: 15px;
          }
        }

        @media (max-width: 480px) {
          .career-hero {
            padding: 30px 0 20px;
          }
          
          .career-hero-container {
            padding: 0 20px;
            gap: 20px;
          }
          
          .career-image-side {
            height: 220px;
          }
          
          .career-image-wrapper {
            border-radius: 12px;
          }
          
          .career-main-headline {
            font-size: 28px;
          }
          
          .career-sub-headline {
            font-size: 13px;
          }
          
          .career-content-wrapper {
            gap: 12px;
          }
          
          .career-loading-spinner {
            width: 30px;
            height: 30px;
          }
        }

        @media (max-width: 360px) {
          .career-hero {
            padding: 25px 0 15px;
          }
          
          .career-hero-container {
            padding: 0 15px;
            gap: 15px;
          }
          
          .career-image-side {
            height: 200px;
          }
          
          .career-image-wrapper {
            border-radius: 10px;
          }
          
          .career-main-headline {
            font-size: 24px;
          }
          
          .career-sub-headline {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default CareerHero;