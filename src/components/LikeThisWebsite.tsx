import React from 'react';
import { ExternalLink, MonitorSmartphone, Search, TrendingUp, LayoutTemplate, Rocket } from 'lucide-react';

export default function LikeThisWebsite() {
  return (
    <section className="py-4 sm:py-6 bg-white relative overflow-hidden border-t border-slate-200 shadow-sm">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 -m-32 w-80 h-80 bg-blue-50 rounded-full blur-[60px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -m-32 w-80 h-80 bg-sky-50 rounded-full blur-[60px] pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 w-full flex flex-col md:flex-row items-center gap-4 lg:gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start max-w-md shrink-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-2">
                <Rocket className="w-3.5 h-3.5" /> Web Design Agency
              </div>
              
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-1">
                Need a website <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-sky-500">like this?</span>
              </h2>
              
              <p className="text-slate-600 font-medium text-xs sm:text-sm leading-relaxed max-w-sm">
                We help local businesses build high-converting, mobile-friendly websites to generate more leads.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-2 max-w-xl">
              {[
                { text: "Business Websites", icon: MonitorSmartphone },
                { text: "Landing Pages", icon: LayoutTemplate },
                { text: "Google Business Setup", icon: Search },
                { text: "SEO Optimization", icon: TrendingUp }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-1.5 text-slate-700 bg-white rounded-md px-2.5 py-1.5 border border-slate-200 shadow-sm">
                  <item.icon className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="text-xs font-medium whitespace-nowrap">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="shrink-0 w-full sm:w-auto mt-2 lg:mt-0">
            <a 
              href="https://haroondev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-lg transition-all shadow-md shadow-blue-600/20 active:scale-95 text-sm"
            >
              Connect Us
              <ExternalLink className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
