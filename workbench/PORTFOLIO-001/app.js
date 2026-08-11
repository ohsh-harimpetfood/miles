(() => {
  'use strict';

  const THEME_KEY = 'miles-portfolio-theme';
  const LENS_KEY = 'miles-portfolio-lens';

  const validThemes = new Set(['miles-core', 'enterprise', 'industrial']);
  const validLenses = new Set(['default', 'executive', 'engineer', 'manufacturer', 'ai-builder']);
  const focusChapterLabels = new Map([
    ['who', '01 / WHO'],
    ['what', '02 / WHAT'],
    ['how', '03 / HOW'],
    ['proof', '04 / PROOF'],
    ['evolution', '05 / EVOLUTION'],
    ['impact', '06 / IMPACT'],
    ['method', '07 / METHOD']
  ]);
  const supportedFocusChapters = new Set(focusChapterLabels.keys());

  const root = document.documentElement;
  const themeSelect = document.getElementById('theme-select');
  const lensSelect = document.getElementById('lens-select');
  const domainGrid = document.getElementById('domain-grid');

  let focusReturnLink = null;
  let temporaryFocusedHeading = null;

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

  function element(tagName, className, text) {
    const node = document.createElement(tagName);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function addTextCard(container, eyebrow, headline, body, conceptLine, boundary) {
    const card = element('article', 'principle-block');
    card.appendChild(element('span', 'eyebrow', eyebrow));
    card.appendChild(element('h3', '', headline));
    card.appendChild(element('p', '', body));

    if (conceptLine) {
      card.appendChild(element('blockquote', '', conceptLine));
    }

    if (boundary) {
      card.appendChild(element('p', 'boundary-note', boundary));
    }

    container.appendChild(card);
  }

  function addPortfolioNarrativeArc() {
    if (document.getElementById('portfolio-narrative-arc')) return;

    const closing = document.querySelector('#who .who-closing');
    if (!closing) return;

    const nav = element('nav');
    nav.id = 'portfolio-narrative-arc';
    nav.setAttribute('aria-label', 'Portfolio narrative arc');
    nav.appendChild(element('span', 'eyebrow', 'PORTFOLIO ARC'));

    const flow = element('ol', 'process-flow');
    const destinations = [
      ['WHO', '#who'],
      ['WHAT', '#what'],
      ['HOW', '#how'],
      ['PROOF', '#proof'],
      ['EVOLUTION', '#evolution'],
      ['IMPACT', '#impact'],
      ['METHOD', '#method']
    ];

    destinations.forEach(([label, href]) => {
      const item = element('li');
      const link = element('a', '', label);
      link.href = href;
      item.appendChild(link);
      flow.appendChild(item);
    });

    nav.appendChild(flow);
    closing.appendChild(nav);
  }

  function addRealProblemSeeds() {
    if (document.getElementById('problem-cases')) return;

    const whatInner = document.querySelector('#what .section-inner');
    if (!whatInner || !domainGrid) return;

    const wrapper = element('div', 'who-block');
    wrapper.id = 'problem-cases';
    wrapper.appendChild(element('span', 'eyebrow', 'REAL PROBLEMS'));

    const grid = element('div', 'principle-grid');

    addTextCard(
      grid,
      'INVENTORY VISIBILITY',
      '재고는 있는데, 운영 판단에 사용할 수 없다.',
      '흩어진 재고 데이터를 연결하고 Google Sheets → Colab → Dashboard 흐름으로 재구성하여 단순히 재고를 보여주는 화면에서 운영 판단에 사용할 수 있는 정보구조로 발전시켰다.',
      'Make inventory visible enough to decide.',
      '현재 verified evidence 없이 ROI, 시간 절감, 정확도 개선 수치를 주장하지 않는다.'
    );

    addTextCard(
      grid,
      'COLD CHAIN',
      '온도는 기록되는데, 운영위험은 보이지 않는다.',
      '냉동 컨테이너 데이터를 자동 분석하고 온도 유지능력을 비교할 수 있는 구조를 만들어 품질 모니터링 문제를 시설 운영 리스크 → engineering 판단 → 투자 대안 검토 문제로 확장했다.',
      'Turn measurements into an engineering decision.',
      '분석 및 투자 대안 검토까지가 verified scope이며 냉동창고 투자가 확정되었다고 주장하지 않는다.'
    );

    addTextCard(
      grid,
      'WAREHOUSE LOCATION',
      '자재는 있는데, 어디 있는지 찾기 어렵다.',
      '수기 위치관리, 위치·품목 mismatch, 탐색 문제에서 출발하여 위치·품목·transaction을 연결하고 실제 창고의 물리 흐름을 digital execution system으로 전환했다.',
      'From physical friction to executable structure.',
      '기존 WMS PROOF truth boundary를 따르며 ROI, labor saving, inventory accuracy improvement를 새롭게 주장하지 않는다.'
    );

    wrapper.appendChild(grid);
    domainGrid.insertAdjacentElement('afterend', wrapper);
  }

  function addImpactSeed() {
    if (document.getElementById('impact')) return;

    const evolution = document.getElementById('evolution');
    if (!evolution || !evolution.parentNode) return;

    const section = element('section', 'section');
    section.id = 'impact';
    section.setAttribute('aria-labelledby', 'impact-title');

    const inner = element('div', 'section-inner');
    inner.appendChild(element('p', 'section-index', '06 / IMPACT'));

    const headingRow = element('div', 'section-heading-row');
    headingRow.appendChild(element('h2', '', '내가 만든 방식이 다른 사람과 조직의 능력으로 확장되는가.'));
    headingRow.querySelector('h2').id = 'impact-title';
    headingRow.appendChild(element('p', '', '개인의 문제 해결에서 끝나지 않고, 사례를 공유하고 교육하고 재사용할 수 있게 만드는 방향으로 범위를 넓힌다.'));
    inner.appendChild(headingRow);

    const grid = element('div', 'principle-grid');
    addTextCard(
      grid,
      'TEACH',
      '실제 구축 경험을 교육 가능한 사례로 바꾼다.',
      '재고 대시보드, 냉동 CT, MES, WMS와 같은 실제 현업 사례를 활용하여 기술 자체보다 문제 정의와 실행 과정을 설명한다.'
    );
    addTextCard(
      grid,
      'ENABLE',
      '다른 사람이 AI와 데이터를 자기 업무에 연결하도록 돕는다.',
      '도구 사용법만 가르치는 것이 아니라 현업 문제를 데이터·자동화·AI의 언어로 전환하는 방식을 전달한다.'
    );
    addTextCard(
      grid,
      'DIFFUSE',
      '개인 활용을 조직의 실행 방식으로 확산한다.',
      '교육, 업무 활용사례 공유, 자동화 후보 발굴과 재사용 가능한 산출물을 통해 조직의 AI / DX 활용 범위를 넓혀간다.'
    );
    inner.appendChild(grid);

    const boundary = element('aside', 'evidence-boundary');
    boundary.appendChild(element('strong', '', 'Impact Boundary'));
    boundary.appendChild(element('p', '', 'Impact는 교육 횟수나 기술 홍보가 아니라, 다른 사람이 더 나은 실행을 할 수 있게 되는 변화로 정의한다. 조직 전체 AI transformation을 이미 달성했다고 주장하지 않으며 기여, 확산, enablement 수준으로 표현한다.'));
    inner.appendChild(boundary);

    section.appendChild(inner);
    evolution.parentNode.insertBefore(section, evolution.nextSibling);
  }

  function addMethodSeed() {
    if (document.getElementById('method')) return;

    const impact = document.getElementById('impact');
    if (!impact || !impact.parentNode) return;

    const section = element('section', 'section');
    section.id = 'method';
    section.setAttribute('aria-labelledby', 'method-title');

    const inner = element('div', 'section-inner');
    inner.appendChild(element('p', 'section-index', '07 / METHOD'));

    const headingRow = element('div', 'section-heading-row');
    headingRow.appendChild(element('h2', '', '반복된 실행 패턴을 재사용 가능한 방법으로 정의하기 시작했다.'));
    headingRow.querySelector('h2').id = 'method-title';
    headingRow.appendChild(element('p', '', '방법론을 먼저 선언한 것이 아니라, 여러 현실 문제를 해결하면서 반복적으로 나타난 작업 구조를 정리하고 있는 단계다.'));
    inner.appendChild(headingRow);

    const grid = element('div', 'principle-grid');
    addTextCard(
      grid,
      'DOCS AS CODE',
      '문서를 일회성 결과물이 아니라 갱신 가능한 실행 자산으로.',
      '분석, 판단, 설명과 배포 가능한 결과물을 구조화하고 다시 사용할 수 있는 형태로 남긴다.'
    );
    addTextCard(
      grid,
      'FEATURE AS CODE',
      '업무 규칙과 분석 로직을 반복 실행 가능한 기능으로.',
      '데이터 가공과 판단 규칙을 코드와 테스트 가능한 단위로 분리하고 운영 UI와 연결한다.'
    );
    addTextCard(
      grid,
      'GIT AS ACTION',
      '대화에서 끝나는 지시를 검증 가능한 변경과 기억으로.',
      'AI-assisted execution의 변경 이력, evidence와 durable memory를 Git에 남기는 방향을 탐색한다.',
      '',
      'Git as Action은 exploratory / working direction이며 formal methodology로 승격하지 않는다.'
    );
    inner.appendChild(grid);

    const closing = element('div', 'closing-lines');
    closing.appendChild(element('blockquote', '', 'MILES is becoming a system for making the way of working reusable.'));
    closing.appendChild(element('p', 'boundary-note', 'Docs as Code, Feature as Code, Git as Action과 MILES의 상위 연결은 현재 evolving working model이다. formal methodology status를 주장하지 않는다.'));
    inner.appendChild(closing);

    section.appendChild(inner);
    impact.parentNode.insertBefore(section, impact.nextSibling);
  }

  function chapterIdFromLink(link) {
    const href = link?.getAttribute('href') || '';
    if (!href.startsWith('#')) return null;

    const chapterId = href.slice(1);
    return supportedFocusChapters.has(chapterId) ? chapterId : null;
  }

  function updateFocusHistory(chapterId, mode) {
    const hash = chapterId ? `#${chapterId}` : '';
    const state = supportedFocusChapters.has(chapterId)
      ? { portfolioFocus: chapterId }
      : { portfolioFocus: null };

    if (mode === 'replace') {
      window.history.replaceState(state, '', hash);
      return;
    }

    window.history.pushState(state, '', hash);
  }

  function clearTemporaryHeading() {
    if (!temporaryFocusedHeading) return;

    if (temporaryFocusedHeading.dataset.focusModeTemporaryTabindex === 'true') {
      temporaryFocusedHeading.removeAttribute('tabindex');
      delete temporaryFocusedHeading.dataset.focusModeTemporaryTabindex;
    }

    temporaryFocusedHeading = null;
  }

  function focusChapterHeading(section) {
    clearTemporaryHeading();

    const labelledBy = section.getAttribute('aria-labelledby');
    const labelledId = labelledBy?.split(/\s+/)[0];
    const heading = (labelledId && document.getElementById(labelledId))
      || section.querySelector('h1, h2, h3');

    if (!heading) return;

    if (!heading.hasAttribute('tabindex')) {
      heading.setAttribute('tabindex', '-1');
      heading.dataset.focusModeTemporaryTabindex = 'true';
    }

    temporaryFocusedHeading = heading;
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    window.requestAnimationFrame(() => {
      heading.focus({ preventScroll: true });
    });
  }

  function removeFocusBar() {
    document.getElementById('chapter-focus-bar')?.remove();
  }

  function clearFocusedChapters() {
    document.querySelectorAll('main > .section.is-focused-chapter')
      .forEach((section) => section.classList.remove('is-focused-chapter'));
  }

  function createFocusBar(chapterId, section) {
    removeFocusBar();

    const inner = section.querySelector('.section-inner');
    if (!inner) return;

    const bar = element('div', 'chapter-focus-bar');
    bar.id = 'chapter-focus-bar';

    const label = element('span', 'chapter-focus-label', focusChapterLabels.get(chapterId) || chapterId.toUpperCase());
    const button = element('button', 'chapter-focus-return', '← OVERVIEW');
    button.type = 'button';
    button.setAttribute('aria-label', 'Return to portfolio overview');
    button.addEventListener('click', () => {
      exitFocusMode({ historyMode: 'replace', restoreFocus: true, scrollTargetId: 'overview' });
    });

    bar.appendChild(label);
    bar.appendChild(button);
    inner.prepend(bar);
  }

  function switchFocusChapter(chapterId, triggerLink, options = {}) {
    if (!supportedFocusChapters.has(chapterId)) return false;

    const section = document.getElementById(chapterId);
    if (!section || !section.matches('main > .section')) return false;

    const historyMode = options.historyMode || 'replace';

    if (triggerLink?.closest('.overview-chapters')) {
      focusReturnLink = triggerLink;
    }

    document.body.classList.add('portfolio-focus-mode');
    clearFocusedChapters();
    section.classList.add('is-focused-chapter');
    createFocusBar(chapterId, section);

    if (historyMode !== 'none') {
      updateFocusHistory(chapterId, historyMode);
    }

    focusChapterHeading(section);
    return true;
  }

  function enterFocusMode(chapterId, triggerLink) {
    return switchFocusChapter(chapterId, triggerLink, { historyMode: 'push' });
  }

  function exitFocusMode(options = {}) {
    if (!document.body.classList.contains('portfolio-focus-mode')) return;

    const historyMode = options.historyMode || 'replace';
    const restoreFocus = options.restoreFocus !== false;
    const scrollTargetId = options.scrollTargetId || 'overview';
    const returnTarget = focusReturnLink?.isConnected
      ? focusReturnLink
      : document.querySelector('.overview-chapters a');

    document.body.classList.remove('portfolio-focus-mode');
    clearFocusedChapters();
    removeFocusBar();
    clearTemporaryHeading();

    if (historyMode !== 'none') {
      updateFocusHistory(scrollTargetId === 'overview' ? 'overview' : scrollTargetId, historyMode);
    }

    const scrollTarget = document.getElementById(scrollTargetId) || document.getElementById('overview');
    scrollTarget?.scrollIntoView({ block: 'start', behavior: 'auto' });

    focusReturnLink = null;

    if (restoreFocus && returnTarget) {
      window.requestAnimationFrame(() => {
        returnTarget.focus({ preventScroll: true });
      });
    }
  }

  function initFocusMode() {
    if (document.body.dataset.focusModeReady === 'true') return;

    const overviewLinks = Array.from(document.querySelectorAll('.overview-chapters a'));
    const narrativeArcLinks = Array.from(document.querySelectorAll('#portfolio-narrative-arc a'));
    const brandLink = document.querySelector('.brand-mark[href="#overview"]');

    document.body.dataset.focusModeReady = 'true';

    overviewLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        const chapterId = chapterIdFromLink(link);
        if (!chapterId || !document.getElementById(chapterId)) return;

        event.preventDefault();
        enterFocusMode(chapterId, link);
      });
    });

    narrativeArcLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        if (!document.body.classList.contains('portfolio-focus-mode')) return;

        const chapterId = chapterIdFromLink(link);
        if (!chapterId || !document.getElementById(chapterId)) return;

        event.preventDefault();
        switchFocusChapter(chapterId, null, { historyMode: 'replace' });
      });
    });

    brandLink?.addEventListener('click', (event) => {
      if (!document.body.classList.contains('portfolio-focus-mode')) return;

      event.preventDefault();
      exitFocusMode({ historyMode: 'replace', restoreFocus: true, scrollTargetId: 'overview' });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape' || !document.body.classList.contains('portfolio-focus-mode')) return;

      event.preventDefault();
      exitFocusMode({ historyMode: 'replace', restoreFocus: true, scrollTargetId: 'overview' });
    });

    window.addEventListener('popstate', () => {
      if (!document.body.classList.contains('portfolio-focus-mode')) return;

      const hashId = window.location.hash.replace(/^#/, '');
      if (supportedFocusChapters.has(hashId) && window.history.state?.portfolioFocus === hashId) {
        switchFocusChapter(hashId, null, { historyMode: 'none' });
        return;
      }

      exitFocusMode({
        historyMode: 'none',
        restoreFocus: false,
        scrollTargetId: hashId || 'overview'
      });
    });
  }

  const storedTheme = safeStoredValue(THEME_KEY);
  const storedLens = safeStoredValue(LENS_KEY);

  applyTheme(validThemes.has(storedTheme) ? storedTheme : 'miles-core', false);
  applyLens(validLenses.has(storedLens) ? storedLens : 'default', false);

  addImpactSeed();
  addMethodSeed();
  addPortfolioNarrativeArc();
  addRealProblemSeeds();
  initFocusMode();

  themeSelect?.addEventListener('change', (event) => {
    applyTheme(event.target.value);
  });

  lensSelect?.addEventListener('change', (event) => {
    applyLens(event.target.value);
  });
})();
