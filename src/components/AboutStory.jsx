import React from 'react';

const AboutStory = () => {
  return (
    <>
      <section className="about-story-section">
        {/* Single combined section */}
        <div className="about-story-container">
          
          {/* First part: We are Tolero */}
          <div className="about-story-content">
            <div className="about-story-wrapper">
              <div className="about-story-top">
                <h1 className="about-story-headline">We are Tolero</h1>
              </div>
              <div className="about-story-text">
                <div className="about-story-paragraphs">
                  <p>
                    We are engineers at heart - analytical, curious, precise. Our team of computer scientists, 
                    designers, strategists and AI experts develops digital solutions with depth. We combine 
                    research with practice, teaching with entrepreneurship and precision with humanity. 
                    For us, technology is not an end in itself, but a tool. It should solve problems, 
                    simplify processes and create added value - for people who want to make a difference.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Second part: How we work - NO GAP */}
          <div className="about-story-content second-part">
            <div className="about-story-wrapper">
              <div className="about-story-top">
                <p className="about-story-tagline">Our way of working</p>
                <h1 className="about-story-headline">How we work</h1>
              </div>
              <div className="about-story-text">
                <div className="about-story-paragraphs">
                  <p>
                    We look at every project from two perspectives: from the depth of the technology 
                    and with an eye on the big picture.<br />
                    Our way of working is characterized by clarity, pragmatism and responsibility.
                  </p>
                  <p>
                    We provide honest advice, make well-founded decisions and implement them - 
                    with a focus on what really helps the customer.<br />
                    Quick decisions, short paths and a consistently solution-oriented approach 
                    are part of our everyday work.
                  </p>
                  <p>
                    We work with modern tools and agile methods and focus on collaboration, 
                    personal responsibility and clear results.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <style jsx="true">{`
        /* ========== BASE STYLES ========== */
        .about-story-section * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        /* Main section - NO EXTRA MARGIN */
        .about-story-section {
          width: 100%;
          background: #FFFFFF;
          /* margin-top: 80px; ❌ REMOVE THIS LINE */
        }
        
        /* Container - ONLY 100px top/bottom, 35px sides padding */
        .about-story-container {
          max-width: 1400px;
          width: 100%;
          margin: 0 auto;
          padding: 100px 35px; /* ✅ Top padding hi sufficient hai */
        }
        
        @media only screen and (max-width: 1024px) {
          .about-story-container {
            padding: 80px 35px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .about-story-container {
            padding: 60px 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-story-container {
            padding: 40px 35px;
          }
        }
        
        /* Content sections */
        .about-story-content {
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        /* NO GAP between parts */
        .about-story-content.second-part {
          margin-top: 0;
          padding-top: 0;
        }
        
        /* Add internal spacing between sections */
        .about-story-content + .about-story-content.second-part {
          margin-top: 50px;
        }
        
        @media only screen and (max-width: 768px) {
          .about-story-content + .about-story-content.second-part {
            margin-top: 40px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .about-story-content + .about-story-content.second-part {
            margin-top: 30px;
          }
        }
        
        .about-story-wrapper {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }
        
        .about-story-top {
          margin-bottom: 20px;
        }
        
        /* Tagline - BLUE COLOR */
        .about-story-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #0066FF;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        
        /* Headline */
        .about-story-headline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 42px;
          font-weight: 700;
          line-height: 1.1;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }
        
        /* Text content */
        .about-story-text {
          max-width: 700px;
          width: 100%;
        }
        
        .about-story-paragraphs {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;
          color: #374151;
        }
        
        /* Paragraphs */
        .about-story-paragraphs p {
          margin-bottom: 16px;
          font-size: 18px;
          line-height: 1.5;
          color: #374151;
        }
        
        .about-story-paragraphs p:last-child {
          margin-bottom: 0;
        }
        
        /* ===== RESPONSIVE DESIGN ===== */
        
        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .about-story-headline {
            font-size: 38px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 17px;
          }
        }
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .about-story-headline {
            font-size: 36px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 16px;
          }
        }
        
        /* Tablet: 1024px */
        @media (max-width: 1024px) {
          .about-story-headline {
            font-size: 34px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 15px;
          }
        }
        
        /* Tablet Portrait: 992px */
        @media (max-width: 992px) {
          .about-story-container {
            padding: 40px 35px 30px;
          }
          
          .about-story-headline {
            font-size: 36px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 16px;
          }
        }
        
        /* Mobile Landscape: 768px */
        @media (max-width: 768px) {
          .about-story-container {
            padding: 0 30px;
          }
          
          .about-story-headline {
            font-size: 32px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 15px;
            line-height: 1.4;
          }
        }
        
        /* Mobile Portrait: 576px */
        @media (max-width: 576px) {
          .about-story-container {
            padding: 0 25px;
          }
          
          .about-story-headline {
            font-size: 28px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 14px;
          }
          
          .about-story-tagline {
            font-size: 11px;
          }
        }
        
        /* Small Mobile: 480px */
        @media (max-width: 480px) {
          .about-story-container {
            padding: 0 20px;
          }
          
          .about-story-headline {
            font-size: 24px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 13px;
          }
        }
        
        /* Extra small devices: 360px */
        @media (max-width: 360px) {
          .about-story-container {
            padding: 0 15px;
          }
          
          .about-story-headline {
            font-size: 22px;
          }
          
          .about-story-paragraphs,
          .about-story-paragraphs p {
            font-size: 12px;
          }
        }
        
        /* Animation for fade in */
        .about-story-container {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.1s;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default AboutStory;