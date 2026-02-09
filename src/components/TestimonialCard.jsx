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

  // Calculate visible testimonials
  const getVisibleTestimonials = () => {
    const total = testimonials.length;
    const visibleIndices = [];
    
    // Previous testimonial
    const prevIndex = activeIndex === 0 ? total - 1 : activeIndex - 1;
    visibleIndices.push(prevIndex);
    
    // Current testimonial
    visibleIndices.push(activeIndex);
    
    // Next testimonial
    const nextIndex = activeIndex === total - 1 ? 0 : activeIndex + 1;
    visibleIndices.push(nextIndex);
    
    return visibleIndices.map(index => ({
      ...testimonials[index],
      position: index === activeIndex ? 'center' : 
                index === prevIndex ? 'left' : 'right'
    }));
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">{t('testimonials.title')}</h2>
            <p className="testimonials-subtitle">{t('testimonials.subtitle')}</p>
          </div>
          
          {/* Testimonial Carousel Container */}
          <div className="testimonial-carousel-container">
            {/* Left Card (25% visible) */}
            <div 
              className="testimonial-side-card left-card"
              onClick={goToPrev}
            >
              <div className="side-card-content">
                <div className="profile-icon side">
                  <span>{testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].initials}</span>
                </div>
                <div className="side-card-info">
                  <div className="author-name side">{testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].author}</div>
                  <div className="company side">{testimonials[activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1].company}</div>
                </div>
                <div className="side-card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Main Carousel */}
            <div className="testimonial-carousel">
              <div className="carousel-track">
                {visibleTestimonials.map((testimonial, index) => (
                  <div 
                    key={testimonial.id}
                    className={`testimonial-slide ${testimonial.position}`}
                  >
                    <div className="testimonial-card">
                      <div className="testimonial-content">
                        {/* Quote Icon */}
                        <div className="quote-icon">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                            <path d="M4 12C4 14.2091 5.79086 16 8 16H10V20H4V16C4 13.7909 5.79086 12 8 12V8C5.79086 8 4 9.79086 4 12ZM20 12C20 14.2091 18.2091 16 16 16H14V20H20V16C20 13.7909 18.2091 12 16 12V8C18.2091 8 20 9.79086 20 12Z" fill="#22D3EE"/>
                          </svg>
                        </div>
                        
                        <blockquote className="testimonial-quote">
                          <p>{testimonial.quote}</p>
                        </blockquote>
                      </div>
                      
                      <div className="testimonial-author">
                        <div className="profile-icon main">
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
            </div>
            
            {/* Right Card (25% visible) */}
            <div 
              className="testimonial-side-card right-card"
              onClick={goToNext}
            >
              <div className="side-card-content">
                <div className="side-card-arrow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="side-card-info">
                  <div className="author-name side">{testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].author}</div>
                  <div className="company side">{testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].company}</div>
                </div>
                <div className="profile-icon side">
                  <span>{testimonials[activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1].initials}</span>
                </div>
              </div>
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
        /* Testimonials Section - Reduced spacing */
        .testimonials-section {
          width: 100%;
          padding: 15px 100px 25px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .testimonials-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 90% 10%, rgba(34, 211, 238, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 10% 90%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          z-index: 1;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonials-section {
            padding: 10px 80px 20px 80px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .testimonials-section {
            padding: 10px 60px 15px 60px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .testimonials-section {
            padding: 10px 50px 15px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonials-section {
            padding: 10px 40px 15px 40px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .testimonials-section {
            padding: 10px 30px 15px 30px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .testimonials-section {
            padding: 10px 25px 15px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonials-section {
            padding: 10px 20px 15px 20px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .testimonials-section {
            padding: 8px 15px 12px 15px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .testimonials-section {
            padding: 8px 12px 12px 12px;
          }
        }
        
        /* Extra wide screens */
        @media only screen and (min-width: 1600px) {
          .testimonials-section {
            padding: 20px 150px 30px 150px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .testimonials-section {
            padding: 30px 200px 40px 200px;
          }
        }
        
        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Header - Reduced spacing */
        .testimonials-header {
          text-align: center;
          margin-bottom: 50px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 10px;
        }
        
        @media only screen and (max-width: 900px) {
          .testimonials-header {
            margin-bottom: 40px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonials-header {
            margin-bottom: 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonials-header {
            margin-bottom: 30px;
          }
        }
        
        .testimonials-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        .testimonials-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          margin: 0;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonials-title {
            font-size: 44px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .testimonials-title {
            font-size: 38px;
          }
          
          .testimonials-subtitle {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .testimonials-title {
            font-size: 34px;
          }
          
          .testimonials-subtitle {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonials-title {
            font-size: 32px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .testimonials-title {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .testimonials-title {
            font-size: 26px;
          }
          
          .testimonials-subtitle {
            font-size: 15px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonials-title {
            font-size: 24px;
          }
          
          .testimonials-subtitle {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .testimonials-title {
            font-size: 22px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .testimonials-title {
            font-size: 20px;
          }
          
          .testimonials-subtitle {
            font-size: 13px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .testimonials-title {
            font-size: 56px;
          }
          
          .testimonials-subtitle {
            font-size: 20px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .testimonials-title {
            font-size: 60px;
          }
        }
        
        /* Carousel Container */
        .testimonial-carousel-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          position: relative;
          min-height: 450px;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonial-carousel-container {
            flex-direction: column;
            gap: 25px;
            min-height: auto;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-carousel-container {
            gap: 20px;
          }
        }
        
        /* Side Cards (25% visible) */
        .testimonial-side-card {
          flex: 0 0 25%;
          max-width: 25%;
          height: 150px;
          background: #FFFFFF;
          border-radius: 16px;
          padding: 18px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.7;
          position: relative;
          overflow: hidden;
        }
        
        .testimonial-side-card:hover {
          opacity: 0.9;
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
          border-color: rgba(34, 211, 238, 0.3);
        }
        
        .left-card {
          transform: perspective(1000px) rotateY(10deg);
          margin-right: -5%;
        }
        
        .right-card {
          transform: perspective(1000px) rotateY(-10deg);
          margin-left: -5%;
        }
        
        .side-card-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 15px;
        }
        
        .side-card-info {
          flex: 1;
          text-align: center;
        }
        
        .author-name.side {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .company.side {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #22D3EE;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .profile-icon.side {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(34, 211, 238, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border: 1px solid rgba(34, 211, 238, 0.3);
        }
        
        .profile-icon.side span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #22D3EE;
        }
        
        .side-card-arrow {
          color: #22D3EE;
          opacity: 0.6;
          transition: opacity 0.3s ease;
        }
        
        .testimonial-side-card:hover .side-card-arrow {
          opacity: 1;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonial-side-card {
            flex: 0 0 100%;
            max-width: 100%;
            height: 75px;
            margin: 0;
            transform: none;
            opacity: 1;
            order: 3;
          }
          
          .side-card-content {
            justify-content: center;
            gap: 25px;
          }
          
          .left-card .side-card-content {
            flex-direction: row;
          }
          
          .right-card .side-card-content {
            flex-direction: row-reverse;
          }
          
          .author-name.side {
            font-size: 15px;
          }
          
          .company.side {
            font-size: 13px;
          }
          
          .profile-icon.side {
            width: 36px;
            height: 36px;
          }
          
          .profile-icon.side span {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-side-card {
            height: 65px;
            padding: 15px;
          }
          
          .side-card-content {
            gap: 20px;
          }
          
          .author-name.side {
            font-size: 14px;
          }
          
          .company.side {
            font-size: 12px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-side-card {
            height: 60px;
            padding: 12px;
          }
          
          .side-card-content {
            gap: 15px;
          }
          
          .profile-icon.side {
            width: 32px;
            height: 32px;
          }
          
          .profile-icon.side span {
            font-size: 12px;
          }
        }
        
        /* Main Carousel */
        .testimonial-carousel {
          flex: 0 0 50%;
          max-width: 50%;
          position: relative;
          z-index: 2;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonial-carousel {
            flex: 0 0 100%;
            max-width: 100%;
            order: 2;
          }
        }
        
        .carousel-track {
          position: relative;
          height: 450px;
        }
        
        @media only screen and (max-width: 1200px) {
          .carousel-track {
            height: 380px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .carousel-track {
            height: 350px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .carousel-track {
            height: 380px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .carousel-track {
            height: 400px;
          }
        }
        
        /* Testimonial Slide */
        .testimonial-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transform: scale(0.9);
          transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
          pointer-events: none;
        }
        
        .testimonial-slide.center {
          opacity: 1;
          transform: scale(1);
          pointer-events: all;
          z-index: 3;
        }
        
        .testimonial-slide.left {
          opacity: 0;
          transform: translateX(-100%) scale(0.8);
          z-index: 1;
        }
        
        .testimonial-slide.right {
          opacity: 0;
          transform: translateX(100%) scale(0.8);
          z-index: 1;
        }
        
        /* Testimonial Card */
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 50px 40px;
          height: 100%;
          display: flex;
          flex-direction: column;
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }
        
        .center .testimonial-card {
          border-color: rgba(34, 211, 238, 0.3);
          box-shadow: 
            0 8px 40px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(34, 211, 238, 0.1);
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonial-card {
            padding: 40px 35px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .testimonial-card {
            padding: 35px 28px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-card {
            padding: 30px 25px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .testimonial-card {
            padding: 25px 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-card {
            padding: 20px 18px;
          }
        }
        
        /* Content */
        .testimonial-content {
          flex: 1;
          margin-bottom: 35px;
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-content {
            margin-bottom: 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-content {
            margin-bottom: 20px;
          }
        }
        
        /* Quote Icon */
        .quote-icon {
          margin-bottom: 25px;
        }
        
        @media only screen and (max-width: 768px) {
          .quote-icon {
            margin-bottom: 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .quote-icon svg {
            width: 32px;
            height: 32px;
          }
        }
        
        /* Quote Text */
        .testimonial-quote {
          margin: 0;
        }
        
        .testimonial-quote p {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 19px;
          line-height: 1.7;
          font-weight: 400;
          color: #000000;
          margin: 0;
          font-style: normal;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonial-quote p {
            font-size: 18px;
            line-height: 1.6;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .testimonial-quote p {
            font-size: 17px;
            line-height: 1.6;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-quote p {
            font-size: 16px;
            line-height: 1.6;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .testimonial-quote p {
            font-size: 15px;
            line-height: 1.5;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-quote p {
            font-size: 14px;
            line-height: 1.5;
          }
        }
        
        /* Author Section */
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 18px;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          padding-top: 25px;
        }
        
        @media only screen and (max-width: 900px) {
          .testimonial-author {
            gap: 16px;
            padding-top: 22px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-author {
            gap: 14px;
            padding-top: 20px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .testimonial-author {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }
        }
        
        /* Profile Icon */
        .profile-icon.main {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: linear-gradient(135deg, #22D3EE 0%, #2563EB 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .profile-icon.main span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
        }
        
        @media only screen and (max-width: 900px) {
          .profile-icon.main {
            width: 46px;
            height: 46px;
          }
          
          .profile-icon.main span {
            font-size: 15px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .profile-icon.main {
            width: 44px;
            height: 44px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .profile-icon.main {
            width: 40px;
            height: 40px;
          }
          
          .profile-icon.main span {
            font-size: 14px;
          }
        }
        
        /* Author Info */
        .author-info {
          display: flex;
          flex-direction: column;
        }
        
        .author-name {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 17px;
          line-height: 1.3;
          font-weight: 700;
          color: #000000;
          margin-bottom: 4px;
        }
        
        .author-role {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 400;
          color: #666666;
          margin-bottom: 2px;
        }
        
        .author-company {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
          color: #22D3EE;
        }
        
        @media only screen and (max-width: 900px) {
          .author-name {
            font-size: 16px;
          }
          
          .author-role,
          .author-company {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .author-name {
            font-size: 15px;
          }
          
          .author-role,
          .author-company {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .author-name {
            font-size: 14px;
          }
          
          .author-role,
          .author-company {
            font-size: 12px;
          }
        }
        
        /* Dots Indicator - Reduced top margin */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 35px;
          margin-bottom: 10px;
        }
        
        @media only screen and (max-width: 768px) {
          .carousel-dots {
            margin-top: 30px;
            margin-bottom: 5px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .carousel-dots {
            margin-top: 25px;
            margin-bottom: 5px;
          }
        }
        
        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.1);
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }
        
        .dot:hover {
          background: rgba(34, 211, 238, 0.3);
        }
        
        .dot.active {
          background: #22D3EE;
          transform: scale(1.2);
        }
        
        @media only screen and (max-width: 480px) {
          .dot {
            width: 8px;
            height: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialSection;