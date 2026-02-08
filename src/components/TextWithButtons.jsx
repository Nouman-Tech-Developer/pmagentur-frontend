// components/TextWithButtons.jsx
import React from 'react';

const TextWithButtons = () => {
  return (
    <>
      <section className="organism-text-with-buttons _organism-text-with-buttons_1463b_31">
        <div className="_container_1463b_54">
          <div className="_content_1463b_63">
            <div className="_headingSection_1463b_85">
              <div className="_tagline_1463b_114">Why P&amp;M?</div>
              <h2 className="_heading_1463b_85">Success is created together</h2>
            </div>
            <div className="_contentSection_1463b_100">
              <div>
                <div className="_description_1463b_195">
                  <div className="safe-html">
                    Success comes from close collaboration, clear communication and agile processes. Together with our customers, we develop software, platforms and AI solutions that are technically clean, maintainable and usable in the long term.
                  </div>
                </div>
              </div>
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
          /* Tagline Primary Variables */
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
          
          /* H2 Primary Variables */
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
          
          /* Copy S Quaternary Variables */
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

        /* Text With Buttons Component */
        ._organism-text-with-buttons_1463b_31 {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2.1875rem 1.5rem;
          background-color: #fff;
        }

        @media only screen and (min-width: 768px) {
          ._organism-text-with-buttons_1463b_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-text-with-buttons_1463b_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-text-with-buttons_1463b_31 {
            padding: 2.1875rem 0rem;
          }
        }

        /* Container */
        ._container_1463b_54 {
          max-width: 75rem;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
        }

        /* Content */
        ._content_1463b_63 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 1.5rem;
        }

        @media only screen and (min-width: 1024px) {
          ._content_1463b_63 {
            flex-direction: row;
            gap: 3.75rem;
            align-items: flex-start;
            justify-content: space-between;
            width: 100%;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._content_1463b_63 {
            gap: 5rem;
          }
        }

        /* Heading Section */
        ._headingSection_1463b_85 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
        }

        @media only screen and (min-width: 1024px) {
          ._headingSection_1463b_85 {
            flex: 1;
            gap: 1rem;
            max-width: 50%;
          }
        }

        /* Content Section */
        ._contentSection_1463b_100 {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          width: 100%;
        }

        @media only screen and (min-width: 1024px) {
          ._contentSection_1463b_100 {
            flex: 1;
            max-width: 50%;
          }
        }

        /* Tagline */
        ._tagline_1463b_114 {
          font-family: var(--font-tagline-primary-font-family);
          font-size: var(--font-tagline-primary-font-size-mobile);
          line-height: var(--font-tagline-primary-line-height-mobile);
          font-weight: var(--font-tagline-primary-font-weight);
          letter-spacing: var(--font-tagline-primary-letter-spacing);
          text-transform: var(--font-tagline-primary-text-transform);
          color: var(--font-tagline-primary-color);
          background: var(--font-tagline-primary-background);
        }

        ._tagline_1463b_114:hover {
          color: var(--font-tagline-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._tagline_1463b_114 {
            font-size: var(--font-tagline-primary-font-size-desktop);
            line-height: var(--font-tagline-primary-line-height-desktop);
            letter-spacing: var(--font-tagline-primary-letter-spacing-desktop);
          }
        }

        /* Heading */
        ._heading_1463b_85 {
          margin: 0;
          font-family: var(--font-h2-primary-font-family);
          font-size: var(--font-h2-primary-font-size-mobile);
          line-height: var(--font-h2-primary-line-height-mobile);
          font-weight: var(--font-h2-primary-font-weight);
          letter-spacing: var(--font-h2-primary-letter-spacing);
          text-transform: var(--font-h2-primary-text-transform);
          color: var(--font-h2-primary-color);
          background: var(--font-h2-primary-background);
          line-height: 140%;
          word-break: break-word;
          word-wrap: break-word;
          -webkit-hyphens: auto;
          hyphens: auto;
        }

        ._heading_1463b_85:hover {
          color: var(--font-h2-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._heading_1463b_85 {
            font-size: var(--font-h2-primary-font-size-desktop);
            line-height: var(--font-h2-primary-line-height-desktop);
            letter-spacing: var(--font-h2-primary-letter-spacing-desktop);
          }
        }

        /* Heading Only Variant */
        @media only screen and (min-width: 1024px) {
          ._headingOnly_1463b_162 ._headingSection_1463b_85 {
            max-width: 100%;
            flex: 1;
          }
        }

        /* Full Width Variant */
        ._fullWidth_1463b_168 ._headingSection_1463b_85 {
          gap: 0;
        }

        @media only screen and (min-width: 1024px) {
          ._fullWidth_1463b_168 ._headingSection_1463b_85 {
            max-width: 100%;
            flex: 1;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._fullWidth_1463b_168 ._content_1463b_63 {
            justify-content: flex-start;
          }
        }

        ._fullWidth_1463b_168 ._tagline_1463b_114 {
          margin-bottom: 0.75rem;
        }

        ._fullWidth_1463b_168 ._heading_1463b_85 {
          margin-bottom: 1.5rem;
          line-height: 120%;
        }

        @media only screen and (min-width: 1024px) {
          ._fullWidth_1463b_168 ._heading_1463b_85 {
            margin-bottom: 2.375rem;
            line-height: 140%;
          }
        }

        ._fullWidth_1463b_168 ._description_1463b_195 {
          padding: 0;
        }

        /* Inline Content */
        ._inlineContent_1463b_199 {
          margin-top: 0;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        /* Description */
        ._description_1463b_195 {
          max-width: 40em !important;
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
          max-width: 100%;
          padding-bottom: 1.5rem;
        }

        @media only screen and (min-width: 1024px) {
          ._description_1463b_195 {
            max-width: 42em !important;
          }
        }

        ._description_1463b_195:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._description_1463b_195 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        @media only screen and (min-width: 768px) {
          ._description_1463b_195 {
            max-width: 37.5rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._description_1463b_195 {
            max-width: none;
            max-width: initial;
            padding-bottom: 2rem;
          }
        }

        /* Button Group */
        ._buttonGroup_1463b_247 {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
          align-items: flex-start;
        }

        @media only screen and (min-width: 768px) {
          ._buttonGroup_1463b_247 {
            flex-direction: row;
            gap: 1.25rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._buttonGroup_1463b_247 {
            gap: 1.5rem;
          }
        }

        /* Module Text With Buttons */
        ._module-text-with-buttons_179b8_1 {
          display: block;
        }
      `}</style>
    </>
  );
};

export default TextWithButtons;