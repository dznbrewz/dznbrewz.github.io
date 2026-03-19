import * as React from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { TextReveal } from "./ui/TextReveal";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24 md:pb-32"
    >
      {/* Soft Animated Background Orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-[#0066CC]/10 dark:bg-[#0066CC]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[#FF4500]/10 dark:bg-[#FF4500]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <motion.div style={{ y, opacity, scale }} className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-[-5vh]">
        
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 dark:bg-[#1A264A]/40 border border-black/5 dark:border-white/10 backdrop-blur-xl shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <span className="text-[12px] font-semibold tracking-widest text-[#1D1D1F] dark:text-blue-50 uppercase">
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[1200px] mx-auto mb-10 text-[3.5rem] leading-[1.05] md:text-[6rem] lg:text-[7.5rem] font-semibold tracking-[-0.04em] text-[#1D1D1F] dark:text-white">
          <TextReveal text="Crafting elegant" delay={0.1} className="justify-center" />
          <TextReveal text="Experiences." delay={0.4} className="justify-center text-[#86868B] dark:text-gray-400 italic font-['Playfair_Display'] font-normal tracking-tight" />
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-2xl text-[#86868B] dark:text-gray-400 max-w-2xl mx-auto font-normal leading-relaxed tracking-tight"
        >
          I specialize in industrial, automotive, and UX design, transforming complex 
          problems into simple, beautiful, and intuitive solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-16"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={() => scrollTo("projects")}
            className="group relative overflow-hidden px-10 py-4 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#0A1128] text-[15px] font-medium tracking-wide shadow-2xl shadow-black/20 dark:shadow-white/10 transition-all duration-300 hover:shadow-black/30 hover:-translate-y-1"
          >
            <span className="relative z-10">Explore Work</span>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("contact")}
            className="group px-10 py-4 rounded-full bg-transparent text-[#1D1D1F] dark:text-white border border-black/10 dark:border-white/20 text-[15px] font-medium tracking-wide hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
          >
            Get in touch
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator – kept above section edge so it doesn’t overlap next content */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[10px] font-semibold text-[#86868B] dark:text-gray-500 uppercase tracking-[0.2em]">
          Scroll to explore
        </span>
        <div className="w-[1px] h-16 bg-black/10 dark:bg-white/10 overflow-hidden">
          <motion.div
            className="w-full h-full bg-[#1D1D1F] dark:bg-white"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "circInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
