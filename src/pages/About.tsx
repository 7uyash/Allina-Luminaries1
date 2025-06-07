import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { AboutHero } from '@/components/AboutHero';
import { MeetOurTeam } from '@/components/MeetOurTeam';
import { OurValues } from '@/components/OurValues';
import { VisionMissionSection } from '@/components/VisionMissionSection';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#E7DED7] overflow-x-hidden">
      <Header />
      <AboutHero />
      
      <VisionMissionSection />

      <MeetOurTeam />
      <OurValues />
      
      <Footer />
    </div>
  );
};

export default About;
