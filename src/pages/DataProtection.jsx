import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

const DataProtection = () => {
  const { t } = useTranslation();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDataProtection();
  }, []);

  const loadDataProtection = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('dataprotection')
        .select('content')
        .order('id', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setContent(data.content);
      }
    } catch (err) {
      console.error('Error loading data protection:', err);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to get content from database or fallback to translation
  const getContent = (path, fallback) => {
    if (!content) return fallback;
    const keys = path.split('.');
    let value = content;
    for (const key of keys) {
      if (value && typeof value === 'object') {
        value = value[key];
      } else {
        return fallback;
      }
    }
    return value || fallback;
  };

  if (loading) {
    return (
      <section className="legal-page">
        <div className="legal-container">
          <div className="loading-spinner" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '400px',
            color: '#FFFFFF'
          }}>
            Loading...
          </div>
        </div>
      </section>
    );
  }

  // Get dynamic content from database or fallback to translations
  const overviewGeneralText = getContent('overview.general.text', t('dataprotection.sections.overview.general.text'));
  
  const q1 = getContent('overview.collection.q1', t('dataprotection.sections.overview.collection.q1'));
  const a1 = getContent('overview.collection.a1', t('dataprotection.sections.overview.collection.a1'));
  const q2 = getContent('overview.collection.q2', t('dataprotection.sections.overview.collection.q2'));
  const a2 = getContent('overview.collection.a2', t('dataprotection.sections.overview.collection.a2'));
  const q3 = getContent('overview.collection.q3', t('dataprotection.sections.overview.collection.q3'));
  const a3 = getContent('overview.collection.a3', t('dataprotection.sections.overview.collection.a3'));
  const q4 = getContent('overview.collection.q4', t('dataprotection.sections.overview.collection.q4'));
  const a4 = getContent('overview.collection.a4', t('dataprotection.sections.overview.collection.a4'));
  
  const privacyText1 = getContent('general.privacy.text1', t('dataprotection.sections.general.privacy.text1'));
  const privacyText2 = getContent('general.privacy.text2', t('dataprotection.sections.general.privacy.text2'));
  const privacyNote = getContent('general.privacy.note', t('dataprotection.sections.general.privacy.note'));
  
  const responsibleText = getContent('general.responsible.text', t('dataprotection.sections.general.responsible.text'));
  const companyName = getContent('general.responsible.name', t('dataprotection.company.name'));
  const companyStreet = getContent('general.responsible.address.street', t('dataprotection.company.address.street'));
  const companyCity = getContent('general.responsible.address.city', t('dataprotection.company.address.city'));
  const companyPhone = getContent('general.responsible.phone', t('dataprotection.company.phone'));
  const companyEmail = getContent('general.responsible.email', t('dataprotection.company.email'));
  const responsibleNote = getContent('general.responsible.note', t('dataprotection.sections.general.responsible.note'));
  
  const withdrawalText = getContent('general.withdrawal.text', t('dataprotection.sections.general.withdrawal.text'));
  const complaintText = getContent('general.complaint.text', t('dataprotection.sections.general.complaint.text'));
  
  const cookiesText1 = getContent('dataCollection.cookies.text1', t('dataprotection.sections.dataCollection.cookies.text1'));
  const cookiesSessionTitle = getContent('dataCollection.cookies.session.title', t('dataprotection.sections.dataCollection.cookies.session.title'));
  const cookiesSessionText = getContent('dataCollection.cookies.session.text', t('dataprotection.sections.dataCollection.cookies.session.text'));
  const cookiesPermanentTitle = getContent('dataCollection.cookies.permanent.title', t('dataprotection.sections.dataCollection.cookies.permanent.title'));
  const cookiesPermanentText = getContent('dataCollection.cookies.permanent.text', t('dataprotection.sections.dataCollection.cookies.permanent.text'));
  const cookiesThirdPartyTitle = getContent('dataCollection.cookies.thirdParty.title', t('dataprotection.sections.dataCollection.cookies.thirdParty.title'));
  const cookiesThirdPartyText = getContent('dataCollection.cookies.thirdParty.text', t('dataprotection.sections.dataCollection.cookies.thirdParty.text'));
  const cookiesText2 = getContent('dataCollection.cookies.text2', t('dataprotection.sections.dataCollection.cookies.text2'));
  const cookiesHighlight = getContent('dataCollection.cookies.highlight', t('dataprotection.sections.dataCollection.cookies.highlight'));
  
  const contactFormText1 = getContent('dataCollection.contactForm.text1', t('dataprotection.sections.dataCollection.contactForm.text1'));
  const contactFormText2 = getContent('dataCollection.contactForm.text2', t('dataprotection.sections.dataCollection.contactForm.text2'));
  const contactFormNote = getContent('dataCollection.contactForm.note', t('dataprotection.sections.dataCollection.contactForm.note'));
  
  const emailPhoneText1 = getContent('dataCollection.emailPhone.text1', t('dataprotection.sections.dataCollection.emailPhone.text1'));
  const emailPhoneText2 = getContent('dataCollection.emailPhone.text2', t('dataprotection.sections.dataCollection.emailPhone.text2'));
  const emailPhoneNote = getContent('dataCollection.emailPhone.note', t('dataprotection.sections.dataCollection.emailPhone.note'));
  
  const googleFontsText1 = getContent('plugins.googleFonts.text1', t('dataprotection.sections.plugins.googleFonts.text1'));
  const googleFontsText2 = getContent('plugins.googleFonts.text2', t('dataprotection.sections.plugins.googleFonts.text2'));
  const googleFontsMoreInfo = getContent('plugins.googleFonts.moreInfo', t('dataprotection.sections.plugins.googleFonts.moreInfo'));
  const googleFontsFaqLink = getContent('plugins.googleFonts.faqLink', t('dataprotection.sections.plugins.googleFonts.faqLink'));
  const googleFontsPrivacyLink = getContent('plugins.googleFonts.privacyLink', t('dataprotection.sections.plugins.googleFonts.privacyLink'));
  
  const changesText = getContent('changes.text', t('dataprotection.sections.changes.text'));
  const questionsText = getContent('questions.text', t('dataprotection.sections.questions.text'));
  const questionsEmail = getContent('questions.email', t('dataprotection.sections.questions.email'));

  return (
    <>
      <section className="legal-page">
        <div className="legal-container">
          {/* Header with decorative elements */}
          <div className="legal-header">
            <div className="legal-header-decoration">
              <span className="legal-header-line"></span>
              <span className="legal-header-tag">{t('dataprotection.header.tag')}</span>
              <span className="legal-header-line"></span>
            </div>
            <h1 className="legal-title">{t('dataprotection.header.title')}</h1>
            <p className="legal-subtitle">{t('dataprotection.header.subtitle')}</p>
          </div>

          {/* Content Cards */}
          <div className="legal-content">
            {/* Overview Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.overview.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.overview.general.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{overviewGeneralText}</p>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.overview.collection.title')}</h3>
                  <div className="legal-subsection-content">
                    <div className="legal-qna">
                      <p className="legal-question"><strong>{q1}</strong></p>
                      <p className="legal-answer">{a1} <Link to="/impressum">{t('dataprotection.impressum.link')}</Link>{t('dataprotection.sections.overview.collection.a1_2')}</p>
                    </div>
                    <div className="legal-qna">
                      <p className="legal-question"><strong>{q2}</strong></p>
                      <p className="legal-answer">{a2}</p>
                    </div>
                    <div className="legal-qna">
                      <p className="legal-question"><strong>{q3}</strong></p>
                      <p className="legal-answer">{a3}</p>
                    </div>
                    <div className="legal-qna">
                      <p className="legal-question"><strong>{q4}</strong></p>
                      <p className="legal-answer">{a4}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* General Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.general.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.general.privacy.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{privacyText1}</p>
                    <p>{privacyText2}</p>
                    <div className="legal-notice">
                      <p>{privacyNote}</p>
                    </div>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.general.responsible.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{responsibleText}</p>
                    <div className="legal-address-block">
                      <p><strong>{companyName}</strong><br />
                      {companyStreet}<br />
                      {companyCity}</p>
                      <p className="legal-contact-line">
                        <span className="legal-contact-label">{t('dataprotection.contact.phone')}:</span> 
                        <a href={`tel:${companyPhone}`}>{companyPhone}</a>
                      </p>
                      <p className="legal-contact-line">
                        <span className="legal-contact-label">{t('dataprotection.contact.email')}:</span> 
                        <a href={`mailto:${companyEmail}`}>{companyEmail}</a>
                      </p>
                    </div>
                    <p className="legal-small-text">{responsibleNote}</p>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.general.withdrawal.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{withdrawalText}</p>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.general.complaint.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{complaintText}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Collection Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.dataCollection.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.dataCollection.cookies.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{cookiesText1}</p>
                    <div className="legal-cookie-types">
                      <div className="legal-cookie-type">
                        <h4 className="legal-cookie-title">{cookiesSessionTitle}</h4>
                        <p>{cookiesSessionText}</p>
                      </div>
                      <div className="legal-cookie-type">
                        <h4 className="legal-cookie-title">{cookiesPermanentTitle}</h4>
                        <p>{cookiesPermanentText}</p>
                      </div>
                      <div className="legal-cookie-type">
                        <h4 className="legal-cookie-title">{cookiesThirdPartyTitle}</h4>
                        <p>{cookiesThirdPartyText}</p>
                      </div>
                    </div>
                    <p>{cookiesText2}</p>
                    <div className="legal-highlight">
                      <p>{cookiesHighlight}</p>
                    </div>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.dataCollection.contactForm.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{contactFormText1}</p>
                    <p>{contactFormText2}</p>
                    <p className="legal-note">{contactFormNote}</p>
                  </div>
                </div>
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.dataCollection.emailPhone.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{emailPhoneText1}</p>
                    <p>{emailPhoneText2}</p>
                    <p className="legal-note">{emailPhoneNote}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plugins Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.plugins.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-subsection">
                  <h3 className="legal-subsection-title">{t('dataprotection.sections.plugins.googleFonts.title')}</h3>
                  <div className="legal-subsection-content">
                    <p>{googleFontsText1}</p>
                    <p>{googleFontsText2}</p>
                    <div className="legal-links">
                      <p>{googleFontsMoreInfo}</p>
                      <ul className="legal-link-list">
                        <li>
                          <a href={googleFontsFaqLink} target="_blank" rel="noopener noreferrer" className="legal-external-link">
                            {t('dataprotection.sections.plugins.googleFonts.faqLink')}
                            <span className="legal-link-arrow">↗</span>
                          </a>
                        </li>
                        <li>
                          <a href={googleFontsPrivacyLink} target="_blank" rel="noopener noreferrer" className="legal-external-link">
                            {t('dataprotection.sections.plugins.googleFonts.privacyLink')}
                            <span className="legal-link-arrow">↗</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.changes.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-simple-section">
                  <p>{changesText}</p>
                </div>
              </div>
            </div>

            {/* Questions Section */}
            <div className="legal-card">
              <div className="legal-card-header">
                <h2 className="legal-card-title">{t('dataprotection.sections.questions.title')}</h2>
              </div>
              <div className="legal-card-content">
                <div className="legal-simple-section">
                  <p>{questionsText}</p>
                  <div className="legal-contact-block">
                    <a href={`mailto:${questionsEmail}`} className="legal-email-link">{questionsEmail}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with back link and last updated */}
          <div className="legal-footer">
            <div className="legal-footer-content">
              <Link to="/" className="legal-back-link">
                <span className="legal-back-arrow">←</span>
                <span className="legal-back-text">{t('dataprotection.footer.back')}</span>
              </Link>
              <div className="legal-footer-info">
                <span className="legal-footer-date">{t('dataprotection.footer.lastUpdated')}</span>
                <span className="legal-footer-dot">•</span>
                <Link to="/impressum" className="legal-footer-link">{t('dataprotection.footer.impressum')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Base styles - Force white text on dark background */
        .legal-page,
        .legal-page * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }

        .legal-page {
          width: 100%;
          min-height: 100vh;
          padding: 140px 100px 60px;
          background: #000000;
          color: #FFFFFF;
        }

        .legal-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .legal-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .legal-header-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 25px;
        }

        .legal-header-line {
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFFFFF, transparent);
        }

        .legal-header-tag {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #9CA3AF;
        }

        .legal-title {
          font-size: 56px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 15px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .legal-subtitle {
          font-size: 18px;
          color: #9CA3AF;
          margin: 0;
          font-weight: 400;
        }

        /* Card Styles */
        .legal-card {
          background: #111111;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          margin-bottom: 30px;
          overflow: hidden;
          border: 1px solid #333333;
          transition: all 0.3s ease;
        }

        .legal-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8);
          border-color: #444444;
        }

        .legal-card-header {
          padding: 25px 30px;
          background: #111111;
          border-bottom: 1px solid #333333;
        }

        .legal-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .legal-card-content {
          padding: 30px;
        }

        /* Subsection Styles */
        .legal-subsection {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #333333;
        }

        .legal-subsection:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .legal-subsection-title {
          font-size: 20px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 20px 0;
        }

        .legal-subsection-content {
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
        }

        .legal-subsection-content p {
          margin: 0 0 15px 0;
          color: #9CA3AF;
        }

        .legal-subsection-content p:last-child {
          margin-bottom: 0;
        }

        /* Simple Section Styles */
        .legal-simple-section {
          padding: 10px 0;
        }

        .legal-simple-content {
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
        }

        /* Q&A Styles */
        .legal-qna {
          margin-bottom: 20px;
        }

        .legal-question {
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 5px;
        }

        .legal-answer {
          color: #9CA3AF;
          padding-left: 20px;
          border-left: 2px solid #333333;
        }

        .legal-answer a {
          color: #FFFFFF;
          text-decoration: none;
          border-bottom: 1px solid #444444;
        }

        .legal-answer a:hover {
          border-bottom-color: #FFFFFF;
        }

        /* Notice and Highlight Styles */
        .legal-notice {
          background: #1A1A1A;
          padding: 15px 20px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 3px solid #FFFFFF;
        }

        .legal-notice p {
          color: #9CA3AF;
          margin: 0;
        }

        .legal-highlight {
          background: #1A1A1A;
          padding: 15px 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 3px solid #FFFFFF;
        }

        .legal-highlight p {
          color: #9CA3AF;
          margin: 0;
        }

        .legal-note {
          background: #1A1A1A;
          padding: 12px 15px;
          border-radius: 6px;
          font-size: 14px;
          margin-top: 15px !important;
        }

        .legal-note p {
          color: #9CA3AF;
          margin: 0;
        }

        /* Address Block */
        .legal-address-block {
          background: #1A1A1A;
          padding: 20px;
          border-radius: 12px;
          margin: 15px 0;
        }

        .legal-address-block strong {
          color: #FFFFFF;
        }

        .legal-address-block p {
          color: #9CA3AF;
          margin: 5px 0;
        }

        .legal-contact-line {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 8px 0;
        }

        .legal-contact-label {
          font-weight: 600;
          color: #FFFFFF;
          min-width: 60px;
        }

        .legal-contact-line a {
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-contact-line a:hover {
          color: #9CA3AF;
        }

        /* Cookie Types */
        .legal-cookie-types {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 20px 0;
        }

        .legal-cookie-type {
          background: #1A1A1A;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #333333;
        }

        .legal-cookie-title {
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 8px 0;
        }

        .legal-cookie-type p {
          font-size: 14px;
          margin: 0;
          color: #9CA3AF;
        }

        /* Links */
        .legal-links {
          margin-top: 20px;
        }

        .legal-links p {
          color: #9CA3AF;
        }

        .legal-link-list {
          list-style: none;
          padding: 0;
          margin: 10px 0 0 0;
        }

        .legal-link-list li {
          margin-bottom: 10px;
        }

        .legal-external-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #FFFFFF;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          background: #1A1A1A;
          border-radius: 40px;
          transition: all 0.2s ease;
          border: 1px solid #333333;
        }

        .legal-external-link:hover {
          background: #222222;
          transform: translateY(-1px);
          border-color: #444444;
          color: #FFFFFF;
        }

        .legal-link-arrow {
          font-size: 14px;
          color: #FFFFFF;
        }

        /* Contact Block */
        .legal-contact-block {
          margin-top: 20px;
        }

        .legal-email-link {
          display: inline-block;
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          text-decoration: none;
          padding: 10px 20px;
          background: #1A1A1A;
          border-radius: 40px;
          transition: all 0.2s ease;
          border: 1px solid #333333;
        }

        .legal-email-link:hover {
          background: #222222;
          transform: translateY(-1px);
          border-color: #444444;
          color: #FFFFFF;
        }

        /* Footer */
        .legal-footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid #333333;
        }

        .legal-footer-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .legal-back-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: #FFFFFF;
          font-weight: 500;
          transition: all 0.2s ease;
          padding: 10px 20px;
          background: #111111;
          border-radius: 40px;
          border: 1px solid #333333;
        }

        .legal-back-link:hover {
          background: #1A1A1A;
          transform: translateX(-5px);
          border-color: #444444;
          color: #FFFFFF;
        }

        .legal-back-arrow {
          font-size: 20px;
          line-height: 1;
          color: #FFFFFF;
        }

        .legal-back-text {
          font-size: 15px;
          color: #FFFFFF;
        }

        .legal-footer-info {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }

        .legal-footer-date {
          color: #6B7280;
        }

        .legal-footer-dot {
          color: #333333;
        }

        .legal-footer-link {
          color: #6B7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-footer-link:hover {
          color: #FFFFFF;
        }

        /* Small Text */
        .legal-small-text {
          font-size: 14px;
          color: #6B7280;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .legal-page {
            padding: 120px 60px 50px;
          }
          .legal-title {
            font-size: 48px;
          }
        }

        @media (max-width: 1024px) {
          .legal-page {
            padding: 100px 40px 40px;
          }
          .legal-title {
            font-size: 44px;
          }
          .legal-cookie-types {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .legal-footer-content {
            flex-direction: column;
            gap: 20px;
            align-items: flex-start;
          }
        }

        @media (max-width: 768px) {
          .legal-page {
            padding: 90px 30px 30px;
          }
          .legal-title {
            font-size: 40px;
          }
          .legal-header-decoration {
            gap: 15px;
          }
          .legal-header-line {
            width: 40px;
          }
          .legal-card-header {
            padding: 20px 25px;
          }
          .legal-card-content {
            padding: 25px;
          }
          .legal-card-title {
            font-size: 22px;
          }
          .legal-subsection-title {
            font-size: 18px;
          }
          .legal-cookie-types {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }

        @media (max-width: 576px) {
          .legal-page {
            padding: 80px 20px 25px;
          }
          .legal-title {
            font-size: 36px;
          }
          .legal-subtitle {
            font-size: 16px;
          }
          .legal-card-header {
            padding: 18px 20px;
          }
          .legal-card-content {
            padding: 20px;
          }
          .legal-card-title {
            font-size: 20px;
          }
          .legal-answer {
            padding-left: 15px;
          }
        }

        @media (max-width: 480px) {
          .legal-page {
            padding: 70px 15px 20px;
          }
          .legal-title {
            font-size: 32px;
          }
          .legal-header-tag {
            font-size: 11px;
          }
          .legal-contact-line {
            flex-direction: column;
            gap: 5px;
          }
        }

        /* Print Styles */
        @media print {
          .legal-page {
            padding: 20px;
            background: white;
            color: black;
          }
          .legal-card {
            box-shadow: none;
            border: 1px solid #ddd;
            break-inside: avoid;
          }
          .legal-footer {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default DataProtection;