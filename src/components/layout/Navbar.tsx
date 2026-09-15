'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';
import { Button } from '@/components/ui';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'certifications', 'journey', 'recruiter', 'tools', 'faq', 'contact'];
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-300 ease-out ${
        isScrolled
          ? 'bg-primary-surface/95 backdrop-blur-md border-b border-subtle-border shadow-small'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container h-16 md:h-[72px] flex items-center justify-between" aria-label="Main navigation">
        <Link
          href="#"
          className="text-xl font-bold text-primary-text hover:opacity-80 transition-opacity"
          aria-label="KAVIPPRANESH L. - Home"
        >
          KAVIPPRANESH L.
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors ${
                activeSection === item.href
                  ? 'text-primary-brand'
                  : 'text-secondary-text hover:text-primary-brand'
              }`}
              onClick={handleNavClick}
              aria-current={activeSection === item.href ? 'page' : undefined}
            >
              {item.label}
              {activeSection === item.href && (
                <motion.span
                  className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-brand"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            icon={<Download size={14} strokeWidth={2.5} />}
            iconPosition="left"
          >
            Resume
          </Button>
          <Button
            size="sm"
            href="#contact"
            onClick={handleNavClick}
            icon={<ArrowRight size={14} strokeWidth={2.5} />}
          >
            Get In Touch
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-secondary-text hover:text-primary-text transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} activeSection={activeSection} />
    </header>
  );
}

import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

function MobileMenu({ isOpen, onClose, activeSection }: { isOpen: boolean; onClose: () => void; activeSection: string }) {
  if (!isOpen) return null;

  return (
    <motion.div
      id="mobile-menu"
      className="md:hidden fixed inset-0 z-[199] bg-primary-surface/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobile-menu-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <h2 id="mobile-menu-title" className="sr-only">
        Navigation Menu
      </h2>
      <div className="flex flex-col items-center gap-4 text-center w-full max-w-sm">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-3 rounded-[12px] text-lg font-medium transition-all duration-200 ${
              activeSection === item.href
                ? 'bg-primary-soft text-primary-brand'
                : 'text-primary-text hover:bg-secondary-surface'
            }`}
            onClick={onClose}
            aria-current={activeSection === item.href ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
        <div className="flex flex-col gap-3 w-full max-w-xs mt-4">
          <Button
            variant="secondary"
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            icon={<Download size={16} strokeWidth={2.5} />}
            iconPosition="left"
            fullWidth
          >
            Resume
          </Button>
          <Button
            href="#contact"
            onClick={onClose}
            icon={<ArrowRight size={16} strokeWidth={2.5} />}
            fullWidth
          >
            Get In Touch
          </Button>
        </div>
      </div>
      <button
        className="absolute top-6 right-6 p-2 text-secondary-text hover:text-primary-text transition-colors"
        onClick={onClose}
        aria-label="Close menu"
      >
        <X size={24} strokeWidth={2} />
      </button>
    </motion.div>
  );
}