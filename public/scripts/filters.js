// public/scripts/filters.js

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = Array.from(document.querySelectorAll('#project-grid > a'));
  const searchInput = document.getElementById('search-projects');
  const searchBtn = document.getElementById('search-btn');
  const showMoreBtn = document.getElementById('show-more-projects');
  const clearBtn = document.getElementById('clear-filters');
  const noResults = document.getElementById('no-results');

  if (!filterBtns.length || !projectCards.length) return;

  const INITIAL_VISIBLE = 6;
  const LOAD_MORE = 6;
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

  function getTranslation(key) {
    const lang = document.documentElement.lang || 'es';
    const translations = window.translations;
    if (translations && translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    return key;
  }

  const getFilteredCards = () => {
    return projectCards.filter((card) => {
      // Filtro por disciplina
      const cardDisciplines = (card.getAttribute('data-disciplines') || '').split(',');
      const matchesDiscipline = activeFilters.size === 0 || cardDisciplines.some(d => activeFilters.has(d));
      
      // ✅ Búsqueda por título (y descripción si quieres)
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
      const isActive = this.getAttribute('data-active') === 'true';

      if (isActive) {
        this.setAttribute('data-active', 'false');
        activeFilters.delete(filterId);
        this.classList.remove('bg-cyan-500', 'text-white');
      } else {
        this.setAttribute('data-active', 'true');
        activeFilters.add(filterId);
        this.classList.add('bg-cyan-500', 'text-white');
      }

      visibleCount = INITIAL_VISIBLE;
      renderCards();
    });
  });

  // ============================================
  // 2. BÚSQUEDA EN TIEMPO REAL
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
        btn.classList.remove('bg-cyan-500', 'text-white');
      });
      activeFilters.clear();
      if (searchInput) {
        searchInput.value = '';
        searchTerm = '';
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