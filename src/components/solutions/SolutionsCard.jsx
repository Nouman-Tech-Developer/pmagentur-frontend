import React from 'react';
import { Link } from 'react-router-dom';

const SolutionCard = ({ solution }) => {
  const imagePath = `/images/solutions/${solution.image}`;
  
  return (
    <Link to={solution.link} className="solution-card">
      <div className="solution-image">
        <img src={imagePath} alt={solution.title} />
      </div>
      <div className="solution-content">
        <div className="solution-icon">{solution.icon}</div>
        <h3 className="solution-title">{solution.title}</h3>
        <p className="solution-description">{solution.description}</p>
        <div className="solution-features">
          {solution.features?.slice(0, 3).map((feature, i) => (
            <span key={i} className="feature-tag">{feature}</span>
          ))}
        </div>
        <span className="solution-link">
          Mehr erfahren 
          <svg className="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
      
      <style jsx="true">{`
        .solution-card {
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 24px;
          overflow: hidden;
          text-decoration: none;
          transition: all 0.3s ease;
          display: block;
          height: 100%;
        }
        
        .solution-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 25px 35px -12px rgba(0, 0, 0, 0.15);
          border-color: #000000;
        }
        
        .solution-image {
          height: 220px;
          overflow: hidden;
          background: #F3F4F6;
        }
        
        .solution-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .solution-card:hover .solution-image img {
          transform: scale(1.05);
        }
        
        .solution-content {
          padding: 24px;
        }
        
        .solution-icon {
          font-size: 40px;
          margin-bottom: 16px;
        }
        
        .solution-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 12px 0;
        }
        
        .solution-description {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          color: #6B7280;
          line-height: 1.5;
          margin: 0 0 16px 0;
        }
        
        .solution-features {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        
        .feature-tag {
          background: #F3F4F6;
          color: #374151;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 12px;
          border-radius: 20px;
        }
        
        .solution-link {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #000000;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-bottom: 2px solid #000000;
          padding-bottom: 4px;
        }
        
        .arrow-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s ease;
        }
        
        .solution-card:hover .arrow-icon {
          transform: translateX(4px);
        }
        
        @media (max-width: 768px) {
          .solution-image {
            height: 180px;
          }
          .solution-content {
            padding: 20px;
          }
          .solution-title {
            font-size: 20px;
          }
        }
      `}</style>
    </Link>
  );
};

export default SolutionCard;