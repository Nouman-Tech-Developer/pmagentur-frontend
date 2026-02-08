import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="organism-hero _organism-hero_1iktr_31 _bg-gradient_1iktr_52 _align-center_1iktr_101 _fullHeight_1iktr_49 colored">
        <div className="_container_1iktr_64">
          <div className="_content_1iktr_74">
            <div className="_headingSection_1iktr_119">
              <p className="_heading_1iktr_119">Progress Made</p>
            </div>
            
            <div className="_contentSection_1iktr_127">
              <div>
                <div className="_description_1iktr_136">
                  <div className="safe-html">
                    <p>With individual development as our foundation, we realize leading solutions in AI, B2B e-commerce and digital platforms that move brands and markets.</p>
                  </div>
                </div>
                
                <div className="_buttonGroup_1iktr_144">
                  <a 
                    className="atom-button _atom-button_ilbwb_76 _primary_ilbwb_112" 
                    href="https://www.pmagentur.com/de/kontakt?hsLang=en" 
                    tabIndex="0" 
                    aria-disabled="false"
                  >
                    Contact us
                  </a>
                  
                  <a 
                    className="atom-button _atom-button_ilbwb_76 _secondary_ilbwb_125" 
                    href="https://www.pmagentur.com/de/cases/?hsLang=en" 
                    tabIndex="0" 
                    aria-disabled="false" 
                    data-on-dark-bg="true"
                  >
                    Our references
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
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

        /* Your CSS Variables */
        :root {
          --font-p-hero-secondary-font-size-mobile: 3.4375rem;
          --font-p-hero-secondary-font-size-desktop: 6.25rem;
          --font-p-hero-secondary-line-height-mobile: 120%;
          --font-p-hero-secondary-line-height-desktop: 120%;
          --font-p-hero-secondary-font-family: Okima;
          --font-p-hero-secondary-font-weight: 500;
          --font-p-hero-secondary-color: #FFFFFF;
          --font-p-hero-secondary-color-hover: #FFFFFF;
          
          --font-copy-m-tertiary-font-family: Satoshi Medium;
          --font-copy-m-tertiary-font-size-mobile: 1.125rem;
          --font-copy-m-tertiary-font-size-desktop: 1.25rem;
          --font-copy-m-tertiary-line-height-mobile: 140%;
          --font-copy-m-tertiary-line-height-desktop: 140%;
          --font-copy-m-tertiary-font-weight: 500;
          --font-copy-m-tertiary-color: #FFFFFF;
          --font-copy-m-tertiary-color-hover: #FFFFFF;
        }

        /* Apply your exact CSS */
        ._organism-hero_1iktr_31 {
          width: 100%;
          min-height: 50vh;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 6.25rem 1.5rem 2.625rem;
          position: relative;
        }

        @media only screen and (min-width: 768px) {
          ._organism-hero_1iktr_31 {
            padding: 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-hero_1iktr_31 {
            padding: 5rem 3.75rem;
          }
        }

        ._organism-hero_1iktr_31._fullHeight_1iktr_49 {
          min-height: 100vh;
        }

        ._organism-hero_1iktr_31._bg-gradient_1iktr_52 {
          background: linear-gradient(30.019deg,#080808 9.455%,#1a41a2e6 44.237%,#50a3e7 75.07%,#6dd1ea 94.292%);
        }

        ._container_1iktr_64 {
          max-width: 75rem;
          margin: 0 auto;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
        }

        ._content_1iktr_74 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 3rem;
        }

        @media only screen and (min-width: 768px) {
          ._content_1iktr_74 {
            gap: 3rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._content_1iktr_74 {
            flex-direction: row;
            gap: 3.75rem;
            align-items: center;
            justify-content: space-between;
            width: 100%;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._content_1iktr_74 {
            gap: 5rem;
          }
        }

        ._align-center_1iktr_101 {
          padding-bottom: 9.375rem;
        }

        ._align-center_1iktr_101 ._container_1iktr_64 {
          align-items: center;
          justify-content: center;
        }

        ._align-center_1iktr_101 ._content_1iktr_74 {
          align-items: center;
          text-align: center;
          gap: 0;
        }

        @media only screen and (min-width: 768px) {
          ._align-center_1iktr_101 ._content_1iktr_74 {
            flex-direction: column;
            justify-content: center;
          }
        }

        ._align-center_1iktr_101 ._headingSection_1iktr_119 {
          align-items: center;
        }

        @media only screen and (min-width: 1024px) {
          ._align-center_1iktr_101 ._headingSection_1iktr_119 {
            max-width: 100%;
          }
        }

        ._align-center_1iktr_101 ._contentSection_1iktr_127 {
          max-width: 38em!important;
          align-items: center;
        }

        @media only screen and (min-width: 1024px) {
          ._align-center_1iktr_101 ._contentSection_1iktr_127 {
            max-width: 41em!important;
          }
        }

        ._align-center_1iktr_101 ._description_1iktr_136 {
          padding-top: 2rem;
        }

        @media only screen and (min-width: 768px) {
          ._align-center_1iktr_101 ._description_1iktr_136 {
            padding-top: 2.625rem;
          }
        }

        ._align-center_1iktr_101 ._buttonGroup_1iktr_144 {
          align-items: center;
          justify-content: center;
        }

        ._headingSection_1iktr_119 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
          width: 100%;
        }

        @media only screen and (min-width: 1024px) {
          ._headingSection_1iktr_119 {
            flex: 1;
            max-width: 50%;
          }
        }

        ._contentSection_1iktr_127 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        @media only screen and (min-width: 1024px) {
          ._contentSection_1iktr_127 {
            flex: 1;
            max-width: 50%;
          }
        }

        ._heading_1iktr_119 {
          font-family: var(--font-p-hero-secondary-font-family);
          font-size: var(--font-p-hero-secondary-font-size-mobile);
          line-height: var(--font-p-hero-secondary-line-height-mobile);
          font-weight: var(--font-p-hero-secondary-font-weight);
          letter-spacing: var(--font-p-hero-secondary-letter-spacing);
          text-transform: var(--font-p-hero-secondary-text-transform);
          color: var(--font-p-hero-secondary-color);
          background: var(--font-p-hero-secondary-background);
          margin: 0;
          word-break: break-word;
          word-wrap: break-word;
          -webkit-hyphens: auto;
          hyphens: auto;
        }

        ._heading_1iktr_119:hover {
          color: var(--font-p-hero-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._heading_1iktr_119 {
            font-size: var(--font-p-hero-secondary-font-size-desktop);
            line-height: var(--font-p-hero-secondary-line-height-desktop);
            letter-spacing: var(--font-p-hero-secondary-letter-spacing-desktop);
          }
        }

        /* Custom 100px font size for Progress Made */
        ._organism-hero_1iktr_31 ._heading_1iktr_119 {
          font-size: 100px !important;
          line-height: 1 !important;
        }

        @media only screen and (max-width: 1024px) {
          ._organism-hero_1iktr_31 ._heading_1iktr_119 {
            font-size: 70px !important;
          }
        }

        @media only screen and (max-width: 768px) {
          ._organism-hero_1iktr_31 ._heading_1iktr_119 {
            font-size: 50px !important;
          }
        }

        @media only screen and (max-width: 480px) {
          ._organism-hero_1iktr_31 ._heading_1iktr_119 {
            font-size: 40px !important;
          }
        }

        ._description_1iktr_136 {
          font-family: var(--font-copy-m-tertiary-font-family);
          font-size: var(--font-copy-m-tertiary-font-size-mobile);
          line-height: var(--font-copy-m-tertiary-line-height-mobile);
          font-weight: var(--font-copy-m-tertiary-font-weight);
          letter-spacing: var(--font-copy-m-tertiary-letter-spacing);
          text-transform: var(--font-copy-m-tertiary-text-transform);
          color: var(--font-copy-m-tertiary-color);
          background: var(--font-copy-m-tertiary-background);
          max-width: 38em!important;
          max-width: 100%;
          padding-bottom: 2rem;
        }

        ._description_1iktr_136:hover {
          color: var(--font-copy-m-tertiary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._description_1iktr_136 {
            font-size: var(--font-copy-m-tertiary-font-size-desktop);
            line-height: var(--font-copy-m-tertiary-line-height-desktop);
            letter-spacing: var(--font-copy-m-tertiary-letter-spacing-desktop);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._description_1iktr_136 {
            max-width: 41em!important;
          }
        }

        @media only screen and (min-width: 768px) {
          ._description_1iktr_136 {
            max-width: 37.5rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._description_1iktr_136 {
            max-width: none;
            max-width: initial;
            padding-top: 4.6875rem;
          }
        }

        /* Button Group - FIXED WIDTH ISSUE */
        ._buttonGroup_1iktr_144 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: auto; /* Changed from 100% to auto */
          align-items: flex-start;
        }

        @media only screen and (min-width: 768px) {
          ._buttonGroup_1iktr_144 {
            flex-direction: row;
            gap: 1.25rem;
            width: auto; /* Keep auto for tablet */
          }
        }

        @media only screen and (min-width: 1024px) {
          ._buttonGroup_1iktr_144 {
            gap: 1.5rem;
            width: auto; /* Keep auto for desktop */
          }
        }

        /* For center alignment */
        ._align-center_1iktr_101 ._buttonGroup_1iktr_144 {
          align-items: center;
          justify-content: center;
          width: auto; /* Center aligned should also be auto */
        }

        /* Button Base Styles */
        .atom-button {
          font-family: 'Satoshi Regular', sans-serif;
          font-weight: 400;
          font-size: 16px;
          padding: 12px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          min-width: 160px;
          outline: none;
          border: none;
          box-sizing: border-box;
          width: auto !important; /* Force auto width */
          flex-shrink: 0; /* Prevent shrinking */
        }

        /* Primary Button Styles */
        ._primary_ilbwb_112 {
          background-color: #fe5631 !important;
          color: white !important;
          border: 2px solid #fe5631 !important;
        }

        ._primary_ilbwb_112:hover {
          background-color: #e64a19 !important;
          border-color: #e64a19 !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(254, 86, 49, 0.3);
        }

        /* Secondary Button Styles */
        ._secondary_ilbwb_125 {
          background-color: transparent !important;
          color: white !important;
          border: 2px solid rgba(255, 255, 255, 0.5) !important;
        }

        ._secondary_ilbwb_125:hover {
          background-color: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.8) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.2);
        }

        /* Mobile responsive adjustments */
        @media only screen and (max-width: 767px) {
          .atom-button {
            width: auto !important; /* Not full width on mobile */
            max-width: none !important;
            margin: 0;
          }
          
          ._buttonGroup_1iktr_144 {
            align-items: center;
            width: auto !important;
          }
          
          /* Optional: Make buttons stack vertically on mobile */
          ._buttonGroup_1iktr_144 {
            flex-direction: column;
            gap: 1rem;
          }
          
          .atom-button {
            width: auto !important;
            padding: 12px 32px;
          }
        }

        /* Safe HTML styles */
        .safe-html p {
          margin: 0;
          padding: 0;
          line-height: 1.6;
          font-size: 1.125rem;
        }

        @media only screen and (min-width: 768px) {
          .safe-html p {
            font-size: 1.25rem;
          }
        }

        /* Ensure buttons are visible and not stretched */
        ._buttonGroup_1iktr_144 * {
          opacity: 1 !important;
          visibility: visible !important;
          display: inline-flex !important;
          flex-shrink: 0 !important;
        }

        /* Prevent any full-width styling */
        .atom-button,
        ._atom-button_ilbwb_76 {
          width: auto !important;
          max-width: none !important;
        }

        /* Specifically target center alignment buttons */
        ._align-center_1iktr_101 .atom-button {
          width: auto !important;
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
};

export default HeroSection;