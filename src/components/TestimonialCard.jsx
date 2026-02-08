// components/TestimonialCard.jsx
import React from 'react';

const TestimonialCard = () => {
  return (
    <>
      {/* Full width wrapper for edge to edge background */}
      <div className="testimonial-edge-wrapper">
        <div className="molecule-testimonial-card _molecule-testimonial-card_1l7u4_31 _molecule-testimonial-card--gradient_1l7u4_103 _molecule-testimonial-card--centered_1l7u4_243">
          <div className="_container_1l7u4_172">
            <div className="_content_1l7u4_193">
              {/* Company Logo - CENTERED */}
              <div className="_company-logo_1l7u4_232">
                <img 
                  src="/images/Testimonial-Logo.png" 
                  alt="WE_VIN_LOGO-1-e1705482721188-1" 
                  className="_logo-image_1l7u4_446"
                />
              </div>
              
              {/* Text Content */}
              <div className="_text-content_1l7u4_331">
                {/* Rating Stars - Hidden in centered layout */}
                <div className="_rating_1l7u4_256">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="_star_1l7u4_166 _star--filled_1l7u4_166">★</span>
                  ))}
                </div>
                
                {/* Quote - CENTERED TEXT */}
                <blockquote className="_quote_1l7u4_37">
                  <div className="safe-html">
                    <p>
                      <span>P&M supported us in the further development of an existing digital product and provided real all-round support - from project management and DevOps to actual development.</span><br />
                      <span>The focus was on adding an AI-supported chatbot function that exclusively uses our own content and also transparently identifies the sources in the responses. P&M contributed its experience in every phase of the project, was always approachable and responded flexibly to our wishes.</span><br />
                      <span>The collaboration with all internal and external parties ran smoothly and on an equal footing. We felt that we were in very good hands, both professionally and personally - and can recommend P&M without reservation.</span>
                    </p>
                  </div>
                </blockquote>
                
                {/* Author Info */}
                <div className="_author-info_1l7u4_386">
                  <div className="_attribution_1l7u4_370">
                    {/* Author Image - CENTERED */}
                    <div className="_image-container_1l7u4_265">
                      <img 
                        src="/images/Testimonial-Profile.png" 
                        alt="Dr. Sonja Schulte" 
                        className="_author-image_1l7u4_271"
                      />
                    </div>
                    
                    {/* Author Details - CENTERED */}
                    <div className="_author-details_1l7u4_275">
                      <div className="_author-name_1l7u4_57">Dr. Sonja Schulte</div>
                      <div className="_author-title_1l7u4_77">Head of Business Development, Vincentz Network</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        /* Import fonts */
        @font-face {
          font-family: Okima;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Okima-Ink-130-C6F5kR7g.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Bold;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Bold-Bd5kKQ_U.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Medium;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Medium-ByP-Zb-9.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Regular;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Regular-CPM9dct4.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Light;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Light-IqwJ_ZjS.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        /* CSS Variables */
        :root {
          --font-copy-m-tertiary-font-family: Satoshi Medium;
          --font-copy-m-tertiary-font-size-mobile: 1.125rem;
          --font-copy-m-tertiary-font-size-desktop: 1.25rem;
          --font-copy-m-tertiary-line-height-mobile: 140%;
          --font-copy-m-tertiary-line-height-desktop: 140%;
          --font-copy-m-tertiary-font-weight: 500;
          --font-copy-m-tertiary-color: #FFFFFF;
          --font-copy-m-tertiary-color-hover: #FFFFFF;
          
          --font-copy-m-quinquenary-font-family: Satoshi Bold;
          --font-copy-m-quinquenary-font-size-mobile: 1.125rem;
          --font-copy-m-quinquenary-font-size-desktop: 1.25rem;
          --font-copy-m-quinquenary-line-height-mobile: 140%;
          --font-copy-m-quinquenary-line-height-desktop: 140%;
          --font-copy-m-quinquenary-font-weight: 700;
          --font-copy-m-quinquenary-color: #FFFFFF;
          --font-copy-m-quinquenary-color-hover: #FFFFFF;
          
          --font-copy-m-tertiary-font-family: Satoshi Medium;
          --font-copy-m-tertiary-font-size-mobile: 1.125rem;
          --font-copy-m-tertiary-font-size-desktop: 1.25rem;
          --font-copy-m-tertiary-line-height-mobile: 140%;
          --font-copy-m-tertiary-line-height-desktop: 140%;
          --font-copy-m-tertiary-font-weight: 500;
          --font-copy-m-tertiary-color: #FFFFFF;
          --font-copy-m-tertiary-color-hover: #FFFFFF;
        }

        /* ===== METHOD 1: Margin Technique for Edge to Edge ===== */
        .testimonial-edge-wrapper {
          /* Screen edge to edge using negative margins */
          margin-left: calc(-50vw + 50%);
          margin-right: calc(-50vw + 50%);
          width: 100vw;
          background: linear-gradient(250deg, #080808 21.6%, #1a41a2e6 54.92%, #50a3e7 77.99%, #6dd1ea 94.51%);
          padding: 35px 60px;
          box-sizing: border-box;
        }

        /* ===== METHOD 2: Alternative Border Technique ===== */
        /* Uncomment this if you prefer border method */
        /*
        .testimonial-edge-wrapper {
          width: 100%;
          border-left: calc(50vw - 50%) solid linear-gradient(250deg, #080808 21.6%, #1a41a2e6 54.92%, #50a3e7 77.99%, #6dd1ea 94.51%);
          border-right: calc(50vw - 50%) solid linear-gradient(250deg, #080808 21.6%, #1a41a2e6 54.92%, #50a3e7 77.99%, #6dd1ea 94.51%);
          background: linear-gradient(250deg, #080808 21.6%, #1a41a2e6 54.92%, #50a3e7 77.99%, #6dd1ea 94.51%);
          padding: 35px 60px;
        }
        */

        /* Testimonial Card */
        .molecule-testimonial-card {
          width: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          background: transparent; /* Background is on wrapper */
        }
        
        /* Orange stars for gradient background */
        ._molecule-testimonial-card--gradient_1l7u4_103 ._star--filled_1l7u4_166 {
          color: #fe5631;
        }
        
        ._molecule-testimonial-card--gradient_1l7u4_103 ._star--empty_1l7u4_169 {
          color: #fe56314d;
        }
        
        /* Container */
        ._container_1l7u4_172 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }
        
        /* Content - EVERYTHING CENTERED */
        ._content_1l7u4_193 {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0;
        }
        
        /* Company Logo - CENTERED */
        ._company-logo_1l7u4_232 {
          order: -1;
          padding-top: 0;
          margin-bottom: 2.625rem; /* 42px */
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        /* Logo Image */
        ._logo-image_1l7u4_446 {
          object-fit: contain;
          display: block;
          max-width: 8.5625rem; /* 137px */
        }
        
        /* Tablet/Desktop Logo */
        @media only screen and (min-width: 768px) {
          ._logo-image_1l7u4_446 {
            height: 100%;
          }
        }
        
        /* Text Content - CENTERED */
        ._text-content_1l7u4_331 {
          display: flex;
          flex-direction: column;
          flex: 1;
          width: 100%;
          align-items: center;
          text-align: center;
        }
        
        /* Rating - Hidden in centered layout */
        ._molecule-testimonial-card--centered_1l7u4_243 ._rating_1l7u4_256 {
          display: none;
        }
        
        /* Quote Styling - CENTERED WHITE TEXT */
        ._quote_1l7u4_37 {
          max-width: 46.875rem; /* 750px */
          padding-top: 0;
          text-align: center;
          margin: 0 auto 2.625rem; /* 0 top, auto sides, 42px bottom */
          font-family: var(--font-copy-m-tertiary-font-family);
          font-size: var(--font-copy-m-tertiary-font-size-mobile);
          line-height: var(--font-copy-m-tertiary-line-height-mobile);
          font-weight: var(--font-copy-m-tertiary-font-weight);
          color: #FFFFFF; /* White text on gradient */
          background: transparent;
        }
        
        ._quote_1l7u4_37:hover {
          color: #FFFFFF;
        }
        
        /* Desktop Quote */
        @media only screen and (min-width: 1024px) {
          ._quote_1l7u4_37 {
            font-size: var(--font-copy-m-tertiary-font-size-desktop);
            line-height: var(--font-copy-m-tertiary-line-height-desktop);
          }
        }
        
        ._quote_1l7u4_37 p {
          margin: 0;
          text-align: center;
        }
        
        /* Author Info */
        ._author-info_1l7u4_386 {
          display: flex;
          flex-direction: column;
          width: 100%;
          align-items: center; /* Center content */
        }
        
        /* Tablet Author Info */
        @media only screen and (min-width: 768px) {
          ._author-info_1l7u4_386 {
            flex-direction: row;
            flex-wrap: nowrap;
            
            justify-content: center; /* Center content */
          }
        }
        
        /* Desktop Author Info */
        @media only screen and (min-width: 1024px) {
          ._author-info_1l7u4_386 {
            align-items: center; /* Center vertically */
            flex: 1;
            
          }
        }
        
        /* Attribution - CENTERED */
        ._attribution_1l7u4_370 {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 0.75rem; /* 12px */
          align-items: center; /* Center all items */
          text-align: center; /* Center text */
        }
        
        /* Desktop Attribution - Still centered */
        @media only screen and (min-width: 1024px) {
          ._attribution_1l7u4_370 {
            flex-direction: column; /* Keep column layout */
            justify-content: center; /* Center horizontally */
            align-items: center; /* Center items */
            gap: 1rem; /* 16px */
          }
        }
        
        /* Image Container - CENTERED CIRCLE */
        ._image-container_1l7u4_265 {
          margin-bottom: 1rem; /* 16px */
          width: 4rem; /* 64px */
          height: 4rem; /* 64px */
          border-radius: 4rem; /* 64px - perfect circle */
          flex-shrink: 0;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        /* Author Image - CENTERED */
        ._author-image_1l7u4_271 {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 50%; /* Perfect circle */
        }
        
        /* Author Details - CENTERED */
        ._author-details_1l7u4_275 {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center; /* Center content */
        }
        
        /* Tablet Author Details */
        @media only screen and (min-width: 768px) {
          ._author-details_1l7u4_275 {
            flex-basis: auto; /* Reset basis */
            width: 100%;
          }
        }
        
        /* Author Name - CENTERED WHITE TEXT */
        ._author-name_1l7u4_57 {
          padding-top: 0;
          margin-bottom: 0.5rem; /* 8px */
          font-family: var(--font-copy-m-quinquenary-font-family);
          font-size: var(--font-copy-m-quinquenary-font-size-mobile);
          line-height: var(--font-copy-m-quinquenary-line-height-mobile);
          font-weight: var(--font-copy-m-quinquenary-font-weight);
          color: #FFFFFF; /* White text on gradient */
          background: transparent;
          text-align: center;
        }
        
        ._author-name_1l7u4_57:hover {
          color: #FFFFFF;
        }
        
        /* Desktop Author Name */
        @media only screen and (min-width: 1024px) {
          ._author-name_1l7u4_57 {
            font-size: var(--font-copy-m-quinquenary-font-size-desktop);
            line-height: var(--font-copy-m-quinquenary-line-height-desktop);
          }
        }
        
        /* Author Title - CENTERED WHITE TEXT */
        ._author-title_1l7u4_77 {
          margin-bottom: 0;
          font-family: var(--font-copy-m-tertiary-font-family);
          font-size: var(--font-copy-m-tertiary-font-size-mobile);
          line-height: var(--font-copy-m-tertiary-line-height-mobile);
          font-weight: var(--font-copy-m-tertiary-font-weight);
          color: #FFFFFF; /* White text on gradient */
          background: transparent;
          font-size: 1rem;
          font-weight: 500;
          line-height: 1.3;
          text-align: center;
        }
        
        ._author-title_1l7u4_77:hover {
          color: #FFFFFF;
        }
        
        /* Desktop Author Title */
        @media only screen and (min-width: 1024px) {
          ._author-title_1l7u4_77 {
            font-size: var(--font-copy-m-tertiary-font-size-desktop);
            line-height: var(--font-copy-m-tertiary-line-height-desktop);
          }
        }
        
        /* Tablet Author Title */
        @media only screen and (min-width: 768px) {
          ._author-title_1l7u4_77 {
            font-size: 1.125rem; /* 18px */
          }
        }
        
        /* Safe HTML */
        .safe-html {
          display: block;
        }
        
        .safe-html p {
          margin: 0;
          text-align: center;
        }
        
        /* Line breaks spacing */
        .safe-html br {
          content: "";
          display: block;
        }
        
        /* Responsive adjustments */
        @media only screen and (max-width: 768px) {
          .testimonial-edge-wrapper {
            padding: 25px 30px; /* Smaller padding on mobile */
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            width: 100vw;
          }
          
          ._logo-image_1l7u4_446 {
            max-width: 6rem; /* Smaller logo on mobile */
          }
          
          ._quote_1l7u4_37 {
            font-size: 1rem; /* Smaller text on mobile */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .testimonial-edge-wrapper {
            padding: 20px; /* Even smaller padding on small mobile */
          }
        }
        
        /* For very wide screens - ensure full width */
        @media (min-width: 2000px) {
          .testimonial-edge-wrapper {
            margin-left: calc(-50vw + 50%);
            margin-right: calc(-50vw + 50%);
            width: 100vw;
          }
        }
      `}</style>
    </>
  );
};

export default TestimonialCard;