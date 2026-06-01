import { Star, MapPin, Quote } from 'lucide-react';
import { testimonials } from '../../data/content';

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-3">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Loved By <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Local Families</span>
          </h3>
          <p className="text-lg text-slate-600 font-medium leading-relaxed">
            Don't just take our word for it. Read what your neighbors in Islamabad and Rawalpindi have to say about our complete home services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-slate-50 p-8 sm:p-10 rounded-[2rem] border border-slate-200/60 relative group hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300">
              <Quote className="absolute top-8 right-8 w-12 h-12 text-blue-200 opacity-50 group-hover:text-blue-300 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-12" />
              
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300 fill-slate-300'}`} 
                  />
                ))}
              </div>
              <p className="text-slate-600 font-medium leading-relaxed italic flex-grow mb-8 relative z-10 text-lg">"{testimonial.review}"</p>
              
              <div className="relative z-10">
                <h4 className="text-slate-900 font-bold text-xl mb-1">{testimonial.name}</h4>
                <div className="flex items-center gap-1.5 text-sm font-bold text-slate-500">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
