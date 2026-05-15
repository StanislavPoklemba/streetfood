# European Street Food Festival — Redesign

A modern redesign of [streetfood-festival.eu](https://www.streetfood-festival.eu/),
built with **React 18 + Vite**. Dark night-market aesthetic, warm flame
gradients, glassmorphism cards, scroll-triggered reveal animations,
counter-animated stats, and a live-filterable 2026 tour schedule that
automatically grays out past dates against today's date.

## Stack

- React 18 (functional components + hooks)
- Vite 5 (dev server + build)
- No UI libraries, no icon packs — all icons are hand-rolled inline SVG
- Google Fonts: Playfair Display (headings), Inter (body)
- Unsplash for imagery (lazy-loaded)

## Run locally

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Build

```bash
npm run build      # outputs static site to /dist
npm run preview    # preview the production build
```

## Structure

```
src/
├── main.jsx                   # React entry point
├── App.jsx                    # Top-level layout
├── styles/global.css          # Design system + all component styles
├── data/tourDates.js          # 2026 tour schedule
├── hooks/useReveal.js         # IntersectionObserver scroll-reveal + counter helper
└── components/
    ├── Icon.jsx               # Inline SVG icon library
    ├── Navbar.jsx             # Sticky nav with mobile hamburger
    ├── Hero.jsx               # Full-viewport hero
    ├── Stats.jsx              # Animated counters
    ├── About.jsx              # Two-column story section
    ├── FoodCategories.jsx     # 6 glassmorphism cuisine cards
    ├── Experience.jsx         # 3 feature blocks
    ├── TourDates.jsx          # Searchable / filterable 2026 dates
    ├── Gallery.jsx            # Masonry photo grid
    ├── ExhibitorCTA.jsx       # Flame-gradient CTA card
    └── Footer.jsx             # Footer + social links
```

## Design notes

- **No emoji.** The audience skews 30+ and the brand should read serious;
  every icon on the site is a custom inline SVG (`src/components/Icon.jsx`).
- **Past dates** are detected at render time by comparing each event's `end`
  date with `new Date()` truncated to midnight, then visually de-emphasised
  with reduced opacity and a grayscale filter.
- **Search** matches city, region, and venue substrings live as you type;
  combine with the "Upcoming" filter pill to narrow further.
- **Reveal animations** are wired through a single `useReveal()` hook that
  attaches one `IntersectionObserver` to every `.reveal` element on mount.
- **Reduced-motion** users get an animation-free experience automatically.

## Contact (organiser)

Stage Culinarium Catering GmbH · Sandteneck 9 · A-4820 Bad Ischl, Austria
[office@stage-culinarium.at](mailto:office@stage-culinarium.at)
