import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-content">
            
            {/* Column 1: Contact & Info */}
            <div className="footer-column footer-column--main">
              <h3 className="footer-logo">TOLERO</h3>
              <p className="footer-tagline">{t('footer.tagline')}</p>
              
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#22D3EE"/>
                  </svg>
                  <a href="mailto:info@tolero.com">info@tolero.com</a>
                </div>
                
                <div className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 15.5C18.75 15.5 17.55 15.3 16.43 14.93C16.08 14.82 15.69 14.9 15.41 15.17L13.21 17.37C10.38 15.93 8.06 13.62 6.62 10.78L8.82 8.57C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.5C21 15.95 20.55 15.5 20 15.5Z" fill="#22D3EE"/>
                  </svg>
                  <a href="tel:+491234567890">+49 123 456 7890</a>
                </div>
                
                <div className="footer-contact-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#22D3EE"/>
                  </svg>
                  <span>{t('footer.location')}</span>
                </div>
              </div>
              
              <div className="footer-social">
                <a href="#" aria-label="LinkedIn" className="footer-social-link">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68566 5.68566C5.36905 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Column 2: Services */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.services.title')}</h4>
              <ul className="footer-links">
                <li><a href="#">{t('footer.services.aiPhone')}</a></li>
                <li><a href="#">{t('footer.services.chatbots')}</a></li>
                <li><a href="#">{t('footer.services.emailAutomation')}</a></li>
                <li><a href="#">{t('footer.services.workflow')}</a></li>
              </ul>
            </div>
            
            {/* Column 3: Company */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.company.title')}</h4>
              <ul className="footer-links">
                <li><a href="#">{t('footer.company.about')}</a></li>
                <li><a href="#">{t('footer.company.careers')}</a></li>
                <li><a href="#">{t('footer.company.references')}</a></li>
                <li><a href="#">{t('footer.company.blog')}</a></li>
              </ul>
            </div>
            
            {/* Column 4: Resources */}
            <div className="footer-column">
              <h4 className="footer-column-title">{t('footer.resources.title')}</h4>
              <ul className="footer-links">
                <li><a href="#">{t('footer.resources.caseStudies')}</a></li>
                <li><a href="#">{t('footer.resources.whitepapers')}</a></li>
                <li><a href="#">{t('footer.resources.faq')}</a></li>
                <li><a href="#">{t('footer.resources.support')}</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} {t('footer.copyright')}
            </div>
            <div className="footer-legal">
              <a href="#">{t('footer.legal.privacy')}</a>
              <a href="#">{t('footer.legal.notice')}</a>
              <a href="#">{t('footer.legal.terms')}</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx="true">{`
        /* Footer */
        .site-footer {
          width: 100%;
          background: #000000;
          color: #FFFFFF;
          padding: 100px 60px 60px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        
        .site-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(circle at 20% 30%, rgba(34, 211, 238, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(37, 99, 235, 0.05) 0%, transparent 50%);
          z-index: 1;
        }
        
        @media only screen and (max-width: 1200px) {
          .site-footer {
            padding: 80px 40px 50px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .site-footer {
            padding: 60px 25px 40px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .site-footer {
            padding: 50px 15px 32px;
          }
        }
        
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        /* Footer Content - 4 columns on desktop */
        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
        
        @media only screen and (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
        }
        
        @media only screen and (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
        
        /* Column Styles */
        .footer-column {
          display: flex;
          flex-direction: column;
        }
        
        .footer-column--main {
          max-width: 350px;
        }
        
        /* Logo */
        .footer-logo {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 16px 0;
          letter-spacing: 0.05em;
        }
        
        /* Tagline */
        .footer-tagline {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 16px;
          line-height: 1.5;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          margin: 0 0 32px 0;
          opacity: 0.9;
        }
        
        /* Contact */
        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 40px;
        }
        
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .footer-contact-item a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-contact-item a:hover {
          color: #22D3EE;
          transform: translateX(4px);
        }
        
        /* Social */
        .footer-social {
          display: flex;
          gap: 16px;
        }
        
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          color: rgba(255, 255, 255, 0.7);
        }
        
        .footer-social-link:hover {
          background: #22D3EE;
          border-color: #22D3EE;
          color: #FFFFFF;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 20px rgba(34, 211, 238, 0.3);
        }
        
        /* Column Title */
        .footer-column-title {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.3;
          color: #FFFFFF;
          margin: 0 0 24px 0;
          position: relative;
          padding-bottom: 12px;
        }
        
        .footer-column-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #22D3EE, #2563EB);
        }
        
        /* Links */
        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .footer-links li a {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }
        
        .footer-links li a:hover {
          color: #22D3EE;
          transform: translateX(4px);
        }
        
        /* Bottom Section */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media only screen and (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
        }
        
        /* Copyright */
        .footer-copyright {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
        }
        
        /* Legal Links */
        .footer-legal {
          display: flex;
          gap: 32px;
        }
        
        @media only screen and (max-width: 768px) {
          .footer-legal {
            gap: 20px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .footer-legal {
            flex-direction: column;
            gap: 12px;
          }
        }
        
        .footer-legal a {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          line-height: 1.4;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.6);
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .footer-legal a:hover {
          color: #22D3EE;
          transform: translateY(-2px);
        }
        
        /* Responsive */
        @media only screen and (max-width: 1024px) {
          .footer-content {
            gap: 40px;
          }
          
          .footer-contact-item,
          .footer-links li a {
            font-size: 14px;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .footer-column-title {
            font-size: 17px;
          }
          
          .footer-links li a {
            font-size: 14px;
          }
          
          .footer-content {
            gap: 32px;
          }
        }
        
        /* Animations */
        .footer-column {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .footer-column:nth-child(1) { animation-delay: 0.1s; }
        .footer-column:nth-child(2) { animation-delay: 0.2s; }
        .footer-column:nth-child(3) { animation-delay: 0.3s; }
        .footer-column:nth-child(4) { animation-delay: 0.4s; }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Footer;