import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import ValuesSection from '../components/ValuesSection';
import ManagementSection from '../components/ManagementSection';
import TeamGrid from '../components/TeamGrid';

const AboutPage = () => {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <ManagementSection />
      <TeamGrid />
    </>
  );
};

export default AboutPage;