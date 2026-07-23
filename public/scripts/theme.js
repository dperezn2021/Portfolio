function getInitialTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }
  localStorage.setItem('theme', 'light');
  return 'light';
}

function applyTheme(theme, persist = true) {
  const html = document.documentElement;
  const isDark = theme === 'dark';
  const normalizedTheme = isDark ? 'dark' : 'light';

  html.classList.toggle('dark', isDark);
  html.setAttribute('data-theme', normalizedTheme);
  html.style.colorScheme = normalizedTheme;

  if (persist) {
    localStorage.setItem('theme', normalizedTheme);
  }

  const toggle = document.getElementById('theme-toggle');
  const icon = toggle?.querySelector('.material-symbols-outlined');
  if (icon) {
    // Icon shows the action available to the user.
    icon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }

  window.dispatchEvent(new CustomEvent('app:themechange', { detail: { theme: normalizedTheme } }));
}

function initTheme() {
  applyTheme(getInitialTheme(), false);

  const toggle = document.getElementById('theme-toggle');
  if (!toggle || toggle.dataset.boundTheme === 'true') return;

  toggle.dataset.boundTheme = 'true';
  toggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark');
  });
}

window.applyTheme = applyTheme;
window.initTheme = initTheme;