document.querySelector('.menu-button').addEventListener('click', () => {
  document.body.classList.add('app-menu-is-open');
});

document.querySelector('.app-menu-overlay').addEventListener('click', evt => {
  document.body.classList.remove('app-menu-is-open');
});
