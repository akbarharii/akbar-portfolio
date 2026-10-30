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
  initQuickContactModal();
});

// ==========================================
// 1. Projects Data Master Reference
// ==========================================
// Master project data is maintained in js/projects-data.js
if (typeof projectsData === 'undefined') {
  console.warn('projectsData is undefined. Ensure js/projects-data.js is loaded before main.js.');
}

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

  const resultsCount = document.getElementById('project-results-count');

  const applyProjectFilter = (filterVal, activeBtn) => {
    let visibleCount = 0;

    filterBtns.forEach(btn => {
      const isActive = btn === activeBtn;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach(card => {
      const matches = filterVal === 'all' || card.getAttribute('data-category') === filterVal;
      card.classList.toggle('is-filtered-out', !matches);
      if (matches) {
        visibleCount += 1;
        card.classList.remove('fade-in');
        requestAnimationFrame(() => card.classList.add('fade-in'));
      }
    });

    if (resultsCount) {
      resultsCount.textContent = `Showing ${visibleCount} ${visibleCount === 1 ? 'selected project' : 'selected projects'}`;
    }
  };

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyProjectFilter(btn.getAttribute('data-filter') || 'all', btn);
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
let lastModalTrigger = null;

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
        lastModalTrigger = trigger;
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
      return;
    }

    if (e.key === 'Tab' && modalBackdrop.classList.contains('open')) {
      const focusable = modalBackdrop.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
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
  document.getElementById('modal-role').textContent = proj.position || proj.role;
  document.getElementById('modal-year').textContent = proj.year;
  document.getElementById('modal-tools').textContent = proj.tools ? proj.tools.join(', ') : '';

  const liveUrlContainer = document.getElementById('modal-live-link-container');
  if (liveUrlContainer) {
    const liveBadgeHtml = proj.liveUrl ? `
      <a href="${proj.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-live-site">
        <span>Live Website</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
      </a>
    ` : `
      <span class="offline-badge">
        <span class="offline-dot"></span> Offline / Internal Project
      </span>
    `;

    liveUrlContainer.innerHTML = `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; width: 100%; flex-wrap: wrap;">
        <div>${liveBadgeHtml}</div>
        <a href="project-detail.html?id=${proj.id}" class="btn btn-primary" style="padding: 6px 14px; font-size: 0.8rem; text-decoration: none;">
          <span>In-Depth Case Study Page</span>
          <i class="ph ph-arrow-up-right"></i>
        </a>
      </div>
    `;
  }

  const objText = proj.objective || (proj.goals && proj.goals[0] ? proj.goals[0].desc : '');
  const probText = proj.problem || (proj.audience && proj.audience[0] ? proj.audience[0].challenges.join(' • ') : '');
  const solText = proj.solution || proj.heroTagline;

  document.getElementById('modal-objective-text').textContent = objText;
  document.getElementById('modal-problem-text').textContent = probText;
  document.getElementById('modal-solution-text').textContent = solText;

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
  const closeButton = document.getElementById('modal-close-btn');
  if (closeButton) closeButton.focus({ preventScroll: true });
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
    const wasOpen = modal.classList.contains('open');
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (wasOpen && lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
      lastModalTrigger.focus({ preventScroll: true });
    }
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

  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.setAttribute('aria-controls', 'mobile-nav-drawer');

  toggleBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      toggleBtn.classList.remove('active');
      mobileNav.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
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

/* =========================================
   TOOLKIT MARQUEE - SEAMLESS INFINITE LOOP
========================================= */

function initToolkitMarquee() {
  document.querySelectorAll('.toolkit-marquee-track').forEach(track => {
    const groups = track.querySelectorAll('.toolkit-marquee-group');
    const original = groups[0];
    const duplicate = groups[1];

    if (!original || !duplicate) return;

    const baseContent = original.innerHTML;

    // Reset before recalculating
    original.innerHTML = baseContent;

    const requiredWidth = track.parentElement.clientWidth * 1.2;

    // Fill the row to prevent empty spaces
    while (original.scrollWidth < requiredWidth) {
      original.insertAdjacentHTML('beforeend', baseContent);
    }

    // Duplicate for seamless looping
    duplicate.innerHTML = original.innerHTML;
  });
}

window.addEventListener('load', initToolkitMarquee);

let toolkitResizeTimer;

window.addEventListener('resize', () => {
  clearTimeout(toolkitResizeTimer);

  toolkitResizeTimer = setTimeout(() => {
    initToolkitMarquee();
  }, 200);
});


// ==========================================
// 10. Quick Contact Modal with Accessible Focus Trap
// ==========================================
function initQuickContactModal() {
  const popupModal = document.getElementById('quick-contact-modal');
  const openTriggers = document.querySelectorAll('[data-open-contact-popup]');
  const closeTriggers = document.querySelectorAll('[data-close-contact-popup]');
  let lastContactTrigger = null;

  if (!popupModal) return;

  const openContact = (trigger) => {
    lastContactTrigger = trigger;
    // Close mobile menu drawer if open
    const mobileNav = document.getElementById('mobile-nav-drawer');
    const mobileToggle = document.getElementById('mobile-menu-toggle');
    if (mobileNav && mobileNav.classList.contains('open')) {
      mobileNav.classList.remove('open');
      if (mobileToggle) {
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    }
    popupModal.classList.add('open');
    document.body.style.overflow = 'hidden';
    const closeBtn = popupModal.querySelector('.contact-popup-close');
    if (closeBtn) closeBtn.focus({ preventScroll: true });
  };

  const closeContact = () => {
    popupModal.classList.remove('open');
    document.body.style.overflow = '';
    if (lastContactTrigger && typeof lastContactTrigger.focus === 'function') {
      lastContactTrigger.focus({ preventScroll: true });
    }
  };

  openTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openContact(btn);
    });
  });

  closeTriggers.forEach(btn => {
    btn.addEventListener('click', closeContact);
  });

  popupModal.addEventListener('click', (e) => {
    if (e.target === popupModal) closeContact();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popupModal.classList.contains('open')) {
      closeContact();
      return;
    }

    if (e.key === 'Tab' && popupModal.classList.contains('open')) {
      const focusable = popupModal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
}
