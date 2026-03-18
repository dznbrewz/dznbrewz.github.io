import * as React from "react";
import { useParams, Navigate, Link } from "react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { PROJECTS } from "../data/projects";
import { FloatingHomeButton } from "../components/FloatingHomeButton";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useRef, useEffect, useLayoutEffect, useMemo, useState } from "react";

export default function ProjectPage() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  // Scroll to top when the project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const otherProjects = PROJECTS.filter((p) => p.id !== id).slice(0, 3);

  const containerRef = useRef<HTMLDivElement>(null);
  const slidesSectionRef = useRef<HTMLElement>(null);
  const slidesViewportRef = useRef<HTMLDivElement>(null);
  const slidesTrackRef = useRef<HTMLDivElement>(null);
  const [slidesMaxX, setSlidesMaxX] = useState(0);
  const [slidesSectionHeightPx, setSlidesSectionHeightPx] = useState<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const slideImages = project.contentImages ?? [];
  const slidesCount = slideImages.length;

  // "end end" = progress reaches 1 exactly when the section's bottom
  // hits the viewport's bottom, which is the same moment the sticky
  // child starts to unpin.  This makes the math exact.
  const { scrollYProgress: slidesProgress } = useScroll({
    target: slidesSectionRef,
    offset: ["start start", "end end"],
  });

  // Slides reach the last frame at 80 % progress, then DWELL there
  // for the remaining 20 % so the user clearly sees the final slide
  // before the section unpins and vertical scroll resumes.
  const slidesX = useTransform(
    slidesProgress,
    [0, 0.8, 1],
    [0, -slidesMaxX, -slidesMaxX],
  );

  useLayoutEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;

    const measure = () => {
      const viewportEl = slidesViewportRef.current;
      const trackEl = slidesTrackRef.current;
      if (!viewportEl || !trackEl) return;

      const maxX = Math.max(0, trackEl.scrollWidth - viewportEl.clientWidth);
      if (maxX === 0) return; // not ready yet — deferred retries will catch it

      setSlidesMaxX(maxX);

      // With "end end" offset, scrollable distance = sectionHeight - vh.
      // We want: 80 % of that distance covers slidesMaxX pixels of horizontal travel.
      // → sectionHeight - vh = maxX / 0.8
      // → sectionHeight = vh + maxX * 1.25
      // Add half a viewport of extra so the dwell feels comfortable.
      const vh = window.innerHeight;
      setSlidesSectionHeightPx(vh + Math.round(maxX * 1.25) + Math.round(vh * 0.5));
    };

    measure();
    t1 = setTimeout(measure, 120);
    t2 = setTimeout(measure, 500);

    const ro = new ResizeObserver(measure);
    if (slidesViewportRef.current) ro.observe(slidesViewportRef.current);
    if (slidesTrackRef.current) ro.observe(slidesTrackRef.current);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      ro.disconnect();
    };
  }, [slidesCount]);

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A1128] text-[#1D1D1F] dark:text-gray-100 selection:bg-[#0066CC]/20 selection:text-[#0066CC] font-sans antialiased relative pb-32 transition-colors duration-500">
      {/* Noise Overlay */}
      <div 
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      
      <div ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-end pb-24 px-6 md:px-12 bg-black">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <ImageWithFallback 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-20 max-w-5xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="text-white/70 font-semibold tracking-widest uppercase text-sm mb-4 block">
              {project.category} — {project.year}
            </span>
            <h1 className="text-5xl md:text-8xl font-semibold tracking-[-0.04em] text-white mb-6">
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          <div className="md:col-span-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-4xl font-normal leading-relaxed text-[#1D1D1F] dark:text-gray-100 mb-8"
            >
              {project.description}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-[#86868B] dark:text-gray-400 text-lg leading-relaxed"
            >
              {project.details}
            </motion.p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold tracking-widest text-[#1D1D1F] dark:text-gray-100 uppercase mb-4">
                Tools & Methods
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/10 text-[11px] font-semibold tracking-widest uppercase text-[#1D1D1F]/70 dark:text-gray-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
            
            {project.award && (
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.3 }}
               >
                 <h3 className="text-sm font-semibold tracking-widest text-[#1D1D1F] dark:text-gray-100 uppercase mb-4">
                   Recognition
                 </h3>
                 <p className="text-[#86868B] dark:text-gray-400 text-lg">{project.award}</p>
               </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Slides gallery – vertical scroll drives horizontal motion (1920x1080 / 16:9) */}
      {slideImages.length > 0 && (
        <section
          ref={slidesSectionRef}
          className="relative"
          style={{ height: slidesSectionHeightPx ? `${slidesSectionHeightPx}px` : `${(slidesCount + 2) * 100}vh` }}
        >
          <div className="sticky top-0 h-screen flex flex-col justify-center">
            <div className="max-w-7xl mx-auto w-full px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] dark:text-gray-100 mb-2">
                    Process Slides
                  </h2>
                  <p className="text-sm md:text-base text-[#86868B] dark:text-gray-400 max-w-xl">
                    Scroll down to move through the slides horizontally.
                  </p>
                </div>
              </div>
            </div>

            <div ref={slidesViewportRef} className="w-full overflow-hidden">
              <motion.div
                ref={slidesTrackRef}
                style={{ x: slidesX }}
                className="flex gap-6 px-6 md:px-12 will-change-transform"
              >
                {slideImages.map((img, idx) => (
                  <div
                    key={idx}
                    className="shrink-0 w-[85vw] md:w-[70vw] lg:w-[960px]"
                  >
                    <div className="aspect-[16/9] rounded-[2rem] overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.6)]">
                      <ImageWithFallback
                        src={img}
                        alt={`${project.title} slide ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="mt-4 flex items-center justify-between text-xs font-medium tracking-wide text-[#86868B] dark:text-gray-400">
                      <span>
                        Slide {idx + 1} / {slideImages.length}
                      </span>
                      <span></span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Next Projects Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-12 border-t border-black/5 dark:border-white/10">
        <h2 className="text-2xl font-semibold tracking-[-0.02em] text-[#1D1D1F] dark:text-gray-100 mb-12">
          More Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/projects/${p.id}`} className="group block">
                <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100 dark:bg-gray-800 mb-6">
                  <ImageWithFallback 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-[#1D1D1F] dark:text-gray-100 group-hover:text-[#0066CC] dark:group-hover:text-blue-400 transition-colors mb-2">
                  {p.title}
                </h3>
                <p className="text-[#86868B] dark:text-gray-400 text-sm font-medium">
                  {p.category}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <FloatingHomeButton />
    </div>
  );
}
