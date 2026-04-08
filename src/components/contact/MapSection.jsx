import React from 'react';
import { Container } from '../layout/Container';

export function MapSection() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="bg-gray-200 w-full h-[400px] rounded-2xl overflow-hidden shadow-inner relative">
          {/* Simple Fallback Map Representation since we don't have a specific API key for an iframe Map */}
          <div className="absolute inset-0 bg-brand-navy/5" />
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">
            <div className="w-16 h-16 bg-brand-navy text-brand-gold rounded-full flex items-center justify-center mb-4 shadow-lg animate-bounce">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">Khaf CONSULTS Nig. Ltd.</h3>
            <p className="text-gray-600 max-w-sm">Serving clients expertly across Nigeria.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
