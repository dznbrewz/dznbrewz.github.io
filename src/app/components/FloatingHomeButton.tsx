import { Link } from "react-router";
import { motion } from "motion/react";
import { Home } from "lucide-react";

export function FloatingHomeButton() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-2xl transition-colors duration-300 font-medium text-sm tracking-tight bg-white/40 border border-white/50 text-[#1D1D1F] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,0.8)] hover:bg-white/60 dark:bg-[#0A1128]/60 dark:border-[#1A264A]/50 dark:text-blue-50 dark:shadow-[0_8px_32px_rgba(10,17,40,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] dark:hover:bg-[#0A1128]/80 dark:hover:border-[#2a3f7a]/50"
        >
          <Home className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
