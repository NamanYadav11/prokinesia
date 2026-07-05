# Prokinesia Healthcare — Claude Code Context

## Stack
- **React 18** + **TypeScript 4.9** (strict mode)
- **React Router v6** — all pages wired via `<Routes>` in `src/App.tsx`
- **Lucide React** for icons
- **No CSS framework** — pure CSS custom properties in `src/index.css`
- **Create React App** (`react-scripts 5`) — use `npm start` / `npm run build`
- **No Prettier / no external linter** — CRA's built-in ESLint (`react-app` preset)

## Project Layout
```
src/
  api/          ← API service layer (client.ts, blogs.ts, appointment.ts, contact.ts)
  components/   ← Navbar.tsx, Footer.tsx
  data/         ← siteData.ts  ← SINGLE SOURCE OF TRUTH for all content
  pages/        ← one file per route
  index.tsx     ← entry point
  index.css     ← all CSS variables + global styles
```

## API
Base URL: `https://prokinesia.in/api`  
Endpoints wired: `GET /blog`, `POST /appointment`, `POST /contact`  
Client: `src/api/client.ts` — throws `ApiError` on non-2xx, blogs fallback to static data.

## Design Tokens (src/index.css)
| Variable | Value | Role |
|---|---|---|
| `--teal` | `#0B4F4A` | Primary brand |
| `--sage` | `#6BAE97` | Accent / labels |
| `--coral` | `#E8604C` | CTA buttons |
| `--warm-white` | `#F7F5F0` | Section backgrounds |
| `--charcoal` | `#1A1A1A` | Body text |

## Pages & Routes
| Route | File |
|---|---|
| `/` | `pages/HomePage.tsx` |
| `/about` | `pages/AboutPage.tsx` |
| `/services` | `pages/ServicesPage.tsx` |
| `/services/:id` | `pages/ServiceDetailPage.tsx` |
| `/team` | `pages/TeamPage.tsx` |
| `/blogs` | `pages/BlogsPage.tsx` |
| `/appointment` | `pages/AppointmentPage.tsx` |
| `/contact` | `pages/ContactPage.tsx` |
| `/academy` | `pages/AcademyPage.tsx` |

## Key Decisions Made
- Navbar dropdowns use a 150ms close-delay (`closeTimer` ref) to bridge the hover gap
- Blog images fall back to a styled placeholder on `onError`
- Blog page fetches live from API, falls back to `BLOG_POSTS` static data on failure
- Appointment / Contact forms have loading / success / error states — no `alert()`

## Rules Applied
- ECC `common/` + `web/` + `typescript/` + `react/` rule sets
- Immutability: always spread, never mutate
- No comments unless WHY is non-obvious
- Functions < 50 lines, files < 800 lines
- Validate at system boundaries only

## Commands
```bash
npm start        # dev server → http://localhost:3000
npm run build    # production build
npm test         # CRA Jest
npx tsc --noEmit # type-check only
```
