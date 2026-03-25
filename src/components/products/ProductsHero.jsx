import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const ProductsHero = () => {
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
      <section className="products-hero">
        <div className="products-hero-background" />
        
        <div className="products-hero-container">
          <div className="products-content-side">
            <div className="products-content-wrapper">
              <h1 className="products-main-headline">
                <span className="headline-line">{t('products.hero.title')}</span>
                <span className="headline-gradient">{t('products.hero.highlight')}</span>
              </h1>

              <p className="products-sub-headline">
                {t('products.hero.subtitle')}
              </p>

              <div className="products-features">
                <div className="feature">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('products.hero.feature1')}</span>
                </div>
                <div className="feature">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('products.hero.feature2')}</span>
                </div>
                <div className="feature">
                  <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{t('products.hero.feature3')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="products-image-side">
            <div className="products-image-wrapper">
              <img 
                src="/images/products/hero-products.jpg" 
                alt={t('products.hero.imageAlt')}
                className={`products-hero-image ${imageLoaded ? 'loaded' : ''}`}
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.target.style.display = 'none';
                  const wrapper = e.target.parentElement;
                  if (wrapper) {
                    wrapper.innerHTML = `
                      <div class="products-image-fallback">
                        <div class="products-fallback-content">
                          <span class="products-fallback-text">${t('products.hero.fallbackText')}</span>
                        </div>
                      </div>
                    `;
                  }
                }}
              />
              
              {!imageLoaded && (
                <div className="products-image-loading">
                  <div className="products-loading-spinner" />
                  <span className="products-loading-text">{t('products.hero.loading')}</span>
                </div>
              )}
              
              <div className="products-tech-overlay">
                <div className="products-tech-grid">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`h-${i}`} className="products-grid-line horizontal" />
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={`v-${i}`} className="products-grid-line vertical" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .products-hero {
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

        .products-hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        .products-hero-container {
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

        .products-content-side {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        .products-content-wrapper {
          max-width: 600px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          padding: 20px 0;
        }

        .products-main-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
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
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .headline-gradient {
          background: linear-gradient(135deg, #FFFFFF 0%, #9CA3AF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease 0.1s forwards;
        }

        .products-sub-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease 0.2s forwards;
        }

        .products-features {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
          margin-top: 8px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease 0.3s forwards;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
        }

        .check-icon {
          width: 18px;
          height: 18px;
          color: #FFFFFF;
        }

        .products-image-side {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          position: relative;
          overflow: visible;
          height: 100%;
          padding: 0;
        }

        .products-image-wrapper {
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

        .products-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          opacity: 0;
          transition: opacity 0.8s ease;
          position: relative;
          z-index: 2;
        }

        .products-hero-image.loaded {
          opacity: 1;
        }

        .products-image-loading {
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

        .products-loading-spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(255, 255, 255, 0.2);
          border-top: 3px solid #FFFFFF;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        .products-loading-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .products-image-fallback {
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

        .products-fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .products-fallback-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(255, 255, 255, 0.2);
          text-align: center;
        }

        .products-tech-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .products-tech-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0.15;
        }

        .products-grid-line {
          position: absolute;
          background: #FFFFFF;
          animation: aiPulse 3s infinite;
        }

        .products-grid-line.horizontal {
          width: 100%;
          height: 1px;
          top: 12.5%;
        }

        .products-grid-line.horizontal:nth-child(2) { top: 25%; }
        .products-grid-line.horizontal:nth-child(3) { top: 37.5%; }
        .products-grid-line.horizontal:nth-child(4) { top: 50%; }
        .products-grid-line.horizontal:nth-child(5) { top: 62.5%; }
        .products-grid-line.horizontal:nth-child(6) { top: 75%; }
        .products-grid-line.horizontal:nth-child(7) { top: 87.5%; }

        .products-grid-line.vertical {
          width: 1px;
          height: 100%;
          left: 12.5%;
        }

        .products-grid-line.vertical:nth-child(9) { left: 25%; }
        .products-grid-line.vertical:nth-child(10) { left: 37.5%; }
        .products-grid-line.vertical:nth-child(11) { left: 50%; }
        .products-grid-line.vertical:nth-child(12) { left: 62.5%; }
        .products-grid-line.vertical:nth-child(13) { left: 75%; }
        .products-grid-line.vertical:nth-child(14) { left: 87.5%; }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes aiPulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive */
        @media (max-width: 1440px) {
          .products-hero-container {
            padding: 0 70px;
            gap: 60px;
          }
          .products-main-headline {
            font-size: 44px;
          }
          .products-sub-headline {
            font-size: 17px;
          }
          .products-image-wrapper {
            max-height: 320px;
            min-height: 260px;
          }
        }

        @media (max-width: 1200px) {
          .products-hero-container {
            padding: 0 50px;
            gap: 50px;
          }
          .products-main-headline {
            font-size: 40px;
          }
          .products-sub-headline {
            font-size: 16px;
          }
          .products-image-wrapper {
            max-height: 300px;
            min-height: 240px;
          }
        }

        @media (max-width: 1024px) {
          .products-hero-container {
            padding: 0 40px;
            gap: 40px;
          }
          .products-main-headline {
            font-size: 38px;
          }
          .products-sub-headline {
            font-size: 15px;
          }
          .products-content-wrapper {
            gap: 20px;
          }
          .products-image-wrapper {
            max-height: 280px;
            min-height: 220px;
          }
        }

        @media (max-width: 992px) {
          .products-hero {
            padding: 70px 0 50px 0;
          }
          .products-hero-container {
            grid-template-columns: 1fr;
            height: auto;
            gap: 40px;
            padding: 0 40px;
          }
          .products-image-side {
            order: 1;
            justify-content: center;
          }
          .products-content-side {
            order: 2;
            text-align: center;
          }
          .products-content-wrapper {
            text-align: center;
            max-width: 100%;
          }
          .products-main-headline {
            font-size: 36px;
          }
          .products-sub-headline {
            font-size: 16px;
          }
          .products-features {
            justify-content: center;
          }
          .products-image-wrapper {
            width: 80%;
            margin: 0 auto;
            height: auto;
            max-height: 300px;
          }
        }

        @media (max-width: 768px) {
          .products-hero {
            padding: 60px 0 40px 0;
          }
          .products-hero-container {
            padding: 0 30px;
            gap: 30px;
          }
          .products-main-headline {
            font-size: 32px;
          }
          .products-sub-headline {
            font-size: 15px;
          }
          .products-image-wrapper {
            width: 100%;
            max-height: 250px;
          }
        }

        @media (max-width: 576px) {
          .products-hero {
            padding: 50px 0 30px 0;
          }
          .products-hero-container {
            padding: 0 25px;
            gap: 25px;
          }
          .products-main-headline {
            font-size: 28px;
          }
          .products-sub-headline {
            font-size: 14px;
          }
          .products-image-wrapper {
            max-height: 220px;
          }
          .products-features {
            gap: 16px;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .products-hero {
            padding: 40px 0 25px 0;
          }
          .products-hero-container {
            padding: 0 20px;
          }
          .products-main-headline {
            font-size: 24px;
          }
          .products-sub-headline {
            font-size: 13px;
          }
          .products-image-wrapper {
            max-height: 200px;
          }
          .products-loading-spinner {
            width: 30px;
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductsHero;