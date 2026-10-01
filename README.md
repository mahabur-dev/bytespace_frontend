# ByteSpace

ByteSpace is a production-quality marketing website built from its Figma design, developed as part of the Jr. Software Engineer (Frontend) assessment for **Doin Tech Limited**.

**Live Demo:** [https://bytespace-frontend-xi.vercel.app/](https://bytespace-frontend-xi.vercel.app/)
**Figma Design:** [ByteSpace New — Figma](https://www.figma.com/design/26TBgRjmpuxudcErJsHUfy/ByteSpace-New-Check-website)

---

## Overview

This project recreates the ByteSpace landing page and authentication screens from Figma, focused on pixel accuracy, responsiveness, and clean, reusable, typed React components.

**Completed:**
- [x] Landing page — Hero, Partner Logos, Courses, Learning Paths, Growth Showcase, Creator CTA, Testimonials, Navbar and Footer
- [x] Login page (bonus)
- [x] Signup page (bonus)

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Runtime | React 19 |
| Styling | Tailwind CSS v4 |
| Utilities | clsx, tailwind-merge (`cn()` helper) |
| Fonts | Self-hosted via `next/font` (Clash Display, Satoshi) |
| Deployment | Vercel |
| Package Manager | npm |

## Features

- Fully responsive layout across mobile, tablet, and desktop breakpoints
- Reusable, typed UI primitives (`Button`, `Card`, `Input`, `Container`, `SectionHeading`, `BrandLogo`)
- Section-based landing page architecture, matching the structure of the Figma design
- Dedicated `(marketing)` route group for the landing page, separate from the auth routes
- Login and Signup pages with a shared `AuthField` component and artwork panel
- Responsive navbar with a dedicated mobile menu component
- Design tokens (colors, typography, spacing) centralized in `globals.css` via Tailwind's `@theme`
- Content fully separated from UI markup — all copy lives in typed files under `src/data/`
- Accessible markup: semantic sections, `aria-label`s on icon buttons, visible focus states
- Custom 404 page (`not-found.tsx`)

## Folder Structure

```
src/
├── app/
│   ├── (marketing)/          # Landing page route group
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── login/page.tsx        # Login route
│   ├── signup/page.tsx       # Signup route
│   ├── not-found.tsx
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── globals.css           # Tailwind + design tokens
│   └── fonts/                # Self-hosted font files
│
├── components/
│   ├── ui/                   # Reusable primitives (Button, Card, Input, Container, SectionHeading, BrandLogo)
│   ├── layout/                # Navbar, NavbarMobileMenu, Footer
│   ├── sections/               # Landing page sections
│   │   ├── Hero.tsx, Courses.tsx, LearningPaths.tsx, GrowthShowcase.tsx,
│   │   │   CreatorCta.tsx, Testimonials.tsx, PartnerLogos.tsx
│   │   └── */                 # Sub-components for sections with their own artwork/cards
│   ├── auth/                  # Shared login/signup pieces (AuthField, AuthArtwork, AuthHomeLink, LoginForm)
│   └── signup/                # SignupForm
│
├── data/                     # Typed static content (one file per section/route)
└── lib/
    └── utils.ts               # cn() class-merging helper

public/
├── images/                   # Section imagery (hero, courses, growth, partners, testimonials, etc.)
└── icons/                    # SVG icons and the brand mark
```

## Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/mahabur-dev/bytespace_frontend.git
cd your-repo-name

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Deployment

This project is deployed on **Vercel**, connected directly to the GitHub repository. Every push to `main` triggers an automatic production deployment.

## Git Workflow

- Development was done on a dedicated feature branch, not directly on `main`.
- Work is submitted via a Pull Request into `main` for review.
- Commits follow a conventional, descriptive format (e.g. `feat: add hero section`, `fix: navbar spacing`).

**Pull Request:** [Link to PR](https://github.com/mahabur-dev/bytespace_frontend.git) 

## Notes for the Reviewer

- All landing page sections from the Figma design have been implemented and are responsive across breakpoints: Navbar, Hero, Partner Logos, Courses, Learning Paths, Growth Showcase, Creator CTA, Testimonials, and Footer.
- Login and Signup pages were built as bonus work. The forms are presentational (client-side markup only) and are not wired to a backend or authentication service, per the assessment scope.
- Fonts (Clash Display, Satoshi) are self-hosted under `src/app/fonts/` and loaded via `next/font` for optimal performance.
