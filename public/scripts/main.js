function initializeApp() {
  if (window.__portfolioInitialized) return;
  window.__portfolioInitialized = true;

  if (typeof window.initTheme === 'function') {
    window.initTheme();
  }

  if (typeof window.initLanguage === 'function') {
    window.initLanguage();
  }

  if (typeof window.initAnimations === 'function') {
    window.initAnimations();
  }

  if (typeof window.initFilters === 'function') {
    window.initFilters();
  }

  if (typeof window.initContact === 'function') {
    window.initContact();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp, { once: true });
} else {
  initializeApp();
}