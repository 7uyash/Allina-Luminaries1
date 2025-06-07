import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { DeviceShowcase } from '@/components/DeviceShowcase';
import { ServicesGallery } from '@/components/ServicesGallery';
import { Metrics } from '@/components/Metrics';
import { ContactCard } from '@/components/ContactCard';

const Index = () => {
  return (
    <main className="min-h-screen w-full transition-colors duration-700">
      <Header />
      <Hero />
      <DeviceShowcase />
      <ServicesGallery />
      <Metrics />
      <ContactCard />
    </main>
  );
};

export default Index;
