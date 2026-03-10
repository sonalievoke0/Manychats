import React, { useEffect, useRef, useState } from 'react';
import InstagramImg from './Instagram.png';
import WhatsappImg from './Whatsapp.png';
import TelegramImg from './Telegram.png';
import TikTokImg from './TikTok.png';
import {
  MessageSquare, Zap, Heart, MessageCircle, Smartphone, Twitter, Repeat2, Share, ChevronLeft, Instagram, Sparkles, Info
} from 'lucide-react';

const TikTokIcon = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 162.6 186.8v93.2a69.34 69.34 0 1 0 69.38 69.32V0h92A133.72 133.72 0 0 0 448 111z" />
  </svg>
);

const STAGES = [
  {
    title: "Instagram & Facebook",
    tagline: "SOCIAL COMMERCE",
    description: "Convert comments to DMs and checkout links instantly. Turn every post into a high-converting sales funnel using our advanced triggers.",
    color: "from-pink-500 to-rose-500",
    accent: "bg-pink-50 text-pink-600",
    icon: <Instagram className="w-6 h-6" />
  },
  {
    title: "WhatsApp",
    tagline: "24/7 CONVERSATIONS",
    description: "Automate service, order updates, and reminders on the world's most popular messaging app. Build trust with instantaneous, intent-based replies.",
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-50 text-emerald-600",
    icon: <MessageCircle className="w-6 h-6" />
  },
  {
    title: "SMS & Telegram",
    tagline: "DIRECT RE-ENGAGEMENT",
    description: "Re-engage cold leads with high open-rate messages. Move conversations from social platforms to direct personal lines to close deals faster.",
    color: "from-blue-500 to-indigo-600",
    accent: "bg-blue-50 text-blue-600",
    icon: <Smartphone className="w-6 h-6" />
  },
  {
    title: "TikTok",
    tagline: "VIRAL ENGAGEMENT",
    description: "Auto-reply to comments on your viral videos in real-time. Convert viewers into leads and drive traffic from public posts to private DMs seamlessly.",
    color: "from-slate-800 to-slate-950",
    accent: "bg-slate-100 text-slate-900",
    icon: <TikTokIcon className="w-6 h-6" />
  }
];

export const ScrollytellingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [libsReady, setLibsReady] = useState(false);

  useEffect(() => {
    const loadScript = (src: string) => {
      return new Promise<void>((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    };

    const init = async () => {
      try {
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js');
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js');
        setLibsReady(true);
      } catch (err) {
        console.error("GSAP load failed", err);
      }
    };
    init();
  }, []);

  useEffect(() => {
    if (!libsReady || !(window as any).gsap || !(window as any).ScrollTrigger) return;

    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      STAGES.forEach((_, index) => {
        ScrollTrigger.create({
          trigger: stepsRef.current[index],
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [libsReady]);

  return (
    <div id="solutions" className="bg-[#0f172a] font-sans text-white selection:bg-blue-500/30 selection:text-white overflow-clip" ref={containerRef}>
      {/* Scrollytelling Section */}
      <section className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row relative items-start gap-12 pt-20 pb-32">
        <div className="w-full md:w-1/2 relative z-10">
          {STAGES.map((stage, i) => (
            <div
              key={i}
              ref={el => { stepsRef.current[i] = el; }}
              className={`step min-h-[100vh] flex items-center justify-center transition-all duration-1000 ${activeIndex === i ? 'opacity-100 md:translate-x-4' : 'opacity-10'} py-20 px-4 md:px-0`}
            >
              <div className="max-w-xl flex flex-col items-start text-left lg:pr-24">
                <div className="flex items-center gap-3 mb-6">
                  {React.cloneElement(stage.icon as React.ReactElement, { className: "w-8 h-8 text-white" })}
                  <span className="text-base font-black uppercase tracking-[0.25em] text-slate-400">
                    {stage.tagline}
                  </span>
                </div>
                <h2 className="text-4xl md:text-7xl font-black mt-2 mb-6 md:mb-8 tracking-tight text-white leading-tight">
                  {stage.title}
                </h2>
                <p className="text-xl md:text-3xl text-slate-300 leading-relaxed font-medium">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Sticky Visuals (No Phone Frame) */}
        <div className="hidden md:flex w-1/2 h-screen sticky top-0 items-center justify-center pointer-events-none z-0">
          <div className="relative flex items-center justify-center h-[560px] w-full px-8">
            {/* Ambient Background Glow */}
            <div className={`absolute -inset-24 transition-all duration-1000 blur-[120px] opacity-30 bg-gradient-to-br ${STAGES[activeIndex].color}`} />

            {/* Direct Image Container */}
            <div className={`w-full max-w-[500px] aspect-[4/3] sm:aspect-video md:aspect-square lg:aspect-[4/3] relative transition-all duration-700 bg-transparent`}>
              <div className={`relative w-full h-full flex flex-col`}>
                {STAGES.map((stage, i) => (
                  <div
                    key={i}
                    className={`absolute inset-0 flex flex-col w-full h-full transition-all duration-700 ease-out transform ${activeIndex === i
                      ? 'opacity-100 translate-y-0 scale-100 visible'
                      : activeIndex < i
                        ? 'opacity-0 translate-y-20 scale-95 invisible'
                        : 'opacity-0 -translate-y-20 scale-95 invisible'
                      }`}
                  >
                    {i === 0 && <ScreenInstagramDM />}
                    {i === 1 && <ScreenWhatsAppChat />}
                    {i === 2 && <ScreenSMSChat />}
                    {i === 3 && <ScreenTikTokFeed />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* --- Smartphone Content Components --- */

const ScreenInstagramDM = () => (
  <div className="flex-1 w-full h-full bg-transparent flex items-center justify-center">
    <img
      src={InstagramImg}
      alt="Instagramz Commerce"
      className="w-full h-full object-contain object-center scale-[1.35] md:scale-[1.5]"
    />
  </div>
);

const ScreenWhatsAppChat = () => (
  <div className="flex-1 w-full h-full bg-transparent flex items-center justify-center">
    <img
      src={WhatsappImg}
      alt="WhatsApp Booking Confirmation"
      className="w-full h-full object-contain object-center scale-[1.35] md:scale-[1.5]"
    />
  </div>
);

const ScreenSMSChat = () => (
  <div className="flex-1 w-full h-full bg-transparent flex items-center justify-center overflow-visible">
    <div className="w-full h-full overflow-hidden flex items-center justify-center">
      <img
        src={TelegramImg}
        alt="Telegram Commerce"
        className="w-full h-full object-cover object-center scale-[1.1] md:scale-[1.15] translate-y-4"
      />
    </div>
  </div>
);

const ScreenTikTokFeed = () => (
  <div className="flex-1 w-full h-full bg-transparent flex items-center justify-center">
    <img
      src={TikTokImg}
      alt="TikTok Commerce"
      className="w-full h-full object-contain object-center scale-[1.35] md:scale-[1.5]"
    />
  </div>
);
