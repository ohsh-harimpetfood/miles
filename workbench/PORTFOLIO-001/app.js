(() => {
  'use strict';

  const THEME_KEY = 'miles-portfolio-theme';
  const LENS_KEY = 'miles-portfolio-lens';

  const validThemes = new Set(['miles-core', 'enterprise', 'industrial']);
  const validLenses = new Set(['default', 'executive', 'engineer', 'manufacturer', 'ai-builder']);

  const root = document.documentElement;
  const themeSelect = document.getElementById('theme-select');
  const lensSelect = document.getElementById('lens-select');
  const domainGrid = document.getElementById('domain-grid');

  function safeStoredValue(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (_error) {
      return null;
    }
  }

  function persist(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (_error) {
      // Persistence is progressive enhancement; presentation remains usable without storage.
    }
  }

  function applyTheme(theme, shouldPersist = true) {
    const nextTheme = validThemes.has(theme) ? theme : 'miles-core';
    root.dataset.theme = nextTheme;
    if (themeSelect) themeSelect.value = nextTheme;
    if (shouldPersist) persist(THEME_KEY, nextTheme);
  }

  function priorityFor(node, lens) {
    if (lens === 'default') {
      return Number(node.dataset.originalOrder || 999);
    }

    const key = `priority${lens
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join('')}`;

    return Number(node.dataset[key] || 999);
  }

  function reorderDomains(lens) {
    if (!domainGrid) return;

    const items = Array.from(domainGrid.children);
    items
      .sort((a, b) => {
        const priorityDiff = priorityFor(a, lens) - priorityFor(b, lens);
        if (priorityDiff !== 0) return priorityDiff;
        return Number(a.dataset.originalOrder || 999) - Number(b.dataset.originalOrder || 999);
      })
      .forEach((item) => domainGrid.appendChild(item));
  }

  function applyLens(lens, shouldPersist = true) {
    const nextLens = validLenses.has(lens) ? lens : 'default';
    root.dataset.lens = nextLens;
    if (lensSelect) lensSelect.value = nextLens;
    reorderDomains(nextLens);
    if (shouldPersist) persist(LENS_KEY, nextLens);
  }

  const storedTheme = safeStoredValue(THEME_KEY);
  const storedLens = safeStoredValue(LENS_KEY);

  applyTheme(validThemes.has(storedTheme) ? storedTheme : 'miles-core', false);
  applyLens(validLenses.has(storedLens) ? storedLens : 'default', false);

  themeSelect?.addEventListener('change', (event) => {
    applyTheme(event.target.value);
  });

  lensSelect?.addEventListener('change', (event) => {
    applyLens(event.target.value);
  });
})();
