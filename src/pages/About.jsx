import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { AboutIntro } from '../components/about/AboutIntro';
import { Credentials } from '../components/about/Credentials';
import { Experience } from '../components/about/Experience';
import { CTASection } from '../components/home/CTASection';

export default function About() {
  return (
    <PageWrapper>
      <div className="pt-24 bg-white">
        <div className="bg-brand-navy py-12 border-b border-brand-gold/20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">About Us</h1>
          </div>
        </div>
        <AboutIntro />
        <Credentials />
        <Experience />
        <CTASection />
      </div>
    </PageWrapper>
  );
}
