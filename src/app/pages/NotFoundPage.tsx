import { Link } from "react-router";
import { motion } from "motion/react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A1128] text-[#1D1D1F] dark:text-gray-100 font-sans antialiased relative flex items-center justify-center px-6 py-24">
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-3xl mx-auto text-center"
      >
        <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-[#86868B] dark:text-gray-500 mb-8">
          404 — Page not found
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] text-[#1D1D1F] dark:text-white leading-[1.05]">
          This page doesn’t exist.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-[#86868B] dark:text-gray-400 max-w-xl mx-auto leading-relaxed tracking-tight">
          The link might be broken, or the page may have moved. Head back home and
          continue exploring the work.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="group relative overflow-hidden px-10 py-4 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#0A1128] text-[15px] font-medium tracking-wide shadow-2xl shadow-black/20 dark:shadow-white/10 transition-all duration-300 hover:shadow-black/30 hover:-translate-y-1"
          >
            <span className="relative z-10">Back to home</span>
            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] rounded-full" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

