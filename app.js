const $ = (selector) => document.querySelector(selector);

function renderHomePage() {
  $('#hero-kicker').textContent = portfolio.profile.kicker;
  $('#hero-title').innerHTML = portfolio.profile.headline;
  $('#hero-description').innerHTML = portfolio.profile.description
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join('');
  $('#hero-location').textContent = portfolio.location;
  $('#footer').textContent = `© ${portfolio.year} ${portfolio.name}. ${(window.portfolioI18n?.text ?? (() => 'Built with passion.'))('footer')}`;
}

function initializeBackToTopButton() {
  const topButton = $('#to-top');
  if (!topButton) return;

  addEventListener('scroll', () => topButton.classList.toggle('hidden', scrollY < 500));
  topButton.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));
}

renderHomePage();
initializeBackToTopButton();
