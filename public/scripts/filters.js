function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = Array.from(document.querySelectorAll('#project-grid > a'));
  const searchInput = document.getElementById('search-projects');
  const searchBtn = document.getElementById('search-btn');
  const showMoreBtn = document.getElementById('show-more-projects');
  const clearBtn = document.getElementById('clear-filters');
  const showMoreLabel = showMoreBtn?.querySelector('[data-show-more-label]') || null;
  const showMoreCount = showMoreBtn?.querySelector('[data-show-more-count]') || null;

  if (!filterBtns.length || !projectCards.length) return;

  const INITIAL_VISIBLE = 6;
  const LOAD_MORE = 3;
  let visibleCount = INITIAL_VISIBLE;
  let activeFilters = new Set();
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

  const getFilteredCards = () => {
    return projectCards.filter((card) => {
      // Obtener disciplinas del proyecto (separadas por coma)
      const cardDisciplines = (card.getAttribute('data-disciplines') || '').split(',');
      const matchesDiscipline = activeFilters.size === 0 || cardDisciplines.some(d => activeFilters.has(d));
      
      const title = card.querySelector('.card-title')?.textContent?.toLowerCase() || '';
      const matchesSearch = title.includes(searchTerm.toLowerCase());

      return matchesDiscipline && matchesSearch;
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
      showMoreBtn.style.display = totalFiltered > visibleCount ? 'inline-flex' : 'none';
      if (totalFiltered > visibleCount) {
        const remaining = totalFiltered - visibleCount;
        if (showMoreLabel) {
          showMoreLabel.setAttribute('data-i18n', 'projects.load_more');
        }
        if (showMoreCount) {
          showMoreCount.textContent = `(${remaining})`;
        }
      }
    }

    const noResults = document.getElementById('no-results');
    if (noResults) {
      noResults.style.display = totalFiltered === 0 ? 'block' : 'none';
    }
  };

  // Toggle filters
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const filterId = this.getAttribute('data-filter-id');
      const isActive = this.getAttribute('data-active') === 'true';

      if (isActive) {
        this.setAttribute('data-active', 'false');
        activeFilters.delete(filterId);
      } else {
        this.setAttribute('data-active', 'true');
        activeFilters.add(filterId);
      }

      visibleCount = INITIAL_VISIBLE;
      renderCards();
    });
  });

  // Search
  const performSearch = () => {
    if (searchInput) {
      searchTerm = searchInput.value.trim();
      visibleCount = INITIAL_VISIBLE;
      renderCards();
    }
  };

  if (searchBtn) {
    searchBtn.addEventListener('click', performSearch);
  }

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        performSearch();
      }
    });
  }

  // Show more
  if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
      visibleCount += LOAD_MORE;
      renderCards();
    });
  }

  // Clear filters
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      filterBtns.forEach((btn) => btn.setAttribute('data-active', 'false'));
      activeFilters.clear();
      visibleCount = INITIAL_VISIBLE;
      renderCards();
    });
  }

  // Inicializar
  renderCards();

  // Re-render label/counter when language changes so the load-more text stays translated.
  if (document.body.dataset.filtersLangBound !== 'true') {
    document.body.dataset.filtersLangBound = 'true';
    window.addEventListener('app:languagechange', () => {
      renderCards();
    });
  }

  console.log(`📊 ${projectCards.length} proyectos cargados`);
}

window.initFilters = initFilters;