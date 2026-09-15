'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'feature' | 'small' | 'premium' | 'glass' | 'gradient';
  hover?: boolean;
  hoverLift?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', hover = false, hoverLift = false, className = '', children, ...props }, ref) => {
    const baseClasses = 'bg-primary-surface border transition-all duration-300 ease-out';

    const variantClasses = {
      default: 'border-subtle-border rounded-[16px]',
      feature: 'border-subtle-border rounded-[16px]',
      small: 'border-subtle-border rounded-[12px]',
      premium: 'border-subtle-border rounded-[24px] shadow-xs',
      glass: 'rounded-[24px] glass-card',
      gradient: 'rounded-[24px] gradient-border relative overflow-hidden',
    };

    const hoverClasses = hover
      ? 'hover:border-border hover:shadow-medium'
      : '';

    const hoverLiftClasses = hoverLift
      ? 'hover-lift'
      : '';

    const classNameString = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${hoverLiftClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={classNameString}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export function CardHeader({ title, subtitle, icon, action, className = '', ...props }: CardHeaderProps) {
  return (
    <div className={`flex items-start justify-between gap-4 ${className}`} {...props}>
      <div className="flex-1 min-w-0">
        {icon && (
          <div className="mb-3 p-3 bg-primary-soft rounded-[10px] w-fit text-primary-brand">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-semibold text-primary-text">{title}</h3>
        {subtitle && <p className="text-sm text-secondary-text mt-1">{subtitle}</p>}
      </div>
      {action && <div className="flex-shrink-0 mt-1">{action}</div>}
    </div>
  );
}

export function CardContent({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex items-center gap-3 pt-4 border-t border-subtle-border ${className}`} {...props}>
      {children}
    </div>
  );
}

export interface MetricCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  trend?: { value: string; positive: boolean };
  className?: string;
}

export function MetricCard({ label, value, icon, trend, className = '' }: MetricCardProps) {
  return (
    <Card variant="small" hover className={`p-5 ${className}`}>
      {icon && <div className="text-primary-brand mb-2">{icon}</div>}
      <p className="text-2xl font-bold text-primary-text mb-1">{value}</p>
      <p className="text-xs font-medium uppercase tracking-wider text-muted-text">{label}</p>
      {trend && (
        <div className={`flex items-center gap-1 mt-2 text-sm font-medium ${trend.positive ? 'text-success' : 'text-error'}`}>
          <span>{trend.positive ? '↑' : '↓'}</span>
          <span>{trend.value}</span>
        </div>
      )}
    </Card>
  );
}