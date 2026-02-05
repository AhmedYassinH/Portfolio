(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const sunIcons = document.querySelectorAll('[data-theme-icon="sun"]');
  const moonIcons = document.querySelectorAll('[data-theme-icon="moon"]');
  const storageKey = 'theme';

  function syncIcons(theme) {
    const isDark = theme === 'dark';

    sunIcons.forEach((icon) => {
      icon.classList.toggle('hidden', !isDark);
    });

    moonIcons.forEach((icon) => {
      icon.classList.toggle('hidden', isDark);
    });

    toggles.forEach((toggle) => {
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }

  function applyTheme(theme) {
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    localStorage.setItem(storageKey, theme);
    syncIcons(theme);
  }

  const storedTheme = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');
  applyTheme(initialTheme);

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', function () {
      const current = root.classList.contains('dark') ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  });
})();
