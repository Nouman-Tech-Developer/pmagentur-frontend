import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutStory = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-story-section">
        <div className="about-story-container">
          
          {/* First part: We are Reinke */}
          <div className="about-story-content">
            <div className="about-story-wrapper">
              <div className="about-story-top">
                <h1 className="about-story-headline">{t('aboutStory.weAre.title')}</h1>
              </div>
              <div className="about-story-text">
                <div className="about-story-paragraphs">
                  <p>{t('aboutStory.weAre.paragraph1')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Second part: How we work */}
          <div className="about-story-content second-part">
            <div className="about-story-wrapper">
              <div className="about-story-top">
                <p className="about-story-tagline">{t('aboutStory.howWeWork.tagline')}</p>
                <h2 className="about-story-headline">{t('aboutStory.howWeWork.title')}</h2>
              </div>
              <div className="about-story-text">
                <div className="about-story-paragraphs">
                  <p>{t('aboutStory.howWeWork.paragraph1')}</p>
                  <p>{t('aboutStory.howWeWork.paragraph2')}</p>
                  <p>{t('aboutStory.howWeWork.paragraph3')}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx="true">{`
        .about-story-section {
          width: 100%;
          background: #FFFFFF;
          position: relative;
        }
        
        .about-story-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 100px 35px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s cubic-bezier(0.2, 0.9, 0.3, 1) forwards;
        }
        
        @media only screen and (max-width: 1024px) {
          .about-story-container {
            padding: 80px 35px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .about-story-container {
            padding: 60px 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-story-container {
            padding: 40px 25px;
          }
        }
        
        .about-story-content {
          width: 100%;
          display: flex;
          flex-direction: column;
          max-width: 900px;
        }
        
        .about-story-content + .about-story-content.second-part {
          margin-top: 80px;
        }
        
        @media only screen and (max-width: 768px) {
          .about-story-content + .about-story-content.second-part {
            margin-top: 60px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-story-content + .about-story-content.second-part {
            margin-top: 50px;
          }
        }
        
        .about-story-wrapper {
          width: 100%;
        }
        
        .about-story-top {
          margin-bottom: 24px;
          position: relative;
        }
        
        .about-story-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #0066FF;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: inline-block;
          position: relative;
          padding-left: 0;
        }
        
        .about-story-tagline::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 40px;
          height: 2px;
          background: #0066FF;
          opacity: 0.3;
        }
        
        .about-story-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }
        
        .about-story-text {
          max-width: 800px;
          width: 100%;
        }
        
        .about-story-paragraphs {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 18px;
          line-height: 1.7;
          font-weight: 400;
          color: #374151;
        }
        
        .about-story-paragraphs p {
          margin-bottom: 24px;
          font-size: 18px;
          line-height: 1.7;
          color: #374151;
        }
        
        .about-story-paragraphs p:last-child {
          margin-bottom: 0;
        }
        
        .about-story-paragraphs p:first-of-type {
          font-size: 20px;
          color: #111827;
          font-weight: 450;
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
        
        @media (max-width: 1400px) {
          .about-story-headline {
            font-size: 44px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 17px;
          }
          
          .about-story-paragraphs p:first-of-type {
            font-size: 19px;
          }
        }
        
        @media (max-width: 1200px) {
          .about-story-headline {
            font-size: 40px;
          }
        }
        
        @media (max-width: 1024px) {
          .about-story-headline {
            font-size: 38px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 16px;
            line-height: 1.6;
          }
          
          .about-story-paragraphs p:first-of-type {
            font-size: 18px;
          }
        }
        
        @media (max-width: 992px) {
          .about-story-container {
            padding: 70px 35px;
          }
          
          .about-story-content + .about-story-content.second-part {
            margin-top: 70px;
          }
        }
        
        @media (max-width: 768px) {
          .about-story-container {
            padding: 60px 30px;
          }
          
          .about-story-headline {
            font-size: 34px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 15px;
          }
          
          .about-story-paragraphs p:first-of-type {
            font-size: 17px;
          }
          
          .about-story-top {
            margin-bottom: 20px;
          }
          
          .about-story-tagline {
            font-size: 13px;
            margin-bottom: 10px;
          }
        }
        
        @media (max-width: 576px) {
          .about-story-container {
            padding: 50px 25px;
          }
          
          .about-story-headline {
            font-size: 30px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 14px;
          }
          
          .about-story-paragraphs p:first-of-type {
            font-size: 16px;
          }
          
          .about-story-content + .about-story-content.second-part {
            margin-top: 50px;
          }
        }
        
        @media (max-width: 480px) {
          .about-story-container {
            padding: 40px 20px;
          }
          
          .about-story-headline {
            font-size: 26px;
          }
          
          .about-story-paragraphs p {
            margin-bottom: 20px;
          }
          
          .about-story-tagline {
            font-size: 12px;
            letter-spacing: 2px;
          }
        }
        
        @media (max-width: 360px) {
          .about-story-container {
            padding: 30px 15px;
          }
          
          .about-story-headline {
            font-size: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default AboutStory;