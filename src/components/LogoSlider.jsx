// components/LogoSlider.jsx
import React from 'react';

const LogoSlider = () => {
  const logos = [
    { id: 1, name: 'Client 1', logo: '/images/logo0.png' },
    { id: 2, name: 'Client 2', logo: '/images/logo1.png' },
    { id: 3, name: 'Client 3', logo: '/images/logo2.png' },
    { id: 4, name: 'Client 4', logo: '/images/logo3.png' },
    { id: 5, name: 'Client 5', logo: '/images/logo4.png' },
    { id: 6, name: 'Client 6', logo: '/images/logo5.png' },
    { id: 7, name: 'Client 7', logo: '/images/logo6.png' },
    { id: 8, name: 'Client 8', logo: '/images/logo7.png' },
    { id: 9, name: 'Client 9', logo: '/images/logo8.png' },
    { id: 10, name: 'Client 10', logo: '/images/logo9.png' },
  ];

  return (
    <>
      <section className="logo-slider-section">
        <div className="slider-wrapper">
          <div className="slider-container">
            <div className="logo-slider-track">
              {/* First set of logos */}
              {logos.map((logo) => (
                <div key={logo.id} className="logo-item">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="logo-image"
                    loading="lazy"
                  />
                </div>
              ))}
              
              {/* Duplicate for seamless loop */}
              {logos.map((logo) => (
                <div key={`dup-${logo.id}`} className="logo-item">
                  <img 
                    src={logo.logo} 
                    alt={logo.name}
                    className="logo-image"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .logo-slider-section {
          padding: 35px 0;
          background: #f8fafc;
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        
        .slider-wrapper {
          width: 100%;
          position: relative;
        }
        
        .slider-container {
          width: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .logo-slider-track {
          display: flex;
          animation: slide 30s linear infinite;
          width: max-content;
        }
        
        /* Padding changed from 10px 20px to 8px 16px */
        .logo-item {
          padding: 8px 16px; /* Changed to 8px 16px */
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px; /* Reduced height */
        }
        
        /* Image size reduced */
        .logo-image {
          max-width: 120px; /* Reduced from 150px */
          max-height: 60px; /* Reduced from 80px */
          width: auto;
          height: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        
        .logo-image:hover {
          filter: grayscale(0%);
          opacity: 1;
          transform: scale(1.05);
        }
        
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .slider-container:hover .logo-slider-track {
          animation-play-state: paused;
        }
        
        /* Gradient overlays */
        .logo-slider-section::before,
        .logo-slider-section::after {
          content: '';
          position: absolute;
          top: 0;
          width: 120px; /* Reduced width to match smaller images */
          height: 100%;
          z-index: 10;
          pointer-events: none;
        }
        
        .logo-slider-section::before {
          left: 0;
          background: linear-gradient(to right, #f8fafc 0%, rgba(248, 250, 252, 0.8) 60%, transparent 100%);
        }
        
        .logo-slider-section::after {
          right: 0;
          background: linear-gradient(to left, #f8fafc 0%, rgba(248, 250, 252, 0.8) 60%, transparent 100%);
        }
        
        /* Responsive styles */
        @media (max-width: 1024px) {
          .logo-slider-section {
            padding: 30px 0;
          }
          
          .logo-item {
            padding: 6px 14px;
            height: 70px;
          }
          
          .logo-image {
            max-width: 110px;
            max-height: 55px;
          }
          
          .logo-slider-section::before,
          .logo-slider-section::after {
            width: 100px;
          }
        }
        
        @media (max-width: 768px) {
          .logo-slider-section {
            padding: 25px 0;
          }
          
          .logo-item {
            padding: 5px 12px;
            height: 60px;
          }
          
          .logo-image {
            max-width: 100px;
            max-height: 50px;
          }
          
          .logo-slider-section::before,
          .logo-slider-section::after {
            width: 80px;
          }
        }
        
        @media (max-width: 480px) {
          .logo-slider-section {
            padding: 20px 0;
          }
          
          .logo-item {
            padding: 4px 10px;
            height: 50px;
          }
          
          .logo-image {
            max-width: 80px;
            max-height: 40px;
          }
          
          .logo-slider-section::before,
          .logo-slider-section::after {
            width: 60px;
          }
          
          .logo-slider-track {
            animation: slide 25s linear infinite;
          }
        }
      `}</style>
    </>
  );
};

export default LogoSlider;