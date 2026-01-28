import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Audience from './components/Audience';
import Agenda from './components/Agenda';
import Organizers from './components/Organizers';
import FAQ from './components/FAQ';
import { useLanguage } from './context/LanguageContext';

const App: React.FC = () => {
  const { t } = useLanguage();

  useEffect(() => {
    // This observer handles the "reveal" class animations on scroll
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Select all elements with the 'reveal' class
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-yellow font-sans text-black selection:bg-black selection:text-brand-yellow">
      <Navbar />
      <main>
        <Hero />
        {/* Audience section with yellow background */}
        <Audience />
        {/* Agenda section with white background for contrast */}
        <Agenda />
        {/* Organizers back to yellow */}
        <Organizers />
        {/* FAQ & Logistics on Yellow */}
        <FAQ />
      </main>
      
      <footer className="bg-black text-brand-yellow py-8 text-center">
        <div className="container mx-auto px-4">
          <p className="font-bold uppercase tracking-widest text-sm mb-2">Vibe Coding Workshop © 2024</p>
          <p className="text-xs text-neutral-500">
            {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;