import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Container } from './Container';
import logo from '../../assets/khaf_logo_1775633274174.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white mt-auto">
      <div className="py-16 md:py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            
            {/* Brand Col */}
            <div className="space-y-6">
               <div className="flex items-center gap-3">
                <div className="bg-white p-1.5 rounded-md">
                  <img src={logo} alt="Khaf CONSULTS" className="h-10 w-10 object-contain" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-xl font-bold leading-tight">
                    Khaf CONSULTS
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    Nig. Ltd.
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
                Professional Town Planning and Development Consultancy. We transform spaces and ensure regulatory compliance with exceptional precision and expertise.
              </p>
            </div>

            {/* Links Col */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-brand-gold"></span> Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-gray-300 hover:text-brand-gold transition-colors flex items-center gap-2 text-sm group"
                    >
                      <ChevronRight className="w-4 h-4 text-brand-gold opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Col */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-brand-gold"></span> Core Services
              </h4>
              <ul className="space-y-3">
                {[
                  'Urban & Regional Planning',
                  'Development Control',
                  'Architectural Drafting',
                  'Project Management',
                  'Survey Documentation'
                ].map((item) => (
                  <li key={item}>
                    <Link to="/services" className="text-gray-300 hover:text-brand-gold transition-colors text-sm">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Col */}
            <div>
              <h4 className="font-serif text-lg font-semibold mb-6 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-brand-gold"></span> Contact Us
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300 text-sm">
                  <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                  <span>Serving Nationwide<br />Headquarters in Nigeria</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+2348035600633" className="hover:text-brand-gold transition-colors">080 3560 0633</a>
                    <a href="tel:+2349043192435" className="hover:text-brand-gold transition-colors">090 4319 2435</a>
                  </div>
                </li>
                <li className="flex items-center gap-3 text-gray-300 text-sm">
                  <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                  <a href="mailto:tundeolajide2010@gmail.com" className="hover:text-brand-gold transition-colors break-all">
                    tundeolajide2010@gmail.com
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 bg-black/20">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>&copy; {currentYear} Khaf CONSULTS Nig. Ltd. All rights reserved.</p>
            <p>Tpl. Olajide Marufu Akintunde | Registered Town Planner</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
