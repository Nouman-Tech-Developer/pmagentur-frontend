import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerPage from './pages/CareerPage';
import AboutPage from './pages/AboutPage';
import Impressum from './pages/Impressum';
import DataProtection from './pages/DataProtection';
// Import Solutions Pages
import AIPhoneAssistant from './pages/solutions/ai-phone-assistant';
import Chatbots from './pages/solutions/chatbots';
import EmailAutomation from './pages/solutions/email-automation';
import CustomerSupport from './pages/solutions/customer-support';
import WorkflowOptimization from './pages/solutions/workflow-optimization';
import Ecommerce from './pages/solutions/ecommerce';
import MedicalSolutions from './pages/solutions/medical';


// Import Products Pages
import AIPhoneAssistantPro from './pages/products/ai-phone-assistant-pro';
import ChatbotSuite from './pages/products/chatbot-suite';
import EmailAutomationTool from './pages/products/email-automation-tool';
import WorkflowAutomator from './pages/products/workflow-automator';
import ApiIntegrationHub from './pages/products/api-integration-hub';
import EnterpriseAISuite from './pages/products/enterprise-ai-suite';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <main>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/impressum" element={<Impressum />} />
<Route path="/DataProtection" element={<DataProtection />} />
            
            {/* Solutions Routes */}
            <Route path="/solutions/ai-phone-assistant" element={<AIPhoneAssistant />} />
            <Route path="/solutions/chatbots" element={<Chatbots />} />
            <Route path="/solutions/email-automation" element={<EmailAutomation />} />
            <Route path="/solutions/customer-support" element={<CustomerSupport />} />
            <Route path="/solutions/workflow-optimization" element={<WorkflowOptimization />} />
            <Route path="/solutions/ecommerce" element={<Ecommerce />} />
            <Route path="/solutions/medical" element={<MedicalSolutions />} />

            {/* Products Routes */}
            <Route path="/products/ai-phone-assistant-pro" element={<AIPhoneAssistantPro />} />
            <Route path="/products/chatbot-suite" element={<ChatbotSuite />} />
            <Route path="/products/email-automation-tool" element={<EmailAutomationTool />} />
            <Route path="/products/workflow-automator" element={<WorkflowAutomator />} />
            <Route path="/products/api-integration-hub" element={<ApiIntegrationHub />} />
            <Route path="/products/enterprise-ai-suite" element={<EnterpriseAISuite />} />
            
            {/* 404 Page */}
            <Route path="*" element={
              <div style={{
                minHeight: '60vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px'
              }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px', color: '#0066FF' }}>404</h1>
                <h2 style={{ fontSize: '24px', marginBottom: '16px', color: '#111827' }}>Page Not Found</h2>
                <p style={{ fontSize: '16px', color: '#6B7280', marginBottom: '30px' }}>
                  The page you are looking for doesn't exist or has been moved.
                </p>
                <a 
                  href="/" 
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#0066FF',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px'
                  }}
                >
                  Go Back Home
                </a>
              </div>
            } />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;