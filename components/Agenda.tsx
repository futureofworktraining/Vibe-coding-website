import React from 'react';
import { Terminal, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Agenda: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="program" className="bg-brand-dark py-24 text-white relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: 'linear-gradient(0deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #333 25%, #333 26%, transparent 27%, transparent 74%, #333 75%, #333 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20 reveal">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
            {t.agenda.title} <span className="text-brand-yellow">Roadmap</span>
          </h2>
          <p className="font-mono text-gray-400 text-sm md:text-base max-w-xl mx-auto border-l-2 border-brand-yellow pl-4 text-left whitespace-pre-line">
            {t.agenda.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Main timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 md:-ml-0.5"></div>

          <div className="space-y-16 md:space-y-24">
            {t.agenda.modules.map((item, index) => (
              <div 
                key={index} 
                className={`reveal flex flex-col md:flex-row gap-8 items-center md:items-start relative ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 -ml-3 md:-ml-4 w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand-black border-4 border-brand-yellow z-10 shadow-[0_0_15px_rgba(255,215,0,0.5)]"></div>

                {/* Content Card */}
                <div className={`pl-12 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="group relative">
                    <div className="absolute inset-0 bg-brand-yellow transform translate-x-2 translate-y-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="bg-gray-900 border border-gray-700 p-6 md:p-8 rounded-sm relative z-10 hover:-translate-y-1 hover:-translate-x-1 transition-transform duration-300">
                      
                      <div className={`flex items-center gap-3 mb-4 text-brand-yellow font-mono text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        <span className="opacity-50">0{index + 1} //</span>
                        <span className="uppercase tracking-widest font-bold">Module</span>
                      </div>

                      <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-brand-yellow transition-colors">
                        {item.title}
                      </h3>
                      
                      <ul className={`space-y-3 font-mono text-sm text-gray-400 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                        {item.desc.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                             {/* Icon only visible on mobile or aligned correctly */}
                             <span className="md:hidden text-brand-yellow mt-1">
                                <Terminal size={14} />
                             </span>
                             <span>{point}</span>
                             <span className={`hidden md:block text-brand-yellow mt-1 ${index % 2 === 0 ? 'order-last' : ''}`}>
                                <Terminal size={14} />
                             </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16 reveal">
            <div className="animate-bounce bg-brand-yellow text-black p-3 rounded-full">
                <ArrowDown size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agenda;