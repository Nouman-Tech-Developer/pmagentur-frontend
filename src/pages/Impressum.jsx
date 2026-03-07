// Impressum.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Impressum = () => {
const { t } = useTranslation(); 
 return (
    <>
      <section className="legal-page">
        <div className="legal-container">
          {/* Header with decorative elements */}
          <div className="legal-header">
            <div className="legal-header-decoration">
              <span className="legal-header-line"></span>
              <span className="legal-header-tag">{t('impressum.header.tag')}</span>
              <span className="legal-header-line"></span>
            </div>
            <h1 className="legal-title">{t('impressum.header.title')}</h1>
            <p className="legal-subtitle">{t('impressum.header.subtitle')}</p>
          </div>

          {/* Company Information Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">{t('impressum.company.title')}</h2>
            </div>
            <div className="legal-card-content">
              <div className="legal-grid">
                {/* Unternehmensangaben */}
                <div className="legal-grid-item">
                  <h3 className="legal-grid-title">{t('impressum.company.info.title')}</h3>
                  <div className="legal-grid-content">
                    <p><strong>{t('impressum.company.info.name')}</strong></p>
                    <p dangerouslySetInnerHTML={{ __html: t('impressum.company.info.address') }} />
                  </div>
                </div>

                {/* Kontakt */}
                <div className="legal-grid-item">
                  <h3 className="legal-grid-title">{t('impressum.company.contact.title')}</h3>
                  <div className="legal-grid-content">
                    <p><span className="legal-contact-item">{t('impressum.company.contact.phone')}</span> {t('impressum.company.contact.phoneValue')}</p>
                    <p><span className="legal-contact-item">{t('impressum.company.contact.email')}</span> <a href="mailto:info@reinke-ai.de">{t('impressum.company.contact.emailValue')}</a></p>
                    <p><span className="legal-contact-item">{t('impressum.company.contact.web')}</span> <a href="https://www.reinke-ai.de" target="_blank" rel="noopener noreferrer">{t('impressum.company.contact.webValue')}</a></p>
                  </div>
                </div>

                {/* Geschäftsführer */}
                <div className="legal-grid-item">
                  <h3 className="legal-grid-title">{t('impressum.company.ceo.title')}</h3>
                  <div className="legal-grid-content">
                    <p>{t('impressum.company.ceo.name')}</p>
                  </div>
                </div>

                {/* Registereintrag */}
                <div className="legal-grid-item">
                  <h3 className="legal-grid-title">{t('impressum.company.registration.title')}</h3>
                  <div className="legal-grid-content">
                    <p><span className="legal-register-item">{t('impressum.company.registration.number')}</span> {t('impressum.company.registration.numberValue')}</p>
                    <p><span className="legal-register-item">{t('impressum.company.registration.court')}</span> {t('impressum.company.registration.courtValue')}</p>
                  </div>
                </div>

                {/* Umsatzsteuer-ID */}
                <div className="legal-grid-item">
                  <h3 className="legal-grid-title">{t('impressum.company.vat.title')}</h3>
                  <div className="legal-grid-content">
                    <p className="legal-small-text">{t('impressum.company.vat.info')}</p>
                    <p className="legal-id">{t('impressum.company.vat.id')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Responsible Person Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">{t('impressum.responsible.title')}</h2>
            </div>
            <div className="legal-card-content">
              <div className="legal-responsible">
                <h3 className="legal-section-title">{t('impressum.responsible.section')}</h3>
                <div className="legal-section-content">
                  <p>{t('impressum.responsible.name')}</p>
                  <p dangerouslySetInnerHTML={{ __html: t('impressum.responsible.address') }} />
                </div>
              </div>
            </div>
          </div>

          {/* Dispute Resolution Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">{t('impressum.dispute.title')}</h2>
            </div>
            <div className="legal-card-content">
              <div className="legal-split">
                {/* EU Streitschlichtung */}
                <div className="legal-split-item">
                  <h3 className="legal-section-title">{t('impressum.dispute.eu.title')}</h3>
                  <div className="legal-section-content">
                    <p>{t('impressum.dispute.eu.text')}</p>
                    <p className="legal-link-wrapper">
                      <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="legal-external-link">
                        {t('impressum.dispute.eu.link')}
                        <span className="legal-link-arrow">↗</span>
                      </a>
                    </p>
                    <p className="legal-small-text">{t('impressum.dispute.eu.note')}</p>
                  </div>
                </div>

                {/* Verbraucherstreitbeilegung */}
                <div className="legal-split-item">
                  <h3 className="legal-section-title">{t('impressum.dispute.consumer.title')}</h3>
                  <div className="legal-section-content">
                    <p>{t('impressum.dispute.consumer.text')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Liability Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">{t('impressum.liability.title')}</h2>
            </div>
            <div className="legal-card-content">
              {/* Haftung für Inhalte */}
              <div className="legal-liability-item">
                <h3 className="legal-section-title">{t('impressum.liability.content.title')}</h3>
                <div className="legal-section-content">
                  <p>{t('impressum.liability.content.text1')}</p>
                  <p className="legal-highlight">{t('impressum.liability.content.text2')}</p>
                </div>
              </div>

              {/* Haftung für Links */}
              <div className="legal-liability-item">
                <h3 className="legal-section-title">{t('impressum.liability.links.title')}</h3>
                <div className="legal-section-content">
                  <p>{t('impressum.liability.links.text1')}</p>
                  <p>{t('impressum.liability.links.text2')}</p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div className="legal-liability-item">
                <h3 className="legal-section-title">{t('impressum.liability.copyright.title')}</h3>
                <div className="legal-section-content">
                  <p>{t('impressum.liability.copyright.text1')}</p>
                  <p className="legal-highlight">{t('impressum.liability.copyright.text2')}</p>
                  <p>{t('impressum.liability.copyright.text3')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with back link and date */}
          <div className="legal-footer">
            <div className="legal-footer-content">
              <Link to="/" className="legal-back-link">
                <span className="legal-back-arrow">←</span>
                <span className="legal-back-text">{t('impressum.footer.back', 'Zurück zur Startseite')}</span>
              </Link>
              <div className="legal-footer-info">
                <span className="legal-footer-date">{t('impressum.footer.date', 'Stand: März 2024')}</span>
                <span className="legal-footer-dot">•</span>
                <span className="legal-footer-print" onClick={() => window.print()}>{t('impressum.footer.print', 'Drucken')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Font from FeatureSection - Applied to everything */
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
          margin-bottom: 40px;
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

        /* Grid Layout */
        .legal-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }

        .legal-grid-item {
          border-bottom: 1px solid #333333;
          padding-bottom: 20px;
        }

        .legal-grid-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .legal-grid-title {
          font-size: 16px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .legal-grid-content {
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
        }

        .legal-grid-content a {
          color: #FFFFFF;
          text-decoration: none;
          border-bottom: 1px solid #444444;
          transition: all 0.2s ease;
        }

        .legal-grid-content a:hover {
          color: #FFFFFF;
          border-bottom-color: #FFFFFF;
        }

        /* Section Styles */
        .legal-section-title {
          font-size: 18px;
          font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 15px 0;
        }

        .legal-section-content {
          font-size: 15px;
          line-height: 1.7;
          color: #9CA3AF;
        }

        .legal-section-content p {
          margin: 0 0 12px 0;
        }

        .legal-section-content p:last-child {
          margin-bottom: 0;
        }

        /* Split Layout */
        .legal-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .legal-split-item {
          padding-right: 20px;
        }

        .legal-split-item:first-child {
          border-right: 1px solid #333333;
        }

        /* Liability Items */
        .legal-liability-item {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #333333;
        }

        .legal-liability-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        /* Text Styles */
        .legal-contact-item {
          font-weight: 600;
          color: #FFFFFF;
          display: inline-block;
          width: 70px;
        }

        .legal-register-item {
          font-weight: 600;
          color: #FFFFFF;
          display: inline-block;
          width: 130px;
        }

        .legal-small-text {
          font-size: 14px;
          color: #6B7280;
          margin-bottom: 8px !important;
        }

        .legal-id {
          font-size: 20px;
          font-weight: 600;
          color: #FFFFFF;
          letter-spacing: 1px;
        }

        .legal-highlight {
          background: #1A1A1A;
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid #FFFFFF;
          margin: 15px 0 !important;
          color: #9CA3AF;
        }

        /* Links */
        .legal-link-wrapper {
          margin: 15px 0;
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

        .legal-text a {
          color: #FFFFFF;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s ease;
        }

        .legal-text a:hover {
          color: #9CA3AF;
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

        .legal-footer-print {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .legal-footer-print:hover {
          color: #FFFFFF;
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
          
          .legal-grid {
            gap: 20px;
          }
        }

        @media (max-width: 900px) {
          .legal-grid {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .legal-split {
            grid-template-columns: 1fr;
            gap: 25px;
          }
          
          .legal-split-item:first-child {
            border-right: none;
            padding-right: 0;
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
          
          .legal-footer-content {
            flex-direction: column;
            gap: 15px;
            align-items: flex-start;
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
          
          .legal-card-title {
            font-size: 22px;
          }
          
          .legal-section-title {
            font-size: 17px;
          }
          
          .legal-grid-title {
            font-size: 15px;
          }
          
          .legal-grid-content {
            font-size: 14px;
          }
          
          .legal-footer-info {
            flex-wrap: wrap;
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
          
          .legal-card-header {
            padding: 18px 20px;
          }
          
          .legal-card-content {
            padding: 20px;
          }
          
          .legal-contact-item {
            width: 60px;
          }
          
          .legal-register-item {
            width: 110px;
          }
        }

        @media (max-width: 360px) {
          .legal-title {
            font-size: 28px;
          }
          
          .legal-card-title {
            font-size: 20px;
          }
          
          .legal-contact-item {
            display: block;
            width: auto;
            margin-bottom: 5px;
          }
          
          .legal-register-item {
            display: block;
            width: auto;
            margin-bottom: 5px;
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
          }
          
          .legal-footer {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Impressum;