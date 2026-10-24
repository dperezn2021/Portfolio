type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') return savedTheme;
  localStorage.setItem('theme', 'light');
  return 'light';
}

function applyTheme(theme: Theme, persist = true) {
  const html = document.documentElement;
  const isDark = theme === 'dark';

  html.classList.toggle('dark', isDark);
  html.setAttribute('data-theme', theme);
  html.style.colorScheme = theme;

  if (persist) localStorage.setItem('theme', theme);

  const icon = document.getElementById('theme-toggle')?.querySelector('.material-symbols-outlined');
  if (icon) {
    // El icono muestra la acción disponible.
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }

  window.dispatchEvent(new CustomEvent('app:themechange', { detail: { theme } }));
}

export function initTheme() {
  applyTheme(getInitialTheme(), false);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', () => {
    applyTheme(document.documentElement.classList.contains('dark') ? 'light' : 'dark');
  });
}
