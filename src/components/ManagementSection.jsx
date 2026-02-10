import React from 'react';

const ManagementSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Maximilian Weber',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 2,
      name: 'Sophia Müller',
      position: 'CTO & Co-Founder',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 3,
      name: 'Alexander Schmidt',
      position: 'Head of AI',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    },
    {
      id: 4,
      name: 'Emma Wagner',
      position: 'Head of Product',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
    },
  ];

  return (
    <>
      <section className="management-section">
        {/* White Background */}
        <div className="management-background"></div>
        
        <div className="management-container">
          {/* Content Section - SAME AS BEFORE */}
          <div className="content-section">
            <div className="text-content">
              <div className="text-left">
                <h2 className="title">Das Management</h2>
              </div>
              <div className="text-right">
                <div className="description">
                  <div className="text-content-wrapper">
                    <p>
                      Hinter Tolero stehen engagierte KI-Experten und Software-Spezialisten, 
                      die das Unternehmen mit Vertrauen, technischem Know-how und einem gemeinsamen 
                      Verständnis für Verantwortung und Fortschritt führen.
                    </p>
                    <p>
                      Unser Gründungsteam startete 2020 mit einer klaren Vision: 
                      Technologie sinnvoll einzusetzen, um Unternehmen zu transformieren. 
                      Seitdem haben wir kontinuierlich unsere Expertise erweitert und ein 
                      talentiertes Team in Hamburg aufgebaut.
                    </p>
                    <p>
                      <span>
                        Heute führen wir ein wachsendes Team von KI-Spezialisten, 
                        Software Engineers und Strategen – vereint durch eine klare Vision:
                      </span>
                      <br />
                      <span>
                        Tolero als führenden Partner für KI-gestützte Automatisierungslösungen zu etablieren.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NEW: 4 Person Cards Grid */}
          <div className="team-cards-section">
            <div className="team-cards-grid">
              {teamMembers.map(member => (
                <div key={member.id} className="team-card">
                  <div className="team-card-image">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-member-img"
                    />
                    <div className="team-card-overlay"></div>
                  </div>
                  <div className="team-card-content">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-position">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base Management Section */
        .management-section {
          width: 100%;
          padding: 80px 0;
          position: relative;
          background: #FFFFFF;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        /* White Background */
        .management-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #FFFFFF;
          z-index: 1;
        }

        .management-container {
          position: relative;
          z-index: 2;
          max-width: 1700px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
          padding: 0 100px;
          box-sizing: border-box;
        }

        /* Content Section - SAME AS BEFORE */
        .content-section {
          width: 100%;
        }

        .text-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .text-left {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Title - APPLE SYSTEM FONT */
        .title {
          font-size: 46px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .text-right {
          max-width: 100%;
        }

        .description {
          margin: 0;
        }

        .text-content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        /* Paragraph Text - APPLE SYSTEM FONT */
        .text-content-wrapper p {
          font-size: 18px;
          line-height: 1.6;
          color: #374151;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        .text-content-wrapper span {
          color: #111827;
          font-weight: 500;
        }

        /* NEW: Team Cards Section */
        .team-cards-section {
          width: 100%;
        }

        .team-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .team-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 102, 255, 0.15);
          border-color: #0066FF;
        }

        .team-card-image {
          position: relative;
          width: 100%;
          padding-top: 100%;
          overflow: hidden;
        }

        .team-member-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-member-img {
          transform: scale(1.05);
        }

        .team-card-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3));
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .team-card:hover .team-card-overlay {
          opacity: 0.8;
        }

        .team-card-content {
          padding: 24px 20px;
          text-align: center;
        }

        .team-member-name {
          font-size: 18px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 8px 0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif;
        }

        .team-member-position {
          font-size: 15px;
          color: #6B7280;
          margin: 0;
          font-weight: 400;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif;
        }

        /* Content Animations */
        .text-left > *,
        .text-right > * {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .team-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .team-card:nth-child(1) { animation-delay: 0.1s; }
        .team-card:nth-child(2) { animation-delay: 0.2s; }
        .team-card:nth-child(3) { animation-delay: 0.3s; }
        .team-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ===== RESPONSIVE DESIGN ===== */
        
        /* Large Desktop: 1700px+ */
        @media (max-width: 1700px) {
          .management-container {
            max-width: 1600px;
            padding: 0 90px;
          }
        }

        /* Large Desktop: 1600px+ */
        @media (max-width: 1600px) {
          .management-container {
            max-width: 1500px;
            padding: 0 80px;
          }
          .text-content {
            gap: 70px;
          }
          .title {
            font-size: 44px;
          }
          .text-content-wrapper p {
            font-size: 17px;
          }
        }

        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .management-container {
            max-width: 1300px;
            padding: 0 70px;
          }
          .text-content {
            gap: 60px;
          }
          .title {
            font-size: 42px;
          }
          .text-content-wrapper p {
            font-size: 16.5px;
          }
          .team-cards-grid {
            gap: 25px;
          }
        }

        /* Desktop: 1366px */
        @media (max-width: 1366px) {
          .management-container {
            max-width: 1200px;
            padding: 0 60px;
          }
          .text-content {
            gap: 50px;
          }
          .title {
            font-size: 40px;
          }
          .text-content-wrapper p {
            font-size: 16px;
          }
        }

        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .management-container {
            padding: 0 50px;
          }
          .text-content {
            gap: 40px;
          }
          .title {
            font-size: 38px;
          }
          .text-content-wrapper p {
            font-size: 15.5px;
          }
          .team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
        }

        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .management-container {
            padding: 0 40px;
            gap: 50px;
          }
          .text-content {
            gap: 35px;
          }
          .title {
            font-size: 36px;
          }
          .text-content-wrapper p {
            font-size: 15px;
          }
          .team-cards-grid {
            gap: 20px;
          }
        }

        /* Tablet Portrait: 992px - Single column layout */
        @media (max-width: 992px) {
          .management-section {
            padding: 60px 0;
          }
          .management-container {
            gap: 40px;
            padding: 0 40px;
          }
          .text-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
          .title {
            font-size: 36px;
          }
          .text-content-wrapper p {
            font-size: 16px;
          }
          .team-cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }

        /* Mobile Landscape: 768px */
        @media (max-width: 768px) {
          .management-section {
            padding: 50px 0;
          }
          .management-container {
            padding: 0 30px;
            gap: 35px;
          }
          .text-content {
            gap: 25px;
          }
          .title {
            font-size: 34px;
          }
          .text-content-wrapper p {
            font-size: 15px;
          }
          .team-cards-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
            margin: 0 auto;
            gap: 25px;
          }
        }

        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .management-section {
            padding: 40px 0;
          }
          .management-container {
            padding: 0 25px;
            gap: 30px;
          }
          .title {
            font-size: 32px;
          }
          .text-content-wrapper p {
            font-size: 14.5px;
            line-height: 1.5;
          }
          .team-cards-grid {
            gap: 20px;
          }
          .team-card-content {
            padding: 20px 16px;
          }
          .team-member-name {
            font-size: 17px;
          }
          .team-member-position {
            font-size: 14px;
          }
        }

        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .management-section {
            padding: 35px 0;
          }
          .management-container {
            padding: 0 20px;
            gap: 25px;
          }
          .title {
            font-size: 28px;
          }
          .text-content-wrapper p {
            font-size: 14px;
          }
          .team-cards-grid {
            gap: 15px;
          }
        }

        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .management-section {
            padding: 30px 0;
          }
          .management-container {
            padding: 0 15px;
            gap: 20px;
          }
          .title {
            font-size: 26px;
          }
          .text-content-wrapper p {
            font-size: 13.5px;
          }
        }
      `}</style>
    </>
  );
};

export default ManagementSection;