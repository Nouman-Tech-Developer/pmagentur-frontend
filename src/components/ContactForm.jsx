import React from 'react';

const ContactSection = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-header">
              <h2 className="contact-title">Free Consultation</h2>
              <p className="contact-subtitle">
                Get a free, no-obligation consultation and discover how AI automation can transform your business.
              </p>
            </div>
            
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#0071E3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Email</div>
                  <a href="mailto:info@tolero.com" className="contact-value">info@tolero.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5Z" fill="#0071E3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Phone</div>
                  <a href="tel:+491234567890" className="contact-value">+49 123 456 7890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#0071E3"/>
                  </svg>
                </div>
                <div className="contact-details">
                  <div className="contact-label">Location</div>
                  <div className="contact-value">Sample Street 123, 10115 Berlin</div>
                </div>
              </div>
            </div>
            
            <div className="contact-form">
              <div className="contact-form-fields">
                <div className="contact-field-row">
                  <input 
                    type="text" 
                    placeholder="Your Name *" 
                    className="contact-input"
                  />
                  <input 
                    type="text" 
                    placeholder="Company" 
                    className="contact-input"
                  />
                </div>
                
                <div className="contact-field-row">
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    className="contact-input"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="contact-input"
                  />
                </div>
                
                <textarea 
                  placeholder="Your Message *" 
                  rows="4" 
                  className="contact-textarea"
                ></textarea>
                
                <div className="contact-checkbox">
                  <input type="checkbox" id="privacy" className="contact-checkbox-input" />
                  <label htmlFor="privacy" className="contact-checkbox-label">
                    I agree to the <a href="#">privacy policy</a> *
                  </label>
                </div>
                
                <button type="submit" className="contact-btn contact-submit">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        /* Contact Section */
        .contact-section {
          width: 100%;
          padding: 35px 100px; /* 35px top-bottom, 100px left-right */
          background: #FFFFFF;
          box-sizing: border-box;
        }
        
        @media only screen and (max-width: 1200px) {
          .contact-section {
            padding: 35px 60px; /* Tablet: 35px top-bottom, 60px left-right */
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-section {
            padding: 35px 40px; /* Mobile: 35px top-bottom, 40px left-right */
          }
        }
        
        @media only screen and (max-width: 480px) {
          .contact-section {
            padding: 35px 24px; /* Small mobile: 35px top-bottom, 24px left-right */
          }
        }
        
        .contact-container {
          max-width: 1400px;
          margin: 0 auto;
        }
        
        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }
        
        @media only screen and (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }
        }
        
        /* Header */
        .contact-header {
          grid-column: 1 / -1;
          text-align: center;
          margin-bottom: 24px;
        }
        
        .contact-title {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 40px;
          line-height: 48px;
          font-weight: 600;
          color: #E10600;
          margin: 0 0 16px 0;
        }
        
        .contact-subtitle {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
          color: #0071E3;
          margin: 0;
          max-width: 700px;
          margin: 0 auto;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-title {
            font-size: 32px;
            line-height: 40px;
          }
          
          .contact-subtitle {
            font-size: 16px;
            line-height: 24px;
          }
        }
        
        /* Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }
        
        /* Contact Item */
        .contact-item {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }
        
        /* Contact Icon */
        .contact-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #F5F5F7;
          border-radius: 12px;
        }
        
        /* Contact Details */
        .contact-details {
          display: flex;
          flex-direction: column;
        }
        
        .contact-label {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
          color: #6B7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        
        .contact-value {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 24px;
          font-weight: 600;
          color: #000000;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .contact-value:hover {
          color: #0071E3;
        }
        
        /* Form */
        .contact-form-fields {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        /* Field Row */
        .contact-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        @media only screen and (max-width: 768px) {
          .contact-field-row {
            grid-template-columns: 1fr;
          }
        }
        
        /* Input Styles */
        .contact-input,
        .contact-textarea {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
          color: #000000;
          padding: 12px 16px;
          border: 1px solid #E5E5E7;
          border-radius: 8px;
          background: #FFFFFF;
          outline: none;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        }
        
        .contact-input:focus,
        .contact-textarea:focus {
          border-color: #0071E3;
          box-shadow: 0 0 0 3px rgba(0, 113, 227, 0.1);
        }
        
        .contact-input::placeholder,
        .contact-textarea::placeholder {
          color: #6B7280;
          opacity: 0.7;
        }
        
        /* Textarea */
        .contact-textarea {
          resize: vertical;
          min-height: 120px;
        }
        
        /* Checkbox */
        .contact-checkbox {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 8px;
        }
        
        .contact-checkbox-input {
          width: 20px;
          height: 20px;
          margin-top: 2px;
          accent-color: #0071E3;
        }
        
        .contact-checkbox-label {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          color: #6B7280;
          flex: 1;
        }
        
        .contact-checkbox-label a {
          color: #0071E3;
          text-decoration: none;
        }
        
        .contact-checkbox-label a:hover {
          text-decoration: underline;
        }
        
        /* Submit Button */
        .contact-submit {
          margin-top: 16px;
          width: 100%;
        }
        
        /* Button Styles - Blue button */
        .contact-btn {
          font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 16px;
          padding: 12px 32px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          min-width: 200px;
          outline: none;
          border: none;
          box-sizing: border-box;
          letter-spacing: 0.01em;
          background-color: #2563EB;
          color: #FFFFFF;
        }
        
        .contact-btn:hover {
          background-color: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
        }
        
        /* Responsive */
        @media only screen and (max-width: 1024px) {
          .contact-content {
            gap: 48px;
          }
          
          .contact-item {
            gap: 16px;
          }
          
          .contact-icon {
            width: 40px;
            height: 40px;
          }
          
          .contact-value {
            font-size: 16px;
          }
          
          .contact-btn {
            padding: 10px 24px;
            font-size: 15px;
            height: 44px;
            min-width: 180px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .contact-info {
            gap: 24px;
          }
          
          .contact-form-fields {
            gap: 16px;
          }
          
          .contact-field-row {
            gap: 16px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactSection;