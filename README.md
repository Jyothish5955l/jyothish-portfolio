# Jyothish Goud — Developer Portfolio

A modern, premium, dark-themed personal developer portfolio built with **React + Vite**.
Single page, fully responsive, with subtle scroll and hover animations.

---

## Tech stack

| Layer | Choice |
| --- | --- |
| Build tool | Vite |
| UI | React (JavaScript / JSX) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Animation | Motion (Framer Motion) |
| Icons | lucide-react |
| Fonts | Inter, Space Grotesk, JetBrains Mono (Google Fonts) |

No router, no state library, no UI kit — the whole thing is hand-built components and stays fast.

---

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start the dev server (http://localhost:5173)
npm run build   # production build into /dist
npm run preview # preview the production build locally
```

---

## Customising your content

**Everything you'll want to change lives in one file: [`src/data/portfolio.js`](src/data/portfolio.js).**
No component edits required.

### First things to update

1. **Email** — `profile.email` is currently a **placeholder** (`jyothish.goud@example.com`). Change it to your real address.
2. **Resume** — `public/resume.pdf` is a placeholder. Replace it with your real CV (keep the same filename, or update `profile.resumeUrl`).
3. **LinkedIn** — set `profile.linkedin` to your profile URL and the icon appears automatically (leave empty to hide it).
4. **Project details** — the project descriptions and tech tags in `projects` are starting points. Update them to match your actual repos. Leave `github: ""` to show the **Coming soon** state.
5. **Social preview image** — add `public/og-image.png` (1200×630) for nice link previews.
6. **Canonical URL** — update the `canonical`, `og:url` values in `index.html` after deploying.

### Re-theming

All colours, fonts and radius live in the `@theme` block at the top of [`src/index.css`](src/index.css).
Change `--color-accent` and `--color-accent-2` to instantly re-skin the gradient across the whole site.

---

## Project structure

```
personal-portfolio/
├── index.html                 # SEO meta, fonts, root element
├── vite.config.js
├── public/
│   ├── favicon.svg
│   └── resume.pdf             # ⚠️ placeholder — replace with your CV
└── src/
    ├── main.jsx
    ├── App.jsx                # composes all sections
    ├── index.css              # Tailwind import + theme tokens + helpers
    ├── data/
    │   └── portfolio.js       # 👈 all site content
    ├── hooks/
    │   └── useActiveSection.js
    └── components/
        ├── layout/            # Navbar, Footer
        ├── sections/          # Hero, About, Skills, Projects, Contact
        └── ui/                # Aurora, Reveal, Section, Button, SkillBadge, ProjectCard
```

---

## Deployment

The build output in `/dist` is fully static — host it anywhere.

- **Vercel**: import the repo → framework preset **Vite** → deploy.
- **Netlify**: build command `npm run build`, publish directory `dist`.
- **GitHub Pages**: run `npm run build` and publish `dist` (set `base: "/<repo-name>/"` in `vite.config.js` if hosting under a subpath).

---

## Accessibility & performance notes

- Semantic landmarks, focus-visible rings and `aria-label`s on icon-only controls.
- All animations respect `prefers-reduced-motion`.
- Local icon fonts-free rendering; fonts loaded with `display=swap`.
