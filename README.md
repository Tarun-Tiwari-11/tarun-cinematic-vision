# Morphyx Lab – Video Editor Portfolio

Professional video editor portfolio site. Built with **React** and **Vite**.

## Project structure

```
morphyx_lab/
├── index.html              # Entry HTML
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # Main app + sections
│   ├── index.css            # Global styles
│   └── components/
│       ├── Navbar.jsx       # Fixed top navigation
│       ├── HeroSection.jsx  # Hero + CTA
│       ├── AboutSection.jsx # Bio, skills, tools
│       ├── WorkSection.jsx  # Reel + project grid
│       ├── ServicesSection.jsx # What you offer
│       └── ContactSection.jsx  # Email + social links
└── public/                 # Static assets (fonts, images, videos)
```

## Sections

1. **Hero** – Headline, short tagline, “View Reel” / “Get in Touch”
2. **About** – Your story, tools, skills/specialties
3. **Work** – Main showreel embed + project cards (with video thumbnails)
4. **Services** – Editing, color grading, motion graphics, reels, etc.
5. **Contact** – Email and social (LinkedIn, Vimeo, Instagram)

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

---

Next step: answer the design questions so we can style and refine the site to match your vision.
