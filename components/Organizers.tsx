import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Organizers: React.FC = () => {
  const { t } = useLanguage();

  const organizersData = [
    {
      name: "Krzysztof Karaszewski",
      role: t.organizers.roles.manager,
      subRole: "Global Bank",
      image: "https://picsum.photos/seed/krzysztof/400/400"
    },
    {
      name: "Andrzej Sobczak",
      role: t.organizers.roles.architect,
      subRole: "Liderzy.AI / SGH",
      image: "https://picsum.photos/seed/andrzej/400/400"
    }
  ];

  return (
    <section id="organizers" className="bg-brand-yellow py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">
            {t.organizers.title}
          </h2>
          <p className="text-lg text-black/80 font-medium">
            {t.organizers.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {organizersData.map((person, index) => (
            <div key={index} className="group bg-white rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{person.name}</h3>
                <div className="h-1 w-12 bg-brand-yellow mb-4"></div>
                <p className="text-gray-800 font-medium">{person.role}</p>
                <p className="text-gray-600">{person.subRole}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Organizers;