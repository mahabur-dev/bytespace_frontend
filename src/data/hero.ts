export interface HeroAvatar {
  alt: string;
  id: string;
  src: string;
}

export interface HeroContent {
  category: {
    courses: string;
    students: string;
    title: string;
  };
  progress: {
    label: string;
    value: string;
  };
  rating: {
    count: string;
    label: string;
    value: string;
  };
  search: {
    buttonLabel: string;
    placeholder: string;
  };
  subtitle: string;
  title: string;
  avatars: HeroAvatar[];
  avatarCount: string;
}

export const heroContent: HeroContent = {
  title: "Get Access to Hundreds Courses Available",
  subtitle:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
  search: {
    placeholder: "Course, topic, creator",
    buttonLabel: "Search",
  },
  progress: {
    label: "Learning Progress",
    value: "55%",
  },
  category: {
    title: "UI/UX Design",
    courses: "200 Courses",
    students: "1000+ Students",
  },
  rating: {
    label: "Happy Students",
    value: "4.5",
    count: "(240)",
  },
  avatarCount: "2K+",
  avatars: [
    { id: "student-1", src: "/images/hero/avatar-1.png", alt: "Happy ByteSpace student" },
    { id: "student-2", src: "/images/hero/avatar-2.png", alt: "Happy ByteSpace student" },
    { id: "student-3", src: "/images/hero/avatar-3.png", alt: "Happy ByteSpace student" },
    { id: "student-4", src: "/images/hero/avatar-4.png", alt: "Happy ByteSpace student" },
    { id: "student-5", src: "/images/hero/avatar-5.png", alt: "Happy ByteSpace student" },
    { id: "student-6", src: "/images/hero/avatar-6.png", alt: "Happy ByteSpace student" },
    { id: "student-7", src: "/images/hero/avatar-7.png", alt: "Happy ByteSpace student" },
  ],
};
