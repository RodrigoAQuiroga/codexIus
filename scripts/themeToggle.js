export function setupThemeToggle(mainSelector) {
  const main = document.querySelector(mainSelector);

  const divContainer = document.createElement('div');
  divContainer.id = 'theme-toggle-container';
  main.insertBefore(divContainer, main.firstChild);

  const btnToggle = document.createElement('button');
  btnToggle.id = 'btn-theme-toggle';
  btnToggle.setAttribute('aria-label', 'Cambiar tema claro/oscuro');

  const btnTop = document.createElement('button');
  btnTop.id = 'btn-back-to-top';
  btnTop.textContent = '⬆️ Volver al principio';
  btnTop.setAttribute('aria-label', 'Volver al principio de la página');

  divContainer.appendChild(btnToggle);
  divContainer.appendChild(btnTop);

  const body = document.body;

  function updateButtonText() {
    if (body.classList.contains('dark-theme')) {
      btnToggle.textContent = '☀️ Modo Claro';
    } else {
      btnToggle.textContent = '🌙 Modo Oscuro';
    }
  }

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    body.classList.add('dark-theme');
  }

  updateButtonText();

  btnToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    updateButtonText();
  });

  btnTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
