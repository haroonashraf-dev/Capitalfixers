import React, { useEffect } from 'react';
import ContactSection from '../components/sections/ContactSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 lg:pt-32 lg:pb-16 bg-slate-50 overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, rgba(219,234,254,0) 70%)', transform: 'translateZ(0)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[400px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(224,242,254,0.5) 0%, rgba(224,242,254,0) 70%)', transform: 'translateZ(0)' }} />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Capitalfixers</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed mb-8">
            Your trusted partner for comprehensive home maintenance, repair, and cleaning services in Islamabad & Rawalpindi.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-6 lg:py-8 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Image Side */}
            <div className="relative">
              <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl z-10 border border-slate-100">
                <img 
                  src="https://images.pexels.com/photos/5463577/pexels-photo-5463577.jpeg" 
                  alt="Our Team at Work" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-64 h-64 rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(239,246,255,0.8) 0%, rgba(239,246,255,0) 70%)', transform: 'translateZ(0)' }} />
              <div className="absolute -bottom-8 -right-8 w-64 h-64 rounded-full pointer-events-none -z-10" style={{ background: 'radial-gradient(circle, rgba(255,251,235,0.8) 0%, rgba(255,251,235,0) 70%)', transform: 'translateZ(0)' }} />
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-3 text-center lg:text-left">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-6 text-center lg:text-left">
                Building trust through <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">reliable service.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Founded with a vision to provide reliable, professional, and transparent home services, Capitalfixers has grown into one of the most trusted names in the twin cities. 
                </p>
                <p>
                  We noticed a common problem: homeowners struggling to find honest technicians who show up on time and fix the problem the first time. The anxiety of letting unknown workers into your home and the frustration of hidden costs had become the norm.
                </p>
                <p>
                  We set out to change that. By building a team of certified, background-checked professionals and prioritizing absolute customer satisfaction, we bring peace of mind back to home maintenance.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-10 mt-10 border-t border-slate-100">
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">10+</div>
                  <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Years Experience</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">2k+</div>
                  <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Happy Clients</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Emergency Support</div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-center hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-extrabold text-blue-600 mb-2">100%</div>
                  <div className="text-sm font-bold text-slate-600 uppercase tracking-wide">Satisfaction</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ContactSection />
    </>
  );
}
