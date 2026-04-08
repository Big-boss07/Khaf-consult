import React from 'react';
import { cn } from './Button';

export function SectionTitle({ title, subtitle, className, align = 'center' }) {
  return (
    <div className={cn("mb-12 flex flex-col gap-3", align === 'center' ? 'items-center text-center' : 'items-start text-left', className)}>
      {subtitle && (
        <span className="text-sm font-bold uppercase tracking-wider text-brand-gold">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl font-bold md:text-4xl text-brand-navy font-serif">
        {title}
      </h2>
      <div className={cn("h-1 w-20 bg-brand-gold rounded-full", align === 'center' ? 'mx-auto' : '')} />
    </div>
  );
}
