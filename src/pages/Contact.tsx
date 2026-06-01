import React, { useEffect } from 'react';
import ContactSection from '../components/sections/ContactSection';
import FAQSection from '../components/sections/FAQSection';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative pt-12 pb-4 lg:pt-16 lg:pb-8 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[500px] bg-blue-100/60 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-sky-100/50 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-1">
            We're here to help. Contact us for immediate assistance or schedule a standard service via the form below.
          </p>
        </div>
      </div>
      <ContactSection />
      <FAQSection />
    </>
  );
}
