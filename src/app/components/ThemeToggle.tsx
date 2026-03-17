import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex items-center w-14 h-8 rounded-full p-1 transition-colors duration-500 pointer-events-auto border ${
        isDark 
          ? "bg-[#1A264A] border-black/50 shadow-[inset_0_2px_8px_rgba(0,0,0,0.4)]" 
          : "bg-black/5 border-black/10 shadow-[inset_0_2px_8px_rgba(0,0,0,0.05)]"
      }`}
      aria-label="Toggle theme"
    >
      {/* Background Indicators */}
      <div className="absolute inset-0 flex items-center justify-between px-2 w-full pointer-events-none">
        <Sun className={`w-3.5 h-3.5 transition-opacity duration-300 ${isDark ? "opacity-30 text-blue-100" : "opacity-0"}`} />
        <Moon className={`w-3.5 h-3.5 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-30 text-[#1D1D1F]"}`} />
      </div>

      {/* Sliding Thumb */}
      <motion.div
        initial={false}
        animate={{ x: isDark ? 24 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.2)] ${
          isDark 
            ? "bg-[#0A1128] border border-white/10 text-blue-300" 
            : "bg-white border border-black/5 text-amber-500"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={isDark ? "moon" : "sun"}
            initial={{ opacity: 0, rotate: isDark ? -90 : 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: isDark ? 90 : -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {isDark ? <Moon className="w-3.5 h-3.5 fill-current/20" /> : <Sun className="w-3.5 h-3.5 fill-current/20" />}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </motion.button>
  );
}