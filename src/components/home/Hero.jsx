import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-brand-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/hero_bg_1775633300140.png" 
          alt="Urban Planning Aerial View" 
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/80 to-transparent" />
      </div>

      <Container className="relative z-10 py-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold font-medium text-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Registered Town Planner (Tpl.)
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Designing Functional <span className="text-brand-gold italic">Communities</span> for Tomorrow
          </motion.h1>

          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Expert urban & regional planning, layout designs, and seamless building approval processing across Nigeria. Led by Tpl. Olajide Marufu Akintunde.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact">
              <Button size="lg" className="w-full sm:w-auto gap-2 group">
                Book Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white/30 hover:bg-white/10 hover:border-white">
                View Past Projects
              </Button>
            </Link>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-10 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div>
              <p className="text-4xl font-bold text-brand-gold mb-1">5+</p>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white mb-1">50+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
            <div className="col-span-2 md:col-span-1 flex items-center gap-4">
              <div className="flex -space-x-4">
                {/* Simulated trust indicators */}
                <div className="w-12 h-12 rounded-full bg-brand-blue border-2 border-brand-navy flex items-center justify-center text-xs font-bold text-white">TOPREC</div>
                <div className="w-12 h-12 rounded-full bg-brand-lightGold border-2 border-brand-navy flex items-center justify-center text-xs font-bold text-brand-navy">NITP</div>
              </div>
              <p className="text-sm text-gray-400 leading-tight">Certified<br />Professional</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
