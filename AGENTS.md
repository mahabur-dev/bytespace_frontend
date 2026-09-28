# Project: ByteSpace New (Landing Page + Login/Signup)

A production-quality landing page built from a Figma design. Quality, consistency, and maintainability matter more than speed. Do not rush, take shortcuts, or leave placeholder code behind.

## Stack

- Next.js (App Router), TypeScript (strict mode), Tailwind CSS
- Package manager: npm
- Deploy target: Vercel
- Extra libraries allowed: `clsx`, `tailwind-merge`, `zod`. Ask before adding any other dependency.

## Folder structure

```
public/
  images/                  # photos, backgrounds (webp/png)
  icons/                   # SVG icons and logo
src/
  app/
    layout.tsx             # fonts, metadata, Navbar + Footer
    page.tsx               # landing page: only composes sections
    globals.css            # Tailwind + design tokens (@theme)
    not-found.tsx
    login/page.tsx         # bonus
    signup/page.tsx        # bonus
  components/
    ui/                    # generic reusable pieces
      Button.tsx
      Input.tsx
      Card.tsx
      Container.tsx
      SectionHeading.tsx
    layout/
      Navbar.tsx
      Footer.tsx
    sections/              # one file per landing section
    auth/                  # bonus
      LoginForm.tsx
      SignupForm.tsx
  data/                    # all static content, typed
  lib/
    utils.ts               # cn() helper
    validators.ts          # zod schemas for auth forms
```

- Name section files after the real Figma sections and create them only when that section is built.
- Create a section subfolder only when it has real sub-components.
- Do not create `hooks/`, `types/`, `constants/`, `styles/`, or barrel files without a real need.
- Do not create files outside this structure without asking.

## Layer responsibilities

| Layer | Responsibility | Must not contain |
| --- | --- | --- |
| `app/` | Routing, layout, metadata, page composition | Markup details, business text, styling logic |
| `components/ui/` | Generic reusable building blocks | Page-specific text or data |
| `components/layout/` | Navbar and Footer | Section content |
| `components/sections/` | One landing-page section each | Hardcoded repeated content |
| `data/` | Typed static content | JSX or styling |
| `lib/` | Helpers and validation schemas | React components |

`app/page.tsx` only imports sections and renders them in order.

## Working method

1. Read each Figma frame fully before coding; use available Figma metadata, design context, variables, and screenshots.
2. Set design tokens in `globals.css` before building sections.
3. Build one section at a time; after it is complete, stop and summarize it.
4. Compare each section against Figma and correct visual differences.
5. Check desktop, tablet, and mobile.
6. If a required image, font, color, or copy is missing, ask; never invent it.

## Component and content rules

- One component per PascalCase file; use named exports except Next.js pages/layouts.
- Give every component a minimal named, typed props interface.
- Use Server Components by default; isolate client code to the smallest interactive part.
- Reuse components before creating new ones; split files around 150 lines.
- Put repeated content in typed `src/data/*.ts` files and render it with `.map()`.
- Copy Figma text exactly and use stable unique keys, never indexes when an identifier exists.

## Styling and accessibility

- Tailwind only: no inline styles, CSS modules, or extra CSS files.
- Tokens live in `globals.css`; do not hardcode values in components when a token exists.
- Mobile-first, with `md:` and `lg:` enhancements.
- Use `cn()` for conditional classes, `next/font` for fonts, and `next/image` for images.
- Use semantic HTML, one `h1` per page, meaningful image alt text, visible focus states, keyboard-accessible menus, and sufficient color contrast.

## Code quality and forms

- Strict TypeScript: no `any`, `@ts-ignore`, unused code, `console.log`, commented-out code, or finished-work TODOs.
- Use consistent PascalCase/camelCase naming; data files are camelCase and constants are UPPER_SNAKE_CASE.
- Run `npm run lint` and `npm run build` before each task is finished; both must be clean.
- Build auth only after the landing page is polished. Use Zod validation, accessible inline errors, a disabled submitting state, simulated success, and no backend.

## Git and README

- Never commit to `main`; use a `feature/*` branch when Git is available.
- Keep one small, meaningful commit per section or logical change.
- The final work belongs in a Pull Request into `main` with a short description and screenshots.
- README includes project overview, tech stack, local run steps, a folder summary, and the live Vercel link.
