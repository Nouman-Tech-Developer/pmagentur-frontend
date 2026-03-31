import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';

const AdminDataProtection = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    loadDataProtection();
  }, []);

  const loadDataProtection = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('dataprotection')
        .select('*')
        .order('id', { ascending: false })
        .limit(1)
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setContent(data.content);
      } else {
        // Initialize with default content structure
        setContent({
          overview: {
            general: {
              text: "Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf der Grundlage der gesetzlichen Bestimmungen (DSGVO, TMG)."
            },
            collection: {
              q1: "Welche Daten werden erfasst?",
              a1: "Beim Besuch unserer Website werden automatisch technische Daten wie IP-Adresse, Browsertyp und Zugriffszeitpunkte erfasst.",
              q2: "Wie werden die Daten genutzt?",
              a2: "Die Daten werden zur Bereitstellung der Website, zur Verbesserung unseres Angebots und zur Erfüllung gesetzlicher Pflichten genutzt.",
              q3: "Werden Daten weitergegeben?",
              a3: "Eine Weitergabe an Dritte erfolgt nur, wenn dies gesetzlich erlaubt ist oder Sie eingewilligt haben.",
              q4: "Wie werden die Daten geschützt?",
              a4: "Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre Daten gegen Manipulation, Verlust oder unbefugten Zugriff zu schützen."
            }
          },
          general: {
            privacy: {
              text1: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.",
              text2: "Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.",
              note: "Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich."
            },
            responsible: {
              text: "Verantwortliche Stelle für die Datenverarbeitung ist:",
              name: "Reinke AI GmbH",
              address: {
                street: "Musterstraße 123",
                city: "10115 Berlin"
              },
              phone: "+49 30 123456789",
              email: "info@reinke-ai.de",
              note: "Die verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet."
            },
            withdrawal: {
              text: "Sie haben das Recht, eine erteilte Einwilligung jederzeit zu widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."
            },
            complaint: {
              text: "Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren."
            }
          },
          dataCollection: {
            cookies: {
              text1: "Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden.",
              text2: "Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.",
              highlight: "Rechtsgrundlage für die Verarbeitung personenbezogener Daten unter Verwendung von Cookies ist Art. 6 Abs. 1 lit. f DSGVO."
            },
            contactForm: {
              text1: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
              text2: "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
              note: "Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO."
            },
            emailPhone: {
              text1: "Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.",
              text2: "Wir geben diese Daten nicht ohne Ihre Einwilligung weiter.",
              note: "Rechtsgrundlage für die Verarbeitung der Daten ist Art. 6 Abs. 1 lit. b DSGVO."
            }
          },
          plugins: {
            googleFonts: {
              text1: "Diese Website nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043, USA) bereitgestellt werden.",
              text2: "Beim Aufruf einer Seite lädt Ihr Browser die benötigten Schriftarten in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.",
              moreInfo: "Weitere Informationen finden Sie hier:",
              faqLink: "https://developers.google.com/fonts/faq",
              privacyLink: "https://policies.google.com/privacy"
            }
          },
          changes: {
            text: "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen."
          },
          questions: {
            text: "Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die verantwortliche Stelle in unserem Unternehmen:",
            email: "datenschutz@reinke-ai.de"
          }
        });
      }
    } catch (err) {
      console.error('Error loading data protection:', err);
      setError(t('admin.dataprotection.loadError', 'Failed to load data protection data'));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (path, value) => {
    const newContent = { ...content };
    const keys = path.split('.');
    let current = newContent;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    current[keys[keys.length - 1]] = value;
    setContent(newContent);
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setError(null);
      setSuccess(null);

      const { data: userData } = await supabase.auth.getUser();
      const username = userData.user?.email || 'admin';

      const { error } = await supabase
        .from('dataprotection')
        .insert([{
          content: content,
          updated_by: username
        }]);

      if (error) throw error;

      setSuccess(t('admin.dataprotection.saveSuccess', 'Data protection policy updated successfully!'));
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error('Error saving data protection:', err);
      setError(t('admin.dataprotection.saveError', 'Failed to save data protection data'));
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="admin-loading">
          <div className="admin-spinner"></div>
          <p>{t('admin.loading', 'Loading...')}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="admin-dataprotection">
        <div className="admin-page-header">
          <h1>{t('admin.dataprotection.title', 'Edit Data Protection Policy')}</h1>
          <p>{t('admin.dataprotection.subtitle', 'Manage your privacy policy information')}</p>
        </div>

        {error && (
          <div className="admin-alert admin-alert-error">
            {error}
          </div>
        )}

        {success && (
          <div className="admin-alert admin-alert-success">
            {success}
          </div>
        )}

        <div className="admin-form">
          {/* Overview Section */}
          <div className="admin-form-section">
            <h2>{t('admin.dataprotection.overview', 'Overview')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.dataprotection.generalText', 'General Information')}</label>
              <textarea
                value={content?.overview?.general?.text || ''}
                onChange={(e) => handleChange('overview.general.text', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.q1', 'Question 1: What data is collected?')}</label>
              <input
                type="text"
                value={content?.overview?.collection?.q1 || ''}
                onChange={(e) => handleChange('overview.collection.q1', e.target.value)}
                className="admin-input"
              />
              <textarea
                value={content?.overview?.collection?.a1 || ''}
                onChange={(e) => handleChange('overview.collection.a1', e.target.value)}
                rows="2"
                placeholder="Answer"
                className="admin-textarea mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.q2', 'Question 2: How is data used?')}</label>
              <input
                type="text"
                value={content?.overview?.collection?.q2 || ''}
                onChange={(e) => handleChange('overview.collection.q2', e.target.value)}
                className="admin-input"
              />
              <textarea
                value={content?.overview?.collection?.a2 || ''}
                onChange={(e) => handleChange('overview.collection.a2', e.target.value)}
                rows="2"
                placeholder="Answer"
                className="admin-textarea mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.q3', 'Question 3: Is data shared?')}</label>
              <input
                type="text"
                value={content?.overview?.collection?.q3 || ''}
                onChange={(e) => handleChange('overview.collection.q3', e.target.value)}
                className="admin-input"
              />
              <textarea
                value={content?.overview?.collection?.a3 || ''}
                onChange={(e) => handleChange('overview.collection.a3', e.target.value)}
                rows="2"
                placeholder="Answer"
                className="admin-textarea mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.q4', 'Question 4: How is data protected?')}</label>
              <input
                type="text"
                value={content?.overview?.collection?.q4 || ''}
                onChange={(e) => handleChange('overview.collection.q4', e.target.value)}
                className="admin-input"
              />
              <textarea
                value={content?.overview?.collection?.a4 || ''}
                onChange={(e) => handleChange('overview.collection.a4', e.target.value)}
                rows="2"
                placeholder="Answer"
                className="admin-textarea mt-2"
              />
            </div>
          </div>

          {/* General Section */}
          <div className="admin-form-section">
            <h2>{t('admin.dataprotection.general', 'General Information')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.dataprotection.privacyText1', 'Privacy Text 1')}</label>
              <textarea
                value={content?.general?.privacy?.text1 || ''}
                onChange={(e) => handleChange('general.privacy.text1', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.privacyText2', 'Privacy Text 2')}</label>
              <textarea
                value={content?.general?.privacy?.text2 || ''}
                onChange={(e) => handleChange('general.privacy.text2', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.privacyNote', 'Privacy Note')}</label>
              <textarea
                value={content?.general?.privacy?.note || ''}
                onChange={(e) => handleChange('general.privacy.note', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.responsibleText', 'Responsible Party Text')}</label>
              <textarea
                value={content?.general?.responsible?.text || ''}
                onChange={(e) => handleChange('general.responsible.text', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.companyName', 'Company Name')}</label>
              <input
                type="text"
                value={content?.general?.responsible?.name || ''}
                onChange={(e) => handleChange('general.responsible.name', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.address', 'Address')}</label>
              <input
                type="text"
                value={content?.general?.responsible?.address?.street || ''}
                onChange={(e) => handleChange('general.responsible.address.street', e.target.value)}
                placeholder="Street"
                className="admin-input"
              />
              <input
                type="text"
                value={content?.general?.responsible?.address?.city || ''}
                onChange={(e) => handleChange('general.responsible.address.city', e.target.value)}
                placeholder="City"
                className="admin-input mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.phone', 'Phone')}</label>
              <input
                type="text"
                value={content?.general?.responsible?.phone || ''}
                onChange={(e) => handleChange('general.responsible.phone', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.email', 'Email')}</label>
              <input
                type="email"
                value={content?.general?.responsible?.email || ''}
                onChange={(e) => handleChange('general.responsible.email', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.responsibleNote', 'Responsible Party Note')}</label>
              <textarea
                value={content?.general?.responsible?.note || ''}
                onChange={(e) => handleChange('general.responsible.note', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.withdrawalText', 'Withdrawal Text')}</label>
              <textarea
                value={content?.general?.withdrawal?.text || ''}
                onChange={(e) => handleChange('general.withdrawal.text', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.complaintText', 'Complaint Text')}</label>
              <textarea
                value={content?.general?.complaint?.text || ''}
                onChange={(e) => handleChange('general.complaint.text', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>
          </div>

          {/* Data Collection Section */}
          <div className="admin-form-section">
            <h2>{t('admin.dataprotection.dataCollection', 'Data Collection')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.dataprotection.cookiesText1', 'Cookies Text 1')}</label>
              <textarea
                value={content?.dataCollection?.cookies?.text1 || ''}
                onChange={(e) => handleChange('dataCollection.cookies.text1', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.cookiesText2', 'Cookies Text 2')}</label>
              <textarea
                value={content?.dataCollection?.cookies?.text2 || ''}
                onChange={(e) => handleChange('dataCollection.cookies.text2', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.cookiesHighlight', 'Cookies Highlight')}</label>
              <textarea
                value={content?.dataCollection?.cookies?.highlight || ''}
                onChange={(e) => handleChange('dataCollection.cookies.highlight', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.contactFormText1', 'Contact Form Text 1')}</label>
              <textarea
                value={content?.dataCollection?.contactForm?.text1 || ''}
                onChange={(e) => handleChange('dataCollection.contactForm.text1', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.contactFormText2', 'Contact Form Text 2')}</label>
              <textarea
                value={content?.dataCollection?.contactForm?.text2 || ''}
                onChange={(e) => handleChange('dataCollection.contactForm.text2', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.contactFormNote', 'Contact Form Note')}</label>
              <textarea
                value={content?.dataCollection?.contactForm?.note || ''}
                onChange={(e) => handleChange('dataCollection.contactForm.note', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.emailPhoneText1', 'Email/Phone Text 1')}</label>
              <textarea
                value={content?.dataCollection?.emailPhone?.text1 || ''}
                onChange={(e) => handleChange('dataCollection.emailPhone.text1', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.emailPhoneText2', 'Email/Phone Text 2')}</label>
              <textarea
                value={content?.dataCollection?.emailPhone?.text2 || ''}
                onChange={(e) => handleChange('dataCollection.emailPhone.text2', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.emailPhoneNote', 'Email/Phone Note')}</label>
              <textarea
                value={content?.dataCollection?.emailPhone?.note || ''}
                onChange={(e) => handleChange('dataCollection.emailPhone.note', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>
          </div>

          {/* Plugins Section */}
          <div className="admin-form-section">
            <h2>{t('admin.dataprotection.plugins', 'Plugins & Tools')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.dataprotection.googleFontsText1', 'Google Fonts Text 1')}</label>
              <textarea
                value={content?.plugins?.googleFonts?.text1 || ''}
                onChange={(e) => handleChange('plugins.googleFonts.text1', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.googleFontsText2', 'Google Fonts Text 2')}</label>
              <textarea
                value={content?.plugins?.googleFonts?.text2 || ''}
                onChange={(e) => handleChange('plugins.googleFonts.text2', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.googleFontsMoreInfo', 'Google Fonts More Info')}</label>
              <textarea
                value={content?.plugins?.googleFonts?.moreInfo || ''}
                onChange={(e) => handleChange('plugins.googleFonts.moreInfo', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.googleFontsFaqLink', 'Google Fonts FAQ Link')}</label>
              <input
                type="text"
                value={content?.plugins?.googleFonts?.faqLink || ''}
                onChange={(e) => handleChange('plugins.googleFonts.faqLink', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.googleFontsPrivacyLink', 'Google Fonts Privacy Link')}</label>
              <input
                type="text"
                value={content?.plugins?.googleFonts?.privacyLink || ''}
                onChange={(e) => handleChange('plugins.googleFonts.privacyLink', e.target.value)}
                className="admin-input"
              />
            </div>
          </div>

          {/* Changes and Questions */}
          <div className="admin-form-section">
            <h2>{t('admin.dataprotection.changes', 'Changes & Questions')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.dataprotection.changesText', 'Changes Text')}</label>
              <textarea
                value={content?.changes?.text || ''}
                onChange={(e) => handleChange('changes.text', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.questionsText', 'Questions Text')}</label>
              <textarea
                value={content?.questions?.text || ''}
                onChange={(e) => handleChange('questions.text', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.dataprotection.questionsEmail', 'Questions Email')}</label>
              <input
                type="email"
                value={content?.questions?.email || ''}
                onChange={(e) => handleChange('questions.email', e.target.value)}
                className="admin-input"
              />
            </div>
          </div>

          <div className="admin-form-actions">
            <button 
              onClick={handleSave} 
              disabled={saving}
              className="admin-btn admin-btn-primary"
            >
              {saving ? t('admin.saving', 'Saving...') : t('admin.save', 'Save Changes')}
            </button>
          </div>
        </div>

        <style jsx="true">{`
          .admin-dataprotection {
            padding: 30px;
            background: #F9FAFB;
            min-height: 100vh;
          }

          .admin-page-header {
            margin-bottom: 30px;
          }

          .admin-page-header h1 {
            font-size: 32px;
            font-weight: 600;
            color: #111827;
            margin: 0 0 10px 0;
          }

          .admin-page-header p {
            font-size: 16px;
            color: #6B7280;
            margin: 0;
          }

          .admin-alert {
            padding: 15px 20px;
            border-radius: 8px;
            margin-bottom: 20px;
          }

          .admin-alert-error {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid #EF4444;
            color: #EF4444;
          }

          .admin-alert-success {
            background: rgba(34, 197, 94, 0.1);
            border: 1px solid #22C55E;
            color: #22C55E;
          }

          .admin-form {
            background: #FFFFFF;
            border-radius: 12px;
            padding: 30px;
            border: 1px solid #E5E5E7;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
          }

          .admin-form-section {
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid #E5E5E7;
          }

          .admin-form-section:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }

          .admin-form-section h2 {
            font-size: 24px;
            font-weight: 600;
            color: #111827;
            margin: 0 0 20px 0;
          }

          .admin-form-group {
            margin-bottom: 20px;
          }

          .admin-form-group label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 8px;
          }

          .admin-input,
          .admin-textarea {
            width: 100%;
            padding: 10px 12px;
            background: #FFFFFF;
            border: 1px solid #D1D5DB;
            border-radius: 6px;
            font-size: 14px;
            color: #111827;
            transition: all 0.2s ease;
          }

          .admin-input:focus,
          .admin-textarea:focus {
            outline: none;
            border-color: #000000;
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
          }

          .admin-textarea {
            resize: vertical;
            font-family: inherit;
          }

          .mt-2 {
            margin-top: 8px;
          }

          .admin-form-actions {
            margin-top: 30px;
            display: flex;
            justify-content: flex-end;
          }

          .admin-btn {
            padding: 10px 24px;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s ease;
            border: none;
          }

          .admin-btn-primary {
            background: #000000;
            color: #FFFFFF;
          }

          .admin-btn-primary:hover:not(:disabled) {
            background: #1F2937;
            transform: translateY(-1px);
          }

          .admin-btn-primary:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .admin-loading {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 400px;
            background: #F9FAFB;
          }

          .admin-spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #E5E5E7;
            border-top-color: #000000;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          @media (max-width: 768px) {
            .admin-dataprotection {
              padding: 20px;
            }
            
            .admin-form {
              padding: 20px;
            }
          }
        `}</style>
      </div>
    </AdminLayout>
  );
};

export default AdminDataProtection;