import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import CareerPage from './pages/CareerPage';
import AboutPage from './pages/AboutPage'; // Import AboutPage

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar - Har page pe show hoga */}
        <Navbar />
        
        <main>
          <Routes>
            {/* Home Page */}
            <Route path="/" element={<LandingPage />} />
            
            {/* About Page - NEW */}
            <Route path="/about" element={<AboutPage />} />
            
            {/* Career Page */}
            <Route path="/career" element={<CareerPage />} />
            
            {/* Future pages ke liye routes */}
            {/* <Route path="/services" element={<ServicesPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            
            {/* 404 Page - Agar koi route match nahi karta */}
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
        
        {/* Footer - Har page pe show hoga */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;