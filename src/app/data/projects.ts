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
  contentImages?: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "moduleflow",
    title: "ModuleFlow",
    category: "Automotive / Mobility",
    categoryTag: "AUTO",
    description:
      "A transformable vehicle concept designed for the Toyota Logistic Design Competition. Modular architecture enabling multiple configurations for last-mile delivery.",
    details:
      "ModuleFlow reimagines urban logistics through a shape-shifting platform that adapts to cargo types. The design leverages parametric modeling and generative algorithms to optimize structural integrity across configurations. The exterior shell utilizes a self-healing polymer composite to withstand daily urban wear while maintaining a pristine appearance.",
    image:
      "https://images.unsplash.com/photo-1555550252-fc3187f10240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY29uY2VwdCUyMHZlaGljbGUlMjBhdXRvbm9tb3VzfGVufDF8fHx8MTc3MzY0NzE3MXww&ixlib=rb-4.1.0&q=80&w=1080",
    tools: ["Rhino", "Grasshopper", "KeyShot", "Alias"],
    year: "2024",
    index: 0,
    contentImages: [
      "https://images.unsplash.com/photo-1517409403882-f5c71d37df6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    ]
  },
  {
    id: "vajra",
    title: "VAJRÄ",
    category: "Industrial Design / Furniture",
    categoryTag: "INDL",
    description:
      "A kneeling chair concept inspired by Milanese museum aesthetics. Merging ergonomic research with sculptural form to create a statement piece.",
    details:
      "VAJRÄ draws from the tension between classical Italian craftsmanship and contemporary computational design. The organic curves were generated through topology optimization, ensuring minimal material waste while maximizing structural performance. A balance of tension and compression creates a floating seating posture.",
    image:
      "https://images.unsplash.com/photo-1760716478125-aa948e99ef85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZnVybml0dXJlJTIwY2hhaXIlMjBkZXNpZ258ZW58MXx8fHwxNzczNjQ3MTcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tools: ["Rhino", "Grasshopper", "3D Print", "Fusion 360"],
    year: "2023",
    index: 1,
    contentImages: [
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    ]
  },
  {
    id: "zero-brush",
    title: "Zero Brush",
    category: "Industrial Design",
    categoryTag: "INDL",
    description:
      "A biodegradable toothbrush designed to eliminate plastic waste in oral care. Winner of the iF Design Award for sustainable product innovation.",
    details:
      "Zero Brush uses a bio-composite material derived from agricultural waste. The handle decomposes naturally within 6 months. The bristle-head detachment system allows for modular replacement, further reducing environmental impact. Our research focused heavily on the lifecycle analysis of daily use items.",
    image:
      "https://images.unsplash.com/photo-1592372554345-22ced975691d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjB0b290aGJydXNoJTIwc3VzdGFpbmFibGUlMjBwcm9kdWN0fGVufDF8fHx8MTc3MzY0NzE3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    award: "iF DESIGN AWARD",
    tools: ["SolidWorks", "KeyShot", "Bio-Materials"],
    year: "2023",
    index: 2,
    contentImages: [
      "https://images.unsplash.com/photo-1610015501865-c38a1be09de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    ]
  },
  {
    id: "projected-reality",
    title: "Projected Reality",
    category: "UX / Hardware",
    categoryTag: "UX",
    description:
      "A handheld device functioning as an alternative to traditional VR headsets. Projects spatial interfaces into physical environments.",
    details:
      "Projected Reality bridges the gap between physical and digital spaces without the isolation of traditional VR. The device uses depth-sensing and projection mapping to create interactive overlays on any surface, enabling collaborative spatial computing in architectural and industrial design workflows.",
    image:
      "https://images.unsplash.com/photo-1768560876077-28ba0b0d3134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWdtZW50ZWQlMjByZWFsaXR5JTIwaGFuZGhlbGQlMjBkZXZpY2V8ZW58MXx8fHwxNzczNjQ3MTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tools: ["Figma", "Arduino", "Unity", "CAD"],
    year: "2024",
    index: 3,
    contentImages: [
      "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    ]
  },
];
