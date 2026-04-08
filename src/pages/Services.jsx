import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ServicesList } from '../components/services/ServicesList';
import { CTASection } from '../components/home/CTASection';

export default function Services() {
  return (
    <PageWrapper>
      <div className="pt-24 bg-white">
        <div className="bg-brand-navy py-12 border-b border-brand-gold/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center mb-4">Our Services</h1>
            <p className="text-center text-gray-300 max-w-2xl mx-auto">Comprehensive town planning and development solutions tailored to meet regulatory standards and your unique vision.</p>
          </div>
        </div>
        <ServicesList />
        <CTASection />
      </div>
    </PageWrapper>
  );
}
