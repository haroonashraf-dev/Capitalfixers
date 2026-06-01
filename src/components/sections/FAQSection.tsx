import { useState } from 'react';
import { faqs } from '../../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function FAQSection() {
  const [openIndex, setIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-6 lg:py-8 bg-slate-50 relative overflow-hidden">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, rgba(219,234,254,0) 70%)', transform: 'translateZ(0)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-100 rounded-3xl mx-auto mb-6 flex items-center justify-center text-blue-600 rotate-12">
            <HelpCircle className="w-8 h-8 -rotate-12" />
          </div>
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-3">FAQ</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Questions</span>
          </h3>
          <p className="text-lg text-slate-600 font-medium">Clear answers for your home services questions.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === idx ? 'border-blue-200 shadow-lg shadow-blue-900/5' : 'border-slate-200/60 shadow-sm hover:border-slate-300'}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => toggleFaq(idx)}
              >
                <span className={`font-bold text-left pr-4 transition-colors ${openIndex === idx ? 'text-blue-700' : 'text-slate-800'}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${openIndex === idx ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-400'}`}>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`} />
                </div>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-0 text-slate-600 font-medium text-sm leading-relaxed border-t border-slate-50 mt-1 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
