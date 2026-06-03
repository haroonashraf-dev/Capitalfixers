import React, { useEffect } from 'react';
import AreasSection from '../components/sections/AreasSection';
import ContactSection from '../components/sections/ContactSection';

export default function AreasPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="relative pt-12 pb-6 lg:pt-16 lg:pb-8 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-67.5 h-125 bg-blue-100/60 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-sky-100/50 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-3">
            Areas <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-sky-500">We Serve</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            We cover a wide network across the twin cities. 
          </p>
        </div>
      </div>
      <div className="py-5 lg:py-8 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
           <AreasSection />
        </div>
      </div>
      <ContactSection />
    </>
  );
}
