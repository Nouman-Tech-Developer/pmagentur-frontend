import React, { useState, useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';
import { supabase } from '../../lib/supabase';

const AdminSettings = () => {
  const [formData, setFormData] = useState({
    admin_email: '',
    admin_phone: '',
    company_name: '',
    company_address: '',
    facebook_url: '',
    twitter_url: '',
    linkedin_url: '',
    instagram_url: '',
    youtube_url: '',
    github_url: ''
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value');

      if (error) throw error;

      const newFormData = { ...formData };
      data.forEach(item => {
        if (newFormData.hasOwnProperty(item.setting_key)) {
          newFormData[item.setting_key] = item.setting_value || '';
        }
      });
      setFormData(newFormData);
    } catch (error) {
      console.error('Error fetching settings:', error);
      setError('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    setSuccess('');

    try {
      // Update each setting
      for (const [key, value] of Object.entries(formData)) {
        const { error: updateError } = await supabase
          .from('site_settings')
          .update({ 
            setting_value: value,
            updated_at: new Date().toISOString()
          })
          .eq('setting_key', key);

        if (updateError) throw updateError;
      }

      setSuccess('Settings saved successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error saving settings:', error);
      setError('Failed to save settings. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const InputField = ({ label, name, type = 'text', placeholder }) => (
    <div className="input-group">
      <label htmlFor={name} className="input-label">{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          placeholder={placeholder}
          rows={3}
          className="input-field textarea-field"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={formData[name] || ''}
          onChange={handleChange}
          placeholder={placeholder}
          className="input-field"
        />
      )}
    </div>
  );

  if (loading) {
    return (
      <AdminLayout>
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Loading settings...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="settings-container">
        {/* Header */}
        <div className="settings-header">
          <h1 className="settings-title">Site Settings</h1>
          <p className="settings-description">Configure email, social media links and other site settings</p>
        </div>

        {/* Messages */}
        {error && (
          <div className="alert error">
            <span className="alert-icon">⚠️</span>
            <span>{error}</span>
            <button onClick={() => setError('')} className="alert-close">×</button>
          </div>
        )}

        {success && (
          <div className="alert success">
            <span className="alert-icon">✓</span>
            <span>{success}</span>
          </div>
        )}

        {/* Settings Form */}
        <div className="settings-form">
          {/* Contact Information Section */}
          <div className="form-section">
            <div className="section-title-wrapper">
              <span className="section-icon">📧</span>
              <h2 className="section-title">Contact Information</h2>
            </div>
            <div className="form-grid">
              <InputField
                label="Admin Email"
                name="admin_email"
                type="email"
                placeholder="admin@reinke-ai.de"
              />
              <InputField
                label="Phone Number"
                name="admin_phone"
                type="tel"
                placeholder="+49 123 4567890"
              />
              <InputField
                label="Company Name"
                name="company_name"
                type="text"
                placeholder="Reinke AI Automation GmbH"
              />
              <InputField
                label="Company Address"
                name="company_address"
                type="textarea"
                placeholder="Musterstraße 123, 10115 Berlin"
              />
            </div>
          </div>

          {/* Social Media Section */}
          <div className="form-section">
            <div className="section-title-wrapper">
              <span className="section-icon">🌐</span>
              <h2 className="section-title">Social Media Links</h2>
            </div>
            <div className="form-grid">
              <InputField
                label="Facebook"
                name="facebook_url"
                type="url"
                placeholder="https://facebook.com/reinke-ai"
              />
              <InputField
                label="Twitter/X"
                name="twitter_url"
                type="url"
                placeholder="https://twitter.com/reinke-ai"
              />
              <InputField
                label="LinkedIn"
                name="linkedin_url"
                type="url"
                placeholder="https://linkedin.com/company/reinke-ai"
              />
              <InputField
                label="Instagram"
                name="instagram_url"
                type="url"
                placeholder="https://instagram.com/reinke-ai"
              />
              <InputField
                label="YouTube"
                name="youtube_url"
                type="url"
                placeholder="https://youtube.com/@reinke-ai"
              />
              <InputField
                label="GitHub"
                name="github_url"
                type="url"
                placeholder="https://github.com/reinke-ai"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="save-button-wrapper">
          <button
            onClick={handleSave}
            disabled={saving}
            className="save-button"
          >
            {saving ? 'Saving...' : 'Save Settings'}
          </button>
        </div>

        <style jsx="true">{`
          .settings-container {
            padding: 32px;
            max-width: 1200px;
            margin: 0 auto;
          }

          .settings-header {
            margin-bottom: 32px;
          }

          .settings-title {
            font-size: 32px;
            font-weight: 700;
            color: #111827;
            margin: 0 0 8px 0;
            letter-spacing: -0.02em;
          }

          .settings-description {
            font-size: 16px;
            color: #6B7280;
            margin: 0;
          }

          /* Alert Messages */
          .alert {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            border-radius: 12px;
            margin-bottom: 24px;
          }

          .alert.error {
            background: #FEF2F2;
            border: 1px solid #FEE2E2;
            color: #991B1B;
          }

          .alert.success {
            background: #D1FAE5;
            border: 1px solid #A7F3D0;
            color: #065F46;
          }

          .alert-icon {
            font-size: 18px;
          }

          .alert-close {
            margin-left: auto;
            background: none;
            border: none;
            font-size: 20px;
            cursor: pointer;
            color: inherit;
          }

          /* Form Sections */
          .settings-form {
            display: flex;
            flex-direction: column;
            gap: 32px;
          }

          .form-section {
            background: #FFFFFF;
            border: 1px solid #E5E7EB;
            border-radius: 20px;
            overflow: hidden;
          }

          .section-title-wrapper {
            padding: 20px 24px;
            background: #F9FAFB;
            border-bottom: 1px solid #E5E7EB;
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .section-icon {
            font-size: 24px;
          }

          .section-title {
            font-size: 18px;
            font-weight: 600;
            color: #111827;
            margin: 0;
          }

          .form-grid {
            padding: 24px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 24px;
          }

          /* Input Fields */
          .input-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }

          .input-label {
            font-size: 14px;
            font-weight: 500;
            color: #374151;
          }

          .input-field {
            padding: 10px 14px;
            font-size: 14px;
            border: 1px solid #E5E7EB;
            border-radius: 10px;
            transition: all 0.2s ease;
            font-family: inherit;
          }

          .input-field:focus {
            outline: none;
            border-color: #000000;
            box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
          }

          .textarea-field {
            resize: vertical;
            min-height: 80px;
          }

          /* Save Button */
          .save-button-wrapper {
            margin-top: 32px;
            display: flex;
            justify-content: flex-end;
          }

          .save-button {
            background: #000000;
            color: white;
            padding: 12px 32px;
            border: none;
            border-radius: 40px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
          }

          .save-button:hover:not(:disabled) {
            background: #1F2937;
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          }

          .save-button:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          /* Loading State */
          .loading-state {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 400px;
            gap: 16px;
          }

          .spinner {
            width: 40px;
            height: 40px;
            border: 3px solid #E5E7EB;
            border-top-color: #000000;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          /* Responsive */
          @media (max-width: 768px) {
            .settings-container {
              padding: 20px;
            }
            
            .settings-title {
              font-size: 28px;
            }
            
            .form-grid {
              grid-template-columns: 1fr;
              padding: 20px;
            }
            
            .save-button {
              width: 100%;
            }
          }
        `}</style>
      </div>
    </AdminLayout>
  );
};

export default AdminSettings;