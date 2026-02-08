// components/TextHalfImage.jsx
import React from 'react';

const TextHalfImage = () => {
  return (
    <>
      <section className="organism-text-half-image _organism-text-half-image_1o1n6_31">
        <div className="_container_1o1n6_103">
          <div className="_content_1o1n6_109 _imageLeft_1o1n6_120">
            <div className="_textContent_1o1n6_123">
              <p className="_tagline_1o1n6_76">About P&M</p>
              <h2 className="_header_1o1n6_76">Technology is created by people</h2>
              <div className="_richText_1o1n6_76">
                <div className="safe-html">
                  <span>
                    P&M was founded in 2013 and has grown continuously since then. Today, more than 50 colleagues in Hamburg and Berlin work on developing digital products and platforms with added value for our customers, with a passion for technology and passion.
                  </span>
                </div>
              </div>
              <div className="_buttonContainer_1o1n6_278">
                <a 
                  className="pm-button" 
                  href="https://www.pmagentur.com/de/ueber-uns/?hsLang=en" 
                  tabIndex="0" 
                  aria-disabled="false"
                >
                  More about P&M
                </a>
              </div>
            </div>
            <div className="_imageContent_1o1n6_120">
              <img 
                src="/images/HalfText.png" 
                alt="Highres_P_M_Juli_23_0895_Verkleinert-jpg" 
                className="_image_1o1n6_120"
              />
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Font Faces */
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
          /* Tagline Variables */
          --font-tagline-primary-font-family: Satoshi Medium, sans-serif;
          --font-tagline-primary-font-size-mobile: 0.875rem;
          --font-tagline-primary-line-height-mobile: 1.25rem;
          --font-tagline-primary-font-weight: 400;
          --font-tagline-primary-letter-spacing: 0.05em;
          --font-tagline-primary-text-transform: uppercase;
          --font-tagline-primary-color: #FE5631;
          --font-tagline-primary-background: none;
          --font-tagline-primary-color-hover: #FE5631;
          --font-tagline-primary-font-size-desktop: 0.875rem;
          --font-tagline-primary-line-height-desktop: 1.25rem;
          --font-tagline-primary-letter-spacing-desktop: 0.05em;
          
          /* H2 Variables */
          --font-h2-primary-font-family: Okima, serif;
          --font-h2-primary-font-size-mobile: 2rem;
          --font-h2-primary-line-height-mobile: 2.25rem;
          --font-h2-primary-font-weight: 400;
          --font-h2-primary-letter-spacing: -0.02em;
          --font-h2-primary-text-transform: none;
          --font-h2-primary-color: #080808;
          --font-h2-primary-background: none;
          --font-h2-primary-color-hover: #080808;
          --font-h2-primary-font-size-desktop: 2.5rem;
          --font-h2-primary-line-height-desktop: 2.75rem;
          --font-h2-primary-letter-spacing-desktop: -0.02em;
          
          /* H6 Variables */
          --font-h6-quinary-font-family: Satoshi Regular, sans-serif;
          --font-h6-quinary-font-size-mobile: 1rem;
          --font-h6-quinary-line-height-mobile: 1.5rem;
          --font-h6-quinary-font-weight: 400;
          --font-h6-quinary-letter-spacing: 0;
          --font-h6-quinary-text-transform: none;
          --font-h6-quinary-color: #080808;
          --font-h6-quinary-background: none;
          --font-h6-quinary-color-hover: #080808;
          --font-h6-quinary-font-size-desktop: 1rem;
          --font-h6-quinary-line-height-desktop: 1.5rem;
          --font-h6-quinary-letter-spacing-desktop: 0;
          
          /* Copy S Variables */
          --font-copy-s-quaternary-font-family: Satoshi Regular, sans-serif;
          --font-copy-s-quaternary-font-size-mobile: 1rem;
          --font-copy-s-quaternary-line-height-mobile: 1.5rem;
          --font-copy-s-quaternary-font-weight: 400;
          --font-copy-s-quaternary-letter-spacing: 0;
          --font-copy-s-quaternary-text-transform: none;
          --font-copy-s-quaternary-color: #5A5A5A;
          --font-copy-s-quaternary-background: none;
          --font-copy-s-quaternary-color-hover: #5A5A5A;
          --font-copy-s-quaternary-font-size-desktop: 1rem;
          --font-copy-s-quaternary-line-height-desktop: 1.5rem;
          --font-copy-s-quaternary-letter-spacing-desktop: 0;
          
          /* Button Variables - Navbar के अनुसार update */
          --button-primary-bg: #FE5631; /* Orange color (FF5722 के बजाय FE5631) */
          --button-primary-color: #FFFFFF;
          --button-primary-border: none;
          --button-primary-hover-bg: #E64A19;
          --button-primary-hover-color: #FFFFFF;
          --button-primary-hover-border: none;
        }

        /* Reset and Base Styles */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Satoshi Regular, sans-serif;
          color: #080808;
          background-color: #fff;
          line-height: 1.5;
        }

        .safe-html {
          max-width: 100%;
        }

        /* Text Half Image Component */
        ._organism-text-half-image_1o1n6_31 {
          background-color: #fff;
          padding: 2.1875rem 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._organism-text-half-image_1o1n6_31 {
            padding: 2.1875rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-text-half-image_1o1n6_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-text-half-image_1o1n6_31 {
            padding: 2.1875rem 0rem;
          }
        }

        /* Feature Icon */
        ._organism-text-half-image_1o1n6_31 ._featureIcon_1o1n6_50 {
          filter: brightness(0) saturate(100%) invert(46%) sepia(77%) saturate(6151%) hue-rotate(352deg) brightness(98%) contrast(98%);
        }

        /* Feature Text */
        ._organism-text-half-image_1o1n6_31 ._featureText_1o1n6_53 {
          font-family: var(--font-h6-quinary-font-family);
          font-size: var(--font-h6-quinary-font-size-mobile);
          line-height: var(--font-h6-quinary-line-height-mobile);
          font-weight: var(--font-h6-quinary-font-weight);
          letter-spacing: var(--font-h6-quinary-letter-spacing);
          text-transform: var(--font-h6-quinary-text-transform);
          color: var(--font-h6-quinary-color);
          background: var(--font-h6-quinary-background);
        }

        ._organism-text-half-image_1o1n6_31 ._featureText_1o1n6_53:hover {
          color: var(--font-h6-quinary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-text-half-image_1o1n6_31 ._featureText_1o1n6_53 {
            font-size: var(--font-h6-quinary-font-size-desktop);
            line-height: var(--font-h6-quinary-line-height-desktop);
            letter-spacing: var(--font-h6-quinary-letter-spacing-desktop);
          }
        }

        /* Gradient Variant */
        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 {
          background: linear-gradient(183deg, #080808 13.52%, #1a41a2e5 69.53%, #50a3e7 87.37%, #6dd1ea 97.84%);
        }

        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._tagline_1o1n6_76,
        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._header_1o1n6_76,
        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._richText_1o1n6_76 {
          color: #fff;
        }

        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._featureIcon_1o1n6_50 {
          filter: brightness(0) saturate(100%) invert(1);
        }

        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._featureText_1o1n6_53 {
          font-family: var(--font-h6-quaternary-font-family);
          font-size: var(--font-h6-quaternary-font-size-mobile);
          line-height: var(--font-h6-quaternary-line-height-mobile);
          font-weight: var(--font-h6-quaternary-font-weight);
          letter-spacing: var(--font-h6-quaternary-letter-spacing);
          text-transform: var(--font-h6-quaternary-text-transform);
          color: var(--font-h6-quaternary-color);
          background: var(--font-h6-quaternary-background);
        }

        ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._featureText_1o1n6_53:hover {
          color: var(--font-h6-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-text-half-image_1o1n6_31._gradient_1o1n6_73 ._featureText_1o1n6_53 {
            font-size: var(--font-h6-quaternary-font-size-desktop);
            line-height: var(--font-h6-quaternary-line-height-desktop);
            letter-spacing: var(--font-h6-quaternary-letter-spacing-desktop);
          }
        }

        /* Container */
        ._container_1o1n6_103 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }

        /* Content */
        ._content_1o1n6_109 {
          display: flex;
          flex-direction: column;
        }

        @media only screen and (min-width: 1024px) {
          ._content_1o1n6_109 {
            flex-direction: row;
            gap: 2.625rem;
            align-items: flex-start;
          }
        }

        /* Image Left Variant */
        ._content_1o1n6_109._imageLeft_1o1n6_120 ._imageContent_1o1n6_120 {
          order: -1;
        }

        ._content_1o1n6_109._imageLeft_1o1n6_120 ._textContent_1o1n6_123 {
          order: 1;
          text-align: left;
        }

        ._content_1o1n6_109._imageLeft_1o1n6_120 ._textContent_1o1n6_123 ._tagline_1o1n6_76,
        ._content_1o1n6_109._imageLeft_1o1n6_120 ._textContent_1o1n6_123 ._header_1o1n6_76,
        ._content_1o1n6_109._imageLeft_1o1n6_120 ._textContent_1o1n6_123 ._richText_1o1n6_76 {
          text-align: left;
        }

        /* Image Right Variant */
        ._content_1o1n6_109._imageRight_1o1n6_130 ._textContent_1o1n6_123 {
          order: 2;
          text-align: right;
          padding-top: 2.625rem;
        }

        @media only screen and (min-width: 1024px) {
          ._content_1o1n6_109._imageRight_1o1n6_130 ._textContent_1o1n6_123 {
            order: -1;
            padding-top: 0rem;
          }
        }

        ._content_1o1n6_109._imageRight_1o1n6_130 ._textContent_1o1n6_123 ._tagline_1o1n6_76,
        ._content_1o1n6_109._imageRight_1o1n6_130 ._textContent_1o1n6_123 ._header_1o1n6_76,
        ._content_1o1n6_109._imageRight_1o1n6_130 ._textContent_1o1n6_123 ._richText_1o1n6_76 {
          text-align: right;
        }

        ._content_1o1n6_109._imageRight_1o1n6_130 ._imageContent_1o1n6_120 {
          order: 1;
          padding-bottom: 0;
        }

        /* Image Content */
        ._imageContent_1o1n6_120 {
          width: 100%;
          padding-bottom: 2.625rem;
        }

        @media only screen and (min-width: 1024px) {
          ._imageContent_1o1n6_120 {
            flex: 1;
            padding-bottom: 0;
          }
        }

        /* Text Content */
        ._textContent_1o1n6_123 {
          order: 1;
        }

        @media only screen and (min-width: 1024px) {
          ._textContent_1o1n6_123 {
            flex: 1;
          }
        }

        /* Tagline */
        ._tagline_1o1n6_76 {
          padding-bottom: 0.75rem;
          font-family: var(--font-tagline-primary-font-family);
          font-size: var(--font-tagline-primary-font-size-mobile);
          line-height: var(--font-tagline-primary-line-height-mobile);
          font-weight: var(--font-tagline-primary-font-weight);
          letter-spacing: var(--font-tagline-primary-letter-spacing);
          text-transform: var(--font-tagline-primary-text-transform);
          color: var(--font-tagline-primary-color);
          background: var(--font-tagline-primary-background);
        }

        ._tagline_1o1n6_76:hover {
          color: var(--font-tagline-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._tagline_1o1n6_76 {
            font-size: var(--font-tagline-primary-font-size-desktop);
            line-height: var(--font-tagline-primary-line-height-desktop);
            letter-spacing: var(--font-tagline-primary-letter-spacing-desktop);
          }
        }

        /* Header */
        ._header_1o1n6_76 {
          padding-bottom: 1.5rem;
          text-align: left;
          font-family: var(--font-h2-primary-font-family);
          font-size: var(--font-h2-primary-font-size-mobile);
          line-height: var(--font-h2-primary-line-height-mobile);
          font-weight: var(--font-h2-primary-font-weight);
          letter-spacing: var(--font-h2-primary-letter-spacing);
          text-transform: var(--font-h2-primary-text-transform);
          color: var(--font-h2-primary-color);
          background: var(--font-h2-primary-background);
        }

        ._header_1o1n6_76:hover {
          color: var(--font-h2-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._header_1o1n6_76 {
            font-size: var(--font-h2-primary-font-size-desktop);
            line-height: var(--font-h2-primary-line-height-desktop);
            letter-spacing: var(--font-h2-primary-letter-spacing-desktop);
          }
        }

        /* Rich Text */
        ._richText_1o1n6_76 {
          max-width: 40em !important;
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
        }

        @media only screen and (min-width: 1024px) {
          ._richText_1o1n6_76 {
            max-width: 42em !important;
          }
        }

        ._richText_1o1n6_76:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._richText_1o1n6_76 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        /* Feature List */
        ._featureList_1o1n6_241 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1rem 0 0rem;
        }

        @media only screen and (min-width: 1024px) {
          ._featureList_1o1n6_241 {
            gap: 1.5rem;
            padding: 1.5rem 0 0.5rem;
          }
        }

        /* Feature Item */
        ._featureItem_1o1n6_254 {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.75rem;
        }

        @media only screen and (min-width: 1024px) {
          ._featureItem_1o1n6_254 {
            gap: 1rem;
          }
        }

        /* Feature Icon */
        ._featureIcon_1o1n6_50 {
          width: 1.5rem;
          height: 1.5rem;
          flex-shrink: 0;
        }

        @media only screen and (min-width: 1024px) {
          ._featureIcon_1o1n6_50 {
            width: 2rem;
            height: 2rem;
          }
        }

        /* Button Container */
        ._buttonContainer_1o1n6_278 {
          margin-top: 1.5rem;
          display: inline-block;
        }

        /* Image */
        ._image_1o1n6_120 {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 0.75rem;
          aspect-ratio: 3/2;
        }

        @media only screen and (min-width: 768px) {
          ._image_1o1n6_120 {
            border-radius: 1rem;
          }
        }

        /* PM Button - Navbar के अनुसार update */
        .pm-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FE5631; /* Orange color (Navbar के button जैसा) */
          color: white;
          border: none;
          padding: 12px 30px; /* 35-60 के अनुसार: 12px top-bottom, 30px left-right */
          border-radius: 25px; /* Navbar के button जैसा pill shape */
          font-family: 'Satoshi', sans-serif;
          font-weight: 400;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          height: 44px; /* Navbar button height के करीब */
          text-decoration: none;
          outline: none;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* PM button hover - darker orange */
        .pm-button:hover {
          background: #E64A19; /* Darker orange on hover (Navbar के अनुसार) */
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(254, 86, 49, 0.3);
        }

        .pm-button:focus {
          outline: 0.125rem solid #FE5631;
          outline-offset: 0.125rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .pm-button {
            padding: 10px 24px;
            font-size: 15px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .pm-button {
            padding: 8px 20px;
            font-size: 14px;
            height: 36px;
          }
        }

        /* Remove old button styles */
        ._atom-button_ilbwb_76,
        ._primary_ilbwb_112 {
          display: none;
        }

        /* Module Text Half Image */
        ._module-text-half-image_1n1u8_1 {
          display: block;
        }
      `}</style>
    </>
  );
};

export default TextHalfImage;