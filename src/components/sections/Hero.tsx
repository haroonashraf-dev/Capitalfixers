import { ArrowRight, ShieldCheck, Star, Clock, UserCheck, CalendarCheck, PhoneCall } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-4 sm:pt-12 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size[4rem_4rem] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      {/* Blur Orbs */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-blue-200/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ transform: 'translateZ(0)' }} />
      <div className="absolute bottom-1/4 left-0 w-100 h-100 bg-sky-200/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ transform: 'translateZ(0)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-350">
        <div className="flex flex-row items-start justify-between w-full">
          
          {/* Left Content */}
          <div className="w-[55%] md:w-1/2 pr-4 sm:pr-8 text-left py-4 sm:py-8 lg:py-12">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-[9px] sm:text-xs lg:text-sm font-bold mb-4 sm:mb-8 shadow-sm">
              <span className="flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Serving Islamabad & Regional Areas
            </div>
            
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05] mb-3 sm:mb-6">
              Home repairs, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-sky-500">done right.</span>
            </h1>
            
            <p className="text-[10px] sm:text-sm md:text-lg lg:text-xl text-slate-600 font-medium mb-5 sm:mb-10 leading-relaxed max-w-xl">
              Top-rated experts for AC repair, plumbing, and electrical work. We provide upfront pricing, fast response times, and a 100% satisfaction guarantee.
            </p>
            
            <div className="flex flex-row items-center justify-start gap-2 sm:gap-4 mb-6 sm:mb-12 w-full">
              <a 
                href="tel:+923137386619" 
                className="order-2 sm:order-1 flex-1 sm:flex-none px-2 py-2.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl sm:rounded-2xl transition-all flex items-center justify-center gap-1 sm:gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:translate-y-0 text-xs sm:text-base whitespace-nowrap"
              >
                <PhoneCall className="w-3.5 h-3.5 sm:w-5 sm:h-5 hidden sm:block" /> Call Now
              </a>
              <Link 
                to="/services" 
                className="order-1 sm:order-2 flex-1 sm:flex-none px-2 py-2.5 sm:px-8 sm:py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-xl sm:rounded-2xl hover:border-blue-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-1 sm:gap-2 hover:-translate-y-1 active:translate-y-0 shadow-sm text-xs sm:text-base whitespace-nowrap"
              >
                Services <ArrowRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-slate-400 hidden sm:block" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex flex-row items-center justify-start gap-3 sm:gap-6 border-t border-slate-200/60 pt-4 sm:pt-8 mt-4 sm:mt-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex-col sm:flex-row flex text-left">
                  <div className="flex text-yellow-500 mb-0.5">
                    <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current"/>
                    <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current"/>
                    <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current"/>
                    <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current"/>
                    <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-current"/>
                  </div>
                  <div className="text-[9px] sm:text-sm font-bold text-slate-600 leading-tight">2k+ Happy <br className="sm:hidden" />Customers</div>
                </div>
              </div>

              <div className="w-px h-6 sm:h-10 bg-slate-200"></div>

              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <div className="w-6 h-6 sm:w-12 sm:h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <ShieldCheck className="w-3 h-3 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-sm font-bold text-slate-900 leading-tight">Verified Pros</div>
                </div>
              </div>
            </div>
            
          </div>

          {/* Right Image Composition */}
          <div className="w-[45%] md:w-1/2 relative mt-12 sm:mt-16 md:mt-0 pt-0 lg:pt-4 translate-y-1">
            {/* Main Image Container */}
            <div className="relative z-10 w-full aspect-3/4 sm:aspect-4/3 lg:aspect-4/3 rounded-l-2xl sm:rounded-l-[2.5rem] rounded-r-none overflow-hidden shadow-2xl border-2 sm:border-4 border-r-0 border-white -mr-4 sm:-mr-6 lg:-mr-8">
              <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              <img 
                src="https://media.istockphoto.com/id/1278554684/photo/the-air-conditioner-master-in-a-medical-protective-face-mask-checks-and-refills-the-air.jpg?s=1024x1024&w=is&k=20&c=R9tHNCAepunLi9nD4t9VLgfpfYcQ7PYVJJPBw2Hox9E=" 
                alt="Professional technician fixing an AC unit" 
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>
              
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20">
                <h3 className="text-white font-bold text-xs sm:text-xl md:text-2xl mb-0.5 sm:mb-2">Expert AC Repair</h3>
                <p className="text-slate-200 font-medium text-[8px] sm:text-xs md:text-sm max-w-[80%]">Same-day service available in your area.</p>
              </div>
            </div>

            {/* Floating UI Card - Technician status */}
            <div className="absolute top-[10%] sm:top-8 -left-6 sm:-left-12 lg:-left-16 bg-white p-2 sm:p-4 rounded-lg sm:rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-2 sm:gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
              <div className="relative hidden xs:block sm:block">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-slate-100">
                  <img src="https://media.istockphoto.com/id/2211719485/photo/technician-with-screwdriver-repairing-air-conditioner-at-home.jpg?s=1024x1024&w=is&k=20&c=4g3IBTKK8GWr35X_4hLv9kbiSNS_J3OogBKwk9-B6iU=" alt="Tech" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2 h-2 sm:w-3.5 sm:h-3.5 bg-green-500 border border-white rounded-full"></div>
              </div>
              <div>
                <div className="text-[6px] sm:text-xs text-slate-400 font-bold mb-0.5">Technician arriving in</div>
                <div className="text-[10px] sm:text-sm font-extrabold text-slate-900 flex items-center gap-1 sm:gap-1.5">
                  <Clock className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-blue-600" /> 45 Mins
                </div>
              </div>
            </div>

            {/* Background Blob behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-112.5 bg-sky-200/50 rounded-full blur-2xl sm:blur-[60px] z-0 pointer-events-none" style={{ transform: 'translateZ(0)' }} />
          </div>
          
        </div>
      </div>
    </section>
  );
}
