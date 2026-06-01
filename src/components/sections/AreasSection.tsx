import { areasServed } from '../../data/content';
import { MapPin } from 'lucide-react';

export default function AreasSection() {
  return (
    <section className="py-1 lg:py-2 bg-blue-50/30 border-y border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-2">Coverage Areas</h2>
          </div>
          <div className="text-center md:text-right hidden md:block">
            <p className="text-slate-500 font-medium max-w-sm">Covering major areas for fast response.</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {areasServed.map((area, idx) => (
            <div key={idx} className="bg-white p-4 justify-center items-center flex gap-2 rounded-2xl shadow-sm hover:shadow-md border border-slate-200/50 hover:border-blue-200 transition-all text-sm font-bold text-slate-700 group hover:-translate-y-0.5">
              <MapPin className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
