# Nike Landing Page

A modern, responsive Nike landing page built with **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**. This project showcases best practices in component design with **DRY** (Don't Repeat Yourself) and **SSOT** (Single Source of Truth) principles.

## Tech Stack

- **[Next.js 15](https://nextjs.org/)** — React framework with App Router
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **ESLint + Prettier** — Code quality & formatting
- **Husky + commitlint** — Git hooks & conventional commits

## Project Structure

```
app/
├── components/
│   ├── cards/           # Display cards (PopularProductCard, ReviewCard, etc.)
│   ├── layout/          # Layout components (Nav)
│   ├── sections/        # Page sections (Hero, Footer, Services, etc.)
│   └── ui/              # Reusable UI components
├── globals.css          # Global styles, theme, and utility classes
├── layout.tsx           # Root layout
└── page.tsx             # Home page with section configuration
assets/
├── icons/               # SVG icons
└── images/              # PNG/SVG images
constants/
└── index.ts             # Single source of truth for data & text
```

## Reusable UI Components

The project applies **DRY** (Don't Repeat Yourself) by extracting repeated patterns into reusable components:

| Component | Purpose | Used In |
|---|---|---|
| **`SectionLayout`** | Wraps content with `container-main` (max-width: 1440px, centered) | All 8 sections + Nav |
| **`SectionHeading`** | Heading with optional coral-red `<span>` highlight | PopularProducts, SuperQuality, SpecialOffer, CustomerReviews, Subscribe |
| **`StarRating`** | Star icon + rating number display | PopularProductCard, ReviewCard |
| **`PageSection`** | Section wrapper with padding for page layout | page.tsx (8x via `.map()`) |
| **`Button`** | Styled button with optional icon | Hero, SpecialOffer, Subscribe |

## Single Source of Truth (SSOT)

All shared values are centralized in one place:

- **Container width**: `--container-max-width: 1440px` in `globals.css` (referenced by `container-main` utility and `--breakpoint-wide` theme value)
- **Text content**: All copy text in `constants/index.ts` (organized per section: `heroContent`, `superQualityContent`, etc.)
- **Data**: Products, services, reviews, footer links, social media links in `constants/index.ts`
- **Section layout**: `sectionConfig` array in `page.tsx` drives the page structure

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Lint & format
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Features

- Responsive design (mobile-first with Tailwind breakpoints)
- Interactive shoe gallery in Hero section
- Customer reviews with ratings
- Newsletter subscription form
- Product showcase grid
- Footer with links and social media

## Commit Convention

This project uses [conventional commits](https://www.conventionalcommits.org/):

- `feat:` — New feature
- `fix:` — Bug fix
- `refactor:` — Code restructuring
- `chore:` — Tooling, dependencies, configuration
