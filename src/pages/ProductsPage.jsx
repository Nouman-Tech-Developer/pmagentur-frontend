import React from 'react';
import { useTranslation } from 'react-i18next';
import ProductsHero from '../components/products/ProductsHero';
import ProductsGrid from '../components/products/ProductsGrid';

const ProductsPage = () => {
  const { t } = useTranslation();
  
  const products = [
    {
      id: 1,
      title: t('products.grid.aiPhonePro.title', 'AI Phone Assistant Pro'),
      description: t('products.grid.aiPhonePro.description', 'Professioneller KI-Telefonassistent mit 24/7 Verfügbarkeit, natürlicher Gesprächsführung und Praxissoftware-Integration.'),
      image: 'products/ai-phone-pro.png',
      badge: t('products.grid.aiPhonePro.badge', 'Popular'),
      features: [
        {
          point: t('products.grid.aiPhonePro.feature1.point', 'Praxissoftware-Integration'),
          paragraph: t('products.grid.aiPhonePro.feature1.paragraph', 'Nahtlose Integration mit allen gängigen Praxisverwaltungssystemen wie Medistar, Tomedo und mehr.')
        },
        {
          point: t('products.grid.aiPhonePro.feature2.point', 'Mehrsprachiger Support'),
          paragraph: t('products.grid.aiPhonePro.feature2.paragraph', 'Unterstützt Deutsch, Englisch, Türkisch und weitere Sprachen für Ihre Patienten.')
        },
        {
          point: t('products.grid.aiPhonePro.feature3.point', 'Anrufaufzeichnung & Transkription'),
          paragraph: t('products.grid.aiPhonePro.feature3.paragraph', 'Alle Gespräche werden automatisch transkribiert und in der Patientenakte gespeichert.')
        }
      ],
      link: '/products/ai-phone-assistant-pro'
    },
    {
      id: 2,
      title: t('products.grid.chatbotSuite.title', 'Medical Chatbot Suite'),
      description: t('products.grid.chatbotSuite.description', 'Intelligente Chatbots für Website, WhatsApp und Messenger mit medizinischer Wissensdatenbank.'),
      image: 'products/chatbot-suite.png',
      features: [
        {
          point: t('products.grid.chatbotSuite.feature1.point', 'Medizinische Terminologie'),
          paragraph: t('products.grid.chatbotSuite.feature1.paragraph', 'Versteht medizinische Fachbegriffe und kann präzise auf Patientenfragen antworten.')
        },
        {
          point: t('products.grid.chatbotSuite.feature2.point', 'Symptom-Check Integration'),
          paragraph: t('products.grid.chatbotSuite.feature2.paragraph', 'Erste Einschätzung von Symptomen und Weiterleitung an den passenden Fachbereich.')
        },
        {
          point: t('products.grid.chatbotSuite.feature3.point', 'Terminvereinbarung'),
          paragraph: t('products.grid.chatbotSuite.feature3.paragraph', 'Patienten können direkt über den Chatbot Termine buchen, stornieren oder verschieben.')
        }
      ],
      link: '/products/chatbot-suite'
    },
    {
      id: 3,
      title: t('products.grid.emailAutomation.title', 'Medical Email Automation'),
      description: t('products.grid.emailAutomation.description', 'Leistungsstarke E-Mail-Automatisierung für Arztpraxen mit Dokumentenverarbeitung.'),
      image: 'products/email-tool.png',
      badge: t('products.grid.emailAutomation.badge', 'New'),
      features: [
        {
          point: t('products.grid.emailAutomation.feature1.point', 'DSGVO-konforme Verarbeitung'),
          paragraph: t('products.grid.emailAutomation.feature1.paragraph', 'Alle Patientendaten werden gemäß DSGVO verschlüsselt und sicher verarbeitet.')
        },
        {
          point: t('products.grid.emailAutomation.feature2.point', 'Dokumenten-OCR'),
          paragraph: t('products.grid.emailAutomation.feature2.paragraph', 'Automatische Texterkennung und Verarbeitung von Überweisungen und Laborbefunden.')
        },
        {
          point: t('products.grid.emailAutomation.feature3.point', 'Intelligente Antwortvorschläge'),
          paragraph: t('products.grid.emailAutomation.feature3.paragraph', 'KI-generierte Antwortvorschläge für häufige Patientenanfragen.')
        }
      ],
      link: '/products/email-automation-tool'
    },
    {
      id: 4,
      title: t('products.grid.workflowAutomator.title', 'Practice Workflow Automator'),
      description: t('products.grid.workflowAutomator.description', 'Automatisieren Sie komplexe Arbeitsabläufe und reduzieren Sie den Arbeitsaufwand des Teams um bis zu 70%.'),
      image: 'products/workflow-automator.png',
      features: [
        {
          point: t('products.grid.workflowAutomator.feature1.point', 'Patientenregistrierung'),
          paragraph: t('products.grid.workflowAutomator.feature1.paragraph', 'Neue Patienten können sich online registrieren, alle Daten werden automatisch ins System übernommen.')
        },
        {
          point: t('products.grid.workflowAutomator.feature2.point', 'Versicherungsprüfung'),
          paragraph: t('products.grid.workflowAutomator.feature2.paragraph', 'Automatische Prüfung der Krankenversicherung und Einholung von Kostenzusagen.')
        },
        {
          point: t('products.grid.workflowAutomator.feature3.point', 'Abrechnungsautomatisierung'),
          paragraph: t('products.grid.workflowAutomator.feature3.paragraph', 'Automatische Generierung von Rechnungen und Abrechnungen mit den Krankenkassen.')
        }
      ],
      link: '/products/workflow-automator'
    },
    {
      id: 5,
      title: t('products.grid.apiHub.title', 'Medical API Integration Hub'),
      description: t('products.grid.apiHub.description', 'Nahtlose Integration mit über 500+ medizinischen Anwendungen und Praxisverwaltungssystemen.'),
      image: 'products/api-hub.png',
      features: [
        {
          point: t('products.grid.apiHub.feature1.point', 'PMS-Integration'),
          paragraph: t('products.grid.apiHub.feature1.paragraph', 'Anbindung an alle gängigen Praxisverwaltungssysteme wie Medistar, Tomedo, Altea und mehr.')
        },
        {
          point: t('products.grid.apiHub.feature2.point', 'E-Rezept API'),
          paragraph: t('products.grid.apiHub.feature2.paragraph', 'Direkte Anbindung an die Telematikinfrastruktur für elektronische Rezepte.')
        },
        {
          point: t('products.grid.apiHub.feature3.point', 'Laborergebnisse'),
          paragraph: t('products.grid.apiHub.feature3.paragraph', 'Automatischer Import von Laborbefunden direkt in die Patientenakte.')
        }
      ],
      link: '/products/api-integration-hub'
    },
    {
      id: 6,
      title: t('products.grid.enterpriseSuite.title', 'Enterprise Medical AI Suite'),
      description: t('products.grid.enterpriseSuite.description', 'Komplette KI-Plattform für große Arztpraxen und Klinikgruppen.'),
      image: 'products/enterprise-suite.png',
      badge: t('products.grid.enterpriseSuite.badge', 'Enterprise'),
      features: [
        {
          point: t('products.grid.enterpriseSuite.feature1.point', 'Multi-Praxis Support'),
          paragraph: t('products.grid.enterpriseSuite.feature1.paragraph', 'Zentrale Verwaltung mehrerer Standorte mit einheitlichen Prozessen und zentralem Dashboard.')
        },
        {
          point: t('products.grid.enterpriseSuite.feature2.point', 'Zentralisierte Analysen'),
          paragraph: t('products.grid.enterpriseSuite.feature2.paragraph', 'Umfassende Berichte und Analysen über alle Praxen hinweg für optimierte Entscheidungen.')
        },
        {
          point: t('products.grid.enterpriseSuite.feature3.point', 'Individuelle KI-Modelle'),
          paragraph: t('products.grid.enterpriseSuite.feature3.paragraph', 'Trainierte KI-Modelle, die auf Ihre spezifischen Praxisabläufe zugeschnitten sind.')
        }
      ],
      link: '/products/enterprise-ai-suite'
    }
  ];

  return (
    <>
      <ProductsHero />
      <ProductsGrid products={products} />
    </>
  );
};

export default ProductsPage;