'use client';

import { HTMLAttributes, forwardRef } from 'react';

export const Divider = forwardRef<HTMLHRElement, HTMLAttributes<HTMLHRElement>>(
  ({ className = '', ...props }, ref) => {
    return (
      <hr
        ref={ref}
        className={`divider ${className}`}
        {...props}
      />
    );
  }
);

Divider.displayName = 'Divider';