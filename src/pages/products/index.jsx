import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      title: 'AI Phone Assistant Pro',
      path: '/products/ai-phone-assistant-pro',
      description: 'Professioneller KI-Telefonassistent',
      badge: 'Beliebt',
      icon: '📞'
    },
    {
      id: 2,
      title: 'Smart Chatbot Suite',
      path: '/products/chatbot-suite',
      description: 'Intelligente Chatbots für alle Kanäle',
      icon: '💬'
    },
    {
      id: 3,
      title: 'Email Automation Tool',
      path: '/products/email-automation-tool',
      description: 'Leistungsstarke E-Mail-Automatisierung',
      badge: 'Neu',
      icon: '📧'
    },
    {
      id: 4,
      title: 'Workflow Automator',
      path: '/products/workflow-automator',
      description: 'Automatisieren Sie Arbeitsabläufe',
      icon: '⚙️'
    },
    {
      id: 5,
      title: 'API Integration Hub',
      path: '/products/api-integration-hub',
      description: 'Nahtlose Integration mit 500+ Apps',
      icon: '🔌'
    },
    {
      id: 6,
      title: 'Enterprise AI Suite',
      path: '/products/enterprise-ai-suite',
      description: 'Komplette KI-Plattform für Unternehmen',
      badge: 'Enterprise',
      icon: '🏢'
    }
  ];

  return (
    <div style={{ padding: '100px 50px' }}>
      <h1>Unsere Produkte</h1>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '30px',
        marginTop: '50px'
      }}>
        {products.map(product => (
          <Link 
            key={product.id}
            to={product.path}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              padding: '30px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              transition: 'all 0.3s',
              position: 'relative'
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
            {product.badge && (
              <span style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: product.badge === 'Neu' ? '#28a745' : '#ffc107',
                color: '#000',
                padding: '3px 8px',
                borderRadius: '12px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {product.badge}
              </span>
            )}
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>{product.icon}</div>
            <h3>{product.title}</h3>
            <p style={{ color: '#666' }}>{product.description}</p>
            <span style={{ color: '#007bff' }}>Mehr erfahren →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;