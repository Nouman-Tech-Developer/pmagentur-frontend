import React, { useState, useEffect } from 'react';
import WhiteLogo from '../assets/white-logo.png';
import BlackLogo from '../assets/black-logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Solutions', hasDropdown: true, href: '#' },
    { label: 'Products', hasDropdown: true, href: '#' },
    { label: 'Case Studies', hasDropdown: false, href: 'https://www.tolero.com/case-studies' },
    { label: 'About', hasDropdown: false, href: 'https://www.tolero.com/about' },
    { label: 'Careers', hasDropdown: false, href: 'https://www.tolero.com/careers' },
    { label: 'Resources', hasDropdown: false, href: 'https://www.tolero.com/resources' },
  ];

  const languages = [
    { code: 'EN', label: 'EN' },
    { code: 'DE', label: 'DE' },
  ];

  const getHeaderClass = () => {
    if (isMenuOpen) return 'tolero-header__wrapper tolero-header--menu-open';
    if (scrolled) return 'tolero-header__wrapper tolero-header--scrolled';
    return 'tolero-header__wrapper tolero-header--top';
  };

  const getLogo = () => {
    if (isMenuOpen || scrolled) return BlackLogo;
    return WhiteLogo;
  };

  const handleLangSelect = (langCode) => {
    setSelectedLang(langCode);
    setIsLangOpen(false);
  };

  return (
    <>
      <div className="tolero-header">
        <header className={getHeaderClass()}>
          <div className="tolero-header__bar" role="menubar" aria-label="Primary">
            <div className="tolero-header__inner">
              {/* Logo */}
              <a className="tolero-header__brand" href="https://www.tolero.com/" aria-label="Home">
                <img 
                  src={getLogo()} 
                  alt="Tolero AI Automation" 
                  className="tolero-header__logo"
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="tolero-header__nav" role="navigation" aria-label="Primary">
                <ul className="tolero-header__nav-list">
                  {navLinks.map((link, index) => (
                    <li 
                      key={index} 
                      className={`tolero-header__nav-item ${!link.hasDropdown ? 'tolero-header__nav-item--standalone' : ''}`}
                    >
                      <a 
                        className="tolero-header__nav-button" 
                        href={link.href}
                        role="button"
                        aria-haspopup={link.hasDropdown}
                        aria-expanded="false"
                      >
                        {link.label}
                        {link.hasDropdown && (
                          <span className="tolero-header__nav-arrow"></span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side - Language & CTA */}
              <div className="tolero-header__right-group">
                <div className={`tolero-header__lang-switcher ${isLangOpen ? 'tolero-header__lang-switcher--active' : ''}`}>
                  <button 
                    className="tolero-header__lang-button" 
                    aria-haspopup="true" 
                    aria-expanded={isLangOpen}
                    aria-label="Select language"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    {selectedLang}
                    <span className="tolero-header__lang-arrow"></span>
                  </button>
                  
                  {isLangOpen && (
                    <div className="tolero-header__lang-dropdown">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className={`tolero-header__lang-option ${selectedLang === lang.code ? 'tolero-header__lang-option--active' : ''}`}
                          onClick={() => handleLangSelect(lang.code)}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                
                <a 
                  className="tolero-button tolero-button--primary tolero-header__cta" 
                  href="https://www.tolero.com/demo" 
                  tabIndex="0" 
                >
                  Request Demo
                </a>
              </div>

              {/* Mobile Menu Button - ALWAYS visible on mobile/tablet */}
              <button 
                className="tolero-header__burger" 
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="tolero-header__burger-line"></span>
                <span className="tolero-header__burger-line"></span>
                <span className="tolero-header__burger-line"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Mobile Menu - This should hide the language selector when open */}
        {isMenuOpen && (
          <div className="tolero-header__mobile">
            <div className="tolero-header__mobile-header">
              <a className="tolero-header__brand" href="https://www.tolero.com/" aria-label="Home">
                <img src={BlackLogo} alt="Tolero AI Automation" className="tolero-header__logo" />
              </a>
              <button 
                className="tolero-header__mobile-close" 
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="tolero-header__mobile-close-icon"></span>
              </button>
            </div>
            
            <div className="tolero-header__mobile-body">
              <ul className="tolero-header__mobile-list">
                {navLinks.map((link, index) => (
                  <li key={index} className="tolero-header__mobile-item">
                    <a 
                      className="tolero-header__mobile-link" 
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              {/* Language selector inside mobile menu */}
              <div className="tolero-header__mobile-lang-switcher">
                <button 
                  className="tolero-header__mobile-lang-button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  {selectedLang}
                  <span className="tolero-header__mobile-lang-arrow"></span>
                </button>
                
                {isLangOpen && (
                  <div className="tolero-header__mobile-lang-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`tolero-header__mobile-lang-option ${selectedLang === lang.code ? 'tolero-header__mobile-lang-option--active' : ''}`}
                        onClick={() => {
                          handleLangSelect(lang.code);
                          setIsMenuOpen(false);
                        }}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="tolero-header__mobile-cta">
              <a 
                className="tolero-button tolero-button--primary" 
                href="https://www.tolero.com/demo"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Demo
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx="true">{`
        /* Base Styles */
        .tolero-header {
          display: block;
          width: 100%;
        }

        /* Header Wrapper */
        .tolero-header__wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Top State - Transparent with White Text */
        .tolero-header__wrapper.tolero-header--top {
          background-color: transparent;
        }

        .tolero-header__wrapper.tolero-header--top .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--top .tolero-header__lang-button {
          color: #FFFFFF;
        }

        .tolero-header__wrapper.tolero-header--top .tolero-header__burger-line {
          background-color: #FFFFFF;
        }

        /* Scrolled State - White Background with BLACK Text */
        .tolero-header__wrapper.tolero-header--scrolled {
          background-color: #FFFFFF;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #E5E5E7;
        }

        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__lang-button {
          color: #000000;
        }

        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__burger-line {
          background-color: #000000;
        }

        /* Menu Open State - White Background with BLACK Text */
        .tolero-header__wrapper.tolero-header--menu-open {
          background-color: #FFFFFF;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
        }

        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__lang-button {
          color: #000000;
        }

        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__burger-line {
          background-color: #000000;
        }

        /* Header Bar Layout */
        .tolero-header__bar {
          padding: 12px 120px;
        }

        @media only screen and (max-width: 1200px) {
          .tolero-header__bar {
            padding: 12px 60px;
          }
        }

        @media only screen and (max-width: 1024px) {
          .tolero-header__bar {
            padding: 12px 40px;
          }
        }

        @media only screen and (max-width: 768px) {
          .tolero-header__bar {
            padding: 12px 24px;
          }
        }

        .tolero-header__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        /* Brand/Logo */
        .tolero-header__brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }

        .tolero-header__logo {
          display: block;
          height: 2rem;
          width: auto;
          transition: transform 0.3s ease;
        }

        .tolero-header__brand:hover .tolero-header__logo {
          transform: scale(1.05);
        }

        @media only screen and (min-width: 768px) {
          .tolero-header__logo {
            height: 2.25rem;
          }
        }

        /* Desktop Navigation - HIDE on tablet sizes when language selector appears */
        .tolero-header__nav {
          display: none;
        }

        @media only screen and (min-width: 1200px) {
          .tolero-header__nav {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        /* FIX: Hide desktop navigation when screen is between 1024px and 1200px */
        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .tolero-header__nav {
            display: none !important;
          }
        }

        .tolero-header__nav-list {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .tolero-header__nav-item {
          position: relative;
        }

        .tolero-header__nav-button {
          text-decoration: none;
          background: transparent;
          border: 0;
          padding: 0.5rem 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
          gap: 0.25rem;
        }

        .tolero-header__nav-arrow {
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .tolero-header__nav-button:hover .tolero-header__nav-arrow {
          transform: rotate(180deg);
        }

        .tolero-header__nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: currentColor;
          transition: width 0.3s ease;
        }

        .tolero-header__nav-button:hover::after {
          width: 100%;
        }

        .tolero-header__nav-item--standalone .tolero-header__nav-arrow {
          display: none;
        }

        /* Hover colors */
        .tolero-header--top .tolero-header__nav-button:hover {
          color: #22D3EE;
        }

        .tolero-header--scrolled .tolero-header__nav-button:hover,
        .tolero-header--menu-open .tolero-header__nav-button:hover {
          color: #2563EB;
        }

        /* Right Group - IMPORTANT FIX: Hide on tablet sizes when burger menu should show */
        .tolero-header__right-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Language Switcher - Show only on desktop, hide on tablet/mobile */
        .tolero-header__lang-switcher {
          display: none;
          position: relative;
        }

        @media only screen and (min-width: 1200px) {
          .tolero-header__lang-switcher {
            display: inline-flex;
            align-items: center;
          }
        }

        /* FIX: Hide language selector on tablet sizes */
        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .tolero-header__lang-switcher {
            display: none !important;
          }
        }

        .tolero-header__lang-button {
          background: transparent;
          border: none;
          padding: 0.375rem 0.75rem;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          outline: none;
        }

        .tolero-header__lang-arrow {
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .tolero-header__lang-switcher--active .tolero-header__lang-arrow {
          transform: rotate(180deg);
        }

        /* Language button colors */
        .tolero-header--top .tolero-header__lang-button {
          color: #FFFFFF;
        }

        .tolero-header--top .tolero-header__lang-button:hover {
          color: #22D3EE;
        }

        .tolero-header--scrolled .tolero-header__lang-button,
        .tolero-header--menu-open .tolero-header__lang-button {
          color: #000000;
        }

        .tolero-header--scrolled .tolero-header__lang-button:hover,
        .tolero-header--menu-open .tolero-header__lang-button:hover {
          color: #2563EB;
        }

        .tolero-header__lang-dropdown {
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

        .tolero-header__lang-option {
          padding: 0.5rem 0.75rem;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          font-weight: 400;
          color: #000000;
          transition: all 0.2s ease;
          text-align: left;
          border-radius: 4px;
        }

        .tolero-header__lang-option:hover {
          background: rgba(37, 99, 235, 0.1);
          color: #2563EB;
        }

        .tolero-header__lang-option--active {
          font-weight: 500;
          color: #2563EB;
          background: rgba(37, 99, 235, 0.1);
        }

        /* Contact Button - Show only on desktop, hide on tablet/mobile */
        .tolero-header__cta {
          display: none;
        }

        @media only screen and (min-width: 1200px) {
          .tolero-header__cta {
            display: inline-flex;
          }
        }

        /* FIX: Hide CTA button on tablet sizes */
        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .tolero-header__cta {
            display: none !important;
          }
        }

        /* Button Component */
        .tolero-button {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
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
          background-color: #2563EB;
          color: #FFFFFF;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
        }

        .tolero-button--primary:hover {
          background-color: #1D4ED8;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.4);
        }

        .tolero-button--primary:active {
          transform: translateY(0);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.4);
        }

        /* Mobile CTA button */
        .tolero-header__mobile-cta .tolero-button {
          width: 100%;
          height: 44px;
          font-size: 1rem;
          padding: 12px 24px;
        }

        /* Burger Button - ALWAYS visible on tablet and mobile */
        .tolero-header__burger {
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

        /* FIX: Show burger button on tablet sizes (1024px and below) */
        @media only screen and (max-width: 1200px) {
          .tolero-header__burger {
            display: inline-flex;
          }
        }

        /* Hide burger button only on large desktop */
        @media only screen and (min-width: 1200px) {
          .tolero-header__burger {
            display: none;
          }
        }

        .tolero-header__burger-line {
          width: 20px;
          height: 2px;
          transition: all 0.3s ease;
          transform-origin: center;
        }

        .tolero-header--menu-open .tolero-header__burger-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .tolero-header--menu-open .tolero-header__burger-line:nth-child(2) {
          opacity: 0;
        }

        .tolero-header--menu-open .tolero-header__burger-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        /* Mobile Menu */
        .tolero-header__mobile {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #FFFFFF;
          color: #000000;
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

        @media only screen and (min-width: 1200px) {
          .tolero-header__mobile {
            display: none;
          }
        }

        .tolero-header__mobile-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #E5E5E7;
        }

        @media only screen and (min-width: 768px) {
          .tolero-header__mobile-header {
            padding: 1.5rem 2rem;
          }
        }

        .tolero-header__mobile-close {
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

        .tolero-header__mobile-close-icon {
          position: relative;
          width: 20px;
          height: 20px;
        }

        .tolero-header__mobile-close-icon::before,
        .tolero-header__mobile-close-icon::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #000000;
        }

        .tolero-header__mobile-close-icon::before {
          transform: rotate(45deg);
        }

        .tolero-header__mobile-close-icon::after {
          transform: rotate(-45deg);
        }

        .tolero-header__mobile-body {
          flex: 1 1 auto;
          overflow: auto;
          padding: 2rem 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          .tolero-header__mobile-body {
            padding: 3rem 2rem;
          }
        }

        .tolero-header__mobile-list {
          display: flex;
          flex-direction: column;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .tolero-header__mobile-item {
          border-bottom: 1px solid #E5E5E7;
        }

        .tolero-header__mobile-item:last-child {
          border-bottom: none;
        }

        .tolero-header__mobile-link {
          display: block;
          padding: 1rem 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 500;
          color: #000000;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .tolero-header__mobile-link:hover {
          color: #2563EB;
        }

        /* Mobile Language Switcher */
        .tolero-header__mobile-lang-switcher {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #E5E5E7;
        }

        .tolero-header__mobile-lang-button {
          width: 100%;
          padding: 1rem 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 500;
          color: #000000;
          text-align: left;
          display: flex;
          align-items: center;
          justify-content: space-between;
          outline: none;
        }

        .tolero-header__mobile-lang-arrow {
          display: inline-flex;
          width: 0.75rem;
          height: 0.75rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .tolero-header__mobile-lang-dropdown {
          margin-top: 0.5rem;
          background: #FFFFFF;
          border-radius: 8px;
          border: 1px solid #E5E5E7;
          overflow: hidden;
        }

        .tolero-header__mobile-lang-option {
          padding: 0.75rem 1rem;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 400;
          color: #000000;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
        }

        .tolero-header__mobile-lang-option:hover {
          background: rgba(37, 99, 235, 0.1);
          color: #2563EB;
        }

        .tolero-header__mobile-lang-option--active {
          font-weight: 500;
          color: #2563EB;
          background: rgba(37, 99, 235, 0.1);
        }

        /* Mobile CTA */
        .tolero-header__mobile-cta {
          padding: 1.5rem;
          background: #FFFFFF;
          border-top: 1px solid #E5E5E7;
        }

        @media only screen and (min-width: 768px) {
          .tolero-header__mobile-cta {
            padding: 2rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;