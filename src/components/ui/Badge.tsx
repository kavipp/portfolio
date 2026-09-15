'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'secondary-accent';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  dot?: boolean;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'primary', size = 'md', className = '', children, icon, dot, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center gap-1.5 font-medium rounded-full transition-all duration-200';

    const variantClasses = {
      primary: 'bg-primary-soft text-primary-brand border border-transparent',
      secondary: 'bg-secondary-surface text-secondary-text border border-border',
      success: 'bg-success-soft text-success border border-transparent',
      warning: 'bg-warning-soft text-warning border border-transparent',
      error: 'bg-error-soft text-error border border-transparent',
      outline: 'bg-transparent text-primary-brand border-2 border-primary-brand',
      'secondary-accent': 'bg-accent-soft text-secondary-accent border border-transparent',
    };

    const sizeClasses = {
      sm: 'px-2.5 py-0.5 text-xs',
      md: 'px-3.5 py-1 text-sm',
      lg: 'px-4 py-1.5 text-base',
    };

    const classNameString = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
      <span ref={ref} className={classNameString} {...props}>
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" aria-hidden="true" />}
        {icon}
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  removable?: boolean;
  onRemove?: () => void;
  children: React.ReactNode;
}

export function Tag({ variant = 'default', removable = false, onRemove, className = '', children, ...props }: TagProps) {
  const variantClasses = {
    default: 'bg-tertiary-surface text-secondary-text border border-subtle-border',
    primary: 'bg-primary-soft text-primary-brand border border-transparent',
    success: 'bg-success-soft text-success border border-transparent',
    warning: 'bg-warning-soft text-warning border border-transparent',
    error: 'bg-error-soft text-error border border-transparent',
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-medium rounded-[8px] ${variantClasses[variant]} ${className}`} {...props}>
      {children}
      {removable && (
        <button
          onClick={onRemove}
          className="p-0.5 rounded-full hover:bg-black/5 transition-colors"
          aria-label="Remove tag"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
    </span>
  );
}