// components/Highlight.jsx
import React from 'react';

const Highlight = () => {
  return (
    <>
      <section className="organism-highlight _organism-highlight_19yxh_31">
        <div className="_container_19yxh_53">
          <div className="_variant_19yxh_59 _variant-stats_19yxh_100 _variant-stats--left_19yxh_194">
            <div className="_stats_19yxh_100">
              <div className="_stat_19yxh_100">
                <div className="_statValue_19yxh_127">
                  <span className="_value_19yxh_133">250</span>
                  <span className="_suffix_19yxh_153">+</span>
                </div>
                <div className="_statLabel_19yxh_173">digital projects realized</div>
              </div>
              <div className="_stat_19yxh_100">
                <div className="_statValue_19yxh_127">
                  <span className="_value_19yxh_133">100</span>
                  <span className="_suffix_19yxh_153">+</span>
                </div>
                <div className="_statLabel_19yxh_173">satisfied customers</div>
              </div>
              <div className="_stat_19yxh_100">
                <div className="_statValue_19yxh_127">
                  <span className="_value_19yxh_133">50</span>
                  <span className="_suffix_19yxh_153">+</span>
                </div>
                <div className="_statLabel_19yxh_173">Experts from development, UX &amp; AI</div>
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
          /* H1 Tertiary Variables */
          --font-h1-tertiary-font-family: Okima, serif;
          --font-h1-tertiary-font-size-mobile: 3rem;
          --font-h1-tertiary-line-height-mobile: 3.25rem;
          --font-h1-tertiary-font-weight: 400;
          --font-h1-tertiary-letter-spacing: -0.02em;
          --font-h1-tertiary-text-transform: none;
          --font-h1-tertiary-color: #080808;
          --font-h1-tertiary-background: none;
          --font-h1-tertiary-color-hover: #080808;
          --font-h1-tertiary-font-size-desktop: 4rem;
          --font-h1-tertiary-line-height-desktop: 4.25rem;
          --font-h1-tertiary-letter-spacing-desktop: -0.02em;
          
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
          
          /* Copy M Senary Variables */
          --font-copy-m-sexenary-font-family: Satoshi Regular, sans-serif;
          --font-copy-m-sexenary-font-size-mobile: 1.125rem;
          --font-copy-m-sexenary-line-height-mobile: 1.625rem;
          --font-copy-m-sexenary-font-weight: 400;
          --font-copy-m-sexenary-letter-spacing: 0;
          --font-copy-m-sexenary-text-transform: none;
          --font-copy-m-sexenary-color: #080808;
          --font-copy-m-sexenary-background: none;
          --font-copy-m-sexenary-color-hover: #080808;
          --font-copy-m-sexenary-font-size-desktop: 1.125rem;
          --font-copy-m-sexenary-line-height-desktop: 1.625rem;
          --font-copy-m-sexenary-letter-spacing-desktop: 0;
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

        /* Module Highlight */
        ._module-highlight_y6k6w_1 {
          display: block;
          width: 100%;
        }

        /* Highlight Component */
        ._organism-highlight_19yxh_31 {
          display: block;
          width: 100%;
          background-color: #fff;
          padding: 0 1.5rem 2.1875rem;
        }

        @media only screen and (min-width: 768px) {
          ._organism-highlight_19yxh_31 {
            padding: 0 3.75rem 2.1875rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-highlight_19yxh_31 {
            padding: 0 3.75rem 2.1875rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-highlight_19yxh_31 {
            padding: 0 0rem 2.1875rem;
          }
        }

        /* Container */
        ._container_19yxh_53 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }

        /* Variant */
        ._variant_19yxh_59 {
          width: 100%;
        }

        /* Logos Variant */
        ._variant-logos_19yxh_63 ._logos_19yxh_63 {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          gap: 1.5rem;
        }

        ._variant-logos_19yxh_63 ._logoItem_19yxh_70 {
          flex: 0 0 calc(50% - 0.75rem);
        }

        @media only screen and (min-width: 768px) {
          ._variant-logos_19yxh_63 ._logoItem_19yxh_70 {
            flex: 0 0 calc(25% - 1.125rem);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-logos_19yxh_63 ._logoItem_19yxh_70 {
            flex: 0 0 calc(11.111% - 21.33 / 16 * 1rem);
          }
        }

        ._variant-logos_19yxh_63 ._logoLink_19yxh_83 {
          display: inline-block;
        }

        ._variant-logos_19yxh_63 ._logoImage_19yxh_86 {
          display: block;
          max-width: 7rem;
          max-height: 4.35625rem;
          width: auto;
          object-fit: contain;
        }

        @media only screen and (min-width: 768px) {
          ._variant-logos_19yxh_63 ._logoImage_19yxh_86 {
            max-width: 5.84375rem;
            max-height: 3.63125rem;
          }
        }

        /* Stats Variant */
        ._variant-stats_19yxh_100 ._stats_19yxh_100 {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
        }

        @media only screen and (min-width: 768px) {
          ._variant-stats_19yxh_100 ._stats_19yxh_100 {
            gap: 1.5rem;
          }
        }

        ._variant-stats_19yxh_100 ._stat_19yxh_100 {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        @media only screen and (min-width: 768px) {
          ._variant-stats_19yxh_100 ._stat_19yxh_100 {
            flex: 0 0 calc(33.333% - 1rem);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-stats_19yxh_100 ._stat_19yxh_100 {
            flex: 0 0 calc(33.333% - 1rem);
          }
        }

        /* Stat Value */
        ._variant-stats_19yxh_100 ._statValue_19yxh_127 {
          display: flex;
          justify-content: center;
          gap: 0.375rem;
          padding-bottom: 0.5rem;
        }

        /* Value */
        ._variant-stats_19yxh_100 ._value_19yxh_133 {
          font-family: var(--font-h1-tertiary-font-family);
          font-size: var(--font-h1-tertiary-font-size-mobile);
          line-height: var(--font-h1-tertiary-line-height-mobile);
          font-weight: var(--font-h1-tertiary-font-weight);
          letter-spacing: var(--font-h1-tertiary-letter-spacing);
          text-transform: var(--font-h1-tertiary-text-transform);
          color: var(--font-h1-tertiary-color);
          background: var(--font-h1-tertiary-background);
        }

        ._variant-stats_19yxh_100 ._value_19yxh_133:hover {
          color: var(--font-h1-tertiary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-stats_19yxh_100 ._value_19yxh_133 {
            font-size: var(--font-h1-tertiary-font-size-desktop);
            line-height: var(--font-h1-tertiary-line-height-desktop);
            letter-spacing: var(--font-h1-tertiary-letter-spacing-desktop);
          }
        }

        /* Suffix */
        ._variant-stats_19yxh_100 ._suffix_19yxh_153 {
          font-family: var(--font-h1-tertiary-font-family);
          font-size: var(--font-h1-tertiary-font-size-mobile);
          line-height: var(--font-h1-tertiary-line-height-mobile);
          font-weight: var(--font-h1-tertiary-font-weight);
          letter-spacing: var(--font-h1-tertiary-letter-spacing);
          text-transform: var(--font-h1-tertiary-text-transform);
          color: var(--font-h1-tertiary-color);
          background: var(--font-h1-tertiary-background);
        }

        ._variant-stats_19yxh_100 ._suffix_19yxh_153:hover {
          color: var(--font-h1-tertiary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-stats_19yxh_100 ._suffix_19yxh_153 {
            font-size: var(--font-h1-tertiary-font-size-desktop);
            line-height: var(--font-h1-tertiary-line-height-desktop);
            letter-spacing: var(--font-h1-tertiary-letter-spacing-desktop);
          }
        }

        /* Stat Label */
        ._variant-stats_19yxh_100 ._statLabel_19yxh_173 {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
        }

        ._variant-stats_19yxh_100 ._statLabel_19yxh_173:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-stats_19yxh_100 ._statLabel_19yxh_173 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        /* Stats Left Variant */
        ._variant-stats--left_19yxh_194 ._stats_19yxh_100 {
          justify-content: flex-start;
        }

        ._variant-stats--left_19yxh_194 ._stat_19yxh_100 {
          align-items: flex-start;
          text-align: left;
        }

        ._variant-stats--left_19yxh_194 ._statValue_19yxh_127 {
          justify-content: flex-start;
        }

        ._variant-stats--left_19yxh_194 ._statLabel_19yxh_173 {
          text-align: left;
        }

        /* Checklist Variant */
        ._variant-checklist_19yxh_208 ._checklist_19yxh_208 {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        @media only screen and (min-width: 768px) {
          ._variant-checklist_19yxh_208 ._checklist_19yxh_208 {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 1.5rem;
          }
        }

        ._variant-checklist_19yxh_208 ._checkItem_19yxh_223 {
          display: flex;
          gap: 1rem;
          flex: 0 0 100%;
          justify-content: flex-start;
        }

        @media only screen and (min-width: 1024px) {
          ._variant-checklist_19yxh_208 ._checkItem_19yxh_223 {
            flex: 0 0 calc(50% - 1rem);
          }
        }

        ._variant-checklist_19yxh_208 ._checkItem_19yxh_223:before {
          content: "";
          display: inline-block;
          flex-shrink: 0;
        }

        ._variant-checklist_19yxh_208 ._checkItem_19yxh_223:before {
          content: "";
          display: inline-block;
          -webkit-mask-image: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/check-circle-B-uyZXZM.svg);
          mask-image: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/check-circle-B-uyZXZM.svg);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: 1.625rem;
          height: 1.625rem;
          background-color: #fe5631;
        }

        ._variant-checklist_19yxh_208 ._checkText_19yxh_249 {
          background-color: #fe5631;
          font-family: var(--font-copy-m-sexenary-font-family);
          font-size: var(--font-copy-m-sexenary-font-size-mobile);
          line-height: var(--font-copy-m-sexenary-line-height-mobile);
          font-weight: var(--font-copy-m-sexenary-font-weight);
          letter-spacing: var(--font-copy-m-sexenary-letter-spacing);
          text-transform: var(--font-copy-m-sexenary-text-transform);
          color: var(--font-copy-m-sexenary-color);
          background: var(--font-copy-m-sexenary-background);
        }

        ._variant-checklist_19yxh_208 ._checkText_19yxh_249:hover {
          color: var(--font-copy-m-sexenary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-checklist_19yxh_208 ._checkText_19yxh_249 {
            font-size: var(--font-copy-m-sexenary-font-size-desktop);
            line-height: var(--font-copy-m-sexenary-line-height-desktop);
            letter-spacing: var(--font-copy-m-sexenary-letter-spacing-desktop);
          }
        }

        /* Icon Cards Variant */
        ._variant-iconCards_19yxh_271 ._cards_19yxh_271 {
          display: flex;
          flex-wrap: wrap;
          gap: 2.625rem;
        }

        @media only screen and (min-width: 768px) {
          ._variant-iconCards_19yxh_271 ._cards_19yxh_271 {
            gap: 1.5rem;
          }
        }

        ._variant-iconCards_19yxh_271 ._card_19yxh_271 {
          flex: 0 0 100%;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        @media only screen and (min-width: 768px) {
          ._variant-iconCards_19yxh_271 ._card_19yxh_271 {
            flex: 0 0 calc(50% - 1rem);
          }
        }

        @media only screen and (min-width: 1024px) {
          ._variant-iconCards_19yxh_271 ._card_19yxh_271 {
            flex: 0 0 calc(33.333% - 1rem);
          }
        }

        ._variant-iconCards_19yxh_271 ._cardIconImage_19yxh_297 {
          max-width: 2.25rem;
          max-height: 2.25rem;
          width: auto;
          object-fit: contain;
          display: inline-block;
        }

        ._variant-iconCards_19yxh_271 ._cardHeading_19yxh_304 {
          font-family: var(--font-copy-m-sexenary-font-family);
          font-size: var(--font-copy-m-sexenary-font-size-mobile);
          line-height: var(--font-copy-m-sexenary-line-height-mobile);
          font-weight: var(--font-copy-m-sexenary-font-weight);
          letter-spacing: var(--font-copy-m-sexenary-letter-spacing);
          text-transform: var(--font-copy-m-sexenary-text-transform);
          color: var(--font-copy-m-sexenary-color);
          background: var(--font-copy-m-sexenary-background);
        }

        ._variant-iconCards_19yxh_271 ._cardHeading_19yxh_304:hover {
          color: var(--font-copy-m-sexenary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-iconCards_19yxh_271 ._cardHeading_19yxh_304 {
            font-size: var(--font-copy-m-sexenary-font-size-desktop);
            line-height: var(--font-copy-m-sexenary-line-height-desktop);
            letter-spacing: var(--font-copy-m-sexenary-letter-spacing-desktop);
          }
        }

        ._variant-iconCards_19yxh_271 ._cardDescription_19yxh_324 {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          font-weight: var(--font-copy-s-quaternary-font-weight);
          letter-spacing: var(--font-copy-s-quaternary-letter-spacing);
          text-transform: var(--font-copy-s-quaternary-text-transform);
          color: var(--font-copy-s-quaternary-color);
          background: var(--font-copy-s-quaternary-background);
        }

        ._variant-iconCards_19yxh_271 ._cardDescription_19yxh_324:hover {
          color: var(--font-copy-s-quaternary-color-hover);
        }

        @media only screen and (min-width: 1024px) {
          ._variant-iconCards_19yxh_271 ._cardDescription_19yxh_324 {
            font-size: var(--font-copy-s-quaternary-font-size-desktop);
            line-height: var(--font-copy-s-quaternary-line-height-desktop);
            letter-spacing: var(--font-copy-s-quaternary-letter-spacing-desktop);
          }
        }

        /* Icon Cards Center Variant */
        ._variant-iconCards--center_19yxh_345 ._cardIconImage_19yxh_297 {
          margin-left: auto;
          margin-right: auto;
          display: block;
        }

        ._variant-iconCards--center_19yxh_345 ._cardHeading_19yxh_304 {
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Highlight;