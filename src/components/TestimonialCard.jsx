import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TestimonialSection = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      quote: t('testimonials.testimonial1.quote'),
      author: t('testimonials.testimonial1.author'),
      role: t('testimonials.testimonial1.role'),
      company: t('testimonials.testimonial1.company'),
      initials: "MW"
    },
    {
      id: 2,
      quote: t('testimonials.testimonial2.quote'),
      author: t('testimonials.testimonial2.author'),
      role: t('testimonials.testimonial2.role'),
      company: t('testimonials.testimonial2.company'),
      initials: "SK"
    },
    {
      id: 3,
      quote: t('testimonials.testimonial3.quote'),
      author: t('testimonials.testimonial3.author'),
      role: t('testimonials.testimonial3.role'),
      company: t('testimonials.testimonial3.company'),
      initials: "TR"
    },
    {
      id: 4,
      quote: t('testimonials.testimonial4.quote'),
      author: t('testimonials.testimonial4.author'),
      role: t('testimonials.testimonial4.role'),
      company: t('testimonials.testimonial4.company'),
      initials: "AH"
    },
    {
      id: 5,
      quote: t('testimonials.testimonial5.quote'),
      author: t('testimonials.testimonial5.author'),
      role: t('testimonials.testimonial5.role'),
      company: t('testimonials.testimonial5.company'),
      initials: "KL"
    }
  ];

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">{t('testimonials.title')}</h2>
            <p className="testimonials-subtitle">{t('testimonials.subtitle')}</p>
          </div>
          
          {/* Main Carousel - Full width */}
          <div className="testimonial-carousel">
            <div className="carousel-track">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`testimonial-slide ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-card">
                    <div className="testimonial-content">
                      {/* Quote Icon */}
                      <div className="quote-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12C4 14.2091 5.79086 16 8 16H10V20H4V16C4 13.7909 5.79086 12 8 12V8C5.79086 8 4 9.79086 4 12ZM20 12C20 14.2091 18.2091 16 16 16H14V20H20V16C20 13.7909 18.2091 12 16 12V8C18.2091 8 20 9.79086 20 12Z" fill="#0066FF"/> {/* Updated: Blue color */}
                        </svg>
                      </div>
                      
                      <blockquote className="testimonial-quote">
                        <p>{testimonial.quote}</p>
                      </blockquote>
                    </div>
                    
                    <div className="testimonial-author">
                      <div className="profile-icon">
                        <span>{testimonial.initials}</span>
                      </div>
                      <div className="author-info">
                        <div className="author-name">{testimonial.author}</div>
                        <div className="author-role">{testimonial.role}</div>
                        <div className="author-company">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <div className="carousel-navigation">
              <button className="carousel-button prev" onClick={goToPrev} aria-label="Previous testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="carousel-button next" onClick={goToNext} aria-label="Next testimonial">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="carousel-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Testimonials Section - Consistent padding 35px 100px */
        .testimonials-section {
          width: 100%;
          padding: 35px 100px; /* UPDATED: Consistent padding */
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        /* REMOVED: Gradient background pattern */
        
        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Header */
        .testimonials-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Title - Updated colors: Black */
        .testimonials-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000; /* Updated: Black */
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        /* Subtitle - Updated colors: Anthracite (#374151) */
        .testimonials-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #374151; /* Updated: Anthracite */
          margin: 0;
        }
        
        /* Main Carousel - Full width */
        .testimonial-carousel {
          position: relative;
          width: 100%;
          margin-bottom: 40px;
        }
        
        .carousel-track {
          position: relative;
          min-height: 320px; /* Reduced height for cleaner look */
        }
        
        /* Testimonial Slide - Full width */
        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          pointer-events: none;
        }
        
        .testimonial-slide.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
          z-index: 2;
        }
        
        /* Testimonial Card */
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 50px; /* Increased padding for better spacing */
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .testimonial-card:hover {
          border-color: rgba(0, 102, 255, 0.3); /* Updated: Blue border on hover */
          box-shadow: 
            0 8px 40px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(0, 102, 255, 0.1);
        }
        
        /* Content */
        .testimonial-content {
          flex: 1;
          margin-bottom: 40px;
        }
        
        /* Quote Icon */
        .quote-icon {
          margin-bottom: 25px;
        }
        
        /* Quote Text - Updated colors: Black */
        .testimonial-quote {
          margin: 0;
        }
        
        .testimonial-quote p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px; /* Slightly larger for better readability */
          line-height: 1.6;
          font-weight: 400;
          color: #000000; /* Updated: Black */
          margin: 0;
          font-style: normal;
        }
        
        /* Author Section */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding-top: 25px;
        }
        
        /* Profile Icon - Updated: Blue gradient */
        .profile-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0066FF 0%, #0052CC 100%); /* Updated: Blue gradient */
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .profile-icon span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
        }
        
        /* Author Info */
        .author-info {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000; /* Updated: Black */
          margin-bottom: 6px;
        }
        
        .author-role {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 400;
          color: #374151; /* Updated: Anthracite */
          margin-bottom: 4px;
        }
        
        .author-company {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #0066FF; /* Updated: Blue color */
        }
        
        /* Navigation Arrows */
        .carousel-navigation {
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          display: flex;
          justify-content: space-between;
          padding: 0 20px;
          z-index: 3;
          pointer-events: none;
        }
        
        .carousel-button {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid rgba(0, 102, 255, 0.2); /* Updated: Blue border */
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          pointer-events: all;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .carousel-button:hover {
          background: #0066FF; /* Updated: Blue background on hover */
          border-color: #0066FF;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 102, 255, 0.3);
        }
        
        .carousel-button:hover svg path {
          stroke: #FFFFFF; /* White arrow on blue background */
        }
        
        .carousel-button.prev {
          transform: translateX(-20px);
        }
        
        .carousel-button.next {
          transform: translateX(20px);
        }
        
        .carousel-button:hover.prev,
        .carousel-button:hover.next {
          transform: translateY(-2px);
        }
        
        /* Dots Indicator */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 40px;
        }
        
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        
        .dot:hover {
          background: rgba(0, 102, 255, 0.3); /* Updated: Blue hover */
        }
        
        .dot.active {
          background: #0066FF; /* Updated: Blue active dot */
          transform: scale(1.2);
        }
        
        /* =========== RESPONSIVE DESIGN =========== */
        
        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .testimonials-section {
            padding: 35px 80px;
          }
        }
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .testimonials-section {
            padding: 35px 60px;
          }
          
          .testimonials-title {
            font-size: 44px;
          }
          
          .testimonials-header {
            margin-bottom: 50px;
          }
          
          .testimonial-card {
            padding: 40px;
          }
          
          .testimonial-quote p {
            font-size: 18px;
          }
        }
        
        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .testimonials-section {
            padding: 35px 40px;
          }
          
          .testimonials-title {
            font-size: 38px;
          }
          
          .testimonials-subtitle {
            font-size: 17px;
          }
          
          .testimonial-card {
            padding: 35px;
          }
          
          .carousel-track {
            min-height: 300px;
          }
          
          .testimonial-content {
            margin-bottom: 35px;
          }
          
          .testimonials-header {
            margin-bottom: 45px;
          }
        }
        
        /* Medium Tablets: 900px */
        @media (max-width: 900px) {
          .testimonials-section {
            padding: 35px 50px;
          }
          
          .testimonials-title {
            font-size: 34px;
          }
          
          .testimonials-subtitle {
            font-size: 16px;
          }
          
          .testimonial-card {
            padding: 30px;
          }
          
          .testimonial-quote p {
            font-size: 17px;
          }
          
          .profile-icon {
            width: 48px;
            height: 48px;
          }
          
          .profile-icon span {
            font-size: 16px;
          }
          
          .author-name {
            font-size: 16px;
          }
          
          .author-role,
          .author-company {
            font-size: 14px;
          }
          
          .testimonials-header {
            margin-bottom: 40px;
          }
          
          .carousel-navigation {
            padding: 0 10px;
          }
          
          .carousel-button {
            width: 40px;
            height: 40px;
          }
        }
        
        /* Tablet Portrait: 768px */
        @media (max-width: 768px) {
          .testimonials-section {
            padding: 35px 40px;
          }
          
          .testimonials-title {
            font-size: 32px;
          }
          
          .testimonial-card {
            padding: 25px;
          }
          
          .testimonial-quote p {
            font-size: 16px;
            line-height: 1.5;
          }
          
          .testimonial-author {
            gap: 16px;
            padding-top: 20px;
          }
          
          .carousel-track {
            min-height: 280px;
          }
          
          .quote-icon svg {
            width: 32px;
            height: 32px;
          }
        }
        
        /* Large Phones: 650px */
        @media (max-width: 650px) {
          .testimonials-section {
            padding: 35px 30px;
          }
          
          .testimonials-title {
            font-size: 28px;
          }
          
          .testimonial-card {
            padding: 22px;
          }
          
          .testimonial-quote p {
            font-size: 15px;
          }
          
          .testimonial-content {
            margin-bottom: 25px;
          }
          
          .testimonials-header {
            margin-bottom: 35px;
          }
          
          .carousel-dots {
            margin-top: 35px;
          }
          
          .carousel-navigation {
            display: none; /* Hide arrows on small screens */
          }
        }
        
        /* Medium Phones: 576px */
        @media (max-width: 576px) {
          .testimonials-section {
            padding: 35px 25px;
          }
          
          .testimonials-title {
            font-size: 26px;
          }
          
          .testimonials-subtitle {
            font-size: 15px;
            max-width: 480px;
            margin: 0 auto;
          }
          
          .testimonial-card {
            padding: 20px;
          }
          
          .testimonial-author {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
          
          .author-name {
            font-size: 15px;
          }
          
          .author-role,
          .author-company {
            font-size: 13px;
          }
          
          .testimonials-header {
            margin-bottom: 30px;
          }
        }
        
        /* Small Phones: 480px */
        @media (max-width: 480px) {
          .testimonials-section {
            padding: 35px 20px;
          }
          
          .testimonials-title {
            font-size: 24px;
          }
          
          .testimonials-subtitle {
            font-size: 14px;
            max-width: 100%;
          }
          
          .testimonial-card {
            padding: 18px;
          }
          
          .testimonial-quote p {
            font-size: 14px;
            line-height: 1.5;
          }
          
          .quote-icon {
            margin-bottom: 18px;
          }
          
          .quote-icon svg {
            width: 28px;
            height: 28px;
          }
          
          .profile-icon {
            width: 40px;
            height: 40px;
          }
          
          .profile-icon span {
            font-size: 14px;
          }
          
          .carousel-dots {
            margin-top: 30px;
          }
          
          .dot {
            width: 10px;
            height: 10px;
          }
        }
        
        /* Very Small Phones: 400px */
        @media (max-width: 400px) {
          .testimonials-section {
            padding: 35px 15px;
          }
          
          .testimonials-title {
            font-size: 22px;
          }
          
          .testimonial-card {
            padding: 16px;
          }
          
          .testimonials-header {
            margin-bottom: 25px;
          }
        }
        
        /* Extra Small Phones: 360px */
        @media (max-width: 360px) {
          .testimonials-section {
            padding: 35px 12px;
          }
          
          .testimonials-title {
            font-size: 20px;
          }
          
          .testimonials-subtitle {
            font-size: 13px;
          }
          
          .testimonial-quote p {
            font-size: 13px;
          }
          
          .carousel-dots {
            margin-top: 25px;
          }
        }
        
        /* Wide Screens: 1600px+ */
        @media (min-width: 1600px) {
          .testimonials-section {
            padding: 35px 150px;
          }
          
          .testimonials-title {
            font-size: 56px;
          }
          
          .testimonials-subtitle {
            font-size: 20px;
            max-width: 800px;
          }
          
          .testimonial-card {
            padding: 60px;
          }
          
          .carousel-track {
            min-height: 350px;
          }
          
          .testimonial-quote p {
            font-size: 22px;
          }
          
          .author-name {
            font-size: 20px;
          }
          
          .author-role,
          .author-company {
            font-size: 17px;
          }
          
          .profile-icon {
            width: 64px;
            height: 64px;
          }
          
          .profile-icon span {
            font-size: 20px;
          }
          
          .testimonials-header {
            margin-bottom: 70px;
          }
          
          .carousel-dots {
            margin-top: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialSection;