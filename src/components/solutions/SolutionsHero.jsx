import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const SolutionsHero = () => {
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
      <section className="solutions-hero">
        <div className="solutions-hero-background" />
        
        <div className="solutions-hero-container">
          <div className="solutions-content-side">
            <div className="solutions-content-wrapper">
              <h1 className="solutions-main-headline">
                {t('solutions.hero.title')}
                <span className="solutions-highlight"> {t('solutions.hero.highlight')}</span>
              </h1>

              <h2 className="solutions-sub-headline">
                {t('solutions.hero.subtitle')}
              </h2>
            </div>
          </div>

          <div className="solutions-image-side">
            <div className="solutions-image-wrapper">
              <img 
                src="/images/solutions/hero-doctor.png" 
                alt={t('solutions.hero.imageAlt')}
                className={`solutions-hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const wrapper = e.target.parentElement;
                  if (wrapper) {
                    wrapper.innerHTML = `
                      <div class="solutions-image-fallback">
                        <div class="solutions-fallback-content">
                          <span class="solutions-fallback-text">${t('solutions.hero.fallbackText')}</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              
              {!imageLoaded && (
                <div className="solutions-image-loading">
                  <div className="solutions-loading-spinner" />
                  <span className="solutions-loading-text">{t('solutions.hero.loading')}</span>
                </div>
              )}
              
              <div className="solutions-tech-overlay">
                <div className="solutions-tech-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`h-${i}`} className="solutions-grid-line horizontal" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`v-${i}`} className="solutions-grid-line vertical" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .solutions-hero {
          width: 100%;
          min-height: auto;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 80px 0 60px 0;
          margin: 0;
        }

        .solutions-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        .solutions-hero-container {
          position: relative;
          z-index: 2;
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          height: auto;
          padding: 0 100px;
          margin: 0 auto;
          align-items: center;
          box-sizing: border-box;
        }

        .solutions-content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .solutions-content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px 0;
        }

        .solutions-main-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .solutions-highlight {
          color: #FFFFFF;
          position: relative;
          display: inline-block;
        }

        .solutions-highlight::after {
          content: '';
          position: absolute;
          bottom: 5px;
          left: 0;
          width: 100%;
          height: 2px;
          background: #FFFFFF;
          opacity: 0.3;
        }

        .solutions-sub-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }

        .solutions-image-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          overflow: visible;
          height: 100%;
          padding: 0;
        }

        .solutions-image-wrapper {
          width: 100%;
          height: auto;
          max-height: 350px;
          min-height: 280px;
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

        .solutions-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.8s ease;
          position: relative;
          z-index: 2;
        }

        .solutions-hero-image.loaded {
          opacity: 1;
        }

        .solutions-image-loading {
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

        .solutions-loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top: 3px solid #FFFFFF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .solutions-loading-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .solutions-image-fallback {
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

        .solutions-fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .solutions-fallback-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .solutions-tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .solutions-tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        .solutions-grid-line {
          position: absolute;
          background: #FFFFFF;
          animation: aiPulse 3s infinite;
        }

        .solutions-grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 12.5%;
        }

        .solutions-grid-line.horizontal:nth-child(2) { top: 25%; }
        .solutions-grid-line.horizontal:nth-child(3) { top: 37.5%; }
        .solutions-grid-line.horizontal:nth-child(4) { top: 50%; }
        .solutions-grid-line.horizontal:nth-child(5) { top: 62.5%; }
        .solutions-grid-line.horizontal:nth-child(6) { top: 75%; }
        .solutions-grid-line.horizontal:nth-child(7) { top: 87.5%; }

        .solutions-grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 12.5%;
        }

        .solutions-grid-line.vertical:nth-child(9) { left: 25%; }
        .solutions-grid-line.vertical:nth-child(10) { left: 37.5%; }
        .solutions-grid-line.vertical:nth-child(11) { left: 50%; }
        .solutions-grid-line.vertical:nth-child(12) { left: 62.5%; }
        .solutions-grid-line.vertical:nth-child(13) { left: 75%; }
        .solutions-grid-line.vertical:nth-child(14) { left: 87.5%; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes aiPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        .solutions-content-wrapper > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .solutions-main-headline {
          animation-delay: 0.2s;
        }

        .solutions-sub-headline {
          animation-delay: 0.3s;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1440px) {
          .solutions-hero-container {
            padding: 0 70px;
            gap: 60px;
          }
          .solutions-main-headline {
            font-size: 44px;
          }
          .solutions-sub-headline {
            font-size: 17px;
          }
          .solutions-image-wrapper {
            max-height: 320px;
            min-height: 260px;
          }
        }

        @media (max-width: 1200px) {
          .solutions-hero-container {
            padding: 0 50px;
            gap: 50px;
          }
          .solutions-main-headline {
            font-size: 40px;
          }
          .solutions-sub-headline {
            font-size: 16px;
          }
          .solutions-image-wrapper {
            max-height: 300px;
            min-height: 240px;
          }
        }

        @media (max-width: 1024px) {
          .solutions-hero-container {
            padding: 0 40px;
            gap: 40px;
          }
          .solutions-main-headline {
            font-size: 38px;
          }
          .solutions-sub-headline {
            font-size: 15px;
          }
          .solutions-content-wrapper {
            gap: 20px;
          }
          .solutions-image-wrapper {
            max-height: 280px;
            min-height: 220px;
          }
        }

        @media (max-width: 992px) {
          .solutions-hero {
            padding: 70px 0 50px 0;
          }
          .solutions-hero-container {
            grid-template-columns: 1fr;
            height: auto;
            gap: 40px;
            padding: 0 40px;
          }
          .solutions-image-side {
            order: 1;
            justify-content: center;
          }
          .solutions-content-side {
            order: 2;
            text-align: center;
          }
          .solutions-content-wrapper {
            text-align: center;
            max-width: 100%;
          }
          .solutions-main-headline {
            font-size: 36px;
          }
          .solutions-sub-headline {
            font-size: 16px;
          }
          .solutions-image-wrapper {
            width: 80%;
            margin: 0 auto;
            height: auto;
            max-height: 300px;
          }
        }

        @media (max-width: 768px) {
          .solutions-hero {
            padding: 60px 0 40px 0;
          }
          .solutions-hero-container {
            padding: 0 30px;
            gap: 30px;
          }
          .solutions-main-headline {
            font-size: 32px;
          }
          .solutions-sub-headline {
            font-size: 15px;
          }
          .solutions-image-wrapper {
            width: 100%;
            max-height: 250px;
          }
        }

        @media (max-width: 576px) {
          .solutions-hero {
            padding: 50px 0 30px 0;
          }
          .solutions-hero-container {
            padding: 0 25px;
            gap: 25px;
          }
          .solutions-main-headline {
            font-size: 28px;
          }
          .solutions-sub-headline {
            font-size: 14px;
          }
          .solutions-image-wrapper {
            max-height: 220px;
          }
        }

        @media (max-width: 480px) {
          .solutions-hero {
            padding: 40px 0 25px 0;
          }
          .solutions-hero-container {
            padding: 0 20px;
          }
          .solutions-main-headline {
            font-size: 24px;
          }
          .solutions-sub-headline {
            font-size: 13px;
          }
          .solutions-image-wrapper {
            max-height: 200px;
          }
          .solutions-loading-spinner {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default SolutionsHero;