import React from 'react';
import { cn } from '../ui/Button';

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
