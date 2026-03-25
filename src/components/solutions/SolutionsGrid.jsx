import React from 'react';
import { useTranslation } from 'react-i18next';

const SolutionsGrid = ({ solutions }) => {
  const { t } = useTranslation();

  return (
    <div className="solutions-grid-container">
      <div className="grid-header">
        <h2 className="grid-title">{t('solutions.grid.title', 'Unsere Lösungen im Überblick')}</h2>
        <p className="grid-subtitle">{t('solutions.grid.subtitle', 'Maßgeschneiderte KI-Assistenten für Ihre Arztpraxis')}</p>
      </div>
      
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={solution.id} className={`solution-card ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
            <div className="card-image">
              <img src={`/images/${solution.image}`} alt={solution.title} />
              <div className="image-overlay">
                <div className="icon-large">{solution.icon}</div>
              </div>
            </div>
            <div className="card-content">
              <h3 className="card-title">{solution.title}</h3>
              <p className="card-description">{solution.description}</p>
              
              {/* Features with Points + Paragraph */}
              <div className="features-section">
                {solution.features.map((feature, idx) => (
                  <div key={idx} className="feature-block">
                    <div className="feature-point">
                      <span className="point-icon">●</span>
                      <span className="point-title">{feature.point}</span>
                    </div>
                    {feature.paragraph && (
                      <p className="feature-paragraph">{feature.paragraph}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx="true">{`
        .solutions-grid-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 100px 100px 80px 100px;
          background: #FFFFFF;
        }

        .grid-header {
          text-align: center;
          margin-bottom: 60px;
          margin-top: 0;
          padding-top: 0;
        }

        .grid-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 12px 0;
          letter-spacing: -0.02em;
        }

        .grid-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          color: #6B7280;
          margin: 0;
        }

        .solutions-grid {
          display: flex;
          flex-direction: column;
          gap: 80px;
        }

        .solution-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          background: #FFFFFF;
          border-radius: 24px;
          transition: transform 0.3s ease;
        }

        .solution-card:hover {
          transform: translateY(-4px);
        }

        .card-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .solution-card:hover .card-image img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          top: 20px;
          left: 20px;
          background: rgba(0, 0, 0, 0.7);
          border-radius: 12px;
          padding: 8px 12px;
          backdrop-filter: blur(10px);
        }

        .icon-large {
          font-size: 32px;
        }

        .card-content {
          padding: 20px 0;
        }

        .card-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .card-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 0 28px 0;
        }

        .features-section {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-bottom: 0;
        }

        .feature-block {
          border-left: 3px solid #000000;
          padding-left: 16px;
        }

        .feature-point {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }

        .point-icon {
          font-size: 18px;
          color: #000000;
          font-weight: bold;
        }

        .point-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #000000;
        }

        .feature-paragraph {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          line-height: 1.6;
          color: #6B7280;
          margin: 8px 0 0 0;
          padding-left: 28px;
        }

        /* Alternating Layout */
        .image-right .card-image {
          order: 2;
        }

        .image-right .card-content {
          order: 1;
        }

        /* Responsive */
        @media (max-width: 1440px) {
          .solutions-grid-container {
            padding: 100px 70px 80px 70px;
          }
        }

        @media (max-width: 1200px) {
          .solutions-grid-container {
            padding: 100px 50px 80px 50px;
          }
        }

        @media (max-width: 1024px) {
          .solutions-grid-container {
            padding: 100px 40px 80px 40px;
          }
        }

        @media (max-width: 968px) {
          .solution-card {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .image-right .card-image,
          .image-left .card-image {
            order: 1;
          }

          .image-right .card-content,
          .image-left .card-content {
            order: 2;
          }

          .card-image {
            aspect-ratio: 16/9;
          }

          .card-title {
            font-size: 24px;
          }
        }

        @media (max-width: 768px) {
          .solutions-grid-container {
            padding: 80px 30px 60px 30px;
          }

          .grid-title {
            font-size: 28px;
          }

          .grid-subtitle {
            font-size: 16px;
          }

          .solutions-grid {
            gap: 60px;
          }

          .solution-card {
            gap: 24px;
          }

          .card-title {
            font-size: 22px;
          }

          .card-description {
            font-size: 15px;
          }

          .point-title {
            font-size: 15px;
          }

          .feature-paragraph {
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .solutions-grid-container {
            padding: 60px 25px 40px 25px;
          }
        }

        @media (max-width: 480px) {
          .solutions-grid-container {
            padding: 50px 20px 40px 20px;
          }

          .grid-title {
            font-size: 24px;
          }

          .grid-subtitle {
            font-size: 14px;
          }

          .solutions-grid {
            gap: 40px;
          }

          .card-title {
            font-size: 20px;
          }

          .feature-block {
            padding-left: 12px;
          }

          .point-title {
            font-size: 14px;
          }

          .feature-paragraph {
            font-size: 12px;
            padding-left: 22px;
          }
        }
      `}</style>
    </div>
  );
};

export default SolutionsGrid;