import React from 'react';
import { useTranslation } from 'react-i18next';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsGrid from '../components/solutions/SolutionsGrid';
// import AppointmentBooking from '../components/appointment/AppointmentBooking';

const SolutionsPage = () => {
  const { t } = useTranslation();
  
  // Solutions data passed to grid component with translations
  const solutions = [
    {
      id: 1,
      title: t('solutions.grid.aiPhone.title', 'AI Phone Assistant für Arztpraxen'),
      description: t('solutions.grid.aiPhone.description', 'Automatisiert eingehende Anrufe, Terminvereinbarungen und Patientenanfragen rund um die Uhr.'),
      icon: '🏥',
      image: '/solutions/ai-phone-assistant.png',
      features: [
        {
          point: t('solutions.grid.aiPhone.feature1.point', 'Automatische Terminvereinbarung'),
          paragraph: t('solutions.grid.aiPhone.feature1.paragraph', 'Patienten können Termine rund um die Uhr buchen, stornieren oder verschieben - ohne Warteschleife.')
        },
        {
          point: t('solutions.grid.aiPhone.feature2.point', 'Rezeptanfragen verarbeiten'),
          paragraph: t('solutions.grid.aiPhone.feature2.paragraph', 'Wiederholungsrezepte werden automatisch aufgenommen und an die Praxis weitergeleitet.')
        },
        {
          point: t('solutions.grid.aiPhone.feature3.point', 'Krankmeldungen erfassen'),
          paragraph: t('solutions.grid.aiPhone.feature3.paragraph', 'Patienten können sich telefonisch krankmelden, relevante Informationen werden strukturiert erfasst.')
        }
      ],
      link: '/solutions/ai-phone-assistant'
    },
    {
      id: 2,
      title: t('solutions.grid.chatbot.title', 'Patienten-Chatbot'),
      description: t('solutions.grid.chatbot.description', 'Intelligenter Chatbot für Website und WhatsApp zur Beantwortung von Patientenfragen.'),
      icon: '💬',
      image: 'solutions/patient-chatbot.png',
      features: [
        {
          point: t('solutions.grid.chatbot.feature1.point', '24/7 Patientenanfragen'),
          paragraph: t('solutions.grid.chatbot.feature1.paragraph', 'Beantwortet häufige Fragen zu Öffnungszeiten, Leistungen und Wegbeschreibungen automatisch.')
        },
        {
          point: t('solutions.grid.chatbot.feature2.point', 'Symptom-Check Integration'),
          paragraph: t('solutions.grid.chatbot.feature2.paragraph', 'Erste Einschätzung von Symptomen und Weiterleitung an den passenden Fachbereich.')
        },
        {
          point: t('solutions.grid.chatbot.feature3.point', 'Nahtlose Übergabe'),
          paragraph: t('solutions.grid.chatbot.feature3.paragraph', 'Bei komplexen Anliegen wird der Chat nahtlos an das Praxispersonal übergeben.')
        }
      ],
      link: '/solutions/chatbots'
    },
    {
      id: 3,
      title: t('solutions.grid.email.title', 'E-Mail & Dokumenten-Automatisierung'),
      description: t('solutions.grid.email.description', 'Automatisierte Verarbeitung von E-Mails, Überweisungen und Laborbefunden.'),
      icon: '📧',
      image: 'solutions/email-automation.png',
      features: [
        {
          point: t('solutions.grid.email.feature1.point', 'Automatische E-Mail-Klassifizierung'),
          paragraph: t('solutions.grid.email.feature1.paragraph', 'Eingehende E-Mails werden automatisch sortiert und priorisiert.')
        },
        {
          point: t('solutions.grid.email.feature2.point', 'Überweisungs-Management'),
          paragraph: t('solutions.grid.email.feature2.paragraph', 'Überweisungsanfragen werden strukturiert erfasst und an die zuständigen Stellen weitergeleitet.')
        },
        {
          point: t('solutions.grid.email.feature3.point', 'Laborbefund-Verarbeitung'),
          paragraph: t('solutions.grid.email.feature3.paragraph', 'Eingehende Laborbefunde werden automatisch in die Patientenakte eingepflegt.')
        }
      ],
      link: '/solutions/email-automation'
    },
    {
      id: 4,
      title: t('solutions.grid.workflow.title', 'Praxis-Workflow Optimierung'),
      description: t('solutions.grid.workflow.description', 'Optimierung interner Prozesse und Entlastung des Praxispersonals.'),
      icon: '⚙️',
      image: 'solutions/workflow-automation.png',
      features: [
        {
          point: t('solutions.grid.workflow.feature1.point', 'Patientenregistrierung'),
          paragraph: t('solutions.grid.workflow.feature1.paragraph', 'Neue Patienten können sich online registrieren, die Daten werden automatisch ins System übernommen.')
        },
        {
          point: t('solutions.grid.workflow.feature2.point', 'Aufgaben-Automatisierung'),
          paragraph: t('solutions.grid.workflow.feature2.paragraph', 'Wiederkehrende administrative Aufgaben werden automatisch erledigt.')
        },
        {
          point: t('solutions.grid.workflow.feature3.point', 'Berichtserstellung'),
          paragraph: t('solutions.grid.workflow.feature3.paragraph', 'Automatische Generierung von Praxisberichten und Statistiken.')
        }
      ],
      link: '/solutions/workflow-optimization'
    }
  ];

  return (
    <>
      <SolutionsHero />
      <SolutionsGrid solutions={solutions} />
      {/* <AppointmentBooking /> */}
    </>
  );
};

export default SolutionsPage;