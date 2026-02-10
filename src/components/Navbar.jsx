import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import WhiteLogo from '../assets/white-logo.png';
import BlackLogo from '../assets/black-logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [selectedLang, setSelectedLang] = useState('DE');
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'solutions' or 'products'
  const [activeCategory, setActiveCategory] = useState(1); // Default to first category

  const megaMenuRef = useRef(null);
  const navItemRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtered nav links for BOTH desktop and mobile
  const navLinks = [
    { 
      label: t('nav.solutions'), 
      key: 'solutions',
      hasDropdown: true, 
      href: '#' 
    },
    { 
      label: t('nav.products'), 
      key: 'products',
      hasDropdown: true, 
      href: '#' 
    },
    { 
      label: t('nav.about'), 
      key: 'about',
      hasDropdown: false, 
      href: '/about' 
    },
    { 
      label: t('nav.careers'), 
      key: 'careers',
      hasDropdown: false, 
      to: '/career' 
    },
  ];

  // Mega Menu Data for Solutions - Clickable Title & Description
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
          description: 'Automates calls, appointment scheduling, and customer inquiries – reliably, professionally, and available 24/7. Customizable for your brand.',
          link: '#'
        },
        {
          id: 2,
          title: 'Chatbots & Digital Assistants',
          description: 'Intelligent chatbots for websites, social media, or internal processes. Automatically answer inquiries and relieve your team.',
          link: '#'
        },
        {
          id: 3,
          title: 'Email Automation',
          description: 'Automate customer communication, appointment confirmations, and internal processes – fast, error-free, and efficient.',
          link: '#'
        },
        {
          id: 4,
          title: 'Data Analysis AI',
          description: 'Advanced AI for processing and analyzing large datasets to extract valuable business insights.',
          link: '#'
        }
      ],
      2: [
        {
          id: 5,
          title: 'E-Commerce Store Automation',
          description: 'Automated product management, inventory control, and pricing optimization for online stores.',
          link: '#'
        },
        {
          id: 6,
          title: 'Order Processing',
          description: 'Streamlined order fulfillment, shipping coordination, and customer notification systems.',
          link: '#'
        },
        {
          id: 7,
          title: 'Customer Service Automation',
          description: 'AI-powered customer support for e-commerce platforms with instant query resolution.',
          link: '#'
        },
        {
          id: 8,
          title: 'Personalized Recommendations',
          description: 'AI algorithms that provide personalized product suggestions based on user behavior.',
          link: '#'
        }
      ],
      3: [
        {
          id: 9,
          title: 'Workflow Optimization',
          description: 'Custom AI solutions for data processing and industry-specific tasks – tailored to your business.',
          link: '#'
        },
        {
          id: 10,
          title: 'Process Automation',
          description: 'Automate repetitive business processes to increase efficiency and reduce errors.',
          link: '#'
        },
        {
          id: 11,
          title: 'System Integration',
          description: 'Seamless integration of AI tools with existing software systems and platforms.',
          link: '#'
        },
        {
          id: 12,
          title: 'Custom Development',
          description: 'Tailor-made AI solutions developed specifically for your unique business requirements.',
          link: '#'
        }
      ],
      4: [
        {
          id: 13,
          title: 'Legal Document Processing',
          description: 'AI-powered document review, contract analysis, and legal research automation.',
          link: '#'
        },
        {
          id: 14,
          title: 'Compliance Automation',
          description: 'Automated compliance checks and regulatory reporting for legal requirements.',
          link: '#'
        },
        {
          id: 15,
          title: 'Contract Management',
          description: 'AI system for contract creation, review, and lifecycle management.',
          link: '#'
        },
        {
          id: 16,
          title: 'Legal Research AI',
          description: 'Advanced AI tools for legal research and precedent analysis.',
          link: '#'
        }
      ],
      5: [
        {
          id: 17,
          title: 'Marketing Campaign Automation',
          description: 'Automate multi-channel marketing campaigns and customer engagement.',
          link: '#'
        },
        {
          id: 18,
          title: 'Social Media Management',
          description: 'AI tools for social media scheduling, analytics, and content optimization.',
          link: '#'
        },
        {
          id: 19,
          title: 'Customer Segmentation',
          description: 'AI-driven customer segmentation for targeted marketing campaigns.',
          link: '#'
        },
        {
          id: 20,
          title: 'ROI Analytics',
          description: 'Measure and optimize marketing campaign performance with AI analytics.',
          link: '#'
        }
      ],
      6: [
        {
          id: 21,
          title: 'Financial Reporting',
          description: 'Automated financial reporting, analysis, and compliance documentation.',
          link: '#'
        },
        {
          id: 22,
          title: 'Invoice Processing',
          description: 'AI-powered invoice processing, validation, and payment automation.',
          link: '#'
        },
        {
          id: 23,
          title: 'Fraud Detection',
          description: 'Advanced AI algorithms for detecting fraudulent transactions and activities.',
          link: '#'
        },
        {
          id: 24,
          title: 'Investment Analysis',
          description: 'AI tools for market analysis, investment recommendations, and portfolio management.',
          link: '#'
        }
      ]
    }
  };

  // Mega Menu Data for Products - Clickable Title & Description
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
          title: 'Tolero AI Suite',
          description: 'Complete AI platform with voice, chat, and email automation in one integrated solution.',
          link: '#',
          badge: 'Popular'
        },
        {
          id: 2,
          title: 'Voice AI Pro',
          description: 'Advanced voice recognition and natural conversation AI for call centers.',
          link: '#'
        },
        {
          id: 3,
          title: 'Enterprise AI Platform',
          description: 'Scalable AI platform for large organizations with advanced features.',
          link: '#'
        },
        {
          id: 4,
          title: 'AI Studio',
          description: 'Development environment for building and training custom AI models.',
          link: '#'
        }
      ],
      2: [
        {
          id: 5,
          title: 'Automation Studio',
          description: 'Drag-and-drop workflow builder for creating custom automation without coding.',
          link: '#'
        },
        {
          id: 6,
          title: 'Chatbot Builder',
          description: 'Create intelligent chatbots for websites, WhatsApp, and Telegram in minutes.',
          link: '#'
        },
        {
          id: 7,
          title: 'Workflow Automator',
          description: 'Advanced automation tool for complex business workflows and processes.',
          link: '#'
        },
        {
          id: 8,
          title: 'Task Scheduler',
          description: 'Intelligent scheduling and task automation for recurring business operations.',
          link: '#'
        }
      ],
      3: [
        {
          id: 9,
          title: 'Analytics Dashboard',
          description: 'Real-time insights and performance metrics for all your automated processes.',
          link: '#'
        },
        {
          id: 10,
          title: 'Performance Monitor',
          description: 'Comprehensive monitoring and reporting tools for AI system performance.',
          link: '#'
        },
        {
          id: 11,
          title: 'Business Intelligence',
          description: 'AI-powered analytics for business decision making and strategy planning.',
          link: '#'
        },
        {
          id: 12,
          title: 'Data Visualization',
          description: 'Advanced tools for transforming complex data into actionable visual insights.',
          link: '#'
        }
      ],
      4: [
        {
          id: 13,
          title: 'API Gateway',
          description: 'Seamless integration with 500+ business applications and custom systems.',
          link: '#'
        },
        {
          id: 14,
          title: 'System Connectors',
          description: 'Pre-built connectors for popular business software and platforms.',
          link: '#'
        },
        {
          id: 15,
          title: 'Custom Integration',
          description: 'Tools for creating custom integrations with proprietary systems.',
          link: '#'
        },
        {
          id: 16,
          title: 'Data Synchronization',
          description: 'Real-time data sync across multiple platforms and databases.',
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
    if (isMenuOpen) return 'tolero-header__wrapper tolero-header--menu-open';
    if (scrolled) return 'tolero-header__wrapper tolero-header--scrolled';
    if (isNavHovered) return 'tolero-header__wrapper tolero-header--top tolero-header--hovered';
    return 'tolero-header__wrapper tolero-header--top';
  };

  const getLogo = () => {
    if (isMenuOpen) return BlackLogo;
    if (scrolled) return WhiteLogo;
    if (isNavHovered) return BlackLogo;
    return BlackLogo;
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

  const handleMegaMenuEnter = (menuKey, e) => {
    if (e.type === 'mouseenter') {
      setActiveMegaMenu(menuKey);
      setActiveCategory(1);
    }
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

  // Get items for active category
  const getCategoryItems = () => {
    if (activeMegaMenu === 'solutions') {
      return solutionsData.services[activeCategory] || [];
    } else if (activeMegaMenu === 'products') {
      return productsData.products[activeCategory] || [];
    }
    return [];
  };

  // Get current categories
  const getCurrentCategories = () => {
    if (activeMegaMenu === 'solutions') {
      return solutionsData.categories;
    } else if (activeMegaMenu === 'products') {
      return productsData.categories;
    }
    return [];
  };

  // Handle mouse enter on nav item with delay for smoother transition
  const handleNavItemMouseEnter = (linkKey) => {
    if (linkKey === 'solutions' || linkKey === 'products') {
      setActiveMegaMenu(linkKey);
      setActiveCategory(1);
    }
  };

  // Handle mouse leave from nav item
  const handleNavItemMouseLeave = (e) => {
    if (megaMenuRef.current && !megaMenuRef.current.contains(e.relatedTarget)) {
      setActiveMegaMenu(null);
      setActiveCategory(1);
    }
  };

  // Handle item click (for clickable title and description)
  const handleItemClick = (link, e) => {
    e.preventDefault();
    console.log(`Clicked on: ${link.title}`);
    // You can add navigation logic here
    window.location.href = link.link;
  };

  return (
    <>
      <div className="tolero-header">
        <header 
          className={getHeaderClass()}
          onMouseEnter={handleNavMouseEnter}
          onMouseLeave={handleNavMouseLeave}
        >
          <div className="tolero-header__bar" role="menubar" aria-label="Primary">
            <div className="tolero-header__inner">
              {/* Logo */}
              <Link to="/" className="tolero-header__brand" aria-label="Home">
                <img 
                  src={getLogo()} 
                  alt="Tolero AI Automation" 
                  className="tolero-header__logo"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="tolero-header__nav" role="navigation" aria-label="Primary">
                <ul className="tolero-header__nav-list">
                  {navLinks.map((link) => (
                    <li 
                      key={link.key}
                      ref={el => navItemRefs.current[link.key] = el}
                      className={`tolero-header__nav-item ${!link.hasDropdown ? 'tolero-header__nav-item--standalone' : ''} ${activeMegaMenu === link.key ? 'tolero-header__nav-item--active' : ''}`}
                      onMouseEnter={(e) => link.hasDropdown && handleNavItemMouseEnter(link.key)}
                      onMouseLeave={(e) => link.hasDropdown && handleNavItemMouseLeave(e)}
                    >
                      {link.to ? (
                        <Link 
                          to={link.to}
                          className="tolero-header__nav-button" 
                          role="button"
                          aria-haspopup={link.hasDropdown}
                          aria-expanded={activeMegaMenu === link.key}
                          tabIndex="0"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <span className="tolero-header__nav-arrow"></span>
                          )}
                        </Link>
                      ) : (
                        <a 
                          className="tolero-header__nav-button" 
                          href={link.href}
                          role="button"
                          aria-haspopup={link.hasDropdown}
                          aria-expanded={activeMegaMenu === link.key}
                          tabIndex="0"
                          target={link.href?.startsWith('http') ? '_blank' : undefined}
                          rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {link.label}
                          {link.hasDropdown && (
                            <span className="tolero-header__nav-arrow"></span>
                          )}
                        </a>
                      )}
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
                    aria-label={t('nav.selectLanguage')}
                    onClick={() => setIsLangOpen(!isLangOpen)}
                    tabIndex="0"
                  >
                    {selectedLang}
                    <span className="tolero-header__lang-arrow"></span>
                  </button>
                  
                  {isLangOpen && (
                    <div className="tolero-header__lang-dropdown">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          className={`tolero-header__lang-option ${selectedLang === lang.label ? 'tolero-header__lang-option--active' : ''}`}
                          onClick={() => handleLangSelect(lang.code)}
                          tabIndex="0"
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
                  {t('nav.requestDemo')}
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="tolero-header__burger" 
                aria-label={t('nav.openMenu')}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                tabIndex="0"
              >
                <span className="tolero-header__burger-line"></span>
                <span className="tolero-header__burger-line"></span>
                <span className="tolero-header__burger-line"></span>
              </button>
            </div>
          </div>

          {/* Mega Menu for Solutions and Products */}
          {(activeMegaMenu === 'solutions' || activeMegaMenu === 'products') && (
            <div 
              ref={megaMenuRef}
              className="tolero-mega-menu"
              onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
              onMouseLeave={handleMegaMenuLeave}
            >
              <div className="tolero-mega-menu__container">
                <div className="tolero-mega-menu__grid">
                  {/* Left Side - Categories with arrow */}
                  <div className="tolero-mega-menu__categories">
                    <ul className="tolero-mega-menu__categories-list">
                      {getCurrentCategories().map((category) => (
                        <li key={category.id} className="tolero-mega-menu__category-item">
                          <button 
                            className={`tolero-mega-menu__category-button ${activeCategory === category.id ? 'tolero-mega-menu__category-button--active' : ''}`}
                            onClick={() => handleCategorySelect(category.id)}
                            onMouseEnter={() => handleCategorySelect(category.id)}
                          >
                            {category.title}
                            <span className="tolero-mega-menu__category-arrow"></span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Side - Items in 2x2 grid with clickable title & description */}
                  <div className="tolero-mega-menu__services">
                    <div className="tolero-mega-menu__services-grid">
                      {getCategoryItems().map((item) => (
                        <div key={item.id} className="tolero-mega-menu__service-item">
                          <a 
                            href={item.link} 
                            className="tolero-mega-menu__service-link-wrapper"
                            onClick={(e) => handleItemClick(item, e)}
                            tabIndex="0"
                          >
                            <div className="tolero-mega-menu__service-header">
                              <h4 className="tolero-mega-menu__service-title">{item.title}</h4>
                              {item.badge && (
                                <span className="tolero-mega-menu__service-badge">{item.badge}</span>
                              )}
                            </div>
                            <p className="tolero-mega-menu__service-description">{item.description}</p>
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="tolero-header__mobile">
            <div className="tolero-header__mobile-header">
              <Link to="/" className="tolero-header__brand" aria-label="Home">
                <img src={BlackLogo} alt="Tolero AI Automation" className="tolero-header__logo" />
              </Link>
              <button 
                className="tolero-header__mobile-close" 
                aria-label={t('nav.closeMenu')}
                onClick={() => setIsMenuOpen(false)}
                tabIndex="0"
              >
                <span className="tolero-header__mobile-close-icon"></span>
              </button>
            </div>
            
            <div className="tolero-header__mobile-body">
              <ul className="tolero-header__mobile-list">
                {navLinks.map((link) => (
                  <li key={link.key} className="tolero-header__mobile-item">
                    {link.to ? (
                      <Link 
                        to={link.to}
                        className="tolero-header__mobile-link" 
                        onClick={() => setIsMenuOpen(false)}
                        tabIndex="0"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a 
                        className="tolero-header__mobile-link" 
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        tabIndex="0"
                        target={link.href?.startsWith('http') ? '_blank' : undefined}
                        rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Language selector inside mobile menu */}
              <div className="tolero-header__mobile-lang-switcher">
                <button 
                  className="tolero-header__mobile-lang-button"
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  tabIndex="0"
                >
                  {selectedLang}
                  <span className="tolero-header__mobile-lang-arrow"></span>
                </button>
                
                {isLangOpen && (
                  <div className="tolero-header__mobile-lang-dropdown">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        className={`tolero-header__mobile-lang-option ${selectedLang === lang.label ? 'tolero-header__mobile-lang-option--active' : ''}`}
                        onClick={() => {
                          handleLangSelect(lang.code);
                        }}
                        tabIndex="0"
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
                tabIndex="0"
              >
                {t('nav.requestDemo')}
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

        /* 🎯 TOP STATE: Transparent with BLACK Text (NO HOVER) */
        .tolero-header__wrapper.tolero-header--top {
          background-color: transparent !important;
        }

        .tolero-header__wrapper.tolero-header--top .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--top .tolero-header__lang-button {
          color: #000000 !important;
        }

        .tolero-header__wrapper.tolero-header--top .tolero-header__burger-line {
          background-color: #000000 !important;
        }

        /* 🎯 TOP STATE WITH HOVER: White Background when cursor enters */
        .tolero-header__wrapper.tolero-header--top.tolero-header--hovered {
          background-color: #FFFFFF !important;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid #E5E5E7;
        }

        .tolero-header__wrapper.tolero-header--top.tolero-header--hovered .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--top.tolero-header--hovered .tolero-header__lang-button {
          color: #000000 !important;
        }

        .tolero-header__wrapper.tolero-header--top.tolero-header--hovered .tolero-header__burger-line {
          background-color: #000000 !important;
        }

        /* 🎯 SCROLLED STATE: Black Background with WHITE Text */
        .tolero-header__wrapper.tolero-header--scrolled {
          background-color: #000000 !important;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__lang-button {
          color: #FFFFFF !important;
        }

        .tolero-header__wrapper.tolero-header--scrolled .tolero-header__burger-line {
          background-color: #FFFFFF !important;
        }

        /* 🎯 MENU OPEN STATE: White Background with BLACK Text */
        .tolero-header__wrapper.tolero-header--menu-open {
          background-color: #FFFFFF !important;
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
        }

        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__nav-button,
        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__lang-button {
          color: #000000 !important;
        }

        .tolero-header__wrapper.tolero-header--menu-open .tolero-header__burger-line {
          background-color: #000000 !important;
        }

        /* Active nav item */
        .tolero-header__nav-item--active .tolero-header__nav-button {
          color: #0066FF !important;
        }

        .tolero-header__nav-item--active .tolero-header__nav-button::after {
          width: 100% !important;
        }

        /* Header Bar Layout - UPDATED: 12px 120px padding */
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

        /* Brand/Logo - UPDATED: 3rem logo size */
        .tolero-header__brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          z-index: 1001;
        }

        .tolero-header__logo {
          display: block;
          height: 3rem;
          width: auto;
          transition: transform 0.3s ease;
        }

        .tolero-header__brand:hover .tolero-header__logo {
          transform: scale(1.05);
        }

        @media only screen and (min-width: 768px) {
          .tolero-header__logo {
            height: 3rem;
          }
        }

        /* Desktop Navigation */
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
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          letter-spacing: 0.01em;
          position: relative;
          gap: 0.25rem;
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__nav-button:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
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

        /* 🎯 UNDERLINE COLOR: Always #0066FF */
        .tolero-header__nav-button::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #0066FF !important;
          transition: width 0.3s ease;
        }

        .tolero-header__nav-button:hover::after {
          width: 100%;
        }

        .tolero-header__nav-item--standalone .tolero-header__nav-arrow {
          display: none;
        }

        /* 🎯 HOVER COLORS: Always #0066FF regardless of state */
        .tolero-header--top .tolero-header__nav-button:hover {
          color: #0066FF !important;
        }

        .tolero-header--top.tolero-header--hovered .tolero-header__nav-button:hover {
          color: #0066FF !important;
        }

        .tolero-header--scrolled .tolero-header__nav-button:hover {
          color: #0066FF !important;
        }

        .tolero-header--menu-open .tolero-header__nav-button:hover {
          color: #0066FF !important;
        }

        /* Right Group */
        .tolero-header__right-group {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        /* Language Switcher */
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
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__lang-button:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
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
          color: #000000 !important;
        }

        .tolero-header--top.tolero-header--hovered .tolero-header__lang-button {
          color: #000000 !important;
        }

        .tolero-header--top .tolero-header__lang-button:hover {
          color: #0066FF !important;
        }

        .tolero-header--scrolled .tolero-header__lang-button {
          color: #FFFFFF !important;
        }

        .tolero-header--scrolled .tolero-header__lang-button:hover {
          color: #0066FF !important;
        }

        .tolero-header--menu-open .tolero-header__lang-button {
          color: #000000 !important;
        }

        .tolero-header--menu-open .tolero-header__lang-button:hover {
          color: #0066FF !important;
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
          font-size: 1rem;
          font-weight: 400;
          color: #111827 !important;
          transition: all 0.2s ease;
          text-align: left;
          border-radius: 4px;
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__lang-option:focus {
          outline: 2px solid #0066FF;
          outline-offset: 2px;
        }

        .tolero-header__lang-option:hover {
          background: rgba(0, 102, 255, 0.1);
          color: #0066FF !important;
        }

        .tolero-header__lang-option--active {
          font-weight: 500;
          color: #0066FF !important;
          background: rgba(0, 102, 255, 0.1);
        }

        /* Contact Button */
        .tolero-header__cta {
          display: none;
        }

        @media only screen and (min-width: 1200px) {
          .tolero-header__cta {
            display: inline-flex;
          }
        }

        @media only screen and (min-width: 1024px) and (max-width: 1200px) {
          .tolero-header__cta {
            display: none !important;
          }
        }

        /* Button Component - SINGLE COLOR #0066FF */
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
          background-color: #0066FF;
          color: #FFFFFF;
          white-space: nowrap;
          letter-spacing: 0.01em;
          box-sizing: border-box;
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-button:focus {
          outline: 2px solid #0066FF;
          outline-offset: 2px;
        }

        .tolero-button--primary:hover {
          background-color: #0052CC;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 102, 255, 0.3);
        }

        .tolero-button--primary:active {
          transform: translateY(0);
          box-shadow: 0 4px 15px rgba(0, 102, 255, 0.3);
        }

        /* Mobile CTA button */
        .tolero-header__mobile-cta .tolero-button {
          width: 100%;
          height: 44px;
          font-size: 1.125rem;
          padding: 8px 24px;
        }

        /* Burger Button */
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
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__burger:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
        }

        @media only screen and (max-width: 1200px) {
          .tolero-header__burger {
            display: inline-flex;
          }
        }

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

        /* MEGA MENU STYLES - UPDATED WITH CLICKABLE TITLE & DESCRIPTION */
        .tolero-mega-menu {
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

        .tolero-mega-menu__container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 40px 120px;
          padding-top: 50px;
        }

        @media only screen and (max-width: 1200px) {
          .tolero-mega-menu__container {
            padding: 40px 60px;
            padding-top: 50px;
          }
        }

        @media only screen and (max-width: 768px) {
          .tolero-mega-menu__container {
            padding: 40px 24px;
            padding-top: 50px;
          }
        }

        .tolero-mega-menu__grid {
          display: grid;
          grid-template-columns: 1fr 3fr;
          gap: 60px;
        }

        @media only screen and (max-width: 1024px) {
          .tolero-mega-menu__grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        /* Categories (Left Side) */
        .tolero-mega-menu__categories {
          border-right: 1px solid #E5E5E7;
          padding-right: 40px;
        }

        @media only screen and (max-width: 1024px) {
          .tolero-mega-menu__categories {
            border-right: none;
            border-bottom: 1px solid #E5E5E7;
            padding-right: 0;
            padding-bottom: 40px;
          }
        }

        .tolero-mega-menu__categories-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .tolero-mega-menu__category-item {
          width: 100%;
        }

        .tolero-mega-menu__category-button {
          width: 100%;
          padding: 12px 16px;
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
          outline: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .tolero-mega-menu__category-button:focus {
          outline: 2px solid #0066FF;
          outline-offset: 2px;
        }

        .tolero-mega-menu__category-button:hover {
          background: rgba(0, 102, 255, 0.1);
          color: #0066FF;
        }

        .tolero-mega-menu__category-button--active {
          background: rgba(0, 102, 255, 0.1) !important;
          color: #0066FF !important;
        }

        .tolero-mega-menu__category-arrow {
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

        .tolero-mega-menu__category-button:hover .tolero-mega-menu__category-arrow,
        .tolero-mega-menu__category-button--active .tolero-mega-menu__category-arrow {
          transform: rotate(-90deg) scale(1.2);
        }

        /* Services/Products (Right Side) - CLICKABLE TITLE & DESCRIPTION */
        .tolero-mega-menu__services {
          overflow: hidden;
        }

        .tolero-mega-menu__services-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        @media only screen and (max-width: 1200px) {
          .tolero-mega-menu__services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media only screen and (max-width: 768px) {
          .tolero-mega-menu__services-grid {
            grid-template-columns: 1fr;
          }
        }

        .tolero-mega-menu__service-item {
          background: #FFFFFF;
          padding: 0;
          transition: all 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        /* Clickable wrapper for entire item */
        .tolero-mega-menu__service-link-wrapper {
          text-decoration: none;
          color: inherit;
          display: block;
          padding: 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
          cursor: pointer;
          outline: none;
          border: 1px solid transparent;
        }

        .tolero-mega-menu__service-link-wrapper:focus {
          outline: 2px solid #0066FF;
          outline-offset: 2px;
          border-radius: 8px;
        }

        .tolero-mega-menu__service-link-wrapper:hover {
          background: rgba(0, 102, 255, 0.05);
          border-color: rgba(0, 102, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }

        .tolero-mega-menu__service-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 12px;
          gap: 8px;
        }

        .tolero-mega-menu__service-title {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: #111827;
          margin: 0;
          line-height: 1.3;
          transition: color 0.2s ease;
        }

        .tolero-mega-menu__service-link-wrapper:hover .tolero-mega-menu__service-title {
          color: #0066FF;
        }

        .tolero-mega-menu__service-badge {
          background: rgba(0, 102, 255, 0.1);
          color: #0066FF;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 6px;
          border-radius: 12px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tolero-mega-menu__service-description {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 0.875rem;
          line-height: 1.5;
          color: #6B7280;
          margin: 0;
          transition: color 0.2s ease;
        }

        .tolero-mega-menu__service-link-wrapper:hover .tolero-mega-menu__service-description {
          color: #4B5563;
        }

        /* Mobile Menu */
        .tolero-header__mobile {
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
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__mobile-close:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
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
          background-color: #111827;
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
          padding: 8px 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #111827;
          text-decoration: none;
          transition: color 0.2s ease;
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__mobile-link:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
        }

        .tolero-header__mobile-link:hover {
          color: #0066FF;
        }

        /* Mobile Language Switcher */
        .tolero-header__mobile-lang-switcher {
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid #E5E5E7;
        }

        .tolero-header__mobile-lang-button {
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
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__mobile-lang-button:focus {
          outline: 2px solid #0066FF;
          outline-offset: 4px;
          border-radius: 4px;
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
          outline: none;
        }

        /* 🎯 BUTTON FOCUS OUTLINE: Same color as button (#0066FF) */
        .tolero-header__mobile-lang-option:focus {
          outline: 2px solid #0066FF;
          outline-offset: 2px;
        }

        .tolero-header__mobile-lang-option:hover {
          background: rgba(0, 102, 255, 0.1);
          color: #0066FF;
        }

        .tolero-header__mobile-lang-option--active {
          font-weight: 500;
          color: #0066FF;
          background: rgba(0, 102, 255, 0.1);
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