const INITIAL_VISIBLE = 15;
const LOAD_MORE = 9;

function translate(key: string): string {
  const lang = document.documentElement.lang || 'es';
  return window.translations?.[lang]?.[key] ?? key;
}

export function initFilters() {
  const byId = <T extends HTMLElement>(id: string) => document.getElementById(id) as T | null;

  const grid = byId('project-grid');
  const filtersPanel = byId('project-filters-panel');
  const filtersToggle = byId<HTMLButtonElement>('toggle-project-filters');

  if (filtersPanel && filtersToggle) {
    filtersToggle.addEventListener('click', () => {
      const isOpen = filtersPanel.classList.toggle('hidden') === false;
      filtersToggle.setAttribute('aria-expanded', String(isOpen));
      const icon = filtersToggle.querySelector('[data-filter-toggle-icon]');
      if (icon) icon.textContent = isOpen ? 'close' : 'tune';
    });
  }

  const filterBtns = document.querySelectorAll<HTMLElement>('.filter-btn');
  const projectCards = Array.from(document.querySelectorAll<HTMLElement>('#project-grid > a'));
  if (!grid || !filterBtns.length || !projectCards.length) return;

  const searchInput = byId<HTMLInputElement>('search-projects');
  const searchBtn = byId('search-btn');
  const showMoreBtn = byId('show-more-projects');
  const clearBtn = byId('clear-filters');
  const noResults = byId('no-results');
  const yearMinInput = byId<HTMLInputElement>('project-year-min');
  const yearMaxInput = byId<HTMLInputElement>('project-year-max');
  const yearMinValue = byId('project-year-min-value');
  const yearMaxValue = byId('project-year-max-value');

  let visibleCount = INITIAL_VISIBLE;
  let searchTerm = '';
  const activeFilters = new Map<string, Set<string>>();

  const cardTitle = (card: HTMLElement) => card.querySelector('.card-title')?.textContent?.trim() ?? '';
  projectCards.sort((a, b) => cardTitle(a).localeCompare(cardTitle(b)));
  projectCards.forEach((card) => grid.appendChild(card));

  const getCardValues = (card: HTMLElement, group: string): string[] => {
    if (group === 'discipline') return (card.getAttribute('data-disciplines') || '').split(',').filter(Boolean);
    if (group === 'context') return [card.getAttribute('data-project-context')].filter((v): v is string => Boolean(v));
    return [];
  };

  const getFilteredCards = () => {
    const min = Number(yearMinInput?.value ?? 0);
    const max = Number(yearMaxInput?.value ?? 0);
    const term = searchTerm.toLowerCase();

    return projectCards.filter((card) => {
      const matchesGroups = Array.from(activeFilters.entries()).every(([group, values]) => {
        if (!values.size) return true;
        return getCardValues(card, group).some((value) => values.has(value));
      });
      const year = Number(card.getAttribute('data-project-year') || 0);
      const text = `${card.querySelector('.card-title')?.textContent || ''} ${card.querySelector('.card-text')?.textContent || ''}`.toLowerCase();
      return matchesGroups && year >= min && year <= max && text.includes(term);
    });
  };

  const renderCards = () => {
    const filtered = getFilteredCards();

    projectCards.forEach((card) => {
      card.style.display = 'none';
      card.style.opacity = '0';
      card.style.transform = 'scale(0.97)';
    });

    filtered.slice(0, visibleCount).forEach((card, index) => {
      card.style.display = 'block';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      }, 50 + index * 30);
    });

    if (showMoreBtn) {
      const remaining = filtered.length - visibleCount;
      if (remaining > 0) {
        showMoreBtn.style.display = 'inline-flex';
        const label = showMoreBtn.querySelector('[data-show-more-label]') || showMoreBtn;
        const countSpan = showMoreBtn.querySelector<HTMLElement>('[data-show-more-count]');
        const loadMoreText = translate('projects.load_more') || 'Ver más proyectos';
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
      noResults.style.display = filtered.length === 0 ? 'block' : 'none';
      if (filtered.length === 0) {
        const message = noResults.querySelector('p') || noResults;
        message.textContent = translate('projects.no_results') || 'No se encontraron proyectos';
      }
    }
  };

  const resetAndRender = () => {
    visibleCount = INITIAL_VISIBLE;
    renderCards();
  };

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (event) => {
      event.preventDefault();
      const filterId = btn.getAttribute('data-filter-id');
      const filterGroup = btn.getAttribute('data-filter-group');
      const isActive = btn.getAttribute('data-active') === 'true';
      if (!filterId || !filterGroup) return;

      const groupFilters = activeFilters.get(filterGroup) ?? new Set<string>();
      activeFilters.set(filterGroup, groupFilters);

      btn.setAttribute('data-active', String(!isActive));
      btn.setAttribute('aria-pressed', String(!isActive));
      if (isActive) groupFilters.delete(filterId);
      else groupFilters.add(filterId);

      const indicator = btn.querySelector('.filter-indicator');
      if (indicator) indicator.textContent = isActive ? '+' : '✓';

      resetAndRender();
    });
  });

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
    resetAndRender();
  };

  yearMinInput?.addEventListener('input', updateYearRange);
  yearMaxInput?.addEventListener('input', updateYearRange);

  const performSearch = () => {
    if (!searchInput) return;
    searchTerm = searchInput.value.trim();
    resetAndRender();
  };

  searchInput?.addEventListener('input', performSearch);
  searchBtn?.addEventListener('click', performSearch);

  showMoreBtn?.addEventListener('click', () => {
    visibleCount += LOAD_MORE;
    renderCards();
  });

  clearBtn?.addEventListener('click', () => {
    filterBtns.forEach((btn) => {
      btn.setAttribute('data-active', 'false');
      btn.setAttribute('aria-pressed', 'false');
      const indicator = btn.querySelector('.filter-indicator');
      if (indicator) indicator.textContent = '+';
    });
    activeFilters.forEach((values) => values.clear());

    if (searchInput) searchInput.value = '';
    searchTerm = '';

    if (yearMinInput && yearMaxInput && yearMinValue && yearMaxValue) {
      yearMinInput.value = yearMinInput.min;
      yearMaxInput.value = yearMaxInput.max;
      yearMinValue.textContent = yearMinInput.min;
      yearMaxValue.textContent = yearMaxInput.max;
    }

    resetAndRender();
  });

  renderCards();
  window.addEventListener('app:languagechange', renderCards);
}
