import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ThermometerSnowflake, Wrench, Zap, Sofa, Brush, MonitorPlay, Refrigerator, Truck } from 'lucide-react';
import { services as categories } from '../../data/content';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'ThermometerSnowflake': return ThermometerSnowflake;
    case 'Wrench': return Wrench;
    case 'Zap': return Zap;
    case 'Sofa': return Sofa;
    case 'Brush': return Brush;
    case 'MonitorPlay': return MonitorPlay;
    case 'Refrigerator': return Refrigerator;
    case 'Truck': return Truck;
    default: return Wrench;
  }
};

export default function CategoriesSection() {
  return (
    <section className="py-12 lg:py-16 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full opacity-40 pointer-events-none blur-[80px]"
        style={{
          background: 'linear-gradient(to right, #60a5fa, #38bdf8)'
        }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Service Categories</span>
          </h2>
          <p className="text-base text-slate-600 font-medium">
            Explore our wide range of professional maintenance and repair services. Select a category to see all available options.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = getIcon(category.icon || "");
            return (
              <Link
                key={category.id}
                to={`/services/${category.slug}`}
                className={`group relative flex flex-col p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden ${category.image ? 'bg-slate-900' : 'bg-white'}`}
              >
                {category.image && (
                  <div 
                    className="absolute inset-0 z-0 bg-cover bg-center transition-all duration-500 group-hover:scale-105 opacity-50 group-hover:opacity-60"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                )}

                <div className="relative z-10 w-14 h-14 rounded-xl mb-4 flex items-center justify-center bg-blue-50/90 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 backdrop-blur-sm">
                  <Icon className="w-7 h-7" />
                </div>
                
                <h3 className={`relative z-10 text-xl font-bold mb-2 leading-tight ${category.image ? 'text-white' : 'text-slate-900'}`}>
                  {category.title}
                </h3>
                
                <p className={`relative z-10 font-medium text-sm leading-relaxed mb-6 grow ${category.image ? 'text-slate-200' : 'text-slate-500'}`}>
                  {category.description}
                </p>
                
                <div className={`relative z-10 mt-auto flex items-center text-sm font-bold ${category.image ? 'text-blue-300 group-hover:text-blue-200' : 'text-blue-600 group-hover:text-blue-700'}`}>
                  View Services <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
