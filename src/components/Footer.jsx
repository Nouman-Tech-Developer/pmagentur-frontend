import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';

const Footer = () => {
  const { t } = useTranslation();
  const [socialLinks, setSocialLinks] = useState({});
  const [companyName, setCompanyName] = useState('REINKE');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('site_settings')
        .select('setting_key, setting_value')
        .in('setting_key', [
          'facebook_url', 
          'twitter_url', 
          'linkedin_url', 
          'instagram_url', 
          'youtube_url', 
          'github_url',
          'company_name'
        ]);

      if (error) throw error;

      const links = {};
      data.forEach(item => {
        if (item.setting_key === 'company_name') {
          setCompanyName(item.setting_value || 'REINKE');
        } else {
          const key = item.setting_key.replace('_url', '');
          if (item.setting_value && item.setting_value.trim() !== '') {
            links[key] = item.setting_value;
          }
        }
      });
      
      setSocialLinks(links);
    } catch (error) {
      console.error('Error fetching social links:', error);
    } finally {
      setLoading(false);
    }
  };

  const socialIcons = {
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68566 5.68566C5.36905 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
      </svg>
    ),
    twitter: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.19 14.39 4.53 14.45 3.87 14.41C4.45 16.13 6.06 17.38 7.95 17.41C6.47 18.57 4.64 19.25 2.68 19.25C2.32 19.25 1.96 19.22 1.61 19.16C3.5 20.41 5.74 21.12 8.16 21.12C16 21.12 20.33 14.46 20.33 8.69C20.33 8.5 20.33 8.32 20.32 8.14C21.16 7.5 21.88 6.7 22.46 6Z" fill="currentColor"/>
      </svg>
    ),
    github: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.42 4.87 20.17 8.84 21.5C9.34 21.58 9.5 21.27 9.5 21C9.5 20.77 9.5 20.14 9.5 19.31C6.73 19.91 6.14 17.97 6.14 17.97C5.68 16.81 5.03 16.5 5.03 16.5C4.12 15.88 5.1 15.9 5.1 15.9C6.1 15.97 6.63 16.93 6.63 16.93C7.5 18.45 8.97 18 9.54 17.76C9.63 17.11 9.89 16.67 10.17 16.42C7.95 16.17 5.62 15.31 5.62 11.5C5.62 10.39 6 9.5 6.65 8.79C6.55 8.54 6.2 7.5 6.75 6.15C6.75 6.15 7.59 5.88 9.5 7.17C10.29 6.95 11.15 6.84 12 6.84C12.85 6.84 13.71 6.95 14.5 7.17C16.41 5.88 17.25 6.15 17.25 6.15C17.8 7.5 17.45 8.54 17.35 8.79C18 9.5 18.38 10.39 18.38 11.5C18.38 15.32 16.04 16.16 13.81 16.41C14.17 16.72 14.5 17.33 14.5 18.26C14.5 19.6 14.5 20.68 14.5 21C14.5 21.27 14.66 21.59 15.17 21.5C19.14 20.16 22 16.42 22 12C22 6.48 17.52 2 12 2Z" fill="currentColor"/>
      </svg>
    ),
    facebook: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
      </svg>
    ),
    instagram: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C9.38 2 9.07 2.01 7.84 2.07C6.62 2.13 5.76 2.34 5.03 2.65C4.27 2.97 3.64 3.41 3.02 4.03C2.4 4.65 1.96 5.28 1.64 6.04C1.33 6.77 1.12 7.63 1.07 8.85C1.01 10.08 1 10.39 1 13.01C1 15.63 1.01 15.94 1.07 17.17C1.13 18.39 1.34 19.25 1.65 19.98C1.97 20.74 2.41 21.37 3.03 21.99C3.65 22.61 4.28 23.05 5.04 23.37C5.77 23.68 6.63 23.89 7.85 23.95C9.08 24.01 9.39 24.02 12.01 24.02C14.63 24.02 14.94 24.01 16.17 23.95C17.39 23.89 18.25 23.68 18.98 23.37C19.74 23.05 20.37 22.61 20.99 21.99C21.61 21.37 22.05 20.74 22.37 19.98C22.68 19.25 22.89 18.39 22.95 17.17C23.01 15.94 23.02 15.63 23.02 13.01C23.02 10.39 23.01 10.08 22.95 8.85C22.89 7.63 22.68 6.77 22.37 6.04C22.05 5.28 21.61 4.65 20.99 4.03C20.37 3.41 19.74 2.97 18.98 2.65C18.25 2.34 17.39 2.13 16.17 2.07C14.94 2.01 14.63 2 12.01 2H12ZM12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9ZM18.5 6.5C18.5 7.33 17.83 8 17 8C16.17 8 15.5 7.33 15.5 6.5C15.5 5.67 16.17 5 17 5C17.83 5 18.5 5.67 18.5 6.5Z" fill="currentColor"/>
      </svg>
    ),
    youtube: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M23.498 6.186C23.398 5.786 23.198 5.386 22.898 5.086C22.598 4.786 22.198 4.586 21.798 4.486C18.998 4 12 4 12 4C12 4 5.002 4 2.202 4.486C1.802 4.586 1.402 4.786 1.102 5.086C0.802 5.386 0.602 5.786 0.502 6.186C0.002 9 0 12 0 12C0 12 0.002 15 0.502 17.814C0.602 18.214 0.802 18.614 1.102 18.914C1.402 19.214 1.802 19.414 2.202 19.514C5.002 20 12 20 12 20C12 20 18.998 20 21.798 19.514C22.198 19.414 22.598 19.214 22.898 18.914C23.198 18.614 23.398 18.214 23.498 17.814C23.998 15 24 12 24 12C24 12 23.998 9 23.498 6.186ZM9.5 15.5V8.5L16 12L9.5 15.5Z" fill="currentColor"/>
      </svg>
    )
  };

  // Get active social links (only those with URLs)
  const activeSocialLinks = Object.entries(socialLinks).filter(([_, url]) => url && url.trim() !== '');

  if (loading) {
    return (
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-logo-section">
            <h3 className="footer-logo">REINKE</h3>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          
          {/* Logo - Left */}
          <div className="footer-logo-section">
            <h3 className="footer-logo">{companyName}</h3>
          </div>
          
          {/* Horizontal Menu - Center */}
          <div className="footer-menu">
            <Link to="/#solutions">{t('nav.solutions')}</Link>
            <Link to="/#products">{t('nav.products')}</Link>
            <Link to="/about">{t('nav.about')}</Link>
            <Link to="/career">{t('nav.careers')}</Link>
            <Link to="/calculator">{t('nav.calculator', 'Calculator')}</Link>
          </div>
          
          {/* Social Icons - Right */}
          <div className="footer-social">
            {activeSocialLinks.length > 0 ? (
              activeSocialLinks.map(([platform, url]) => (
                <a 
                  key={platform}
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={platform}
                  className="footer-social-link"
                >
                  {socialIcons[platform]}
                </a>
              ))
            ) : (
              <div className="footer-social-placeholder"></div>
            )}
          </div>
          
          {/* Copyright - Full width bottom */}
          <div className="footer-bottom">
            <div className="footer-copyright">
              © {new Date().getFullYear()} {companyName}. {t('footer.copyright')}
            </div>
            <div className="footer-legal">
              <Link to="/impressum">{t('footer.legal.notice')}</Link>
              <Link to="/dataprotection">{t('footer.legal.privacy')}</Link>
              <Link to="/agb">{t('footer.legal.terms')}</Link>
            </div>
          </div>
          
        </div>
      </footer>

      <style jsx="true">{`
        .site-footer {
          width: 100%;
          background: #000000;
          color: #FFFFFF;
          padding: 24px 100px;
          box-sizing: border-box;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }
        
        .footer-logo-section {
          display: flex;
          align-items: center;
        }
        
        .footer-logo {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: 0.02em;
        }
        
        .footer-menu {
          display: flex;
          align-items: center;
          gap: 32px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .footer-menu a {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #FFFFFF;
          text-decoration: none;
          transition: color 0.2s ease;
          opacity: 0.9;
        }
        
        .footer-menu a:hover {
          color: #9CA3AF;
        }
        
        .footer-social {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 120px;
          justify-content: flex-end;
        }
        
        .footer-social-placeholder {
          width: 36px;
        }
        
        .footer-social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          color: #FFFFFF;
          opacity: 0.8;
          transition: all 0.2s ease;
          border-radius: 50%;
        }
        
        .footer-social-link:hover {
          opacity: 1;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .footer-social-link svg {
          width: 18px;
          height: 18px;
        }
        
        .footer-bottom {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-copyright {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
        }
        
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        
        .footer-legal a {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
          font-size: 14px;
          color: #9CA3AF;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        
        .footer-legal a:hover {
          color: #FFFFFF;
        }
        
        @media only screen and (max-width: 1200px) {
          .site-footer {
            padding: 24px 60px;
          }
        }
        
        @media only screen and (max-width: 1024px) {
          .site-footer {
            padding: 24px 40px;
          }
          .footer-menu {
            gap: 24px;
          }
        }
        
        @media only screen and (max-width: 900px) {
          .footer-container {
            flex-direction: column;
            gap: 20px;
          }
          .footer-menu {
            position: static;
            transform: none;
            margin: 10px 0;
          }
          .footer-social {
            min-width: auto;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .footer-legal {
            justify-content: center;
          }
        }
        
        @media only screen and (max-width: 768px) {
          .site-footer {
            padding: 24px 40px;
          }
          .footer-menu {
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }
        }
        
        @media only screen and (max-width: 576px) {
          .site-footer {
            padding: 24px 25px;
          }
          .footer-menu a {
            font-size: 14px;
          }
          .footer-legal {
            gap: 16px;
            flex-wrap: wrap;
          }
          .footer-legal a {
            font-size: 13px;
          }
          .footer-copyright {
            font-size: 13px;
          }
        }
        
        @media only screen and (max-width: 480px) {
          .site-footer {
            padding: 20px 20px;
          }
          .footer-menu {
            gap: 16px;
          }
          .footer-menu a {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;