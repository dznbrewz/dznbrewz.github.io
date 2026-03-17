import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../data/projects";

const CATEGORIES = [
  { label: "All Works", id: "all" },
  { label: "Industrial", id: "INDL" },
  { label: "Automotive", id: "AUTO" },
  { label: "UX Design", id: "UX" },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllInAllTab, setShowAllInAllTab] = useState(false);

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.categoryTag === activeCategory);

  // For the "All Works" tab, only surface one representative project per category by default
  const condensedAllProjects = useMemo(() => {
    if (activeCategory !== "all") return filteredProjects;

    const seen = new Set<string>();
    const result: typeof filteredProjects = [];

    for (const project of PROJECTS) {
      if (!seen.has(project.categoryTag)) {
        seen.add(project.categoryTag);
        result.push(project);
      }
    }

    return result;
  }, [activeCategory, filteredProjects]);

  const projectsToRender =
    activeCategory === "all" && !showAllInAllTab
      ? condensedAllProjects
      : filteredProjects;

  return (
    <section id="projects" className="py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-20 bg-transparent">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-[#1D1D1F] dark:text-white mb-6">
            Selected Works
          </h2>
          <p className="text-[#86868B] dark:text-gray-400 text-xl md:text-2xl max-w-xl font-normal leading-relaxed tracking-tight">
            A showcase of recent projects spanning industrial design, digital experiences, and mobility solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full text-[13px] font-semibold tracking-widest uppercase transition-all duration-500 ${
                activeCategory === cat.id
                  ? "bg-[#1D1D1F] dark:bg-white text-white dark:text-[#0A1128] shadow-[0_8px_30px_rgb(0,0,0,0.2)] dark:shadow-[0_8px_30px_rgb(255,255,255,0.2)]"
                  : "bg-white/50 dark:bg-white/10 text-[#1D1D1F] dark:text-gray-300 hover:bg-white dark:hover:bg-white/20 hover:shadow-md"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center">
        {projectsToRender.map((project, i) => (
          <ProjectCard key={project.id} project={{ ...project, index: i }} total={projectsToRender.length} />
        ))}

        {activeCategory === "all" &&
          !showAllInAllTab &&
          filteredProjects.length > projectsToRender.length && (
            <button
              type="button"
              onClick={() => setShowAllInAllTab(true)}
              className="mt-16 inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-white/70 dark:bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1D1D1F] dark:text-gray-100 hover:bg-white dark:hover:bg-white/20 transition-all"
            >
              Show all projects
              <span className="text-[10px] opacity-70">
                ({filteredProjects.length - projectsToRender.length} more)
              </span>
            </button>
          )}
      </div>
    </section>
  );
}
