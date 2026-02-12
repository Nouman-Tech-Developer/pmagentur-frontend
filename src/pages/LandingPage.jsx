import React from 'react';
import HeroSection from '../components/HeroSection';
// import LogoSlider from '../components/LogoSlider';
import FeatureSection from '../components/FeatureSection';
import ServiceSection from '../components/ServiceSection';
// import TestimonialCard from '../components/TestimonialCard';
// import CaseStudies from '../components/CaseStudies';
import TextHalfImage from '../components/TextHalfImage';
// import VideoText from '../components/VideoText';
// import StatsSection from '../components/StatsSection';
import ContactForm from '../components/ContactForm';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <HeroSection />
      {/* <LogoSlider /> */}
      <FeatureSection />
      <ServiceSection />
      {/* <TestimonialCard /> */}
      {/* <CaseStudies /> */}
      <TextHalfImage />
      {/* <VideoText /> */}
      {/* <StatsSection /> */}
      <ContactForm />
      
      {/* CSS for LandingPage specific styles */}
      <style jsx="true">{`
        /* Import fonts */
        @font-face {
          font-family: Okima;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Okima-Ink-130-C6F5kR7g.woff2) format("woff2");
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
          font-family: Satoshi Medium;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Medium-ByP-Zb-9.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }
        
        @font-face {
          font-family: Satoshi Bold;
          src: url(https://49192415.fs1.hubspotusercontent-eu1.net/hubfs/49192415/raw_assets/pm-agentur-website/408/js_client_assets/assets/Satoshi-Bold-Bd5kKQ_U.woff2) format("woff2");
          font-weight: 400;
          font-style: normal;
        }

        /* Reset margin/padding */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .landing-page {
          font-family: 'Satoshi Regular', -apple-system, BlinkMacSystemFont, sans-serif;
          overflow-x: hidden;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;