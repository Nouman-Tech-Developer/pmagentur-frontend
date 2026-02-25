// Impressum.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Impressum = () => {
  // Group sections for better organization
  const companyInfo = [
    {
      title: 'Unternehmensangaben',
      content: (
        <>
          <p><strong>Reinke AI Automation GmbH</strong></p>
          <p>Musterstraße 123<br />10115 Berlin<br />Deutschland</p>
        </>
      )
    },
    {
      title: 'Kontakt',
      content: (
        <>
          <p><span className="legal-contact-item">Telefon:</span> +49 (0) 30 12345678</p>
          <p><span className="legal-contact-item">E-Mail:</span> <a href="mailto:info@reinke-ai.de">info@reinke-ai.de</a></p>
          <p><span className="legal-contact-item">Web:</span> <a href="https://www.reinke-ai.de" target="_blank" rel="noopener noreferrer">www.reinke-ai.de</a></p>
        </>
      )
    },
    {
      title: 'Vertretungsberechtigter Geschäftsführer',
      content: <p>Max Mustermann</p>
    },
    {
      title: 'Registereintrag',
      content: (
        <>
          <p><span className="legal-register-item">Handelsregister:</span> HRB 123456</p>
          <p><span className="legal-register-item">Registergericht:</span> Amtsgericht Berlin-Charlottenburg</p>
        </>
      )
    },
    {
      title: 'Umsatzsteuer-ID',
      content: (
        <>
          <p className="legal-small-text">Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</p>
          <p className="legal-id">DE123456789</p>
        </>
      )
    }
  ];

  const responsibleInfo = [
    {
      title: 'Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV',
      content: (
        <>
          <p>Max Mustermann</p>
          <p>Musterstraße 123<br />10115 Berlin</p>
        </>
      )
    }
  ];

  const legalInfo = [
    {
      title: 'EU-Streitschlichtung',
      content: (
        <>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:</p>
          <p className="legal-link-wrapper">
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="legal-external-link">
              ec.europa.eu/consumers/odr
              <span className="legal-link-arrow">↗</span>
            </a>
          </p>
          <p className="legal-small-text">Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
        </>
      )
    },
    {
      title: 'Verbraucherstreitbeilegung',
      content: (
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      )
    }
  ];

  const liabilityInfo = [
    {
      title: 'Haftung für Inhalte',
      content: (
        <>
          <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
          <p className="legal-highlight">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.</p>
        </>
      )
    },
    {
      title: 'Haftung für Links',
      content: (
        <>
          <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
          <p>Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.</p>
        </>
      )
    },
    {
      title: 'Urheberrecht',
      content: (
        <>
          <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
          <p className="legal-highlight">Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>
          <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.</p>
        </>
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
              <span className="legal-header-tag">Rechtliches</span>
              <span className="legal-header-line"></span>
            </div>
            <h1 className="legal-title">Impressum</h1>
            <p className="legal-subtitle">Angaben gemäß § 5 TMG</p>
          </div>

          {/* Company Information Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">Unternehmensinformationen</h2>
            </div>
            <div className="legal-card-content">
              <div className="legal-grid">
                {companyInfo.map((section, index) => (
                  <div key={index} className="legal-grid-item">
                    <h3 className="legal-grid-title">{section.title}</h3>
                    <div className="legal-grid-content">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Responsible Person Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">Verantwortliche Person</h2>
            </div>
            <div className="legal-card-content">
              {responsibleInfo.map((section, index) => (
                <div key={index} className="legal-responsible">
                  <h3 className="legal-section-title">{section.title}</h3>
                  <div className="legal-section-content">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispute Resolution Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">Streitbeilegung</h2>
            </div>
            <div className="legal-card-content">
              <div className="legal-split">
                {legalInfo.map((section, index) => (
                  <div key={index} className="legal-split-item">
                    <h3 className="legal-section-title">{section.title}</h3>
                    <div className="legal-section-content">
                      {section.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Liability Card */}
          <div className="legal-card">
            <div className="legal-card-header">
              <h2 className="legal-card-title">Haftungs- und Urheberrecht</h2>
            </div>
            <div className="legal-card-content">
              {liabilityInfo.map((section, index) => (
                <div key={index} className="legal-liability-item">
                  <h3 className="legal-section-title">{section.title}</h3>
                  <div className="legal-section-content">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer with back link and date */}
          <div className="legal-footer">
            <div className="legal-footer-content">
              <Link to="/" className="legal-back-link">
                <span className="legal-back-arrow">←</span>
                <span className="legal-back-text">Zurück zur Startseite</span>
              </Link>
              <div className="legal-footer-info">
                <span className="legal-footer-date">Stand: März 2024</span>
                <span className="legal-footer-dot">•</span>
                <span className="legal-footer-print" onClick={() => window.print()}>Drucken</span>
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
          background: #F9FAFB;
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
          background: linear-gradient(90deg, transparent, #000000, transparent);
        }

        .legal-header-tag {
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: #6B7280;
        }

        .legal-title {
          font-size: 56px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 15px 0;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }

        .legal-subtitle {
          font-size: 18px;
          color: #6B7280;
          margin: 0;
          font-weight: 400;
        }

        /* Card Styles */
        .legal-card {
          background: #FFFFFF;
          border-radius: 24px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          margin-bottom: 40px;
          overflow: hidden;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
        }

        .legal-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
        }

        .legal-card-header {
          padding: 25px 30px;
          background: #FFFFFF;
          border-bottom: 1px solid #E5E7EB;
        }

        .legal-card-title {
          font-size: 24px;
          font-weight: 600;
          color: #000000;
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
          border-bottom: 1px solid #F3F4F6;
          padding-bottom: 20px;
        }

        .legal-grid-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .legal-grid-title {
          font-size: 16px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 12px 0;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .legal-grid-content {
          font-size: 15px;
          line-height: 1.7;
          color: #4B5563;
        }

        /* Section Styles */
        .legal-section-title {
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 15px 0;
        }

        .legal-section-content {
          font-size: 15px;
          line-height: 1.7;
          color: #4B5563;
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
          border-right: 1px solid #E5E7EB;
        }

        /* Liability Items */
        .legal-liability-item {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #E5E7EB;
        }

        .legal-liability-item:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        /* Text Styles */
        .legal-contact-item {
          font-weight: 600;
          color: #374151;
          display: inline-block;
          width: 70px;
        }

        .legal-register-item {
          font-weight: 600;
          color: #374151;
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
          color: #000000;
          letter-spacing: 1px;
        }

        .legal-highlight {
          background: #F9FAFB;
          padding: 15px;
          border-radius: 8px;
          border-left: 3px solid #000000;
          margin: 15px 0 !important;
        }

        /* Links */
        .legal-link-wrapper {
          margin: 15px 0;
        }

        .legal-external-link {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          background: #F3F4F6;
          border-radius: 40px;
          transition: all 0.2s ease;
        }

        .legal-external-link:hover {
          background: #E5E7EB;
          transform: translateY(-1px);
        }

        .legal-link-arrow {
          font-size: 14px;
        }

        .legal-text a {
          color: #000000;
          text-decoration: underline;
          text-underline-offset: 2px;
          transition: color 0.2s ease;
        }

        .legal-text a:hover {
          color: #6B7280;
        }

        /* Footer */
        .legal-footer {
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid #E5E7EB;
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
          color: #000000;
          font-weight: 500;
          transition: all 0.2s ease;
          padding: 10px 20px;
          background: #FFFFFF;
          border-radius: 40px;
          border: 1px solid #E5E7EB;
        }

        .legal-back-link:hover {
          background: #F9FAFB;
          transform: translateX(-5px);
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
          color: #9CA3AF;
          font-size: 14px;
        }

        .legal-footer-dot {
          color: #D1D5DB;
        }

        .legal-footer-print {
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .legal-footer-print:hover {
          color: #000000;
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