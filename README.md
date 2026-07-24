# MIRAGE — Maison Sable

A high-quality, scroll-based animated landing page for a fictional luxury
perfume, **MIRAGE by Maison Sable**. Built with **React + Vite** and
**Framer Motion**, designed around the product film of a perfume bottle
rising from the sand.

## Highlights

- **Cinematic hero** — the product film shown full and uncropped in a 16:9
  frame with a gradient wordmark and scroll parallax.
- **Press strip** — an auto-scrolling "as featured in" marquee.
- **Scroll-scrubbed reveal** — a pinned, sticky video whose playback is
  scrubbed frame-by-frame by the scroll position, with captions that cross-fade
  through the fragrance's three movements (opening → heart → drydown).
- **Fragrance notes** — the scent pyramid (top / heart / base) with staggered
  reveal-on-scroll cards.
- **Craft story** — a split layout with parallax video, an ingredient glow, and
  animated stats.
- **The ritual** — how to wear the fragrance, in three steps.
- **The Collection** — six shoppable products (four fragrances, a discovery set
  and a candle) rendered as crisp SVG flacons, each with notes, rating, price,
  and add-to-bag.
- **Product spotlight** — an interactive MIRAGE "product page" with size
  selection, gift-wrap upsell, live total, and purchase action.
- **Reviews** — aggregate rating stats and verified customer testimonials.
- **Working cart** — a lightweight bag with a live count in the nav and an
  "added to bag" toast, driven by a small React context.
- **Acquire CTA** and a full footer with newsletter signup.

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
