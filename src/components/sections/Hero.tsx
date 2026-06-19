import {
  ArrowRight,
  ShieldCheck,
  Star,
  Clock,
  UserCheck,
  CalendarCheck,
  PhoneCall,
  Banknote,
} from "lucide-react";
import { Link } from "react-router-dom";
 
export default function Hero() {
  return (
    <section className="relative pt-3 sm:pt-8 pb-6 sm:pb-16 lg:pt-4 lg:pb-24 overflow-hidden bg-slate-50">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] mask-[radial-gradient(ellipse_80%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
 
      {/* Blur Orbs */}
      <div
        className="absolute top-0 right-0 w-60 h-60 sm:w-125 sm:h-125 bg-blue-200/30 rounded-full blur-[80px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-48 h-48 sm:w-100 sm:h-100 bg-sky-200/30 rounded-full blur-[60px] sm:blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"
        style={{ transform: "translateZ(0)" }}
      />
 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-350">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-2 sm:gap-8 md:gap-4">
          {/* Left Content */}
          <div className="w-full md:w-1/2 md:pr-8 text-center md:text-left py-1 sm:py-8 lg:py-12 order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-bold mb-2 sm:mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Serving Islamabad & Regional Areas
            </div>
 
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-2 sm:mb-6">
              Home repairs, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-sky-500">
                done right.
              </span>
            </h1>
 
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 font-medium mb-4 sm:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
              Top-rated experts for AC repair, plumbing, and electrical work. We
              provide upfront pricing, fast response times, and a 100%
              satisfaction guarantee.
            </p>
 
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-2.5 sm:gap-4 mb-4 sm:mb-12 w-full">
              <a
                href="https://wa.me/923117430276?text=Hello!%20I%E2%80%99m%20looking%20for%20AC%20repair,%20electrician,%20or%20other%20home%20services.%20Please%20share%20details."
                target="_blank"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-600/20 hover:-translate-y-1 active:translate-y-0 text-sm sm:text-base whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" /> Call Now
              </a>
              <Link
                to="/services"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:border-blue-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 active:translate-y-0 shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Services <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              </Link>
              <Link
                to="/blog"
                className="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-slate-700 border border-slate-200 font-bold rounded-2xl hover:border-blue-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1 active:translate-y-0 shadow-sm text-sm sm:text-base whitespace-nowrap"
              >
                Latest Posts <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
              </Link>
            </div>
 
            {/* Social Proof */}
            <div className="flex flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 border-t border-slate-200/60 pt-3 sm:pt-8 mt-1 sm:mt-8">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex flex-col text-left">
                  <div className="flex text-yellow-500 mb-0.5">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  </div>
                  <div className="text-[11px] sm:text-sm font-bold text-slate-600 leading-tight">
                    2k+ Happy Customers
                  </div>
                </div>
              </div>
 
              <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
 
              <div className="flex items-center gap-2 sm:gap-3 text-left">
                <div className="w-9 h-9 sm:w-12 sm:h-12 bg-white border border-slate-200 shadow-sm rounded-full flex items-center justify-center text-green-600 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-sm font-bold text-slate-900 leading-tight">
                    Verified Pros
                  </div>
                </div>
              </div>
            </div>
          </div>
 
          {/* Right Image Composition */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2 px-0 sm:px-6 md:px-0 pt-0 lg:pt-4">
            {/* Main Image Container */}
            <div className="relative z-10 w-full h-[380px] xs:h-[420px] sm:h-[460px] md:h-[500px] lg:h-[600px] rounded-2xl sm:rounded-[2.5rem] md:rounded-l-[2.5rem] md:rounded-r-none overflow-hidden shadow-2xl border-2 sm:border-4 border-white md:border-r-0 md:-mr-4 lg:-mr-8">
              <div className="absolute inset-0 bg-slate-900/10 z-10"></div>
              <img
                src="/homepage-image.png"
                sizes="(max-width: 640px) 612px, 1024px"
                alt="Professional technician fixing an AC unit"
                fetchPriority="high"
                decoding="async"
                style={{ objectPosition: "center 10%" }}
                className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
              />
 
              {/* Gradient overlay for better text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 via-slate-900/20 to-transparent z-10"></div>
            </div>
 
            {/* Floating UI Card - Technician status */}
            <div className="absolute top-3 sm:top-6 md:top-8 left-1 sm:left-2 md:-left-10 lg:-left-16 bg-white p-2 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-2 sm:gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 max-w-[80%] sm:max-w-none">
              <div className="relative shrink-0">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-slate-100">
                  <img
                    src="https://media.istockphoto.com/id/2211719485/photo/technician-with-screwdriver-repairing-air-conditioner-at-home.jpg?s=1024x1024&w=is&k=20&c=4g3IBTKK8GWr35X_4hLv9kbiSNS_J3OogBKwk9-B6iU="
                    alt="Tech"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-green-500 border border-white rounded-full"></div>
              </div>
              <div className="min-w-0">
                <div className="text-[8px] sm:text-[11px] md:text-xs text-slate-400 font-bold mb-0.5 whitespace-nowrap">
                  Technician arriving in
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900 flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" /> 45 Mins
                </div>
              </div>
            </div>
 
            {/* Floating UI Card - Visit Charges */}
            <div className="absolute bottom-3 sm:bottom-6 md:bottom-auto md:top-34 right-1 sm:right-2 md:right-auto md:-left-8 lg:-left-10 bg-white p-2 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl shadow-xl border border-slate-100 z-30 flex items-center gap-2 sm:gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500 max-w-[80%] sm:max-w-none">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-slate-100 bg-green-50 flex items-center justify-center shrink-0">
                <Banknote className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600" />
              </div>
              <div className="min-w-0">
                <div className="text-[8px] sm:text-[11px] md:text-xs text-slate-400 font-bold mb-0.5 whitespace-nowrap">
                  Visit Charges
                </div>
                <div className="text-xs sm:text-sm font-extrabold text-slate-900 whitespace-nowrap">
                  Rs.600 Only
                </div>
              </div>
            </div>
 
            {/* Background Blob behind image */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-112.5 bg-sky-200/50 rounded-full blur-2xl sm:blur-[60px] z-0 pointer-events-none"
              style={{ transform: "translateZ(0)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}