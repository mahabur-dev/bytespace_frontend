export interface LearningPath {
  icon: string;
  id: string;
  label: string;
}

export const learningPathsContent = {
  title: "Explore Diverse Learning Paths at Bytespace",
  description:
    "At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.",
} as const;

export const learningPaths: LearningPath[] = [
  {
    id: "design",
    label: "Design",
    icon: "/images/learning-paths/design.png",
  },
  {
    id: "development",
    label: "Development",
    icon: "/images/learning-paths/development.png",
  },
  {
    id: "it-software",
    label: "IT & Software",
    icon: "/images/learning-paths/it-software.png",
  },
  {
    id: "business",
    label: "Business",
    icon: "/images/learning-paths/business.png",
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: "/images/learning-paths/marketing.png",
  },
  {
    id: "photography",
    label: "Photography",
    icon: "/images/learning-paths/photography.png",
  },
];
