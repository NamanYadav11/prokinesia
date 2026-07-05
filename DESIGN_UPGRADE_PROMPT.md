# Prokinesia — Design Upgrade Prompt for Claude

## Project Context

You are upgrading the visual design of **Prokinesia Healthcare**, a React 18 + TypeScript website for a physiotherapy clinic based in Gurugram, India. The site uses **pure CSS custom properties** (no Tailwind, no CSS-in-JS), **DM Serif Display** for headings, **Inter** for body text, and **inline styles** throughout all components.

All content is in `src/data/siteData.ts` — do not change content, only design.

### Current Design Tokens (`src/index.css`)
```css
--teal:       #0B4F4A   /* primary brand — dark forest green */
--teal-light: #0E6B63
--teal-pale:  #EAF3F2   /* light tint for backgrounds */
--sage:       #6BAE97   /* accent, labels */
--coral:      #E8604C   /* CTA buttons */
--coral-dark: #C94836
--warm-white: #F7F5F0
--charcoal:   #1A1A1A
--mid:        #4A4A4A
--muted:      #7A7A7A
--border:     #E0DDD7
--font-serif: 'DM Serif Display', Georgia, serif
--font-sans:  'Inter', -apple-system, sans-serif
--radius-sm: 6px  --radius-md: 10px  --radius-lg: 16px  --radius-xl: 24px
--shadow-sm / --shadow-md / --shadow-lg
--nav-height: 72px
--max-width:  1200px
```

### Current State — What Exists
- `src/index.css` — global tokens, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.card`, `.section-label`, `.section-title`, `.fade-up`
- `src/components/Navbar.tsx` — sticky, transparent on hero, Services mega-dropdown (4 columns), mobile hamburger
- `src/components/Footer.tsx` — dark 4-column footer + WhatsApp FAB
- `src/pages/HomePage.tsx` — hero (teal gradient), services preview with category tabs, why-choose-us two-col, 3-phase how-we-work, testimonials carousel with sidebar list
- `src/pages/ServicesPage.tsx` — grid of service cards
- `src/pages/ServiceDetailPage.tsx` — individual service detail
- `src/pages/AboutPage.tsx` — about content
- `src/pages/TeamPage.tsx` — doctor cards
- `src/pages/BlogsPage.tsx` — blog cards, live API fetch with skeleton loader
- `src/pages/AppointmentPage.tsx` — booking form with loading/success/error states
- `src/pages/ContactPage.tsx` — contact info + message form

---

## What to Upgrade

### 1. Design Direction
Move from **functional-clean** to **medical luxury** — premium healthcare aesthetic that conveys trust, expertise, and calm authority. References: Mayo Clinic redesign, Ottobock, Aspetar. Think:
- Generous whitespace with deliberate rhythm, not uniform padding
- Editorial typography with strong scale contrast (display sizes 80–100px on hero)
- Subtle depth through layering: overlapping elements, offset shadows, soft grain texture
- Purposeful motion: fade-ins on scroll, smooth state transitions, no gratuitous animation
- Photography-forward sections where images exist; abstract medical/body-line illustrations where they don't

### 2. Specific Upgrades Required

#### `src/index.css`
- Add CSS variables for:
  - `--gold: #C9A84C` (premium accent for awards/stats)
  - `--surface: #FAFAF8` (warmer off-white for alternating sections)
  - `--teal-dark: #083834` (deeper teal for dramatic headers)
  - `--grain` texture via an SVG filter or `url()` data URI for subtle noise on hero
  - `--shadow-xl: 0 32px 80px rgba(11,79,74,0.18)`
  - Spacing scale: `--space-xs` through `--space-2xl` (4 / 8 / 16 / 24 / 40 / 64 / 96 / 128px)
- Upgrade `.card` — add left border accent on hover (`border-left: 3px solid var(--sage)`)
- Add `.card-glass` — frosted glass card for use on dark backgrounds
- Add `.pill` — small category label chip (replace inline styles currently used for this)
- Add `@keyframes slideIn`, `@keyframes countUp`, `@keyframes shimmer` (for skeleton loader)
- Add utility `.gradient-text` — teal-to-sage gradient on text via `background-clip: text`
- Improve `.btn-primary` — add subtle inner glow on hover, slightly larger padding
- Add `.btn-teal` — solid teal variant for secondary CTAs on light backgrounds

#### `src/components/Navbar.tsx`
- On scroll: add a thin `2px` gradient line at the bottom of the nav (teal-to-sage) instead of the flat border
- Active nav link: add animated underline that slides in, not just color change
- Logo: make the "P" circle slightly larger with a gradient border ring
- Services mega-dropdown: add a featured/highlight card on the left (5th column) showing "Book a Consultation" with the coral CTA — shift service columns to the right 4 columns

#### `src/pages/HomePage.tsx` — Hero Section
- Increase headline size: `clamp(52px, 7vw, 96px)` with tighter line-height `1.02`
- Add a subtle grain/noise texture overlay on the hero gradient (use CSS `filter: url(#grain)` or pseudo-element)
- Replace the SVG skeleton figure with a **floating card cluster** on the right: 3 overlapping glassmorphism cards showing stat numbers, staggered with `translateY` offsets and drop shadows
- Add a horizontal marquee/ticker strip just above the wave divider: scrolling text showing "30,000+ Patients · 13 Years · 75 Clinics · 250 Team Members · Evidence-Based · ..."
- The wave SVG divider: replace the simple wave with an organic asymmetric blob shape that transitions into the white section

#### `src/pages/HomePage.tsx` — Services Section
- Category tabs: upgrade from plain border buttons to pill tabs with active state using a sliding indicator (CSS `position: absolute` underline that transitions with `left` and `width`)
- Service item cards: add a left-side teal accent bar (3px) that appears on hover, icon placeholder on left

#### `src/pages/HomePage.tsx` — Why Choose Us
- Make the feature cards a **bento grid** layout (2 wide + 1 tall on the right, or similar asymmetric arrangement) instead of uniform 2-col grid
- Add icon illustrations to each feature card (use Lucide icons at 28px in a teal-pale circle)
- Stat numbers: animate them counting up when scrolled into view (already done for hero — replicate here with IntersectionObserver)

#### `src/pages/HomePage.tsx` — How We Work
- Replace plain card layout with a **timeline** design on desktop: vertical line down the center, alternating left/right cards with connecting arrows
- Phase circle badges: make them larger (64px), add a pulsing ring animation on the active/hovered phase

#### `src/pages/HomePage.tsx` — Testimonials
- Testimonial quote card: add a large decorative quotation mark that is visible and styled (not just 7% opacity)
- Patient avatar: if no real photo, use a generated gradient avatar with the initial — make it 48px with a gold ring border
- Progress dots: replace with a thin progress bar that auto-advances every 6 seconds

#### `src/pages/ServicesPage.tsx`
- Upgrade service cards to show the `cardImage` as a background with a gradient overlay, title + category overlaid
- On hover: image scales 1.05, overlay darkens slightly, an "Explore →" label slides up from the bottom

#### `src/pages/TeamPage.tsx`
- Doctor cards: full-bleed photo top half, info below — similar to a magazine layout
- Add a hover state that slides up a teal overlay with the doctor's role and consultation fee
- Add subtle `box-shadow` depth differentiation between management and clinical team sections

#### `src/pages/BlogsPage.tsx`
- Hero blog card (first post): full-width featured layout with large image left, text right
- Remaining posts: standard card grid
- Category tag: use the new `.pill` utility class

#### `src/pages/AppointmentPage.tsx`
- Add a left-side panel (30% width) with trust signals: patient count stat, a testimonial excerpt, the doctor photos as overlapping avatars — similar to a "you're in good hands" sidebar
- Form inputs: add floating label animation (label moves up when input is focused/filled)
- Success state: animate the `CheckCircle` icon with a draw-on SVG stroke animation

#### `src/pages/ContactPage.tsx`
- Map placeholder: add a styled placeholder div with the clinic locations shown as pin markers on an abstract grid/map background
- Form: same floating label treatment as Appointment page

### 3. Responsive Rules
- Mobile breakpoint: `768px` — stack all two-col layouts
- Tablet breakpoint: `1024px` — reduce hero font size, collapse bento to standard grid
- Nav: mobile menu should slide in from the right (transform: translateX) instead of appearing instantly
- Hero right panel (stats cluster): hide below 900px (already done — keep this)

### 4. Constraints — Do Not Change
- The design token color palette (teal, sage, coral, warm-white) — only extend it, don't replace
- `DM Serif Display` + `Inter` font pairing
- All data/content — only visual presentation changes
- The API wiring in `src/api/` — do not touch
- The dropdown hover-delay logic in `Navbar.tsx` (`closeTimer` ref) — keep it
- The `BlogImage` fallback component in `BlogsPage.tsx` — keep it
- Form submission logic in Appointment and Contact pages — keep it

### 5. Quality Bar
Every component must pass these checks before the upgrade is complete:
- [ ] No layout shift on hover interactions (use `transform`, not margin/padding changes)
- [ ] All animations use compositor-friendly properties only (`transform`, `opacity`, `filter`)
- [ ] Hero section still renders above the fold on a 1280×800 viewport
- [ ] Mobile nav is fully functional and touch-friendly (min 44px tap targets)
- [ ] No inline magic numbers — all spacing/color references use CSS variables
- [ ] TypeScript compiles with zero errors (`npx tsc --noEmit`)
- [ ] No `console.log` left in any file

### 6. Implementation Order (follow this sequence)
1. `src/index.css` — add new tokens and utilities first
2. `src/components/Navbar.tsx` — nav upgrades
3. `src/pages/HomePage.tsx` — section by section, hero last
4. `src/pages/ServicesPage.tsx`
5. `src/pages/TeamPage.tsx`
6. `src/pages/BlogsPage.tsx`
7. `src/pages/AppointmentPage.tsx`
8. `src/pages/ContactPage.tsx`
9. `src/components/Footer.tsx` — final polish

---

## How to Run & Verify
```bash
npm start          # dev server at http://localhost:3000
npx tsc --noEmit   # type-check — must return 0 errors
```
Check every page route after each file is updated. Do not batch multiple files then check — verify after each one.
