/* PORTFOLIO-001 v2 — Portfolio Shell v0.2.0 */
(() => {
  'use strict';

  const root = document.documentElement;
  const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const themeButtons = [...document.querySelectorAll('[data-theme-set]')];
  const THEME_KEY = 'miles-portfolio-v2-theme';
  const validThemes = new Set(['acid', 'gold']);

  const caseMap = {
    wms: {
      label: 'WMS',
      title: 'WAREHOUSE MANAGEMENT SYSTEM',
      hint: 'DIGITAL EXECUTION SYSTEMS'
    },
    cold: {
      label: 'COLD',
      title: 'COLD CHAIN INTELLIGENCE',
      hint: 'DATA / OPERATIONAL INTELLIGENCE'
    },
    inventory: {
      label: 'INVENTORY / DATA',
      title: 'INVENTORY DECISION SYSTEM',
      hint: 'DATA & DECISION'
    }
  };

  function isReducedMotion() {
    return reduceMotionQuery.matches;
  }

  function readStoredTheme() {
    try {
      const stored = window.localStorage.getItem(THEME_KEY);
      return validThemes.has(stored) ? stored : null;
    } catch (_) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(THEME_KEY, theme);
    } catch (_) {
      // Theme remains functional without persistence when storage is unavailable.
    }
  }

  function syncThemeButtons(theme) {
    themeButtons.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.themeSet === theme));
    });
  }

  let morphTimer = 0;
  function setTheme(theme, { persist = true, morph = true } = {}) {
    if (!validThemes.has(theme)) return;

    const previous = root.dataset.theme || 'acid';
    const shouldMorph = morph && previous !== theme && !isReducedMotion();

    window.clearTimeout(morphTimer);
    if (shouldMorph) root.classList.add('is-theme-morphing');

    root.dataset.theme = theme;
    syncThemeButtons(theme);
    if (persist) storeTheme(theme);

    if (shouldMorph) {
      morphTimer = window.setTimeout(() => {
        root.classList.remove('is-theme-morphing');
      }, 760);
    } else {
      root.classList.remove('is-theme-morphing');
    }
  }

  const initialTheme = readStoredTheme() || (validThemes.has(root.dataset.theme) ? root.dataset.theme : 'acid');
  setTheme(initialTheme, { persist: false, morph: false });

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => setTheme(button.dataset.themeSet));
  });

  function initReveal() {
    const items = [...document.querySelectorAll('.reveal')];
    if (!items.length) return;

    if (isReducedMotion() || !('IntersectionObserver' in window)) {
      items.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12
    });

    items.forEach((item) => observer.observe(item));
  }

  function initHeaderState() {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;

    const sync = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
    sync();
    window.addEventListener('scroll', sync, { passive: true });
  }

  function initPointerDepth() {
    if (isReducedMotion() || !window.matchMedia('(pointer: fine)').matches) return;

    document.querySelectorAll('.pointer-depth').forEach((stage) => {
      const planes = [...stage.querySelectorAll('[data-depth-plane]')];
      if (!planes.length) return;

      stage.addEventListener('pointermove', (event) => {
        const rect = stage.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        planes.forEach((plane) => {
          const depth = Number(plane.dataset.depthPlane || 0.5);
          const tx = x * 16 * depth;
          const ty = y * 12 * depth;
          plane.style.setProperty('--pointer-x', `${tx}px`);
          plane.style.setProperty('--pointer-y', `${ty}px`);
          plane.style.translate = `${tx}px ${ty}px`;
        });
      });

      stage.addEventListener('pointerleave', () => {
        planes.forEach((plane) => {
          plane.style.removeProperty('translate');
          plane.style.removeProperty('--pointer-x');
          plane.style.removeProperty('--pointer-y');
        });
      });
    });
  }

  function initTemplateLabels() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('case');
    const selected = caseMap[requested] || {
      label: 'TEMPLATE CASE',
      title: 'CASE STORY TEMPLATE',
      hint: 'SHELL / DESIGN VALIDATION'
    };

    document.querySelectorAll('[data-case-label]').forEach((node) => {
      node.textContent = selected.label;
    });
    document.querySelectorAll('[data-case-title]').forEach((node) => {
      node.textContent = selected.title;
    });
    document.querySelectorAll('[data-case-hint]').forEach((node) => {
      node.textContent = selected.hint;
    });

    document.querySelectorAll('[data-case-query-link]').forEach((link) => {
      if (!(link instanceof HTMLAnchorElement)) return;
      const target = new URL(link.getAttribute('href'), window.location.href);
      if (requested && caseMap[requested]) target.searchParams.set('case', requested);
      link.href = target.href;
    });
  }

  function handleReducedMotionChange() {
    if (isReducedMotion()) {
      root.classList.remove('is-theme-morphing');
      document.querySelectorAll('.reveal').forEach((item) => item.classList.add('is-visible'));
      document.querySelectorAll('[data-depth-plane]').forEach((plane) => {
        plane.style.removeProperty('translate');
      });
    }
  }

  if (typeof reduceMotionQuery.addEventListener === 'function') {
    reduceMotionQuery.addEventListener('change', handleReducedMotionChange);
  }

  initReveal();
  initHeaderState();
  initPointerDepth();
  initTemplateLabels();
})();
