import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerPage from './pages/CareerPage';
import AboutPage from './pages/AboutPage';
import Impressum from './pages/Impressum';
import DataProtection from './pages/DataProtection';
import SolutionsPage from './pages/SolutionsPage';
import ProductsPage from './pages/ProductsPage';
import AppointmentPage from './pages/AppointmentPage';

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminContacts from './admin/pages/AdminContacts';
import AdminAppointments from './admin/pages/AdminAppointments';
import AdminCalculator from './admin/pages/AdminCalculator';
import AdminSettings from './admin/pages/AdminSettings';
import AdminImpressum from './admin/pages/AdminImpressum';
import AdminDataProtection from './admin/pages/AdminDataProtection';

import PrivateRoute from './admin/components/PrivateRoute';

// ✅ URL CLEANUP COMPONENT
function URLFixer({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    // Check for invisible character U+2060 (Word Joiner)
    if (currentPath.includes('%E2%81%A0') || currentPath.includes('\u2060')) {
      const cleanPath = currentPath.replace(/%E2%81%A0|\u2060/g, '');
      // Preserve search params and hash
      const cleanUrl = cleanPath + location.search + location.hash;
      navigate(cleanUrl, { replace: true });
    }
  }, [location.pathname, location.search, location.hash, navigate]);

  return children;
}

function AppContent() {
  return (
    <div className="App">
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<><Navbar /><main><LandingPage /></main><Footer /></>} />
        <Route path="/about" element={<><Navbar /><main><AboutPage /></main><Footer /></>} />
        <Route path="/career" element={<><Navbar /><main><CareerPage /></main><Footer /></>} />
        <Route path="/impressum" element={<><Navbar /><main><Impressum /></main><Footer /></>} />
        <Route path="/DataProtection" element={<><Navbar /><main><DataProtection /></main><Footer /></>} />
        
        <Route path="/solutions" element={<><Navbar /><main><SolutionsPage /></main><Footer /></>} />
        <Route path="/products" element={<><Navbar /><main><ProductsPage /></main><Footer /></>} />
        <Route path="/appointment" element={<><Navbar /><main><AppointmentPage /></main><Footer /></>} />
        
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
        <Route path="/admin/contacts" element={<PrivateRoute><AdminContacts /></PrivateRoute>} />
        <Route path="/admin/appointments" element={<PrivateRoute><AdminAppointments /></PrivateRoute>} />
        <Route path="/admin/calculator" element={<PrivateRoute><AdminCalculator /></PrivateRoute>} />
        <Route path="/admin/settings" element={<PrivateRoute><AdminSettings /></PrivateRoute>} />
        <Route path="/admin/impressum" element={<PrivateRoute><AdminImpressum /></PrivateRoute>} />
        <Route path="/admin/dataprotection" element={<PrivateRoute><AdminDataProtection /></PrivateRoute>} />
        
        {/* 404 Page */}
        <Route path="*" element={<>
          <Navbar />
          <main>
            <div style={{ 
              minHeight: '60vh', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center',
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <h1 style={{ fontSize: '72px', margin: 0, color: '#000' }}>404</h1>
              <h2 style={{ fontSize: '24px', color: '#374151', margin: '16px 0' }}>Page Not Found</h2>
              <p style={{ color: '#6B7280', marginBottom: '24px' }}>The page you are looking for doesn't exist or has been moved.</p>
              <a href="/" style={{ 
                display: 'inline-block',
                padding: '12px 32px',
                background: '#000',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '40px',
                fontWeight: '500'
              }}>Go Back Home</a>
            </div>
          </main>
          <Footer />
        </>} />
      </Routes>
    </div>
  );
}

// ✅ Main App component with URLFixer wrapper
function App() {
  return (
    <Router>
      <URLFixer>
        <AppContent />
      </URLFixer>
    </Router>
  );
}

export default App;