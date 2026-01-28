import React, { useState } from 'react';
import { Calendar, Video, Film, ChevronDown, Clock, Download, Wifi, HelpCircle, FileText, Code, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  const featuresData = [
    {
      icon: Video,
      title: t.faq.features.live.title,
      description: t.faq.features.live.desc
    },
    {
      icon: Film,
      title: t.faq.features.vod.title,
      description: t.faq.features.vod.desc
    },
    {
      icon: Code,
      title: t.faq.features.lowcode.title,
      description: t.faq.features.lowcode.desc
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-brand-yellow py-20 pb-32">
       {/* Highlights / Features Section */}
       <div className="container mx-auto px-4 md:px-6 mb-24">
         <div className="text-center mb-16 reveal">
            <h2 className="text-4xl font-black uppercase mb-6">{t.nav.start} Features</h2>
            <p className="text-lg font-medium text-black/80">3 reasons to join us</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuresData.map((feature, idx) => (
              <div 
                key={idx} 
                className="reveal group bg-white border-2 border-black p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="bg-black text-brand-yellow w-14 h-14 flex items-center justify-center rounded-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-black mb-4 uppercase">{feature.title}</h3>
                <p className="text-sm font-medium text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
         </div>
       </div>

        {/* Logistics Icons */}
        <div className="container mx-auto px-4 md:px-6 mb-24">
            <div className="text-center mb-12 reveal">
                <div className="inline-block bg-black text-brand-yellow px-4 py-1 font-mono text-sm font-bold mb-4 uppercase tracking-widest border border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)]">
                    {t.faq.logistics.header}
                </div>
                <h2 className="text-4xl font-black uppercase tracking-tight mt-4">{t.faq.logistics.header}</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Widget 1: Time */}
                <div className="reveal group bg-white border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
                    <div className="bg-black text-brand-yellow p-3 flex justify-between items-center font-mono text-xs uppercase font-bold border-b-2 border-black">
                        <span>{t.faq.logistics.time}</span>
                        <Calendar size={14} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center min-h-[180px] text-center">
                        <div className="text-7xl font-black text-black leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                            15
                        </div>
                        <div className="text-2xl font-bold uppercase tracking-widest mb-1">Dec</div>
                        <div className="font-mono text-sm text-gray-500">{t.hero.date}</div>
                    </div>
                    <div className="bg-gray-50 border-t-2 border-black p-4 flex items-center justify-center gap-2 font-mono text-sm font-bold">
                        <Clock size={16} />
                        19:00 - 22:00
                    </div>
                </div>

                {/* Widget 2: Platform */}
                <div className="reveal group bg-white border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 delay-100">
                    <div className="bg-black text-brand-yellow p-3 flex justify-between items-center font-mono text-xs uppercase font-bold border-b-2 border-black">
                        <span>{t.faq.logistics.connection}</span>
                        <Wifi size={14} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center min-h-[180px] text-center bg-dots-pattern">
                         <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                            <Video size={40} className="text-white" />
                         </div>
                         <h3 className="text-2xl font-black uppercase">Zoom Live</h3>
                         <div className="flex items-center gap-2 mt-2">
                            <span className="relative flex h-3 w-3">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-mono font-bold text-green-600">{t.faq.logistics.onlineActive}</span>
                         </div>
                    </div>
                    <div className="bg-gray-50 border-t-2 border-black p-4 text-center font-mono text-sm font-bold">
                        {t.faq.logistics.linkEmail}
                    </div>
                </div>

                {/* Widget 3: Loot */}
                <div className="reveal group bg-white border-2 border-black rounded-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 delay-200">
                    <div className="bg-black text-brand-yellow p-3 flex justify-between items-center font-mono text-xs uppercase font-bold border-b-2 border-black">
                        <span>{t.faq.logistics.assets}</span>
                        <Download size={14} />
                    </div>
                    <div className="p-8 flex flex-col items-center justify-center min-h-[180px]">
                        <ul className="space-y-3 text-left w-full pl-4">
                            <li className="flex items-center gap-3 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                <Film size={20} className="text-black" /> {t.faq.logistics.recording}
                            </li>
                            <li className="flex items-center gap-3 font-bold text-lg group-hover:translate-x-2 transition-transform delay-75">
                                <FileText size={20} className="text-black" /> {t.faq.logistics.prompts}
                            </li>
                            <li className="flex items-center gap-3 font-bold text-lg group-hover:translate-x-2 transition-transform delay-100">
                                <span className="font-mono text-xl font-black bg-black text-white px-1">PDF</span> {t.faq.logistics.materials}
                            </li>
                        </ul>
                    </div>
                    <div className="bg-gray-50 border-t-2 border-black p-4 text-center font-mono text-sm font-bold text-gray-500">
                        {t.faq.logistics.access}
                    </div>
                </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16 text-center reveal">
                <button className="group relative inline-flex items-center justify-center gap-3 bg-black text-white text-lg md:text-xl font-black uppercase px-16 py-6 tracking-wider hover:bg-gray-900 border-2 border-black transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.5)] hover:shadow-none hover:translate-y-1 hover:translate-x-1">
                    <span className="absolute inset-0 border-2 border-white opacity-10 group-hover:opacity-20"></span>
                    {t.faq.logistics.book}
                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" strokeWidth={3} />
                </button>
                <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest opacity-60">
                     {t.faq.logistics.limited}
                </p>
            </div>
        </div>

      {/* Actual FAQ Accordion */}
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 reveal">
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-4">{t.faq.title}</h2>
          <p className="text-lg text-black/80">{t.faq.subtitle}</p>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div 
              key={index} 
              className="reveal relative"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-white border-2 border-black transition-all duration-300 ${
                  openIndex === index 
                  ? 'shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -translate-x-1 -translate-y-1' 
                  : 'hover:border-black/50 hover:bg-white/80 shadow-sm'
                }`}>
                <button
                  className="w-full p-6 flex items-start gap-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full border-2 border-black font-mono text-sm font-bold transition-colors mt-0.5 ${openIndex === index ? 'bg-black text-brand-yellow' : 'bg-transparent text-black'}`}>
                    {index + 1}
                  </div>
                  
                  <span className={`flex-grow text-left font-bold text-lg md:text-xl transition-colors ${openIndex === index ? 'text-black' : 'text-gray-800'}`}>
                    {item.q}
                  </span>
                  
                  <ChevronDown 
                    className={`flex-shrink-0 transition-transform duration-300 mt-1 ${openIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    size={24}
                    strokeWidth={3}
                  />
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-700 leading-relaxed border-t-2 border-black/5 mx-6 mt-2">
                    <div className="flex gap-4 pt-4">
                      <HelpCircle className="flex-shrink-0 text-black w-6 h-6 mt-1" />
                      <div className="text-base md:text-lg">{item.a}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;