import React from 'react';
import { useTranslation } from 'react-i18next';

const AppointmentHero = () => {
  const { t } = useTranslation();

  return (
    <section className="appointment-hero">
      <div className="hero-background" />
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {t('appointment.hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('appointment.hero.subtitle')}
          </p>
        </div>
      </div>

      <style jsx="true">{`
        .appointment-hero {
          width: 100%;
          position: relative;
          background: #000000;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: 120px 0 80px 0;
          margin: 0;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #000000;
          z-index: 1;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          width: 100%;
          padding: 0 100px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          line-height: 1.2;
          color: #FFFFFF;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }

        .hero-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #9CA3AF;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .appointment-hero {
            padding: 100px 0 60px 0;
          }
          .hero-container {
            padding: 0 60px;
          }
          .hero-title {
            font-size: 40px;
          }
          .hero-subtitle {
            font-size: 17px;
          }
        }

        @media (max-width: 768px) {
          .appointment-hero {
            padding: 80px 0 50px 0;
          }
          .hero-container {
            padding: 0 40px;
          }
          .hero-title {
            font-size: 32px;
          }
          .hero-subtitle {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .appointment-hero {
            padding: 70px 0 40px 0;
          }
          .hero-container {
            padding: 0 24px;
          }
          .hero-title {
            font-size: 28px;
          }
          .hero-subtitle {
            font-size: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default AppointmentHero;