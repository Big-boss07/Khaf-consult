import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ContactInfo } from '../components/contact/ContactInfo';
import { MapSection } from '../components/contact/MapSection';
import { Container } from '../components/layout/Container';

export default function Contact() {
  return (
    <PageWrapper>
      <div className="pt-24 bg-gray-50">
        <div className="bg-brand-navy py-20 pb-32 border-b border-brand-gold/20 relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/blueprint.png')] opacity-10"></div>
          <Container className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Contact Us</h1>
            <p className="text-center text-gray-300 max-w-xl mx-auto">We're here to help you navigate complex town planning processes and bring your vision to reality.</p>
          </Container>
        </div>
        
        <Container>
           <ContactInfo />
        </Container>

        <MapSection />
      </div>
    </PageWrapper>
  );
}
