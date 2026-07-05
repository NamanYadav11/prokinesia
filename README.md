# Prokinesia Healthcare — React Website

Full redesign of prokinesia.com built with React + TypeScript + React Router.

## Quick Start

```bash
npm install
npm start
```

Opens at **http://localhost:3000**

## Stack
- React 18 + TypeScript
- React Router v6 (all pages wired)
- Lucide React (icons)
- No CSS framework — pure CSS variables in `src/index.css`
- Google Fonts: DM Serif Display + Inter (loaded in `public/index.html`)

## Design Tokens (src/index.css)
| Variable        | Value     | Use                  |
|-----------------|-----------|----------------------|
| `--teal`        | `#0B4F4A` | Primary brand color  |
| `--sage`        | `#6BAE97` | Accent / labels      |
| `--coral`       | `#E8604C` | CTA buttons          |
| `--warm-white`  | `#F7F5F0` | Section backgrounds  |
| `--charcoal`    | `#1A1A1A` | Body text            |

## Pages
| Route              | Component                      |
|--------------------|-------------------------------|
| `/`                | `pages/HomePage.tsx`          |
| `/about`           | `pages/AboutPage.tsx`         |
| `/services`        | `pages/ServicesPage.tsx`      |
| `/services/:id`    | `pages/ServiceDetailPage.tsx` |
| `/team`            | `pages/TeamPage.tsx`          |
| `/blogs`           | `pages/BlogsPage.tsx`         |
| `/appointment`     | `pages/AppointmentPage.tsx`   |
| `/contact`         | `pages/ContactPage.tsx`       |
| `/academy`         | `pages/AcademyPage.tsx`       |

## Data
All content lives in **`src/data/siteData.ts`** — single source of truth.
Scraped from prokinesia.com + prokinesia.in/api on 2025-06-13. Includes:
- All 21 services with descriptions, benefits, images
- All 8 doctors with roles, photos, consultation fees
- All 7 patient testimonials (clean CMS text)
- About Us: Vision, Mission, founder quote
- Contact: phone, email, 3 locations, WhatsApp, Instagram
- Academy: 7 certifications, Equizen services
- Blog: 1 published post with full content

## Components
- `Navbar.tsx` — Sticky, transparent on home hero, collapses on scroll. Services mega-dropdown (4 category columns). Mobile hamburger.
- `Footer.tsx` — CTA band + 4-column dark footer + WhatsApp FAB.

## To customise
1. **Edit content** → `src/data/siteData.ts`
2. **Change colors** → `:root` in `src/index.css`
3. **Add a page** → create in `src/pages/`, add `<Route>` in `src/App.tsx`
