// components/CaseStudies.jsx
import React from 'react';

const CaseStudies = () => {
  return (
    <>
      <section className="organism-case-studies _organism-case-studies_1pbvq_31">
        <div className="_container_1pbvq_267">
          <header className="_header_1pbvq_275">
            <p className="_tagline_1pbvq_52">References</p>
            <h2 className="_title_1pbvq_73">What we have achieved for customers</h2>
            <div className="_description_1pbvq_95 richText">
              <div className="safe-html">
                <p className="_description-text_1pbvq_95">
                  <span>
                    Here you will find a selection of our projects in the areas of software development, B2B e-commerce, AI integration and digital platforms.
                  </span>
                </p>
              </div>
            </div>
          </header>
          
          <div className="_cards_1pbvq_281 _variant-four_1pbvq_312" id="case-studies-container">
            {/* Card 1 */}
            <article className="_card_1pbvq_121">
              <a 
                href="https://www.pmagentur.com/de/cases/hagebau-extranet/?hsLang=en" 
                className="_imageLink_1pbvq_303"
              >
                <div className="_imageWrapper_1pbvq_307">
                  <img 
                    className="_image_1pbvq_303" 
                    src="/images/Hagebau-with-logo.png" 
                    alt="Hagebau-with-logo" 
                    loading="lazy" 
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </a>
              <div className="_cardBody_1pbvq_335">
                <h3 className="_cardTitle_1pbvq_121">hagebau Extranet</h3>
                <p className="_cardDescription_1pbvq_142">
                  Central extranet platform for seamless collaboration.
                </p>
                <a 
                  className="_cardLink_1pbvq_340" 
                  href="https://www.pmagentur.com/de/cases/hagebau-extranet/?hsLang=en" 
                  tabIndex="0" 
                  aria-disabled="false" 
                  aria-label="View reference"
                >
                  View reference <span className="chevron-arrow">›</span>
                </a>
              </div>
            </article>
            
            {/* Card 2 */}
            <article className="_card_1pbvq_121">
              <a 
                href="https://www.pmagentur.com/de/referenzen/ki-automatisierung-tyczka-energy?hsLang=en" 
                className="_imageLink_1pbvq_303"
              >
                <div className="_imageWrapper_1pbvq_307">
                  <img 
                    className="_image_1pbvq_303" 
                    src="/images/Tyczka.png" 
                    alt="Tyczka" 
                    loading="lazy" 
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </a>
              <div className="_cardBody_1pbvq_335">
                <h3 className="_cardTitle_1pbvq_121">Tyczka Energy</h3>
                <p className="_cardDescription_1pbvq_142">
                  AI automation of the incoming order process.
                </p>
                <a 
                  className="_cardLink_1pbvq_340" 
                  href="https://www.pmagentur.com/de/referenzen/ki-automatisierung-tyczka-energy?hsLang=en" 
                  tabIndex="0" 
                  aria-disabled="false" 
                  aria-label="View reference"
                >
                  View reference <span className="chevron-arrow">›</span>
                </a>
              </div>
            </article>
            
            {/* Card 3 */}
            <article className="_card_1pbvq_121">
              <a 
                href="https://www.pmagentur.com/de/cases/orthegroh-b2b-shop-dxp-integration?hsLang=en" 
                className="_imageLink_1pbvq_303"
              >
                <div className="_imageWrapper_1pbvq_307">
                  <img 
                    className="_image_1pbvq_303" 
                    src="/images/Orthegroh.png" 
                    alt="Orthegroh" 
                    loading="lazy" 
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </a>
              <div className="_cardBody_1pbvq_335">
                <h3 className="_cardTitle_1pbvq_121">ORTHEGROH</h3>
                <p className="_cardDescription_1pbvq_142">
                  New B2B store with Dynamics 365 Business Central integration.
                </p>
                <a 
                  className="_cardLink_1pbvq_340" 
                  href="https://www.pmagentur.com/de/cases/orthegroh-b2b-shop-dxp-integration?hsLang=en" 
                  tabIndex="0" 
                  aria-disabled="false" 
                  aria-label="View reference"
                >
                  View reference <span className="chevron-arrow">›</span>
                </a>
              </div>
            </article>
            
            {/* Card 4 */}
            <article className="_card_1pbvq_121">
              <a 
                href="https://www.pmagentur.com/de/cases/vincentz-network-ki-chatbot?hsLang=en" 
                className="_imageLink_1pbvq_303"
              >
                <div className="_imageWrapper_1pbvq_307">
                  <img 
                    className="_image_1pbvq_303" 
                    src="/images/Vincentz-with-logo.png" 
                    alt="Vincentz-with-logo" 
                    loading="lazy" 
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </a>
              <div className="_cardBody_1pbvq_335">
                <h3 className="_cardTitle_1pbvq_121">Vincentz Network</h3>
                <p className="_cardDescription_1pbvq_142">
                  Digital platform with AI search for leading specialist publisher.
                </p>
                <a 
                  className="_cardLink_1pbvq_340" 
                  href="https://www.pmagentur.com/de/cases/vincentz-network-ki-chatbot?hsLang=en" 
                  tabIndex="0" 
                  aria-disabled="false" 
                  aria-label="View reference"
                >
                  View reference <span className="chevron-arrow">›</span>
                </a>
              </div>
            </article>
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
          /* Primary Theme Variables */
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
          
          --font-h4-primary-font-family: Okima, serif;
          --font-h4-primary-font-size-mobile: 1.5rem;
          --font-h4-primary-line-height-mobile: 1.75rem;
          --font-h4-primary-font-weight: 400;
          --font-h4-primary-letter-spacing: -0.02em;
          --font-h4-primary-text-transform: none;
          --font-h4-primary-color: #080808;
          --font-h4-primary-background: none;
          --font-h4-primary-color-hover: #080808;
          --font-h4-primary-font-size-desktop: 1.75rem;
          --font-h4-primary-line-height-desktop: 2rem;
          --font-h4-primary-letter-spacing-desktop: -0.02em;
          
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
          
          /* Button Variables */
          --button-primary-bg: #080808;
          --button-primary-color: #FFFFFF;
          --button-primary-border: 1px solid #080808;
          --button-primary-hover-bg: #333333;
          --button-primary-hover-color: #FFFFFF;
          --button-primary-hover-border: 1px solid #333333;
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

        .richText {
          overflow-wrap: break-word;
          word-break: break-word;
        }

        /* Case Studies Component */
        ._organism-case-studies_1pbvq_31 {
          display: block;
          width: 100%;
          background-color: #fff;
          padding: 2.1875rem 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._organism-case-studies_1pbvq_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31 {
            padding: 2.1875rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-case-studies_1pbvq_31 {
            padding: 2.1875rem 0rem;
          }
        }

        /* Container */
        ._container_1pbvq_267 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }

        /* Header */
        ._header_1pbvq_275 {
          display: flex;
          flex-direction: column;
          margin-bottom: 2.625rem;
          text-align: left;
        }

        /* Tagline */
        ._tagline_1pbvq_52 {
          font-family: var(--font-tagline-primary-font-family);
          font-size: var(--font-tagline-primary-font-size-mobile);
          line-height: var(--font-tagline-primary-line-height-mobile);
          font-weight: var(--font-tagline-primary-font-weight);
          letter-spacing: var(--font-tagline-primary-letter-spacing);
          text-transform: var(--font-tagline-primary-text-transform);
          color: var(--font-tagline-primary-color);
          background: var(--font-tagline-primary-background);
          padding-bottom: 1rem;
          text-align: left;
        }

        ._tagline_1pbvq_52:hover {
          color: var(--font-tagline-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._tagline_1pbvq_52 {
            font-size: var(--font-tagline-primary-font-size-desktop);
            line-height: var(--font-tagline-primary-line-height-desktop);
            letter-spacing: var(--font-tagline-primary-letter-spacing-desktop);
          }
        }

        /* Title */
        ._title_1pbvq_73 {
          font-family: var(--font-h2-primary-font-family);
          font-size: var(--font-h2-primary-font-size-mobile);
          line-height: var(--font-h2-primary-line-height-mobile);
          font-weight: var(--font-h2-primary-font-weight);
          letter-spacing: var(--font-h2-primary-letter-spacing);
          text-transform: var(--font-h2-primary-text-transform);
          color: var(--font-h2-primary-color);
          background: var(--font-h2-primary-background);
          padding-bottom: 1.5rem;
          word-break: break-word;
          text-align: left;
        }

        ._title_1pbvq_73:hover {
          color: var(--font-h2-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._title_1pbvq_73 {
            font-size: var(--font-h2-primary-font-size-desktop);
            line-height: var(--font-h2-primary-line-height-desktop);
            letter-spacing: var(--font-h2-primary-letter-spacing-desktop);
          }
        }

        /* Description - Updated for left alignment */
        ._description_1pbvq_95 {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
          max-width: 40em !important;
          text-align: left;
        }

        ._description-text_1pbvq_95 {
          text-align: left;
        }

        ._description_1pbvq_95:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._description_1pbvq_95 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._description_1pbvq_95 {
            max-width: 42em !important;
          }
        }

        /* Cards Container */
        ._cards_1pbvq_281 {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        /* Individual Card */
        ._card_1pbvq_121 {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
        }

        @media only screen and (min-width: 768px) {
          ._card_1pbvq_121 {
            flex: 0 0 calc(50% - 0.75rem);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._card_1pbvq_121 {
            flex: 0 0 calc(33.333% - 1rem);
          }
        }

        /* Card Image Link */
        ._imageLink_1pbvq_303 {
          display: block;
        }

        /* Image Wrapper */
        ._imageWrapper_1pbvq_307 {
          border-radius: 0.75rem;
          overflow: hidden;
        }

        ._variant-four_1pbvq_312 ._imageWrapper_1pbvq_307 {
          aspect-ratio: 1/1;
        }

        ._variant-three_1pbvq_316 ._imageWrapper_1pbvq_307 {
          aspect-ratio: 16/9;
        }

        ._variant-two_1pbvq_320 ._imageWrapper_1pbvq_307,
        ._variant-one_1pbvq_324 ._imageWrapper_1pbvq_307 {
          aspect-ratio: 3/2;
        }

        /* Image */
        ._image_1pbvq_303 {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Card Body */
        ._cardBody_1pbvq_335 {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        /* Card Title */
        ._cardTitle_1pbvq_121 {
          font-family: var(--font-h4-primary-font-family);
          font-size: var(--font-h4-primary-font-size-mobile);
          line-height: var(--font-h4-primary-line-height-mobile);
          font-weight: var(--font-h4-primary-font-weight);
          letter-spacing: var(--font-h4-primary-letter-spacing);
          text-transform: var(--font-h4-primary-text-transform);
          color: var(--font-h4-primary-color);
          background: var(--font-h4-primary-background);
          padding: 1.5rem 0 1rem;
          text-align: left;
        }

        ._cardTitle_1pbvq_121:hover {
          color: var(--font-h4-primary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._cardTitle_1pbvq_121 {
            font-size: var(--font-h4-primary-font-size-desktop);
            line-height: var(--font-h4-primary-line-height-desktop);
            letter-spacing: var(--font-h4-primary-letter-spacing-desktop);
          }
        }

        /* Card Description */
        ._cardDescription_1pbvq_142 {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
          padding-bottom: 1rem;
          text-align: left;
        }

        ._cardDescription_1pbvq_142:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._cardDescription_1pbvq_142 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        /* Card Link - Updated to be a text link not a button */
        ._cardLink_1pbvq_340 {
          margin-top: auto;
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          font-family: Satoshi Regular, sans-serif; /* Changed from Satoshi Medium to Regular */
          font-size: 0.875rem;
          line-height: 1.25rem;
          font-weight: 400;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          text-decoration: none;
          color: #080808;
          background: transparent;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        ._cardLink_1pbvq_340:hover {
          color: #FE5631;
          text-decoration: none;
        }

        ._cardLink_1pbvq_340:focus {
          outline: 0.125rem solid #FE5631;
          outline-offset: 0.125rem;
        }

        /* Chevron Arrow Styling */
        .chevron-arrow {
          display: inline-block;
          transition: transform 0.2s ease;
          color: #FE5631;
          font-size: 1.25rem;
          line-height: 1;
          margin-left: 0.25rem;
        }

        ._cardLink_1pbvq_340:hover .chevron-arrow {
          transform: translateX(4px);
          color: #FE5631;
        }

        /* Remove old arrow styles */
        ._arrow_1pbvq_350 {
          display: none;
        }

        /* Remove old button styles */
        ._atom-button_ilbwb_76,
        ._link_ilbwb_150 {
          display: none;
        }

        /* Gradient Variant */
        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 {
          background: linear-gradient(183deg, #080808 13.52%, #1a41a2e5 69.53%, #50a3e7 87.37%, #6dd1ea 97.84%);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._tagline_1pbvq_52 {
          font-family: var(--font-tagline-secondary-font-family);
          font-size: var(--font-tagline-secondary-font-size-mobile);
          line-height: var(--font-tagline-secondary-line-height-mobile);
          font-weight: var(--font-tagline-secondary-font-weight);
          letter-spacing: var(--font-tagline-secondary-letter-spacing);
          text-transform: var(--font-tagline-secondary-text-transform);
          color: var(--font-tagline-secondary-color);
          background: var(--font-tagline-secondary-background);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._tagline_1pbvq_52:hover {
          color: var(--font-tagline-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._tagline_1pbvq_52 {
            font-size: var(--font-tagline-secondary-font-size-desktop);
            line-height: var(--font-tagline-secondary-line-height-desktop);
            letter-spacing: var(--font-tagline-secondary-letter-spacing-desktop);
          }
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._title_1pbvq_73 {
          font-family: var(--font-h2-secondary-font-family);
          font-size: var(--font-h2-secondary-font-size-mobile);
          line-height: var(--font-h2-secondary-line-height-mobile);
          font-weight: var(--font-h2-secondary-font-weight);
          letter-spacing: var(--font-h2-secondary-letter-spacing);
          text-transform: var(--font-h2-secondary-text-transform);
          color: var(--font-h2-secondary-color);
          background: var(--font-h2-secondary-background);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._title_1pbvq_73:hover {
          color: var(--font-h2-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._title_1pbvq_73 {
            font-size: var(--font-h2-secondary-font-size-desktop);
            line-height: var(--font-h2-secondary-line-height-desktop);
            letter-spacing: var(--font-h2-secondary-letter-spacing-desktop);
          }
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._description_1pbvq_95 {
          font-family: var(--font-copy-s-secondary-font-family);
          font-size: var(--font-copy-s-secondary-font-size-mobile);
          line-height: var(--font-copy-s-secondary-line-height-mobile);
          font-weight: var(--font-copy-s-secondary-font-weight);
          letter-spacing: var(--font-copy-s-secondary-letter-spacing);
          text-transform: var(--font-copy-s-secondary-text-transform);
          color: var(--font-copy-s-secondary-color);
          background: var(--font-copy-s-secondary-background);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._description_1pbvq_95:hover {
          color: var(--font-copy-s-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._description_1pbvq_95 {
            font-size: var(--font-copy-s-secondary-font-size-desktop);
            line-height: var(--font-copy-s-secondary-line-height-desktop);
            letter-spacing: var(--font-copy-s-secondary-letter-spacing-desktop);
          }
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardTitle_1pbvq_121 {
          font-family: var(--font-h4-secondary-font-family);
          font-size: var(--font-h4-secondary-font-size-mobile);
          line-height: var(--font-h4-secondary-line-height-mobile);
          font-weight: var(--font-h4-secondary-font-weight);
          letter-spacing: var(--font-h4-secondary-letter-spacing);
          text-transform: var(--font-h4-secondary-text-transform);
          color: var(--font-h4-secondary-color);
          background: var(--font-h4-secondary-background);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardTitle_1pbvq_121:hover {
          color: var(--font-h4-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardTitle_1pbvq_121 {
            font-size: var(--font-h4-secondary-font-size-desktop);
            line-height: var(--font-h4-secondary-line-height-desktop);
            letter-spacing: var(--font-h4-secondary-letter-spacing-desktop);
          }
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardDescription_1pbvq_142 {
          font-family: var(--font-copy-s-secondary-font-family);
          font-size: var(--font-copy-s-secondary-font-size-mobile);
          line-height: var(--font-copy-s-secondary-line-height-mobile);
          font-weight: var(--font-copy-s-secondary-font-weight);
          letter-spacing: var(--font-copy-s-secondary-letter-spacing);
          text-transform: var(--font-copy-s-secondary-text-transform);
          color: var(--font-copy-s-secondary-color);
          background: var(--font-copy-s-secondary-background);
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardDescription_1pbvq_142:hover {
          color: var(--font-copy-s-secondary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardDescription_1pbvq_142 {
            font-size: var(--font-copy-s-secondary-font-size-desktop);
            line-height: var(--font-copy-s-secondary-line-height-desktop);
            letter-spacing: var(--font-copy-s-secondary-letter-spacing-desktop);
          }
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardLink_1pbvq_340 {
          color: #FFFFFF;
        }

        ._organism-case-studies_1pbvq_31._gradient_1pbvq_163 ._cardLink_1pbvq_340:hover {
          color: #FE5631;
        }

        /* Controls */
        ._controls_1pbvq_345 {
          display: flex;
          justify-content: center;
          padding-top: 2.625rem;
        }

        /* Responsive adjustments for variants */
        @media only screen and (min-width: 1024px) {
          ._variant-two_1pbvq_320 ._card_1pbvq_121 {
            flex: 0 0 calc(50% - 0.75rem);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-four_1pbvq_312 ._card_1pbvq_121 {
            flex: 0 0 calc(25% - 1.125rem);
          }
        }

        @media only screen and (min-width: 768px) {
          ._variant-one_1pbvq_324 ._card_1pbvq_121 {
            flex: 0 0 100%;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-one_1pbvq_324 ._card_1pbvq_121 {
            flex: 0 0 100%;
            flex-direction: row;
            align-items: center;
            gap: 2rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-one_1pbvq_324 ._card_1pbvq_121 > ._imageLink_1pbvq_303,
          ._variant-one_1pbvq_324 ._card_1pbvq_121 > ._imageWrapper_1pbvq_307 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        ._variant-one_1pbvq_324 ._cardBody_1pbvq_335 {
          height: 100%;
        }

        @media only screen and (min-width: 1024px) {
          ._variant-one_1pbvq_324 ._cardBody_1pbvq_335 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-one_1pbvq_324 ._cardTitle_1pbvq_121 {
            padding: 0rem 0 1.5rem;
          }

          ._variant-one_1pbvq_324 ._cardDescription_1pbvq_142 {
            padding-bottom: 1.5rem;
          }
        }
      `}</style>
    </>
  );
};

export default CaseStudies;