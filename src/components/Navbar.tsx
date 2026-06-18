import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, ChevronDown, CheckCircle2, ThermometerSnowflake, Wrench, Zap, Sofa, Brush, MonitorPlay, Refrigerator, Truck } from 'lucide-react';
import { useState, useEffect } from 'react';
import Logo from './Logo';
import { services as categories } from '../data/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Areas', path: '/areas' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      style={{ transform: 'translateZ(0)' }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-white/95 lg:bg-transparent py-5 lg:py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center bg-white/0 rounded-2xl lg:bg-transparent">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <Logo className="w-10 h-10 lg:w-11 lg:h-11 shrink-0" />
            <div>
              <h1 className="font-bold text-lg lg:text-xl tracking-tight text-slate-900 leading-none">Capital<span className="text-blue-600">fixers</span></h1>
              <p className="text-[9px] lg:text-[10px] text-slate-500 font-bold tracking-widest mt-1">MAINTENANCE & REPAIR</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className={`hidden lg:flex items-center gap-8 px-6 py-2.5 rounded-full border transition-colors duration-300 ${isScrolled ? 'bg-slate-50/80 border-transparent' : 'bg-white shadow-sm border-slate-200'}`}>
            <Link
              to="/"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Home
            </Link>

            <div className="relative group"
                 onMouseEnter={() => setDropdownOpen(true)}
                 onMouseLeave={() => setDropdownOpen(false)}>
              <Link 
                to="/services"
                className={`text-sm font-semibold transition-colors flex items-center gap-1 py-4 -my-4 ${
                  location.pathname.startsWith('/services') ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                Services <ChevronDown className="w-4 h-4" />
              </Link>
              
              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[320px] bg-white rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden py-3 px-2 z-50">
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                        {categories.map((category) => (
                      <Link
                        key={category.id}
                        to={`/services/${category.slug}`}
                        className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors border border-blue-100">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-slate-800 group-hover/item:text-blue-700 transition-colors line-clamp-1">{category.title}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/about' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/areas"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/areas' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Areas
            </Link>

            <Link
              to="/contact"
              className={`text-sm font-semibold transition-colors ${
                location.pathname === '/contact' ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Call to action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="https://wa.me/923117430276?text=Hello!%20I%E2%80%99m%20looking%20for%20AC%20repair,%20electrician,%20or%20other%20home%20services.%20Please%20share%20details."
              target="_blank"
              rel="noreferrer"
              className={`hidden md:flex items-center gap-2.5 px-4 py-2 rounded-full border transition-all duration-300 ${isScrolled ? 'bg-blue-50 text-blue-700 border-transparent' : 'bg-white text-slate-700 hover:text-blue-600 border-slate-200 shadow-sm'}`}
            >
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-sm tracking-wide">+92 3117430276</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden p-2.5 bg-white rounded-xl text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-colors focus:outline-none border border-slate-200/50 shadow-sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full h-[calc(100vh-72px)] overflow-y-auto bg-white shadow-xl flex flex-col p-4 sm:p-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3.5 px-5 rounded-2xl font-bold text-lg ${
                  location.pathname === link.path 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Services for Mobile Menu */}
            <div className="py-3 px-3 rounded-2xl bg-slate-50/80 border border-slate-100 mt-2 mb-2">
               <div className="font-bold text-slate-400 text-xs tracking-wider uppercase mb-2 px-3">Services</div>
               <div className="flex flex-col gap-1">
                 {categories.map(c => (
                    <Link
                      key={c.id}
                      to={`/services/${c.slug}`}
                      className="py-3 px-3 rounded-xl text-[15px] font-semibold text-slate-700 hover:bg-white hover:text-blue-600 transition-colors"
                    >
                      {c.title}
                    </Link>
                 ))}
               </div>
            </div>
          </nav>
          
          <div className="h-px bg-slate-100 my-6"></div>
          
          <div className="flex flex-col gap-3 mt-auto pb-8">
            <a href="https://wa.me/923117430276?text=Hello!%20I%E2%80%99m%20looking%20for%20AC%20repair,%20electrician,%20or%20other%20home%20services.%20Please%20share%20details."
      target="_blank" >
              <Phone className="w-5 h-5" /> Call Us Now
            </a>
            <a href="https://wa.me/923117430276" target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#25D366] text-white font-bold text-base shadow-lg shadow-green-500/20 active:scale-95 transition-all">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
