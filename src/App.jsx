import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// IMPORT ADMIN PAGES
import AdminLogin from './admin/pages/AdminLogin';
import AdminDashboard from './admin/pages/AdminDashboard';
import AdminContacts from './admin/pages/AdminContacts';
import AdminAppointments from './admin/pages/AdminAppointments';
import AdminCalculator from './admin/pages/AdminCalculator';
import AdminSettings from './admin/pages/AdminSettings'; // ADD THIS IMPORT

import PrivateRoute from './admin/components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<><Navbar /><main><LandingPage /></main><Footer /></>} />
          <Route path="/about" element={<><Navbar /><main><AboutPage /></main><Footer /></>} />
          <Route path="/career" element={<><Navbar /><main><CareerPage /></main><Footer /></>} />
          <Route path="/impressum" element={<><Navbar /><main><Impressum /></main><Footer /></>} />
          <Route path="/DataProtection" element={<><Navbar /><main><DataProtection /></main><Footer /></>} />
          
          {/* Solutions & Products Pages */}
          <Route path="/solutions" element={<><Navbar /><main><SolutionsPage /></main><Footer /></>} />
          <Route path="/products" element={<><Navbar /><main><ProductsPage /></main><Footer /></>} />
          
          {/* Appointment Page */}
          <Route path="/appointment" element={<><Navbar /><main><AppointmentPage /></main><Footer /></>} />
          
          {/* ADMIN ROUTES (No Navbar/Footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          } />
          <Route path="/admin/contacts" element={
            <PrivateRoute>
              <AdminContacts />
            </PrivateRoute>
          } />
          <Route path="/admin/appointments" element={
            <PrivateRoute>
              <AdminAppointments />
            </PrivateRoute>
          } />
          <Route path="/admin/calculator" element={
            <PrivateRoute>
              <AdminCalculator />
            </PrivateRoute>
          } />
          {/* ADD ADMIN SETTINGS ROUTE */}
          <Route path="/admin/settings" element={
            <PrivateRoute>
              <AdminSettings />
            </PrivateRoute>
          } />
          
          {/* 404 Page */}
          <Route path="*" element={
            <><Navbar /><main>
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
            </main><Footer /></>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;