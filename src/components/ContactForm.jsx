import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const ContactForm = () => {
  const { t } = useTranslation();
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [adminEmail, setAdminEmail] = useState('');

  // Fetch admin email from settings on component mount
  useEffect(() => {
    fetchAdminEmail();
  }, []);

  const fetchAdminEmail = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_value')
        .eq('setting_key', 'admin_email')
        .single();

      if (!error && data) {
        setAdminEmail(data.setting_value);
        console.log('Admin email loaded:', data.setting_value);
      } else {
        setAdminEmail('admin@reinke-ai.de');
      }
    } catch (err) {
      console.error('Error fetching admin email:', err);
      setAdminEmail('admin@reinke-ai.de');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmailNotification = async (contactId, contactData) => {
    try {
      const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
      
      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #000; color: #fff; padding: 20px; text-align: center; }
            .content { padding: 30px; background: #f9f9f9; }
            .info-box { background: #fff; padding: 20px; margin: 20px 0; border-left: 4px solid #000; }
            .field { margin-bottom: 15px; }
            .field-label { font-weight: bold; color: #000; margin-bottom: 5px; }
            .field-value { color: #666; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; border-top: 1px solid #eee; }
            .button { display: inline-block; padding: 10px 20px; background: #000; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 20px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Neue Kontaktanfrage</h1>
            </div>
            <div class="content">
              <p>Eine neue Kontaktanfrage wurde über das Kontaktformular eingereicht.</p>
              
              <div class="info-box">
                <div class="field">
                  <div class="field-label">Name:</div>
                  <div class="field-value">${contactData.name}</div>
                </div>
                <div class="field">
                  <div class="field-label">E-Mail:</div>
                  <div class="field-value">${contactData.email}</div>
                </div>
                ${contactData.phone ? `
                <div class="field">
                  <div class="field-label">Telefon:</div>
                  <div class="field-value">${contactData.phone}</div>
                </div>
                ` : ''}
                ${contactData.company ? `
                <div class="field">
                  <div class="field-label">Unternehmen:</div>
                  <div class="field-value">${contactData.company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="field-label">Nachricht:</div>
                  <div class="field-value">${contactData.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
              
              <a href="${window.location.origin}/admin/contacts" class="button">Im Admin-Panel anzeigen</a>
            </div>
            <div class="footer">
              <p>Diese E-Mail wurde automatisch vom Kontaktformular gesendet.</p>
              <p>© ${new Date().getFullYear()} Reinke AI Automation. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </body>
        </html>
      `;

      const response = await fetch(`${supabaseUrl}/functions/v1/resend-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          to: adminEmail,
          type: 'contact',
          recordId: contactId,
          subject: `Neue Kontaktanfrage von ${contactData.name}`,
          html: emailHtml
        })
      });

      const result = await response.json();
      
      if (response.ok && result.success) {
        console.log('✅ Email sent to:', adminEmail);
        return true;
      } else {
        console.error('❌ Email failed:', result.error);
        return false;
      }
    } catch (emailError) {
      console.error('❌ Error sending email notification:', emailError);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Bitte füllen Sie alle Pflichtfelder aus');
      setLoading(false);
      return;
    }

    if (!privacyAccepted) {
      setError('Bitte akzeptieren Sie die Datenschutzerklärung');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein');
      setLoading(false);
      return;
    }

    // Prepare data
    const contactData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone || null,
      message: formData.message,
      status: 'unread'
    };
    
    if (formData.company) {
      contactData.company = formData.company;
    }

    try {
      // Step 1: Save to database
      const { data, error: supabaseError } = await supabase
        .from('contacts')
        .insert([contactData])
        .select();

      if (supabaseError) {
        console.error('Supabase Error:', supabaseError);
        throw supabaseError;
      }

      console.log('✅ Contact saved to database:', data);

      // Step 2: Send email notification to admin
      if (data && data[0] && adminEmail) {
        await sendEmailNotification(data[0].id, contactData);
      }

      // Step 3: Show success message
      setSuccess(true);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
      });
      setPrivacyAccepted(false);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
      
    } catch (err) {
      console.error('Error:', err);
      setError('Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">
              <span>{t('contact.title')}</span>
            </h2>
            <p className="contact-subtitle">
              {t('contact.subtitle')}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-fields">
              {success && (
                <div className="success-message">
                  <svg className="success-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet. Wir melden uns bald bei Ihnen.</span>
                </div>
              )}

              {error && (
                <div className="error-message">
                  <svg className="error-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <div className="contact-field-row">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.name')}
                  className="contact-input"
                  required
                />
                <input 
                  type="text" 
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder={t('contact.form.company')}
                  className="contact-input"
                />
              </div>
              
              <div className="contact-field-row">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.email')}
                  className="contact-input"
                  required
                />
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contact.form.phone')}
                  className="contact-input"
                />
              </div>
              
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                rows="5" 
                className="contact-textarea"
                required
              ></textarea>
              
              <div className="contact-checkbox">
                <input 
                  type="checkbox" 
                  id="privacy" 
                  checked={privacyAccepted}
                  onChange={(e) => setPrivacyAccepted(e.target.checked)}
                  className="contact-checkbox-input" 
                  required
                />
                <label htmlFor="privacy" className="contact-checkbox-label">
                  {t('contact.form.privacy.part1')} 
                  <Link to="/DataProtection" target="_blank" className="privacy-link">
                    {t('contact.form.privacy.part2')}
                  </Link> 
                  {t('contact.form.privacy.part3')}
                </label>
              </div>
              
              <div className="submit-button-container">
                <button 
                  type="submit" 
                  className="contact-submit-button"
                  disabled={loading}
                >
                  {loading ? 'Wird gesendet...' : t('contact.form.submit')}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          width: 100%;
          padding: 60px 100px;
          background: #FFFFFF;
          position: relative;
        }
        
        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .contact-content {
          max-width: 900px;
          margin: 0 auto;
        }
        
        .contact-header {
          text-align: center;
          margin-bottom: 48px;
        }
        
        .contact-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 48px;
          font-weight: 700;
          color: #000000;
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        }
        
        .contact-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.6;
          color: #6B7280;
          margin: 0;
        }
        
        .success-message, .error-message {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          animation: slideIn 0.3s ease;
        }
        
        .success-message {
          background: #D1FAE5;
          border: 1px solid #A7F3D0;
          color: #065F46;
        }
        
        .error-message {
          background: #FEE2E2;
          border: 1px solid #FECACA;
          color: #991B1B;
        }
        
        .success-icon, .error-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        
        .success-message span, .error-message span {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          line-height: 1.5;
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .contact-form-fields {
          background: #FFFFFF;
          padding: 40px;
          border-radius: 24px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        
        .contact-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        
        .contact-input,
        .contact-textarea {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          padding: 14px 18px;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          background: #FFFFFF;
          outline: none;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #000000;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        }
        
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #9CA3AF;
        }
        
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
          margin-bottom: 24px;
        }
        
        .contact-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 32px;
        }
        
        .contact-checkbox-input {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          accent-color: #000000;
          cursor: pointer;
          flex-shrink: 0;
        }
        
        .contact-checkbox-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          line-height: 1.5;
          color: #6B7280;
          cursor: pointer;
        }
        
        .privacy-link {
          color: #000000;
          text-decoration: none;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: border-color 0.2s ease;
        }
        
        .privacy-link:hover {
          border-bottom-color: #000000;
        }
        
        .submit-button-container {
          display: flex;
          justify-content: flex-end;
        }
        
        .contact-submit-button {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          font-weight: 500;
          padding: 12px 32px;
          background: #000000;
          color: #FFFFFF;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .contact-submit-button:hover:not(:disabled) {
          background: #1F2937;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        }
        
        .contact-submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 24px;
          }
          
          .contact-title {
            font-size: 32px;
          }
          
          .contact-subtitle {
            font-size: 16px;
          }
          
          .contact-field-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .contact-form-fields {
            padding: 24px;
          }
          
          .contact-input,
          .contact-textarea {
            font-size: 15px;
            padding: 12px 16px;
          }
        }
        
        @media (max-width: 480px) {
          .contact-section {
            padding: 30px 16px;
          }
          
          .contact-title {
            font-size: 28px;
          }
          
          .contact-form-fields {
            padding: 20px;
          }
          
          .contact-submit-button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactForm;