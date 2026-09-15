'use client';

import { HTMLAttributes, forwardRef } from 'react';
import { Container } from './Container';

interface SectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  children: React.ReactNode;
  containerSize?: 'default' | 'narrow' | 'wide' | 'full';
  background?: 'default' | 'surface' | 'background' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ id, className = '', children, containerSize = 'default', background = 'default', padding = 'md', ...props }, ref) => {
    const backgroundClasses = {
      default: '',
      surface: 'bg-primary-surface',
      background: 'bg-background',
      gradient: 'bg-gradient-subtle',
    };

    const paddingClasses = {
      none: '',
      sm: 'py-12 md:py-16',
      md: 'py-20 md:py-24 lg:py-30',
      lg: 'py-24 md:py-30 lg:py-36',
      xl: 'py-30 md:py-36 lg:py-40',
    };

    return (
      <section
        ref={ref}
        id={id}
        className={`section ${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

export interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
  divider?: boolean;
}

export function SectionHeader({ label, title, description, align = 'left', className = '', divider = false }: SectionHeaderProps) {
  return (
    <header className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}>
      {label && (
        <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-brand bg-primary-soft rounded-full mb-5">
          {label}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-text leading-[1.02] mb-5 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-secondary-text leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
      {divider && (
        <div className="mt-6 w-20 h-px bg-gradient-to-r from-primary-brand to-secondary-accent mx-auto" aria-hidden="true" />
      )}
    </header>
  );
}

export function SectionDivider({ className = '', ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`my-16 flex items-center gap-4 ${className}`} {...props} role="separator" aria-orientation="horizontal">
      <div className="flex-1 h-px bg-subtle-border" />
      <div className="w-2 h-2 rounded-full bg-primary-brand" aria-hidden="true" />
      <div className="flex-1 h-px bg-subtle-border" />
    </div>
  );
}