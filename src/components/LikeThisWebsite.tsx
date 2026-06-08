import React from 'react';
import { ExternalLink, MonitorSmartphone, Search, TrendingUp, LayoutTemplate, Rocket } from 'lucide-react';

export default function LikeThisWebsite() {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl border border-slate-800">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
            
            {/* Left Content */}
            <div className="flex-1 w-full text-center lg:text-left">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                <Rocket className="w-4 h-4" /> Web Design Agency
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Need a website <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-sky-400">Need Website like this?</span>
              </h2>
              
              <p className="text-slate-400 font-medium text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                We help local businesses build high-converting, mobile-friendly websites that turn visitors into paying customers.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
                {[
                  { text: "Business Websites", icon: MonitorSmartphone },
                  { text: "Landing Pages", icon: LayoutTemplate },
                  { text: "Google Business Setup", icon: Search },
                  { text: "SEO Optimization", icon: TrendingUp }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-slate-300 bg-white/5 rounded-xl p-3 border border-white/5 hover:bg-white/10 transition-colors">
                    <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-semibold">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex flex-col gap-4 w-full lg:w-[240px] shrink-0">
              <a 
                href="https://haroondev.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
              >
                Connect Us
                <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
