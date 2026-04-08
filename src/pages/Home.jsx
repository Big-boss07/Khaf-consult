import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Hero } from '../components/home/Hero';
import { ServicesPreview } from '../components/home/ServicesPreview';
import { FeaturedProjects } from '../components/home/FeaturedProjects';
import { TestimonialsPreview } from '../components/home/TestimonialsPreview';
import { CTASection } from '../components/home/CTASection';

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <TestimonialsPreview />
      <CTASection />
    </PageWrapper>
  );
}
