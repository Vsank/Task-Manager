# MIRAGE — Maison Sable

A high-quality, scroll-based animated landing page for a fictional luxury
perfume, **MIRAGE by Maison Sable**. Built with **React + Vite** and
**Framer Motion**, designed around the product film of a perfume bottle
rising from the sand.

## Highlights

- **Cinematic hero** — full-bleed product video with scroll-driven parallax
  and a gradient wordmark.
- **Scroll-scrubbed reveal** — a pinned, sticky video whose playback is
  scrubbed frame-by-frame by the scroll position, with captions that cross-fade
  through the fragrance's three movements (opening → heart → drydown).
- **Fragrance notes** — the scent pyramid (top / heart / base) with staggered
  reveal-on-scroll cards.
- **Craft story** — a split layout with parallax video, an ingredient glow, and
  animated stats.
- **The ritual** — how to wear the fragrance, in three steps.
- **Acquire CTA** — pricing, purchase actions, and a full footer with newsletter
  signup.

## Design

- Palette: desert ink, amber, gold and warm sand.
- Type: *Cormorant Garamond* (display) + *Jost* (interface).
- Fully responsive (desktop → mobile) and honours `prefers-reduced-motion`.
- A warm gradient sits behind every video so the page degrades gracefully while
  the media loads or on browsers without H.264.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Structure

```
public/media/perfume-hero.mp4   # the product film (H.264/AAC)
src/
  components/                   # Navbar, Hero, ScrollReveal, Notes,
                                # Craft, Ritual, CTA, Footer
  styles/                       # global.css + components.css
  App.jsx, main.jsx
```
