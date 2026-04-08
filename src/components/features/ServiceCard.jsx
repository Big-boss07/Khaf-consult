import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export function ServiceCard({ service, index }) {
  const Icon = service.icon;

  return (
    <Card className="group h-full overflow-hidden border-none shadow-lg bg-white hover:-translate-y-2 transition-all duration-300">
      <div className="h-1.5 w-full bg-brand-navy group-hover:bg-brand-gold transition-colors" />
      <CardContent className="p-8 pt-10 flex flex-col h-full">
        <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-navy/5 text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-colors duration-300">
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl font-bold mb-4 text-brand-navy">{service.title}</h3>
        <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
          {service.description}
        </p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy hover:text-brand-gold transition-colors mt-auto group/link"
        >
          Explore Service 
          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </CardContent>
    </Card>
  );
}
