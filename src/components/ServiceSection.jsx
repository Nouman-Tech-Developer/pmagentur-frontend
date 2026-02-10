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
                    className="service-button" 
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
        /* Services Section - Consistent 35px 100px padding */
        .services-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
        }
        
        .services-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        
        /* Header - Centered */
        .services-header {
          margin-bottom: 60px;
          text-align: center;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* Title - Black */
        .services-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #000000;
          margin: 0 0 20px 0;
        }
        
        /* Subtitle - Anthracite */
        .services-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #374151; /* Anthracite */
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Grid - 4 cards visible */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          width: 100%;
        }
        
        /* Service Card - NO OUTLINE */
        .service-card {
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          /* NO BORDER */
          position: relative;
          height: 100%;
          opacity: 1;
          visibility: visible;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 15px 30px rgba(0, 102, 255, 0.1),
            0 5px 15px rgba(0, 0, 0, 0.08);
        }
        
        /* Image with ALL corners rounded */
        .service-image {
          width: 100%;
          height: 240px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border-radius: 20px; /* ALL CORNERS ROUNDED */
          margin: 0 0 20px 0;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 20px; /* Ensure image also has rounded corners */
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.05);
        }
        
        /* Content */
        .service-content {
          padding: 0 25px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        /* Title - Black */
        .service-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px 0;
        }
        
        /* Description - Anthracite */
        .service-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
          color: #374151; /* Anthracite */
          flex: 1;
        }
        
        .service-description p {
          margin: 0;
        }
        
        /* Action */
        .service-action {
          padding: 25px 25px 30px 25px;
        }
        
        /* Button - Blue outline, blue fill on hover */
        .service-button {
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
          border: 2px solid #0066FF; /* Blue outline */
          background-color: transparent;
          color: #0066FF; /* Blue text */
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
        }
        
        .service-button:hover {
          background-color: #0066FF; /* Blue fill on hover */
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 102, 255, 0.3);
        }
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .services-section {
            padding: 35px 60px;
          }
          
          .services-title {
            font-size: 44px;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .service-image {
            height: 220px;
          }
          
          .services-header {
            margin-bottom: 50px;
          }
        }
        
        /* Tablet: 1024px */
        @media (max-width: 1024px) {
          .services-section {
            padding: 35px 40px;
          }
          
          .services-title {
            font-size: 38px;
          }
          
          .services-subtitle {
            font-size: 17px;
          }
          
          .services-header {
            margin-bottom: 45px;
          }
          
          .service-content {
            padding: 0 20px;
          }
          
          .service-action {
            padding: 20px 20px 25px 20px;
          }
        }
        
        /* Tablet Portrait: 768px */
        @media (max-width: 768px) {
          .services-section {
            padding: 35px 40px;
          }
          
          .services-title {
            font-size: 32px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: 0 auto;
            gap: 30px;
          }
          
          .service-image {
            height: 240px;
          }
          
          .services-header {
            margin-bottom: 40px;
          }
        }
        
        /* Mobile: 576px */
        @media (max-width: 576px) {
          .services-section {
            padding: 35px 25px;
          }
          
          .services-title {
            font-size: 26px;
          }
          
          .services-subtitle {
            font-size: 16px;
            max-width: 480px;
          }
          
          .service-image {
            height: 200px;
            border-radius: 15px; /* Slightly smaller radius on mobile */
            margin-bottom: 15px;
          }
          
          .service-image img {
            border-radius: 15px;
          }
          
          .service-content {
            padding: 0 18px;
          }
          
          .service-title {
            font-size: 20px;
          }
          
          .service-description {
            font-size: 15px;
          }
          
          .service-action {
            padding: 18px 18px 22px 18px;
          }
          
          .service-button {
            width: 140px;
            height: 36px;
            font-size: 0.95rem;
          }
        }
        
        /* Small Phones: 480px */
        @media (max-width: 480px) {
          .services-section {
            padding: 35px 20px;
          }
          
          .services-title {
            font-size: 24px;
          }
          
          .services-subtitle {
            font-size: 15px;
          }
          
          .service-image {
            height: 180px;
            border-radius: 15px;
          }
          
          .service-image img {
            border-radius: 15px;
          }
          
          .service-content {
            padding: 0 16px;
          }
          
          .service-action {
            padding: 16px 16px 20px 16px;
          }
        }
        
        /* Extra Small Phones: 360px */
        @media (max-width: 360px) {
          .services-section {
            padding: 35px 15px;
          }
          
          .services-title {
            font-size: 22px;
          }
          
          .services-subtitle {
            font-size: 14px;
          }
          
          .service-image {
            height: 160px;
            border-radius: 12px;
            margin-bottom: 12px;
          }
          
          .service-image img {
            border-radius: 12px;
          }
          
          .service-content {
            padding: 0 14px;
          }
          
          .service-title {
            font-size: 18px;
          }
          
          .service-description {
            font-size: 14px;
          }
          
          .service-action {
            padding: 14px 14px 18px 14px;
          }
          
          .service-button {
            width: 130px;
            height: 34px;
            font-size: 0.9rem;
          }
        }
        
        /* Wide Screens: 1600px+ */
        @media (min-width: 1600px) {
          .services-section {
            padding: 35px 150px;
          }
          
          .services-title {
            font-size: 56px;
          }
          
          .services-subtitle {
            max-width: 800px;
            font-size: 20px;
          }
          
          .services-grid {
            gap: 40px;
          }
          
          .service-image {
            height: 280px;
          }
          
          .services-header {
            margin-bottom: 70px;
          }
        }
        
        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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