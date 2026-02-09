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
              <span className="section-badge">{t('textHalfImage.badge')}</span>
              <h2 className="section-heading">{t('textHalfImage.heading')}</h2>
              <div className="section-description">
                <p>{t('textHalfImage.description')}</p>
              </div>
              
              <div className="text-image-action">
                <a 
                  className="text-image-button tolero-button tolero-button--secondary" 
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
                            <span class="fallback-text">TOLERO AI</span>
                          </div>
                        </div>
                      `;
                    }}
                  />
                  
                  {/* Image overlay gradient */}
                  <div className="image-overlay"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Text Half Image Section - Reduced spacing */
        .text-image-section {
          width: 100%;
          padding: 15px 100px 25px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .text-image-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          z-index: 1;
        }
        
        @media only screen and (max-width: 1200px) {
          .text-image-section {
            padding: 10px 80px 20px 80px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-section {
            padding: 10px 60px 15px 60px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .text-image-section {
            padding: 10px 50px 15px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .text-image-section {
            padding: 10px 40px 15px 40px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .text-image-section {
            padding: 10px 30px 15px 30px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .text-image-section {
            padding: 10px 25px 15px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .text-image-section {
            padding: 10px 20px 15px 20px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .text-image-section {
            padding: 8px 15px 12px 15px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .text-image-section {
            padding: 8px 12px 12px 12px;
          }
        }
        
        /* Extra wide screens */
        @media only screen and (min-width: 1600px) {
          .text-image-section {
            padding: 20px 150px 30px 150px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .text-image-section {
            padding: 30px 200px 40px 200px;
          }
        }
        
        .text-image-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Content Layout */
        .text-image-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          
          .image-side {
            order: -1;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .text-image-content {
            gap: 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .text-image-content {
            gap: 30px;
          }
        }
        
        /* Text Side */
        .text-side {
          display: flex;
          flex-direction: column;
          margin-top: 10px;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-side {
            text-align: center;
            margin-top: 0;
          }
        }
        
        /* Badge */
        .section-badge {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          display: inline-block;
          padding: 5px 12px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 20px;
          align-self: flex-start;
        }
        
        @media only screen and (max-width: 1024px) {
          .section-badge {
            align-self: center;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .section-badge {
            font-size: 12px;
            padding: 4px 10px;
            margin-bottom: 14px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .section-badge {
            font-size: 11px;
            padding: 3px 8px;
            margin-bottom: 12px;
          }
        }
        
        /* Heading */
        .section-heading {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        @media only screen and (max-width: 1200px) {
          .section-heading {
            font-size: 44px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .section-heading {
            font-size: 38px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .section-heading {
            font-size: 34px;
            margin-bottom: 18px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .section-heading {
            font-size: 32px;
            margin-bottom: 16px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .section-heading {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .section-heading {
            font-size: 26px;
            margin-bottom: 14px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .section-heading {
            font-size: 24px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .section-heading {
            font-size: 22px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .section-heading {
            font-size: 20px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .section-heading {
            font-size: 56px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .section-heading {
            font-size: 60px;
          }
        }
        
        /* Description */
        .section-description {
          margin-bottom: 35px;
        }
        
        @media only screen and (max-width: 768px) {
          .section-description {
            margin-bottom: 28px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .section-description {
            margin-bottom: 24px;
          }
        }
        
        .section-description p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          margin: 0;
        }
        
        @media only screen and (max-width: 1200px) {
          .section-description p {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .section-description p {
            font-size: 16px;
            line-height: 1.7;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .section-description p {
            font-size: 15px;
            line-height: 1.6;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .section-description p {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .section-description p {
            font-size: 13px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .section-description p {
            font-size: 20px;
          }
        }
        
        /* Button */
        .text-image-action {
          margin-top: 5px;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-action {
            margin-top: 0;
          }
        }
        
        /* Consistent Button Styles */
        .tolero-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 157px;
          border: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
        }
        
        .tolero-button--secondary {
          background-color: transparent;
          color: #22D3EE;
          border: 2px solid #22D3EE;
        }
        
        .tolero-button--secondary:hover {
          background-color: #22D3EE;
          color: #FFFFFF;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(34, 211, 238, 0.3);
        }
        
        @media only screen and (max-width: 1024px) {
          .text-image-button {
            display: flex;
            margin: 0 auto;
          }
        }
        
        /* Image Side */
        .image-side {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 450px;
        }
        
        @media only screen and (max-width: 1200px) {
          .image-side {
            min-height: 400px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .image-side {
            min-height: 350px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .image-side {
            min-height: 300px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .image-side {
            min-height: 280px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .image-side {
            min-height: 230px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .image-side {
            min-height: 200px;
          }
        }
        
        .image-frame {
          width: 100%;
          max-width: 550px;
          height: 450px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.08);
          position: relative;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .image-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 211, 238, 0.3);
        }
        
        @media only screen and (max-width: 1200px) {
          .image-frame {
            height: 400px;
            max-width: 500px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .image-frame {
            height: 350px;
            max-width: 100%;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .image-frame {
            height: 300px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .image-frame {
            height: 280px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .image-frame {
            height: 230px;
            border-radius: 18px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .image-frame {
            height: 200px;
            border-radius: 16px;
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
          object-position: center center;
          display: block;
          opacity: 0;
          transition: all 0.5s ease;
        }
        
        .tolero-image.loaded {
          opacity: 1;
        }
        
        .image-frame:hover .tolero-image {
          transform: scale(1.05);
        }
        
        /* Image overlay gradient */
        .image-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(34, 211, 238, 0.1) 0%,
            rgba(37, 99, 235, 0.05) 100%
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
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          z-index: 1;
        }
        
        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        
        .fallback-icon {
          font-size: 50px;
          animation: floatIcon 6s ease-in-out infinite;
          color: #22D3EE;
        }
        
        .fallback-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        
        @keyframes floatIcon {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(10deg); }
        }
        
        @media only screen and (max-width: 768px) {
          .fallback-icon {
            font-size: 45px;
          }
          
          .fallback-text {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .fallback-icon {
            font-size: 35px;
          }
          
          .fallback-text {
            font-size: 14px;
            letter-spacing: 1px;
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