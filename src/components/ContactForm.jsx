// components/ContactForm.jsx
import React from 'react';

const ContactForm = () => {
  return (
    <>
      <section className="organism-contact-form _organism-contact-form_1a2b3c_31">
        <div className="_container_1a2b3c_53">
          <div className="_form-wrapper_1a2b3c_59">
            <div data-hs-island="true" id="hs-form-island-hs_form_target_widget_1762510008293">
              <div id="hs_form_target_widget_1762510008293-r" data-hsfc-id="Renderer" className="hsfc-Renderer">
                <div data-hsfc-id="FormWrapper" className="hsfc-FormWrapper">
                  <form 
                    data-hsfc-id="Form" 
                    id="hs_form_target_widget_1762510008293-c88a9e87-6502-4857-9268-01d309c7c5d7" 
                    method="POST" 
                    acceptCharset="UTF-8" 
                    encType="multipart/form-data" 
                    noValidate 
                    lang="EN" 
                    aria-label="HubSpot Form"
                    action="https://forms-eu1.hsforms.com/submissions/v3/public/submit/formsnext/multipart/49192415/c88a9e87-6502-4857-9268-01d309c7c5d7"
                    target="submission_handler_hs_form_target_widget_1762510008293-c88a9e87-6502-4857-9268-01d309c7c5d7"
                    className="hsfc-Form"
                  >
                    <div data-hsfc-id="Step" id="hs_form_target_widget_1762510008293-23" className="hsfc-Step">
                      <div className="hsfc-Step__Content">
                        
                        {/* Heading Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-2591644189726" className="hsfc-Row">
                          <h1 
                            data-hsfc-id="Heading" 
                            id="hs_form_target_widget_1762510008293-2541259221459" 
                            style={{alignSelf: 'start', justifySelf: 'center'}}
                            aria-level="1" 
                            className="hsfc-Heading"
                          >
                            Let's get started!
                          </h1>
                        </div>

                        {/* Description Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-2" className="hsfc-Row">
                          <div data-hsfc-id="RichText" id="hs_form_target_widget_1762510008293-1" className="hsfc-RichText">
                            <p>Every project begins with a decision. Let's discuss your goals and requirements without obligation.&nbsp;</p>
                          </div>
                        </div>

                        {/* Name and Company Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-20" className="hsfc-Row">
                          <div data-hsfc-id="TextField" className="hsfc-TextField" id="hs_form_target_widget_1762510008293-6">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-6-label" 
                              htmlFor="hs_form_target_widget_1762510008293-6-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <span></span>
                            </label>
                            <input 
                              data-hsfc-id="TextInput" 
                              type="text" 
                              id="hs_form_target_widget_1762510008293-6-input" 
                              name="0-1/firstname" 
                              placeholder="*First and last name*" 
                              required 
                              aria-invalid="false" 
                              aria-required="true" 
                              aria-labelledby="hs_form_target_widget_1762510008293-6-label" 
                              autoComplete="given-name" 
                              className="hsfc-TextInput" 
                              defaultValue=""
                            />
                          </div>
                          
                          <div data-hsfc-id="TextField" className="hsfc-TextField" id="hs_form_target_widget_1762510008293-5">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-5-label" 
                              htmlFor="hs_form_target_widget_1762510008293-5-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <span></span>
                            </label>
                            <input 
                              data-hsfc-id="TextInput" 
                              type="text" 
                              id="hs_form_target_widget_1762510008293-5-input" 
                              name="0-1/lastname" 
                              placeholder="*Company*" 
                              required 
                              aria-invalid="false" 
                              aria-required="true" 
                              aria-labelledby="hs_form_target_widget_1762510008293-5-label" 
                              autoComplete="family-name" 
                              className="hsfc-TextInput" 
                              defaultValue=""
                            />
                          </div>
                        </div>

                        {/* Phone and Email Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-21" className="hsfc-Row">
                          <div data-hsfc-id="TextField" className="hsfc-TextField" id="hs_form_target_widget_1762510008293-2493133450350">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-2493133450350-label" 
                              htmlFor="hs_form_target_widget_1762510008293-2493133450350-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <span></span>
                            </label>
                            <input 
                              data-hsfc-id="TextInput" 
                              type="text" 
                              id="hs_form_target_widget_1762510008293-2493133450350-input" 
                              name="0-1/contact_form_telephone" 
                              placeholder="*Phone number*" 
                              aria-invalid="false" 
                              aria-required="false" 
                              aria-labelledby="hs_form_target_widget_1762510008293-2493133450350-label" 
                              className="hsfc-TextInput" 
                              defaultValue=""
                            />
                          </div>
                          
                          <div data-hsfc-id="EmailField" className="hsfc-EmailField" id="hs_form_target_widget_1762510008293-3">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-3-label" 
                              htmlFor="hs_form_target_widget_1762510008293-3-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <span></span>
                            </label>
                            <input 
                              data-hsfc-id="TextInput" 
                              type="email" 
                              inputMode="email" 
                              id="hs_form_target_widget_1762510008293-3-input" 
                              name="0-1/email" 
                              placeholder="*E-Mail*" 
                              aria-invalid="false" 
                              aria-required="true" 
                              aria-labelledby="hs_form_target_widget_1762510008293-3-label" 
                              autoComplete="email" 
                              className="hsfc-TextInput" 
                              defaultValue=""
                            />
                          </div>
                        </div>

                        {/* Message Textarea Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-2034542751417" className="hsfc-Row">
                          <div data-hsfc-id="TextareaField" className="hsfc-TextareaField" id="hs_form_target_widget_1762510008293-2642758909100">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-2642758909100-label" 
                              htmlFor="hs_form_target_widget_1762510008293-2642758909100-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <span></span>
                            </label>
                            <textarea 
                              data-hsfc-id="TextareaInput" 
                              inputMode="text" 
                              id="hs_form_target_widget_1762510008293-2642758909100-input" 
                              name="0-1/contact_form_description" 
                              placeholder="*Your message*" 
                              aria-invalid="true" 
                              aria-required="true" 
                              aria-labelledby="hs_form_target_widget_1762510008293-2642758909100-label" 
                              className="hsfc-TextareaInput"
                              aria-describedby="hs_form_target_widget_1762510008293-2642758909100-error"
                              defaultValue=""
                            ></textarea>
                            <div 
                              data-hsfc-id="ErrorAlert" 
                              id="hs_form_target_widget_1762510008293-2642758909100-error" 
                              lang="EN" 
                              aria-live="polite" 
                              className="hsfc-ErrorAlert"
                            >
                              Please complete this required field.
                            </div>
                          </div>
                        </div>

                        {/* Privacy Policy Checkbox Row */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-2094531852367" className="hsfc-Row">
                          <div data-hsfc-id="CheckboxField" className="hsfc-CheckboxField" id="hs_form_target_widget_1762510008293-2371333648556">
                            <label 
                              data-hsfc-id="FieldLabel" 
                              id="hs_form_target_widget_1762510008293-2371333648556-label" 
                              htmlFor="hs_form_target_widget_1762510008293-2371333648556-input" 
                              lang="EN" 
                              className="hsfc-FieldLabel"
                            >
                              <input 
                                type="checkbox" 
                                data-hsfc-id="CheckboxInput" 
                                id="hs_form_target_widget_1762510008293-2371333648556-input" 
                                name="0-1/contact_form_legal_consent" 
                                aria-invalid="false" 
                                aria-required="true" 
                                aria-labelledby="hs_form_target_widget_1762510008293-2371333648556-label" 
                                className="hsfc-CheckboxInput" 
                                defaultValue="false"
                              />
                              <span>
                                <span>I accept the <a href="https://www.pmagentur.com/en/datenschutz" target="_blank" rel="noopener noreferrer">privacy policy</a>.</span>
                                <span className="hsfc-FieldLabel__RequiredIndicator">*</span>
                              </span>
                            </label>
                          </div>
                        </div>

                        {/* reCAPTCHA Row - NOW INCLUDED */}
                        <div data-hsfc-id="Row" id="hs_form_target_widget_1762510008293-3137428177434" className="hsfc-Row">
                          <div data-hsfc-id="ReCaptchaV2" id="hs_form_target_widget_1762510008293-2990591225404" className="hsfc-ReCaptchaV2">
                            <div>
                              <div className="grecaptcha-badge" data-style="inline" style={{width: '256px', height: '60px', boxShadow: 'gray 0px 0px 5px'}}>
                                <div className="grecaptcha-logo">
                                  <iframe 
                                    title="reCAPTCHA" 
                                    width="256" 
                                    height="60" 
                                    role="presentation" 
                                    name="a-nu3c3463a30o" 
                                    frameBorder="0" 
                                    scrolling="no" 
                                    sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" 
                                    src="https://google.com/recaptcha/enterprise/anchor?ar=1&amp;k=6Ld_ad8ZAAAAAAqr0ePo1dUfAi0m4KPkCMQYwPPm&amp;co=aHR0cHM6Ly93d3cucG1hZ2VudHVyLmNvbTo0NDM.&amp;hl=en&amp;v=gYdqkxiddE5aXrugNbBbKgtN&amp;size=invisible&amp;badge=inline&amp;anchor-ms=20000&amp;execute-ms=30000&amp;cb=dk3rfuavfvky" 
                                    data-lf-form-tracking-inspected="true" 
                                    data-lf-yt-playback-inspected="true" 
                                    data-lf-vimeo-playback-inspected="true"
                                  ></iframe>
                                </div>
                                <div className="grecaptcha-error"></div>
                                <textarea 
                                  id="g-recaptcha-response" 
                                  name="g-recaptcha-response" 
                                  className="g-recaptcha-response" 
                                  style={{
                                    width: '250px', 
                                    height: '40px', 
                                    border: '1px solid rgb(193, 193, 193)', 
                                    margin: '10px 25px', 
                                    padding: '0px', 
                                    resize: 'none', 
                                    display: 'none'
                                  }}
                                ></textarea>
                              </div>
                              <iframe 
                                data-lf-form-tracking-inspected="true" 
                                data-lf-yt-playback-inspected="true" 
                                data-lf-vimeo-playback-inspected="true" 
                                style={{display: 'none'}}
                              ></iframe>
                            </div>
                            <input type="hidden" name="g-recaptcha-response" id="hs-recaptcha-response" defaultValue="" />
                          </div>
                        </div>

                        {/* Submit Button Row */}
                        <div id="hs_form_target_widget_1762510008293-22" data-hsfc-id="NavigationRow" className="hsfc-NavigationRow">
                          <div id="hs_form_target_widget_1762510008293-22-a" className="hsfc-NavigationRow__Alerts"></div>
                          <div id="hs_form_target_widget_1762510008293-22-b" className="hsfc-NavigationRow__Buttons">
                            <button 
                              type="submit" 
                              data-hsfc-id="Button" 
                              id="hs_form_target_widget_1762510008293-15" 
                              lang="EN" 
                              aria-busy="false" 
                              className="hsfc-Button"
                            >
                              Send
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                    <input 
                      type="hidden" 
                      name="hs_context" 
                      defaultValue='{"source":"forms-embed-static","sourceName":"forms-embed","sourceVersion":"1.0","sourceVersionMajor":"1","sourceVersionMinor":"0","referrer":"https://www.pmagentur.com/de/","userAgent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36","urlParams":{},"__hstc":"164012960.b976c1d56d99f1a32da500609967bdb0.1770457645002.1770537572577.1770539439126.12","isHubSpotCmsGeneratedPage":true,"isCMSEditor":false,"canonicalUrl":"https://www.pmagentur.com/en/","contentType":"standard-page","locale":"en","formDefinitionUpdatedAt":1769596203440,"pageUrl":"https://www.pmagentur.com/en/","pageTitle":"Agency for software development, AI, B2B e-commerce & digital platforms","pageId":"352746287313","allPageIds":{"analyticsPageId":"352746287313","contentAnalyticsPageId":"352746287313","contentPageId":352746287313},"hutk":"b976c1d56d99f1a32da500609967bdb0","fieldValues":{"0-1/firstname":"","0-1/contact_form_legal_consent":false},"emailResubscribeStatus":"NOT_APPLICABLE","captchaStatus":"LOADED","renderedFieldsIds":["0-1/firstname","0-1/lastname","0-1/contact_form_telephone","0-1/email","0-1/contact_form_description","0-1/contact_form_legal_consent"],"boolCheckBoxFields":"0-1/contact_form_legal_consent","__INTERNAL_PERFORMANCE__":{"formDomInteractive":6520.4,"formPageLoad":0,"formRendered":8147.7,"formReady":9153.3,"formSsrRequestLoadingStart":6468.5,"formSsrRequestLoadingEnd":7533,"formIslandRuntimeLoadingStart":3645.5,"formIslandRuntimeLoadingEnd":5911.4,"formServerRendererLoadingStart":8147.7,"formServerRendererLoadingEnd":8996.8,"effectiveNetworkType":"4g","inferredFormType":"ssr"},"recaptchaVersion":"v2"}'
                    />
                    
                    <iframe 
                      name="submission_handler_hs_form_target_widget_1762510008293-c88a9e87-6502-4857-9268-01d309c7c5d7" 
                      style={{display: 'none'}} 
                      title="submission frame"
                    ></iframe>
                    
                    <div 
                      data-hsfc-id="LiveRegionContent" 
                      aria-live="polite" 
                      id="hs_form_target_widget_1762510008293-c88a9e87-6502-4857-9268-01d309c7c5d7-live-region-content" 
                      className="hsfc-LiveRegionContent"
                    ></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* Contact Form Component */
        ._organism-contact-form_1a2b3c_31 {
          display: block;
          width: 100%;
          background-color: #fff;
          padding: 0 1.5rem 2.1875rem;
        }

        @media only screen and (min-width: 768px) {
          ._organism-contact-form_1a2b3c_31 {
            padding: 0 3.75rem 2.1875rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._organism-contact-form_1a2b3c_31 {
            padding: 0 3.75rem 2.1875rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._organism-contact-form_1a2b3c_31 {
            padding: 0 0rem 2.1875rem;
          }
        }

        /* Container */
        ._container_1a2b3c_53 {
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }

        /* Form Wrapper */
        ._form-wrapper_1a2b3c_59 {
          width: 100%;
        }

        /* HubSpot Form Styles - Applied directly as per your CSS */
        .hsfc-Form .hsfc-Step {
          display: flex;
        }
        
        .hsfc-Form .hsfc-Step .hsfc-Step__Content {
          width: 100%;
          max-width: calc(1200 / 16 * 1rem);
          margin: 0 auto;
          padding: calc(35 / 16 * 1rem) calc(24 / 16 * 1rem);
        }
        
        @media only screen and (min-width: 768px) {
          .hsfc-Form .hsfc-Step .hsfc-Step__Content {
            padding: calc(35 / 16 * 1rem) calc(60 / 16 * 1rem);
          }
        }
        
        @media only screen and (min-width: 1024px) {
          .hsfc-Form .hsfc-Step .hsfc-Step__Content {
            padding: calc(35 / 16 * 1rem) calc(60 / 16 * 1rem);
          }
        }
        
        @media only screen and (min-width: 1440px) {
          .hsfc-Form .hsfc-Step .hsfc-Step__Content {
            padding: calc(35 / 16 * 1rem) calc(0 / 16 * 1rem);
          }
        }
        
        /* Form Layout */
        .hsfc-Row {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        /* Form Fields - Two columns on desktop */
        .hsfc-TextField,
        .hsfc-EmailField,
        .hsfc-TextareaField {
          flex: 1 1 100%;
        }
        
        @media only screen and (min-width: 768px) {
          .hsfc-TextField,
          .hsfc-EmailField {
            flex: 1 1 calc(50% - 0.75rem);
          }
        }
        
        /* Heading - Your exact CSS */
        .hsfc-Renderer .hsfc-Row .hsfc-Heading {
          font-family: var(--font-h2-primary-font-family);
          font-size: var(--font-h2-primary-font-size-mobile);
          line-height: var(--font-h2-primary-line-height-mobile);
          font-weight: var(--font-h2-primary-font-weight);
          letter-spacing: var(--font-h2-primary-letter-spacing);
          text-transform: var(--font-h2-primary-text-transform);
          color: var(--font-h2-primary-color);
          background: var(--font-h2-primary-background);
          padding-bottom: calc(16 / 16 * 1rem);
          width: 100%;
          text-align: center;
        }
        
        /* Input and Textarea Styles - Your exact CSS */
        .hsfc-Renderer .hsfc-Row input,
        .hsfc-Renderer .hsfc-Row textarea {
          font-family: var(--font-text-input-font-family);
          font-size: var(--font-text-input-font-size-mobile);
          line-height: var(--font-text-input-line-height-mobile);
          line-height: 140%;
          font-weight: var(--font-text-input-font-weight);
          letter-spacing: var(--font-text-input-letter-spacing);
          text-transform: var(--font-text-input-text-transform);
          color: var(--font-text-input-color);
          background: var(--font-text-input-background);
          background-color: #FFFFFF;
          border-radius: calc(6 / 16 * 1rem);
          border: calc(1 / 16 * 1rem) solid #CCCCCC;
          padding: calc(10 / 16 * 1rem) calc(16 / 16 * 1rem);
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
        
        /* Focus and Hover States */
        .hsfc-Renderer .hsfc-Row input:hover,
        .hsfc-Renderer .hsfc-Row input:focus,
        .hsfc-Renderer .hsfc-Row textarea:hover,
        .hsfc-Renderer .hsfc-Row textarea:focus {
          border-color: #FE5631 !important;
        }
        
        /* Textarea specific */
        .hsfc-TextareaInput {
          min-height: calc(160 / 16 * 1rem);
          resize: vertical;
        }
        
        /* Labels - Hidden */
        .hsfc-Renderer .hsfc-Row .hsfc-FieldLabel {
          display: none;
        }
        
        /* Checkbox Field - Show label */
        .hsfc-CheckboxField .hsfc-FieldLabel {
          display: flex !important;
          align-items: flex-start;
          gap: 0.75rem;
          width: 100%;
          cursor: pointer;
        }
        
        /* Checkbox input styling */
        .hsfc-CheckboxField .hsfc-FieldLabel input[type="checkbox"] {
          appearance: none;
          width: calc(22 / 16 * 1rem);
          height: calc(22 / 16 * 1rem);
          padding: calc(5 / 16 * 1rem);
          border: calc(1 / 16 * 1rem) solid #CCCCCC;
          border-radius: calc(4 / 16 * 1rem);
          background-color: #FFFFFF;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
          margin-top: 0.125rem;
        }
        
        .hsfc-CheckboxField .hsfc-FieldLabel input[type="checkbox"]:hover {
          border-color: #FE5631;
        }
        
        .hsfc-CheckboxField .hsfc-FieldLabel input[type="checkbox"]:checked {
          background-color: #FE5631;
          border-color: #FE5631;
        }
        
        .hsfc-CheckboxField .hsfc-FieldLabel input[type="checkbox"]:checked::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(45deg);
          width: calc(6 / 16 * 1rem);
          height: calc(10 / 16 * 1rem);
          border: solid #FFFFFF;
          border-width: 0 calc(2 / 16 * 1rem) calc(2 / 16 * 1rem) 0;
          background-color: transparent;
        }
        
        /* Checkbox label text */
        .hsfc-CheckboxField .hsfc-FieldLabel span {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          color: var(--font-copy-s-quaternary-color);
        }
        
        /* Privacy policy link */
        .hsfc-CheckboxField .hsfc-FieldLabel a {
          color: #FE5631;
          text-decoration: none;
        }
        
        .hsfc-CheckboxField .hsfc-FieldLabel a:hover {
          text-decoration: underline;
        }
        
        /* Required indicator */
        .hsfc-FieldLabel__RequiredIndicator {
          color: #FE5631;
          margin-left: 0.25rem;
        }
        
        /* Error Message */
        .hsfc-ErrorAlert {
          font-family: var(--font-copy-s-quaternary-font-family);
          font-size: var(--font-copy-s-quaternary-font-size-mobile);
          line-height: var(--font-copy-s-quaternary-line-height-mobile);
          color: #FF0000;
          margin-top: 0.5rem;
        }
        
        /* Submit Button Row */
        .hsfc-NavigationRow {
          width: 100%;
          margin-top: 1rem;
        }
        
        .hsfc-NavigationRow__Buttons {
          display: flex;
          justify-content: center;
          width: 100%;
        }
        
        /* Submit Button */
        .hsfc-Button {
          font-family: var(--font-tagline-secondary-font-family);
          font-size: var(--font-tagline-secondary-font-size-mobile);
          line-height: var(--font-tagline-secondary-line-height-mobile);
          font-weight: var(--font-tagline-secondary-font-weight);
          letter-spacing: var(--font-tagline-secondary-letter-spacing);
          text-transform: var(--font-tagline-secondary-text-transform);
          color: var(--font-tagline-secondary-color);
          background: var(--font-tagline-secondary-background);
          border-radius: calc(28 / 16 * 1rem);
          padding: calc(8 / 16 * 1rem) calc(24 / 16 * 1rem);
          background-color: #FE5631;
          color: #FFFFFF;
          min-width: calc(120 / 16 * 1rem);
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        
        .hsfc-Button:hover {
          color: var(--font-tagline-secondary-color-hover);
          background-color: #D64B2C;
        }
        
        /* reCAPTCHA Styling */
        .hsfc-ReCaptchaV2 {
          width: 100%;
          margin: 1rem 0;
        }
        
        .grecaptcha-badge {
          width: 256px !important;
          height: 60px !important;
          box-shadow: gray 0px 0px 5px !important;
        }
        
        .grecaptcha-logo iframe {
          width: 256px !important;
          height: 60px !important;
        }
        
        .g-recaptcha-response {
          width: 250px !important;
          height: 40px !important;
          border: 1px solid rgb(193, 193, 193) !important;
          margin: 10px 25px !important;
          padding: 0px !important;
          resize: none !important;
          display: none !important;
        }
        
        /* Desktop media query for font sizes */
        @media only screen and (min-width: 1024px) {
          .hsfc-Renderer .hsfc-Row .hsfc-Heading {
            font-size: var(--font-h2-primary-font-size-desktop);
            line-height: var(--font-h2-primary-line-height-desktop);
            letter-spacing: var(--font-h2-primary-letter-spacing-desktop);
          }
          
          .hsfc-Renderer .hsfc-Row input,
          .hsfc-Renderer .hsfc-Row textarea {
            font-size: var(--font-text-input-font-size-desktop);
            line-height: var(--font-text-input-line-height-desktop);
            letter-spacing: var(--font-text-input-letter-spacing-desktop);
          }
          
          .hsfc-Button {
            font-size: var(--font-tagline-secondary-font-size-desktop);
            line-height: var(--font-tagline-secondary-line-height-desktop);
            letter-spacing: var(--font-tagline-secondary-letter-spacing-desktop);
          }
        }
      `}</style>
    </>
  );
};

export default ContactForm;