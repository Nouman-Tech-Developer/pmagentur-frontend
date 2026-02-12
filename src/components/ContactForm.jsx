import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="contact-title">{t('contact.title')}</h2>
              <p className="contact-subtitle">
                {t('contact.subtitle')}
              </p>
            </div>
            
            <div className="contact-form">
              <div className="contact-form-fields">
                <div className="contact-field-row">
                  <input 
                    type="text" 
                    placeholder={t('contact.form.name')}
                    className="contact-input"
                  />
                  <input 
                    type="text" 
                    placeholder={t('contact.form.company')}
                    className="contact-input"
                  />
                </div>
                
                <div className="contact-field-row">
                  <input 
                    type="email" 
                    placeholder={t('contact.form.email')}
                    className="contact-input"
                  />
                  <input 
                    type="tel" 
                    placeholder={t('contact.form.phone')}
                    className="contact-input"
                  />
                </div>
                
                <textarea 
                  placeholder={t('contact.form.message')}
                  rows="4" 
                  className="contact-textarea"
                ></textarea>
                
                <div className="contact-checkbox">
                  <input type="checkbox" id="privacy" className="contact-checkbox-input" />
                  <label htmlFor="privacy" className="contact-checkbox-label">
                    {t('contact.form.privacy.part1')} <a href="#">{t('contact.form.privacy.part2')}</a> {t('contact.form.privacy.part3')}
                  </label>
                </div>
                
                <div className="submit-button-container">
                  <button type="submit" className="contact-submit-button">
                    {t('contact.form.submit')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Contact Section - Full width with consistent padding */
        .contact-section {
          width: 100%;
          padding: 35px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .contact-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          align-items: start;
          width: 100%;
        }
        
        /* Header */
        .contact-header {
          text-align: center;
          margin-bottom: 20px;
          width: 100%;
        }
        
        /* Title - Black */
        .contact-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 24px 0;
          letter-spacing: -0.02em;
        }
        
        /* Subtitle - Light Gray */
        .contact-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #6B7280;
          margin: 0;
          max-width: 700px;
          margin: 0 auto;
        }
        
        /* Form - Full width */
        .contact-form {
          width: 100%;
          margin: 0 auto;
        }
        
        .contact-form-fields {
          display: flex;
          flex-direction: column;
          gap: 24px;
          background: #FFFFFF;
          padding: 40px;
          border-radius: 20px;
          border: 1px solid #E5E7EB;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          width: 100%;
          box-sizing: border-box;
        }
        
        /* Field Row - Full width with 2 columns */
        .contact-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          width: 100%;
        }
        
        /* Input Styles - Full width */
        .contact-input,
        .contact-textarea {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 400;
          color: #000000;
          padding: 16px 20px;
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
          transform: translateY(-2px);
        }
        
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #9CA3AF;
          opacity: 1;
        }
        
        /* Textarea */
        .contact-textarea {
          resize: vertical;
          min-height: 140px;
          width: 100%;
        }
        
        /* Checkbox */
        .contact-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 8px;
          width: 100%;
        }
        
        .contact-checkbox-input {
          width: 20px;
          height: 20px;
          margin-top: 2px;
          accent-color: #000000;
          border-radius: 4px;
          cursor: pointer;
          flex-shrink: 0;
          border: 1px solid #E5E7EB;
        }
        
        .contact-checkbox-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
          color: #6B7280;
          flex: 1;
          cursor: pointer;
        }
        
        .contact-checkbox-label a {
          color: #000000;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        
        .contact-checkbox-label a:hover {
          color: #374151;
          border-bottom-color: #374151;
        }
        
        /* Submit Button Container */
        .submit-button-container {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          margin-top: 16px;
        }
        
        /* Send Button - Black */
        .contact-submit-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 15px;
          padding: 10px 30px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 42px;
          width: auto;
          min-width: 140px;
          border: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
          background-color: #000000;
          color: #FFFFFF;
        }
        
        .contact-submit-button:hover {
          background-color: #374151;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }
        
        /* Animation */
        .contact-form {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          animation-delay: 0.2s;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* =========== RESPONSIVE DESIGN =========== */
        
        /* Large Desktop: 1440px+ */
        @media (max-width: 1440px) {
          .contact-section {
            padding: 35px 80px;
          }
        }
        
        /* Desktop: 1200px */
        @media (max-width: 1200px) {
          .contact-section {
            padding: 35px 60px;
          }
          
          .contact-title {
            font-size: 44px;
          }
          
          .contact-content {
            gap: 50px;
          }
        }
        
        /* Tablet Landscape: 1024px */
        @media (max-width: 1024px) {
          .contact-section {
            padding: 35px 40px;
          }
          
          .contact-title {
            font-size: 38px;
          }
          
          .contact-subtitle {
            font-size: 17px;
          }
          
          .contact-form-fields {
            padding: 35px 30px;
            gap: 20px;
          }
          
          .contact-field-row {
            gap: 20px;
          }
          
          .contact-content {
            gap: 45px;
          }
        }
        
        /* Medium Tablets: 900px */
        @media (max-width: 900px) {
          .contact-section {
            padding: 35px 50px;
          }
          
          .contact-title {
            font-size: 34px;
          }
          
          .contact-subtitle {
            font-size: 16px;
          }
          
          .contact-form-fields {
            padding: 30px 25px;
            gap: 18px;
          }
          
          .contact-field-row {
            gap: 18px;
          }
          
          .contact-input,
          .contact-textarea {
            padding: 14px 18px;
            font-size: 15px;
          }
          
          .contact-content {
            gap: 40px;
          }
        }
        
        /* Tablet Portrait: 768px - Switch to 1 column */
        @media (max-width: 768px) {
          .contact-section {
            padding: 35px 40px;
          }
          
          .contact-title {
            font-size: 32px;
          }
          
          .contact-field-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .contact-form-fields {
            padding: 25px 22px;
            gap: 16px;
            border-radius: 18px;
          }
          
          .contact-textarea {
            min-height: 120px;
          }
          
          .contact-checkbox {
            gap: 10px;
          }
          
          .contact-checkbox-input {
            width: 18px;
            height: 18px;
          }
          
          .contact-checkbox-label {
            font-size: 13px;
          }
          
          .contact-content {
            gap: 35px;
          }
        }
        
        /* Large Phones: 650px */
        @media (max-width: 650px) {
          .contact-section {
            padding: 35px 30px;
          }
          
          .contact-title {
            font-size: 28px;
          }
          
          .contact-form-fields {
            padding: 22px 20px;
            gap: 14px;
          }
          
          .contact-field-row {
            gap: 14px;
          }
          
          .contact-input,
          .contact-textarea {
            padding: 12px 16px;
            font-size: 14px;
            border-radius: 10px;
          }
          
          .contact-submit-button {
            font-size: 14px;
            padding: 9px 24px;
            height: 40px;
            min-width: 130px;
          }
          
          .contact-content {
            gap: 30px;
          }
        }
        
        /* Medium Phones: 576px */
        @media (max-width: 576px) {
          .contact-section {
            padding: 35px 25px;
          }
          
          .contact-title {
            font-size: 26px;
          }
          
          .contact-subtitle {
            font-size: 15px;
            max-width: 480px;
          }
          
          .contact-form-fields {
            padding: 20px 18px;
            gap: 12px;
            border-radius: 16px;
          }
          
          .contact-field-row {
            gap: 12px;
          }
          
          .contact-textarea {
            min-height: 100px;
          }
          
          .contact-checkbox-input {
            width: 16px;
            height: 16px;
          }
          
          .contact-checkbox-label {
            font-size: 12px;
            line-height: 1.4;
          }
        }
        
        /* Small Phones: 480px */
        @media (max-width: 480px) {
          .contact-section {
            padding: 35px 20px;
          }
          
          .contact-title {
            font-size: 24px;
          }
          
          .contact-subtitle {
            font-size: 14px;
            max-width: 100%;
          }
          
          .contact-form-fields {
            padding: 18px 16px;
            gap: 10px;
          }
          
          .contact-field-row {
            gap: 10px;
          }
          
          .contact-input,
          .contact-textarea {
            padding: 10px 14px;
            font-size: 13px;
            border-radius: 8px;
          }
          
          .contact-textarea {
            min-height: 90px;
          }
          
          .contact-submit-button {
            font-size: 13px;
            padding: 8px 20px;
            height: 38px;
            min-width: 120px;
          }
          
          .contact-checkbox-label {
            font-size: 11px;
          }
          
          .contact-content {
            gap: 25px;
          }
        }
        
        /* Very Small Phones: 400px */
        @media (max-width: 400px) {
          .contact-section {
            padding: 35px 15px;
          }
          
          .contact-title {
            font-size: 22px;
          }
          
          .contact-form-fields {
            padding: 16px 14px;
          }
          
          .contact-checkbox {
            gap: 8px;
          }
          
          .contact-checkbox-input {
            width: 14px;
            height: 14px;
          }
          
          .contact-checkbox-label {
            font-size: 10px;
          }
          
          .contact-submit-button {
            font-size: 12px;
            padding: 7px 18px;
            height: 36px;
            min-width: 110px;
          }
        }
        
        /* Extra Small Phones: 360px */
        @media (max-width: 360px) {
          .contact-section {
            padding: 35px 12px;
          }
          
          .contact-title {
            font-size: 20px;
          }
          
          .contact-subtitle {
            font-size: 13px;
          }
          
          .contact-input,
          .contact-textarea {
            font-size: 12px;
            padding: 9px 12px;
          }
          
          .contact-checkbox-label {
            font-size: 9px;
          }
        }
        
        /* Wide Screens: 1600px+ */
        @media (min-width: 1600px) {
          .contact-section {
            padding: 35px 150px;
          }
          
          .contact-title {
            font-size: 56px;
          }
          
          .contact-subtitle {
            font-size: 20px;
            max-width: 800px;
          }
          
          .contact-form-fields {
            padding: 50px 45px;
            gap: 28px;
          }
          
          .contact-field-row {
            gap: 28px;
          }
          
          .contact-input,
          .contact-textarea {
            padding: 18px 24px;
            font-size: 17px;
            border-radius: 14px;
          }
          
          .contact-textarea {
            min-height: 160px;
          }
          
          .contact-checkbox-label {
            font-size: 15px;
          }
          
          .contact-submit-button {
            font-size: 16px;
            padding: 12px 36px;
            height: 46px;
            min-width: 160px;
          }
          
          .contact-content {
            gap: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;