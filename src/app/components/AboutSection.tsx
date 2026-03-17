import * as React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { GraduationCap, Palette, Lightbulb, Cog, Shield, Trophy } from "lucide-react";
import { TextReveal } from "./ui/TextReveal";

const PORTRAIT_SRC = new URL("../../images/harsh.jpg", import.meta.url).href;

const TIMELINE = [
  {
    year: "2022",
    title: "B.E. in Electronics & Communication",
    desc: "Engineering fundamentals and systems thinking.",
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    year: "2024",
    title: "iF Design Award",
    desc: "Winner for sustainable product innovation (Zero Brush).",
    icon: <Trophy className="w-5 h-5" />,
  },
  {
    year: "2025",
    title: "M.Des at IIT Guwahati",
    desc: "Specialized in industrial & interaction design.",
    icon: <Palette className="w-5 h-5" />,
  },
  {
    year: "2026",
    title: "Based in Bangalore",
    desc: "Working at the intersection of Industrial, UX, and AI.",
    icon: <Cog className="w-5 h-5" />,
  },
];

const SKILLS = [
  "Industrial Design",
  "UI/UX Design",
  "Automotive Styling",
  "Rhino + Grasshopper",
  "Figma",
  "SolidWorks",
  "Rapid Prototyping",
  "Design Systems",
];

export function AboutSection() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20">
      <div className="mb-24 md:text-center flex flex-col items-center">
        <h2 className="text-[12px] font-semibold tracking-[0.3em] uppercase text-[#86868B] dark:text-gray-500 mb-8">
          About the designer
        </h2>
        <div className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-[#1D1D1F] dark:text-white mb-10 max-w-4xl leading-[1.1]">
          <TextReveal text="Bridging the gap between" className="justify-center" />
          <TextReveal text="engineering systems &" delay={0.2} className="justify-center text-[#86868B] dark:text-gray-400 italic font-['Playfair_Display'] font-normal" />
          <TextReveal text="minimalist craft." delay={0.4} className="justify-center" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-[#86868B] dark:text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed tracking-tight font-normal"
        >
          I am a multidisciplinary designer with roots in electronics engineering and a master's in design. 
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start mt-32">
        {/* Skills & Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32"
        >
          <div className="relative w-full rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-2xl shadow-black/10 dark:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <motion.img
              style={{ y: imageY }}
              src={PORTRAIT_SRC}
              alt="Designer Portrait"
              className="block w-full h-auto object-contain"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[2rem]" />
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#1D1D1F] dark:text-white mb-6">Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="px-5 py-2.5 bg-white/60 dark:bg-[#1A264A]/60 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full text-[13px] font-medium tracking-wide text-[#1D1D1F] dark:text-gray-200 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:bg-white dark:hover:bg-[#1A264A] transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-16 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] text-[#1D1D1F] dark:text-white mb-12">
              Journey
            </h3>
            
            <div className="relative">
              {/* Main Line */}
              <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-black/10 via-black/10 dark:from-white/10 dark:via-white/10 to-transparent" />
              
              <div className="flex flex-col gap-16">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex gap-10 group"
                  >
                    {/* Icon Container */}
                    <div className="relative z-10 flex-shrink-0 w-20 h-20 bg-[#FCFCFD] dark:bg-[#0A1128] border border-black/5 dark:border-white/10 rounded-full flex items-center justify-center text-[#1D1D1F] dark:text-white shadow-lg shadow-black/5 dark:shadow-none group-hover:scale-110 group-hover:border-[#0066CC]/20 dark:group-hover:border-blue-400/30 group-hover:text-[#0066CC] dark:group-hover:text-blue-400 transition-all duration-500">
                      {item.icon}
                    </div>
                    
                    <div className="pt-2 flex-1">
                      <span className="text-[11px] font-bold tracking-[0.2em] text-[#0066CC] dark:text-blue-400 uppercase mb-3 block">
                        {item.year}
                      </span>
                      <h4 className="text-2xl font-semibold text-[#1D1D1F] dark:text-white tracking-tight mb-3 group-hover:text-[#0066CC] dark:group-hover:text-blue-400 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-[#86868B] dark:text-gray-400 text-lg leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
