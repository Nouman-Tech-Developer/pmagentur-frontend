import React from 'react';
import { useTranslation } from 'react-i18next';

const TextHalfImage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="text-image-section">
        <div className="text-image-container">
          <div className="text-image-content">
            <div className="text-side">
              <h2 className="section-heading">{t('textHalfImage.heading')}</h2>
              <div className="section-description">
                <p>{t('textHalfImage.description')}</p>
              </div>
              
              <div className="text-image-action">
                <a 
                  className="text-image-button" 
                  href="https://www.tolero.com/about"
                  aria-label={t('textHalfImage.buttonAria')}
                >
                  {t('textHalfImage.button')}
                </a>
              </div>
            </div>
            <div className="image-side">
              <div className="image-frame">
                <div className="image-wrapper">
                  <img 
                    src="/images/HalfText.png" 
                    alt={t('textHalfImage.imageAlt')}
                    className="tolero-image"
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                      console.log('Image loaded successfully');
                    }}
                    onError={(e) => {
                      console.error('Image failed to load');
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="image-fallback">
                          <div class="fallback-content">
                            <span class="fallback-icon">🤖</span>
                            <span class="fallback-text">TOLERO</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  
                  {/* Image overlay gradient - Black to transparent */}
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Text Half Image Section - Clean minimal */
        .text-image-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        @media only screen and (max-width: 1200px) {
          .text-image-section {
            padding: 35px 60px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-section {
            padding: 35px 40px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .text-image-section {
            padding: 35px 40px;
          }
        }
        
        @media only screen and (max-width: 576px) {
          .text-image-section {
            padding: 35px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .text-image-section {
            padding: 35px 20px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .text-image-section {
            padding: 35px 150px;
          }
        }
        
        .text-image-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Content Layout - 50/50 split */
        .text-image-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }
          
          .image-side {
            order: -1;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .text-image-content {
            gap: 40px;
          }
        }
        
        /* Text Side */
        .text-side {
          display: flex;
          flex-direction: column;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-side {
            text-align: center;
          }
        }
        
        /* Heading - Black */
        .section-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }
        
        @media only screen and (max-width: 1200px) {
          .section-heading {
            font-size: 42px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .section-heading {
            font-size: 38px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .section-heading {
            font-size: 32px;
            margin-bottom: 20px;
          }
        }
        
        @media only screen and (max-width: 576px) {
          .section-heading {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .section-heading {
            font-size: 26px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .section-heading {
            font-size: 52px;
          }
        }
        
        /* Description - Light Gray */
        .section-description {
          margin-bottom: 32px;
        }
        
        @media only screen and (max-width: 768px) {
          .section-description {
            margin-bottom: 28px;
          }
        }
        
        .section-description p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 400;
          color: #6B7280;
          margin: 0;
        }
        
        @media only screen and (max-width: 1200px) {
          .section-description p {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .section-description p {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 576px) {
          .section-description p {
            font-size: 15px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .section-description p {
            font-size: 20px;
          }
        }
        
        /* Button - Black outline, black fill on hover */
        .text-image-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 10px 32px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          min-width: 160px;
          border: 2px solid #000000;
          background-color: transparent;
          color: #000000;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
        }
        
        .text-image-button:hover {
          background-color: #000000;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-button {
            margin: 0 auto;
          }
        }
        
        @media only screen and (max-width: 576px) {
          .text-image-button {
            height: 44px;
            min-width: 150px;
            padding: 8px 28px;
            font-size: 0.95rem;
          }
        }
        
        /* Image Side */
        .image-side {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Image Frame - Clean, no border, subtle shadow */
        .image-frame {
          width: 100%;
          max-width: 600px;
          aspect-ratio: 4/3;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
          position: relative;
          background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .image-frame:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.12);
        }
        
        @media only screen and (max-width: 1024px) {
          .image-frame {
            max-width: 100%;
            aspect-ratio: 16/9;
          }
        }
        
        .image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .tolero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          opacity: 0;
          transition: opacity 0.5s ease, transform 0.6s ease;
        }
        
        .tolero-image.loaded {
          opacity: 1;
        }
        
        .image-frame:hover .tolero-image {
          transform: scale(1.05);
        }
        
        /* Image overlay gradient - Black subtle */
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.02) 0%,
            rgba(0, 0, 0, 0.01) 100%
          );
          pointer-events: none;
          z-index: 2;
        }
        
        /* Fallback when image fails to load */
        .image-fallback {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #F9FAFB 0%, #F3F4F6 100%);
          z-index: 1;
        }
        
        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .fallback-icon {
          font-size: 48px;
          animation: floatIcon 6s ease-in-out infinite;
          color: #000000;
          opacity: 0.7;
        }
        
        .fallback-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          letter-spacing: 1px;
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @media only screen and (max-width: 768px) {
          .fallback-icon {
            font-size: 42px;
          }
          
          .fallback-text {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .fallback-icon {
            font-size: 36px;
          }
          
          .fallback-text {
            font-size: 14px;
          }
        }
        
        /* Animations */
        .text-side {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .image-side {
          animation: fadeInRight 0.8s ease-out;
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default TextHalfImage;