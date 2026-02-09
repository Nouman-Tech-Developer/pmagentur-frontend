import React from 'react';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "With Tolero's AI phone assistant, we've relieved our customer hotline while increasing customer satisfaction. The solution works 24/7 and even understands complex inquiries.",
      author: "Markus Weber",
      role: "Managing Director",
      company: "TransLog Logistics"
    },
    {
      id: 2,
      quote: "The chatbot integration has relieved our support team by 60%. Customers get immediate answers, while our team can focus on complex cases. A win-win situation.",
      author: "Dr. Sarah Klein",
      role: "CTO",
      company: "ShopPlus E-Commerce"
    }
  ];

  return (
    <>
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Customer Voices</h2>
            <p className="testimonials-subtitle">What companies say about our AI automation</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-content">
                  {/* Quote Icon */}
                  <div className="quote-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                      <path d="M10 7H6V11H10V17H14V11H18V7H14V11H10Z" fill="#0071E3" fillOpacity="0.2"/>
                      <path d="M4 12C4 14.2091 5.79086 16 8 16H10V20H4V16C4 13.7909 5.79086 12 8 12V8C5.79086 8 4 9.79086 4 12ZM20 12C20 14.2091 18.2091 16 16 16H14V20H20V16C20 13.7909 18.2091 12 16 12V8C18.2091 8 20 9.79086 20 12Z" fill="#0071E3"/>
                    </svg>
                  </div>
                  
                  <blockquote className="testimonial-quote">
                    <p>{testimonial.quote}</p>
                  </blockquote>
                </div>
                
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">{testimonial.author}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Testimonials Section */
        .testimonials-section {
          width: 100%;
          padding: 35px 100px; /* 35px top-bottom, 100px left-right */
          background: #F5F5F7;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .testimonials-section {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .testimonials-section {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonials-section {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .testimonials-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        /* Header */
        .testimonials-header {
          text-align: center;
          margin-bottom: 64px;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Title - RED */
        .testimonials-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        /* Subtitle - BLUE */
        .testimonials-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          margin: 0;
        }
        
        @media only screen and (max-width: 768px) {
          .testimonials-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .testimonials-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Grid - 2 columns */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }
        
        @media only screen and (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 700px;
            margin: 0 auto;
          }
        }
        
        /* Testimonial Card */
        .testimonial-card {
          background: #FFFFFF;
          border-radius: 20px; /* Rounded corners */
          padding: 48px 40px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          height: 100%;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08); /* Soft shadow */
          border: none; /* Removed border */
        }
        
        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.15);
        }
        
        @media only screen and (max-width: 768px) {
          .testimonial-card {
            padding: 40px 32px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-card {
            padding: 32px 24px;
          }
        }
        
        /* Content */
        .testimonial-content {
          flex: 1;
          margin-bottom: 32px;
        }
        
        /* Quote Icon */
        .quote-icon {
          margin-bottom: 24px;
        }
        
        /* Quote Text */
        .testimonial-quote {
          margin: 0;
        }
        
        .testimonial-quote p {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #000000;
          margin: 0;
        }
        
        /* Author */
        .testimonial-author {
          border-top: 1px solid #E5E5E7;
          padding-top: 24px;
        }
        
        /* Author Info */
        .author-info {
          display: flex;
          flex-direction: column;
        }
        
        /* Author Name */
        .author-name {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
          color: #000000;
          margin-bottom: 4px;
        }
        
        /* Author Role */
        .author-role {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 22px;
          font-weight: 400;
          color: #6B7280;
          margin-bottom: 2px;
        }
        
        /* Author Company */
        .author-company {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 22px;
          font-weight: 500;
          color: #0071E3;
        }
        
        /* Responsive */
        @media only screen and (max-width: 768px) {
          .testimonial-quote p {
            font-size: 16px;
            line-height: 24px;
          }
          
          .author-name {
            font-size: 16px;
          }
          
          .author-role,
          .author-company {
            font-size: 14px;
          }
          
          .testimonials-grid {
            gap: 24px;
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialSection;