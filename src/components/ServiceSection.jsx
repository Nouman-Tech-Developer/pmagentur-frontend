import React from 'react';
import { useTranslation } from 'react-i18next';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      title: t('services.aiPhone.title'),
      description: t('services.aiPhone.description'),
      imageSrc: "/images/telephone.jpeg",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/ai-phone-assistant"
    },
    {
      id: 2,
      title: t('services.chatbots.title'),
      description: t('services.chatbots.description'),
      imageSrc: "/images/chatbot.jpeg",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/chatbots"
    },
    {
      id: 3,
      title: t('services.emailAutomation.title'),
      description: t('services.emailAutomation.description'),
      imageSrc: "/images/mailbot.jpeg",
      buttonText: t('services.learnMore'),
      buttonLink: "https://www.tolero.com/email-automation"
    },
    {
      id: 4,
      title: t('services.workflow.title'),
      description: t('services.workflow.description'),
      imageSrc: "/images/workflow.jpeg",
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
                <div className="service-image-wrapper">
                  <div className="service-image">
                    <img 
                      src={service.imageSrc} 
                      alt={service.title}
                      loading="lazy"
                    />
                  </div>
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
        /* Services Section - Consistent padding */
        .services-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
        }
        
        .services-container {
          width: 100%;
          max-width: 1600px;
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
          color: #374151;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Grid - 4 cards in 1 row */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          width: 100%;
        }
        
        /* Service Card */
        .service-card {
          background: #FFFFFF;
          border-radius: 24px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          position: relative;
          height: 100%;
          opacity: 1;
          visibility: visible;
          border: 1px solid #F0F0F0;
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.08),
            0 8px 20px rgba(0, 0, 0, 0.06);
          border-color: transparent;
        }
        
        /* Image Wrapper - Full width, no padding */
        .service-image-wrapper {
          width: 100%;
          padding: 0;
          margin: 0;
          line-height: 0;
        }
        
        /* Image - Full width, full height, no cropping */
        .service-image {
          width: 100%;
          height: auto;
          min-height: 200px;
          max-height: 240px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
          border-radius: 24px 24px 0 0;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          display: block;
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.08);
        }
        
        /* Content */
        .service-content {
          padding: 24px 24px 0 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        /* Title - Black */
        .service-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 22px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000;
          margin: 0 0 12px 0;
        }
        
        /* Description - Anthracite */
        .service-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.6;
          font-weight: 400;
          color: #374151;
          flex: 1;
        }
        
        .service-description p {
          margin: 0;
        }
        
        /* Action */
        .service-action {
          padding: 20px 24px 28px 24px;
        }
        
        /* Button - Black outline, black fill on hover */
        .service-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 0.95rem;
          padding: 10px 24px;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          width: 150px;
          border: 2px solid #000000;
          background-color: transparent;
          color: #000000;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
        }
        
        .service-button:hover {
          background-color: #000000;
          color: #FFFFFF;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Large Desktop: 1600px+ */
        @media (min-width: 1600px) {
          .services-section {
            padding: 35px 150px;
          }
          
          .services-container {
            max-width: 1800px;
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
            max-height: 260px;
            min-height: 220px;
          }
          
          .services-header {
            margin-bottom: 70px;
          }
          
          .service-title {
            font-size: 24px;
          }
          
          .service-description {
            font-size: 16px;
          }
          
          .service-button {
            width: 160px;
            height: 44px;
            font-size: 1rem;
          }
        }
        
        /* Desktop: 1400px */
        @media (max-width: 1400px) {
          .services-section {
            padding: 35px 80px;
          }
          
          .services-grid {
            gap: 25px;
          }
          
          .service-image {
            max-height: 220px;
            min-height: 180px;
          }
          
          .service-title {
            font-size: 21px;
          }
          
          .service-description {
            font-size: 14px;
          }
        }
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .services-section {
            padding: 35px 60px;
          }
          
          .services-title {
            font-size: 44px;
          }
          
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }
          
          .service-image {
            max-height: 200px;
            min-height: 160px;
          }
          
          .services-header {
            margin-bottom: 50px;
          }
          
          .service-title {
            font-size: 20px;
            margin-bottom: 10px;
          }
          
          .service-content {
            padding: 20px 20px 0 20px;
          }
          
          .service-action {
            padding: 16px 20px 24px 20px;
          }
          
          .service-button {
            width: 140px;
            height: 40px;
            font-size: 0.9rem;
            padding: 8px 20px;
          }
        }
        
        /* Tablet: 1024px - Switch to 2x2 grid */
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
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .service-image {
            max-height: 240px;
            min-height: 200px;
          }
          
          .services-header {
            margin-bottom: 45px;
          }
          
          .service-title {
            font-size: 22px;
          }
          
          .service-content {
            padding: 24px 24px 0 24px;
          }
          
          .service-action {
            padding: 20px 24px 28px 24px;
          }
          
          .service-button {
            width: 150px;
            height: 42px;
            font-size: 0.95rem;
          }
        }
        
        /* Tablet Portrait: 768px - 2x2 grid */
        @media (max-width: 768px) {
          .services-section {
            padding: 35px 40px;
          }
          
          .services-title {
            font-size: 32px;
          }
          
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          
          .service-image {
            max-height: 200px;
            min-height: 160px;
          }
          
          .services-header {
            margin-bottom: 40px;
          }
          
          .service-title {
            font-size: 20px;
          }
          
          .service-content {
            padding: 20px 20px 0 20px;
          }
          
          .service-action {
            padding: 16px 20px 24px 20px;
          }
          
          .service-button {
            width: 140px;
            height: 40px;
            font-size: 0.9rem;
          }
        }
        
        /* Mobile: 576px - Switch to 1 column */
        @media (max-width: 576px) {
          .services-section {
            padding: 35px 25px;
          }
          
          .services-title {
            font-size: 28px;
          }
          
          .services-subtitle {
            font-size: 16px;
            max-width: 480px;
          }
          
          .services-grid {
            grid-template-columns: 1fr;
            max-width: 450px;
            margin: 0 auto;
            gap: 30px;
          }
          
          .service-image {
            max-height: 240px;
            min-height: 200px;
          }
          
          .service-image {
            border-radius: 20px 20px 0 0;
          }
          
          .service-content {
            padding: 24px 24px 0 24px;
          }
          
          .service-title {
            font-size: 22px;
            margin-bottom: 12px;
          }
          
          .service-description {
            font-size: 15px;
          }
          
          .service-action {
            padding: 20px 24px 28px 24px;
          }
          
          .service-button {
            width: 150px;
            height: 42px;
            font-size: 0.95rem;
          }
        }
        
        /* Small Phones: 480px */
        @media (max-width: 480px) {
          .services-section {
            padding: 35px 20px;
          }
          
          .services-title {
            font-size: 26px;
          }
          
          .services-subtitle {
            font-size: 15px;
          }
          
          .service-image {
            max-height: 220px;
            min-height: 180px;
            border-radius: 18px 18px 0 0;
          }
          
          .service-content {
            padding: 20px 20px 0 20px;
          }
          
          .service-title {
            font-size: 20px;
          }
          
          .service-action {
            padding: 18px 20px 24px 20px;
          }
          
          .service-button {
            width: 140px;
            height: 40px;
            font-size: 0.9rem;
          }
        }
        
        /* Extra Small Phones: 360px */
        @media (max-width: 360px) {
          .services-section {
            padding: 35px 15px;
          }
          
          .services-title {
            font-size: 24px;
          }
          
          .services-subtitle {
            font-size: 14px;
          }
          
          .service-image {
            max-height: 200px;
            min-height: 160px;
            border-radius: 16px 16px 0 0;
          }
          
          .service-content {
            padding: 18px 18px 0 18px;
          }
          
          .service-title {
            font-size: 19px;
            margin-bottom: 10px;
          }
          
          .service-description {
            font-size: 14px;
          }
          
          .service-action {
            padding: 16px 18px 20px 18px;
          }
          
          .service-button {
            width: 130px;
            height: 38px;
            font-size: 0.85rem;
            padding: 8px 18px;
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