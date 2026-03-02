This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server (Vite, proxies /api to localhost:5000)
npm run build        # Production build (sets base to /littlehavennursery/)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
npm run format       # Prettier format src/**
npm run deploy       # Build + deploy to GitHub Pages (gh-pages -d dist)
```

## Architecture

**Stack:** React 18 + Vite + Tailwind CSS + Framer Motion, deployed to GitHub Pages at `https://peterkey.github.io/littlehavennursery`.

**GitHub Pages routing:** The app uses `basename="/littlehavennursery"` in production (set dynamically via `import.meta.env.PROD` in `App.jsx`). All internal navigation must use React Router's `<Link to="...">` — never plain `<a href="...">` for internal routes, or the basename won't be applied.

**Route structure (`src/components/Routes/AnimatedRoutes.jsx`):** Home and 404 are eagerly loaded; all other routes are lazy-loaded with `React.lazy()` + `<Suspense>`. Route transitions use Framer Motion's `<AnimatePresence mode="wait">`.

**Layout (`src/components/Layout/Layout.jsx`):** Wraps every page with `<Navbar>`, `<Footer>`, `<StickyContactButton>`, `<ScrollToTop>`, `<AccessibleSkipLink>`, and `<ErrorBoundary>`. SEO metadata is injected here via the `<SEO>` component using `react-helmet-async`.

**SEO system (`src/components/SEO/`):** The `SEO` component accepts `title`, `description`, `keywords`, `canonicalUrl`, `structuredData`, `localBusiness`, `faqs`, and `breadcrumbs` props. Schema components (`LocalBusinessSchema`, `FAQSchema`, `BreadcrumbSchema`) live in `src/components/SEO/schemas/`. Pages export a `metadata` object used upstream for structured data.

**Design system (Tailwind):** Custom color palettes are `brand`, `primary` (baby blue), `teal`, `lavender`, `mint`, and `neutral`. Custom shadow utilities: `shadow-soft`, `shadow-medium`, `shadow-strong`. Custom border radii: `rounded-lg2`, `rounded-md2`. Fonts: `font-sans` (Nunito — warm rounded sans for body text), `font-display` (Fraunces — warm optical-size variable serif for headings & display; uses `font-optical-sizing: auto`). Custom letter-spacing adds `tracking-snug` (-0.005em) and `tracking-widest` (0.08em).

**Component conventions:**
- Shared UI primitives in `src/components/Common/` — includes `SEOImage`, `SEOHeading`, `SEOLink` (SEO-aware wrappers), `CookieConsent`, `ErrorBoundary`, `StickyContactButton`, and `CallToAction`.
- Page-specific components live under `src/components/HomeComps/`, `src/components/AboutComps/`, etc.
- View-level pages in `src/views/` — top-level pages are flat files; the About sub-section pages are in `src/views/About/<SubSection>/`.
- Nursery location pages: `src/components/Nurseries/` (Rhydlafar, Pentyrch, Radyr).
- Components use `memo()` and set `displayName` for React DevTools.

**Hooks (`src/hooks/useMediaQuery.js`):** `usePrefersReducedMotion()`, `useResponsive()`, `useColorScheme()` — used throughout to conditionally disable animations and adapt layouts.

**Performance utilities (`src/utils/performance.js`):** `optimizeImage()`, `preloadResource()`, `lazyLoad()` (IntersectionObserver-based).

**Build chunking:** Vendor bundle (`react`, `react-dom`, `react-router-dom`), animations (`framer-motion`), UI (`react-icons`, `swiper`) — configured in `vite.config.js` `manualChunks`.

**Contact/forms:** Uses `@formspree/react` for the contact form and `resend` for email. The `server/server.js` file is a minimal Express snippet for serving the sitemap — it is not a running backend.

**Deployment:** `npm run deploy` builds and pushes to the `gh-pages` branch via the `gh-pages` package.

## Brand Identity & Educational Philosophy

**Mission:** Little Haven Nursery provides child-centered care based on Froebelian principles and the Curiosity Approach to learning.

**Core Values & Messaging:**
1. **Childhood is special** — Not just preparation for adulthood, but a valuable standalone phase
2. **Relationships matter** — Focus on connections with family, community, peers, nature, and culture
3. **Every child is unique** — Individualized, self-directed learning over one-size-fits-all approaches
4. **Holistic development** — Beyond academics: physical, emotional, social, speech & language
5. **Play-based learning** — Slogan: "learning to play, playing to learn"
6. **Safety & partnership** — Safe, secure, intellectually stimulating environment; close parent-practitioner collaboration

**Educational Approach:**
- **Froebelian principles:** Child-led discovery, hands-on learning, play as the foundation
- **Curiosity Approach:** Natural materials, open-ended play, authentic experiences
- Self-directed activities encouraged; children make choices to build self-discipline and confidence
- Practitioners facilitate rather than dictate; lots of discussion and explanation during play
- Activities carefully planned but flexibly executed based on children's interests

**Tone of Voice:**
- Warm, professional, and reassuring
- Parent-focused: speak to what parents value and worry about
- Educational without being academic/jargon-heavy
- Community-oriented: "we work with you" rather than "we teach your child"
- Avoid corporate/sales language; prioritize authenticity and trust

**Key Terminology:**
- Use "practitioners" not "teachers" or "staff"
- Use "children" not "kids" or "students"
- "Childcare" encompasses education, care, and development (not babysitting, not just teaching)
- "Holistic development" covers all aspects: learning, physical, emotional, social, speech & language

**Content Guidelines:**
- Always tie features back to child benefits and parent peace-of-mind
- Balance educational philosophy with practical information
- Showcase the "why" behind practices, not just the "what"
- Emphasize partnership with parents throughout
- Highlight individuality and personalization over standardized outcomes

## Working with Claude Code

When making updates:
- Maintain the warm, parent-focused tone throughout all copy
- Ensure new content aligns with Froebelian/Curiosity Approach philosophy
- Use the established terminology consistently (practitioners, children, holistic development)
- Keep accessibility in mind (semantic HTML, ARIA labels, keyboard navigation)
- Test responsive behavior across breakpoints
- Verify all internal links use React Router `<Link>` components
- Run `npm run lint:fix` before committing
- Test locally with `npm run preview` before deploying