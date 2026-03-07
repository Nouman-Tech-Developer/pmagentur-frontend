import React from 'react';
import { Link } from 'react-router-dom';

const SolutionsPage = () => {
  const solutions = [
    {
      id: 1,
      title: 'AI Phone Assistant',
      path: '/solutions/ai-phone-assistant',
      description: 'Intelligenter Telefonassistent mit KI',
      icon: '📞'
    },
    {
      id: 2,
      title: 'Chatbots',
      path: '/solutions/chatbots',
      description: 'KI-gestützte Chatbots für alle Kanäle',
      icon: '💬'
    },
    {
      id: 3,
      title: 'Email Automation',
      path: '/solutions/email-automation',
      description: 'Automatische E-Mail-Verarbeitung',
      icon: '📧'
    },
    {
      id: 4,
      title: 'Customer Support',
      path: '/solutions/customer-support',
      description: '24/7 Kundenbetreuung mit KI',
      icon: '🤝'
    },
    {
      id: 5,
      title: 'Workflow Optimization',
      path: '/solutions/workflow-optimization',
      description: 'Automatisierte Arbeitsabläufe',
      icon: '⚡'
    },
    {
      id: 6,
      title: 'E-Commerce Lösungen',
      path: '/solutions/ecommerce',
      description: 'KI für Online-Shops',
      icon: '🛒'
    }
  ];

  return (
    <div style={{ padding: '100px 50px' }}>
      <h1>Unsere Lösungen</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '30px',
        marginTop: '50px'
      }}>
        {solutions.map(solution => (
          <Link 
            key={solution.id}
            to={solution.path}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              padding: '30px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
              e.currentTarget.style.transform = 'translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{solution.icon}</div>
            <h3>{solution.title}</h3>
            <p style={{ color: '#666' }}>{solution.description}</p>
            <span style={{ color: '#007bff' }}>Mehr erfahren →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;