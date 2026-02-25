// DataProtection.jsx (Datenschutz)
import React from 'react';
import { Link } from 'react-router-dom';

const DataProtection = () => {
  // Organize content into sections for better structure
  const sections = [
    {
      id: 1,
      title: '1. Datenschutz auf einen Blick',
      subsections: [
        {
          title: 'Allgemeine Hinweise',
          content: (
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.</p>
          )
        },
        {
          title: 'Datenerfassung auf unserer Website',
          content: (
            <>
              <div className="legal-qna">
                <p className="legal-question"><strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong></p>
                <p className="legal-answer">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem <Link to="/impressum">Impressum</Link> dieser Website entnehmen.</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>Wie erfassen wir Ihre Daten?</strong></p>
                <p className="legal-answer">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>Wofür nutzen wir Ihre Daten?</strong></p>
                <p className="legal-answer">Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.</p>
              </div>
              
              <div className="legal-qna">
                <p className="legal-question"><strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong></p>
                <p className="legal-answer">Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</p>
              </div>
            </>
          )
        }
      ]
    },
    {
      id: 2,
      title: '2. Allgemeine Hinweise und Pflichtinformationen',
      subsections: [
        {
          title: 'Datenschutz',
          content: (
            <>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
              <p>Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.</p>
              <div className="legal-notice">
                <p>Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.</p>
              </div>
            </>
          )
        },
        {
          title: 'Hinweis zur verantwortlichen Stelle',
          content: (
            <>
              <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
              <div className="legal-address-block">
                <p><strong>Reinke AI Automation GmbH</strong><br />
                Musterstraße 123<br />
                10115 Berlin</p>
                <p className="legal-contact-line">
                  <span className="legal-contact-label">Telefon:</span> 
                  <a href="tel:+493012345678">+49 (0) 30 12345678</a>
                </p>
                <p className="legal-contact-line">
                  <span className="legal-contact-label">E-Mail:</span> 
                  <a href="mailto:info@reinke-ai.de">info@reinke-ai.de</a>
                </p>
              </div>
              <p className="legal-small-text">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
            </>
          )
        },
        {
          title: 'Widerruf Ihrer Einwilligung zur Datenverarbeitung',
          content: (
            <p>Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.</p>
          )
        },
        {
          title: 'Beschwerderecht bei der zuständigen Aufsichtsbehörde',
          content: (
            <p>Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.</p>
          )
        }
      ]
    },
    {
      id: 3,
      title: '3. Datenerfassung auf unserer Website',
      subsections: [
        {
          title: 'Cookies',
          content: (
            <>
              <p>Unsere Internetseiten verwenden sogenannte "Cookies". Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert.</p>
              
              <div className="legal-cookie-types">
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">Session-Cookies</h4>
                  <p>Werden nach Ende Ihres Besuchs automatisch gelöscht.</p>
                </div>
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">Permanente Cookies</h4>
                  <p>Bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen.</p>
                </div>
                <div className="legal-cookie-type">
                  <h4 className="legal-cookie-title">Third-Party-Cookies</h4>
                  <p>Von Drittunternehmen, die bestimmte Dienstleistungen ermöglichen.</p>
                </div>
              </div>
              
              <p>Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Websitefunktionen ohne diese nicht funktionieren würden (z.B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies dienen dazu, das Nutzerverhalten auszuwerten oder Werbung anzuzeigen.</p>
              
              <div className="legal-highlight">
                <p>Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.</p>
              </div>
            </>
          )
        },
        {
          title: 'Kontaktformular',
          content: (
            <>
              <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p>Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns.</p>
              <p className="legal-note">Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.</p>
            </>
          )
        },
        {
          title: 'Anfrage per E-Mail, Telefon oder Telefax',
          content: (
            <>
              <p>Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
              <p>Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO).</p>
              <p className="legal-note">Die von Ihnen an uns gesendeten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.</p>
            </>
          )
        }
      ]
    },
    {
      id: 4,
      title: '4. Plugins und Tools',
      subsections: [
        {
          title: 'Google Web Fonts',
          content: (
            <>
              <p>Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten sogenannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.</p>
              <p>Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote.</p>
              <div className="legal-links">
                <p>Weitere Informationen finden Sie unter:</p>
                <ul className="legal-link-list">
                  <li>
                    <a href="https://developers.google.com/fonts/faq" target="_blank" rel="noopener noreferrer" className="legal-external-link">
                      Google Fonts FAQ
                      <span className="legal-link-arrow">↗</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="legal-external-link">
                      Google Datenschutzerklärung
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
      title: '5. Änderung der Datenschutzerklärung',
      content: (
        <div className="legal-simple-section">
          <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
        </div>
      )
    },
    {
      id: 6,
      title: '6. Fragen an den Datenschutzbeauftragten',
      content: (
        <div className="legal-simple-section">
          <p>Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den Datenschutz verantwortliche Person in unserem Unternehmen:</p>
          <div className="legal-contact-block">
            <a href="mailto:datenschutz@reinke-ai.de" className="legal-email-link">datenschutz@reinke-ai.de</a>
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
              <span className="legal-header-tag">Datenschutz</span>
              <span className="legal-header-line"></span>
            </div>
            <h1 className="legal-title">Datenschutzerklärung</h1>
            <p className="legal-subtitle">Informationen gemäß DSGVO</p>
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
                <span className="legal-back-text">Zurück zur Startseite</span>
              </Link>
              <div className="legal-footer-info">
                <span className="legal-footer-date">Letzte Aktualisierung: März 2024</span>
                <span className="legal-footer-dot">•</span>
                <Link to="/impressum" className="legal-footer-link">Impressum</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
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
          margin-bottom: 30px;
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

        /* Subsection Styles */
        .legal-subsection {
          margin-bottom: 30px;
          padding-bottom: 30px;
          border-bottom: 1px solid #F3F4F6;
        }

        .legal-subsection:last-child {
          margin-bottom: 0;
          padding-bottom: 0;
          border-bottom: none;
        }

        .legal-subsection-title {
          font-size: 20px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 20px 0;
        }

        .legal-subsection-content {
          font-size: 15px;
          line-height: 1.7;
          color: #4B5563;
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
          color: #4B5563;
        }

        /* Q&A Styles */
        .legal-qna {
          margin-bottom: 20px;
        }

        .legal-question {
          font-weight: 600;
          color: #000000;
          margin-bottom: 5px;
        }

        .legal-answer {
          color: #4B5563;
          padding-left: 20px;
          border-left: 2px solid #E5E7EB;
        }

        /* Notice and Highlight Styles */
        .legal-notice {
          background: #F9FAFB;
          padding: 15px 20px;
          border-radius: 8px;
          margin: 15px 0;
          border-left: 3px solid #000000;
        }

        .legal-highlight {
          background: #F9FAFB;
          padding: 15px 20px;
          border-radius: 8px;
          margin: 20px 0;
          border-left: 3px solid #000000;
        }

        .legal-note {
          background: #F9FAFB;
          padding: 12px 15px;
          border-radius: 6px;
          font-size: 14px;
          color: #6B7280;
          margin-top: 15px !important;
        }

        /* Address Block */
        .legal-address-block {
          background: #F9FAFB;
          padding: 20px;
          border-radius: 12px;
          margin: 15px 0;
        }

        .legal-contact-line {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin: 8px 0;
        }

        .legal-contact-label {
          font-weight: 600;
          color: #374151;
          min-width: 60px;
        }

        .legal-contact-line a {
          color: #000000;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-contact-line a:hover {
          color: #6B7280;
        }

        /* Cookie Types */
        .legal-cookie-types {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 20px 0;
        }

        .legal-cookie-type {
          background: #F9FAFB;
          padding: 15px;
          border-radius: 8px;
        }

        .legal-cookie-title {
          font-size: 16px;
          font-weight: 600;
          color: #000000;
          margin: 0 0 8px 0;
        }

        .legal-cookie-type p {
          font-size: 14px;
          margin: 0;
          color: #6B7280;
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

        /* Contact Block */
        .legal-contact-block {
          margin-top: 20px;
        }

        .legal-email-link {
          display: inline-block;
          font-size: 18px;
          font-weight: 600;
          color: #000000;
          text-decoration: none;
          padding: 10px 20px;
          background: #F3F4F6;
          border-radius: 40px;
          transition: all 0.2s ease;
        }

        .legal-email-link:hover {
          background: #E5E7EB;
          transform: translateY(-1px);
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

        .legal-footer-link {
          color: #6B7280;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .legal-footer-link:hover {
          color: #000000;
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