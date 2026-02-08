// components/VideoText.jsx
import React from 'react';

const VideoText = () => {
  return (
    <>
      <section className="organism-video-text _organism-video-text_1baab_31 _gradient_1baab_64">
        <div className="_container_1baab_68">
          <div className="_contentSection_1baab_87">
            <div className="_textContent_1baab_91">
              <div className="_textLeft_1baab_112">
                <div className="tagline _tagline_1baab_150 _tagline-gradient_1baab_175">
                  NDR Report
                </div>
                <h2 className="title _title_1baab_196 _title-gradient_1baab_221">
                  AI in use in the city administration of Soltau
                </h2>
              </div>
              <div className="_textRight_1baab_123">
                <div className="description _description_1baab_242 _description-gradient_1baab_273">
                  <div className="safe-html">
                    <span>
                      An NDR report shows how the AI application enaio gpt, developed by P&M together with Optimal Systems, significantly speeds up administrative processes in Soltau.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="_videoSection_1baab_313">
            <div className="_videoWrapper_1baab_317">
              <iframe 
                src="https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/ZDF%20Interview%20KI%2c%20Phillip%20Schulte.mp4" 
                frameBorder="0" 
                allowFullScreen="" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                title="Video Video: AI in use in the city administration of Soltau" 
                className="_videoIframe_1baab_332" 
                loading="lazy"
              ></iframe>
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
          /* Tagline Secondary Variables (Gradient) */
          --font-tagline-secondary-font-family: Satoshi Medium, sans-serif;
          --font-tagline-secondary-font-size-mobile: 0.875rem;
          --font-tagline-secondary-line-height-mobile: 1.25rem;
          --font-tagline-secondary-font-weight: 400;
          --font-tagline-secondary-letter-spacing: 0.05em;
          --font-tagline-secondary-text-transform: uppercase;
          --font-tagline-secondary-color: #FFFFFF;
          --font-tagline-secondary-background: none;
          --font-tagline-secondary-color-hover: #FFFFFF;
          --font-tagline-secondary-font-size-desktop: 0.875rem;
          --font-tagline-secondary-line-height-desktop: 1.25rem;
          --font-tagline-secondary-letter-spacing-desktop: 0.05em;
          
          /* H2 Secondary Variables (Gradient) */
          --font-h2-secondary-font-family: Okima, serif;
          --font-h2-secondary-font-size-mobile: 2rem;
          --font-h2-secondary-line-height-mobile: 2.25rem;
          --font-h2-secondary-font-weight: 400;
          --font-h2-secondary-letter-spacing: -0.02em;
          --font-h2-secondary-text-transform: none;
          --font-h2-secondary-color: #FFFFFF;
          --font-h2-secondary-background: none;
          --font-h2-secondary-color-hover: #FFFFFF;
          --font-h2-secondary-font-size-desktop: 2.5rem;
          --font-h2-secondary-line-height-desktop: 2.75rem;
          --font-h2-secondary-letter-spacing-desktop: -0.02em;
          
          /* H2 Primary Variables (White) */
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
          
          /* Copy S Secondary Variables (Gradient) */
          --font-copy-s-secondary-font-family: Satoshi Regular, sans-serif;
          --font-copy-s-secondary-font-size-mobile: 1rem;
          --font-copy-s-secondary-line-height-mobile: 1.5rem;
          --font-copy-s-secondary-font-weight: 400;
          --font-copy-s-secondary-letter-spacing: 0;
          --font-copy-s-secondary-text-transform: none;
          --font-copy-s-secondary-color: #FFFFFF;
          --font-copy-s-secondary-background: none;
          --font-copy-s-secondary-color-hover: #FFFFFF;
          --font-copy-s-secondary-font-size-desktop: 1rem;
          --font-copy-s-secondary-line-height-desktop: 1.5rem;
          --font-copy-s-secondary-letter-spacing-desktop: 0;
          
          /* Copy S Quaternary Variables (White) */
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
          
          /* Copy XS Primary Variables */
          --font-copy-xs-primary-font-family: Satoshi Regular, sans-serif;
          --font-copy-xs-primary-font-size-mobile: 0.75rem;
          --font-copy-xs-primary-line-height-mobile: 1rem;
          --font-copy-xs-primary-font-weight: 400;
          --font-copy-xs-primary-letter-spacing: 0;
          --font-copy-xs-primary-text-transform: none;
          --font-copy-xs-primary-color: #FFFFFF;
          --font-copy-xs-primary-background: none;
          --font-copy-xs-primary-color-hover: #FFFFFF;
          --font-copy-xs-primary-font-size-desktop: 0.75rem;
          --font-copy-xs-primary-line-height-desktop: 1rem;
          --font-copy-xs-primary-letter-spacing-desktop: 0;
          
          /* Tagline Tertiary Variables (White) */
          --font-tagline-tertiary-font-family: Satoshi Medium, sans-serif;
          --font-tagline-tertiary-font-size-mobile: 0.875rem;
          --font-tagline-tertiary-line-height-mobile: 1.25rem;
          --font-tagline-tertiary-font-weight: 400;
          --font-tagline-tertiary-letter-spacing: 0.05em;
          --font-tagline-tertiary-text-transform: uppercase;
          --font-tagline-tertiary-color: #FE5631;
          --font-tagline-tertiary-background: none;
          --font-tagline-tertiary-color-hover: #FE5631;
          --font-tagline-tertiary-font-size-desktop: 0.875rem;
          --font-tagline-tertiary-line-height-desktop: 1.25rem;
          --font-tagline-tertiary-letter-spacing-desktop: 0.05em;
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

        /* Video Text Component */
        ._organism-video-text_1baab_31 {
          padding: 2.1875rem 1.5rem;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._organism-video-text_1baab_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-video-text_1baab_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-video-text_1baab_31 {
            padding: 2.1875rem 0rem;
          }
        }

        @media only screen and (min-width: 768px) {
          ._organism-video-text_1baab_31 {
            gap: 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-video-text_1baab_31 {
            gap: 5rem;
          }
        }

        /* Gradient Variant */
        ._organism-video-text_1baab_31._gradient_1baab_64 {
          background: linear-gradient(183deg, #080808 13.52%, #1a41a2e5 69.53%, #50a3e7 87.37%, #6dd1ea 97.84%);
        }

        /* Container */
        ._container_1baab_68 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._container_1baab_68 {
            gap: 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._container_1baab_68 {
            gap: 5rem;
          }
        }

        /* Content Section */
        ._contentSection_1baab_87 {
          width: 100%;
        }

        /* Text Content */
        ._textContent_1baab_91 {
          display: grid;
          grid-gap: 1.5rem;
          gap: 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._textContent_1baab_91 {
            gap: 2rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._textContent_1baab_91 {
            gap: 2.5rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._textContent_1baab_91 {
            grid-template-columns: 1fr 1fr;
            align-items: start;
          }
        }

        /* Text Left */
        ._textLeft_1baab_112 {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        @media only screen and (min-width: 1024px) {
          ._textLeft_1baab_112 {
            gap: 1rem;
          }
        }

        /* Text Right */
        ._textRight_1baab_123 {
          max-width: 40em !important;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media only screen and (min-width: 1024px) {
          ._textRight_1baab_123 {
            max-width: 42em !important;
          }
        }

        @media only screen and (min-width: 768px) {
          ._textRight_1baab_123 {
            gap: 2rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._textRight_1baab_123 {
            gap: 2.5rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._textRight_1baab_123 {
            gap: 2rem;
          }
        }

        /* Tagline */
        ._tagline_1baab_150 {
          margin: 0;
        }

        /* Tagline White Variant */
        ._tagline-white_1baab_154 {
          font-family: var(--font-tagline-tertiary-font-family);
          font-size: var(--font-tagline-tertiary-font-size-mobile);
          line-height: var(--font-tagline-tertiary-line-height-mobile);
          font-weight: var(--font-tagline-tertiary-font-weight);
          letter-spacing: var(--font-tagline-tertiary-letter-spacing);
          text-transform: var(--font-tagline-tertiary-text-transform);
          color: var(--font-tagline-tertiary-color);
          background: var(--font-tagline-tertiary-background);
        }

        ._tagline-white_1baab_154:hover {
          color: var(--font-tagline-tertiary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._tagline-white_1baab_154 {
            font-size: var(--font-tagline-tertiary-font-size-desktop);
            line-height: var(--font-tagline-tertiary-line-height-desktop);
            letter-spacing: var(--font-tagline-tertiary-letter-spacing-desktop);
          }
        }

        /* Tagline Gradient Variant */
        ._tagline-gradient_1baab_175 {
          font-family: var(--font-tagline-secondary-font-family);
          font-size: var(--font-tagline-secondary-font-size-mobile);
          line-height: var(--font-tagline-secondary-line-height-mobile);
          font-weight: var(--font-tagline-secondary-font-weight);
          letter-spacing: var(--font-tagline-secondary-letter-spacing);
          text-transform: var(--font-tagline-secondary-text-transform);
          color: var(--font-tagline-secondary-color);
          background: var(--font-tagline-secondary-background);
        }

        ._tagline-gradient_1baab_175:hover {
          color: var(--font-tagline-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._tagline-gradient_1baab_175 {
            font-size: var(--font-tagline-secondary-font-size-desktop);
            line-height: var(--font-tagline-secondary-line-height-desktop);
            letter-spacing: var(--font-tagline-secondary-letter-spacing-desktop);
          }
        }

        /* Title */
        ._title_1baab_196 {
          margin: 0;
        }

        /* Title White Variant */
        ._title-white_1baab_200 {
          font-family: var(--font-h2-primary-font-family);
          font-size: var(--font-h2-primary-font-size-mobile);
          line-height: var(--font-h2-primary-line-height-mobile);
          font-weight: var(--font-h2-primary-font-weight);
          letter-spacing: var(--font-h2-primary-letter-spacing);
          text-transform: var(--font-h2-primary-text-transform);
          color: var(--font-h2-primary-color);
          background: var(--font-h2-primary-background);
        }

        ._title-white_1baab_200:hover {
          color: var(--font-h2-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._title-white_1baab_200 {
            font-size: var(--font-h2-primary-font-size-desktop);
            line-height: var(--font-h2-primary-line-height-desktop);
            letter-spacing: var(--font-h2-primary-letter-spacing-desktop);
          }
        }

        /* Title Gradient Variant */
        ._title-gradient_1baab_221 {
          font-family: var(--font-h2-secondary-font-family);
          font-size: var(--font-h2-secondary-font-size-mobile);
          line-height: var(--font-h2-secondary-line-height-mobile);
          font-weight: var(--font-h2-secondary-font-weight);
          letter-spacing: var(--font-h2-secondary-letter-spacing);
          text-transform: var(--font-h2-secondary-text-transform);
          color: var(--font-h2-secondary-color);
          background: var(--font-h2-secondary-background);
        }

        ._title-gradient_1baab_221:hover {
          color: var(--font-h2-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._title-gradient_1baab_221 {
            font-size: var(--font-h2-secondary-font-size-desktop);
            line-height: var(--font-h2-secondary-line-height-desktop);
            letter-spacing: var(--font-h2-secondary-letter-spacing-desktop);
          }
        }

        /* Description */
        ._description_1baab_242 {
          margin: 0;
          max-width: 40em !important;
        }

        @media only screen and (min-width: 1024px) {
          ._description_1baab_242 {
            max-width: 42em !important;
          }
        }

        /* Description White Variant */
        ._description-white_1baab_252 {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
        }

        ._description-white_1baab_252:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._description-white_1baab_252 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        /* Description Gradient Variant */
        ._description-gradient_1baab_273 {
          font-family: var(--font-copy-s-secondary-font-family);
          font-size: var(--font-copy-s-secondary-font-size-mobile);
          line-height: var(--font-copy-s-secondary-line-height-mobile);
          font-weight: var(--font-copy-s-secondary-font-weight);
          letter-spacing: var(--font-copy-s-secondary-letter-spacing);
          text-transform: var(--font-copy-s-secondary-text-transform);
          color: var(--font-copy-s-secondary-color);
          background: var(--font-copy-s-secondary-background);
        }

        ._description-gradient_1baab_273:hover {
          color: var(--font-copy-s-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._description-gradient_1baab_273 {
            font-size: var(--font-copy-s-secondary-font-size-desktop);
            line-height: var(--font-copy-s-secondary-line-height-desktop);
            letter-spacing: var(--font-copy-s-secondary-letter-spacing-desktop);
          }
        }

        /* Highlighted Text */
        ._highlighted_1baab_294 {
          color: #fe5631;
          -webkit-text-decoration: underline;
          text-decoration: underline;
          -webkit-text-decoration-skip-ink: none;
          text-decoration-skip-ink: none;
          text-decoration-style: solid;
          text-underline-position: from-font;
        }

        /* CTA Wrapper */
        ._ctaWrapper_1baab_302 {
          display: flex;
          align-items: flex-start;
          margin-top: 1rem;
        }

        @media only screen and (min-width: 768px) {
          ._ctaWrapper_1baab_302 {
            margin-top: 1.5rem;
          }
        }

        /* Video Section */
        ._videoSection_1baab_313 {
          width: 100%;
        }

        /* Video Wrapper */
        ._videoWrapper_1baab_317 {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 0.75rem;
          overflow: hidden;
          box-shadow: 0 1.25rem 2.5rem #0000001a;
        }

        @media only screen and (min-width: 1024px) {
          ._videoWrapper_1baab_317 {
            border-radius: 1rem;
          }
        }

        /* Video Iframe */
        ._videoIframe_1baab_332 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: none;
          border-radius: 0.75rem;
        }

        @media only screen and (min-width: 1024px) {
          ._videoIframe_1baab_332 {
            border-radius: 1rem;
          }
        }

        /* Image Element */
        ._imageElement_1baab_347 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: none;
          border-radius: 0.75rem;
        }

        @media only screen and (min-width: 1024px) {
          ._imageElement_1baab_347 {
            border-radius: 1rem;
          }
        }

        /* Video Placeholder */
        ._videoPlaceholder_1baab_363 {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          background: linear-gradient(135deg, #fe5631, #1a41a2);
          border-radius: 0.75rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 1.25rem 2.5rem #0000001a;
        }

        @media only screen and (min-width: 1024px) {
          ._videoPlaceholder_1baab_363 {
            border-radius: 1rem;
          }
        }

        /* Play Button */
        ._playButton_1baab_382 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        ._playButton_1baab_382:hover {
          transform: translate(-50%, -50%) scale(1.1);
        }

        /* Placeholder Text */
        ._placeholderText_1baab_394 {
          position: absolute;
          bottom: 1.25rem;
          left: 50%;
          transform: translate(-50%);
          color: #fff;
          font-family: var(--font-copy-xs-primary-font-family);
          font-size: var(--font-copy-xs-primary-font-size-mobile);
          line-height: var(--font-copy-xs-primary-line-height-mobile);
          font-weight: var(--font-copy-xs-primary-font-weight);
          letter-spacing: var(--font-copy-xs-primary-letter-spacing);
          text-transform: var(--font-copy-xs-primary-text-transform);
          color: var(--font-copy-xs-primary-color);
          background: var(--font-copy-xs-primary-background);
        }

        ._placeholderText_1baab_394:hover {
          color: var(--font-copy-xs-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._placeholderText_1baab_394 {
            font-size: var(--font-copy-xs-primary-font-size-desktop);
            line-height: var(--font-copy-xs-primary-line-height-desktop);
            letter-spacing: var(--font-copy-xs-primary-letter-spacing-desktop);
          }
        }
      `}</style>
    </>
  );
};

export default VideoText;