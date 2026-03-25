import React from 'react';

const StatsCard = ({ title, value, icon, change, subtext }) => {
  const getIcon = () => {
    switch(icon) {
      case 'messages':
        return (
          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'calendar':
        return (
          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case 'pending':
        return (
          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'confirmed':
        return (
          <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Format the change value - handle both string and number
  const formatChange = () => {
    if (!change) return null;
    
    // Convert to string if it's a number
    const changeStr = String(change);
    
    // Check if it starts with + or - to determine trend
    const isPositive = changeStr.startsWith('+');
    const isNegative = changeStr.startsWith('-');
    
    // Remove the + or - sign for display
    const cleanValue = changeStr.replace(/^[+-]/, '');
    
    return (
      <span className={`change-value ${isPositive ? 'positive' : isNegative ? 'negative' : 'neutral'}`}>
        {isPositive && '+'}
        {isNegative && '-'}
        {cleanValue}
      </span>
    );
  };

  return (
    <div className="stats-card">
      <div className="stat-header">
        <div className="stat-icon-wrapper">
          {getIcon()}
        </div>
        {change && (
          <div className="stat-change">
            {formatChange()}
          </div>
        )}
      </div>
      <div className="stat-info">
        <h3 className="stat-title">{title}</h3>
        <div className="stat-value-wrapper">
          <span className="stat-value">{value}</span>
          {subtext && <span className="stat-subtext">{subtext}</span>}
        </div>
      </div>

      <style jsx="true">{`
        .stats-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E5E5E7;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .stats-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          background: #F3F4F6;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-icon {
          width: 28px;
          height: 28px;
          color: #000000;
        }

        .stat-change {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 13px;
          font-weight: 500;
        }

        .change-value.positive {
          color: #10B981;
        }

        .change-value.negative {
          color: #EF4444;
        }

        .change-value.neutral {
          color: #6B7280;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .stat-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #6B7280;
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .stat-value-wrapper {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
        }

        .stat-value {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 32px;
          font-weight: 700;
          color: #111827;
          line-height: 1;
        }

        .stat-subtext {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 12px;
          color: #6B7280;
          background: #F3F4F6;
          padding: 4px 8px;
          border-radius: 20px;
        }

        @media (max-width: 768px) {
          .stats-card {
            padding: 20px;
          }
          
          .stat-value {
            font-size: 28px;
          }
          
          .stat-icon-wrapper {
            width: 40px;
            height: 40px;
          }
          
          .stat-icon {
            width: 22px;
            height: 22px;
          }
        }

        @media (max-width: 480px) {
          .stats-card {
            padding: 16px;
          }
          
          .stat-value {
            font-size: 24px;
          }
          
          .stat-title {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default StatsCard;