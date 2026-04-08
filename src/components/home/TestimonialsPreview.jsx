import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';
import { TestimonialCard } from '../features/TestimonialCard';
import { testimonials } from '../../data/testimonials';

export function TestimonialsPreview() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <Container>
        <SectionTitle 
          title="What Our Clients Say"
          subtitle="Testimonials" 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </section>
  );
}
