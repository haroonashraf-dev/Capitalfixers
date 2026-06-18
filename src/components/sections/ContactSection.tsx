import React, { useState } from 'react';
import { Phone, Clock, MessageCircle, Info, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address || !formData.service) {
      alert("Please fill in all required fields (Name, Phone, Address, Service).");
      return;
    }

    const message = `Hello, I'd like to request a service callback.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Address:* ${formData.address}%0A*Service:* ${formData.service}%0A*Details:* ${formData.message || 'N/A'}`;
    const whatsappUrl = `https://wa.me/923117430276?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-6 lg:py-8 bg-slate-50 relative overflow-hidden" id="contact">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(219,234,254,0.5) 0%, rgba(219,234,254,0) 70%)', transform: 'translateZ(0)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(224,242,254,0.4) 0%, rgba(224,242,254,0) 70%)', transform: 'translateZ(0)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Information */}
          <div className="lg:col-span-2 space-y-6 lg:pr-8">
            <a href="https://wa.me/923117430276" target="_blank" rel="noreferrer" className="flex items-center gap-5 p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-green-300 hover:bg-green-50 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-green-700 transition-colors">Chat on WhatsApp</h4>
                <p className="text-slate-500 text-sm font-bold">Fastest way to get an estimate</p>
              </div>
            </a>

            <a href="tel:+923117430276" className="flex items-center gap-5 p-6 rounded-3xl border border-slate-200/60 bg-white hover:border-blue-300 hover:bg-blue-50 shadow-sm hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">Call Us Directly</h4>
                <p className="text-slate-500 text-sm font-bold">Available for urgent needs</p>
              </div>
            </a>
            
            <div className="flex items-start gap-5 p-6 rounded-3xl border border-slate-200/60 bg-white shadow-sm">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 shrink-0">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">Operating Hours</h4>
                <div className="space-y-1 text-sm font-bold text-slate-500">
                  <div className="flex justify-between w-full max-w-[200px]">
                    <span>Mon - Sun:</span>
                    <span className="text-slate-900">9:00 AM - 9:00 PM</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs text-orange-700 bg-orange-100/80 px-3 py-1.5 rounded-lg font-bold mt-4 w-fit">
                  <Info className="w-4 h-4" />
                  24/7 Emergency Support Available
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-5 p-6 rounded-3xl border border-slate-200/60 bg-white shadow-sm">
              <div className="w-14 h-14 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-600 shrink-0">
                <MapPin className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">Our Location</h4>
                <p className="text-slate-500 text-sm font-bold">Islamabad & Rawalpindi</p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 sm:p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-slate-200/20 relative">
            <h3 className="mb-8 font-bold text-3xl text-slate-900">Request a Service Callback</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Your Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-bold text-slate-700 mb-2">Service Location / Address</label>
                <input 
                  type="text" 
                  id="address" 
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all"
                  placeholder="Street address, Sector, City"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">Required Service</label>
                <div className="relative">
                  <select 
                    id="service" 
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select a service category...</option>
                    <option value="ac-repair">AC Repair & Service</option>
                    <option value="plumbing">Plumbing Services</option>
                    <option value="electrician">Electrician Services</option>
                    <option value="cleaning">Cleaning Services</option>
                    <option value="appliance">Appliance Repair</option>
                    <option value="moving">Home Shifting</option>
                  </select>
                  <div className="absolute top-1/2 right-5 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Additional Details (Optional)</label>
                <textarea 
                  id="message" 
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-500 transition-all resize-none"
                  placeholder="Describe your issue or requirements..."
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-2xl transition-all shadow-lg shadow-blue-600/20 hover:-translate-y-0.5 active:translate-y-0 mt-2"
              >
                Submit Request
              </button>
            </form>
            <p className="text-sm font-bold text-center text-slate-400 mt-6">
              By submitting this form, you agree to our privacy policy.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
