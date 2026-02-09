import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.aiPhone.title'),
      description: t('services.aiPhone.description'),
      imageSrc: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/ai-phone-assistant"
    },
    {
      id: 2,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
      imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=300&fit=crop",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/chatbots"
    },
    {
      id: 3,
      title: t('services.emailAutomation.title'),
      description: t('services.emailAutomation.description'),
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/email-automation"
    },
    {
      id: 4,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/workflow-optimization"
    }
  ];

  return (
    <>
      <section className="services-section">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">{t('services.heading')}</h2>
            <p className="services-subtitle">{t('services.subheading')}</p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-card">
                <div className="service-image">
                  <img 
                    src={service.imageSrc} 
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <div className="service-description">
                    <p>{service.description}</p>
                  </div>
                </div>
                <div className="service-action">
                  <a 
                    className="tolero-button tolero-button--secondary" 
                    href={service.buttonLink}
                    tabIndex="0"
                    aria-disabled="false"
                  >
                    {service.buttonText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Services Section - Consistent with FeatureSection */
        .services-section {
          width: 100%;
          padding: 15px 100px 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        /* Background Pattern - Subtle */
        .services-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(34, 211, 238, 0.02) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.02) 0%, transparent 50%);
          z-index: 1;
        }
        
        .services-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Header - Reduced top margin */
        .services-header {
          margin-bottom: 50px;
          margin-top: 10px;
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .services-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #000000;
          margin: 0 0 24px 0;
        }
        
        .services-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Grid - 4 cards in 1 row */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          width: 100%;
          margin-bottom: 40px;
        }
        
        /* Service Card - Outline Design like FeatureSection */
        .service-card {
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 2px solid rgba(0, 0, 0, 0.08);
          position: relative;
          height: 100%;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.03) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          border-color: #22D3EE;
          box-shadow: 
            0 20px 40px rgba(34, 211, 238, 0.12),
            0 8px 16px rgba(0, 0, 0, 0.05);
        }
        
        .service-card:hover::before {
          opacity: 1;
        }
        
        /* Image */
        .service-image {
          width: 100%;
          height: 220px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.08);
        }
        
        /* Content */
        .service-content {
          padding: 30px 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        
        .service-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px 0;
        }
        
        .service-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
          color: #666666;
          flex: 1;
        }
        
        .service-description p {
          margin: 0;
        }
        
        /* Action */
        .service-action {
          padding: 0 25px 30px 25px;
          position: relative;
          z-index: 2;
        }
        
        /* Consistent Button Styles - Match Navbar and Hero */
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
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Large Tablets */
        @media (max-width: 1200px) {
          .services-section {
            padding: 10px 80px 25px 80px;
          }
          
          .services-title {
            font-size: 44px;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .service-card {
            max-width: 100%;
          }
          
          .services-header {
            margin-bottom: 40px;
          }
        }
        
        /* Tablets */
        @media (max-width: 1024px) {
          .services-section {
            padding: 10px 60px 20px 60px;
          }
          
          .services-title {
            font-size: 38px;
          }
          
          .services-subtitle {
            font-size: 17px;
          }
          
          .services-header {
            margin-bottom: 35px;
          }
        }
        
        /* Medium Tablets and Large Phones */
        @media (max-width: 900px) {
          .services-section {
            padding: 10px 50px 15px 50px;
          }
          
          .services-title {
            font-size: 34px;
          }
          
          .services-subtitle {
            font-size: 16px;
          }
          
          .services-grid {
            gap: 25px;
          }
          
          .service-image {
            height: 200px;
          }
          
          .service-content {
            padding: 25px 20px;
          }
          
          .service-title {
            font-size: 22px;
          }
          
          .service-description {
            font-size: 15px;
          }
          
          .service-action {
            padding: 0 20px 25px 20px;
          }
        }
        
        /* Small Tablets and Large Phones */
        @media (max-width: 768px) {
          .services-section {
            padding: 10px 40px 15px 40px;
          }
          
          .services-title {
            font-size: 32px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            gap: 30px;
          }
          
          .service-image {
            height: 220px;
          }
        }
        
        /* Phones */
        @media (max-width: 650px) {
          .services-section {
            padding: 10px 30px 15px 30px;
          }
          
          .services-title {
            font-size: 28px;
          }
          
          .service-image {
            height: 200px;
          }
          
          .service-content {
            padding: 25px 20px;
          }
          
          .service-action {
            padding: 0 20px 25px 20px;
          }
        }
        
        /* Medium Phones */
        @media (max-width: 550px) {
          .services-section {
            padding: 10px 25px 15px 25px;
          }
          
          .services-title {
            font-size: 26px;
          }
          
          .services-subtitle {
            max-width: 480px;
            font-size: 15px;
          }
          
          .service-image {
            height: 180px;
          }
          
          .service-content {
            padding: 22px 18px;
          }
          
          .service-title {
            font-size: 20px;
          }
          
          .service-description {
            font-size: 14px;
          }
          
          .service-action {
            padding: 0 18px 22px 18px;
          }
        }
        
        /* Small Phones */
        @media (max-width: 480px) {
          .services-section {
            padding: 10px 20px 15px 20px;
          }
          
          .services-title {
            font-size: 24px;
          }
          
          .services-subtitle {
            max-width: 100%;
            font-size: 14px;
          }
          
          .service-image {
            height: 160px;
          }
          
          .service-content {
            padding: 20px 16px;
          }
          
          .service-action {
            padding: 0 16px 20px 16px;
          }
        }
        
        /* Very Small Phones */
        @media (max-width: 400px) {
          .services-section {
            padding: 10px 15px 12px 15px;
          }
          
          .services-title {
            font-size: 22px;
          }
          
          .service-image {
            height: 140px;
          }
          
          .service-content {
            padding: 18px 14px;
          }
          
          .service-title {
            font-size: 18px;
          }
          
          .service-action {
            padding: 0 14px 18px 14px;
          }
        }
        
        /* Extra Small Phones */
        @media (max-width: 350px) {
          .services-section {
            padding: 10px 12px 12px 12px;
          }
          
          .services-title {
            font-size: 20px;
          }
          
          .services-subtitle {
            font-size: 13px;
          }
          
          .service-content {
            padding: 16px 12px;
          }
          
          .service-action {
            padding: 0 12px 16px 12px;
          }
        }
        
        /* For very wide screens */
        @media (min-width: 1600px) {
          .services-section {
            padding: 20px 150px 40px 150px;
          }
          
          .services-title {
            font-size: 56px;
          }
          
          .services-subtitle {
            max-width: 800px;
            font-size: 20px;
          }
          
          .services-grid {
            max-width: 1600px;
            gap: 40px;
          }
          
          .service-image {
            height: 250px;
          }
          
          .services-header {
            margin-bottom: 60px;
            margin-top: 20px;
          }
        }
        
        /* Extra wide screens */
        @media (min-width: 2000px) {
          .services-section {
            padding: 30px 200px 50px 200px;
          }
          
          .services-title {
            font-size: 60px;
          }
        }
        
        /* Animations */
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
        
        .service-card {
          animation: fadeInUp 0.6s ease forwards;
          opacity: 0;
        }
        
        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.2s; }
        .service-card:nth-child(3) { animation-delay: 0.3s; }
        .service-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
    </>
  );
};

export default ServicesSection;