import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface Translations {
  nav: {
    start: string;
    audience: string;
    program: string;
    experts: string;
    faq: string;
    join: string;
    saveSpot: string;
  };
  hero: {
    badge: string;
    titleSub: string;
    desc: string;
    descHighlight: string;
    descSub: string;
    date: string;
    btn: string;
    certificate: string;
  };
  audience: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
      tag: string;
    }[];
  };
  agenda: {
    title: string;
    subtitle: string;
    modules: {
      title: string;
      desc: string[];
    }[];
  };
  organizers: {
    title: string;
    subtitle: string;
    roles: {
      manager: string;
      architect: string;
    };
  };
  faq: {
    title: string;
    subtitle: string;
    logistics: {
      header: string;
      time: string;
      connection: string;
      assets: string;
      sunday: string;
      onlineActive: string;
      linkEmail: string;
      recording: string;
      prompts: string;
      materials: string;
      access: string;
      book: string;
      limited: string;
    };
    features: {
      live: { title: string; desc: string; };
      vod: { title: string; desc: string; };
      lowcode: { title: string; desc: string; };
    };
    items: { q: string; a: string; }[];
  };
  footer: {
    rights: string;
  };
  terminal: {
    welcome: string;
    analyze: string;
    connecting: string;
    scanning: string;
    found: string;
    optimize: string;
    constructing: string;
    simulating: string;
    complete: string;
    pressEnter: string;
    simmering: string[];
  };
}

const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      start: 'Start',
      audience: 'Dla kogo',
      program: 'Program',
      experts: 'Eksperci',
      faq: 'FAQ',
      join: 'Dołącz Teraz',
      saveSpot: 'Zapisz się na warsztat',
    },
    hero: {
      badge: 'Warsztat Online Live',
      titleSub: '& AGENTIC WORKFLOWS',
      desc: 'Przestań pisać kod.',
      descHighlight: 'Zacznij zarządzać AI.',
      descSub: 'Warsztat dla twórców jutra.',
      date: 'Niedziela, 2024',
      btn: 'Zarezerwuj Miejsce',
      certificate: 'Certyfikat + Nagrania',
    },
    audience: {
      title: 'Dla kogo jest ten warsztat?',
      subtitle: 'Profil idealnego uczestnika rewolucji AI.',
      items: [
        { title: "Analitycy & Developerzy", desc: "Poznasz jak połączyć klasyczne RPA z Agentami AI.", tag: "Automatyzacja 2.0" },
        { title: "Team Leaderzy", desc: "Przygotuj swój obszar do nadchodzących zmian technologicznych.", tag: "Strategia AI" },
        { title: "Optimizerzy Procesów", desc: "Dowiesz się jak wyglądają najnowsze trendy transformacji.", tag: "Efektywność" },
        { title: "Citizen Developerzy", desc: "Zbudujesz Agentów AI nawet bez głębokiej wiedzy koderskiej.", tag: "Low-Code / No-Code" }
      ]
    },
    agenda: {
      title: 'System',
      subtitle: '> Initializing workshop sequence...\n> Loading modules 1-3...\n> Ready for execution.',
      modules: [
        { title: "INIT: Vibe & Agentic Coding", desc: ["Nowa era programowania: od rzemieślnika do architekta.", "CoT (Chain of Thought) w praktyce - jak 'myślą' modele.", "Shift mindsetu: kodowanie konwersacyjne."] },
        { title: "TOOLSET: Środowisko pracy", desc: ["Lovable & Bolt: Prototypowanie z prędkością światła.", "Replit Agent: Twój pierwszy cyfrowy pracownik.", "Google AI Studio: Laboratorium innowacji."] },
        { title: "DEPLOY: Agenci w Biznesie", desc: ["Budowa autonomicznego zespołu agentów.", "Orkiestracja zadań złożonych.", "Live Coding: Automat do analizy konkurencji w 30 minut."] }
      ]
    },
    organizers: {
      title: 'Organizatorzy i prowadzący',
      subtitle: 'Łączymy perspektywę i doświadczenia biznesowe oraz technologiczne!',
      roles: {
        manager: "Menadżer ds. Automatyzacji Procesów",
        architect: "Architekt ds hiperautomatyzacji"
      }
    },
    faq: {
      title: 'FAQ Warsztatu',
      subtitle: 'Odpowiedzi na najczęściej zadawane pytania',
      logistics: {
        header: 'Aspekty organizacyjne',
        time: 'SYSTEM: CZAS',
        connection: 'POŁĄCZENIE: BEZPIECZNE',
        assets: 'ZASOBY: ODBLOKOWANE',
        sunday: 'Niedziela',
        onlineActive: 'STATUS ONLINE: AKTYWNY',
        linkEmail: 'Link przez E-mail',
        recording: 'Nagranie HD',
        prompts: 'Prompty AI',
        materials: 'Materiały',
        access: 'Dostęp Dożywotni',
        book: 'Zarezerwuj Miejsce',
        limited: '// Ograniczona_Liczba_Miejsc'
      },
      features: {
        live: { title: "Warsztat na żywo", desc: "2 trenerów, real-time coding i Q&A. Żadnego odtwarzania z taśmy – czysta interakcja." },
        vod: { title: "Roczny dostęp do VOD", desc: "Otrzymujesz nagranie HD z całego spotkania. Wracaj do materiału kiedy chcesz." },
        lowcode: { title: "Low-Code Focus", desc: "Skupiamy się na praktyce citizen development. Budujemy działające rozwiązania." }
      },
      items: [
        { q: "Jakie umiejętności muszę mieć, aby wziąć udział?", a: "Warsztat jest dla początkujących i średniozaawansowanych. Podstawowa znajomość IT pomaga, ale programowanie nie jest wymagane." },
        { q: "Jakie programy muszę mieć zainstalowane?", a: "Wystarczy przeglądarka (Chrome/Edge) i internet. Większość narzędzi działa w chmurze." },
        { q: "Czy wymagane są płatne licencje?", a: "Pokazujemy darmowe wersje lub trial. Wskażemy też korzyści wersji płatnych dla firm." },
        { q: "W jakiej formule odbędzie się warsztat?", a: "100% online, Live Coding. Trenerzy pokazują wszystko na żywo, Ty pytasz na czacie." },
        { q: "Czy będzie dostęp do nagrań?", a: "Tak! Roczny dostęp do wideo HD, materiałów PDF i listy promptów." }
      ]
    },
    footer: {
      rights: 'Wszystkie prawa zastrzeżone. Projekt strony demonstracyjnej.'
    },
    terminal: {
      welcome: "* Witaj w podglądzie badawczym Vibe Automator!",
      analyze: "analizuj_przepływ --cel=\"przetwarzanie_faktur\"",
      connecting: "* łączenie_z_erp...",
      scanning: "* szukanie_wąskich_gardeł...",
      found: "✓ Znaleziono pętlę ręczną w [Węzeł: Krok_Akceptacji]",
      optimize: "optymalizuj --agentowo --tryb=autonomiczny",
      constructing: "* budowanie_roju_agentów...",
      simulating: "* symulacja_przepustowości...",
      complete: "✓ Optymalizacja Zakończona. Efektywność +400%.",
      pressEnter: "Naciśnij Enter, aby wdrożyć na produkcję...",
      simmering: ["* Analizowanie...", "* Myślenie...", "* Łączenie...", "* Optymalizacja..."]
    }
  },
  en: {
    nav: {
      start: 'Start',
      audience: 'For Whom',
      program: 'Agenda',
      experts: 'Experts',
      faq: 'FAQ',
      join: 'Join Now',
      saveSpot: 'Sign up for workshop',
    },
    hero: {
      badge: 'Online Live Workshop',
      titleSub: '& AGENTIC WORKFLOWS',
      desc: 'Stop writing code.',
      descHighlight: 'Start managing AI.',
      descSub: 'A workshop for the creators of tomorrow.',
      date: 'Sunday, 2024',
      btn: 'Reserve Your Spot',
      certificate: 'Certificate + Recordings',
    },
    audience: {
      title: 'Who is this for?',
      subtitle: 'Profile of the ideal AI revolution participant.',
      items: [
        { title: "Analysts & Developers", desc: "Learn how to combine classic RPA with AI Agents.", tag: "Automation 2.0" },
        { title: "Team Leaders", desc: "Prepare your area for upcoming technological changes.", tag: "AI Strategy" },
        { title: "Process Optimizers", desc: "Learn about the latest transformation trends.", tag: "Efficiency" },
        { title: "Citizen Developers", desc: "Build AI Agents even without deep coding knowledge.", tag: "Low-Code / No-Code" }
      ]
    },
    agenda: {
      title: 'System',
      subtitle: '> Initializing workshop sequence...\n> Loading modules 1-3...\n> Ready for execution.',
      modules: [
        { title: "INIT: Vibe & Agentic Coding", desc: ["New era of coding: from craftsman to architect.", "CoT (Chain of Thought) in practice - how models 'think'.", "Mindset shift: conversational coding."] },
        { title: "TOOLSET: Environment", desc: ["Lovable & Bolt: Prototyping at light speed.", "Replit Agent: Your first digital employee.", "Google AI Studio: Innovation laboratory."] },
        { title: "DEPLOY: Agents in Business", desc: ["Building an autonomous agent swarm.", "Orchestrating complex tasks.", "Live Coding: Competitor analysis bot in 30 minutes."] }
      ]
    },
    organizers: {
      title: 'Organizers & Hosts',
      subtitle: 'Combining business and technological perspectives!',
      roles: {
        manager: "Process Automation Manager",
        architect: "Hyperautomation Architect"
      }
    },
    faq: {
      title: 'Workshop FAQ',
      subtitle: 'Answers to frequently asked questions',
      logistics: {
        header: 'Logistics Module',
        time: 'SYSTEM: TIME',
        connection: 'CONNECTION: SECURE',
        assets: 'ASSETS: UNLOCKED',
        sunday: 'Sunday',
        onlineActive: 'ONLINE STATUS: ACTIVE',
        linkEmail: 'Link via E-mail',
        recording: 'HD Recording',
        prompts: 'AI Prompts',
        materials: 'Materials',
        access: 'Lifetime Access',
        book: 'Reserve Spot',
        limited: '// Limited_Slots_Available'
      },
      features: {
        live: { title: "Live Workshop", desc: "2 trainers, real-time coding & Q&A. No pre-recorded tapes – pure interaction." },
        vod: { title: "1 Year VOD Access", desc: "Get HD recording of the entire meeting. Revisit materials anytime." },
        lowcode: { title: "Low-Code Focus", desc: "Focus on citizen development practice. We build working solutions." }
      },
      items: [
        { q: "What skills do I need to participate?", a: "The workshop is designed for beginners and intermediates. Basic IT knowledge helps, but coding skills are not required." },
        { q: "What software do I need installed?", a: "Just a web browser (Chrome/Edge) and stable internet. Most tools we discuss run in the cloud." },
        { q: "Are paid licenses required?", a: "We show free or trial versions sufficient for the workshop. We'll also highlight Pro/Team benefits." },
        { q: "What is the workshop format?", a: "100% online, Live Coding. Trainers show everything live on screen, you ask questions on chat." },
        { q: "Will there be access to recordings?", a: "Yes! 1-year access to HD video, PDF materials, and the prompt list." }
      ]
    },
    footer: {
      rights: 'All rights reserved. Demo page project.'
    },
    terminal: {
      welcome: "* Welcome to the Vibe Automator research preview!",
      analyze: "analyze_workflow --target=\"invoice_processing\"",
      connecting: "* connecting_to_erp...",
      scanning: "* scanning_for_bottlenecks...",
      found: "✓ Found manual entry loop at [Node: Approval_Step]",
      optimize: "optimize --agentic --mode=autonomous",
      constructing: "* constructing_agent_swarm...",
      simulating: "* simulating_throughput...",
      complete: "✓ Optimization Complete. Efficiency increased by 400%.",
      pressEnter: "Press Enter to deploy to production...",
      simmering: ["* Simmering...", "* Thinking...", "* Analyzing...", "* Reasoning..."]
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  useEffect(() => {
    const browserLang = navigator.language || (navigator as any).userLanguage;
    if (browserLang && !browserLang.startsWith('pl')) {
      setLanguage('en');
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
