# Muhammad Hafiz — Portfolio

A personal portfolio site built with React 19, Vite, Tailwind CSS v4, and Framer Motion.

## Run it locally

```bash
npm install
```

```bash
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # serves the production build locally so you can check it
```

The production build outputs to `dist/` — that folder is what you deploy (Vercel, Netlify, GitHub Pages, Render static site, etc. all work with zero config for a Vite app).

## Before you deploy — a few things to finish

1. **Resume** — the "Resume" button in the hero links to `/resume.pdf`. Drop your actual resume PDF into `public/resume.pdf` (same filename) and it'll work as-is.
2. **Contact form** — it currently opens the visitor's email client with a pre-filled message (`mailto:`), so nothing needs a backend. If you'd rather collect submissions properly, swap the `handleSubmit` in `src/components/Contact.jsx` for a service like Formspree, EmailJS, or a small serverless function.
3. **LinkedIn** — not included since I didn't have your profile URL. To add it: add a `linkedin` field to `PROFILE` in `src/data/content.js`, then add a link in `Contact.jsx` (and optionally `Footer.jsx`) using the same pattern as the GitHub link.
4. **GitHub stats section** — uses live embeds from `github-readme-stats.vercel.app` keyed to your username. They'll populate automatically from your public GitHub activity, no setup needed — just note that third-party service occasionally has downtime.

## Project structure

```
src/
  data/content.js        — all copy: profile info, skills, projects, timeline, certifications
  hooks/useTypewriter.js — drives the hero terminal's typing animation
  components/
    Hero/Hero.jsx         — hero section (name, tagline, CTAs)
    Hero/Terminal.jsx     — the animated terminal window
    Nav.jsx, Footer.jsx
    About.jsx, Skills.jsx, Projects.jsx, ProjectCard.jsx
    Journey.jsx           — timeline
    Certifications.jsx
    GithubStats.jsx
    WhyHireMe.jsx
    Contact.jsx
    Reveal.jsx             — shared scroll-in-view animation wrapper
    SectionHeader.jsx      — shared section heading
    icons/GithubMark.jsx   — inline GitHub icon (not bundled in current lucide-react)
```

## Editing content

Almost everything text-based lives in `src/data/content.js` — project descriptions, skills, certifications, and the timeline are all there as plain data, so you can update wording or add a new project without touching component code.

## Design system

Defined as Tailwind v4 theme tokens in `src/index.css`:

- **Palette** — deep slate/near-black (`--color-canvas`, `--color-surface`) with a single restrained brass/amber accent (`--color-accent`) used sparingly, plus a muted sage-green reserved for the terminal cursor and a couple of small accents.
- **Type** — Space Grotesk for headings, IBM Plex Sans for body text, IBM Plex Mono for the terminal and code tags.
- Respects `prefers-reduced-motion` throughout (the typewriter effect renders instantly, scroll animations are disabled).

## Notes

- Node 18+ recommended.
- No environment variables or API keys required — everything runs client-side.
