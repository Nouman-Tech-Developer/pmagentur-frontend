import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutHero = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      <section className="about-hero">
        <div className="about-hero-background" />
        
        <div className="about-hero-container">
          <div className="about-image-side">
            <div className="about-image-wrapper">
              <img 
                src="/images/AboutHero.png" 
                alt="About Tolero AI Automation"
                className={`about-hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="about-image-fallback">
                      <div class="about-fallback-content">
                        <span class="about-fallback-text">ABOUT TOLERO</span>
                      </div>
                    </div>
                  `;
                }}
              />
              
              {!imageLoaded && (
                <div className="about-image-loading">
                  <div className="about-loading-spinner" />
                </div>
              )}
              
              <div className="about-tech-overlay">
                <div className="about-tech-grid">
                  {[...Array(8)].map((_, i) => (
                    <div key={`h${i}`} className="about-grid-line horizontal" />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div key={`v${i}`} className="about-grid-line vertical" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="about-content-side">
            <div className="about-content-wrapper">
              <h1 className="about-main-headline">
                AI-gestützte Automatisierung für Unternehmen
              </h1>

              <h2 className="about-sub-headline">
                Intelligente Prozess & Kommunikationsautomatisierung mit KI
              </h2>

              <div className="about-features">
                {[
                  'KI-Telefonassistent übernimmt Anrufe, Terminvereinbarungen und Anfragen automatisch – 24/7, zuverlässig und markenkonform.',
                  'Intelligente Chatbots & digitale Assistenten beantworten Kundenanfragen auf Website, Social Media und in internen Systemen.',
                  'E-Mail- & Workflow-Automatisierung reduziert manuelle Arbeit, beschleunigt Prozesse und minimiert Fehler.',
                  'Flexibel einsetzbar als Cloud- oder On-Premise-Lösung – DSGVO-konform und skalierbar.'
                ].map((text, index) => (
                  <div key={index} className="feature-item">
                    <div className="feature-check">✓</div>
                    <div className="feature-text">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .about-hero {
          width: 100vw;
          min-height: 100vh;
          position: relative;
          background: #000000;
          display: flex;
          align-items: flex-start;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        .about-hero-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 0;
        }

        .about-hero-container {
          position: relative;
          z-index: 1;
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 0 100px; /* Only left/right padding, no top/bottom */
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center; /* Center vertically */
          min-height: 100vh;
        }

        .about-image-side {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          height: 100%;
        }

        .about-image-wrapper {
          width: 115%;
          height: 480px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #111;
          border: 1px solid #333;
          box-shadow: 0 20px 40px rgba(0,0,0,0.5);
        }

        .about-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transition: opacity 0.8s;
          position: relative;
          z-index: 2;
        }

        .about-hero-image.loaded { opacity: 1; }

        .about-image-loading {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        .about-loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255,255,255,0.2);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

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
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        .about-grid-line {
          position: absolute;
          background: #fff;
          animation: pulse 3s infinite;
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

        .about-content-side {
          display: flex;
          align-items: center;
        }

        .about-content-wrapper {
          max-width: 600px;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .about-main-headline {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          color: #fff;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .about-sub-headline {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.5;
          color: #9CA3AF;
          margin: 0;
        }

        .about-features {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-top: 8px;
        }

        .feature-item {
          display: flex;
          gap: 12px;
          align-items: flex-start;
        }

        .feature-check {
          color: #fff;
          font-size: 18px;
          font-weight: 700;
          min-width: 20px;
        }

        .feature-text {
          font-size: 16px;
          line-height: 1.5;
          color: #D1D5DB;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        .about-content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s forwards;
        }

        .about-main-headline { animation-delay: 0.2s; }
        .about-sub-headline { animation-delay: 0.3s; }
        .about-features { animation-delay: 0.4s; }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .about-hero-container { padding: 0 60px; gap: 40px; }
          .about-main-headline { font-size: 42px; }
          .about-image-wrapper { height: 420px; }
        }

        @media (max-width: 992px) {
          .about-hero-container {
            grid-template-columns: 1fr;
            padding: 0 40px;
            gap: 40px;
          }
          .about-image-side { height: 380px; }
          .about-image-wrapper { width: 100%; }
          .about-content-wrapper { max-width: 100%; }
        }

        @media (max-width: 768px) {
          .about-hero-container { padding: 0 30px; }
          .about-main-headline { font-size: 36px; }
          .about-sub-headline { font-size: 18px; }
          .about-image-side { height: 320px; }
        }

        @media (max-width: 480px) {
          .about-hero-container { padding: 0 20px; }
          .about-main-headline { font-size: 32px; }
          .about-image-side { height: 280px; }
          .feature-text { font-size: 15px; }
        }
      `}</style>
    </>
  );
};

export default AboutHero;