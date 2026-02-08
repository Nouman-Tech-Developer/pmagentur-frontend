import React, { useState, useEffect } from 'react';
import WhiteLogo from '../assets/PM-logo-white.svg';
import BlackLogo from '../assets/PM-logo-black.svg';

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
    { label: 'Services', hasDropdown: true, href: '#' },
    { label: 'Products', hasDropdown: true, href: '#' },
    { label: 'References', hasDropdown: false, href: 'https://www.pmagentur.com/de/cases/' },
    { label: 'About Us', hasDropdown: false, href: 'https://www.pmagentur.com/de/ueber-uns/' },
    { label: 'Jobs', hasDropdown: false, href: 'https://www.pmagentur.com/en/karriere' },
    { label: 'Blog', hasDropdown: false, href: 'https://www.pmagentur.com/de/blog' },
  ];

  const languages = [
    { code: 'EN', label: 'EN' },
    { code: 'DE', label: 'DE' },
  ];

  const getHeaderClass = () => {
    if (isMenuOpen) return '_header_1xtpd_49 _isMenuOpen_1xtpd_266';
    if (scrolled) return '_header_1xtpd_49 _isScrolled_1xtpd_201';
    return '_header_1xtpd_49 _isTop_1xtpd_61';
  };

  const getLogo = () => {
    if (isMenuOpen || scrolled) return BlackLogo;
    return WhiteLogo;
  };

  const handleLangSelect = (langCode) => {
    setSelectedLang(langCode);
    setIsLangOpen(false);
    // You can add language change logic here
  };

  return (
    <>
      <div className="_module-header_1xtpd_44">
        <header className={getHeaderClass()}>
          {/* Top Navigation Bar */}
          <div className="_bar_1xtpd_191" role="menubar" aria-label="Primary">
            <div className="_inner_1xtpd_326">
              {/* Logo */}
              <a className="_brand_1xtpd_334" href="https://www.pmagentur.com/en/" aria-label="Home">
                <img 
                  src={getLogo()} 
                  alt="PM-logo-black" 
                  style={{ opacity: 1, transition: 'opacity 0.2s ease-in-out' }}
                />
              </a>

              {/* Desktop Navigation */}
              <nav className="_nav_1xtpd_66" role="navigation" aria-label="Primary">
                <ul className="_navList_1xtpd_353">
                  {navLinks.map((link, index) => (
                    <li 
                      key={index} 
                      className={`_navItem_1xtpd_359 ${!link.hasDropdown ? '_standalone_1xtpd_393' : ''}`}
                    >
                      <a 
                        data-top-menu-item="true" 
                        className="_navButton_1xtpd_66" 
                        href={link.href}
                        role="button"
                        aria-haspopup={link.hasDropdown}
                        aria-expanded="false"
                        aria-controls={link.hasDropdown ? `mega-${index}` : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right Side - Language & Contact */}
              <div className="_rightGroup_1xtpd_442">
                <div className={`_langSwitcher_1xtpd_447 ${isLangOpen ? '_active_1xtpd_301' : ''}`}>
                  <button 
                    className="_langButton_1xtpd_96" 
                    aria-haspopup="true" 
                    aria-expanded={isLangOpen}
                    aria-label="Select language"
                    onClick={() => setIsLangOpen(!isLangOpen)}
                  >
                    {selectedLang}
                  </button>
                  
                  {/* Language Dropdown */}
                  {isLangOpen && (
                    <div className="_langDropdown_1xtpd_542">
                      {languages.map((lang) => (
                        <a
                          key={lang.code}
                          className={`_langOption_1xtpd_556 ${selectedLang === lang.code ? '_active_1xtpd_301' : ''}`}
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleLangSelect(lang.code);
                          }}
                        >
                          {lang.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                
                <a 
                  className="atom-button _atom-button_ilbwb_76 _primary_ilbwb_112 _cta_1xtpd_624" 
                  href="https://www.pmagentur.com/en/kontakt" 
                  tabIndex="0" 
                  aria-disabled="false"
                  style={{ backgroundColor: '#fe5631' }}
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="_burger_1xtpd_191" 
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              ></button>
            </div>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="_mobile_1xtpd_941">
            <div className="_mobileHeader_1xtpd_955">
              <a className="_brand_1xtpd_334" href="https://www.pmagentur.com/en/" aria-label="Home">
                <img src={BlackLogo} alt="PM-logo-black" />
              </a>
              <button 
                className="_close_1xtpd_979" 
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
              ></button>
            </div>
            
            <div className="_mobileBody_1xtpd_1074">
              <ul className="_mobileList_1xtpd_1144">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      className="_mobileRow_1xtpd_1151" 
                      href={link.href}
                      onClick={(e) => {
                        if (link.hasDropdown) {
                          e.preventDefault();
                          // Handle dropdown click for mobile
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="_mobileLangSwitcher_1xtpd_1221">
                <button 
                  className="_mobileLangButton_1xtpd_1227"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                >
                  {selectedLang}
                </button>
                
                {/* Mobile Language Dropdown */}
                {isLangOpen && (
                  <div className="_mobileLangDropdown_1xtpd_1307">
                    {languages.map((lang) => (
                      <a
                        key={lang.code}
                        className={`_mobileLangOption_1xtpd_1317 ${selectedLang === lang.code ? '_active_1xtpd_301' : ''}`}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handleLangSelect(lang.code);
                        }}
                      >
                        {lang.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="_mobileCTA_1xtpd_1385">
              <a 
                className="atom-button _atom-button_ilbwb_76 _primary_ilbwb_112" 
                href="https://www.pmagentur.com/en/kontakt"
                onClick={() => setIsMenuOpen(false)}
                style={{ backgroundColor: '#fe5631' }}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Add the CSS directly */}
      <style jsx="true">{`
        @font-face {
          font-family: Okima;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Okima-Ink-130-C6F5kR7g.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: Satoshi Bold;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Bold-Bd5kKQ_U.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: Satoshi Medium;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Medium-ByP-Zb-9.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: Satoshi Regular;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Regular-CPM9dct4.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: Satoshi Light;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Light-IqwJ_ZjS.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        html.no-scroll, body.no-scroll {
          overflow: hidden;
          overscroll-behavior: contain;
        }

        @media only screen and (min-width: 1024px) {
          html.no-scroll, body.no-scroll {
            overflow: auto;
            overscroll-behavior: auto;
          }
        }

        ._module-header_1xtpd_44 {
          display: block;
          width: 100%;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100%;
          z-index: 1000;
          overflow: visible;
          background-color: transparent;
          color: #fff;
          box-shadow: none;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 {
          background-color: #fff;
          color: #000;
          box-shadow: 0 .125rem .625rem #0000000f;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._navButton_1xtpd_66 {
          font-family: var(--font-text-header-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-header-primary-font-size-mobile, 16px);
          line-height: var(--font-text-header-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-primary-font-weight, 400);
          letter-spacing: var(--font-text-header-primary-letter-spacing, normal);
          text-transform: var(--font-text-header-primary-text-transform, none);
          color: var(--font-text-header-primary-color, #000);
          background: var(--font-text-header-primary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._navButton_1xtpd_66:hover {
          color: var(--font-text-header-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._navButton_1xtpd_66 {
            font-size: var(--font-text-header-primary-font-size-desktop, 16px);
            line-height: var(--font-text-header-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._navButton_1xtpd_66:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #444;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._langButton_1xtpd_96 {
          font-family: var(--font-text-header-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-header-primary-font-size-mobile, 16px);
          line-height: var(--font-text-header-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-primary-font-weight, 400);
          letter-spacing: var(--font-text-header-primary-letter-spacing, normal);
          text-transform: var(--font-text-header-primary-text-transform, none);
          color: var(--font-text-header-primary-color, #000);
          background: var(--font-text-header-primary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._langButton_1xtpd_96:hover {
          color: var(--font-text-header-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._langButton_1xtpd_96 {
            font-size: var(--font-text-header-primary-font-size-desktop, 16px);
            line-height: var(--font-text-header-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61._isFirstModuleWhite_1xtpd_61 ._langButton_1xtpd_96:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #444;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 {
          background-color: transparent;
          color: #fff;
          box-shadow: none;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._navButton_1xtpd_66 {
          font-family: var(--font-h6-secondary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-h6-secondary-font-size-mobile, 16px);
          line-height: var(--font-h6-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-h6-secondary-font-weight, 400);
          letter-spacing: var(--font-h6-secondary-letter-spacing, normal);
          text-transform: var(--font-h6-secondary-text-transform, none);
          color: var(--font-h6-secondary-color, #fff);
          background: var(--font-h6-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._navButton_1xtpd_66:hover {
          color: var(--font-h6-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._navButton_1xtpd_66 {
            font-size: var(--font-h6-secondary-font-size-desktop, 16px);
            line-height: var(--font-h6-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-h6-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._navButton_1xtpd_66:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fff;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._langButton_1xtpd_96 {
          font-family: var(--font-h6-secondary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-h6-secondary-font-size-mobile, 16px);
          line-height: var(--font-h6-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-h6-secondary-font-weight, 400);
          letter-spacing: var(--font-h6-secondary-letter-spacing, normal);
          text-transform: var(--font-h6-secondary-text-transform, none);
          color: var(--font-h6-secondary-color, #fff);
          background: var(--font-h6-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._langButton_1xtpd_96:hover {
          color: var(--font-h6-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._langButton_1xtpd_96 {
            font-size: var(--font-h6-secondary-font-size-desktop, 16px);
            line-height: var(--font-h6-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-h6-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._langButton_1xtpd_96:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fff;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isTop_1xtpd_61 ._bar_1xtpd_191 ._burger_1xtpd_191:before {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38%2015L6%2015'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3cpath%20d='M38%2029L6%2029'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38%2015L6%2015'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3cpath%20d='M38%2029L6%2029'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: 2.75rem;
          height: 2.75rem;
          background-color: #fff;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 {
          background-color: #fff;
          color: #000;
          box-shadow: 0 .125rem .625rem #0000000f;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._navButton_1xtpd_66 {
          font-family: var(--font-text-header-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-header-primary-font-size-mobile, 16px);
          line-height: var(--font-text-header-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-primary-font-weight, 400);
          letter-spacing: var(--font-text-header-primary-letter-spacing, normal);
          text-transform: var(--font-text-header-primary-text-transform, none);
          color: var(--font-text-header-primary-color, #000);
          background: var(--font-text-header-primary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._navButton_1xtpd_66:hover {
          color: var(--font-text-header-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._navButton_1xtpd_66 {
            font-size: var(--font-text-header-primary-font-size-desktop, 16px);
            line-height: var(--font-text-header-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._navButton_1xtpd_66:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #444;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._langButton_1xtpd_96 {
          font-family: var(--font-text-header-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-header-primary-font-size-mobile, 16px);
          line-height: var(--font-text-header-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-primary-font-weight, 400);
          letter-spacing: var(--font-text-header-primary-letter-spacing, normal);
          text-transform: var(--font-text-header-primary-text-transform, none);
          color: var(--font-text-header-primary-color, #000);
          background: var(--font-text-header-primary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._langButton_1xtpd_96:hover {
          color: var(--font-text-header-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._langButton_1xtpd_96 {
            font-size: var(--font-text-header-primary-font-size-desktop, 16px);
            line-height: var(--font-text-header-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isScrolled_1xtpd_201 ._langButton_1xtpd_96:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #444;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isMenuOpen_1xtpd_266 {
          background-color: #fff;
          color: #000;
          box-shadow: 0 .125rem .625rem #0000000f;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isMenuOpen_1xtpd_266 ._langButton_1xtpd_96 {
          font-family: var(--font-text-header-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-header-primary-font-size-mobile, 16px);
          line-height: var(--font-text-header-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-primary-font-weight, 400);
          letter-spacing: var(--font-text-header-primary-letter-spacing, normal);
          text-transform: var(--font-text-header-primary-text-transform, none);
          color: var(--font-text-header-primary-color, #000);
          background: var(--font-text-header-primary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isMenuOpen_1xtpd_266 ._langButton_1xtpd_96:hover {
          color: var(--font-text-header-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49._isMenuOpen_1xtpd_266 ._langButton_1xtpd_96 {
            font-size: var(--font-text-header-primary-font-size-desktop, 16px);
            line-height: var(--font-text-header-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49._isMenuOpen_1xtpd_266 ._langButton_1xtpd_96:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #444;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._active_1xtpd_301 {
          --_placeholder: 0;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ul, ._module-header_1xtpd_44 ._header_1xtpd_49 ol {
          list-style: none;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 {
          padding: 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 {
            padding: 1.5rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 {
            padding: .75rem 3.75rem;
          }
        }

        @media only screen and (min-width: 1440px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 {
            padding: .75rem 0rem;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._inner_1xtpd_326 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 75rem;
          margin: 0 auto;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._brand_1xtpd_334 {
          display: inline-flex;
          align-items: center;
          gap: .5rem;
          min-width: 7.5rem;
          min-height: 1.5rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._brand_1xtpd_334 img {
          display: block;
          height: 1.5rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._nav_1xtpd_66 {
          display: none;
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._nav_1xtpd_66 {
            display: block;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navList_1xtpd_353 {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359 {
          position: relative;
          list-style: none;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359._active_1xtpd_301 ._navButton_1xtpd_66 {
          font-family: var(--font-text-header-secondary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-header-secondary-font-size-mobile, 16px);
          line-height: var(--font-text-header-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-secondary-font-weight, 500);
          letter-spacing: var(--font-text-header-secondary-letter-spacing, normal);
          text-transform: var(--font-text-header-secondary-text-transform, none);
          color: var(--font-text-header-secondary-color, #fe5631);
          background: var(--font-text-header-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359._active_1xtpd_301 ._navButton_1xtpd_66:hover {
          color: var(--font-text-header-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359._active_1xtpd_301 ._navButton_1xtpd_66 {
            font-size: var(--font-text-header-secondary-font-size-desktop, 16px);
            line-height: var(--font-text-header-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359._active_1xtpd_301 ._navButton_1xtpd_66:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fe5631;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navItem_1xtpd_359._standalone_1xtpd_393 ._navButton_1xtpd_66:after {
          display: none;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66 {
          -webkit-text-decoration: none;
          text-decoration: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: transparent;
          border: 0;
          padding: .5rem .25rem;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:after {
          margin-left: .25rem;
          vertical-align: middle;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:hover {
          font-family: var(--font-text-header-secondary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-header-secondary-font-size-mobile, 16px);
          line-height: var(--font-text-header-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-secondary-font-weight, 500);
          letter-spacing: var(--font-text-header-secondary-letter-spacing, normal);
          text-transform: var(--font-text-header-secondary-text-transform, none);
          color: var(--font-text-header-secondary-color, #fe5631);
          background: var(--font-text-header-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:hover:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fe5631;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:hover:hover {
          color: var(--font-text-header-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:hover {
            font-size: var(--font-text-header-secondary-font-size-desktop, 16px);
            line-height: var(--font-text-header-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:focus {
          outline: .125rem solid #FE5631;
          outline-offset: .125rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._rightGroup_1xtpd_442 {
          display: flex;
          align-items: center;
          gap: .625rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447 {
          display: none;
          position: relative;
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447 {
            display: inline-flex;
            align-items: center;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447._active_1xtpd_301 ._langButton_1xtpd_96 {
          font-family: var(--font-text-header-secondary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-header-secondary-font-size-mobile, 16px);
          line-height: var(--font-text-header-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-secondary-font-weight, 500);
          letter-spacing: var(--font-text-header-secondary-letter-spacing, normal);
          text-transform: var(--font-text-header-secondary-text-transform, none);
          color: var(--font-text-header-secondary-color, #fe5631);
          background: var(--font-text-header-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447._active_1xtpd_301 ._langButton_1xtpd_96:hover {
          color: var(--font-text-header-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447._active_1xtpd_301 ._langButton_1xtpd_96 {
            font-size: var(--font-text-header-secondary-font-size-desktop, 16px);
            line-height: var(--font-text-header-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447._active_1xtpd_301 ._langButton_1xtpd_96:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fe5631;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langSwitcher_1xtpd_447:after {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          height: .5rem;
          z-index: 999;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96 {
          -webkit-text-decoration: none;
          text-decoration: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: transparent;
          border: 0;
          padding: .5rem .25rem;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:after {
          margin-left: 0.25rem;
          vertical-align: middle;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:hover {
          font-family: var(--font-text-header-secondary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-header-secondary-font-size-mobile, 16px);
          line-height: var(--font-text-header-secondary-line-height-mobile, 1.5);
          font-weight: var(--font-text-header-secondary-font-weight, 500);
          letter-spacing: var(--font-text-header-secondary-letter-spacing, normal);
          text-transform: var(--font-text-header-secondary-text-transform, none);
          color: var(--font-text-header-secondary-color, #fe5631);
          background: var(--font-text-header-secondary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:hover:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M15%2012.5L10%207.5L5%2012.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #fe5631;
          vertical-align: middle;
          margin-left: 0.25rem;
          position: relative;
          top: -1px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:hover:hover {
          color: var(--font-text-header-secondary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:hover {
            font-size: var(--font-text-header-secondary-font-size-desktop, 16px);
            line-height: var(--font-text-header-secondary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-header-secondary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:focus {
          outline: .125rem solid #FE5631;
          outline-offset: .125rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langDropdown_1xtpd_542 {
          position: absolute;
          top: calc(100% + .5rem);
          right: 0;
          background: #fff;
          border-radius: .5rem;
          box-shadow: 0 .25rem .75rem #0000001a;
          min-width: 5rem;
          z-index: 1000;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556 {
          padding: .75rem .375rem;
          -webkit-text-decoration: none;
          text-decoration: none;
          color: #000;
          font-family: var(--font-copy-s-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-copy-s-primary-font-size-mobile, 14px);
          line-height: var(--font-copy-s-primary-line-height-mobile, 1.5);
          font-weight: var(--font-copy-s-primary-font-weight, 400);
          letter-spacing: var(--font-copy-s-primary-letter-spacing, normal);
          text-transform: var(--font-copy-s-primary-text-transform, none);
          color: var(--font-copy-s-primary-color, #000);
          background: var(--font-copy-s-primary-background, transparent);
          transition: color .2s ease;
          white-space: nowrap;
          display: block;
          width: fit-content;
          width: 100%;
          text-align: center;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556:hover {
          color: var(--font-copy-s-primary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556 {
            font-size: var(--font-copy-s-primary-font-size-desktop, 14px);
            line-height: var(--font-copy-s-primary-line-height-desktop, 1.5);
            letter-spacing: var(--font-copy-s-primary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556:hover:not(._active_1xtpd_301) {
          font-family: var(--font-text-mega-menu-tertiary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-mega-menu-tertiary-font-size-mobile, 14px);
          line-height: var(--font-text-mega-menu-tertiary-line-height-mobile, 1.5);
          font-weight: var(--font-text-mega-menu-tertiary-font-weight, 500);
          letter-spacing: var(--font-text-mega-menu-tertiary-letter-spacing, normal);
          text-transform: var(--font-text-mega-menu-tertiary-text-transform, none);
          color: var(--font-text-mega-menu-tertiary-color, #000);
          background: var(--font-text-mega-menu-tertiary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556:hover:not(._active_1xtpd_301):hover {
          color: var(--font-text-mega-menu-tertiary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556:hover:not(._active_1xtpd_301) {
            font-size: var(--font-text-mega-menu-tertiary-font-size-desktop, 14px);
            line-height: var(--font-text-mega-menu-tertiary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-mega-menu-tertiary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556._active_1xtpd_301 {
          background-color: #fff;
          font-family: var(--font-text-mega-menu-tertiary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-mega-menu-tertiary-font-size-mobile, 14px);
          line-height: var(--font-text-mega-menu-tertiary-line-height-mobile, 1.5);
          font-weight: var(--font-text-mega-menu-tertiary-font-weight, 500);
          letter-spacing: var(--font-text-mega-menu-tertiary-letter-spacing, normal);
          text-transform: var(--font-text-mega-menu-tertiary-text-transform, none);
          color: var(--font-text-mega-menu-tertiary-color, #fe5631);
          background: var(--font-text-mega-menu-tertiary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556._active_1xtpd_301:hover {
          color: var(--font-text-mega-menu-tertiary-color-hover, #fe5631);
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556._active_1xtpd_301 {
            font-size: var(--font-text-mega-menu-tertiary-font-size-desktop, 14px);
            line-height: var(--font-text-mega-menu-tertiary-line-height-desktop, 1.5);
            letter-spacing: var(--font-text-mega-menu-tertiary-letter-spacing-desktop, normal);
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._cta_1xtpd_624 {
          display: none;
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._cta_1xtpd_624 {
            display: inline-flex;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._burger_1xtpd_191 {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          cursor: pointer;
          line-height: 1;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._burger_1xtpd_191:before {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38%2015L6%2015'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3cpath%20d='M38%2029L6%2029'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M38%2015L6%2015'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3cpath%20d='M38%2029L6%2029'%20stroke='%23444444'%20stroke-linecap='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: 2.75rem;
          height: 2.75rem;
          background-color: #000;
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._burger_1xtpd_191 {
            display: none;
          }
        }

        /* Mobile Menu Styles */
        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: #fff;
          color: #000;
          display: flex;
          flex-direction: column;
          padding-bottom: 5rem;
        }

        @media only screen and (min-width: 1024px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 {
            display: none;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileHeader_1xtpd_955 {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.5rem;
        }

        @media only screen and (min-width: 768px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileHeader_1xtpd_955 {
            padding: 1.5rem 3.75rem;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileHeader_1xtpd_955 ._brand_1xtpd_334 img {
          height: 1.5rem;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileHeader_1xtpd_955 ._close_1xtpd_979 {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 0;
          line-height: 1;
          cursor: pointer;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileHeader_1xtpd_955 ._close_1xtpd_979:before {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.4941%2014.5817L14.507%2029.5688'%20stroke='%23666666'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M29.4941%2029.4182L14.507%2014.4311'%20stroke='%23666666'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='44'%20height='44'%20viewBox='0%200%2044%2044'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M29.4941%2014.5817L14.507%2029.5688'%20stroke='%23666666'%20stroke-width='2'%20stroke-linecap='round'/%3e%3cpath%20d='M29.4941%2029.4182L14.507%2014.4311'%20stroke='%23666666'%20stroke-width='2'%20stroke-linecap='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: 2.75rem;
          height: 2.75rem;
          background-color: #000;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileBody_1xtpd_1074 {
          flex: 1 1 auto;
          overflow: auto;
          padding: 1.5rem 1.5rem 0rem;
        }

        @media only screen and (min-width: 768px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileBody_1xtpd_1074 {
            padding: 1.5rem 3.75rem 0rem;
          }
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileList_1xtpd_1144 {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin: 0;
          padding: 0;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileRow_1xtpd_1151 {
          font-family: var(--font-text-nav-menu-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-nav-menu-primary-font-size-mobile, 16px);
          line-height: var(--font-text-nav-menu-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-nav-menu-primary-font-weight, 400);
          letter-spacing: var(--font-text-nav-menu-primary-letter-spacing, normal);
          text-transform: var(--font-text-nav-menu-primary-text-transform, none);
          color: var(--font-text-nav-menu-primary-color, #000);
          background: var(--font-text-nav-menu-primary-background, transparent);
          width: 100%;
          text-align: left;
          background: none;
          border: 0;
          padding: 0rem 0;
          cursor: pointer;
          -webkit-text-decoration: none;
          text-decoration: none;
          display: block;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileRow_1xtpd_1151:hover {
          color: var(--font-text-nav-menu-primary-color-hover, #fe5631);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangSwitcher_1xtpd_1221 {
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: .0625rem solid #666666;
          position: relative;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangButton_1xtpd_1227 {
          width: 100%;
          text-align: left;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background: transparent;
          border: 0;
          padding: .5rem 0;
          cursor: pointer;
          font-family: var(--font-text-nav-menu-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-text-nav-menu-primary-font-size-mobile, 16px);
          line-height: var(--font-text-nav-menu-primary-line-height-mobile, 1.5);
          font-weight: var(--font-text-nav-menu-primary-font-weight, 400);
          letter-spacing: var(--font-text-nav-menu-primary-letter-spacing, normal);
          text-transform: var(--font-text-nav-menu-primary-text-transform, none);
          color: var(--font-text-nav-menu-primary-color, #000);
          background: var(--font-text-nav-menu-primary-background, transparent);
          color: #000;
          position: relative;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangButton_1xtpd_1227:after {
          content: "";
          display: inline-block;
          -webkit-mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          mask-image: url("data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5%207.5L10%2012.5L15%207.5'%20stroke='%231F2937'%20stroke-width='1.25'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: contain;
          mask-size: contain;
          width: .75rem;
          height: .75rem;
          background-color: #000;
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 0;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangDropdown_1xtpd_1307 {
          margin-top: 1rem;
          background: #fff;
          border-radius: .5rem;
          box-shadow: 0 .25rem .75rem #0000001a;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangOption_1xtpd_1317 {
          padding: .75rem .375rem;
          -webkit-text-decoration: none;
          text-decoration: none;
          color: #000;
          font-family: var(--font-copy-s-primary-font-family, 'Satoshi Regular', sans-serif);
          font-size: var(--font-copy-s-primary-font-size-mobile, 14px);
          line-height: var(--font-copy-s-primary-line-height-mobile, 1.5);
          font-weight: var(--font-copy-s-primary-font-weight, 400);
          letter-spacing: var(--font-copy-s-primary-letter-spacing, normal);
          text-transform: var(--font-copy-s-primary-text-transform, none);
          color: var(--font-copy-s-primary-color, #000);
          background: var(--font-copy-s-primary-background, transparent);
          transition: color .2s ease;
          white-space: nowrap;
          display: block;
          width: fit-content;
          width: 100%;
          text-align: center;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangOption_1xtpd_1317:hover {
          color: var(--font-copy-s-primary-color-hover, #fe5631);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileLangOption_1xtpd_1317._active_1xtpd_301 {
          background-color: #fff;
          font-family: var(--font-text-mega-menu-tertiary-font-family, 'Satoshi Medium', sans-serif);
          font-size: var(--font-text-mega-menu-tertiary-font-size-mobile, 14px);
          line-height: var(--font-text-mega-menu-tertiary-line-height-mobile, 1.5);
          font-weight: var(--font-text-mega-menu-tertiary-font-weight, 500);
          letter-spacing: var(--font-text-mega-menu-tertiary-letter-spacing, normal);
          text-transform: var(--font-text-mega-menu-tertiary-text-transform, none);
          color: var(--font-text-mega-menu-tertiary-color, #fe5631);
          background: var(--font-text-mega-menu-tertiary-background, transparent);
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileCTA_1xtpd_1385 {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1.5rem;
          background: #fff;
        }

        @media only screen and (min-width: 768px) {
          ._module-header_1xtpd_44 ._header_1xtpd_49 ._mobile_1xtpd_941 ._mobileCTA_1xtpd_1385 {
            padding: 1.5rem 3.75rem;
          }
        }

        /* Contact Button Styles - FIXED: Filled with orange */
        .atom-button {
          font-family: 'Satoshi Regular', sans-serif;
          font-weight: 400;
          font-size: 16px;
          padding: 8px 24px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 40px;
          outline: none;
          
          background-color: #fe5631 !important; /* Orange color */
          color: white !important;
        }

        ._primary_ilbwb_112:hover {
          background-color: #e64a19 !important; /* Darker orange on hover */
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(254, 86, 49, 0.3);
        }

        /* Arrow alignment fix */
        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langButton_1xtpd_96:after,
        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._navButton_1xtpd_66:after {
          vertical-align: baseline !important;
          margin-top: 2px;
        }

        /* Ensure language dropdown items are properly aligned */
        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langDropdown_1xtpd_542 {
          min-width: 60px;
        }

        ._module-header_1xtpd_44 ._header_1xtpd_49 ._bar_1xtpd_191 ._langOption_1xtpd_556 {
          padding: 10px 15px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default Navbar;