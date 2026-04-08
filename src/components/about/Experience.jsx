import React from 'react';
import { Container } from '../layout/Container';
import { SectionTitle } from '../ui/SectionTitle';

export function Experience() {
  const experiences = [
    {
      title: "Town Planning Consultant",
      company: "Khaf CONSULTS Nig. Ltd.",
      period: "Present",
      description: "Leading a wide array of urban planning, layout designs, and building approval projects. Supervising site constructions and managing interactions with government regulatory agencies."
    },
    {
      title: "Urban Planner & GIS Analyst",
      company: "Various Corporate Clients",
      period: "Past",
      description: "Prepared master plans, environmental impact assessments, and detailed 2D AutoCAD drawings for private estates and commercial developments."
    },
    {
      title: "Development Control Officer",
      company: "Public Sector (Consultant)",
      period: "Past",
      description: "Ensured adherence to master plans, processed regularization of property documents, and supervised zoning compliance for urban spaces."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <SectionTitle 
          title="Professional Journey"
          subtitle="Experience" 
        />
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 md:pl-0">
                {/* Timeline Line */}
                <div className="md:hidden absolute left-0 top-0 bottom-[-3rem] w-px bg-gray-200" />
                <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-gray-200 -translate-x-1/2" />
                
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 top-1.5 w-3 h-3 bg-brand-gold rounded-full ring-4 ring-white md:-translate-x-[5px]" />
                
                <div className={`md:flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Empty space for symmetric timeline on desktop */}
                  <div className="hidden md:block md:w-5/12" />
                  
                  {/* Content Card */}
                  <div className="md:w-5/12">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="text-sm font-bold text-brand-gold mb-2 block">{exp.period}</span>
                      <h3 className="text-xl font-bold text-brand-navy mb-1">{exp.title}</h3>
                      <h4 className="text-gray-500 font-medium text-sm mb-4">{exp.company}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
