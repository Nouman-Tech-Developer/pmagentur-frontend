// DataProtection.jsx (Datenschutz)
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DataProtection = () => {
  const { t } = useTranslation(); // ← No namespace here

  // Organize content into sections for better structure
  const sections = [
    {
      id: 1,
      title: t('dataprotection.sections.overview.title'),
      subsections: [
        {
          title: t('dataprotection.sections.overview.general.title'),
          content: <p>{t('dataprotection.sections.overview.general.text')}</p>
        },
        {
          title: t('dataprotection.sections.overview.collection.title'),
          content: (
            <>
              <div className="legal-qna">
                <p className="legal-question"><strong>{t('dataprotection.sections.overview.collection.q1')}</strong></p>
                <p className="legal-answer">{t('dataprotection.sections.overview.collection.a1')} <Link to="/impressum">{t('dataprotection.impressum.link')}</Link>{t('dataprotection.sections.overview.collection.a1_2')}</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>{t('dataprotection.sections.overview.collection.q2')}</strong></p>
                <p className="legal-answer">{t('dataprotection.sections.overview.collection.a2')}</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>{t('dataprotection.sections.overview.collection.q3')}</strong></p>
                <p className="legal-answer">{t('dataprotection.sections.overview.collection.a3')}</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>{t('dataprotection.sections.overview.collection.q4')}</strong></p>
                <p className="legal-answer">{t('dataprotection.sections.overview.collection.a4')}</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      id: 2,
      title: t('dataprotection.sections.general.title'),
      subsections: [
        {
          title: t('dataprotection.sections.general.privacy.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.general.privacy.text1')}</p>
              <p>{t('dataprotection.sections.general.privacy.text2')}</p>
              <div className="legal-notice">
                <p>{t('dataprotection.sections.general.privacy.note')}</p>
              </div>
            </>
          )
        },
        {
          title: t('dataprotection.sections.general.responsible.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.general.responsible.text')}</p>
              <div className="legal-address-block">
                <p><strong>{t('dataprotection.company.name')}</strong><br />
                {t('dataprotection.company.address.street')}<br />
                {t('dataprotection.company.address.city')}</p>
                <p className="legal-contact-line">
                  <span className="legal-contact-label">{t('dataprotection.contact.phone')}:</span> 
                  <a href="tel:+493012345678">{t('dataprotection.company.phone')}</a>
                </p>
                <p className="legal-contact-line">
                  <span className="legal-contact-label">{t('dataprotection.contact.email')}:</span> 
                  <a href="mailto:info@reinke-ai.de">{t('dataprotection.company.email')}</a>
                </p>
              </div>
              <p className="legal-small-text">{t('dataprotection.sections.general.responsible.note')}</p>
            </>
          )
        },
        {
          title: t('dataprotection.sections.general.withdrawal.title'),
          content: <p>{t('dataprotection.sections.general.withdrawal.text')}</p>
        },
        {
          title: t('dataprotection.sections.general.complaint.title'),
          content: <p>{t('dataprotection.sections.general.complaint.text')}</p>
        }
      ]
    },
    {
      id: 3,
      title: t('dataprotection.sections.dataCollection.title'),
      subsections: [
        {
          title: t('dataprotection.sections.dataCollection.cookies.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.dataCollection.cookies.text1')}</p>
              
              <div className="legal-cookie-types">
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">{t('dataprotection.sections.dataCollection.cookies.session.title')}</h4>
                  <p>{t('dataprotection.sections.dataCollection.cookies.session.text')}</p>
                </div>
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">{t('dataprotection.sections.dataCollection.cookies.permanent.title')}</h4>
                  <p>{t('dataprotection.sections.dataCollection.cookies.permanent.text')}</p>
                </div>
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">{t('dataprotection.sections.dataCollection.cookies.thirdParty.title')}</h4>
                  <p>{t('dataprotection.sections.dataCollection.cookies.thirdParty.text')}</p>
                </div>
              </div>
              
              <p>{t('dataprotection.sections.dataCollection.cookies.text2')}</p>
              
              <div className="legal-highlight">
                <p>{t('dataprotection.sections.dataCollection.cookies.highlight')}</p>
              </div>
            </>
          )
        },
        {
          title: t('dataprotection.sections.dataCollection.contactForm.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.dataCollection.contactForm.text1')}</p>
              <p>{t('dataprotection.sections.dataCollection.contactForm.text2')}</p>
              <p className="legal-note">{t('dataprotection.sections.dataCollection.contactForm.note')}</p>
            </>
          )
        },
        {
          title: t('dataprotection.sections.dataCollection.emailPhone.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.dataCollection.emailPhone.text1')}</p>
              <p>{t('dataprotection.sections.dataCollection.emailPhone.text2')}</p>
              <p className="legal-note">{t('dataprotection.sections.dataCollection.emailPhone.note')}</p>
            </>
          )
        }
      ]
    },
    {
      id: 4,
      title: t('dataprotection.sections.plugins.title'),
      subsections: [
        {
          title: t('dataprotection.sections.plugins.googleFonts.title'),
          content: (
            <>
              <p>{t('dataprotection.sections.plugins.googleFonts.text1')}</p>
              <p>{t('dataprotection.sections.plugins.googleFonts.text2')}</p>
              <div className="legal-links">
                <p>{t('dataprotection.sections.plugins.googleFonts.moreInfo')}</p>
                <ul className="legal-link-list">
                  <li>
                    <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="legal-external-link">
                      {t('dataprotection.sections.plugins.googleFonts.faqLink')}
                      <span className="legal-link-arrow">↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-external-link">
                      {t('dataprotection.sections.plugins.googleFonts.privacyLink')}
                      <span className="legal-link-arrow">↗</span>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )
        }
      ]
    },
    {
      id: 5,
      title: t('dataprotection.sections.changes.title'),
      content: (
        <div className="legal-simple-section">
          <p>{t('dataprotection.sections.changes.text')}</p>
        </div>
      )
    },
    {
      id: 6,
      title: t('dataprotection.sections.questions.title'),
      content: (
        <div className="legal-simple-section">
          <p>{t('dataprotection.sections.questions.text')}</p>
          <div className="legal-contact-block">
            <a href="mailto:datenschutz@reinke-ai.de" className="legal-email-link">{t('dataprotection.sections.questions.email')}</a>
          </div>
        </div>
      )
    }
  ];

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
            {sections.map((section) => (
              <div key={section.id} className="legal-card">
                <div className="legal-card-header">
                  <h2 className="legal-card-title">{section.title}</h2>
                </div>
                <div className="legal-card-content">
                  {section.subsections ? (
                    // Sections with subsections
                    section.subsections.map((subsection, index) => (
                      <div key={index} className="legal-subsection">
                        <h3 className="legal-subsection-title">{subsection.title}</h3>
                        <div className="legal-subsection-content">
                          {subsection.content}
                        </div>
                      </div>
                    ))
                  ) : (
                    // Simple sections without subsections
                    <div className="legal-simple-content">
                      {section.content}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
        /* Black Background Theme */
        .legal-page,
        .legal-page * {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
        }

        .legal-page {
          width: 100%;
          min-height: 100vh;
          padding: 140px 100px 60px;
          background: #000000;
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
          color: #9CA3AF;
        }

        .legal-highlight {
          background: #1A1A1A;
          padding: 15px 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 3px solid #FFFFFF;
          color: #9CA3AF;
        }

        .legal-note {
          background: #1A1A1A;
          padding: 12px 15px;
          border-radius: 6px;
          font-size: 14px;
          color: #9CA3AF;
          margin-top: 15px !important;
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
        }

        .legal-link-arrow {
          font-size: 14px;
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
        }

        .legal-back-arrow {
          font-size: 20px;
          line-height: 1;
        }

        .legal-back-text {
          font-size: 15px;
        }

        .legal-footer-info {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #6B7280;
          font-size: 14px;
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