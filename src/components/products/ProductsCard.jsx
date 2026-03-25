import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleDemoClick = () => {
    navigate('/appointment');
  };

  return (
    <div className="product-card">
      <div className="card-image">
        <img src={`/images/${product.image}`} alt={product.title} />
        {product.badge && <span className="product-badge">{product.badge}</span>}
      </div>
      <div className="card-content">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-description">{product.description}</p>
        
        <div className="features-section">
          {product.features.map((feature, idx) => (
            <div key={idx} className="feature-block">
              <div className="feature-point">
                <span className="point-icon">▸</span>
                <span className="point-title">{feature.point}</span>
              </div>
              {feature.paragraph && (
                <p className="feature-paragraph">{feature.paragraph}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="card-buttons">
          <button onClick={handleDemoClick} className="demo-button">
            {t('products.grid.demo', 'Demo anfragen')}
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .product-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.1);
          border-color: #000000;
        }

        .card-image {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: linear-gradient(135deg, #f5f5f5 0%, #e5e5e5 100%);
        }

        .card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .card-image img {
          transform: scale(1.05);
        }

        .product-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: #000000;
          color: #FFFFFF;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 20px;
          z-index: 2;
        }

        .card-content {
          padding: 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 12px 0;
          line-height: 1.3;
        }

        .card-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0 0 20px 0;
        }

        .features-section {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 24px;
          flex: 1;
        }

        .feature-block {
          border-left: 2px solid #000000;
          padding-left: 14px;
        }

        .feature-point {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .point-icon {
          font-size: 16px;
          color: #000000;
          font-weight: bold;
        }

        .point-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #000000;
        }

        .feature-paragraph {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
          padding-left: 26px;
        }

        .card-buttons {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .demo-button {
          width: 100%;
          background: #000000;
          color: #FFFFFF;
          border: none;
          padding: 12px 20px;
          border-radius: 40px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .demo-button:hover {
          background: #1F2937;
          transform: translateX(2px);
        }

        @media (max-width: 768px) {
          .card-image {
            height: 200px;
          }
          .card-title {
            font-size: 20px;
          }
          .card-description {
            font-size: 14px;
          }
          .point-title {
            font-size: 14px;
          }
          .feature-paragraph {
            font-size: 12px;
          }
          .demo-button {
            padding: 10px 16px;
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .card-content {
            padding: 20px;
          }
          .card-title {
            font-size: 18px;
          }
          .demo-button {
            padding: 10px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;