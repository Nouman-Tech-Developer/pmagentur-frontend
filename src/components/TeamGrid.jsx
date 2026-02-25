import React, { useState } from 'react';

const TeamGrid = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Smith',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      alt: 'John Smith - CEO & Founder',
      department: 'Leadership',
      experience: '15 years'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      alt: 'Sarah Johnson - CTO',
      department: 'Engineering',
      experience: '12 years'
    },
    {
      id: 3,
      name: 'Michael Chen',
      position: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      alt: 'Michael Chen - Lead Developer',
      department: 'Engineering',
      experience: '8 years'
    },
    {
      id: 4,
      name: 'Emma Wilson',
      position: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
      alt: 'Emma Wilson - Product Manager',
      department: 'Product',
      experience: '6 years'
    },
    {
      id: 5,
      name: 'David Rodriguez',
      position: 'Senior Designer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      alt: 'David Rodriguez - Senior Designer',
      department: 'Design',
      experience: '7 years'
    },
    {
      id: 6,
      name: 'Lisa Park',
      position: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      alt: 'Lisa Park - Marketing Director',
      department: 'Marketing',
      experience: '9 years'
    },
    {
      id: 7,
      name: 'Alex Thompson',
      position: 'DevOps Engineer',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop&crop=face',
      alt: 'Alex Thompson - DevOps Engineer',
      department: 'Engineering',
      experience: '5 years'
    },
    {
      id: 8,
      name: 'Maria Garcia',
      position: 'UX Researcher',
      image: 'https://images.unsplash.com/photo-1551836026-d5c2c5af78e4?w=400&h=400&fit=crop&crop=face',
      alt: 'Maria Garcia - UX Researcher',
      department: 'Design',
      experience: '4 years'
    },
    {
      id: 9,
      name: 'Robert Kim',
      position: 'Data Scientist',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face',
      alt: 'Robert Kim - Data Scientist',
      department: 'Data',
      experience: '6 years'
    },
    {
      id: 10,
      name: 'Sophie Williams',
      position: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
      alt: 'Sophie Williams - Frontend Developer',
      department: 'Engineering',
      experience: '3 years'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="team-grid-container">
      {/* Header */}
      <header className="team-header">
        <div className="team-tagline">OUR TEAM</div>
        <h1 className="team-title">Meet Our Experts</h1>
        <p className="team-subtitle">
          A diverse team of passionate professionals dedicated to delivering exceptional results.
        </p>
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
              />
              
              {/* Overlay on Hover */}
              <div className={`team-overlay ${hoveredCard === member.id ? 'team-overlay-visible' : ''}`}>
                <div className="team-overlay-content">
                  <h3 className="team-overlay-name">{member.name}</h3>
                  <p className="team-overlay-position">{member.position}</p>
                  <div className="team-overlay-info">
                    <span className="team-overlay-label">Department:</span>
                    <span>{member.department}</span>
                  </div>
                  <div className="team-overlay-info">
                    <span className="team-overlay-label">Experience:</span>
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Caption */}
            <div className="team-caption">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-position">{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="team-footer">
        <p>Our team is constantly growing. Interested in joining us?</p>
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