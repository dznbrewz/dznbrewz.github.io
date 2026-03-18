import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const CV_SRC = new URL("../../images/Harsh_cv.pdf", import.meta.url).href;

const NAV_ITEMS = [
  { label: "Home", id: "hero" },
  { label: "Work", id: "projects" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.div
        className="fixed top-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={`pointer-events-auto transition-all duration-500 ease-[0.16,1,0.3,1] ${
            scrolled 
              ? "bg-white/70 dark:bg-[#0A1128]/70 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.5)] py-3 px-6 rounded-full" 
              : "bg-transparent py-4 px-8 w-full max-w-7xl justify-between flex"
          }`}
        >
          <div className={`flex items-center ${scrolled ? 'gap-8' : 'w-full justify-between'}`}>
            <button
              onClick={() => scrollTo("hero")}
              className={`font-semibold tracking-[-0.02em] text-[#1D1D1F] dark:text-gray-100 transition-all duration-300 hover:text-[#0066CC] dark:hover:text-blue-400 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              Harsh P
            </button>

            <div className="hidden md:flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id && scrolled;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className={`relative px-4 py-2 text-[13px] font-semibold tracking-wide transition-colors uppercase ${
                      isActive ? "text-white" : "text-[#1D1D1F]/70 dark:text-gray-400 hover:text-[#1D1D1F] dark:hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-[#1D1D1F] dark:bg-[#1A264A] rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </button>
                );
              })}
            </div>

            <div className={`${scrolled ? 'hidden' : 'hidden md:flex'} items-center`}>
               <span className="text-[11px] font-semibold uppercase tracking-widest text-[#86868B]">
                 Available for Work
               </span>
            </div>

            <div className="flex items-center gap-3">
              {/* CV download — desktop only */}
              <a
                href={CV_SRC}
                download
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#0A1128] text-[12px] font-semibold tracking-wide hover:bg-black dark:hover:bg-gray-100 transition-colors duration-300"
              >
                <Download className="w-3.5 h-3.5" />
                CV
              </a>

              <ThemeToggle />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full bg-[#1D1D1F] dark:bg-[#1A264A] text-white z-50 relative pointer-events-auto"
              >
                <motion.div
                  className="w-4 h-[1.5px] bg-white rounded-full origin-center"
                  animate={isOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
                />
                <motion.div
                  className="w-4 h-[1.5px] bg-white rounded-full origin-center"
                  animate={isOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
                />
              </button>
            </div>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#111111]/95 backdrop-blur-3xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col items-center gap-8 w-full px-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-6xl font-semibold tracking-[-0.04em] text-white/50 hover:text-white transition-colors py-4 w-full border-b border-white/10 text-center"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href={CV_SRC}
                download
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: NAV_ITEMS.length * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#0A1128] text-lg font-semibold tracking-wide mt-4 hover:bg-black dark:hover:bg-gray-100 transition-colors duration-300"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
