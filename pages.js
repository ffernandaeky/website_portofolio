const pageRenderers = {
  projects() {
    const projectGrid = document.querySelector('#project-grid');
    if (!projectGrid) return;

    projectGrid.innerHTML = portfolio.projects.map(renderProjectCard).join('');
  },

  experience() {
    const experienceList = document.querySelector('#experience-list');
    if (!experienceList) return;

    experienceList.innerHTML = portfolio.experience.map(renderExperienceSection).join('');
    setupExperienceReveal(experienceList);
  },

  contact() {
    const contactLinks = document.querySelector('#contact-links');
    if (!contactLinks) return;

    const t = window.portfolioI18n?.text ?? ((value) => value);
    const linkedIn = portfolio.social.find(([name]) => name === 'LinkedIn')?.[1];
    const github = portfolio.social.find(([name]) => name === 'GitHub')?.[1];
    const instagram = portfolio.social.find(([name]) => name === 'Instagram')?.[1];
    const cards = [
      { name: 'Email', value: portfolio.email, hint: t('contactEmailHint'), url: `mailto:${portfolio.email}` },
      { name: 'LinkedIn', value: 'linkedin.com/in/ekyfernanda', hint: t('contactLinkedInHint'), url: linkedIn },
      { name: 'GitHub', value: 'github.com/ffernandaeky', hint: t('contactGitHubHint'), url: github },
      { name: 'Instagram', value: '@ffernandaeky', hint: t('contactInstagramHint'), url: instagram },
    ];
    contactLinks.innerHTML = cards.map(renderContactCard).join('');

    const availabilityLocation = document.querySelector('#availability-location');
    if (availabilityLocation) {
      availabilityLocation.innerHTML = `${contactIcon('Location')}<span>${t('location')}</span><strong>${portfolio.location}</strong>`;
    }

    const badges = ['contactInternship', 'contactFullTime', 'contactFreelance', 'contactCollaboration', 'contactResearch', 'contactOpenSource'];
    document.querySelector('#availability-badges').innerHTML = badges.map((key) => `<span class="tag">${t(key)}</span>`).join('');
    setupContactReveal();
  },

  caseStudy() {
    const caseStudy = document.querySelector('#case');
    if (!caseStudy) return;

    const projectId = new URLSearchParams(location.search).get('id');
    const project = portfolio.projects.find(({ id }) => id === projectId) ?? portfolio.projects[0];

    document.title = `${project.title} — Case Study`;
    document.querySelector('#year').textContent = portfolio.year;
    caseStudy.innerHTML = renderCaseStudy(project);
  },
};

function renderProjectCard(project) {
  const t = window.portfolioI18n?.text ?? ((value) => value);
  const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('');

  return `<article class="project-card flex h-full flex-col">
    <img loading="lazy" class="aspect-[16/9] w-full object-cover" src="${project.image}" alt="${project.title}">
    <div class="flex flex-1 flex-col p-6">
      <p class="text-xs font-bold uppercase tracking-wider text-blue-600">${project.metric}</p>
      <h2 class="mt-3 text-xl font-bold text-slate-950 dark:text-white">${project.title}</h2>
      <p class="mt-2 text-sm leading-6">${project.desc}</p>
      <div class="mt-5 flex flex-wrap gap-2">${tags}</div>
      <a class="mt-auto inline-block pt-6 text-sm font-semibold text-blue-600" href="case-study.html?id=${project.id}">${t('viewDetails')}</a>
    </div>
  </article>`;
}

function renderExperienceSection({ section, items }) {
  return `<section class="experience-section experience-reveal">
    <h2 class="experience-section-title">${section}</h2>
    <div class="experience-timeline">${items.map(renderExperience).join('')}</div>
  </section>`;
}

function setupExperienceReveal(container) {
  const sections = container.querySelectorAll('.experience-reveal');
  if (!('IntersectionObserver' in window)) {
    sections.forEach((section) => section.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  sections.forEach((section) => observer.observe(section));
}

function certificateHref(position, organization = '') {
  const certificateByPosition = {
    'Google Data Studio': 'google-data-studio.pdf',
    'Microsoft Power BI': 'microsoft-power-bi.pdf',
    Tableau: 'tableau.pdf',
    JavaScript: 'javascript.pdf',
    'LKMM Participant': 'lkmm.pdf',
    'Peserta LKMM': 'lkmm.pdf',
  };
  const certificateByOrganization = {
    'PT PAL Indonesia': 'pt-pal-internship.pdf',
    'HIMIT PENS 2025': 'himit-chairman.pdf',
    'PKKMB × Technogear PENS 2024': 'technogear.pdf',
    'Dynamic Outbound HIMIT PENS 2024': 'dynamic-outbound.pdf',
    'KPU HIMIT PENS 2023': 'kpu-himit.pdf',
    'HIMIT PENS 2024': 'himit-junior-staff.pdf',
  };
  if (organization.includes('BMKG')) return 'bmkg-internship.pdf';
  if (organization.includes('Technogear')) return 'technogear.pdf';
  return certificateByOrganization[organization] || certificateByPosition[position] || '';
}

function renderExperience({ period, position, organization, description, skills }) {
  const periodMarkup = period ? `<p class="experience-period">${period}</p>` : '';
  const organizationMarkup = organization ? `<p class="experience-organization">${organization}</p>` : '';
  const skillsMarkup = skills.map((skill) => `<span class="tag">${skill}</span>`).join('');
  const certificate = certificateHref(position, organization);
  const certificateMarkup = certificate ? `<a class="certificate-link" href="assets/certificates/${certificate}" target="_blank" rel="noopener noreferrer">View certificate <span aria-hidden="true">↗</span></a>` : '';

  return `<article class="experience-item">
    <span class="experience-marker" aria-hidden="true"></span>
    <div class="experience-meta">${periodMarkup}</div>
    <div class="experience-content">
      <h3 class="experience-position">${position}</h3>
      ${organizationMarkup}
      <p class="experience-description">${description}</p>
      <div class="mt-5 flex flex-wrap gap-2">${skillsMarkup}</div>
      ${certificateMarkup}
    </div>
  </article>`;
}

function renderSocialLink([name, url]) {
  return `<a class="block text-sm text-blue-600" href="${url}" target="_blank" rel="noreferrer">${name} ↗</a>`;
}

function renderContactCard({ name, icon = name, value, hint, url }) {
  const isLink = Boolean(url);
  const target = url?.startsWith('mailto:') ? '' : ' target="_blank" rel="noreferrer"';
  const content = `
    <span class="contact-card-icon" aria-hidden="true">${contactIcon(icon)}</span>
    <span class="contact-card-label">${name}</span>
    <span class="contact-card-value">${value}</span>
    <span class="contact-card-hint">${hint}</span>
    ${isLink ? '<span class="contact-card-arrow" aria-hidden="true">&nearr;</span>' : ''}`;
  return isLink
    ? `<a class="contact-card" href="${url}"${target}>${content}</a>`
    : `<article class="contact-card">${content}</article>`;
}

function setupContactReveal() {
  const sections = document.querySelectorAll('.contact-reveal');
  if (!sections.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  document.body.classList.add('contact-motion-ready');
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  sections.forEach((section, index) => {
    if (index === 0) section.classList.add('is-visible');
    else observer.observe(section);
  });
}

function contactIcon(name) {
  const icons = {
    Email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>',
    LinkedIn: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3.5A1.7 1.7 0 1 1 5.2 7a1.7 1.7 0 0 1 0-3.5ZM3.7 8.3h3v12h-3v-12Zm4.9 0h2.9V10c.4-.8 1.5-2 3.6-2 3 0 4.1 1.9 4.1 5.2v7.1h-3v-6.7c0-1.6-.1-3-1.9-3-1.9 0-2.2 1.5-2.2 2.9v6.8h-3v-12Z"></path></svg>',
    GitHub: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.2-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1.1a9.7 9.7 0 0 1 5 0c2-1.4 2.8-1.1 2.8-1.1.5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.7 5 .4.3.7.9.7 1.8V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"></path></svg>',
    Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.4" cy="6.7" r=".85" fill="currentColor" stroke="none"></circle></svg>',
    Location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>',
  };
  return icons[name] || '';
}

function renderCaseStudy(project) {
  const t = window.portfolioI18n?.text ?? ((value) => value);
  if (project.caseLayout === 'dashboard' || ['dki-air-pollution-regression', 'online-game-web-scraping', 'quick-count-pilpres-2019', 'dashboard-tantangan-kerja-2022', 'obesity-level-classification', 'stroke-risk-classification', 'stroke-prediction-model-comparison', 'data-extraction-etl-pipeline', 'sumatra-rice-productivity-sur', 'youtube-comment-sentiment-analysis', 'east-java-rainfall-pycaret', 'east-java-rainfall-exponential-smoothing', 'youtube-agriculture-indobert'].includes(project.id)) return renderAirPollutionCaseStudy(project);

  const sections = [
    [t('problemSolved'), project.problem], [t('dataUsed'), project.dataset], [t('method'), project.method],
    [t('developmentProcess'), project.process], [t('result'), project.result], [t('technology'), project.tech],
    [t('challenge'), project.challenge], [t('keyTakeaway'), project.lesson],
  ];

  return `<p class="eyebrow">${t('projectCaseStudy')}</p>
    <h1 class="mt-3 max-w-3xl text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white">${project.title}</h1>
    <p class="mt-5 max-w-2xl text-lg leading-8">${project.desc}</p>
    <img class="mt-12 aspect-[2/1] w-full rounded-2xl object-cover shadow-soft" src="${project.image}" alt="${project.title}">
    <div class="mt-12 grid gap-12 lg:grid-cols-[1fr_2fr]">
      <aside>
        <p class="text-sm font-bold text-blue-600">${project.metric}</p>
        <div class="mt-5 flex flex-wrap gap-2">${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}</div>
      </aside>
      <div class="space-y-10">
        ${sections.map(([title, content]) => `<section><h2 class="text-2xl font-bold text-slate-950 dark:text-white">${title}</h2><p class="mt-3 leading-8">${content}</p></section>`).join('')}
      </div>
    </div>`;
}

function renderAirPollutionCaseStudy(project) {
  const t = window.portfolioI18n?.text ?? ((value) => value);
  const tags = project.tags.map((tag) => `<span class="case-tag">${tag}</span>`).join('');
  const facts = project.caseFacts ?? [
    ['DATASET', 'ISPU DKI Jakarta', 'Jakarta Open Data'],
    ['PERIODE', 'Tahun 2021', '11 variabel pengukuran'],
    ['FOKUS', 'CO → NO₂', 'Hubungan antar-polutan'],
  ];
  const sections = [
    ['01', t('background'), project.problem], ['02', t('dataUsed'), project.dataset], ['03', t('analysisMethod'), project.method],
    ['04', t('results'), project.result], ['05', t('challenge'), project.challenge],
  ];

  return `<div class="case-shell">
    <section class="case-hero">
      <div class="case-hero-copy">
        <p class="case-kicker"><span></span>${project.metric}</p>
        <h1>${project.title}</h1>
        <p class="case-lede">${project.desc}</p>
        <div class="case-tags">${tags}</div>
        <div class="case-facts">${facts.map(([label, value, note]) => `<div><span>${label}</span><strong>${value}</strong><small>${note}</small></div>`).join('')}</div>
      </div>
      <figure class="case-chart">
        <img src="${project.image}" alt="${project.visualAlt ?? 'Scatter plot CO dan NO₂ di DKI Jakarta pada 2021 dengan garis regresi linear'}">
        <figcaption><span>Gambar 01</span> ${project.visualCaption ?? 'Sebaran observasi CO dan NO₂ dengan garis regresi linear.'}</figcaption>
      </figure>
    </section>

    <div class="case-content">
      <aside class="case-sidebar">
        <p>${t('projectSummary')}</p>
        <dl>
          <div><dt>${t('role')}</dt><dd>${project.role ?? 'Data Analyst'}</dd></div>
          <div><dt>${t('tools')}</dt><dd>Python</dd></div>
          <div><dt>${t('model')}</dt><dd>${project.model ?? 'Linear Regression'}</dd></div>
        </dl>
        <div class="case-divider"></div>
        <p class="case-sidebar-label">${t('technology')}</p>
        <div class="case-tags">${tags}</div>
      </aside>
      <article class="case-article">
        ${sections.map(([number, title, content]) => `<section class="case-section"><div class="case-section-number">${number}</div><div><h2>${title}</h2><p>${content}</p></div></section>`).join('')}
        ${project.gallery?.length ? `<section class="case-gallery"><div class="case-section-number">06</div><div><h2>${t('supportingVisuals')}</h2><p>${t('galleryIntro')}</p><div class="case-gallery-grid">${project.gallery.map(([image, title, caption]) => `<figure><img src="${image}" alt="${title}"><figcaption><strong>${title}</strong><span>${caption}</span></figcaption></figure>`).join('')}</div></div></section>` : ''}
      </article>
    </div>
  </div>`;
}

const pageName = document.body.dataset.page;
pageRenderers[pageName]?.();
