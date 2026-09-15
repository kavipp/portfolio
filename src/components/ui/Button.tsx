'use client';

import { forwardRef } from 'react';
import { ChevronRight, Loader2 } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  fullWidth?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      icon,
      iconPosition = 'right',
      loading = false,
      className = '',
      disabled,
      href,
      target,
      rel,
      type = 'button',
      onClick,
      fullWidth = false,
    },
    ref
  ) => {
    const baseClasses =
      'inline-flex items-center justify-center gap-2 font-semibold rounded-[10px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-brand focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    const variantClasses = {
      primary: 'bg-gradient-to-r from-primary-brand to-secondary-accent text-white shadow-glow-subtle hover:shadow-glow',
      secondary: 'bg-primary-surface text-primary-text border border-border hover:bg-secondary-surface hover:border-primary-brand hover:text-primary-brand',
      ghost: 'bg-transparent text-secondary-text hover:bg-secondary-surface hover:text-primary-text',
      outline: 'bg-transparent text-primary-brand border-2 border-primary-brand hover:bg-primary-soft hover:text-primary-hover',
    };

    const sizeClasses = {
      sm: 'px-5 py-2.5 text-sm gap-1.5',
      md: 'px-7 py-3.5 text-base gap-2',
      lg: 'px-9 py-4.5 text-lg gap-2.5',
      xl: 'px-12 py-5.5 text-xl gap-3',
    };

    const widthClasses = fullWidth ? 'w-full' : '';

    const iconElement = icon || (iconPosition === 'right' ? <ChevronRight size={18} strokeWidth={2.5} /> : null);

    const classNameString = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClasses} ${className}`;

    const content = loading ? (
      <Loader2 className="h-5 w-5 animate-spin" strokeWidth={2.5} aria-hidden="true" />
    ) : (
      <>
        {iconPosition === 'left' && iconElement}
        <span className="relative z-10">{children}</span>
        {iconPosition === 'right' && iconElement}
      </>
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classNameString}
          aria-disabled={disabled || loading}
          onClick={onClick}
        >
          {content}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classNameString}
        disabled={disabled || loading}
        onClick={onClick}
        type={type}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';