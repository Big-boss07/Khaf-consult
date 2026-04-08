import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function CTASection() {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-white rounded-full translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-96 h-96 border-[60px] border-brand-gold rounded-full -translate-x-1/2 translate-y-1/3" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
          Ready to Bring Your Master Plan to Life?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Partner with Khaf CONSULTS for seamless layout designs, rapid approvals, and professional site supervision.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="w-full sm:w-auto bg-brand-gold text-brand-navy hover:bg-brand-lightGold">
              Schedule a Consultation
            </Button>
          </Link>
          <a href="tel:+2348035600633">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white hover:text-brand-navy">
              Call Us Now
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
