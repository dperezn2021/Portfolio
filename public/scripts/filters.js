// public/scripts/filters.js

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = Array.from(document.querySelectorAll('#project-grid > a'));
  const searchInput = document.getElementById('search-projects');
  const searchBtn = document.getElementById('search-btn');
  const showMoreBtn = document.getElementById('show-more-projects');
  const clearBtn = document.getElementById('clear-filters');
  const noResults = document.getElementById('no-results');
  const filtersPanel = document.getElementById('project-filters-panel');
  const filtersToggle = document.getElementById('toggle-project-filters');
  const yearMinInput = document.getElementById('project-year-min');
  const yearMaxInput = document.getElementById('project-year-max');
  const yearMinValue = document.getElementById('project-year-min-value');
  const yearMaxValue = document.getElementById('project-year-max-value');

  if (filtersPanel && filtersToggle && filtersToggle.dataset.bound !== 'true') {
    filtersToggle.dataset.bound = 'true';
    filtersToggle.addEventListener('click', () => {
      const isOpen = filtersPanel.classList.toggle('hidden') === false;
      filtersToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = filtersToggle.querySelector('[data-filter-toggle-icon]');
      if (icon) icon.textContent = isOpen ? 'close' : 'tune';
    });
  }

  if (!filterBtns.length || !projectCards.length) return;

  const INITIAL_VISIBLE = 12;
  const LOAD_MORE = 6;
  let visibleCount = INITIAL_VISIBLE;
  const activeFilters = new Map();
  let searchTerm = '';

  // Ordenar alfabéticamente
  projectCards.sort((a, b) => {
    const titleA = a.querySelector('.card-title')?.textContent?.trim() || '';
    const titleB = b.querySelector('.card-title')?.textContent?.trim() || '';
    return titleA.localeCompare(titleB);
  });

  const grid = document.getElementById('project-grid');
  if (grid) {
    projectCards.forEach((card) => grid.appendChild(card));
  }

  function getTranslation(key) {
    const lang = document.documentElement.lang || 'es';
    const translations = window.translations;
    if (translations && translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    return key;
  }

  const getCardValues = (card, group) => {
    if (group === 'discipline') return (card.getAttribute('data-disciplines') || '').split(',').filter(Boolean);
    if (group === 'context') return [card.getAttribute('data-project-context')].filter(Boolean);
    return [];
  };

  const getYearRange = () => {
    const min = Number(yearMinInput?.value ?? 0);
    const max = Number(yearMaxInput?.value ?? 0);
    return { min, max };
  };

  const getFilteredCards = () => {
    return projectCards.filter((card) => {
      const matchesGroups = Array.from(activeFilters.entries()).every(([group, values]) => {
        if (!values.size) return true;
        const cardValues = getCardValues(card, group);
        return cardValues.some((value) => values.has(value));
      });
      const projectYear = Number(card.getAttribute('data-project-year') || 0);
      const { min, max } = getYearRange();
      const matchesYearRange = projectYear >= min && projectYear <= max;
      const searchableText = `${card.querySelector('.card-title')?.textContent || ''} ${card.querySelector('.card-text')?.textContent || ''}`.toLowerCase();
      return matchesGroups && matchesYearRange && searchableText.includes(searchTerm.toLowerCase());
    });
  };

  const renderCards = () => {
    const filteredCards = getFilteredCards();
    const totalFiltered = filteredCards.length;

    projectCards.forEach((card) => {
      card.style.display = 'none';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.97)';
    });

    filteredCards.slice(0, visibleCount).forEach((card, index) => {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50 + index * 30);
    });

    if (showMoreBtn) {
      const remaining = totalFiltered - visibleCount;
      if (remaining > 0) {
        showMoreBtn.style.display = 'inline-flex';
        const label = showMoreBtn.querySelector('[data-show-more-label]') || showMoreBtn;
        const countSpan = showMoreBtn.querySelector('[data-show-more-count]');
        const loadMoreText = getTranslation('projects.load_more') || 'Ver más proyectos';
        if (countSpan) {
          label.textContent = loadMoreText;
          countSpan.textContent = `(${remaining})`;
          countSpan.style.display = 'inline';
        } else {
          label.textContent = `${loadMoreText} (${remaining})`;
        }
      } else {
        showMoreBtn.style.display = 'none';
      }
    }

    if (noResults) {
      if (totalFiltered === 0) {
        noResults.style.display = 'block';
        const msg = noResults.querySelector('p') || noResults;
        msg.textContent = getTranslation('projects.no_results') || 'No se encontraron proyectos';
      } else {
        noResults.style.display = 'none';
      }
    }
  };

  // ============================================
  // 1. FILTROS
  // ============================================
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const filterId = this.getAttribute('data-filter-id');
      const filterGroup = this.getAttribute('data-filter-group');
      const isActive = this.getAttribute('data-active') === 'true';
      if (!filterId || !filterGroup) return;
      if (!activeFilters.has(filterGroup)) activeFilters.set(filterGroup, new Set());
      const groupFilters = activeFilters.get(filterGroup);

      if (isActive) {
        this.setAttribute('data-active', 'false');
        this.setAttribute('aria-pressed', 'false');
        groupFilters.delete(filterId);
      } else {
        this.setAttribute('data-active', 'true');
        this.setAttribute('aria-pressed', 'true');
        groupFilters.add(filterId);
      }
      this.querySelector('.filter-indicator').textContent = isActive ? '+' : '✓';

      visibleCount = INITIAL_VISIBLE;
      renderCards();
    });
  });

  // ============================================
  // 2. RANGO DE FECHAS
  // ============================================
  const updateYearRange = () => {
    if (!yearMinInput || !yearMaxInput || !yearMinValue || !yearMaxValue) return;

    let min = Number(yearMinInput.value);
    let max = Number(yearMaxInput.value);

    if (min > max) {
      if (document.activeElement === yearMinInput) {
        yearMaxInput.value = String(min);
        max = min;
      } else {
        yearMinInput.value = String(max);
        min = max;
      }
    }

    yearMinValue.textContent = String(min);
    yearMaxValue.textContent = String(max);
    visibleCount = INITIAL_VISIBLE;
    renderCards();
  };

  if (yearMinInput && yearMaxInput) {
    yearMinInput.addEventListener('input', updateYearRange);
    yearMaxInput.addEventListener('input', updateYearRange);
  }

  // ============================================
  // 3. BÚSQUEDA EN TIEMPO REAL
  // ============================================
  const performSearch = () => {
    if (searchInput) {
      searchTerm = searchInput.value.trim();
      visibleCount = INITIAL_VISIBLE;
      renderCards();
    }
  };

  if (searchInput) {
    searchInput.addEventListener('input', performSearch);
  }

  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  // ============================================
  // 3. VER MÁS
  // ============================================
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      visibleCount += LOAD_MORE;
      renderCards();
    });
  }

  // ============================================
  // 4. LIMPIAR FILTROS
  // ============================================
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      filterBtns.forEach((btn) => {
        btn.setAttribute('data-active', 'false');
        btn.setAttribute('aria-pressed', 'false');
        const indicator = btn.querySelector('.filter-indicator');
        if (indicator) indicator.textContent = '+';
      });
      activeFilters.forEach((values) => values.clear());
      if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
      }
      if (yearMinInput && yearMaxInput) {
        yearMinInput.value = yearMinInput.min;
        yearMaxInput.value = yearMaxInput.max;
        yearMinValue.textContent = yearMinInput.min;
        yearMaxValue.textContent = yearMaxInput.max;
      }
      visibleCount = INITIAL_VISIBLE;
      renderCards();
    });
  }

  // ============================================
  // 5. INICIALIZAR
  // ============================================
  renderCards();

  if (document.body.dataset.filtersLangBound !== 'true') {
    document.body.dataset.filtersLangBound = 'true';
    window.addEventListener('app:languagechange', () => {
      renderCards();
    });
  }

  console.log(`📊 ${projectCards.length} proyectos cargados`);
}

window.initFilters = initFilters;