import React from 'react';
import { cn } from './Button';

export function Badge({ className, variant = 'default', children, ...props }) {
  const variants = {
    default: "bg-brand-navy text-white hover:bg-brand-navy/90",
    secondary: "bg-brand-gold text-brand-navy hover:bg-brand-gold/90",
    outline: "border border-brand-navy text-brand-navy",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-gold",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
