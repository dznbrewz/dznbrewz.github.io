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
    id: "zero-brush",
    title: "Zero Brush",
    category: "Industrial Design",
    categoryTags: ["INDL"],
    description:
      "A biodegradable toothbrush designed to eliminate plastic waste in oral care. Winner of the iF Design Award for sustainable product innovation.",
    details:
      "Zero Brush uses a bio-composite material derived from agricultural waste. The handle decomposes naturally within 6 months. The bristle-head detachment system allows for modular replacement, further reducing environmental impact. Our research focused heavily on the lifecycle analysis of daily use items.",
    image: new URL("../../images/zero_brush.jpg", import.meta.url).href,
    award: "iF DESIGN AWARD",
    tools: ["SolidWorks", "KeyShot", "Bio-Materials"],
    year: "2023",
    index: 0,
    contentImages: [
      new URL("../../images/ZB1.jpg", import.meta.url).href,
      new URL("../../images/ZB2.jpg", import.meta.url).href,
      new URL("../../images/ZB3.jpg", import.meta.url).href,
      new URL("../../images/ZB4.jpg", import.meta.url).href,
      new URL("../../images/ZB5.jpg", import.meta.url).href,
      new URL("../../images/ZB6.jpg", import.meta.url).href,
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
    image: new URL("../../images/PR.jpg", import.meta.url).href,
    tools: ["Figma", "Arduino", "Unity", "CAD"],
    year: "2025",
    index: 1,
    contentImages: [
      new URL("../../images/pr1.jpg", import.meta.url).href,
      new URL("../../images/pr2.jpg", import.meta.url).href,
      new URL("../../images/pr3.jpg", import.meta.url).href,
      new URL("../../images/pr4.jpg", import.meta.url).href,
      new URL("../../images/pr5.jpg", import.meta.url).href,
      new URL("../../images/pr6.jpg", import.meta.url).href,
      new URL("../../images/pr7.jpg", import.meta.url).href,
      new URL("../../images/pr8.jpg", import.meta.url).href,
      new URL("../../images/pr9.jpg", import.meta.url).href,
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
    image: new URL("../../images/vaj.jpg", import.meta.url).href,
    tools: ["Rhino", "Grasshopper", "3D Print", "Fusion 360"],
    year: "2025",
    index: 2,
    contentImages: [ 
      new URL("../../images/vaj1.jpg", import.meta.url).href,
      new URL("../../images/vaj2.jpg", import.meta.url).href,
      new URL("../../images/vaj3.jpg", import.meta.url).href,
      new URL("../../images/vaj4.jpg", import.meta.url).href,
      new URL("../../images/vaj5.jpg", import.meta.url).href,
      new URL("../../images/vaj6.jpg", import.meta.url).href,
    ]
  },
  {
    id: "aqua-nova",
    title: "Aqua Nova",
    category: "Industrial Design",
    categoryTags: ["INDL"],
    description:
      "A firefighting nozzle to reduce the backforce and the torque on the firefighter's hand.",
    details:
      "Aqua Nova is a firefighting nozzle designed to reduce the backforce and the torque on the firefighter's hand. The nozzle is designed to be lightweight and durable, done with additive manufacturing and a comfortable handle to change modes.",
    image: new URL("../../images/an.jpg", import.meta.url).href,
    tools: ["SolidWorks", "Fusion 360", "KeyShot","Ntop"],
    year: "2024",
    index: 3,
    contentImages: [
      new URL("../../images/an1.jpg", import.meta.url).href,
      new URL("../../images/an2.jpg", import.meta.url).href,
      new URL("../../images/an3.jpg", import.meta.url).href,
      new URL("../../images/an4.jpg", import.meta.url).href,
      new URL("../../images/an5.jpg", import.meta.url).href,
      new URL("../../images/an6.jpg", import.meta.url).href,
      new URL("../../images/an7.jpg", import.meta.url).href,
    ]
  },
  {
    id: "moduleflow",
    title: "ModuleFlow",
    category: "Automotive / Mobility",
    categoryTags: ["AUTO", "INDL"],
    description:
      "A transformable vehicle concept designed for the Toyota Logistic Design Competition. Modular architecture enabling multiple configurations for last-mile delivery.",
    details:
      "ModuleFlow reimagines urban logistics through a shape-shifting platform that adapts to cargo types. The design leverages parametric modeling and generative algorithms to optimize structural integrity across configurations. The exterior shell utilizes a self-healing polymer composite to withstand daily urban wear while maintaining a pristine appearance.",
    image: new URL("../../images/MF.jpg", import.meta.url).href,
    tools: ["Rhino", "Grasshopper", "KeyShot", "Alias"],
    year: "2026",
    index: 4,
    contentImages: [
      new URL("../../images/MF1.jpg", import.meta.url).href,
      new URL("../../images/MF2.jpg", import.meta.url).href,
      new URL("../../images/MF3.jpg", import.meta.url).href,
      new URL("../../images/MF4.jpg", import.meta.url).href,
      new URL("../../images/MF5.jpg", import.meta.url).href,
      new URL("../../images/MF6.jpg", import.meta.url).href,
    ]
  },
];
