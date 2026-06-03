import { Clock, Shield, ThumbsUp, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: "On-Time Service",
    description: "Your time is valuable. We arrive exactly when scheduled, providing rapid response for emergencies."
  },
  {
    icon: Shield,
    title: "Verified Experts",
    description: "Every technician is background-checked, fully trained, and highly experienced in their field."
  },
  {
    icon: HeartHandshake,
    title: "Transparent Pricing",
    description: "No hidden fees. You get a clear, upfront estimate before any work begins."
  },
  {
    icon: ThumbsUp,
    title: "Guaranteed Satisfaction",
    description: "We don't cut corners. High-quality materials and a commitment to doing the job right."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-2 lg:py-4 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <div className="order-2 lg:order-1 relative">
            {/* Visual Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10 w-full lg:w-11/12">
              <img 
                src="https://images.pexels.com/photos/8293699/pexels-photo-8293699.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="AC Repairing" 
                loading="lazy"
                className="w-full h-60 sm:h-80 object-cover rounded-3xl shadow-lg translate-y-8"
              />
              <img 
                src="https://images.pexels.com/photos/33694019/pexels-photo-33694019.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Electrician Fixing" 
                loading="lazy"
                className="w-full h-60 sm:h-80 object-cover rounded-3xl shadow-xl"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white rounded-3xl p-3 shadow-2xl border border-slate-100 text-center transform scale-110">
              <span className="block text-3xl font-extrabold text-blue-600 mb-1">10+</span>
              <span className="block text-xs font-extrabold text-slate-800 uppercase tracking-widest text-center">Years of<br/>Excellence</span>
            </div>
            
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-100 rounded-full z-0 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.6) 0%, rgba(219,234,254,0) 70%)', transform: 'translateZ(0)' }} />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-3 text-center lg:text-left">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 text-center lg:text-left leading-tight">
              We Set the Standard for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Home Services</span>
            </h3>
            <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 text-center lg:text-left">
              From AC repairs to deep cleaning, we provide a complete suite of services with peace of mind. We take away the stress of home maintenance by delivering reliable, professional results.
            </p>
            
            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 shrink-0 flex items-center justify-center text-blue-600 shadow-inner">
                    <reason.icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2 text-center sm:text-left">{reason.title}</h4>
                    <p className="text-slate-500 font-medium leading-relaxed text-sm sm:text-base text-center sm:text-left">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
