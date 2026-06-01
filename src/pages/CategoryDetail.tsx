import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { defaultServices } from '../data/defaultServices';
import { ServiceItem } from './Admin';
import { services as categories } from '../data/content';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactSection from '../components/sections/ContactSection';

export default function CategoryDetail() {
  const { categorySlug } = useParams();
  const [categoryServices, setCategoryServices] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);

  const currentCategory = categories.find(c => c.slug === categorySlug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const stored = localStorage.getItem('local_services');
    let allServices = defaultServices;
    if (stored) {
      let parsed = JSON.parse(stored);
      parsed = parsed.map((item: any) => {
        if (!item.categoryId) {
           const def = defaultServices.find(d => d.id === item.id);
           if (def) item.categoryId = def.categoryId;
        }
        return item;
      });
      allServices = parsed;
    }
    
    // Filter services that belong to this category
    const filtered = allServices.filter(s => s.categoryId === categorySlug);
    setCategoryServices(filtered);
    setLoading(false);
  }, [categorySlug]);

  if (loading) {
     return <div className="min-h-[60vh] flex items-center justify-center">Loading...</div>;
  }

  if (!currentCategory) {
     return (
       <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
         <h2 className="text-2xl font-bold">Category Not Found</h2>
         <Link to="/services" className="text-blue-600 hover:underline mt-4">Go back to Services</Link>
       </div>
     );
  }

  return (
    <>
      <Helmet>
        <title>{currentCategory.title} | Capitalfixers</title>
        <meta name="description" content={`Explore our professional ${currentCategory.title.toLowerCase()} services in Islamabad and Rawalpindi. ${currentCategory.description}`} />
        <meta name="keywords" content={`${currentCategory.title}, Islamabad, Rawalpindi, home maintenance, professional services`} />
        
        <link rel="canonical" href={`https://capitalfixers.com/services/${currentCategory.slug}`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://capitalfixers.com/services/${currentCategory.slug}`} />
        <meta property="og:title" content={`${currentCategory.title} | Capitalfixers`} />
        <meta property="og:description" content={`Explore our professional ${currentCategory.title.toLowerCase()} services. ${currentCategory.description}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${currentCategory.title} | Capitalfixers`} />
        <meta name="twitter:description" content={`Explore our professional ${currentCategory.title.toLowerCase()} services. ${currentCategory.description}`} />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": currentCategory.title,
            "description": currentCategory.description,
            "url": `https://capitalfixers.com/services/${currentCategory.slug}`,
            "provider": {
              "@type": "LocalBusiness",
              "name": "Capitalfixers",
              "image": "https://capitalfixers.com/logo.jpeg"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://capitalfixers.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://capitalfixers.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": currentCategory.title,
                "item": `https://capitalfixers.com/services/${currentCategory.slug}`
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-slate-50 py-12 lg:py-16 border-b border-slate-200">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">{currentCategory.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{currentCategory.description}</p>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          {categoryServices.length > 0 && (
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Available Services</h2>
              <Link to="/services" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                 <ArrowLeft className="w-4 h-4" /> All Categories
              </Link>
            </div>
          )}

          {categoryServices.length === 0 ? (
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-8">
                  <h3 className="text-xl font-bold mb-4 text-slate-900">What's included in this service?</h3>
                  <ul className="space-y-4">
                    {currentCategory.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                    {!currentCategory.features && (
                      <>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-slate-700 font-medium">Professional & Certified Technicians</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-slate-700 font-medium">Transparent Pricing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                          <span className="text-slate-700 font-medium">Quick and Reliable Service</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="w-full md:w-1/3 bg-white border border-slate-200 rounded-3xl p-6 sticky top-24 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-slate-900">Request this Service</h3>
                <p className="text-sm font-semibold text-slate-500 mb-6">Our technicians are ready to deploy to your location.</p>
                
                <div className="space-y-3">
                  <a href={`https://wa.me/923137386619?text=Hello,%20I'm%20interested%20in%20the%20${encodeURIComponent(currentCategory.title)}%20service.`} target="_blank" rel="noreferrer" className="w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-colors shadow-lg shadow-green-500/20">
                    Book via WhatsApp
                  </a>
                  <a href="tel:+923137386619" className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map(service => (
                <div key={service.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 line-clamp-2">{service.description}</p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      {service.discountPrice ? (
                        <div className="flex flex-col">
                          <span className="font-bold text-lg text-slate-900">Rs.{service.discountPrice}</span>
                          <span className="text-xs text-slate-400 line-through">Rs.{service.price}</span>
                        </div>
                      ) : (
                        <span className="font-bold text-lg text-slate-900">Rs.{service.price}</span>
                      )}
                    </div>
                    <Link to={`/service/${service.slug}`} className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                       <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <ContactSection />
    </>
  );
}
