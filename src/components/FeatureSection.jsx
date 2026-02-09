import React from 'react';
import { Clock, TrendingUp, Link } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "24/7 Availability",
      description: "Your AI assistant works around the clock – even outside business hours and on holidays.",
      icon: <Clock className="feature-icon" size={40} />
    },
    {
      id: 2,
      title: "Scalable Performance",
      description: "Handles thousands of calls simultaneously – whether startup or enterprise.",
      icon: <TrendingUp className="feature-icon" size={40} />
    },
    {
      id: 3,
      title: "Seamless Integration",
      description: "Easy connection to existing CRM, ERP and communication systems.",
      icon: <Link className="feature-icon" size={40} />
    }
  ];

  return (
    <>
      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Tolero AI Automation?</h2>
            <p className="features-subtitle">Our AI solutions offer more than just automation – they create sustainable competitive advantages.</p>
          </div>
          
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-icon-wrapper">{feature.icon}</div>
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Features Section - Same padding as Services */
        .features-section {
          width: 100%;
          padding: 80px 60px;
          background: #FFFFFF;
        }
        
        @media only screen and (max-width: 768px) {
          .features-section {
            padding: 60px 24px;
          }
        }
        
        .features-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        /* Header */
        .features-header {
          text-align: center;
          margin-bottom: 64px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Title - RED (headline) */
        .features-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        /* Subtitle - BLUE (subheadline) */
        .features-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          margin: 0;
        }
        
        /* Grid - 3 items */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }
        
        @media only screen and (max-width: 900px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media only screen and (max-width: 600px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
        
        /* Feature Card */
        .feature-card {
          text-align: center;
          padding: 40px 20px;
          transition: transform 0.3s ease;
        }
        
        .feature-card:hover {
          transform: translateY(-8px);
        }
        
        /* Icon Wrapper */
        .feature-icon-wrapper {
          margin-bottom: 24px;
          height: 64px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Icon Styling */
        .feature-icon {
          color: #0071E3; /* Blue color for icons */
        }
        
        /* Feature Title - RED (headline) */
        .feature-card-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 22px;
          line-height: 30px;
          font-weight: 500;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        /* Feature Description */
        .feature-card-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #6B7280;
          margin: 0;
        }
        
        /* Responsive */
        @media only screen and (max-width: 768px) {
          .features-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .features-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
          
          .feature-card {
            padding: 32px 16px;
          }
          
          .feature-icon {
            size: 32px;
          }
          
          .feature-card-title {
            font-size: 20px;
            line-height: 28px;
          }
        }
      `}</style>
    </>
  );
};

export default FeatureSection;