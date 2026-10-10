# Akbar Hari M — Portfolio Website

A clean, modern, and responsive UI/UX specialist portfolio website crafted based on the 40-page PDF presentation.

## Tech Stack
- **HTML5**: Semantic, accessible markup.
- **CSS3**: Pure modern CSS with responsive variables, Grid, Flexbox, micro-interactions.
- **JavaScript (ES6+)**: Vanilla JS for project filtering, interactive 5-step design process stepper, case study modal drawer, and image lightbox.
- **Typography**: Google Font [Bricolage Grotesque](https://fonts.google.com/specimen/Bricolage+Grotesque) with [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) for metadata tags.
- **Theme**: Deep obsidian dark mode (`#020202`) with neo-brutalist / Bauhaus geometric accents inspired by the PDF presentation.

## Project Structure
```
akbar-portfolio/
├── index.html              # Main webpage
├── css/
│   └── style.css           # Complete styling & responsive breakpoints
├── js/
│   └── main.js             # Filter, modal, process stepper & lightbox logic
└── assets/
    ├── images/             # Extracted high-resolution mockups & diagrams
    │   ├── akbar_avatar.png
    │   └── page_1.png ... page_40.png
    ├── thumbs/             # Web-optimized thumbnails for high-performance loading
    └── pdf/
        └── akbar_hari_portfolio_2026.pdf # Full downloadable original PDF presentation
```

## Included Case Studies (7 Projects)
1. **PT AICC (Asian Isuzu Casting Centre)** — Corporate Website & Product Showcase (Enterprise Web)
2. **Rumahbaru.co** — Property Marketplace & Agent Connect App (Mobile PropTech)
3. **Obsidian Gym** — Premium Gym Management & Trainer Booking App (Mobile Fitness)
4. **LRT Jakarta** — Smart Ticketing & Real-Time Timetable Transit App (Mobile Smart Transit)
5. **Trackpedia (PT Linkra)** — IoT Global Maritime Fleet & Asset Tracking (IoT SaaS)
6. **YKK AP Web Scales (Linkra)** — Digital Industrial Weighing System (Industrial Enterprise SaaS)
7. **Harisenin.com** — Video Learning Experience & Curriculum Player (EdTech Web)

## How to Run / Preview
Buka file `index.html` langsung di browser:
```bash
open /Users/mymac/.gemini/antigravity/scratch/akbar-portfolio/index.html
```
Atau jalankan server lokal:
```bash
cd /Users/mymac/.gemini/antigravity/scratch/akbar-portfolio
python3 -m http.server 8080
```
Lalu akses `http://localhost:8080` di browser.
