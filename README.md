# Ratiloe Mbonani — Portfolio

A React + Vite portfolio site with a cream & rich-pink palette, a typing-title
hero built with a fake terminal, and scroll-reveal animations throughout.

## Folder structure

```
ratiloe-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx            # entry point, wraps App in BrowserRouter
    ├── App.jsx              # route definitions
    ├── index.css            # colors, fonts, all animations/keyframes
    ├── components/
    │   ├── Navbar.jsx        # top nav, active link highlight, mobile menu
    │   ├── Footer.jsx
    │   └── Reveal.jsx        # wrapper that fades/slides content in on scroll
    ├── hooks/
    │   ├── useReveal.js      # IntersectionObserver hook powering Reveal
    │   └── useTypewriter.js  # typing/deleting title animation hook
    ├── pages/
    │   ├── Home.jsx          # hero + typing terminal
    │   ├── About.jsx
    │   ├── Projects.jsx
    │   ├── Skills.jsx        # animated skill bars
    │   └── Contact.jsx       # contact form + socials
    └── data/
        ├── projects.js       # edit this to add/remove projects
        └── skills.js         # edit this to update skill bars & tools
```

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Things to personalize

1. **Photo** — in `src/pages/About.jsx`, replace the `RM` initials block with
   `<img src="/your-photo.jpg" alt="Ratiloe Mbonani" />` (put the image in a
   `public/` folder at the project root).
2. **Projects** — edit `src/data/projects.js`.
3. **Skills** — edit `src/data/skills.js`.
4. **Contact info & socials** — edit the links and email in
   `src/pages/Contact.jsx`.
5. **Contact form** — the form currently just shows a "Sent" confirmation.
   Wire it to a service like Formspree or EmailJS, or your own backend, inside
   `handleSubmit` in `src/pages/Contact.jsx`.

## Design notes

- **Palette**: cream (`#FAF3E9`) base, rich magenta-pink (`#C81457`) as the
  primary accent, sunset orange/gold as secondary accents — all defined as
  CSS variables at the top of `src/index.css`.
- **Type**: Fraunces (display serif), Space Mono (labels/eyebrows, a nod to
  code), Work Sans (body).
- **Animations**: typewriter loop in the hero terminal, scroll-triggered
  reveals on every section (via `Reveal`/`useReveal`), and animated skill
  bars that fill in once scrolled into view.
