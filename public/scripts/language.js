function getInitialLanguage() {
  const saved = localStorage.getItem('lang');
  return saved === 'en' ? 'en' : 'es';
}

function syncLanguageToggle(lang) {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.setAttribute('data-lang', lang);

  const esOption = toggle.querySelector('[data-lang-option="es"]');
  const enOption = toggle.querySelector('[data-lang-option="en"]');
  const slider = toggle.querySelector('[data-lang-slider]');

  if (slider) {
    slider.style.left = lang === 'es' ? '2px' : 'calc(50% + 2px)';
  }

  if (esOption && enOption) {
    esOption.classList.toggle('text-white', lang === 'es');
    esOption.classList.toggle('dark:text-black', lang === 'es');
    esOption.classList.toggle('text-black', lang !== 'es');
    esOption.classList.toggle('dark:text-black', lang !== 'es');

    enOption.classList.toggle('text-white', lang === 'en');
    enOption.classList.toggle('dark:text-black', lang === 'en');
    enOption.classList.toggle('text-black', lang !== 'en');
    enOption.classList.toggle('dark:text-black', lang !== 'en');
  }
}

function applyTranslations(lang) {
  document.documentElement.setAttribute('lang', lang);
  syncLanguageToggle(lang);

  const translations = window.translations;
  if (!translations || !translations[lang]) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Runtime bilingual content support for dynamic labels and values.
  document.querySelectorAll('[data-i18n-es][data-i18n-en]').forEach((el) => {
    const value = lang === 'en' ? el.getAttribute('data-i18n-en') : el.getAttribute('data-i18n-es');
    if (value) {
      el.textContent = value;
    }
  });
}

function updateLanguage(lang, persist = true) {
  const nextLang = lang === 'en' ? 'en' : 'es';
  applyTranslations(nextLang);

  if (persist) {
    localStorage.setItem('lang', nextLang);
  }

  window.dispatchEvent(new CustomEvent('app:languagechange', { detail: { lang: nextLang } }));
}

function initLanguage() {
  const initialLang = getInitialLanguage();
  updateLanguage(initialLang, false);

  const toggle = document.getElementById('lang-toggle');
  if (toggle && toggle.dataset.boundLang !== 'true') {
    toggle.dataset.boundLang = 'true';
    toggle.addEventListener('click', () => {
      const currentLang = localStorage.getItem('lang') === 'en' ? 'en' : 'es';
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      updateLanguage(nextLang);
    });
  }
}

window.updateLanguage = updateLanguage;
window.initLanguage = initLanguage;