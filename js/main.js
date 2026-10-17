/**
 * Akbar Hari Mukti - Portfolio Interactivity & Case Study Modal Engine
 * Pure Vanilla JavaScript (Clean, Fast & Lightweight)
 */

document.addEventListener('DOMContentLoaded', () => {
  initProcessStepper();
  initProjectFiltering();
  initSocialFiltering();
  initCaseStudyModal();
  initMobileMenu();
  initEmailCopy();
  initLightbox();
  initScrollAnimations();
});

// ==========================================
// 1. Projects Data (Extracted from 40-page PDF & Updates)
// ==========================================
const projectsData = [
  {
    id: 'project-1',
    num: '01',
    category: 'web',
    categoryLabel: 'Enterprise & Web',
    client: 'PT AICC (Asian Isuzu Casting Centre)',
    title: 'Digital Company Profile & Industrial Catalog',
    role: 'UI/UX Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: 'https://aicc.co.id/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_8.jpg',
    screens: {
      final: 'assets/images/page_8.png',
      arch: 'assets/images/page_9.png',
      cover: 'assets/images/page_5.png'
    },
    snippet: 'Redesigning the online corporate identity and precision casting portfolio for a premier automotive manufacturing company.',
    objective: 'Create a modern, user-friendly digital company profile to showcase PT AICC’s high-precision casting services, automotive components, and values to potential international clients and stakeholders.',
    problem: 'The existing company profile was outdated, text-heavy, and not optimized for digital devices, creating high friction for potential enterprise clients evaluating technical manufacturing capabilities.',
    solution: 'Designed an intuitive, visually credible, and fully responsive corporate website featuring clear product taxonomies, high-contrast engineering imagery, and streamlined stakeholder inquiries.',
    responsibilities: [
      'Conducted user research to understand requirements of international automotive stakeholders and clients.',
      'Designed responsive wireframes and high-fidelity mockups for desktop and mobile views.',
      'Collaborated closely with the marketing team to ensure alignment with PT AICC’s industrial branding.',
      'Created interactive prototypes to demonstrate seamless navigation across casting component catalogs.',
      'Conducted usability testing sessions to gather feedback and refine information architecture.'
    ],
    deliverables: ['Responsive Web Design', 'Product Catalog IA', 'Design System Specs', 'Interactive Prototype']
  },
  {
    id: 'project-2',
    num: '02',
    category: 'mobile',
    categoryLabel: 'Mobile App / PropTech',
    client: 'Rumahbaru.co',
    title: 'Property Marketplace & Agent Connect App',
    role: 'UI/UX Designer',
    year: '2024 - 2025',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_13.jpg',
    screens: {
      final: 'assets/images/page_13.png',
      arch: 'assets/images/page_14.png',
      cover: 'assets/images/page_10.png'
    },
    snippet: 'End-to-end mobile app design enabling seamless browsing, buying, selling, and renting of properties in Indonesia.',
    objective: 'Design a user-friendly mobile and web application that allows users to easily browse, buy, sell, and rent properties while providing a frictionless experience for both buyers and real estate agents.',
    problem: 'Potential homebuyers faced major hurdles in discovering verified property listings, contacting responsive agents, and understanding transaction steps, leading to high drop-offs.',
    solution: 'Engineered an intuitive mobile application with interactive map-based search, verified property badges, instant WhatsApp agent connection, and crystal-clear mortgage & spec breakdowns.',
    responsibilities: [
      'Conducted user research to understand pain points across buyers, sellers, and property brokers.',
      'Designed comprehensive user flows, wireframes, and high-fidelity mobile mockups.',
      'Created interactive prototypes demonstrating rapid search filtering, map panning, and contact actions.',
      'Collaborated with developers and product managers to ensure technical feasibility and business KPI alignment.',
      'Conducted usability testing to validate listings hierarchy and filter UX.'
    ],
    deliverables: ['iOS & Android App Flow', 'Map Search Interface', 'Listing Detail Specs', 'Interactive Prototype']
  },
  {
    id: 'project-3',
    num: '03',
    category: 'mobile',
    categoryLabel: 'Mobile App / Fitness',
    client: 'Obsidian Gym',
    title: 'Premium Gym Management & Schedule App',
    role: 'UI/UX Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_18.jpg',
    screens: {
      final: 'assets/images/page_18.png',
      arch: 'assets/images/page_19.png',
      cover: 'assets/images/page_15.png'
    },
    snippet: 'Sleek dark-aesthetic mobile app for gym membership registration, trainer scheduling, and merchandise store.',
    objective: 'Design a mobile application that allows members to easily register for gym memberships, manage personal workout schedules, book elite personal trainers, and purchase Obsidian merchandise.',
    problem: 'Members faced friction managing gym activities: manual desk registration, difficulty tracking trainer availability, and zero digital access to gym amenities and store merchandise.',
    solution: 'Crafted a dark-themed, high-motivation mobile interface with seamless one-tap trainer schedule booking, digital membership pass, wallet balance, and integrated merchandise shop.',
    responsibilities: [
      'Conducted user interviews with gym members, personal trainers, and front-desk management staff.',
      'Designed user flows, wireframes, and dark-mode high-fidelity mockups reflecting Obsidian’s luxury aesthetic.',
      'Created interactive prototypes demonstrating session booking and calendar integration.',
      'Collaborated with gym management to align the app with brand standards and operational retention goals.',
      'Conducted usability testing to validate checkout flow and session reschedule simplicity.'
    ],
    deliverables: ['Dark-Mode Design System', 'Trainer Booking Flow', 'Membership Wallet UI', 'Interactive Prototype']
  },
  {
    id: 'project-4',
    num: '04',
    category: 'mobile',
    categoryLabel: 'Mobile App / Smart Transit',
    client: 'LRT Jakarta',
    title: 'Ticketing & Real-Time Schedule Transit App',
    role: 'UI/UX Designer',
    year: '2025',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_23.jpg',
    screens: {
      final: 'assets/images/page_23.png',
      arch: 'assets/images/page_24.png',
      cover: 'assets/images/page_20.png'
    },
    snippet: 'Smart transit mobile application streamlining ticketing, live train arrival tracking, and passenger engagement.',
    objective: 'Design a mobile application that allows LRT commuters to purchase QR tickets, view real-time train schedules, consult the CARLA digital assistant, and purchase LRT Jakarta merchandise.',
    problem: 'Commuters suffered from long station ticketing queues during rush hours, lack of real-time departure visibility, and fragmented customer service channels.',
    solution: 'Designed a modern transit app with quick QR code ticketing, live station-to-station fare calculators, timetable tracking, promo banners, and multilingual user settings.',
    responsibilities: [
      'Conducted field research and commuter journey mapping at key LRT Jakarta stations.',
      'Designed user flows, wireframes, and high-fidelity mockups for Android and iOS devices.',
      'Created interactive prototypes for rapid ticket selection, e-wallet payment, and ticket activation.',
      'Collaborated with LRT Jakarta’s management team to align design with transit signage and brand standards.',
      'Conducted usability testing under time-constrained commuter scenarios to optimize one-handed operation.'
    ],
    deliverables: ['Mobile Transit Interface', 'QR Ticket Flow', 'Interactive Route Planner', 'Multilingual UX']
  },
  {
    id: 'project-5',
    num: '05',
    category: 'saas',
    categoryLabel: 'IoT & Telemetry SaaS',
    client: 'PT Linkra Wahana Teknologi',
    title: 'Trackpedia – IoT Global Asset & Vessel Tracking',
    role: 'UI/UX Designer',
    year: '2024 - 2025',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: 'https://trackpedia.linkra.id/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_28.jpg',
    screens: {
      final: 'assets/images/page_28.png',
      arch: 'assets/images/page_29.png',
      cover: 'assets/images/page_25.png'
    },
    snippet: 'Real-time IoT web & mobile platform for monitoring maritime fleet vessels and industrial asset tracking.',
    objective: 'Design a web and mobile application that allows enterprise businesses to track, monitor, and optimize industrial assets and maritime fleets in real-time through IoT telemetry sensors.',
    problem: 'Enterprises struggled with manual and obsolete asset tracking, resulting in misplaced maritime vessels, delayed status reporting, and heavy operational costs.',
    solution: 'Developed an information-dense yet clear map-based dashboard displaying live GPS positions (e.g. AWB Rajawali Natuna), vessel telemetry, route schedules, and multi-sensor tracking filters.',
    responsibilities: [
      'Conducted user research with fleet operations managers and industrial asset supervisors.',
      'Designed comprehensive user flows, wireframes, and high-density map interfaces.',
      'Created interactive prototypes showing real-time vessel tracking, telemetry popovers, and status logs.',
      'Collaborated with IoT developers to ensure interface responsiveness with live streaming sensor data.',
      'Conducted usability testing to ensure rapid data comprehension in high-pressure operational control rooms.'
    ],
    deliverables: ['Global Map Tracking UI', 'Asset Telemetry Panels', 'Fleet Management Flow', 'Figma Design System']
  },
  {
    id: 'project-6',
    num: '06',
    category: 'saas',
    categoryLabel: 'Enterprise SaaS / Industrial',
    client: 'PT Linkra Wahana Teknologi (for YKK AP)',
    title: 'YKK AP Web Scales – Digital Weighing System',
    role: 'UI/UX & Product Designer',
    year: '2024',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: null,
    isLive: false,
    thumb: 'assets/thumbs/thumb_proj_33.jpg',
    screens: {
      final: 'assets/images/page_33.png',
      arch: 'assets/images/page_34.png',
      cover: 'assets/images/page_30.png'
    },
    snippet: 'Streamlined web application digitizing industrial weighing operations and factory telemetry workflows.',
    objective: 'Design a user-centered web application that simplifies complex industrial weighing processes, boosts operator efficiency, and provides stakeholders with transparent real-time weighing data.',
    problem: 'The legacy workflow relied on fragmented manual paperwork and clunky legacy software, causing truck weighbridge bottlenecks, calculation discrepancies, and steep operator learning curves.',
    solution: 'Crafted a streamlined digital weighing dashboard featuring automatic truck identification, tare/gross calculation, status indicator tables, and barcode slip verification.',
    responsibilities: [
      'Conducted on-site industrial workflow mapping to understand weighbridge operator constraints.',
      'Designed user flows, high-density dashboard wireframes, and production-ready mockups.',
      'Created interactive prototypes for rapid weighing ticket generation and vehicle dispatch.',
      'Collaborated with IoT engineers and project managers to guarantee compatibility with hardware scales.',
      'Conducted usability testing with plant operators to minimize keyboard keystrokes and visual fatigue.'
    ],
    deliverables: ['Industrial Weighing Dashboard', 'Workflow State Machine', 'Slip Verification UI', 'Operator Design System']
  },
  {
    id: 'project-7',
    num: '07',
    category: 'edtech',
    categoryLabel: 'EdTech / Video Learning',
    client: 'Harisenin.com',
    title: 'Harisenin.com – Video Learning Experience',
    role: 'UI/UX Designer Intern',
    year: '2023 - 2024',
    tools: ['Figma', 'Google Workspace'],
    liveUrl: 'https://www.harisenin.com/',
    isLive: true,
    thumb: 'assets/thumbs/thumb_proj_38.jpg',
    screens: {
      final: 'assets/images/page_38.png',
      arch: 'assets/images/page_39.png',
      cover: 'assets/images/page_35.png'
    },
    snippet: 'Designing an engaging, distraction-free video learning platform to improve online student completion and accessibility.',
    objective: 'Design an engaging and user-friendly video learning interface that elevates student course completion, simplifies lesson navigation, and communicates educational materials effectively.',
    problem: 'Existing online course interfaces felt disjointed, causing cognitive fatigue, high drop-off rates mid-course, and confusion when switching between video lessons and quizzes.',
    solution: 'Designed a distraction-free course player interface with structured syllabus milestones, progress indicators, quick resource attachments, and clear certificate tracking.',
    responsibilities: [
      'Conducted student interviews and competitive analysis across top online learning platforms.',
      'Designed responsive web user flows, wireframes, and modern high-fidelity mockups.',
      'Created interactive prototypes demonstrating seamless video chapter transitions and quiz interactions.',
      'Collaborated with education content managers and frontend teams to optimize learning UX.',
      'Conducted usability testing to validate course player responsiveness and readability.'
    ],
    deliverables: ['Video Course Player UI', 'Interactive Syllabus Tree', 'Quiz & Certificate Flow', 'Mobile Responsive Views']
  }
];

// ==========================================
// 2. Interactive Design Process (PDF Page 3)
// ==========================================
const processStepsData = {
  '1': {
    badge: 'Step 01 / Discovery',
    title: 'Research',
    desc: 'Every successful digital product starts with deep curiosity. I uncover unmet user needs, conduct in-depth user interviews, benchmark market competitors, and align closely with stakeholder business metrics to frame the core design problem.',
    deliverables: ['User Interviews & Personas', 'Market & Competitor Analysis', 'Business Goal Alignment', 'Problem Definition']
  },
  '2': {
    badge: 'Step 02 / Strategy',
    title: 'Ideation',
    desc: 'Translating research insights into strategic product architecture. I brainstorm diverse solution avenues, map out intuitive user flows, and sketch low-fidelity wireframes to iterate rapidly without visual bias.',
    deliverables: ['Information Architecture', 'User Journey Mapping', 'Low-Fidelity Wireframes', 'Concept Brainstorming']
  },
  '3': {
    badge: 'Step 03 / Craft',
    title: 'Design',
    desc: 'Transforming validated concepts into polished, pixel-perfect user interfaces. I build accessible design systems, responsive layouts, and interactive high-fidelity prototypes that bring the vision to life.',
    deliverables: ['High-Fidelity Mockups', 'Interactive Prototypes', 'Design Tokens & Components', 'Micro-Interactions']
  },
  '4': {
    badge: 'Step 04 / Validation',
    title: 'Testing',
    desc: 'Putting prototypes in the hands of real users to evaluate usability and cognitive load. I conduct structured usability tests, synthesize qualitative and quantitative feedback, and identify critical pain points.',
    deliverables: ['Usability Testing Sessions', 'Heuristic Evaluation', 'Feedback Synthesis Matrix', 'Friction Point Reports']
  },
  '5': {
    badge: 'Step 05 / Evolution',
    title: 'Iteration',
    desc: 'Design is never static. Based on testing insights, quantitative product analytics, and engineer feedback, I refine components, optimize edge cases, and ensure seamless handoff to engineering.',
    deliverables: ['Design Refinement', 'Developer Handoff Specs', 'Data-Driven Optimization', 'Documentation']
  }
};

function initProcessStepper() {
  const stepItems = document.querySelectorAll('.step-nav-item');
  const badgeEl = document.getElementById('process-display-badge');
  const titleEl = document.getElementById('process-display-title');
  const descEl = document.getElementById('process-display-desc');
  const deliverablesEl = document.getElementById('process-deliverables-list');

  if (!stepItems.length || !titleEl) return;

  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      const stepKey = item.getAttribute('data-step');
      const data = processStepsData[stepKey];
      if (!data) return;

      stepItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const displayCard = document.querySelector('.process-display-card');
      if (displayCard) {
        displayCard.style.opacity = '0.6';
        setTimeout(() => {
          badgeEl.textContent = data.badge;
          titleEl.textContent = data.title;
          descEl.textContent = data.desc;

          if (deliverablesEl) {
            deliverablesEl.innerHTML = data.deliverables.map(del => `
              <div class="deliverable-item">
                <i class="ph ph-check-circle"></i>
                <span>${del}</span>
              </div>
            `).join('');
          }
          displayCard.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// ==========================================
// 3. Project Filter Engine
// ==========================================
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterVal === 'all' || category === filterVal) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 3b. Social Content Filter Engine (Instagram / TikTok)
// ==========================================
function initSocialFiltering() {
  const filterBtns = document.querySelectorAll('.social-filter-btn');
  const socialCards = document.querySelectorAll('.social-card');

  if (!filterBtns.length || !socialCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-social-filter');

      socialCards.forEach((card) => {
        const platform = card.getAttribute('data-platform');
        if (filterVal === 'all' || platform === filterVal) {
          card.style.display = 'flex';
          card.classList.add('fade-in');
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// ==========================================
// 4. Case Study Modal Engine
// ==========================================
let currentActiveProject = null;

function initCaseStudyModal() {
  const modalBackdrop = document.getElementById('case-study-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-open-project]');
    if (trigger) {
      e.preventDefault();
      const projId = trigger.getAttribute('data-open-project');
      const project = projectsData.find(p => p.id === projId);
      if (project) {
        openCaseStudy(project);
      }
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeLightbox();
    }
  });
}

function openCaseStudy(proj) {
  currentActiveProject = proj;
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;

  document.getElementById('modal-project-badge').textContent = `Project ${proj.num} • ${proj.categoryLabel}`;
  document.getElementById('modal-title').textContent = proj.title;
  document.getElementById('modal-client').textContent = proj.client;
  document.getElementById('modal-role').textContent = proj.role;
  document.getElementById('modal-year').textContent = proj.year;
  document.getElementById('modal-tools').textContent = proj.tools.join(', ');

  const liveUrlContainer = document.getElementById('modal-live-link-container');
  if (liveUrlContainer) {
    if (proj.liveUrl) {
      liveUrlContainer.innerHTML = `
        <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-live-site">
          <span>Live Website</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
        </a>
      `;
    } else {
      liveUrlContainer.innerHTML = `
        <span class="offline-badge">
          <span class="offline-dot"></span> Offline / Internal Project
        </span>
      `;
    }
  }

  document.getElementById('modal-objective-text').textContent = proj.objective;
  document.getElementById('modal-problem-text').textContent = proj.problem;
  document.getElementById('modal-solution-text').textContent = proj.solution;

  const respList = document.getElementById('modal-responsibilities-list');
  if (respList) {
    respList.innerHTML = proj.responsibilities.map(r => `
      <li>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
        <span>${r}</span>
      </li>
    `).join('');
  }

  const previewImg = document.getElementById('modal-preview-img');
  previewImg.src = proj.screens.final;
  previewImg.setAttribute('data-full-src', proj.screens.final);
  previewImg.alt = `${proj.title} Showcase`;

  setupGalleryTabs(proj);

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function setupGalleryTabs(proj) {
  const tabsContainer = document.getElementById('gallery-tabs-container');
  const previewImg = document.getElementById('modal-preview-img');
  if (!tabsContainer || !previewImg) return;

  tabsContainer.innerHTML = `
    <button class="gallery-tab-btn active" data-screen-type="final">Final Design</button>
    <button class="gallery-tab-btn" data-screen-type="arch">Wireframes & Flow</button>
    <button class="gallery-tab-btn" data-screen-type="cover">Title Slide</button>
  `;

  tabsContainer.querySelectorAll('.gallery-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      tabsContainer.querySelectorAll('.gallery-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const type = btn.getAttribute('data-screen-type');
      const targetSrc = proj.screens[type] || proj.screens.final;
      previewImg.src = targetSrc;
      previewImg.setAttribute('data-full-src', targetSrc);
    });
  });
}

function closeModal() {
  const modal = document.getElementById('case-study-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// ==========================================
// 5. Lightbox Zoom Engine
// ==========================================
function initLightbox() {
  const previewImg = document.getElementById('modal-preview-img');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close-btn');

  if (previewImg && lightbox && lightboxImg) {
    previewImg.addEventListener('click', () => {
      const fullSrc = previewImg.getAttribute('data-full-src') || previewImg.src;
      lightboxImg.src = fullSrc;
      lightbox.classList.add('open');
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox-modal');
  if (lightbox) {
    lightbox.classList.remove('open');
  }
}

// ==========================================
// 6. Mobile Navigation Menu
// ==========================================
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileNav = document.getElementById('mobile-nav-drawer');

  if (!toggleBtn || !mobileNav) return;

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    mobileNav.classList.toggle('open');
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      mobileNav.classList.remove('open');
    });
  });
}

// ==========================================
// 7. Clipboard Email Copy & Toast Notice
// ==========================================
function initEmailCopy() {
  const copyBtns = document.querySelectorAll('[data-copy-email]');
  const toast = document.getElementById('toast-notice');

  if (!copyBtns.length || !toast) return;

  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const email = btn.getAttribute('data-copy-email') || 'harimukti789@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Email copied: ' + email);
      }).catch(() => {
        showToast('Email: ' + email);
      });
    });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-message');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// ==========================================
// 8. Interactive Scroll-Triggered Transitions & Active Nav Spy
// ==========================================
function initScrollAnimations() {
  // 1. Automatically register target elements for reveal transitions
  const targets = [
    // Section headers
    ...document.querySelectorAll('.section-header'),
    // Hero elements
    document.querySelector('.hero-text-col'),
    document.querySelector('.hero-visual-card'),
    document.querySelector('.hero-stats-row'),
    // About section cards
    document.querySelector('.who-card-main'),
    document.querySelector('.capabilities-list-box'),
    // Process section cards
    document.querySelector('.process-steps-list'),
    document.querySelector('.process-display-card'),
    // Project cards
    ...document.querySelectorAll('.project-card'),
    // Toolkit boxes
    ...document.querySelectorAll('.toolkit-box'),
    // Social & Creator cards and banner
    ...document.querySelectorAll('.social-card'),
    document.querySelector('.social-channels-banner'),
    // Contact box
    document.querySelector('.contact-card-box')
  ].filter(Boolean);

  targets.forEach((el) => {
    el.classList.add('reveal-on-scroll');
  });

  // 2. IntersectionObserver for Reveal Transitions
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback for older browsers
    targets.forEach((el) => el.classList.add('is-revealed'));
  }

  // 3. Active Nav Spy on Scroll
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  const sections = Array.from(navLinks).map((link) => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
  }).filter(Boolean);

  function updateActiveNav() {
    const scrollY = window.scrollY + 160;

    let currentSectionId = '';
    sections.forEach((sec) => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').substring(1);
      if (targetId === currentSectionId) {
        link.classList.add('nav-active');
      } else {
        link.classList.remove('nav-active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

