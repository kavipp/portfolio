'use client';

import Link from 'next/link';
import { personalInfo } from '@/data/portfolio';
import { LinkedinIcon, GithubIcon, MailIcon, MapPinIcon, ArrowRight, Shield, CheckCircle, Download } from '@/components/ui/SocialIcons';
import { Button } from '@/components/ui';

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-subtle-border bg-primary-surface" role="contentinfo">
      <div className="container py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1 max-w-sm">
            <Link href="#" className="text-2xl font-bold text-primary-text mb-4 block hover:opacity-80 transition-opacity">
              KAVIPPRANESH L.
            </Link>
            <p className="text-secondary-text text-sm leading-relaxed mb-6">
              Quality Analyst & Software Testing Enthusiast focused on building reliable software through structured testing, automation, and quality-driven problem solving.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-tertiary-surface border border-subtle-border rounded-[10px] text-secondary-text hover:text-primary-brand hover:border-border hover:bg-secondary-surface transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-tertiary-surface border border-subtle-border rounded-[10px] text-secondary-text hover:text-primary-brand hover:border-border hover:bg-secondary-surface transition-all duration-200"
                aria-label="GitHub"
              >
                <GithubIcon size={18} strokeWidth={2} aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-tertiary-surface border border-subtle-border rounded-[10px] text-secondary-text hover:text-primary-brand hover:border-border hover:bg-secondary-surface transition-all duration-200"
                aria-label="Email"
              >
                <MailIcon size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav className="lg:col-span-1" aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-text mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-text hover:text-primary-brand transition-colors text-sm flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowRight size={14} strokeWidth={2.5} className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-text mb-4">
              Connect
            </h3>
            <div className="space-y-3 mb-8">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-text hover:text-primary-brand transition-colors text-sm group"
              >
                <LinkedinIcon size={18} strokeWidth={2} aria-hidden="true" className="text-primary-brand" />
                <span>LinkedIn</span>
                <ArrowRight size={14} strokeWidth={2.5} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-text hover:text-primary-brand transition-colors text-sm group"
              >
                <GithubIcon size={18} strokeWidth={2} aria-hidden="true" className="text-secondary-text" />
                <span>GitHub</span>
                <ArrowRight size={14} strokeWidth={2.5} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-secondary-text hover:text-primary-brand transition-colors text-sm group"
              >
                <MailIcon size={18} strokeWidth={2} aria-hidden="true" className="text-secondary-accent" />
                <span>{personalInfo.email}</span>
                <ArrowRight size={14} strokeWidth={2.5} className="ml-auto opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-secondary-text text-sm">
              <MapPinIcon size={18} strokeWidth={2} aria-hidden="true" className="text-warning" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-text mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button
                variant="primary"
                href="#contact"
                className="w-full justify-start"
                icon={<ArrowRight size={16} strokeWidth={2.5} />}
              >
                Get In Touch
              </Button>
              <Button
                variant="secondary"
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-start"
                icon={<Download size={16} strokeWidth={2.5} />}
                iconPosition="left"
              >
                Download Resume
              </Button>
              <Button
                variant="ghost"
                href="mailto:kavippranesh.l@example.com"
                className="w-full justify-start"
                icon={<MailIcon size={16} strokeWidth={2.5} />}
                iconPosition="left"
              >
                Direct Email
              </Button>
            </div>
            <div className="mt-6 pt-6 border-t border-subtle-border space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-text mb-3">Why Work With Me</p>
              <ul className="space-y-2" role="list">
                <li className="flex items-center gap-2 text-sm text-secondary-text">
                  <CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" />
                  5 months QA internship experience
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-text">
                  <CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" />
                  150+ test cases designed
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-text">
                  <CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" />
                  25+ automation scripts
                </li>
                <li className="flex items-center gap-2 text-sm text-secondary-text">
                  <CheckCircle size={14} className="text-success" strokeWidth={2.5} aria-hidden="true" />
                  4 verified certifications
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-subtle-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-text">
            © {personalInfo.portfolioYear} KAVIPPRANESH L. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-text">
            <span>Quality Analyst / QA Engineer Portfolio</span>
            <span className="flex items-center gap-1.5">
              <Shield size={14} strokeWidth={2} aria-hidden="true" />
              <span>Built with Next.js & Framer Motion</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}