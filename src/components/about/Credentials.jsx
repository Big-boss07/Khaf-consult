import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Credentials() {
  const credentials = [
    {
      title: "TOPREC Registration",
      description: "Fully registered and recognized by the Town Planners Registration Council of Nigeria.",
      year: "Active"
    },
    {
      title: "NITP Membership",
      description: "Active member of the Nigerian Institute of Town Planners.",
      year: "Active"
    },
    {
      title: "HSE Certification",
      description: "Certified in Health, Safety, and Environment (HSE) standards for construction and site planning.",
      year: "Certified"
    },
    {
      title: "B.Sc / HND Urban Planning",
      description: "Comprehensive academic foundation in Urban & Regional Planning and design tools like AutoCAD.",
      year: "Completed"
    }
  ];

  return (
    <section className="py-24 bg-brand-navy border-t border-white/10 text-white">
      <Container>
        <SectionTitle 
          title="Professional Credentials"
          subtitle="Qualifications" 
          className="text-white"
        />
        
        {/* Force SectionTitle text to be white for this dark section since it defaults to navy */}
        <style dangerouslySetInnerHTML={{__html: `
          .bg-brand-navy h2 { color: white !important; }
        `}} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {credentials.map((cred, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
              <div className="text-brand-gold font-bold text-sm mb-4 bg-brand-gold/10 inline-block px-3 py-1 rounded-full">
                {cred.year}
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">{cred.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {cred.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
