import React from 'react';
import { motion } from 'motion/react';
import {
  ClipboardCheck, Layers, Puzzle, Rocket, Sparkles
} from 'lucide-react';
import auditImg from './audit.jpg';
import architectureImg from './architecture.png';
import integrationImg from './integration.png';
import scaleImg from './scale.png';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  bgClass: string;
  iconWrapperClass: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "The Audit",
    icon: <ClipboardCheck className="w-4 h-4 md:w-5 md:h-5 text-current" />,
    image: auditImg,
    description: "We analyze your current gaps and identify high-ROI opportunities through deep data discovery.",
    bgClass: "bg-[#FAFF00]", // Bright yellow
    iconWrapperClass: "bg-[#E843E0] text-white", // Magenta Button
  },
  {
    id: 2,
    title: "The Architecture",
    icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-current" />,
    image: architectureImg,
    description: "Our engineers build custom, AEON-powered flows tailored to your brand's unique logic.",
    bgClass: "bg-black", // Changed to black background for PNG compatibility
    iconWrapperClass: "bg-[#4B4EFC] text-white", // Royal Blue Rounded
  },
  {
    id: 3,
    title: "The Integration",
    icon: <Puzzle className="w-5 h-5 md:w-6 md:h-6 text-current" />,
    image: integrationImg,
    description: "We sync your AI agents seamlessly with your CRM (Hubspot, Zoho, or Salesforce) and existing stack.",
    bgClass: "bg-[#F9FAFB]", // Very light gray/white
    iconWrapperClass: "bg-[#1F2937] text-white", // Dark Slate Pill/Toggle
  },
  {
    id: 4,
    title: "The Scale",
    icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-current" />,
    image: scaleImg,
    description: "We launch, monitor, and optimize your systems for continuous growth and market dominance.",
    bgClass: "bg-[#D1FAE5]", // Mint / Light Emerald
    iconWrapperClass: "bg-[#10B981] text-white", // Emerald
  }
];

export default function Timeline() {
  return (
    <div id="process" className="py-16 md:py-20 bg-white font-sans overflow-x-hidden relative flex flex-col justify-center">

      {/* Header Section */}
      <header className="px-6 text-center max-w-6xl mx-auto relative z-10 w-full mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-[11px] md:text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 border border-blue-100 rounded-full shadow-sm"
          >
            <Sparkles size={14} /> AEON AI FRAMEWORK
          </motion.span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[0.95] text-balance">
            The Road to <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              Automation.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed opacity-80 mb-4">
            Harnessing autonomous systems to transform your business communication and workflow operations.
          </p>
        </motion.div>
      </header>

      {/* Process Cards Grid Section */}
      <div className="max-w-[70rem] mx-auto px-6 w-full">
        <div className="grid md:grid-cols-1 md:max-w-xl md:mx-auto lg:max-w-none lg:grid-cols-2 gap-x-12 gap-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
              className="group flex flex-col cursor-default"
            >

              {/* Top Graphic Card container */}
              <motion.div
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative w-full aspect-[4/3] rounded-[1.25rem] ${step.id === 1 ? 'bg-white' : step.bgClass} overflow-hidden mb-6 shadow-sm border border-black/5 flex items-center justify-center cursor-pointer`}
              >

                {/* Specific Background Patterns to match user reference */}
                {step.id === 1 && (
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '25% 25%' }}
                  />
                )}
                {step.id === 2 && (
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMjAiIHk9IjIwIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')",
                      backgroundSize: '33.33% 33.33%'
                    }}
                  />
                )}

                {/* Visual Compositions */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  {/* Design 1: Audit Image (Full View) */}
                  {step.id === 1 && (
                    <div className="flex flex-col items-center justify-center w-full h-full relative group/audit overflow-hidden rounded-[1.25rem]">
                      {/* Full Image visible filling the absolute container (zooms in on hover) */}
                      <div className={`absolute inset-0 z-10 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.12] origin-center ${step.id === 1 ? 'bg-white' : 'transparent'}`}>
                        <img src={step.image} alt="Audit Process" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Design 2: Architecture Image (Full View) */}
                  {step.id === 2 && (
                    <div className="flex flex-col items-center justify-center w-full h-full relative group/arch overflow-hidden rounded-[1.25rem]">
                      {/* Full Image visible filling the absolute container (zooms in on hover) */}
                      <div className="absolute inset-0 z-10 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.12] origin-center transparent">
                        <img src={step.image} alt="Architecture Process" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Design 3: Integration Image (Full View) */}
                  {step.id === 3 && (
                    <div className="flex flex-col items-center justify-center w-full h-full relative group/integ overflow-hidden rounded-[1.25rem]">
                      {/* Full Image visible filling the absolute container (zooms in on hover) */}
                      <div className="absolute inset-0 z-10 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.12] origin-center transparent">
                        <img src={step.image} alt="Integration Process" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                      </div>
                    </div>
                  )}

                  {/* Design 4: Scale Image (Full View) */}
                  {step.id === 4 && (
                    <div className="flex flex-col items-center justify-center w-full h-full relative group/scale overflow-hidden rounded-[1.25rem]">
                      {/* Full Image visible filling the absolute container (zooms in on hover) */}
                      <div className="absolute inset-0 z-10 transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.12] origin-center transparent">
                        <img src={step.image} alt="Scale Process" className="w-full h-full object-contain" />
                        <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Text Information below the card */}
              <div className="flex flex-col items-start px-1 md:px-2 flex-1">
                <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-2 md:mb-3 tracking-snug">
                  Step {step.id}: {step.title}
                </h3>
                <p className="text-slate-600 text-[15px] md:text-base leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
