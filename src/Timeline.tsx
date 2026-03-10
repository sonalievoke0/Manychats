import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useInView, useTransform } from 'motion/react';
import { 
  ClipboardCheck, Layers, Puzzle, Rocket, 
  Bot, Zap, Settings, Code, Cpu, Database, 
  Network, Activity, Infinity as InfinityIcon,
  Sparkles
} from 'lucide-react';

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  color: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "The Audit",
    icon: <ClipboardCheck className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1454165833767-027ffeb99c3a?auto=format&fit=crop&q=80&w=800",
    description: "We analyze your current gaps and identify high-ROI opportunities through deep data discovery.",
    color: "from-blue-500 to-blue-600",
  },
  {
    id: 2,
    title: "The Architecture",
    icon: <Layers className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    description: "Our engineers build custom, AEON-powered flows tailored to your brand's unique logic.",
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 3,
    title: "The Integration",
    icon: <Puzzle className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&q=80&w=800",
    description: "We sync your AI agents seamlessly with your CRM (HubSpot, Zoho, or Salesforce) and existing stack.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 4,
    title: "The Scale",
    icon: <Rocket className="w-8 h-8 text-white" />,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    description: "We launch, monitor, and optimize your systems for continuous growth and market dominance.",
    color: "from-blue-500 to-indigo-500",
  }
];

const FloatingIcon = ({ icon: Icon, top, left, delay, duration = 10 }: { icon: any, top: string, left: string, delay: number, duration?: number }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.1, 0.25, 0.1],
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0]
    }}
    transition={{ 
      duration, 
      repeat: Infinity, 
      delay,
      ease: "easeInOut" 
    }}
    className="absolute text-blue-300 pointer-events-none z-0"
    style={{ top, left }}
  >
    <Icon size={Math.random() * 40 + 20} strokeWidth={1} />
  </motion.div>
);

const StepCard = ({ step, index }: { step: Step, index: number, key?: React.Key }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const isEven = index % 2 === 1;

  return (
    <div ref={ref} className="relative flex items-center justify-between mb-32 md:mb-52 w-full">
      {/* Content Container */}
      <div className={`w-full md:w-[46%] ${isEven ? 'md:order-1' : 'md:order-3 text-right'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 100 : -100, rotateY: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: isEven ? 100 : -100, rotateY: isEven ? -20 : 20 }}
          whileHover={{ y: -10, scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/60 overflow-hidden group perspective-1000"
        >
          {/* Image Section */}
          <div className="relative h-60 md:h-72 overflow-hidden bg-slate-100">
            <motion.img 
              src={step.image} 
              alt={step.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 1.5 }}
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className={`absolute bottom-6 ${isEven ? 'left-8' : 'right-8'}`}>
                <motion.div 
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${step.color} shadow-[0_10px_20px_rgba(0,0,0,0.2)]`}
                >
                    {step.icon}
                </motion.div>
            </div>
          </div>

          {/* Text Section */}
          <div className="p-10">
            <motion.h3 
              layout
              className={`text-4xl font-black mb-4 tracking-tight ${isEven ? 'text-blue-700' : 'text-slate-900'}`}
            >
              {step.title}
            </motion.h3>
            <p className="text-slate-600 leading-relaxed text-xl font-medium">
              {step.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Number Marker - Animated */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 md:order-2">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`w-24 h-24 md:w-28 md:h-28 rounded-[2.5rem] border-[10px] border-blue-50 flex items-center justify-center text-white font-black text-4xl md:text-5xl bg-gradient-to-br ${step.color} shadow-[0_15px_30px_rgba(0,0,0,0.2)] z-30`}
        >
          {step.id}
        </motion.div>
      </div>

      <div className="hidden md:block w-[46%] md:order-2"></div>
    </div>
  );
};

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.001
  });

  // Animated glow effect on the path
  const pathGlowY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div id="process" className="min-h-screen bg-white font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden relative">
      
      {/* Background Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40">
        <FloatingIcon icon={Bot} top="10%" left="5%" delay={0} />
        <FloatingIcon icon={Zap} top="25%" left="85%" delay={2} />
        <FloatingIcon icon={Settings} top="40%" left="15%" delay={4} />
        <FloatingIcon icon={Code} top="55%" left="80%" delay={1} />
        <FloatingIcon icon={Cpu} top="70%" left="10%" delay={3} />
        <FloatingIcon icon={Database} top="85%" left="90%" delay={5} />
        <FloatingIcon icon={Network} top="15%" left="75%" delay={2.5} />
        <FloatingIcon icon={Activity} top="65%" left="25%" delay={4.5} />
        <FloatingIcon icon={InfinityIcon} top="35%" left="40%" delay={1.5} />
        <FloatingIcon icon={Sparkles} top="5%" left="50%" delay={3.5} />
      </div>

      {/* Header Section */}
      <header className="pt-40 pb-32 px-6 text-center max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.span 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-8 text-sm font-black tracking-[0.2em] text-blue-600 uppercase bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full shadow-sm"
          >
            <Sparkles size={16} /> AEON AI FRAMEWORK
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-[0.9] text-balance">
            The Road to <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-gradient-x">
              Automation.
            </span>
          </h2>
          <p className="text-2xl text-slate-500 font-semibold max-w-3xl mx-auto leading-relaxed opacity-80">
            Harnessing autonomous systems to transform your business communication and workflow operations.
          </p>
        </motion.div>
      </header>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6 py-20 pb-60">
        
        {/* The Path (Background Track) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-3 bg-blue-100/40 transform -translate-x-1/2 z-0 rounded-full shadow-inner" />
        
        {/* Animated Progress Path */}
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-1/2 top-0 bottom-0 w-3 bg-gradient-to-b from-blue-500 via-indigo-600 to-purple-600 transform -translate-x-1/2 z-10 rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)]"
        />

        {/* Scrolling Pulse Effect on the Path */}
        <motion.div 
          style={{ top: pathGlowY }}
          className="absolute left-1/2 w-8 h-32 bg-gradient-to-b from-transparent via-white/80 to-transparent -translate-x-1/2 z-20 pointer-events-none blur-md"
        />

        {/* Steps */}
        <div className="relative z-20">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>

        {/* Final CTA Marker */}
        <div className="flex justify-center mt-32 relative z-20">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,99,235,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-slate-900 text-white px-12 py-8 rounded-[3rem] font-black text-2xl flex items-center gap-6 shadow-2xl overflow-hidden"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative z-10">INITIATE SCALE PHASE</span>
            <motion.div 
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="relative z-10"
            >
              <Rocket className="w-8 h-8" />
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Advanced CSS Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        html {
          scroll-behavior: smooth;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @media (max-width: 768px) {
          .md\\:order-1, .md\\:order-3 {
            order: initial !important;
            text-align: left !important;
            padding-left: 4.5rem;
          }
          .absolute.left-1\\/2 {
            left: 30px;
            transform: none;
          }
        }
      `}} />
    </div>
  );
}
