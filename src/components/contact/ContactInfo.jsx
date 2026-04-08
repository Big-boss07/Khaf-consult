import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ContactForm } from '../features/ContactForm';

export function ContactInfo() {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      content: (
        <div className="flex flex-col">
          <a href="tel:+2348035600633" className="hover:text-brand-gold transition-colors">080 3560 0633</a>
          <a href="tel:+2349043192435" className="hover:text-brand-gold transition-colors">090 4319 2435</a>
        </div>
      )
    },
    {
      icon: Mail,
      title: "Email Us",
      content: (
        <a href="mailto:tundeolajide2010@gmail.com" className="hover:text-brand-gold transition-colors break-all">
          tundeolajide2010@gmail.com
        </a>
      )
    },
    {
      icon: MapPin,
      title: "Office Location",
      content: "Serving Nationwide with Headquarters in Nigeria."
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "Mon - Fri: 8:00 AM - 5:00 PM"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start mt-12 bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative z-10 -mt-20">
      
      {/* Details Side */}
      <div className="lg:col-span-2 space-y-10">
        <div>
          <h3 className="text-2xl font-serif font-bold text-brand-navy mb-2">Get in Touch</h3>
          <p className="text-gray-600">
            Have a project in mind or need expert planning advice? Reach out to us directly through any of our channels.
          </p>
        </div>

        <div className="space-y-8">
          {contactDetails.map((detail, i) => {
            const Icon = detail.icon;
            return (
              <div key={i} className="flex items-start gap-5">
                <div className="w-12 h-12 bg-brand-navy/5 text-brand-navy rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{detail.title}</h4>
                  <div className="text-gray-600 font-medium">
                    {detail.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Side */}
      <div className="lg:col-span-3 bg-gray-50 rounded-xl p-8 border border-gray-100">
        <h3 className="text-2xl font-serif font-bold text-brand-navy mb-6">Send us a Message</h3>
        <ContactForm />
      </div>

    </div>
  );
}
