import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Container } from '../layout/Container';

export function AboutIntro() {
  return (
    <section className="py-24 bg-white relative">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image Side */}
        <div className="relative">
          <div className="absolute -inset-4 bg-brand-navy/5 rounded-[32px] transform -rotate-3" />
          <div className="absolute -inset-4 bg-brand-gold/10 rounded-[32px] transform rotate-3" />
          <img 
            src="/src/assets/about_bg_1775633543801.png" 
            alt="Tpl. Olajide Marufu Akintunde" 
            className="relative z-10 w-full h-[600px] object-cover rounded-2xl shadow-2xl"
          />
          
          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 z-20 bg-white p-6 rounded-xl shadow-xl max-w-[200px] animate-bounce-slow">
            <div className="text-4xl font-bold text-brand-navy mb-1">Top</div>
            <div className="text-sm font-semibold text-gray-600">Rated Town Planning Consultant</div>
          </div>
        </div>

        {/* Text Side */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 text-brand-navy font-bold text-sm mb-6 uppercase tracking-wider">
            About the Principal
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
            Tpl. Olajide Marufu Akintunde
          </h2>
          <p className="text-xl text-brand-gold font-medium mb-8">
            Principal Partner, Khaf CONSULTS Nig. Ltd.
          </p>

          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              I am a skilled and detail-oriented Town Planner with several years of practical experience in urban and regional planning, land development, and project supervision.
            </p>
            <p>
              My expertise lies in preparing planning drawings, conducting rigorous site analyses, and enforcing development control in strict compliance with Nigerian planning regulations. 
            </p>
            <p>
              Whether working with individuals, corporate clients, or government agencies, I am dedicated to managing projects from concept to execution ensuring sustainability, functionality, and regulatory compliance every step of the way.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Registered Town Planner (Tpl.)",
              "Member, TOPREC",
              "Member, NITP",
              "HSE Certified Professional"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="font-medium text-brand-navy">{item}</span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
