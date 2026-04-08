import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { ServiceCard } from '../features/ServiceCard';
import { services } from '../../data/services';

export function ServicesPreview() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Professional Planning Services"
          subtitle="Our Expertise" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
