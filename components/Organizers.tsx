import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Organizers: React.FC = () => {
  const { t } = useLanguage();
  const [selectedOrganizer, setSelectedOrganizer] = useState<any | null>(null);

  const organizersData = [
    {
      name: "Krzysztof Karaszewski",
      role: t.organizers.roles.manager,
      subRole: "Global Bank",
      image: "https://assets.softr-files.com/applications/6a1082fd-47fa-47a1-a744-943651a9faa7/assets/fbfcec8d-6d9c-49f0-9496-cccb5ae02bbf.jpeg",
      linkedin: "https://www.linkedin.com/in/k-karaszewski/",
      bio: t.organizers.bios.krzysztof
    },
    {
      name: "Andrzej Sobczak",
      role: t.organizers.roles.architect,
      subRole: "Liderzy.AI / SGH",
      image: "https://assets.softr-files.com/applications/6a1082fd-47fa-47a1-a744-943651a9faa7/assets/f1f59c8d-b4a4-47a4-a96c-9e5c36a443f8.jpeg",
      linkedin: "https://www.linkedin.com/in/andrzejsobczak/",
      bio: t.organizers.bios.andrzej
    }
  ];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedOrganizer(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedOrganizer) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedOrganizer]);

  return (
    <section id="organizers" className="bg-brand-yellow py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-black uppercase mb-6 tracking-tight">
            {t.organizers.title}
          </h2>
          <p className="text-xl text-black/80 font-medium max-w-2xl mx-auto">
            {t.organizers.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organizersData.map((person, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-none border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedOrganizer(person)}
            >
              {/* Image Container - Square Aspect Ratio to reduce height */}
              <div className="w-full aspect-square overflow-hidden border-b-2 border-black relative">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-white text-black font-bold uppercase text-xs px-4 py-2 border-2 border-black shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        Zobacz Profil
                    </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow bg-white">
                <div className="mb-3">
                    <h3 className="text-2xl font-black text-black mb-2 leading-tight">
                        {person.name}
                    </h3>
                    <div className="inline-block bg-brand-yellow text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest border border-black/10">
                        {person.subRole}
                    </div>
                </div>
                
                <hr className="border-black/10 my-3" />
                
                <div className="mt-auto">
                    <p className="font-bold text-[10px] uppercase text-gray-400 mb-1 tracking-wider">Rola</p>
                    <p className="text-base font-bold text-gray-800 leading-snug">
                        {person.role}
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between pt-3 border-t border-gray-100">
                   <span className="flex items-center gap-2 text-xs font-bold group-hover:text-brand-yellow/80 transition-colors text-black">
                      Więcej informacji <ArrowRight size={14} />
                   </span>
                   {/* Standard Lucide Library Icon */}
                   <div className="p-1.5 bg-blue-50 rounded text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-colors">
                      <Linkedin size={18} />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedOrganizer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
            onClick={() => setSelectedOrganizer(null)}
          ></div>
          
          <div className="bg-white w-full max-w-6xl max-h-[90vh] overflow-y-auto relative z-10 animate-in zoom-in-95 duration-200 border-4 border-brand-yellow shadow-2xl flex flex-col md:flex-row">
            <button 
              onClick={() => setSelectedOrganizer(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-black text-white hover:bg-red-600 transition-colors border border-white/20"
            >
              <X size={24} />
            </button>

            {/* Sidebar / Image in Modal */}
            <div className="md:w-5/12 relative min-h-[300px] md:min-h-full border-b-4 md:border-b-0 md:border-r-4 border-brand-yellow">
              <img 
                src={selectedOrganizer.image} 
                alt={selectedOrganizer.name} 
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>

            {/* Content in Modal */}
            <div className="md:w-7/12 p-8 md:p-12 bg-white flex flex-col">
              <div className="mb-8">
                <h3 className="text-3xl md:text-5xl font-black mb-2 text-black leading-none">{selectedOrganizer.name}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-4">
                    <span className="bg-black text-white px-3 py-1 text-sm font-mono font-bold uppercase tracking-wider">
                        {selectedOrganizer.subRole}
                    </span>
                    <span className="text-gray-500 font-bold text-sm">
                        / {selectedOrganizer.role}
                    </span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none text-gray-700 mb-10 whitespace-pre-line leading-relaxed flex-grow">
                {selectedOrganizer.bio}
              </div>

              <div className="pt-6 border-t-2 border-black/5 mt-auto">
                <a 
                  href={selectedOrganizer.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#0077b5] text-white px-8 py-4 font-bold text-lg hover:bg-[#006090] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 group"
                >
                  <Linkedin size={24} />
                  <span>Połącz na LinkedIn</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Organizers;