import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import BlackLogo from '../assets/white-logo.png';
import WhiteLogo from '../assets/black-logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState('DE');

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks = [
  {
    label: t('nav.home', 'Home'),
    key: 'home',
    hasDropdown: false,
    to: '/'
  },
  {
    label: t('nav.solutions'),
    key: 'solutions',
    hasDropdown: false,
    to: '/solutions'
  },
  {
    label: t('nav.products'),
    key: 'products',
    hasDropdown: false,
    to: '/products'
  },
  {
    label: t('nav.about'),
    key: 'about',
    hasDropdown: false,
    to: '/about'
  },
  // {
  //   label: t('nav.careers'),
  //   key: 'careers',
  //   hasDropdown: false,
  //   to: '/career'
  // },
  {
    label: t('nav.appointment', 'Book a Demo'), // Translation applied with fallback
    key: 'appointment',
    hasDropdown: false,
    to: '/appointment'
  }
];

  const languages = [
    { code: 'de', label: 'DE' },
    { code: 'en', label: 'EN' },
  ];

  const getHeaderClass = () => {
    if (isMenuOpen) return 'reinke-header__wrapper reinke-header--menu-open';
    if (scrolled) return 'reinke-header__wrapper reinke-header--scrolled';
    if (isNavHovered) return 'reinke-header__wrapper reinke-header--top reinke-header--hovered';
    return 'reinke-header__wrapper reinke-header--top';
  };

  const getLogo = () => {
    if (isMenuOpen || scrolled || isNavHovered) return BlackLogo;
    return WhiteLogo;
  };

  const handleLangSelect = (langCode) => {
    i18n.changeLanguage(langCode);
    setSelectedLang(langCode.toUpperCase());
    setIsLangOpen(false);
    setIsMenuOpen(false);
  };

  const handleNavMouseEnter = () => {
    if (!scrolled && !isMenuOpen) {
      setIsNavHovered(true);
    }
  };

  const handleNavMouseLeave = () => {
    setIsNavHovered(false);
  };

  return (
    <>
      <div className="reinke-header">
        <header
          className={getHeaderClass()}
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >
          <div className="reinke-header__bar" role="menubar">
            <div className="reinke-header__inner">
              <Link to="/" className="reinke-header__brand" aria-label="Home">
                <img
                  src={getLogo()}
                  alt="Reinke AI Automation"
                  className="reinke-header__logo"
                />
              </Link>

              <nav className="reinke-header__nav" role="navigation">
                <ul className="reinke-header__nav-list">
                  {navLinks.map((link) => (
                    <li
                      key={link.key}
                      className="reinke-header__nav-item"
                    >
                      <Link
                        to={link.to}
                        className="reinke-header__nav-button"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="reinke-header__right-group">
                <div className={`reinke-header__lang-switcher ${isLangOpen ? 'reinke-header__lang-switcher--active' : ''}`}>
                  <button
                    className="reinke-header__lang-button"
                    aria-haspopup="true"
                    aria-expanded={isLangOpen}
                    aria-label={t('nav.selectLanguage')}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    {selectedLang}
                    <span className="reinke-header__lang-arrow" />
                  </button>

                  {isLangOpen && (
                    <div className="reinke-header__lang-dropdown">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className={`reinke-header__lang-option ${selectedLang === lang.label ? 'reinke-header__lang-option--active' : ''}`}
                          onClick={() => handleLangSelect(lang.code)}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <button
                className="reinke-header__burger"
                aria-label={t('nav.openMenu')}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="reinke-header__burger-line" />
                <span className="reinke-header__burger-line" />
                <span className="reinke-header__burger-line" />
              </button>
            </div>
          </div>
        </header>

        {isMenuOpen && (
          <div className="reinke-header__mobile">
            <div className="reinke-header__mobile-header">
              <Link to="/" className="reinke-header__brand">
                <img src={BlackLogo} alt="Reinke AI Automation" className="reinke-header__logo" />
              </Link>
              <button
                className="reinke-header__mobile-close"
                aria-label={t('nav.closeMenu')}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="reinke-header__mobile-close-icon" />
              </button>
            </div>

            <div className="reinke-header__mobile-body">
              <ul className="reinke-header__mobile-list">
                {navLinks.map((link) => (
                  <li key={link.key} className="reinke-header__mobile-item">
                    <Link
                      to={link.to}
                      className="reinke-header__mobile-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="reinke-header__mobile-lang-switcher">
                <button
                  className="reinke-header__mobile-lang-button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  {selectedLang}
                  <span className="reinke-header__mobile-lang-arrow" />
                </button>

                {isLangOpen && (
                  <div className="reinke-header__mobile-lang-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`reinke-header__mobile-lang-option ${selectedLang === lang.label ? 'reinke-header__mobile-lang-option--active' : ''}`}
                        onClick={() => handleLangSelect(lang.code)}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx="true">{`
        .reinke-header {
          display: block;
          width: 100%;
        }

        .reinke-header__wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .reinke-header__wrapper.reinke-header--top {
          background-color: transparent;
        }

        .reinke-header__wrapper.reinke-header--top .reinke-header__nav-button,
        .reinke-header__wrapper.reinke-header--top .reinke-header__lang-button {
          color: #FFFFFF;
        }

        .reinke-header__wrapper.reinke-header--top .reinke-header__burger-line {
          background-color: #FFFFFF;
        }

        .reinke-header__wrapper.reinke-header--top.reinke-header--hovered {
          background-color: #FFFFFF;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #E5E5E7;
        }

        .reinke-header__wrapper.reinke-header--top.reinke-header--hovered .reinke-header__nav-button,
        .reinke-header__wrapper.reinke-header--top.reinke-header--hovered .reinke-header__lang-button {
          color: #000000;
        }

        .reinke-header__wrapper.reinke-header--top.reinke-header--hovered .reinke-header__burger-line {
          background-color: #000000;
        }

        .reinke-header__wrapper.reinke-header--scrolled {
          background-color: #FFFFFF;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #E5E5E7;
        }

        .reinke-header__wrapper.reinke-header--scrolled .reinke-header__nav-button,
        .reinke-header__wrapper.reinke-header--scrolled .reinke-header__lang-button {
          color: #000000;
        }

        .reinke-header__wrapper.reinke-header--scrolled .reinke-header__burger-line {
          background-color: #000000;
        }

        .reinke-header__wrapper.reinke-header--menu-open {
          background-color: #FFFFFF;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
        }

        .reinke-header__wrapper.reinke-header--menu-open .reinke-header__nav-button,
        .reinke-header__wrapper.reinke-header--menu-open .reinke-header__lang-button {
          color: #000000;
        }

        .reinke-header__wrapper.reinke-header--menu-open .reinke-header__burger-line {
          background-color: #000000;
        }

        .reinke-header__bar {
          padding: 12px 120px;
        }

        @media only screen and (max-width: 1200px) {
          .reinke-header__bar {
            padding: 12px 60px;
          }
        }

        @media only screen and (max-width: 1024px) {
          .reinke-header__bar {
            padding: 12px 40px;
          }
        }

        @media only screen and (max-width: 768px) {
          .reinke-header__bar {
            padding: 12px 24px;
          }
        }

        .reinke-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .reinke-header__brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }

        .reinke-header__logo {
          display: block;
          height: 3rem;
          width: auto;
          transition: transform 0.3s ease;
        }

        .reinke-header__brand:hover .reinke-header__logo {
          transform: scale(1.05);
        }

        @media only screen and (min-width: 768px) {
          .reinke-header__logo {
            height: 3rem;
          }
        }

        .reinke-header__nav {
          display: none;
        }

        @media only screen and (min-width: 1024px) {
          .reinke-header__nav {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .reinke-header__nav-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .reinke-header__nav-item {
          position: relative;
        }

        .reinke-header__nav-button {
          text-decoration: none;
          background: transparent;
          border: 0;
          padding: 8px 24px;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
        }

        .reinke-header__nav-button:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #000000;
          transition: width 0.3s ease;
        }

        .reinke-header__nav-button:hover::after {
          width: 100%;
        }

        .reinke-header__right-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .reinke-header__lang-switcher {
          display: none;
          position: relative;
        }

        @media only screen and (min-width: 1024px) {
          .reinke-header__lang-switcher {
            display: inline-flex;
            align-items: center;
          }
        }

        .reinke-header__lang-button {
          background: transparent;
          border: none;
          padding: 8px 24px;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .reinke-header__lang-button:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__lang-arrow {
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .reinke-header__lang-switcher--active .reinke-header__lang-arrow {
          transform: rotate(180deg);
        }

        .reinke-header__lang-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          right: 0;
          background: #FFFFFF;
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
          min-width: 5rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #E5E5E7;
          padding: 0.25rem;
        }

        .reinke-header__lang-option {
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #111827;
          transition: all 0.2s ease;
          text-align: left;
          border-radius: 4px;
        }

        .reinke-header__lang-option:focus {
          outline: 2px solid #000000;
          outline-offset: 2px;
        }

        .reinke-header__lang-option:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #000000;
        }

        .reinke-header__lang-option--active {
          font-weight: 500;
          color: #000000;
          background: rgba(0, 0, 0, 0.1);
        }

        .reinke-header__burger {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          cursor: pointer;
          width: 40px;
          height: 40px;
          padding: 0;
          gap: 4px;
          z-index: 1001;
        }

        .reinke-header__burger:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        @media only screen and (max-width: 1024px) {
          .reinke-header__burger {
            display: inline-flex;
          }
        }

        @media only screen and (min-width: 1024px) {
          .reinke-header__burger {
            display: none;
          }
        }

        .reinke-header__burger-line {
          width: 20px;
          height: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .reinke-header--menu-open .reinke-header__burger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .reinke-header--menu-open .reinke-header__burger-line:nth-child(2) {
          opacity: 0;
        }

        .reinke-header--menu-open .reinke-header__burger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .reinke-header__mobile {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #FFFFFF;
          color: #111827;
          display: flex;
          flex-direction: column;
          z-index: 9999;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media only screen and (min-width: 1024px) {
          .reinke-header__mobile {
            display: none;
          }
        }

        .reinke-header__mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #E5E5E7;
        }

        @media only screen and (min-width: 768px) {
          .reinke-header__mobile-header {
            padding: 1.5rem 2rem;
          }
        }

        .reinke-header__mobile-close {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          cursor: pointer;
          width: 40px;
          height: 40px;
          padding: 0;
        }

        .reinke-header__mobile-close:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__mobile-close-icon {
          position: relative;
          width: 20px;
          height: 20px;
        }

        .reinke-header__mobile-close-icon::before,
        .reinke-header__mobile-close-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #111827;
        }

        .reinke-header__mobile-close-icon::before {
          transform: rotate(45deg);
        }

        .reinke-header__mobile-close-icon::after {
          transform: rotate(-45deg);
        }

        .reinke-header__mobile-body {
          flex: 1 1 auto;
          overflow: auto;
          padding: 2rem 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          .reinke-header__mobile-body {
            padding: 3rem 2rem;
          }
        }

        .reinke-header__mobile-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .reinke-header__mobile-item {
          border-bottom: 1px solid #E5E5E7;
        }

        .reinke-header__mobile-item:last-child {
          border-bottom: none;
        }

        .reinke-header__mobile-link {
          display: block;
          padding: 12px 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 500;
          color: #111827;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .reinke-header__mobile-link:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__mobile-link:hover {
          color: #000000;
        }

        .reinke-header__mobile-lang-switcher {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #E5E5E7;
        }

        .reinke-header__mobile-lang-button {
          width: 100%;
          padding: 12px 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 500;
          color: #111827;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reinke-header__mobile-lang-button:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__mobile-lang-arrow {
          display: inline-flex;
          width: 0.75rem;
          height: 0.75rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .reinke-header__mobile-lang-dropdown {
          margin-top: 0.5rem;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #E5E5E7;
          overflow: hidden;
        }

        .reinke-header__mobile-lang-option {
          padding: 10px 16px;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #111827;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .reinke-header__mobile-lang-option:focus {
          outline: 2px solid #000000;
          outline-offset: 2px;
        }

        .reinke-header__mobile-lang-option:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #000000;
        }

        .reinke-header__mobile-lang-option--active {
          font-weight: 500;
          color: #000000;
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  );
};

export default Navbar;