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
    <div id="process" className="py-16 md:py-20 bg-slate-50 font-sans overflow-x-hidden relative flex flex-col justify-center">

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
              Automation
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-semibold max-w-2xl mx-auto leading-relaxed opacity-80 mb-4">
            Harnessing autonomous systems to transform your business communication and workflow operations.
          </p>
        </motion.div>
      </header>

      {/* Timeline Section */}
      <div className="max-w-7xl mx-auto px-6 w-full relative">
        {/* The Vertical Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-black hidden lg:block -translate-x-1/2 z-0" />

        <div className="relative flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-0">
          {steps.map((step, index) => {
            const contentLeft = index % 2 === 0; // Step 1,3 → content left; Step 2,4 → content right
            return (
              <div key={step.id} className="relative flex flex-col lg:flex-row items-center justify-between lg:min-h-[420px] py-4 lg:py-0">

                {/* Content Column */}
                <motion.div
                  initial={{ opacity: 0, x: contentLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full lg:w-[44%] z-10 ${contentLeft ? 'lg:order-1' : 'lg:order-3'}`}
                >
                  <div className="flex flex-col items-start px-1">
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

                {/* Central Step Indicator (Desktop) */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                    className="relative px-8 py-5 rounded-2xl flex items-center justify-center font-black text-xl shadow-2xl border-4 border-white bg-blue-700 text-white overflow-hidden group"
                  >
                    {/* Shiny Effect Overlay (Looping) */}
                    <motion.div
                      animate={{
                        left: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                      className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-[35deg] pointer-events-none z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    <span className="relative z-10 uppercase tracking-wider">STEP {step.id}</span>
                  </motion.div>
                </div>

                {/* Mobile Step Indicator */}
                <div className="lg:hidden my-6 z-10">
                  <div className="relative px-6 py-4 rounded-xl flex items-center justify-center font-black text-lg shadow-lg border-2 border-white bg-blue-700 text-white overflow-hidden">
                    <motion.div
                      animate={{
                        left: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        repeatDelay: 1
                      }}
                      className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-[35deg] pointer-events-none z-0"
                    />
                    <span className="relative z-10">STEP {step.id}</span>
                  </div>
                </div>

                {/* Image Column */}
                <motion.div
                  initial={{ opacity: 0, x: contentLeft ? 60 : -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                  className={`w-full lg:w-[44%] z-10 ${contentLeft ? 'lg:order-3' : 'lg:order-1'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.04, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative w-full aspect-[4/3] min-h-[260px] flex items-center justify-center cursor-pointer"
                  >
                    <div className="relative w-full h-full overflow-hidden rounded-[1.5rem]">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </motion.div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

