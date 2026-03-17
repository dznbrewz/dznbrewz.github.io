import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

export interface Project {
  id: string;
  title: string;
  category: string;
  categoryTag: string;
  description: string;
  details: string;
  image: string;
  award?: string;
  tools: string[];
  year: string;
  index: number;
}

export function ProjectCard({ project, total }: { project: Project; total: number }) {
  return (
    <div className="w-full flex justify-center mb-10">
      <motion.div className="w-full max-w-5xl">
        <div className="group relative w-full flex flex-col md:flex-row gap-4 md:gap-6 bg-[#FCFCFD] dark:bg-[#1A264A] border border-black/5 dark:border-white/10 rounded-3xl p-4 md:p-6 shadow-[0_8px_30px_-16px_rgba(0,0,0,0.18)] dark:shadow-[0_8px_30px_-16px_rgba(0,0,0,0.7)] overflow-hidden">
          <Link to={`/projects/${project.id}`} className="absolute inset-0 z-20" aria-label={`View ${project.title}`} />
          
          {/* Soft Inner Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/60 dark:from-white/5 to-transparent pointer-events-none rounded-3xl" />

          {/* Content Area */}
          <div className="flex flex-col gap-4 w-full md:w-1/2 py-2 md:py-4 z-10">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#0066CC] dark:text-blue-400 uppercase mb-4 block">
                0{project.index + 1} / 0{total}
              </span>
              <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-[#1D1D1F] dark:text-white mb-2 group-hover:text-[#0066CC] dark:group-hover:text-blue-400 transition-colors duration-500">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-[#86868B] dark:text-gray-400">
                {project.category}
              </p>
            </div>

            <p className="text-[#1D1D1F]/70 dark:text-gray-300 text-base leading-relaxed mt-4 flex-grow">
              {project.description}
            </p>

            <div className="flex flex-col gap-4 mt-6">
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
            </div>
          </div>

          {/* Image Area – compact thumbnail with metadata below */}
          <div className="relative w-full md:w-1/2 rounded-2xl md:rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800 z-10 mx-auto flex flex-col">
            <div className="relative w-full aspect-[4/3]">
              <motion.div
                className="w-full h-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {project.award && (
                <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-white/90 dark:bg-[#0A1128]/90 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)]">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#1D1D1F] dark:text-white">
                    {project.award}
                  </span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between px-4 py-3 bg-white/90 dark:bg-[#0A1128]/95 border-t border-black/5 dark:border-white/10">
              <span className="text-sm font-medium text-[#86868B] dark:text-gray-300">
                {project.year}
              </span>
              <div className="flex items-center gap-2 text-sm font-semibold tracking-tight text-[#1D1D1F] dark:text-white group-hover:text-[#0066CC] dark:group-hover:text-blue-400 transition-colors">
                View Project
                <span className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center group-hover:bg-[#0066CC] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}