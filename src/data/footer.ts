export interface FooterLink {
  id: string;
  label: string;
}

export interface FooterLinkGroup {
  id: string;
  links: FooterLink[];
}

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    id: "browse",
    links: [
      { id: "featured-courses", label: "Featured Courses" },
      { id: "featured-categories", label: "Featured Categories" },
      { id: "business", label: "Business" },
      { id: "it", label: "IT" },
      { id: "design", label: "Design" },
    ],
  },
  {
    id: "more-categories",
    links: [
      { id: "development", label: "Development" },
      { id: "marketing", label: "Marketing" },
      { id: "photography", label: "Photography" },
      { id: "finance", label: "Finance" },
      { id: "sport", label: "Sport" },
    ],
  },
  {
    id: "platform",
    links: [
      { id: "become-a-creator", label: "Become a Creator" },
      { id: "affiliate-program", label: "Affiliate Program" },
      { id: "contact", label: "Contact" },
      { id: "help", label: "Help" },
      { id: "about", label: "About" },
    ],
  },
];

export const footerLegalLinks: FooterLink[] = [
  { id: "privacy-policy", label: "Privacy Policy" },
  { id: "terms-of-service", label: "Terms of Service" },
  { id: "cookies-settings", label: "Cookies Settings" },
];
