import './sass/main.scss';
import menuCardsTpl from './templates/menu-cards.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuRef = document.querySelector('.js-menu');
const checkboxRef = document.querySelector('#theme-switch-toggle');

const cardMarkup = createCardMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', cardMarkup);

function createCardMarkup(items) {
  return menuCardsTpl(items);
}

checkboxRef.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  if (checkboxRef.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}

function saveTheme() {
  const currentTheme = localStorage.getItem('Theme');
  if (currentTheme === Theme.DARK) {
    document.body.classList.add(currentTheme);
    checkboxRef.checked = true;
  }
}

saveTheme();
