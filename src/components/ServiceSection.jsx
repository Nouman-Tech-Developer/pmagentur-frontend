import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "AI Phone Assistant",
      description: "Automates calls, appointment scheduling, and customer inquiries – reliably, professionally, and available 24/7. Customizable for your brand.",
      imageSrc: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=400&h=300&fit=crop",
      buttonText: "Learn More",
      buttonLink: "https://www.tolero.com/ai-phone-assistant"
    },
    {
      id: 2,
      title: "Chatbots & Digital Assistants",
      description: "Intelligent chatbots for websites, social media, or internal processes. Automatically answer inquiries and relieve your team.",
      imageSrc: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w-400&h=300&fit=crop",
      buttonText: "Learn More",
      buttonLink: "https://www.tolero.com/chatbots"
    },
    {
      id: 3,
      title: "Email Automation",
      description: "Automate customer communication, appointment confirmations, and internal processes – fast, error-free, and efficient.",
      imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      buttonText: "Learn More",
      buttonLink: "https://www.tolero.com/email-automation"
    },
    {
      id: 4,
      title: "Workflow Optimization",
      description: "Custom AI solutions for data processing and industry-specific tasks – tailored to your business.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      buttonText: "Learn More",
      buttonLink: "https://www.tolero.com/workflow-optimization"
    }
  ];

  return (
    <>
      <section className="services-grid">
        <div className="services-container">
          <div className="services-header">
            <h2 className="services-title">Our AI Solutions in Detail</h2>
            <p className="services-subtitle">Each solution is individually adapted to your business processes and integrated.</p>
          </div>
          
          <div className="services-grid-cards">
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
                    className="service-btn" 
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
        /* Services Grid Section */
        .services-grid {
          width: 100%;
          padding: 35px 100px; /* Changed: 35px top-bottom, 100px left-right */
          background: #FFFFFF;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .services-grid {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .services-grid {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .services-grid {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .services-container {
          width: 100%;
          max-width: 1600px; /* Increased max-width */
          margin: 0 auto;
        }
        
        /* Header */
        .services-header {
          margin-bottom: 64px;
          text-align: center;
        }
        
        .services-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          letter-spacing: -0.02em;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        .services-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          max-width: 600px;
          margin: 0 auto;
        }
        
        @media only screen and (max-width: 768px) {
          .services-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .services-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Grid - 4 cards in 1 row */
        .services-grid-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          width: 100%;
        }
        
        @media only screen and (max-width: 1400px) {
          .services-grid-cards {
            grid-template-columns: repeat(3, 1fr); /* 3 cards on medium screens */
          }
        }
        
        @media only screen and (max-width: 1100px) {
          .services-grid-cards {
            grid-template-columns: repeat(2, 1fr); /* 2 cards on tablets */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .services-grid-cards {
            grid-template-columns: 1fr; /* 1 card on mobile */
            gap: 24px;
          }
        }
        
        /* Service Card */
        .service-card {
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }
        
        /* Image */
        .service-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 20px 20px 0 0;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.05);
        }
        
        /* Content */
        .service-content {
          padding: 28px 24px 24px 24px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 22px;
          line-height: 30px;
          font-weight: 500;
          color: #0071E3;
          margin: 0 0 16px 0;
        }
        
        .service-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #6B7280;
          flex: 1;
        }
        
        .service-description p {
          margin: 0;
        }
        
        /* Action */
        .service-action {
          padding: 0 24px 28px 24px;
        }
        
        /* Button */
        .service-btn {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          min-width: 140px;
          outline: none;
          box-sizing: border-box;
          width: 100%;
          letter-spacing: 0.01em;
          background-color: transparent;
          color: #0071E3;
          border: 2px solid #E5E5E7;
        }
        
        .service-btn:hover {
          background-color: #0071E3;
          color: #FFFFFF;
          border-color: #0071E3;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(0, 113, 227, 0.3);
        }
        
        /* Responsive */
        @media only screen and (max-width: 1024px) {
          .services-grid-cards {
            gap: 24px;
          }
          
          .service-content {
            padding: 24px 20px 20px 20px;
          }
          
          .service-title {
            font-size: 20px;
            line-height: 28px;
          }
          
          .service-description {
            font-size: 15px;
            line-height: 22px;
          }
          
          .service-action {
            padding: 0 20px 24px 20px;
          }
          
          .service-btn {
            padding: 8px 18px;
            font-size: 15px;
            height: 40px;
            min-width: 130px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .service-image {
            height: 160px;
          }
          
          .service-title {
            font-size: 18px;
            line-height: 26px;
          }
          
          .service-btn {
            padding: 8px 16px;
            font-size: 14px;
            height: 38px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .service-image {
            height: 150px;
          }
        }
      `}</style>
    </>
  );
};

export default ServicesSection;