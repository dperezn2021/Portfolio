type Lang = 'es' | 'en';

function getStoredLanguage(): Lang {
  return localStorage.getItem('lang') === 'en' ? 'en' : 'es';
}

function syncLanguageToggle(lang: Lang) {
  const toggle = document.getElementById('lang-toggle');
  if (!toggle) return;

  toggle.setAttribute('data-lang', lang);

  const slider = toggle.querySelector<HTMLElement>('[data-lang-slider]');
  if (slider) slider.style.left = lang === 'es' ? '2px' : 'calc(50% + 2px)';

  (['es', 'en'] as const).forEach((option) => {
    const el = toggle.querySelector(`[data-lang-option="${option}"]`);
    if (!el) return;
    el.classList.toggle('text-white', lang === option);
    el.classList.toggle('text-black', lang !== option);
    el.classList.toggle('dark:text-black', lang !== option);
  });
}

function applyTranslations(lang: Lang) {
  document.documentElement.setAttribute('lang', lang);
  syncLanguageToggle(lang);

  const dictionary = window.translations?.[lang];
  if (!dictionary) return;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && dictionary[key]) el.textContent = dictionary[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && dictionary[key]) el.setAttribute('placeholder', dictionary[key]);
  });

  // Contenido bilingüe que viaja en el propio elemento.
  document.querySelectorAll('[data-i18n-es][data-i18n-en]').forEach((el) => {
    const value = el.getAttribute(lang === 'en' ? 'data-i18n-en' : 'data-i18n-es');
    if (value) el.textContent = value;
  });

  document.querySelectorAll('[data-i18n-alt-key]').forEach((el) => {
    const key = el.getAttribute('data-i18n-alt-key');
    const suffix = el.getAttribute('data-i18n-alt-suffix');
    const translatedAlt = key && dictionary[key];
    if (translatedAlt) el.setAttribute('alt', suffix ? `${translatedAlt} ${suffix}` : translatedAlt);
  });
}

function setLanguage(lang: Lang, persist = true) {
  applyTranslations(lang);
  if (persist) localStorage.setItem('lang', lang);
  window.dispatchEvent(new CustomEvent('app:languagechange', { detail: { lang } }));
}

export function initLanguage() {
  setLanguage(getStoredLanguage(), false);

  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    setLanguage(getStoredLanguage() === 'es' ? 'en' : 'es');
  });
}
