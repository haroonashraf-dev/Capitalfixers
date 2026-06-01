import { Phone, MessageCircle } from 'lucide-react';

export default function StickyCTA() {
  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex gap-2">
      <a 
        href="tel:+923000000000" 
        className="flex-1 bg-white border border-slate-200 text-slate-800 py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg active:scale-[0.98] transition-transform"
      >
        <Phone className="w-5 h-5 text-primary" />
        Call Now
      </a>
      
      <a 
        href="https://wa.me/923000000000" 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 bg-[#25D366] text-white py-3.5 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-[0_8px_16px_rgba(37,211,102,0.25)] active:scale-[0.98] transition-transform"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        WhatsApp
      </a>
    </div>
  );
}
