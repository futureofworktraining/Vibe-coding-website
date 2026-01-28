import React from 'react';
import { Bot, Crown, Cog, Users, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const icons = [Bot, Crown, Cog, Users];

const Audience: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="audience" className="bg-brand-yellow py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 reveal">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase leading-none mb-4 whitespace-pre-line">
              {t.audience.title}
            </h2>
            <p className="text-lg text-black/80 font-medium">
              {t.audience.subtitle}
            </p>
          </div>
          <div className="hidden md:block">
            <Bot size={64} className="opacity-10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.audience.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div 
                key={index} 
                className="reveal group bg-white p-6 border-2 border-black relative overflow-hidden transition-all duration-300 hover:bg-black hover:text-white"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight size={24} className="text-brand-yellow" />
                </div>

                <div className="mb-8 p-3 bg-brand-yellow w-fit border border-black group-hover:border-white/20">
                  <Icon size={28} className="text-black" strokeWidth={2} />
                </div>

                <h3 className="text-2xl font-black mb-3 leading-tight uppercase">
                  {item.title}
                </h3>
                
                <p className="text-sm font-medium opacity-80 mb-4 leading-relaxed group-hover:opacity-100 group-hover:text-gray-300">
                  {item.desc}
                </p>

                <div className="inline-block bg-black text-brand-yellow text-xs font-bold px-2 py-1 uppercase tracking-widest group-hover:bg-brand-yellow group-hover:text-black transition-colors">
                  {item.tag}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;