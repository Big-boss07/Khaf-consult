import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '../ui/Card';

export function TestimonialCard({ testimonial }) {
  return (
    <Card className="h-full border-none shadow-md bg-white">
      <CardContent className="p-8 flex flex-col h-full">
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-brand-gold text-brand-gold" />
          ))}
        </div>
        <p className="text-gray-700 italic flex-grow mb-8 text-lg font-serif">
          "{testimonial.content}"
        </p>
        <div className="mt-auto">
          <h4 className="font-bold text-brand-navy">{testimonial.name}</h4>
          <p className="text-sm text-brand-gold uppercase tracking-wider mt-1 font-semibold">{testimonial.role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
