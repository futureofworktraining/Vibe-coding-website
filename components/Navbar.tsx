import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.start, href: '#hero' },
    { name: t.nav.audience, href: '#audience' },
    { name: t.nav.program, href: '#program' },
    { name: t.nav.experts, href: '#organizers' },
    { name: t.nav.faq, href: '#faq' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'pl' ? 'en' : 'pl');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-brand-yellow/95 backdrop-blur-md border-black border-b-2 py-2 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="bg-black text-brand-yellow p-1.5 rounded-sm group-hover:rotate-12 transition-transform">
            <Terminal size={20} />
          </div>
          <div className="text-xl md:text-2xl font-black tracking-tighter uppercase font-mono">
            Vibe<span className="bg-black text-white px-1 mx-1">Coding</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm uppercase tracking-wider font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:bg-black hover:text-white px-3 py-1 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-1 hover:bg-black hover:text-white px-2 py-1 transition-colors"
          >
            <Globe size={16} />
            <span>{language === 'pl' ? 'EN' : 'PL'}</span>
          </button>

          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 font-bold uppercase transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 text-xs md:text-sm">
            {t.nav.join}
          </button>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleLanguage}
            className="font-black uppercase text-sm border-2 border-black px-2 py-1 hover:bg-black hover:text-brand-yellow transition-colors"
          >
            {language.toUpperCase()}
          </button>
          
          <button
            className="text-black p-1 hover:bg-black hover:text-brand-yellow transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-yellow border-b-2 border-black shadow-xl flex flex-col p-6 gap-4 animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-black font-black uppercase text-2xl hover:translate-x-2 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-black text-white w-full py-4 font-bold uppercase text-lg mt-4">
            {t.nav.saveSpot}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;