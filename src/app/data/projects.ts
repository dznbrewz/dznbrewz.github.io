export interface Project {
  id: string;
  title: string;
  category: string;
  /** One or more category tags — first entry is the primary category. */
  categoryTags: string[];
  description: string;
  details: string;
  image: string;
  award?: string;
  tools: string[];
  year: string;
  index: number;
  contentImages?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "moduleflow",
    title: "ModuleFlow",
    category: "Automotive / Mobility",
    categoryTags: ["AUTO", "INDL"],
    description:
      "A transformable vehicle concept designed for the Toyota Logistic Design Competition. Modular architecture enabling multiple configurations for last-mile delivery.",
    details:
      "ModuleFlow reimagines urban logistics through a shape-shifting platform that adapts to cargo types. The design leverages parametric modeling and generative algorithms to optimize structural integrity across configurations. The exterior shell utilizes a self-healing polymer composite to withstand daily urban wear while maintaining a pristine appearance.",
    image:
      "/src/images/MF.jpg",
    tools: ["Rhino", "Grasshopper", "KeyShot", "Alias"],
    year: "2026",
    index: 0,
    contentImages: [
      "/src/images/MF1.jpg",
      "/src/images/MF2.jpg",
      "/src/images/MF3.jpg",
      "/src/images/MF4.jpg",
      "/src/images/MF5.jpg",
      "/src/images/MF6.jpg",
    ]
  },
  {
    id: "vajra",
    title: "VAJRÄ",
    category: "Industrial Design / Furniture",
    categoryTags: ["INDL"],
    description:
      "A kneeling chair concept inspired by Milanese museum aesthetics. Merging ergonomic research with sculptural form to create a statement piece.",
    details:
      "VAJRÄ draws from the tension between classical Italian craftsmanship and contemporary computational design. The organic curves were generated through topology optimization, ensuring minimal material waste while maximizing structural performance. A balance of tension and compression creates a floating seating posture.",
    image:
      "/src/images/vaj.jpg",
    tools: ["Rhino", "Grasshopper", "3D Print", "Fusion 360"],
    year: "2025",
    index: 1,
    contentImages: [ 
      "/src/images/vaj1.jpg",
      "/src/images/vaj2.jpg",
      "/src/images/vaj3.jpg",
      "/src/images/vaj4.jpg",
      "/src/images/vaj5.jpg",
      "/src/images/vaj6.jpg",
    ]
  },
  {
    id: "zero-brush",
    title: "Zero Brush",
    category: "Industrial Design",
    categoryTags: ["INDL"],
    description:
      "A biodegradable toothbrush designed to eliminate plastic waste in oral care. Winner of the iF Design Award for sustainable product innovation.",
    details:
      "Zero Brush uses a bio-composite material derived from agricultural waste. The handle decomposes naturally within 6 months. The bristle-head detachment system allows for modular replacement, further reducing environmental impact. Our research focused heavily on the lifecycle analysis of daily use items.",
    image:
      "/src/images/zero_brush.jpg",
    award: "iF DESIGN AWARD",
    tools: ["SolidWorks", "KeyShot", "Bio-Materials"],
    year: "2024",
    index: 2,
    contentImages: [
      "/src/images/ZB1.jpg",
      "/src/images/ZB2.jpg",
      "/src/images/ZB3.jpg",
      "/src/images/ZB4.jpg",
      "/src/images/ZB5.jpg",
      "/src/images/ZB6.jpg",
    ]
  },
  {
    id: "projected-reality",
    title: "Projected Reality",
    category: "UX / Hardware",
    categoryTags: ["UX", "INDL"],
    description:
      "A handheld device functioning as an alternative to traditional VR headsets. Projects spatial interfaces into physical environments.",
    details:
      "Projected Reality bridges the gap between physical and digital spaces without the isolation of traditional VR. The device uses depth-sensing and projection mapping to create interactive overlays on any surface, enabling collaborative spatial computing in architectural and industrial design workflows.",
    image:
      "/src/images/pr.jpg",
    tools: ["Figma", "Arduino", "Unity", "CAD"],
    year: "2025",
    index: 3,
    contentImages: [
      "/src/images/pr1.jpg",
      "/src/images/pr2.jpg",
      "/src/images/pr3.jpg",
      "/src/images/pr4.jpg",
      "/src/images/pr5.jpg",
      "/src/images/pr6.jpg",
      "/src/images/pr7.jpg",
      "/src/images/pr8.jpg",
      "/src/images/pr9.jpg",
    ]
  },
];
