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

  // Styles
  const styles = {
    container: {
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
      padding: '80px 100px',
      maxWidth: '1700px',
      margin: '0 auto',
      backgroundColor: '#FFFFFF',
    },
    header: {
      textAlign: 'center',
      marginBottom: '40px',
    },
    tagline: {
      color: '#0066FF',
      fontSize: '14px',
      fontWeight: '600',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      marginBottom: '12px',
    },
    title: {
      fontSize: '42px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '16px',
      lineHeight: '1.1',
      letterSpacing: '-0.02em',
    },
    subtitle: {
      fontSize: '18px',
      color: '#374151',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: '1.5',
      fontWeight: '400',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '30px',
      padding: '20px 0',
    },
    card: {
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E7EB',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: 'all 0.3s ease',
    },
    cardHovered: {
      transform: 'translateY(-8px)',
      boxShadow: '0 20px 40px rgba(0, 102, 255, 0.15)',
      borderColor: '#0066FF',
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      paddingTop: '100%',
      overflow: 'hidden',
      backgroundColor: '#F8FAFC',
    },
    image: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    imageHovered: {
      transform: 'scale(1.05)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.3))',
      display: 'flex',
      alignItems: 'flex-end',
      padding: '24px',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    overlayVisible: {
      opacity: 1,
    },
    overlayContent: {
      color: 'white',
      width: '100%',
    },
    overlayName: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 6px 0',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
    },
    overlayPosition: {
      fontSize: '14px',
      opacity: 0.9,
      margin: '0 0 16px 0',
      fontWeight: '400',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
    },
    overlayInfo: {
      fontSize: '13px',
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '6px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
    },
    overlayLabel: {
      opacity: 0.7,
    },
    caption: {
      padding: '24px 20px',
      textAlign: 'center',
    },
    name: {
      fontSize: '17px',
      fontWeight: '600',
      color: '#111827',
      margin: '0 0 6px 0',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', sans-serif",
    },
    position: {
      fontSize: '14px',
      color: '#6B7280',
      margin: 0,
      fontWeight: '400',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
    },
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.tagline}>OUR TEAM</div>
        <h1 style={styles.title}>Meet Our Experts</h1>
        <p style={styles.subtitle}>
          A diverse team of passionate professionals dedicated to delivering exceptional results.
        </p>
      </header>

      {/* Team Grid */}
      <div style={styles.grid}>
        {teamMembers.map(member => (
          <div
            key={member.id}
            style={{
              ...styles.card,
              ...(hoveredCard === member.id ? styles.cardHovered : {}),
            }}
            onMouseEnter={() => setHoveredCard(member.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image Container */}
            <div style={styles.imageContainer}>
              <img
                src={member.image}
                alt={member.alt}
                style={{
                  ...styles.image,
                  ...(hoveredCard === member.id ? styles.imageHovered : {}),
                }}
              />
              
              {/* Overlay on Hover */}
              <div 
                style={{
                  ...styles.overlay,
                  ...(hoveredCard === member.id ? styles.overlayVisible : {}),
                }}
              >
                <div style={styles.overlayContent}>
                  <h3 style={styles.overlayName}>{member.name}</h3>
                  <p style={styles.overlayPosition}>{member.position}</p>
                  <div style={styles.overlayInfo}>
                    <span style={styles.overlayLabel}>Department:</span>
                    <span>{member.department}</span>
                  </div>
                  <div style={styles.overlayInfo}>
                    <span style={styles.overlayLabel}>Experience:</span>
                    <span>{member.experience}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Caption */}
            <div style={styles.caption}>
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.position}>{member.position}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div style={{ 
        textAlign: 'center', 
        marginTop: '50px', 
        color: '#6B7280', 
        fontSize: '14px',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', sans-serif",
      }}>
        <p>Our team is constantly growing. Interested in joining us?</p>
      </div>

      {/* Global Styles */}
      <style>{`
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
        }
        
        /* Smooth transitions */
        .card, .image {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default TeamGrid;