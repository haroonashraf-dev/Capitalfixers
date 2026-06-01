import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Plus, Star } from 'lucide-react';
import { defaultServices } from '../../data/defaultServices';
import { ServiceItem } from '../../pages/Admin';

export default function ServicesSection() {
  const [servicesList, setServicesList] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    function fetchServices() {
      const stored = localStorage.getItem('local_services');
      if (stored) {
        let parsed = JSON.parse(stored);
        parsed = parsed.map((item: any) => {
          if (!item.categoryId) {
             const def = defaultServices.find(d => d.id === item.id);
             if (def) item.categoryId = def.categoryId;
          }
          return item;
        });
        setServicesList(parsed);
      } else {
        setServicesList(defaultServices);
      }
      setLoading(false);
    }
    fetchServices();
  }, []);

  // Sort: Trendy or Seasonal on top
  const sortedServices = [...servicesList].sort((a, b) => {
    const aPriority = a.isTrendy || a.isSeasonal ? 1 : 0;
    const bPriority = b.isTrendy || b.isSeasonal ? 1 : 0;
    return bPriority - aPriority;
  });

  return (
    <section className="py-4 lg:py-6 bg-slate-50 relative overflow-hidden">
      {/* Minimal background elements */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(219,234,254,0.7) 0%, rgba(219,234,254,0) 70%)',
          transform: 'translateZ(0)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full max-w-[1400px]">
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-4">
          
  
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {sortedServices.map((service) => (
              <div 
                key={service.id}
                className="group relative flex flex-col p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                {(service.isTrendy || service.isSeasonal) && (
                  <div className="absolute -top-3 left-4 flex gap-2">
                    {service.isTrendy && <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">Trendy</span>}
                    {service.isSeasonal && <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">Seasonal</span>}
                  </div>
                )}
                
                <h4 className="text-base sm:text-lg font-bold text-blue-700 mb-2 leading-tight">
                  <Link to={`/service/${service.slug}`} className="hover:underline">{service.title}</Link>
                </h4>
                
                <p className="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-4 flex-grow">
                  {service.description}
                </p>
                
                <div className="h-px bg-slate-100 w-full mb-4"></div>

                <div className="flex items-end justify-between mt-auto">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2 mb-1">
                      {service.discountPrice ? (
                        <>
                          <span className="text-xs text-slate-400 line-through font-semibold">Rs:{service.price}</span>
                          <span className="text-sm font-extrabold text-slate-900">Rs:{service.discountPrice}</span>
                        </>
                      ) : (
                        <span className="text-sm font-extrabold text-slate-900">Rs:{service.price}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-current" /> {service.rating}
                    </div>
                  </div>
                  
                  <Link to={`/service/${service.slug}`} className="flex items-center justify-center gap-1.5 px-4 py-2 sm:px-4 sm:py-2 bg-white border-2 border-slate-900 text-slate-900 font-bold text-xs sm:text-sm rounded-xl hover:bg-slate-900 hover:text-white transition-colors active:scale-95">
                    View <Plus className="w-4 h-4" strokeWidth={3} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
