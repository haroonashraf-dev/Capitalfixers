import { processSteps } from '../../data/content';
import { CalendarCheck, PenTool, CheckCircle } from 'lucide-react';

const icons = [CalendarCheck, PenTool, CheckCircle];

export default function ProcessSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-900 px-4 text-white overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.3) 0%, rgba(30,58,138,0) 70%)', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(12,74,110,0.2) 0%, rgba(12,74,110,0) 70%)', transform: 'translateZ(0)' }} />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-24">
          <h2 className="text-base font-bold text-blue-400 tracking-wide uppercase mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Works</span>
          </h3>
          <p className="text-lg text-slate-400 font-medium leading-relaxed">
            Getting your home repairs done is simple and hassle-free with our straightforward 3-step process. No delays, no confusion.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 relative">
          
          {/* Connecting Line - desktop only */}
          <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-px bg-slate-700/50 -z-10">
            <div className="h-full bg-gradient-to-r from-blue-500 to-sky-400 w-full opacity-60"></div>
          </div>

          {processSteps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div key={step.id} className="flex-1 relative flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-900 shadow-xl mb-8 z-10 relative group hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-0 bg-blue-600/10 rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  <Icon className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{step.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed px-4">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
