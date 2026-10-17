# Akbar Hari Mukti — Product Designer & UI/UX Specialist Portfolio

A modern, high-performance product design portfolio featuring an interactive Three.js 3D Studio & Dynamic Fluid Canvas background, frosted glass aesthetics, case studies, and responsive design.

## Features & Highlights
- **Interactive Three.js 3D Studio & Fluid Background (`js/background.js`)**:
  - Dynamic GLSL fluid/liquid shader running at silky 60 FPS.
  - Multi-octave domain-warped noise with mouse swirl and cursor velocity tracking.
  - Interactive click/tap shockwave ripple waves with physics dispersion.
  - Floating 3D glassmorphic geometries: Torus Knot, Icosahedron, Octahedron, and Orbitals with real glass refraction and magnetic parallax.
  - Scroll-based 3D camera travel and depth parallax.
  - **100% Dynamic CSS Color Extraction**: Zero hardcoded hex values in Three.js; colors are dynamically parsed from CSS root variables (`--bg-main`, `--accent-blue`, `--accent-orange`, etc.) with `MutationObserver` real-time theme adaptation.
- **Visual Design**:
  - Pure Obsidian Dark theme (`#020202`) with Royal Indigo (`#1E05C1`) and Hyper Orange (`#F54F1B`) accents.
  - Frosted glassmorphism (`backdrop-filter: blur(20px)`) across cards, toolbars, and buttons.
  - Modern, crisp border radii (3px to 10px).
  - Free Phosphor Icons (`@phosphor-icons/web`) standardized across all UI elements.
- **Content & Experience**:
  - 100% standardized English copy.
  - 7 detailed interactive case study modal walkthroughs with tabbed showcases.
  - Interactive 5-step design process stepper.
  - Extended capabilities: Product Management, User Interviews & Research, Web Development & WordPress, UI/UX Training.
  - Discrete digital product link (`https://lynk.id/akbarhari`).
  - Mobile-friendly quick contact popup modal and responsive drawer navigation.
- **Production-Ready SEO**:
  - Canonical URL: `https://akbarhari.vercel.app/`
  - Open Graph, Twitter Cards, and Schema.org JSON-LD structured data.
  - Google Site Verification meta tag included.
  - `sitemap.xml` and `robots.txt` ready for Google Search Console.

## Project Structure
```
akbar-portfolio/
├── index.html              # Main HTML markup with SEO metadata & #bg-canvas
├── sitemap.xml             # XML Sitemap for search engines
├── robots.txt              # Search engine crawler directives
├── css/
│   └── style.css           # Glassmorphism, layout grid, typography & theme variables
├── js/
│   ├── background.js       # Three.js 3D Studio & Dynamic Fluid Canvas engine
│   └── main.js             # Filter, modal, process stepper & lightbox logic
└── assets/
    ├── images/             # Extracted high-resolution mockups & diagrams
    ├── thumbs/             # Web-optimized thumbnails for fast loading
    └── pdf/
        └── akbar_hari_portfolio_2026.pdf # Downloadable PDF presentation
```

## How to Preview
Open `index.html` directly in your browser:
```bash
open index.html
```
Or start a local development server:
```bash
python3 -m http.server 8080
```
Then navigate to `http://localhost:8080`.
