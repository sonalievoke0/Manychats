import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Globe,
  Zap,
  Users,
  ChevronUp,
  MessageCircle
} from 'lucide-react';

// --- Sector Data ---
const SECTORS = [
  {
    id: 'ecommerce',
    title: 'E-Commerce',
    description: 'Automated abandoned cart recovery and product recommendations.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600',
    icon: <TrendingUp className="w-4 h-4" />,
    color: 'text-pink-500'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: '24/7 property lead qualification and viewing scheduling.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600',
    icon: <Globe className="w-4 h-4" />,
    color: 'text-emerald-500'
  },
  {
    id: 'saas',
    title: 'SaaS & Agencies',
    description: 'Instant demo booking and lead magnet delivery.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    icon: <Zap className="w-4 h-4" />,
    color: 'text-blue-500'
  },
  {
    id: 'services',
    title: 'Professional Services',
    description: 'Automated FAQ handling and appointment reminders.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=600',
    icon: <Users className="w-4 h-4" />,
    color: 'text-indigo-500'
  }
];

const SectorCard: React.FC<{ sector: typeof SECTORS[0], index: number }> = ({ sector, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        relative flex-shrink-0 w-[280px] md:w-80 min-w-[280px] md:min-w-[320px] h-[400px] md:h-[460px] flex flex-col
        rounded-[1.75rem] overflow-hidden bg-white border border-slate-100/50 
        transition-all duration-500 ease-out cursor-pointer
        ${isHovered ? 'md:translate-y-[-10px] shadow-xl md:shadow-2xl shadow-slate-200 scale-[1.02] md:scale-100 z-10' : 'translate-y-0 shadow-md'}
        animate-in fade-in slide-in-from-bottom-4
      `}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      {/* Image Container */}
      <div className="h-48 overflow-hidden relative flex-shrink-0 bg-white">
        <img
          src={sector.image}
          alt={sector.title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out align-bottom
            ${isHovered ? 'scale-110' : 'scale-100'}`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600";
          }}
        />
        {/* Softer Gradient fade to content area */}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1 relative z-30 bg-white -mt-1 pt-4">
        <div className={`
          w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-4 md:mb-5 shadow-sm
          border border-slate-100 transition-transform duration-500
          ${isHovered ? 'rotate-12 scale-110' : ''}
        `}>
          <div className={`${sector.color} [&>svg]:w-4 [&>svg]:h-4 md:[&>svg]:w-5 md:[&>svg]:h-5`}>
            {sector.icon}
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-3 tracking-tight">
          {sector.title}
        </h3>
        <p className="text-slate-600 text-sm md:text-base leading-relaxed line-clamp-4 font-medium">
          {sector.description}
        </p>

        {/* Hover Arrow Indicator */}
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className={`mt-auto transition-all duration-500 flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest cursor-pointer bg-transparent border-none p-0
            ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
        >
          Get started
          <span className="ml-1.5">→</span>
        </button>
      </div>
    </div>
  );
};

export default function Sectors() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="industries" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden md:block">
        <div className="absolute top-[-5%] right-[-5%] w-[35%] h-[35%] bg-blue-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[25%] h-[25%] bg-pink-50/50 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-8xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <header className={`text-center mb-16 transition-all duration-1000 transform
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Tailored for <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              High-Growth Sectors
            </span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Industry-specific solutions designed for maximum ROI and seamless integration.
          </p>
        </header>

        {/* Horizontal Line Grid Container - Optimized for 4 items in a row */}
        <div className="flex flex-nowrap lg:justify-center gap-5 overflow-x-auto pb-10 px-2 -mx-2 scrollbar-hide no-scrollbar">
          {SECTORS.map((sector, idx) => (
            <SectorCard key={sector.id} sector={sector} index={idx} />
          ))}
        </div>
      </div>

      {/* Custom Styles for hiding scrollbars */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
