import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      id: 1,
      value: "24/7",
      label: "Availability",
      description: "Your AI assistants work around the clock"
    },
    {
      id: 2,
      value: "80%",
      label: "Cost Savings",
      description: "Through automation of manual processes"
    },
    {
      id: 3,
      value: "99%",
      label: "Satisfaction",
      description: "Of our customers with AI integration"
    },
    {
      id: 4,
      value: "60h",
      label: "Time Savings",
      description: "Per week for your team"
    }
  ];

  return (
    <>
      <section className="stats-section">
        <div className="stats-container">
          <div className="stats-header">
            <h2 className="stats-title">Measurable Results</h2>
            <p className="stats-subtitle">Tolero AI automation brings concrete improvements for your company</p>
          </div>
          
          <div className="stats-grid">
            {stats.map((stat) => (
              <div key={stat.id} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <h3 className="stat-label">{stat.label}</h3>
                <p className="stat-description">{stat.description}</p>
              </div>
            ))}
          </div>
          
          <div className="stats-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{marginRight: '8px'}}>
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="#0071E3"/>
            </svg>
            <span>Based on average values from our customers</span>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Stats Section */
        .stats-section {
          width: 100%;
          padding: 35px 100px; /* 35px top-bottom, 100px left-right */
          background: #F5F5F7;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .stats-section {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .stats-section {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .stats-section {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .stats-container {
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }
        
        /* Header */
        .stats-header {
          margin-bottom: 64px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Title - RED */
        .stats-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        /* Subtitle - BLUE */
        .stats-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          margin: 0;
          opacity: 0.9;
        }
        
        @media only screen and (max-width: 768px) {
          .stats-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .stats-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Grid - 4 columns on desktop */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr); /* 4 cards in one row */
          gap: 30px;
          margin-bottom: 48px;
        }
        
        @media only screen and (max-width: 1200px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr); /* 2 cards on tablets */
            gap: 32px;
          }
        }
        
        @media only screen and (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr; /* 1 card on mobile */
            gap: 24px;
            max-width: 300px;
            margin: 0 auto 48px;
          }
        }
        
        /* Stat Card */
        .stat-card {
          padding: 32px 24px;
          background: #FFFFFF;
          border-radius: 20px; /* Rounded corners */
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); /* Soft shadow */
          border: none; /* Removed border */
        }
        
        .stat-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
          border-color: #0071E3;
        }
        
        /* Stat Value */
        .stat-value {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 48px;
          line-height: 56px;
          font-weight: 600;
          color: #0071E3;
          margin-bottom: 8px;
        }
        
        /* Stat Label */
        .stat-label {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 20px;
          line-height: 28px;
          font-weight: 500;
          color: #E10600;
          margin: 0 0 12px 0;
        }
        
        /* Stat Description */
        .stat-description {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: #6B7280;
          margin: 0;
        }
        
        /* Note */
        .stats-note {
          display: inline-flex;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: #6B7280;
          padding: 12px 20px;
          background: #FFFFFF;
          border: 1px solid #E5E5E7;
          border-radius: 25px;
        }
        
        /* Responsive */
        @media only screen and (max-width: 1024px) {
          .stat-card {
            padding: 28px 20px;
          }
          
          .stat-value {
            font-size: 40px;
            line-height: 48px;
          }
          
          .stat-label {
            font-size: 18px;
            line-height: 26px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .stat-card {
            padding: 24px 20px;
          }
          
          .stat-value {
            font-size: 36px;
            line-height: 44px;
          }
          
          .stat-label {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Animation */
        .stat-card {
          opacity: 0;
          transform: translateY(20px);
          animation: statsFadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        
        .stat-card:nth-child(1) { animation-delay: 0.1s; }
        .stat-card:nth-child(2) { animation-delay: 0.2s; }
        .stat-card:nth-child(3) { animation-delay: 0.3s; }
        .stat-card:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes statsFadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default StatsSection;