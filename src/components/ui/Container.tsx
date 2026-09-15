'use client';

import { HTMLAttributes, forwardRef } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'default', className = '', children, ...props }, ref) => {
    const sizeClasses = {
      default: 'max-w-[1240px]',
      narrow: 'max-w-[960px]',
      wide: 'max-w-[1440px]',
      full: 'max-w-full',
    };

    return (
      <div
        ref={ref}
        className={`mx-auto px-8 md:px-6 ${sizeClasses[size]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';