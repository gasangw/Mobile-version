const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const headlineContainer = document.querySelector('.headline-container');

// eslint-disable-next-line no-use-before-define
hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  headlineContainer.classList.toggle('active');
}

const navLink = document.querySelectorAll('.nav-link');

// eslint-disable-next-line no-use-before-define
navLink.forEach((n) => n.addEventListener('click', closeMenu));

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  headlineContainer.classList.remove('active');
}
