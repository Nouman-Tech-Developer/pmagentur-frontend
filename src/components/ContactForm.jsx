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
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#22D3EE"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('contact.email.label')}</div>
                  <a href="mailto:info@tolero.com" className="contact-value">info@tolero.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5Z" fill="#22D3EE"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('contact.phone.label')}</div>
                  <a href="tel:+491234567890" className="contact-value">+49 123 456 7890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#22D3EE"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">{t('contact.location.label')}</div>
                  <div className="contact-value">{t('contact.location.value')}</div>
                </div>
              </div>
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
                
                <button type="submit" className="tolero-button tolero-button--primary">
                  {t('contact.form.submit')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Contact Section - Reduced spacing */
        .contact-section {
          width: 100%;
          padding: 15px 100px 25px 100px;
          background: #FFFFFF;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .contact-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(34, 211, 238, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(37, 99, 235, 0.03) 0%, transparent 50%);
          z-index: 1;
        }
        
        @media only screen and (max-width: 1200px) {
          .contact-section {
            padding: 10px 80px 20px 80px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-section {
            padding: 10px 60px 15px 60px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .contact-section {
            padding: 10px 50px 15px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-section {
            padding: 10px 40px 15px 40px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .contact-section {
            padding: 10px 30px 15px 30px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-section {
            padding: 10px 25px 15px 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-section {
            padding: 10px 20px 15px 20px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .contact-section {
            padding: 8px 15px 12px 15px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .contact-section {
            padding: 8px 12px 12px 12px;
          }
        }
        
        /* Extra wide screens */
        @media only screen and (min-width: 1600px) {
          .contact-section {
            padding: 20px 150px 30px 150px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .contact-section {
            padding: 30px 200px 40px 200px;
          }
        }
        
        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: start;
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-content {
            gap: 35px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-content {
            gap: 30px;
          }
        }
        
        /* Header */
        .contact-header {
          grid-column: 1 / -1;
          text-align: center;
          margin-bottom: 30px;
          margin-top: 10px;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-header {
            margin-bottom: 25px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-header {
            margin-bottom: 20px;
          }
        }
        
        .contact-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 52px;
          font-weight: 700;
          line-height: 1.1;
          color: #000000;
          margin: 0 0 20px 0;
          letter-spacing: -0.02em;
        }
        
        .contact-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          line-height: 1.8;
          font-weight: 400;
          color: #666666;
          margin: 0;
          max-width: 700px;
          margin: 0 auto;
        }
        
        @media only screen and (max-width: 1200px) {
          .contact-title {
            font-size: 44px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-title {
            font-size: 38px;
          }
          
          .contact-subtitle {
            font-size: 17px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .contact-title {
            font-size: 34px;
          }
          
          .contact-subtitle {
            font-size: 16px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-title {
            font-size: 32px;
          }
        }
        
        @media only screen and (max-width: 650px) {
          .contact-title {
            font-size: 28px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-title {
            font-size: 26px;
          }
          
          .contact-subtitle {
            font-size: 15px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-title {
            font-size: 24px;
          }
          
          .contact-subtitle {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 400px) {
          .contact-title {
            font-size: 22px;
          }
        }
        
        @media only screen and (max-width: 350px) {
          .contact-title {
            font-size: 20px;
          }
          
          .contact-subtitle {
            font-size: 13px;
          }
        }
        
        @media only screen and (min-width: 1600px) {
          .contact-title {
            font-size: 56px;
          }
          
          .contact-subtitle {
            font-size: 20px;
          }
        }
        
        @media only screen and (min-width: 2000px) {
          .contact-title {
            font-size: 60px;
          }
        }
        
        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-info {
            gap: 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-info {
            gap: 18px;
          }
        }
        
        /* Contact Item */
        .contact-item {
          display: flex;
          gap: 18px;
          align-items: flex-start;
          padding: 20px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 18px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
        }
        
        .contact-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border-color: rgba(34, 211, 238, 0.2);
          background: rgba(255, 255, 255, 0.9);
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-item {
            padding: 18px;
            gap: 16px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-item {
            padding: 16px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-item {
            padding: 14px;
            gap: 14px;
            border-radius: 16px;
          }
        }
        
        /* Contact Icon */
        .contact-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(34, 211, 238, 0.1);
          border-radius: 14px;
          transition: all 0.3s ease;
        }
        
        .contact-item:hover .contact-icon {
          background: rgba(34, 211, 238, 0.15);
          transform: scale(1.05);
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-icon {
            width: 44px;
            height: 44px;
          }
          
          .contact-icon svg {
            width: 20px;
            height: 20px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
          }
          
          .contact-icon svg {
            width: 18px;
            height: 18px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-icon {
            width: 32px;
            height: 32px;
          }
          
          .contact-icon svg {
            width: 16px;
            height: 16px;
          }
        }
        
        /* Contact Details */
        .contact-details {
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 600;
          color: #666666;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-label {
            font-size: 12px;
            margin-bottom: 5px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-label {
            font-size: 11px;
          }
        }
        
        .contact-value {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
          color: #000000;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .contact-value:hover {
          color: #22D3EE;
          transform: translateX(4px);
        }
        
        @media only screen and (max-width: 1200px) {
          .contact-value {
            font-size: 15px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-value {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-value {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-value {
            font-size: 12px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-value {
            font-size: 11px;
          }
        }
        
        /* Form */
        .contact-form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
          background: rgba(255, 255, 255, 0.7);
          padding: 30px;
          border-radius: 20px;
          border: 1px solid rgba(0, 0, 0, 0.05);
          backdrop-filter: blur(10px);
          box-shadow: 0 6px 30px rgba(0, 0, 0, 0.05);
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-form-fields {
            padding: 25px;
            gap: 18px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-form-fields {
            padding: 22px 20px;
            gap: 16px;
            border-radius: 18px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-form-fields {
            padding: 20px 18px;
            gap: 14px;
            border-radius: 16px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-form-fields {
            padding: 18px 16px;
            gap: 12px;
          }
        }
        
        /* Field Row */
        .contact-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-field-row {
            grid-template-columns: 1fr;
            gap: 14px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-field-row {
            gap: 12px;
          }
        }
        
        /* Input Styles */
        .contact-input,
        .contact-textarea {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;
          color: #000000;
          padding: 14px 18px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.9);
          outline: none;
          transition: all 0.3s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #22D3EE;
          box-shadow: 0 0 0 3px rgba(34, 211, 238, 0.1);
          background: #FFFFFF;
          transform: translateY(-2px);
        }
        
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #999999;
          opacity: 0.7;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-input,
          .contact-textarea {
            padding: 12px 16px;
            font-size: 14px;
            border-radius: 10px;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-input,
          .contact-textarea {
            padding: 11px 14px;
            font-size: 13px;
            border-radius: 8px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-input,
          .contact-textarea {
            padding: 10px 12px;
            font-size: 12px;
          }
        }
        
        /* Textarea */
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        @media only screen and (max-width: 550px) {
          .contact-textarea {
            min-height: 100px;
          }
        }
        
        /* Checkbox */
        .contact-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          margin-top: 6px;
        }
        
        @media only screen and (max-width: 550px) {
          .contact-checkbox {
            gap: 8px;
            margin-top: 4px;
          }
        }
        
        .contact-checkbox-input {
          width: 18px;
          height: 18px;
          margin-top: 2px;
          accent-color: #22D3EE;
          border-radius: 4px;
          cursor: pointer;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-checkbox-input {
            width: 16px;
            height: 16px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-checkbox-input {
            width: 14px;
            height: 14px;
          }
        }
        
        .contact-checkbox-label {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 13px;
          line-height: 1.4;
          font-weight: 400;
          color: #666666;
          flex: 1;
          cursor: pointer;
        }
        
        .contact-checkbox-label a {
          color: #22D3EE;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        
        .contact-checkbox-label a:hover {
          color: #2563EB;
          text-decoration: underline;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-checkbox-label {
            font-size: 12px;
            line-height: 1.3;
          }
        }
        
        @media only screen and (max-width: 550px) {
          .contact-checkbox-label {
            font-size: 11px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-checkbox-label {
            font-size: 10px;
          }
        }
        
        /* Consistent Button Styles - Match other sections */
        .tolero-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 1rem;
          padding: 8px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          width: 157px;
          border: none;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          text-align: center;
          margin-top: 10px;
        }
        
        .tolero-button--primary {
          background-color: #2563EB;
          color: #FFFFFF;
          width: 100%;
        }
        
        .tolero-button--primary:hover {
          background-color: #1D4ED8;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }
        
        @media only screen and (max-width: 768px) {
          .tolero-button {
            width: 100%;
          }
        }
        
        /* Animations */
        .contact-item {
          opacity: 0;
          transform: translateX(-20px);
          animation: fadeInLeft 0.6s ease forwards;
        }
        
        .contact-item:nth-child(1) { animation-delay: 0.1s; }
        .contact-item:nth-child(2) { animation-delay: 0.2s; }
        .contact-item:nth-child(3) { animation-delay: 0.3s; }
        
        .contact-form {
          opacity: 0;
          transform: translateX(20px);
          animation: fadeInRight 0.6s ease forwards;
          animation-delay: 0.4s;
        }
        
        @keyframes fadeInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;