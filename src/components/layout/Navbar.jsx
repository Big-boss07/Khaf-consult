import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { Button } from '../ui/Button';
import { cn } from '../ui/Button';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 z-40 w-full transition-all duration-300",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/src/assets/khaf_logo_1775633274174.png" 
            alt="Khaf CONSULTS Logo" 
            className="h-10 w-10 object-contain transition-transform group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-tight text-brand-navy">
              Khaf CONSULTS
            </span>
            <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
              Nig. Ltd.
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-gold relative",
                    location.pathname === link.path ? "text-brand-gold" : "text-brand-navy"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-gold rounded-full" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <Button size="sm">Book Consultation</Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-brand-navy p-2 -mr-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-2">
            {links.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={cn(
                    "block px-4 py-3 rounded-md text-base font-medium transition-colors",
                    location.pathname === link.path ? "bg-brand-navy/5 text-brand-gold" : "text-brand-navy hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="w-full">
            <Button className="w-full">Book Consultation</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
