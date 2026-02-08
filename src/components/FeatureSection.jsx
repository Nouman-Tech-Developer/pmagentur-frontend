// components/FeatureSection.jsx
import React from 'react';

const FeatureSection = () => {
  const features = [
    {
      id: 1,
      title: "Close cooperation",
      description: "We develop with you, not past you. Regular coordination results in solutions that really fit your requirements.",
      icon: "https://www.pmagentur.com/hubfs/User-Collaborate-Group--Streamline-Flex-Neon.png"
    },
    {
      id: 2,
      title: "Plannable processes",
      description: "Transparent processes and agile methods give you security. You always have an overview of progress, budget and next steps.",
      icon: "https://www.pmagentur.com/hubfs/Notepad-Text--Streamline-Flex-Neon.png"
    },
    {
      id: 3,
      title: "Lasting effect",
      description: "Our software is designed for the long term. It grows with your company and remains expandable and stable in the future.",
      icon: "https://www.pmagentur.com/hubfs/Decent-Work-And-Economic-Growth--Streamline-Flex-Neon.png"
    }
  ];

  return (
    <>
      <section className="organism-feature-list _organism-feature-list_1fmb2_31">
        <div className="feature-content-wrapper">
          <div className="_sectionTitle_1fmb2_128">
            {/* ✅ Heading Container */}
            <div className="heading-container">
              <h2 className="_heading_1fmb2_78">
                {/* Responsive line breaks with span elements */}
                <span className="heading-line heading-line-1">Your agency for</span>
                <span className="heading-line heading-line-2">software development, AI integration,</span>
                <span className="heading-line heading-line-3">B2B e-commerce & digital platforms</span>
              </h2>
            </div>
            
            {/* ✅ Description */}
            <div className="_description_1fmb2_81">
              <div className="description-content">
                <div className="safe-html">
                  <span>Technology is not an end in itself. It must solve problems, improve processes and have a real impact. P&M stands for strategic development, technological precision and partnership-based implementation.</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Feature Grid */}
          <div className="feature-grid-wrapper">
            <div className="_featureGrid_1fmb2_202">
              {features.map((feature) => (
                <div key={feature.id} className="molecule-feature-card _molecule-feature-card_1nmyk_31">
                  <picture className="atom-content-image _atom-content-image_17ysp_31">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      style={{ width: '48px', height: '48px' }}
                    />
                  </picture>
                  <h3 className="_heading_1nmyk_48">{feature.title}</h3>
                  <div className="_description_1nmyk_51">
                    <div className="safe-html">
                      <span>{feature.description}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Import fonts */
        @font-face {
          font-family: Okima;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Okima-Ink-130-C6F5kR7g.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Regular;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Regular-CPM9dct4.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        /* Feature Section - Updated Padding: 35px top-bottom, 60px left-right */
        .organism-feature-list {
          width: 100%;
          padding: 35px 60px;
          background: #ffffff;
          box-sizing: border-box;
        }
        
        .feature-content-wrapper {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        
        /* Section Title Container */
        ._sectionTitle_1fmb2_128 {
          margin-bottom: 60px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        /* ✅ Heading Container */
        .heading-container {
          display: flex;
          justify-content: center;
          width: 100%;
          margin-bottom: 24px;
        }
        
        /* ✅ Main Heading */
        ._heading_1fmb2_78 {
          font-family: Okima;
          font-size: 45px;
          font-weight: 500;
          line-height: 1.2;
          color: #000000;
          text-transform: none;
          letter-spacing: 0;
          text-align: center;
          width: 100%;
          max-width: 100%;
          margin: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        
        /* ✅ Individual Heading Lines */
        .heading-line {
          display: block;
          width: 100%;
          text-align: center;
          line-height: 1.1;
          margin-bottom: 8px;
        }
        
        /* Last line has no bottom margin */
        .heading-line-3 {
          margin-bottom: 0;
        }
        
        /* ✅ Description Container */
        ._description_1fmb2_81 {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* ✅ Description Content */
        .description-content {
          font-family: Satoshi Regular;
          font-size: 16px;
          line-height: 1.6;
          color: #666666;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Feature Grid Wrapper */
        .feature-grid-wrapper {
          width: 100%;
        }
        
        /* Feature Grid */
        ._featureGrid_1fmb2_202 {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Feature Card */
        .molecule-feature-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 40px 30px;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .molecule-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        
        /* Feature Icon */
        .atom-content-image {
          margin-bottom: 24px;
          display: inline-block;
        }
        
        .atom-content-image img {
          width: 48px;
          height: 48px;
          object-fit: contain;
        }
        
        /* Feature Card Heading */
        ._heading_1nmyk_48 {
          font-family: Satoshi Regular;
          font-size: 30px;
          font-weight: 500;
          line-height: 1.3;
          color: #000000;
          margin-bottom: 16px;
          text-align: center;
        }
        
        /* Feature Card Description */
        ._description_1nmyk_51 {
          font-family: Satoshi Regular;
          font-size: 18px;
          line-height: 1.6;
          color: #666666;
          text-align: center;
        }
        
        /* Safe HTML */
        .safe-html {
          display: block;
        }
        
        /* =========== RESPONSIVE STYLES =========== */
        
        /* Large Tablets */
        @media (max-width: 1024px) {
          ._heading_1fmb2_78 {
            font-size: 42px;
          }
        }
        
        /* Tablets */
        @media (max-width: 900px) {
          ._heading_1fmb2_78 {
            font-size: 38px;
          }
          
          .organism-feature-list {
            padding: 30px 40px;
          }
          
          .description-content {
            max-width: 650px;
          }
        }
        
        /* Medium Tablets and Large Phones */
        @media (max-width: 768px) {
          .organism-feature-list {
            padding: 25px 30px;
          }
          
          ._heading_1fmb2_78 {
            font-size: 34px;
          }
          
          ._sectionTitle_1fmb2_128 {
            margin-bottom: 40px;
          }
          
          .description-content {
            max-width: 600px;
            font-size: 15px;
          }
          
          ._featureGrid_1fmb2_202 {
            gap: 30px;
            margin-top: 40px;
          }
          
          .molecule-feature-card {
            padding: 30px 20px;
          }
          
          ._heading_1nmyk_48 {
            font-size: 26px;
          }
          
          ._description_1nmyk_51 {
            font-size: 16px;
          }
        }
        
        /* Small Tablets and Large Phones */
        @media (max-width: 650px) {
          ._heading_1fmb2_78 {
            font-size: 32px;
          }
          
          .organism-feature-list {
            padding: 20px 25px;
          }
          
          .description-content {
            max-width: 550px;
          }
        }
        
        /* Phones */
        @media (max-width: 550px) {
          ._heading_1fmb2_78 {
            font-size: 28px;
          }
          
          .organism-feature-list {
            padding: 15px 20px;
          }
          
          .description-content {
            max-width: 480px;
            font-size: 14px;
          }
          
          ._featureGrid_1fmb2_202 {
            grid-template-columns: 1fr;
            gap: 25px;
          }
        }
        
        /* Small Phones */
        @media (max-width: 480px) {
          ._heading_1fmb2_78 {
            font-size: 26px;
          }
          
          .organism-feature-list {
            padding: 15px 15px;
          }
          
          .description-content {
            max-width: 100%;
            font-size: 14px;
          }
          
          ._heading_1nmyk_48 {
            font-size: 24px;
          }
          
          ._description_1nmyk_51 {
            font-size: 15px;
          }
        }
        
        /* Very Small Phones */
        @media (max-width: 400px) {
          ._heading_1fmb2_78 {
            font-size: 24px;
          }
          
          .organism-feature-list {
            padding: 10px 12px;
          }
        }
        
        /* Extra Small Phones */
        @media (max-width: 350px) {
          ._heading_1fmb2_78 {
            font-size: 22px;
          }
          
          .organism-feature-list {
            padding: 8px 10px;
          }
        }
        
        /* For very wide screens */
        @media (min-width: 1200px) {
          .organism-feature-list {
            padding: 35px 60px;
          }
          
          ._heading_1fmb2_78 {
            font-size: 45px;
          }
          
          .description-content {
            max-width: 700px;
          }
          
          ._featureGrid_1fmb2_202 {
            max-width: 1200px;
          }
        }
        
        /* Extra wide screens */
        @media (min-width: 1600px) {
          ._heading_1fmb2_78 {
            font-size: 48px;
          }
          
          .organism-feature-list {
            padding: 35px 80px;
          }
        }
      `}</style>
    </>
  );
};

export default FeatureSection;