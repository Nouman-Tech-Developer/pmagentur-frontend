// components/ServiceSection.jsx
import React from 'react';

const ServiceSection = () => {
  const services = [
    {
      id: 1,
      title: "AI & Data",
      description: "Integration of artificial intelligence for automation, data analysis and intelligent business processes.",
      imageSrc: "/images/AI.png",
      buttonText: "Learn more",
      buttonLink: "https://www.pmagentur.com/de/services/ki-integration/ki-agentur/?hsLang=en"
    },
    {
      id: 2,
      title: "E-Commerce",
      description: "Digital B2B e-commerce solutions that efficiently combine sales, marketing and purchasing.",
      imageSrc: "/images/E-Commerce.png",
      buttonText: "Learn more",
      buttonLink: "https://www.pmagentur.com/de/services/b2b-ecommerce-entwicklung/b2b-ecommerce-agentur/?hsLang=en"
    },
    {
      id: 3,
      title: "Software",
      description: "Individual software development that is geared towards your processes and creates future viability.",
      imageSrc: "/images/Software.png",
      buttonText: "Learn more",
      buttonLink: "https://www.pmagentur.com/de/services/softwareentwicklung/agentur/?hsLang=en"
    },
    {
      id: 4,
      title: "Digital Platforms",
      description: "Digital platforms for seamless customer experiences - from corporate websites to modern intranets.",
      imageSrc: "/images/Digital.png",
      buttonText: "Learn more",
      buttonLink: "https://www.pmagentur.com/de/services/plattformentwicklung/agentur/?hsLang=en"
    }
  ];

  return (
    <>
      <section className="module-service-card-list _module-service-card-list_cmi6t_736">
        <div className="organism-service-card-list _organism-service-card-list_1sdq3_31">
          {services.map((service) => (
            <div key={service.id} className="molecule-service-card _molecule-service-card_o4lcf_31">
              <div className="_image_o4lcf_53">
                <img 
                  src={service.imageSrc} 
                  alt={service.title}
                  loading="lazy"
                />
              </div>
              <div className="_textContainer_o4lcf_82">
                <div className="_title_o4lcf_91">{service.title}</div>
                <div className="_description_o4lcf_115">
                  <div className="safe-html">
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
              <div className="_buttonWrapper_o4lcf_150">
                <a 
                  className="atom-button" 
                  href={service.buttonLink}
                  tabIndex="0"
                  aria-disabled="false"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {service.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx="true">{`
        /* Import fonts */
        @font-face {
          font-family: Okima;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Okima-Ink-130-C6F5kR7g.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Bold;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Bold-Bd5kKQ_U.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Medium;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Medium-ByP-Zb-9.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Regular;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Regular-CPM9dct4.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Light;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Light-IqwJ_ZjS.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        /* Module Container */
        .module-service-card-list {
          padding: 2.1875rem 1.5rem; /* 35px top-bottom, 24px left-right */
          width: 100%;
          max-width: 75rem; /* 1200px */
          margin: 0 auto;
          background-color: #fff;
          box-sizing: border-box;
        }
        
        /* Tablet */
        @media only screen and (min-width: 768px) {
          .module-service-card-list {
            padding: 2.1875rem 3.75rem; /* 35px top-bottom, 60px left-right */
          }
        }
        
        /* Desktop */
        @media only screen and (min-width: 1024px) {
          .module-service-card-list {
            padding: 2.1875rem 3.75rem; /* 35px top-bottom, 60px left-right */
          }
        }
        
        /* Large Desktop */
        @media only screen and (min-width: 1440px) {
          .module-service-card-list {
            padding: 2.1875rem 0rem; /* 35px top-bottom, 0 left-right */
            max-width: 75rem; /* Center with max-width */
          }
        }
        
        /* Organism Container */
        .organism-service-card-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: stretch;
          width: 100%;
        }
        
        /* Tablet - Gap between cards */
        @media only screen and (min-width: 768px) {
          .organism-service-card-list {
            gap: 1.5rem; /* 24px gap */
          }
        }
        
        /* Individual Card - Full width on mobile */
        .organism-service-card-list .molecule-service-card {
          width: 100%;
          margin-bottom: 2rem; /* Space between stacked cards on mobile */
        }
        
        /* Tablet - 2 cards per row */
        @media only screen and (min-width: 768px) {
          .organism-service-card-list .molecule-service-card {
            width: calc(50% - 0.75rem); /* 50% minus half of gap */
            margin-bottom: 0;
          }
        }
        
        /* Desktop - 4 cards per row */
        @media only screen and (min-width: 1024px) {
          .organism-service-card-list .molecule-service-card {
            width: calc(25% - 1.125rem); /* 25% minus three-quarters of gap */
          }
        }
        
        /* Individual Card Styling */
        .molecule-service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          background: #fff;
          border-radius: 0;
          box-shadow: none;
          width: 100%;
          padding: 0;
          overflow: hidden;
        }
        
        /* Image Container */
        ._image_o4lcf_53 {
          width: 100%;
          height: 20.4375rem; /* ~327px */
          object-fit: cover;
          border-radius: 1.5rem; /* 24px */
          overflow: hidden;
          background: #eee;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /* Tablet Image Height */
        @media only screen and (min-width: 768px) {
          ._image_o4lcf_53 {
            height: 19.5rem; /* ~312px */
          }
        }
        
        /* Desktop Image Height */
        @media only screen and (min-width: 1024px) {
          ._image_o4lcf_53 {
            height: 17.5rem; /* ~280px */
          }
        }
        
        /* Image Styling */
        ._image_o4lcf_53 img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 1.5rem; /* 24px */
        }
        
        /* Text Container */
        ._textContainer_o4lcf_82 {
          display: flex;
          flex-direction: column;
          width: 100%;
          padding: 0;
          flex: 1;
          min-height: 0;
        }
        
        /* Title Styling */
        ._title_o4lcf_91 {
          margin: 0;
          padding-top: 2rem; /* 32px */
          width: 100%;
          font-family: Satoshi Medium;
          font-size: 1.625rem; /* 26px */
          line-height: 1.2; /* 120% */
          font-weight: 500;
          color: #000000;
          text-transform: none;
          letter-spacing: 0%;
        }
        
        /* Desktop Title */
        @media only screen and (min-width: 1024px) {
          ._title_o4lcf_91 {
            font-size: 1.875rem; /* 30px */
            line-height: 1.4; /* 140% */
          }
        }
        
        /* Description Styling */
        ._description_o4lcf_115 {
          font-family: Satoshi Regular;
          font-size: 1rem; /* 16px */
          line-height: 1.4; /* 140% */
          font-weight: 400;
          color: #444444;
          max-width: 40em !important;
          margin: 0;
          width: 100%;
          padding-top: 1rem; /* 16px */
        }
        
        /* Desktop Description */
        @media only screen and (min-width: 1024px) {
          ._description_o4lcf_115 {
            font-size: 1.125rem; /* 18px */
            line-height: 1.4; /* 140% */
            max-width: 42em !important;
          }
        }
        
        /* Button Wrapper - FULL WIDTH */
        ._buttonWrapper_o4lcf_150 {
          margin-top: auto;
          width: 100%;
          display: flex;
          justify-content: center;
          flex-shrink: 0;
          padding-top: 2rem; /* 32px */
          padding-bottom: 2rem; /* 32px */
        }
        
        /* Tablet Button Spacing */
        @media only screen and (min-width: 768px) {
          ._buttonWrapper_o4lcf_150 {
            padding-bottom: 1.5rem; /* 24px */
          }
        }
        
        /* Button Styles - FULL WIDTH of card */
        .atom-button {
          display: block; /* Block element for full width */
          width: 100%; /* Full width of container */
          padding: 8px 24px; /* Vertical 14px, horizontal 24px */
          font-family: Satoshi Regular;
          font-size: 1rem; /* 16px */
          line-height: 1.4; /* 140% */
          font-weight: 400;
          text-align: center;
          text-decoration: none;
          border-radius: 25px;
         
          background-color: #FFFFFF; /* White background */
          color: #FE5631; /* Orange text */
          cursor: pointer;
          transition: all 0.3s ease;
          box-sizing: border-box; /* Include padding in width calculation */
        }
        
        /* Button Hover - Orange Background, White Text */
        .atom-button:hover {
          background-color: #FE5631; /* Orange background */
          color: #FFFFFF; /* White text */
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(254, 86, 49, 0.2);
        }
        
        /* Safe HTML */
        .safe-html {
          display: block;
        }
        
        .safe-html p {
          margin: 0;
        }
      `}</style>
    </>
  );
};

export default ServiceSection;