(() => {
  const root = document.documentElement;
  const i18n = window.portfolioI18n ?? {
    language: () => 'en',
    text: (key) => ({ about: 'About', education: 'Education', projects: 'Projects', experience: 'Experience', contact: 'Contact', cv: 'Download CV', language: 'Language' }[key] || key),
    setLanguage: () => {},
  };
  const navigation = [
    ['about', 'about', 'index.html#about'],
    ['education', 'education', 'education.html'],
    ['projects', 'projects', 'projects.html'],
    ['experience', 'experience', 'experience.html'],
    ['contact', 'contact', 'contact.html'],
  ];

  function currentSection() {
    const page = document.body.dataset.page;
    if (page === 'caseStudy') return 'projects';
    if (navigation.some(([section]) => section === page)) return page;
    return location.pathname.endsWith('index.html') || location.pathname.endsWith('/') ? 'about' : '';
  }

  function linkMarkup(section, label, href, mobile = false) {
    const active = section === currentSection() ? ' active' : '';
    return `<a class="nav-link${active}${mobile ? ' mobile-nav-link' : ''}" href="${href}">${i18n.text(label)}</a>`;
  }

  function renderNavbar() {
    const mount = document.querySelector('#site-header');
    if (!mount) return;

    const desktopLinks = navigation.map(([section, label, href]) => linkMarkup(section, label, href)).join('');
    const mobileLinks = navigation.map(([section, label, href]) => linkMarkup(section, label, href, true)).join('');

    mount.className = 'sticky inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80';
    mount.innerHTML = `
      <nav class="mx-auto flex max-w-7xl items-center justify-end px-6 py-5">
        <div class="hidden items-center gap-7 text-sm font-medium md:flex">
          ${desktopLinks}
          <a href="CV-ATS-Eky-Fernanda.pdf" download class="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">${i18n.text('cv')}</a>
          <div class="inline-flex overflow-hidden rounded-lg border border-slate-200 text-xs font-semibold dark:border-slate-700" aria-label="${i18n.text('language')}">
            <button type="button" data-language="en" class="language-button px-2.5 py-2" aria-label="English">EN</button>
            <button type="button" data-language="id" class="language-button border-l border-slate-200 px-2.5 py-2 dark:border-slate-700" aria-label="Bahasa Indonesia">ID</button>
          </div>
          <button id="theme" class="rounded-full border border-slate-200 p-2 dark:border-slate-700" aria-label="Change theme"></button>
        </div>
        <div class="flex items-center gap-3 md:hidden">
          <div class="inline-flex overflow-hidden rounded-lg border border-slate-200 text-xs font-semibold dark:border-slate-700" aria-label="${i18n.text('language')}">
            <button type="button" data-language="en" class="language-button px-2.5 py-2" aria-label="English">EN</button>
            <button type="button" data-language="id" class="language-button border-l border-slate-200 px-2.5 py-2 dark:border-slate-700" aria-label="Bahasa Indonesia">ID</button>
          </div>
          <button id="menu" aria-label="Open menu" aria-expanded="false">☰</button>
        </div>
      </nav>
      <div id="mobile-menu" class="hidden border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 md:hidden">
        <div class="flex flex-col gap-4">
          ${mobileLinks}
          <a class="font-semibold text-blue-600" href="CV-ATS-Eky-Fernanda.pdf" download>${i18n.text('cv')}</a>
          <button id="mobile-theme" class="w-fit rounded-full border border-slate-200 p-2 dark:border-slate-700" aria-label="Change theme"></button>
        </div>
      </div>`;
  }

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.querySelectorAll('#theme, #mobile-theme').forEach((button) => {
      button.textContent = isDark ? '☀' : '◐';
      button.setAttribute('aria-label', isDark ? 'Use light theme' : 'Use dark theme');
    });
  }

  function initializeTheme() {
    // Keep the previous key readable once, then use one global key everywhere.
    const savedTheme = localStorage.getItem('theme') ?? localStorage.getItem('portfolio-theme') ?? 'dark';
    applyTheme(savedTheme);
    document.querySelectorAll('#theme, #mobile-theme').forEach((button) => {
      button.addEventListener('click', () => applyTheme(root.classList.contains('dark') ? 'light' : 'dark'));
    });
  }

  function initializeMobileMenu() {
    const menuButton = document.querySelector('#menu');
    const mobileMenu = document.querySelector('#mobile-menu');
    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('hidden') === false;
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });
    mobileMenu.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        mobileMenu.classList.add('hidden');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  renderNavbar();
  document.querySelectorAll('[data-language]').forEach((button) => {
    const active = button.dataset.language === i18n.language();
    button.classList.toggle('bg-blue-600', active);
    button.classList.toggle('text-white', active);
    button.classList.toggle('text-slate-600', !active);
    button.classList.toggle('dark:text-slate-300', !active);
    button.setAttribute('aria-pressed', String(active));
    button.addEventListener('click', () => i18n.setLanguage(button.dataset.language));
  });
  initializeTheme();
  initializeMobileMenu();
})();
