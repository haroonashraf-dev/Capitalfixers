import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { services } from '../data/content';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Logo className="w-10 h-10 shrink-0 border border-slate-700" />
              <h3 className="text-white font-bold text-xl tracking-tight">Capitalfixers</h3>
            </div>
            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              Professional home maintenance, AC repair, plumbing, and cleaning services across Islamabad and Rawalpindi. Trusted by homeowners and businesses.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.facebook.com/share/1Kyu4hq33s/?mibextid=wwXIfr" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/capital.fixers?igsh=NzhqMmdtYW0yMndl&utm_source=qr" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-slate-400">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white transition-colors">All Services</Link></li>
              <li><Link to="/areas" className="text-sm hover:text-white transition-colors">Areas We Serve</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.slug}`} className="text-sm hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span> G-11, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+923137386619" className="hover:text-white pb-0">+92 313 7386619</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:Capitalfixers.ms@gmail.com" className="hover:text-white">Capitalfixers.ms@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Mon - Sun: 9:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Capitalfixers. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>

        {/* Developer Credit / Promo */}
        <div className="mt-8 pt-6 border-t border-slate-800/50 flex flex-col items-center justify-center text-center">
          <p className="text-xs text-slate-500 flex items-center gap-2">
            <span>Need a professional website for your business?</span>
            <a 
              href="https://haroondev.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors inline-flex items-center gap-1"
            >
              Hire the Developer &rarr;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
