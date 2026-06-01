import React, { useEffect } from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative pt-12 pb-2 lg:pt-18 lg:pb-2 bg-slate-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/60 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-100/50 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Services</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-0">
            Comprehensive home maintenance, repair, and cleaning solutions for properties in Islamabad and Rawalpindi.
          </p>
        </div>
      </div>
      <ServicesSection />
      <ContactSection />
    </>
  );
}
