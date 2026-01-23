# Morphyx Lab Portfolio

A production-grade single-page scroll portfolio website built with React, Vite, Tailwind CSS, Framer Motion, and Lenis.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling

## Architecture

- Single-page scroll website (no routing)
- Each section is exactly 100vh
- Section containers never resize based on content
- Content lives inside controlled layout containers
- Overflow is handled safely

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── App.jsx          # Main app component with section placeholders
  ├── main.jsx         # Entry point with Lenis initialization
  └── index.css        # Global styles with Tailwind directives
```

## Notes

- Lenis is installed and initialized but not yet animated
- Framer Motion is installed and ready to use
- All sections are set up as 100vh containers
- Ready for content and animations to be added
