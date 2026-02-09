import React from 'react';
import { useTranslation } from 'react-i18next';

const VideoText = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="video-text-section">
        <div className="video-text-container">
          {/* Text Content */}
          <div className="video-text-content">
            <div className="text-left">
              <div className="video-tagline">
                {t('videoText.tagline')}
              </div>
              <h2 className="video-title">
                {t('videoText.title')}
              </h2>
            </div>
            
            <div className="text-right">
              <div className="video-description">
                <p>
                  {t('videoText.description')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="video-container">
            <div className="video-wrapper">
              {/* Local video file */}
              <video 
                className="tolero-video" 
                controls
                poster="/images/video-poster.jpg"
                preload="metadata"
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                <source src="/videos/hero.webm" type="video/webm" />
                {t('videoText.fallbackText')}
              </video>
              
              {/* Fallback if video doesn't load */}
              <div className="video-fallback">
                <div className="fallback-content">
                  <div className="fallback-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5V19L19 12L8 5Z" fill="#22D3EE"/>
                    </svg>
                  </div>
                  <span className="fallback-text">TOLERO AI</span>
                  <span className="fallback-subtext">{t('videoText.playVideo')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Video Text Section */
        .video-text-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .video-text-section::before {
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
          .video-text-section {
            padding: 30px 80px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .video-text-section {
            padding: 25px 60px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .video-text-section {
            padding: 20px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .video-text-section {
            padding: 20px 40px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .video-text-section {
            padding: 15px 30px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .video-text-section {
            padding: 15px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .video-text-section {
            padding: 15px 20px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .video-text-section {
            padding: 12px 15px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .video-text-section {
            padding: 10px 12px;
          }
        }
        
        /* Extra wide screens */
        @media only screen and (min-width: 1600px) {
          .video-text-section {
            padding: 40px 150px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .video-text-section {
            padding: 50px 200px;
          }
        }
        
        .video-text-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Text Content */
        .video-text-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 60px;
          align-items: start;
        }
        
        @media only screen and (max-width: 1024px) {
          .video-text-content {
            grid-template-columns: 1fr;
            gap: 40px;
            margin-bottom: 40px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .video-text-content {
            gap: 32px;
            margin-bottom: 32px;
          }
        }
        
        /* Text Left */
        .text-left {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        @media only screen and (max-width: 1024px) {
          .text-left {
            text-align: center;
          }
        }
        
        /* Tagline */
        .video-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          display: inline-block;
          padding: 6px 14px;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 20px;
          align-self: flex-start;
        }
        
        @media only screen and (max-width: 1024px) {
          .video-tagline {
            align-self: center;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .video-tagline {
            font-size: 13px;
            padding: 5px 12px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .video-tagline {
            font-size: 12px;
            padding: 4px 10px;
          }
        }
        
        /* Title */
        .video-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0;
          letter-spacing: -0.02em;
        }
        
        @media only screen and (max-width: 1200px) {
          .video-title {
            font-size: 44px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .video-title {
            font-size: 38px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .video-title {
            font-size: 34px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .video-title {
            font-size: 32px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .video-title {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .video-title {
            font-size: 26px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .video-title {
            font-size: 24px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .video-title {
            font-size: 22px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .video-title {
            font-size: 56px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .video-title {
            font-size: 60px;
          }
        }
        
        /* Text Right */
        .text-right {
          display: flex;
          align-items: center;
        }
        
        /* Description */
        .video-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          margin: 0;
        }
        
        .video-description p {
          margin: 0;
        }
        
        @media only screen and (max-width: 1200px) {
          .video-description {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .video-description {
            font-size: 16px;
            line-height: 1.7;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .video-description {
            font-size: 15px;
            line-height: 1.6;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .video-description {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .video-description {
            font-size: 13px;
          }
        }
        
        /* Video Container */
        .video-container {
          width: 100%;
        }
        
        /* Video Wrapper */
        .video-wrapper {
          position: relative;
          width: 100%;
          height: auto;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.08);
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .video-wrapper:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
          border-color: rgba(34, 211, 238, 0.3);
        }
        
        @media only screen and (max-width: 768px) {
          .video-wrapper {
            border-radius: 20px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .video-wrapper {
            border-radius: 16px;
          }
        }
        
        /* TOLERO Video */
        .tolero-video {
          width: 100%;
          height: auto;
          display: block;
          border: none;
          border-radius: 24px;
          outline: none;
          z-index: 2;
          position: relative;
        }
        
        .tolero-video:focus {
          outline: 2px solid #22D3EE;
          outline-offset: 2px;
        }
        
        @media only screen and (max-width: 768px) {
          .tolero-video {
            border-radius: 20px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .tolero-video {
            border-radius: 16px;
          }
        }
        
        /* Video Fallback */
        .video-fallback {
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
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        /* Show fallback only if video fails to load */
        .video-wrapper:has(.tolero-video:not([src])) .video-fallback,
        .video-wrapper:has(.tolero-video[poster]) .video-fallback:not(:has(.tolero-video[controls])) {
          opacity: 1;
        }
        
        .fallback-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          text-align: center;
        }
        
        .fallback-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .video-wrapper:hover .fallback-icon {
          transform: scale(1.1);
          background: rgba(255, 255, 255, 0.15);
        }
        
        .fallback-text {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          font-weight: 600;
          color: #22D3EE;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        
        .fallback-subtext {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.8);
          letter-spacing: 0.5px;
        }
        
        @media only screen and (max-width: 768px) {
          .fallback-icon {
            width: 50px;
            height: 50px;
          }
          
          .fallback-icon svg {
            width: 24px;
            height: 24px;
          }
          
          .fallback-text {
            font-size: 18px;
          }
          
          .fallback-subtext {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .fallback-icon {
            width: 40px;
            height: 40px;
          }
          
          .fallback-icon svg {
            width: 20px;
            height: 20px;
          }
          
          .fallback-text {
            font-size: 16px;
            letter-spacing: 1px;
          }
          
          .fallback-subtext {
            font-size: 12px;
          }
        }
        
        /* Video Controls Customization */
        .tolero-video::-webkit-media-controls-panel {
          background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.7));
        }
        
        .tolero-video::-webkit-media-controls-play-button {
          background-color: #22D3EE;
          border-radius: 50%;
        }
        
        .tolero-video::-webkit-media-controls-current-time-display,
        .tolero-video::-webkit-media-controls-time-remaining-display {
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }
        
        /* Animations */
        .text-left {
          animation: fadeInLeft 0.8s ease-out;
        }
        
        .text-right {
          animation: fadeInRight 0.8s ease-out;
        }
        
        .video-container {
          animation: fadeInUp 0.8s ease-out;
          animation-delay: 0.2s;
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
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default VideoText;