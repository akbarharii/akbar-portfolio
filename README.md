# Akbar Hari Mukti — Product Designer & UI/UX Specialist Portfolio

A modern, high-performance product design portfolio featuring deep case studies, lightweight GPU-accelerated CSS atmosphere, frosted glass aesthetics, interactive research personas, and responsive design.

## Features & Highlights

- **Dedicated Case Study Detail Engine (`project-detail.html`)**:
  - Implements an in-depth 7-part storytelling framework:
    1. **Brand Hero & Value Proposition Tagline**.
    2. **Project Metadata Grid**: Schedule, Platform, Role, Tools, and Deliverables.
    3. **Strategic Business & Owner Goals**: Clear measurable objectives.
    4. **In-Depth User & Audience Personas**: Detailed behavioral matrices (Demographics, Needs & Goals, Challenges, Expectations, Preferences).
    5. **Design Artifacts & Solutions**: Numbered showcases for Core High-Fidelity UI, System Architecture, and Design System Guidelines with interactive color swatches and typography pairings.
    6. **Measurable Business Outcomes**: KPI metrics and verified project completion sign-offs.
    7. **Project Logbook Navigation**: Seamlessly navigate to other case studies in the archive.
  - Interactive fullscreen lightbox zoom for all high-resolution artboards.
- **Performance & Core Web Vitals (CWV) Optimization**:
  - Web-optimized 600×600 hero avatar (66 KB) and 64×64 favicon (7 KB), replacing the legacy uncompressed 1.6 MB image.
  - Zero render-blocking `@import` statements in CSS; fonts preconnected via `<link>` in HTML `<head>`.
  - Streamlined icon delivery via Phosphor WebFont CSS without redundant runtime JS overhead.
  - Lightweight GPU-accelerated atmospheric background transforms keeping mobile battery consumption minimal.
- **Visual Design**:
  - Pure Obsidian Dark theme (`#020202`) with Royal Indigo (`#1E05C1`) and Hyper Orange (`#F54F1B`) accents.
  - Frosted glassmorphism (`backdrop-filter: blur(20px)`) across cards, toolbars, and buttons.
  - Modern, crisp border radii (3px to 10px).
  - Typography: Bricolage Grotesque, JetBrains Mono, and Poppins.
- **Content & Experience**:
  - 7 comprehensive case studies covering fintech, IoT telemetry, mobility transit, proptech, and edtech.
  - Interactive 5-step design process stepper.
  - Extended capabilities accordion (Product Management, User Interviews & Research, Web Development & WordPress, UI/UX Training).
  - Infinite 3-row toolkit marquee.
  - Creator & social content section with links to Instagram, TikTok, and digital products ([Lynk.id](https://lynk.id/akbarhari)).
  - Accessible mobile quick contact popup modal with keyboard focus trap.
- **Production-Ready SEO**:
  - Canonical URL: `https://akbarhari.vercel.app/`
  - Open Graph, Twitter Cards, and Schema.org JSON-LD structured data.
  - Google Site Verification meta tag included.
  - `sitemap.xml` and `robots.txt` ready for Google Search Console.

## Project Structure

```
akbar-portfolio/
├── index.html              # Homepage with Hero, Process, Works, Toolkit, Social & Contact
├── project-detail.html     # In-depth Case Study page (dynamically loads via ?id=project-X)
├── sitemap.xml             # XML Sitemap for search engines
├── robots.txt              # Search engine crawler directives
├── .gitignore              # Ignores .DS_Store and system temp files
├── css/
│   └── style.css           # Glassmorphism, layout grid, case study layout & theme variables
├── js/
│   ├── projects-data.js    # Master project database (Personas, Showcases, Swatches, Metrics)
│   └── main.js             # Filter, modal preview, process stepper, toast & lightbox logic
└── assets/
    ├── images/             # Extracted high-resolution mockups & artboards
    ├── thumbs/             # Web-optimized thumbnails, hero avatar (66KB), favicon (7KB)
    └── pdf/
        └── akbar_hari_portfolio_2026.pdf # Downloadable PDF presentation
```

## How to Preview

Open `index.html` or `project-detail.html` directly in your browser:
```bash
open index.html
```

Or start a local development server:
```bash
python3 -m http.server 8080
```
Then navigate to:
- Homepage: `http://localhost:8080`
- Case Study: `http://localhost:8080/project-detail.html?id=project-7` (Harisenin) or `?id=project-1` (PT AICC)
