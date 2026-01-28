import React, { useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Zap } from 'lucide-react';
import CoTVisualizer from './CoTVisualizer';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative bg-brand-yellow min-h-screen pt-20 pb-12 overflow-hidden flex items-center">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      {/* Fixed animation delay using inline style */}
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className={`lg:w-1/2 space-y-8 transform transition-all duration-1000 ${loaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            
            <div className="inline-flex items-center gap-2 bg-black text-brand-yellow px-4 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-widest border border-white/10 shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
              </span>
              {t.hero.badge}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-black leading-[0.9] tracking-tight">
              VIBE <span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-800 to-black/50">CODING</span>
              <br />
              <span className="text-2xl md:text-4xl font-bold tracking-normal block mt-2 text-black/80">
                {t.hero.titleSub}
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-medium text-black/80 max-w-xl leading-relaxed">
              {t.hero.desc} <span className="font-bold text-black bg-white/20 px-1">{t.hero.descHighlight}</span>
              <br/>
              {t.hero.descSub}
            </p>

            <div className="flex flex-wrap gap-4 py-2 font-mono text-sm md:text-base text-black/90">
              <div className="flex items-center gap-2 border-b-2 border-black/10 pb-1">
                <Calendar className="w-5 h-5" />
                <span className="font-bold">15.12.2024</span>
              </div>
              <div className="flex items-center gap-2 border-b-2 border-black/10 pb-1">
                <Clock className="w-5 h-5" />
                <span className="font-bold">19:00 - 22:00</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button className="group bg-black text-white text-lg px-8 py-4 font-bold uppercase tracking-wider rounded-none hover:bg-gray-900 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,0.4)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex items-center justify-center gap-3">
                {t.hero.btn}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 px-6 py-4 border-2 border-black text-black font-bold uppercase text-sm tracking-wide">
                <Zap size={16} fill="currentColor" />
                {t.hero.certificate}
              </div>
            </div>
          </div>

          {/* Visual Content (CoT) */}
          <div className={`lg:w-1/2 w-full transform transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Decorative elements behind */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-stripes-black opacity-10"></div>
              
              <CoTVisualizer />
            </div>
          </div>
        </div>
      </div>

      {/* Scroller Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-40">
        <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-black"></div>
      </div>
    </section>
  );
};

export default Hero;