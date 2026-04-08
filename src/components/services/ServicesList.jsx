import React, { useState } from 'react';
import { Container } from '../layout/Container';
import { services } from '../../data/services';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { Modal } from '../ui/Modal';
import { BookingForm } from '../features/BookingForm';

export function ServicesList() {
  const [bookingService, setBookingService] = useState(null);

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="space-y-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col gap-12 lg:gap-20 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                {/* Visual Side */}
                <div className="w-full md:w-1/2">
                   <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group bg-brand-navy flex items-center justify-center p-12">
                     <div className="absolute inset-0 bg-brand-navy opacity-90" />
                     {/* Decorative background pattern */}
                     <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-white/0 to-transparent" />
                     
                     <Icon className="w-32 h-32 text-brand-gold relative z-10 transform group-hover:scale-110 transition-transform duration-500" />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-navy/5 text-brand-navy mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-navy mb-6">
                    {service.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg" 
                    className="gap-2"
                    onClick={() => setBookingService(service.id)}
                  >
                    Request this Service
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <Modal 
        isOpen={!!bookingService} 
        onClose={() => setBookingService(null)}
        title="Request Consultation"
      >
        <BookingForm 
          serviceId={bookingService} 
          onClose={() => setBookingService(null)} 
        />
      </Modal>
    </section>
  );
}
