export interface GrowthStat {
  id: string;
  label: string;
  value: string;
}

export const growthContent = {
  title: "Your Path to Professional\nGrowth Starts Here!",
  description:
    "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
} as const;

export const growthStats: GrowthStat[] = [
  { id: "students", value: "12K", label: "Students" },
  { id: "courses", value: "70+", label: "Courses" },
  { id: "creators", value: "16", label: "Creators" },
];

export const studentArtworkContent = {
  progressLabel: "Learning Progress",
  progressValue: "55%",
} as const;

export const creatorContent = {
  title: "Create & Manage\nCourses Easily.",
  descriptionLead: "ByteSpace",
  description:
    " supports individuals or entities in the creation, publication, and administration of educational courses.",
  benefits: [
    "Share Your Expertise",
    "Monetize Your Passion",
    "Flexibility and Autonomy",
    "Build a Community",
  ],
} as const;

export const revenueCards = [
  {
    id: "total-revenue",
    label: "Total Revenue",
    period: "July 1-28",
    value: "$120.29",
  },
  {
    id: "year-to-date",
    label: "Year to Date",
    period: "2023",
    value: "$1,200.38",
    badge: "+12$",
  },
] as const;
