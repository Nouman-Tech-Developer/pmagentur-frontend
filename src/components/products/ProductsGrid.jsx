import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductsCard';

const ProductsGrid = ({ products }) => {
  const { t } = useTranslation();

  return (
    <div className="products-grid-container">
      <div className="grid-header">
        <h2 className="grid-title">{t('products.grid.title', 'Unsere Produkte im Detail')}</h2>
        <p className="grid-subtitle">{t('products.grid.subtitle', 'Wählen Sie die perfekte KI-Lösung für Ihre Praxis')}</p>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <style jsx="true">{`
        .products-grid-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 24px 80px 24px;
          background: #FFFFFF;
        }

        .grid-header {
          text-align: center;
          margin-bottom: 60px;
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

        .products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 32px;
        }

        @media (max-width: 768px) {
          .products-grid-container {
            padding: 40px 20px 60px 20px;
          }
          .grid-title {
            font-size: 28px;
          }
          .grid-subtitle {
            font-size: 16px;
          }
          .products-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .products-grid-container {
            padding: 30px 16px 40px 16px;
          }
          .grid-title {
            font-size: 24px;
          }
          .grid-subtitle {
            font-size: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductsGrid;