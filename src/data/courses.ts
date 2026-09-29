export interface Course {
  alt: string;
  id: string;
  image: string;
  title: string;
}

export interface CourseAvatar {
  alt: string;
  id: string;
  src: string;
}

export const courseSectionContent = {
  title: "Discover Your Passion,\nBuild Your Skills",
  description:
    "At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.",
  categoryRows: [
    [
      "Featured",
      "Music",
      "Drawing & Painting",
      "Marketing",
      "Animation",
      "Social Media",
      "UI/UX Design",
      "Creative Marketing",
    ],
    [
      "Digital Illustration",
      "Film & Video",
      "Crafts",
      "Freelance & Entrepreneurship",
      "Graphic Design",
      "Photography",
    ],
    ["Productivity", "Web Development", "Data Science", "Cooking"],
  ],
  moreLabel: "+ More",
} as const;

export const courseAvatars: CourseAvatar[] = [
  {
    id: "learner-01",
    src: "/images/courses/course-avatar-01.png",
    alt: "ByteSpace learner",
  },
  {
    id: "learner-02",
    src: "/images/courses/course-avatar-02.png",
    alt: "ByteSpace learner",
  },
  {
    id: "learner-03",
    src: "/images/courses/course-avatar-03.png",
    alt: "ByteSpace learner",
  },
  {
    id: "learner-04",
    src: "/images/courses/course-avatar-04.png",
    alt: "ByteSpace learner",
  },
];

export const courses: Course[] = [
  {
    id: "learn-figma",
    title: "Learn Figma from Basic",
    image: "/images/courses/learn-figma.jpg",
    alt: "Designers planning a Figma interface",
  },
  {
    id: "digital-assets",
    title: "Build Digital Asset",
    image: "/images/courses/digital-assets.jpg",
    alt: "A collection of digital interface icons",
  },
  {
    id: "big-data",
    title: "the Power of Big Data",
    image: "/images/courses/big-data.jpg",
    alt: "Analytics dashboards on a laptop",
  },
  {
    id: "productivity",
    title: "Balancing Productivity an...",
    image: "/images/courses/productivity.jpg",
    alt: "A productive desktop workspace",
  },
  {
    id: "money-management",
    title: "Mastering Money Manage...",
    image: "/images/courses/money-management.jpg",
    alt: "A financial performance chart",
  },
  {
    id: "startup-success",
    title: "From Idea to Startup Succe...",
    image: "/images/courses/startup-success.jpg",
    alt: "A team developing ideas with sticky notes",
  },
];

export const courseCardContent = {
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  rating: "4.5",
  instructorPrefix: "by",
  instructor: "purepearl studio",
  level: "Beginner",
  price: "$25",
  priceSuffix: "/lifetime",
} as const;
