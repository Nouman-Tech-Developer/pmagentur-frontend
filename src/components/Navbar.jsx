import React, { useState, useEffect, useRef } from 'react';
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
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(1);

  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});

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
      label: t('nav.solutions', 'Lösungen'),
      key: 'solutions',
      hasDropdown: true,
      href: '#'
    },
    {
      label: t('nav.products', 'Produkte'),
      key: 'products',
      hasDropdown: true,
      href: '#'
    },
    {
      label: t('nav.about', 'Über uns'),
      key: 'about',
      hasDropdown: false,
      to: '/about'
    },
    {
      label: t('nav.careers', 'Karriere'),
      key: 'careers',
      hasDropdown: false,
      to: '/career'
    },
  ];

  const solutionsData = {
    categories: [
      { id: 1, title: 'KI & Daten' },
      { id: 2, title: 'E-Commerce' },
      { id: 3, title: 'Software' },
      { id: 4, title: 'Legal' },
      { id: 5, title: 'Marketing' },
      { id: 6, title: 'Finance' },
    ],
    services: {
      1: [
        {
          id: 1,
          title: 'AI Phone Assistant',
          description: 'Automates calls, appointment scheduling, and customer inquiries – 24/7 availability.',
          link: '#'
        },
        {
          id: 2,
          title: 'Chatbots & Digital Assistants',
          description: 'Intelligent chatbots for websites, social media, and internal processes.',
          link: '#'
        },
        {
          id: 3,
          title: 'Email Automation',
          description: 'Automate customer communication and internal processes efficiently.',
          link: '#'
        },
        {
          id: 4,
          title: 'Data Analysis AI',
          description: 'Advanced AI for processing and analyzing large datasets.',
          link: '#'
        }
      ],
      2: [
        {
          id: 5,
          title: 'E-Commerce Store Automation',
          description: 'Automated product management and inventory control for online stores.',
          link: '#'
        },
        {
          id: 6,
          title: 'Order Processing',
          description: 'Streamlined order fulfillment and customer notification systems.',
          link: '#'
        },
        {
          id: 7,
          title: 'Customer Service Automation',
          description: 'AI-powered customer support with instant query resolution.',
          link: '#'
        },
        {
          id: 8,
          title: 'Personalized Recommendations',
          description: 'AI algorithms for personalized product suggestions.',
          link: '#'
        }
      ],
      3: [
        {
          id: 9,
          title: 'Workflow Optimization',
          description: 'Custom AI solutions for data processing and industry-specific tasks.',
          link: '#'
        },
        {
          id: 10,
          title: 'Process Automation',
          description: 'Automate repetitive business processes to increase efficiency.',
          link: '#'
        },
        {
          id: 11,
          title: 'System Integration',
          description: 'Seamless integration of AI tools with existing systems.',
          link: '#'
        },
        {
          id: 12,
          title: 'Custom Development',
          description: 'Tailor-made AI solutions for unique business requirements.',
          link: '#'
        }
      ],
      4: [
        {
          id: 13,
          title: 'Legal Document Processing',
          description: 'AI-powered document review and contract analysis.',
          link: '#'
        },
        {
          id: 14,
          title: 'Compliance Automation',
          description: 'Automated compliance checks and regulatory reporting.',
          link: '#'
        },
        {
          id: 15,
          title: 'Contract Management',
          description: 'AI system for contract lifecycle management.',
          link: '#'
        },
        {
          id: 16,
          title: 'Legal Research AI',
          description: 'Advanced AI tools for legal research and analysis.',
          link: '#'
        }
      ],
      5: [
        {
          id: 17,
          title: 'Marketing Campaign Automation',
          description: 'Automate multi-channel marketing campaigns.',
          link: '#'
        },
        {
          id: 18,
          title: 'Social Media Management',
          description: 'AI tools for social media scheduling and analytics.',
          link: '#'
        },
        {
          id: 19,
          title: 'Customer Segmentation',
          description: 'AI-driven customer segmentation for targeted marketing.',
          link: '#'
        },
        {
          id: 20,
          title: 'ROI Analytics',
          description: 'Measure and optimize marketing campaign performance.',
          link: '#'
        }
      ],
      6: [
        {
          id: 21,
          title: 'Financial Reporting',
          description: 'Automated financial reporting and analysis.',
          link: '#'
        },
        {
          id: 22,
          title: 'Invoice Processing',
          description: 'AI-powered invoice processing and payment automation.',
          link: '#'
        },
        {
          id: 23,
          title: 'Fraud Detection',
          description: 'Advanced AI algorithms for detecting fraud.',
          link: '#'
        },
        {
          id: 24,
          title: 'Investment Analysis',
          description: 'AI tools for market analysis and portfolio management.',
          link: '#'
        }
      ]
    }
  };

  const productsData = {
    categories: [
      { id: 1, title: 'AI Platform' },
      { id: 2, title: 'Automation Tools' },
      { id: 3, title: 'Analytics' },
      { id: 4, title: 'Integration' },
    ],
    products: {
      1: [
        {
          id: 1,
          title: 'Reinke AI Suite',
          description: 'Complete AI platform with voice, chat, and email automation.',
          link: '#',
          badge: 'Popular'
        },
        {
          id: 2,
          title: 'Voice AI Pro',
          description: 'Advanced voice recognition for call centers.',
          link: '#'
        },
        {
          id: 3,
          title: 'Enterprise AI Platform',
          description: 'Scalable AI platform for large organizations.',
          link: '#'
        },
        {
          id: 4,
          title: 'AI Studio',
          description: 'Build and train custom AI models.',
          link: '#'
        }
      ],
      2: [
        {
          id: 5,
          title: 'Automation Studio',
          description: 'Drag-and-drop workflow builder for custom automation.',
          link: '#'
        },
        {
          id: 6,
          title: 'Chatbot Builder',
          description: 'Create intelligent chatbots for multiple platforms.',
          link: '#'
        },
        {
          id: 7,
          title: 'Workflow Automator',
          description: 'Advanced automation for complex business workflows.',
          link: '#'
        },
        {
          id: 8,
          title: 'Task Scheduler',
          description: 'Intelligent scheduling for recurring operations.',
          link: '#'
        }
      ],
      3: [
        {
          id: 9,
          title: 'Analytics Dashboard',
          description: 'Real-time insights for all automated processes.',
          link: '#'
        },
        {
          id: 10,
          title: 'Performance Monitor',
          description: 'Comprehensive AI system monitoring and reporting.',
          link: '#'
        },
        {
          id: 11,
          title: 'Business Intelligence',
          description: 'AI-powered analytics for strategic planning.',
          link: '#'
        },
        {
          id: 12,
          title: 'Data Visualization',
          description: 'Transform complex data into actionable insights.',
          link: '#'
        }
      ],
      4: [
        {
          id: 13,
          title: 'API Gateway',
          description: 'Seamless integration with 500+ applications.',
          link: '#'
        },
        {
          id: 14,
          title: 'System Connectors',
          description: 'Pre-built connectors for popular business software.',
          link: '#'
        },
        {
          id: 15,
          title: 'Custom Integration',
          description: 'Tools for proprietary system integration.',
          link: '#'
        },
        {
          id: 16,
          title: 'Data Synchronization',
          description: 'Real-time data sync across multiple platforms.',
          link: '#'
        }
      ]
    }
  };

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

  const handleMegaMenuEnter = (menuKey) => {
    setActiveMegaMenu(menuKey);
    setActiveCategory(1);
  };

  const handleMegaMenuLeave = (e) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(e.relatedTarget)) {
      setActiveMegaMenu(null);
      setActiveCategory(1);
    }
  };

  const handleCategorySelect = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const getCategoryItems = () => {
    if (activeMegaMenu === 'solutions') {
      return solutionsData.services[activeCategory] || [];
    }
    if (activeMegaMenu === 'products') {
      return productsData.products[activeCategory] || [];
    }
    return [];
  };

  const getCurrentCategories = () => {
    if (activeMegaMenu === 'solutions') {
      return solutionsData.categories;
    }
    if (activeMegaMenu === 'products') {
      return productsData.categories;
    }
    return [];
  };

  const handleNavItemMouseEnter = (linkKey) => {
    if (linkKey === 'solutions' || linkKey === 'products') {
      setActiveMegaMenu(linkKey);
      setActiveCategory(1);
    }
  };

  const handleNavItemMouseLeave = (e) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(e.relatedTarget)) {
      setActiveMegaMenu(null);
      setActiveCategory(1);
    }
  };

  const handleItemClick = (link, e) => {
    e.preventDefault();
    console.log(`Clicked: ${link.title}`);
    window.location.href = link.link;
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
                      ref={el => navItemRefs.current[link.key] = el}
                      className={`reinke-header__nav-item ${!link.hasDropdown ? 'reinke-header__nav-item--standalone' : ''} ${activeMegaMenu === link.key ? 'reinke-header__nav-item--active' : ''}`}
                      onMouseEnter={() => link.hasDropdown && handleNavItemMouseEnter(link.key)}
                      onMouseLeave={(e) => link.hasDropdown && handleNavItemMouseLeave(e)}
                    >
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="reinke-header__nav-button"
                          role="button"
                          aria-haspopup={link.hasDropdown}
                          aria-expanded={activeMegaMenu === link.key}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <span className="reinke-header__nav-arrow" />
                          )}
                        </Link>
                      ) : (
                        <a
                          className="reinke-header__nav-button"
                          href={link.href}
                          role="button"
                          aria-haspopup={link.hasDropdown}
                          aria-expanded={activeMegaMenu === link.key}
                          target={link.href?.startsWith('http') ? '_blank' : undefined}
                          rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <span className="reinke-header__nav-arrow" />
                          )}
                        </a>
                      )}
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

          {(activeMegaMenu === 'solutions' || activeMegaMenu === 'products') && (
            <div
              ref={megaMenuRef}
              className="reinke-mega-menu"
              onMouseEnter={() => handleMegaMenuEnter(activeMegaMenu)}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div className="reinke-mega-menu__container">
                <div className="reinke-mega-menu__grid">
                  <div className="reinke-mega-menu__categories">
                    <ul className="reinke-mega-menu__categories-list">
                      {getCurrentCategories().map((category) => (
                        <li key={category.id} className="reinke-mega-menu__category-item">
                          <button
                            className={`reinke-mega-menu__category-button ${activeCategory === category.id ? 'reinke-mega-menu__category-button--active' : ''}`}
                            onClick={() => handleCategorySelect(category.id)}
                            onMouseEnter={() => handleCategorySelect(category.id)}
                          >
                            {category.title}
                            <span className="reinke-mega-menu__category-arrow" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="reinke-mega-menu__services">
                    <div className="reinke-mega-menu__services-grid">
                      {getCategoryItems().map((item) => (
                        <div key={item.id} className="reinke-mega-menu__service-item">
                          <a
                            href={item.link}
                            className="reinke-mega-menu__service-link-wrapper"
                            onClick={(e) => handleItemClick(item, e)}
                          >
                            <div className="reinke-mega-menu__service-header">
                              <h4 className="reinke-mega-menu__service-title">{item.title}</h4>
                              {item.badge && (
                                <span className="reinke-mega-menu__service-badge">{item.badge}</span>
                              )}
                            </div>
                            <p className="reinke-mega-menu__service-description">{item.description}</p>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
                    {link.to ? (
                      <Link
                        to={link.to}
                        className="reinke-header__mobile-link"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        className="reinke-header__mobile-link"
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    )}
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

        .reinke-header__nav-item--active .reinke-header__nav-button {
          color: #000000;
        }

        .reinke-header__nav-item--active .reinke-header__nav-button::after {
          width: 100%;
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

        @media only screen and (min-width: 1200px) {
          .reinke-header__nav {
            display: block;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }

        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .reinke-header__nav {
            display: none !important;
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
          gap: 0.25rem;
        }

        .reinke-header__nav-button:focus {
          outline: 2px solid #000000;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .reinke-header__nav-arrow {
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
        }

        .reinke-header__nav-button:hover .reinke-header__nav-arrow {
          transform: rotate(180deg);
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

        .reinke-header__nav-item--standalone .reinke-header__nav-arrow {
          display: none;
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

        @media only screen and (min-width: 1200px) {
          .reinke-header__lang-switcher {
            display: inline-flex;
            align-items: center;
          }
        }

        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .reinke-header__lang-switcher {
            display: none !important;
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

        @media only screen and (max-width: 1200px) {
          .reinke-header__burger {
            display: inline-flex;
          }
        }

        @media only screen and (min-width: 1200px) {
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

        .reinke-mega-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #FFFFFF;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-top: 1px solid #E5E5E7;
          border-bottom: 1px solid #E5E5E7;
          z-index: 999;
          animation: fadeInDown 0.3s ease-out;
          overflow: hidden;
          padding-top: 10px;
          margin-top: -10px;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .reinke-mega-menu__container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 120px;
          padding-top: 50px;
        }

        @media only screen and (max-width: 1200px) {
          .reinke-mega-menu__container {
            padding: 40px 60px;
            padding-top: 50px;
          }
        }

        @media only screen and (max-width: 768px) {
          .reinke-mega-menu__container {
            padding: 40px 24px;
            padding-top: 50px;
          }
        }

        .reinke-mega-menu__grid {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 60px;
        }

        @media only screen and (max-width: 1024px) {
          .reinke-mega-menu__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .reinke-mega-menu__categories {
          border-right: 1px solid #E5E5E7;
          padding-right: 40px;
        }

        @media only screen and (max-width: 1024px) {
          .reinke-mega-menu__categories {
            border-right: none;
            border-bottom: 1px solid #E5E5E7;
            padding-right: 0;
            padding-bottom: 40px;
          }
        }

        .reinke-mega-menu__categories-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .reinke-mega-menu__category-item {
          width: 100%;
        }

        .reinke-mega-menu__category-button {
          width: 100%;
          padding: 12px 24px;
          background: transparent;
          border: none;
          border-radius: 8px;
          text-align: left;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1rem;
          font-weight: 500;
          color: #374151;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .reinke-mega-menu__category-button:focus {
          outline: 2px solid #000000;
          outline-offset: 2px;
        }

        .reinke-mega-menu__category-button:hover {
          background: rgba(0, 0, 0, 0.1);
          color: #000000;
        }

        .reinke-mega-menu__category-button--active {
          background: rgba(0, 0, 0, 0.1) !important;
          color: #000000 !important;
        }

        .reinke-mega-menu__category-arrow {
          display: inline-flex;
          width: 0.5rem;
          height: 0.5rem;
          background-color: currentColor;
          mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E");
          mask-size: contain;
          mask-repeat: no-repeat;
          transition: transform 0.2s ease;
          transform: rotate(-90deg);
        }

        .reinke-mega-menu__category-button:hover .reinke-mega-menu__category-arrow,
        .reinke-mega-menu__category-button--active .reinke-mega-menu__category-arrow {
          transform: rotate(-90deg) scale(1.2);
        }

        .reinke-mega-menu__services {
          overflow: hidden;
        }

        .reinke-mega-menu__services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media only screen and (max-width: 1200px) {
          .reinke-mega-menu__services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (max-width: 768px) {
          .reinke-mega-menu__services-grid {
            grid-template-columns: 1fr;
          }
        }

        .reinke-mega-menu__service-item {
          background: #FFFFFF;
          padding: 0;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .reinke-mega-menu__service-link-wrapper {
          text-decoration: none;
          color: inherit;
          display: block;
          padding: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1px solid transparent;
        }

        .reinke-mega-menu__service-link-wrapper:focus {
          outline: 2px solid #000000;
          outline-offset: 2px;
          border-radius: 8px;
        }

        .reinke-mega-menu__service-link-wrapper:hover {
          background: rgba(0, 0, 0, 0.05);
          border-color: rgba(0, 0, 0, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .reinke-mega-menu__service-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 8px;
        }

        .reinke-mega-menu__service-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        .reinke-mega-menu__service-link-wrapper:hover .reinke-mega-menu__service-title {
          color: #000000;
        }

        .reinke-mega-menu__service-badge {
          background: rgba(0, 0, 0, 0.1);
          color: #000000;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 12px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .reinke-mega-menu__service-description {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
          transition: color 0.2s ease;
        }

        .reinke-mega-menu__service-link-wrapper:hover .reinke-mega-menu__service-description {
          color: #4B5563;
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

        @media only screen and (min-width: 1200px) {
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
          padding: 8px 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.25rem;
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
          padding: 8px 0;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.25rem;
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
          padding: 8px 16px;
          background: transparent;
          border: 0;
          cursor: pointer;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
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