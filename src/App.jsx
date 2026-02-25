import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerPage from './pages/CareerPage';
import AboutPage from './pages/AboutPage';
import Impressum from './pages/Impressum';
import DataProtection from './pages/DataProtection';
import SavingsCalculator from './components/SavingsCalculator';

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
            
            {/* Calculator */}
            <Route path="/calculator" element={<SavingsCalculator />} />
            
            {/* Legal Pages */}
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/DataProtection" element={<DataProtection />} />
            
            {/* 404 Page - Black/White theme */}
            <Route path="*" element={
              <div style={{
                minHeight: '70vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '40px 20px',
                background: '#FFFFFF'
              }}>
                <h1 style={{ 
                  fontSize: '72px', 
                  marginBottom: '20px', 
                  color: '#000000',
                  fontWeight: '700'
                }}>404</h1>
                <h2 style={{ 
                  fontSize: '28px', 
                  marginBottom: '16px', 
                  color: '#000000',
                  fontWeight: '600'
                }}>Page Not Found</h2>
                <p style={{ 
                  fontSize: '16px', 
                  color: '#6B7280', 
                  marginBottom: '30px',
                  maxWidth: '500px'
                }}>
                  The page you are looking for doesn't exist or has been moved.
                </p>
                <Link 
                  to="/" 
                  style={{
                    padding: '12px 32px',
                    backgroundColor: '#000000',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#333333';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#000000';
                  }}
                >
                  Go Back Home
                </Link>
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