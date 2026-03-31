import React, { useState, useEffect } from 'react';
import { supabase } from '../../lib/supabase';
import { useTranslation } from 'react-i18next';
import AdminLayout from '../layouts/AdminLayout';

const AdminImpressum = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [content, setContent] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    loadImpressum();
  }, []);

  const loadImpressum = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('impressum')
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
          company: {
            name: "Reinke AI GmbH",
            address: {
              street: "Musterstraße 123",
              city: "10115 Berlin"
            },
            phone: "+49 30 123456789",
            email: "info@reinke-ai.de",
            website: "https://www.reinke-ai.de",
            ceo: "Max Mustermann",
            registration: {
              number: "HRB 123456",
              court: "Amtsgericht Berlin-Charlottenburg"
            },
            vat: "DE123456789"
          },
          responsible: {
            name: "Max Mustermann",
            address: {
              street: "Musterstraße 123",
              city: "10115 Berlin"
            }
          },
          dispute: {
            eu: {
              text: "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:",
              link: "https://ec.europa.eu/consumers/odr/"
            },
            consumer: {
              text: "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen."
            }
          },
          liability: {
            content: {
              text1: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
              text2: "Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen."
            },
            links: {
              text1: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.",
              text2: "Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar."
            },
            copyright: {
              text1: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.",
              text2: "Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.",
              text3: "Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir keine Gewähr übernehmen."
            }
          }
        });
      }
    } catch (err) {
      console.error('Error loading impressum:', err);
      setError(t('admin.impressum.loadError', 'Failed to load impressum data'));
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
        .from('impressum')
        .insert([{
          content: content,
          updated_by: username
        }]);

      if (error) throw error;

      setSuccess(t('admin.impressum.saveSuccess', 'Impressum updated successfully!'));
      
      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(null), 3000);
    } catch (err) {
      console.error('Error saving impressum:', err);
      setError(t('admin.impressum.saveError', 'Failed to save impressum data'));
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
      <div className="admin-impressum">
        <div className="admin-page-header">
          <h1>{t('admin.impressum.title', 'Edit Impressum')}</h1>
          <p>{t('admin.impressum.subtitle', 'Manage your legal notice information')}</p>
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
          {/* Company Information */}
          <div className="admin-form-section">
            <h2>{t('admin.impressum.company', 'Company Information')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.impressum.companyName', 'Company Name')}</label>
              <input
                type="text"
                value={content?.company?.name || ''}
                onChange={(e) => handleChange('company.name', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.address', 'Address')}</label>
              <input
                type="text"
                value={content?.company?.address?.street || ''}
                onChange={(e) => handleChange('company.address.street', e.target.value)}
                placeholder={t('admin.impressum.street', 'Street')}
                className="admin-input"
              />
              <input
                type="text"
                value={content?.company?.address?.city || ''}
                onChange={(e) => handleChange('company.address.city', e.target.value)}
                placeholder={t('admin.impressum.city', 'City')}
                className="admin-input mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.phone', 'Phone')}</label>
              <input
                type="text"
                value={content?.company?.phone || ''}
                onChange={(e) => handleChange('company.phone', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.email', 'Email')}</label>
              <input
                type="email"
                value={content?.company?.email || ''}
                onChange={(e) => handleChange('company.email', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.website', 'Website')}</label>
              <input
                type="text"
                value={content?.company?.website || ''}
                onChange={(e) => handleChange('company.website', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.ceo', 'CEO / Managing Director')}</label>
              <input
                type="text"
                value={content?.company?.ceo || ''}
                onChange={(e) => handleChange('company.ceo', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.registration', 'Registration Number')}</label>
              <input
                type="text"
                value={content?.company?.registration?.number || ''}
                onChange={(e) => handleChange('company.registration.number', e.target.value)}
                placeholder={t('admin.impressum.number', 'Number')}
                className="admin-input"
              />
              <input
                type="text"
                value={content?.company?.registration?.court || ''}
                onChange={(e) => handleChange('company.registration.court', e.target.value)}
                placeholder={t('admin.impressum.court', 'Court')}
                className="admin-input mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.vat', 'VAT ID')}</label>
              <input
                type="text"
                value={content?.company?.vat || ''}
                onChange={(e) => handleChange('company.vat', e.target.value)}
                className="admin-input"
              />
            </div>
          </div>

          {/* Responsible Person */}
          <div className="admin-form-section">
            <h2>{t('admin.impressum.responsible', 'Responsible Person')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.impressum.name', 'Name')}</label>
              <input
                type="text"
                value={content?.responsible?.name || ''}
                onChange={(e) => handleChange('responsible.name', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.address', 'Address')}</label>
              <input
                type="text"
                value={content?.responsible?.address?.street || ''}
                onChange={(e) => handleChange('responsible.address.street', e.target.value)}
                placeholder={t('admin.impressum.street', 'Street')}
                className="admin-input"
              />
              <input
                type="text"
                value={content?.responsible?.address?.city || ''}
                onChange={(e) => handleChange('responsible.address.city', e.target.value)}
                placeholder={t('admin.impressum.city', 'City')}
                className="admin-input mt-2"
              />
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="admin-form-section">
            <h2>{t('admin.impressum.dispute', 'Dispute Resolution')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.impressum.euText', 'EU Dispute Resolution Text')}</label>
              <textarea
                value={content?.dispute?.eu?.text || ''}
                onChange={(e) => handleChange('dispute.eu.text', e.target.value)}
                rows="3"
                className="admin-textarea"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.euLink', 'EU Dispute Resolution Link')}</label>
              <input
                type="text"
                value={content?.dispute?.eu?.link || ''}
                onChange={(e) => handleChange('dispute.eu.link', e.target.value)}
                className="admin-input"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.consumerText', 'Consumer Dispute Text')}</label>
              <textarea
                value={content?.dispute?.consumer?.text || ''}
                onChange={(e) => handleChange('dispute.consumer.text', e.target.value)}
                rows="2"
                className="admin-textarea"
              />
            </div>
          </div>

          {/* Liability */}
          <div className="admin-form-section">
            <h2>{t('admin.impressum.liability', 'Liability')}</h2>
            
            <div className="admin-form-group">
              <label>{t('admin.impressum.contentLiability', 'Content Liability')}</label>
              <textarea
                value={content?.liability?.content?.text1 || ''}
                onChange={(e) => handleChange('liability.content.text1', e.target.value)}
                rows="3"
                placeholder={t('admin.impressum.text1', 'Text 1')}
                className="admin-textarea"
              />
              <textarea
                value={content?.liability?.content?.text2 || ''}
                onChange={(e) => handleChange('liability.content.text2', e.target.value)}
                rows="3"
                placeholder={t('admin.impressum.text2', 'Text 2')}
                className="admin-textarea mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.linkLiability', 'Link Liability')}</label>
              <textarea
                value={content?.liability?.links?.text1 || ''}
                onChange={(e) => handleChange('liability.links.text1', e.target.value)}
                rows="2"
                placeholder={t('admin.impressum.text1', 'Text 1')}
                className="admin-textarea"
              />
              <textarea
                value={content?.liability?.links?.text2 || ''}
                onChange={(e) => handleChange('liability.links.text2', e.target.value)}
                rows="2"
                placeholder={t('admin.impressum.text2', 'Text 2')}
                className="admin-textarea mt-2"
              />
            </div>

            <div className="admin-form-group">
              <label>{t('admin.impressum.copyright', 'Copyright')}</label>
              <textarea
                value={content?.liability?.copyright?.text1 || ''}
                onChange={(e) => handleChange('liability.copyright.text1', e.target.value)}
                rows="2"
                placeholder={t('admin.impressum.text1', 'Text 1')}
                className="admin-textarea"
              />
              <textarea
                value={content?.liability?.copyright?.text2 || ''}
                onChange={(e) => handleChange('liability.copyright.text2', e.target.value)}
                rows="2"
                placeholder={t('admin.impressum.text2', 'Text 2')}
                className="admin-textarea mt-2"
              />
              <textarea
                value={content?.liability?.copyright?.text3 || ''}
                onChange={(e) => handleChange('liability.copyright.text3', e.target.value)}
                rows="2"
                placeholder={t('admin.impressum.text3', 'Text 3')}
                className="admin-textarea mt-2"
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
          .admin-impressum {
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
            .admin-impressum {
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

export default AdminImpressum;