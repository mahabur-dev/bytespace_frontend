export interface NavigationLink {
  href: string;
  id: string;
  isActive?: boolean;
  label: string;
}

export const navigationLinks: NavigationLink[] = [
  { id: "home", href: "/", isActive: true, label: "Home" },
  { id: "courses", href: "#courses", label: "Courses" },
  { id: "creators", href: "#creators", label: "Creators" },
];

export const accountLinks: NavigationLink[] = [
  { id: "sign-in", href: "/login", label: "Sign In" },
  { id: "join-us", href: "/signup", label: "Join Us" },
];
