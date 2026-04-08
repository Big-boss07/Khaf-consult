import React, { useState } from 'react';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { Button } from '../ui/Button';

export function BookingForm({ serviceId, onClose }) {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose?.();
      }, 2000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'success' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Requested!</h3>
          <p className="text-gray-600">We will contact you shortly to confirm your consultation.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-6">
            Fill out the form below to request a consultation. Our team will get back to you within 24 hours.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="booking-name" className="text-sm font-medium text-gray-700">Full Name</label>
              <Input id="booking-name" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="booking-phone" className="text-sm font-medium text-gray-700">Phone Number</label>
              <Input id="booking-phone" type="tel" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="booking-email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
            <Input id="booking-email" type="email" />
          </div>

          <div className="space-y-2 text-sm font-medium text-gray-700 pt-2">
            <label>Service of Interest</label>
            <div className="p-3 bg-gray-50 border rounded-md text-gray-600">
              {serviceId ? serviceId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'General Consultation'}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <label htmlFor="booking-details" className="text-sm font-medium text-gray-700">Project Details</label>
            <Textarea id="booking-details" placeholder="Briefly describe your project or needs..." className="min-h-[100px]" />
          </div>

          <div className="pt-4 flex gap-3 justify-end">
            <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
            <Button type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
            </Button>
          </div>
        </>
      )}
    </form>
  );
}
