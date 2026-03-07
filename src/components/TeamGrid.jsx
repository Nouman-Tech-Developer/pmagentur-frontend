import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TeamGrid = () => {
  const { t } = useTranslation();
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hoveredCard, setHoveredCard] = useState(null);

  // Fetch team members from API/Admin
  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const fetchTeamMembers = async () => {
    try {
      // API call to get team members from admin panel
      // const response = await fetch('/api/team');
      // const data = await response.json();
      
      // Mock data for demonstration
      const mockData = [
        {
          id: 1,
          name: 'John Smith',
          position: 'CEO & Founder',
          positionKey: 'team.positions.ceo', // Translation key
          image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
          department: 'Leadership',
          departmentKey: 'team.departments.leadership',
          experience: '15 years',
          experienceKey: 'team.experience.15years',
          alt: 'John Smith - CEO & Founder'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          position: 'CTO',
          positionKey: 'team.positions.cto',
          image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
          department: 'Engineering',
          departmentKey: 'team.departments.engineering',
          experience: '12 years',
          experienceKey: 'team.experience.12years',
          alt: 'Sarah Johnson - CTO'
        },
        // ... more members
      ];
      
      setTeamMembers(mockData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching team members:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="team-grid-container">
        <div className="team-loading">Loading team members...</div>
      </div>
    );
  }

  return (
    <div className="team-grid-container">
      {/* Header with Translation */}
      <header className="team-header">
        <div className="team-tagline">{t('team.tagline')}</div>
        <h1 className="team-title">{t('team.title')}</h1>
        <p className="team-subtitle">{t('team.subtitle')}</p>
      </header>

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.map(member => (
          <div
            key={member.id}
            className={`team-card ${hoveredCard === member.id ? 'team-card-hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div className="team-image-container">
              <img
                src={member.image}
                alt={member.alt}
                className={`team-image ${hoveredCard === member.id ? 'team-image-hovered' : ''}`}
                loading="lazy"
              />
              
              {/* Overlay on Hover - with Translations */}
              <div className={`team-overlay ${hoveredCard === member.id ? 'team-overlay-visible' : ''}`}>
                <div className="team-overlay-content">
                  <h3 className="team-overlay-name">{member.name}</h3>
                  <p className="team-overlay-position">
                    {member.positionKey ? t(member.positionKey) : member.position}
                  </p>
                  <div className="team-overlay-info">
                    <span className="team-overlay-label">{t('team.labels.department')}:</span>
                    <span>{member.departmentKey ? t(member.departmentKey) : member.department}</span>
                  </div>
                  <div className="team-overlay-info">
                    <span className="team-overlay-label">{t('team.labels.experience')}:</span>
                    <span>{member.experienceKey ? t(member.experienceKey) : member.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Caption */}
            <div className="team-caption">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">
                {member.positionKey ? t(member.positionKey) : member.position}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note with Translation */}
      <div className="team-footer">
        <p>{t('team.footer')}</p>
      </div>

      <style jsx="true">{`
        .team-grid-container {
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
          padding: 80px 100px;
          max-width: 1700px;
          margin: 0 auto;
          background-color: #FFFFFF;
          position: relative;
          z-index: 2;
        }
        
        .team-header {
          text-align: center;
          margin-bottom: 40px;
        }
        
        .team-tagline {
          color: #000000;
          opacity: 0.7;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        
        .team-title {
          font-size: 42px;
          font-weight: 700;
          color: #000000;
          margin-bottom: 16px;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        
        .team-subtitle {
          font-size: 18px;
          color: #4B5563;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
          font-weight: 400;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 20px 0;
        }
        
        .team-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }
        
        .team-card-hovered {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #000000;
        }
        
        .team-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
          background-color: #F8FAFC;
        }
        
        .team-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .team-image-hovered {
          transform: scale(1.05);
        }
        
        .team-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5));
          display: flex;
          align-items: flex-end;
          padding: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .team-overlay-visible {
          opacity: 1;
        }
        
        .team-overlay-content {
          color: white;
          width: 100%;
        }
        
        .team-overlay-name {
          font-size: 18px;
          font-weight: 600;
          margin: 0 0 6px 0;
        }
        
        .team-overlay-position {
          font-size: 14px;
          opacity: 0.9;
          margin: 0 0 16px 0;
          font-weight: 400;
        }
        
        .team-overlay-info {
          font-size: 13px;
          display: flex;
          justify-content: space-between;
          margin-bottom: 6px;
        }
        
        .team-overlay-label {
          opacity: 0.7;
        }
        
        .team-caption {
          padding: 24px 20px;
          text-align: center;
        }
        
        .team-name {
          font-size: 17px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 6px 0;
        }
        
        .team-position {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
          font-weight: 400;
        }
        
        .team-footer {
          text-align: center;
          margin-top: 50px;
          color: #6B7280;
          font-size: 14px;
        }
        
        .team-loading {
          text-align: center;
          padding: 100px;
          font-size: 18px;
          color: #6B7280;
        }
        
        @media (max-width: 1440px) {
          .team-grid-container {
            padding: 60px 70px;
          }
          .team-title {
            font-size: 38px;
          }
          .team-subtitle {
            font-size: 17px;
          }
        }
        
        @media (max-width: 1200px) {
          .team-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
          }
          .team-grid-container {
            padding: 50px 60px;
          }
        }
        
        @media (max-width: 992px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          .team-grid-container {
            padding: 40px 50px;
          }
          .team-title {
            font-size: 36px;
          }
          .team-subtitle {
            font-size: 16px;
          }
        }
        
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
          }
          .team-grid-container {
            padding: 40px 30px;
          }
          .team-title {
            font-size: 32px;
          }
          .team-subtitle {
            font-size: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .team-grid-container {
            padding: 30px 20px;
          }
          .team-title {
            font-size: 28px;
          }
          .team-tagline {
            font-size: 12px;
          }
          .team-name {
            font-size: 16px;
          }
          .team-position {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamGrid;